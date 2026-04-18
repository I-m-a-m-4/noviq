import { NextResponse } from 'next/server';
import { getRandomVerse, getVerseContent } from '@/lib/quran-api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const verseKey = searchParams.get('verseKey');

  try {
    let verse;
    if (verseKey) {
      verse = await getVerseContent(verseKey);
    } else {
      verse = await getRandomVerse();
    }

    if (!verse) {
      return NextResponse.json({ error: 'Verse not found' }, { status: 404 });
    }

    return NextResponse.json(verse);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
