import { NextResponse } from 'next/server';
import { getAccessToken } from '@/lib/quran-api';

const BASE_URL = process.env.QF_ENV === 'production'
  ? 'https://apis.quran.foundation/content/api/v4'
  : 'https://apis-prelive.quran.foundation/content/api/v4';

// English Tafsir IDs available from Quran Foundation API
// 169 = Ibn Kathir (Abridged) [English], 168 = Ma'arif al-Qur'an [English]
const TAFSIR_IDS: Record<string, number> = {
  'ibn-kathir': 169,
  'maarif': 168,
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const verseKey = searchParams.get('verseKey');
    const tafsirSlug = searchParams.get('tafsir') || 'ibn-kathir';

    if (!verseKey || !/^\d+:\d+$/.test(verseKey)) {
      return NextResponse.json({ error: 'Invalid or missing verseKey parameter' }, { status: 400 });
    }

    const tafsirId = TAFSIR_IDS[tafsirSlug] || 169;

    // 1. Try authenticated Quran Foundation API
    try {
      const token = await getAccessToken();
      const response = await fetch(
        `${BASE_URL}/verses/by_key/${verseKey}?tafsirs=${tafsirId}&fields=text_uthmani`,
        {
          headers: {
            'x-auth-token': token,
            'x-client-id': process.env.QF_CLIENT_ID || '',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const tafsirs = data.verse?.tafsirs || [];
        if (tafsirs.length > 0) {
          return NextResponse.json({
            verseKey,
            tafsirId,
            tafsirName: tafsirSlug === 'maarif' ? "Ma'arif al-Qur'an" : 'Ibn Kathir (Abridged)',
            text: tafsirs[0].text || '',
          });
        }
      }
    } catch (authErr) {
      console.warn('Authenticated Tafsir API failed, trying public backup:', authErr);
    }

    // 2. Backup: public Quran.com API
    try {
      const [chapter, verse] = verseKey.split(':');
      const backupUrls = [
        `https://api.quran.com/api/v4/tafsirs/${tafsirId}/by_ayah/${chapter}/${verse}`,
        `https://api.quran.com/api/v4/verses/by_key/${verseKey}?tafsirs=${tafsirId}&fields=text_uthmani`,
      ];

      for (const url of backupUrls) {
        const backupRes = await fetch(url);
        if (backupRes.ok) {
          const backupData = await backupRes.json();

          // Handle /tafsirs/{id}/by_ayah format
          if (backupData.tafsir?.text) {
            return NextResponse.json({
              verseKey,
              tafsirId,
              tafsirName: tafsirSlug === 'maarif' ? "Ma'arif al-Qur'an" : 'Ibn Kathir (Abridged)',
              text: backupData.tafsir.text,
            });
          }

          // Handle /verses/by_key?tafsirs= format
          const tafsirs = backupData.verse?.tafsirs || [];
          if (tafsirs.length > 0 && tafsirs[0].text) {
            return NextResponse.json({
              verseKey,
              tafsirId,
              tafsirName: tafsirSlug === 'maarif' ? "Ma'arif al-Qur'an" : 'Ibn Kathir (Abridged)',
              text: tafsirs[0].text,
            });
          }
        }
      }
    } catch (backupErr) {
      console.error('Backup Tafsir API failed:', backupErr);
    }

    return NextResponse.json(
      { error: 'Tafsir not available for this verse at this time.' },
      { status: 404 }
    );
  } catch (error) {
    console.error('Tafsir route error:', error);
    return NextResponse.json({ error: 'Failed to fetch tafsir' }, { status: 500 });
  }
}
