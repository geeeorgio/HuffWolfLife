export const STORAGE_KEYS = [
  'is_onboarding_completed',
  'saved_learn',
  'saved_world',
] as const;

export type StorageKey = (typeof STORAGE_KEYS)[number];
