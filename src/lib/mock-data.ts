export interface User {
  id: string;
  name: string;
  email: string;
  niyyah: string;
  streak: number;
  lastActiveDate: string;
  circleId?: string;
  dailyCommitment: number; // in minutes
  reminderTime: string;
}

export interface Circle {
  id: string;
  name: string;
  members: string[];
  dailyStatus: Record<string, boolean>;
}

export interface Reflection {
  id: string;
  userId: string;
  verseKey: string;
  text: string;
  createdAt: string;
}

export const MOCK_USER: User = {
  id: 'user_1',
  name: 'Abdullah',
  email: 'abdullah@example.com',
  niyyah: 'Seeking Guidance',
  streak: 5,
  lastActiveDate: '2024-05-19',
  circleId: 'circle_1',
  dailyCommitment: 5,
  reminderTime: '08:00',
};

export const MOCK_CIRCLE: Circle = {
  id: 'circle_1',
  name: 'Faith Seekers',
  members: ['user_1', 'user_2', 'user_3', 'user_4'],
  dailyStatus: {
    'user_1': false,
    'user_2': true,
    'user_3': true,
    'user_4': false,
  },
};

export const MOCK_MEMBERS_DATA: Record<string, { name: string; avatar: string }> = {
  'user_1': { name: 'Abdullah', avatar: 'https://picsum.photos/seed/1/100/100' },
  'user_2': { name: 'Sarah', avatar: 'https://picsum.photos/seed/2/100/100' },
  'user_3': { name: 'Omar', avatar: 'https://picsum.photos/seed/3/100/100' },
  'user_4': { name: 'Fatima', avatar: 'https://picsum.photos/seed/4/100/100' },
};
