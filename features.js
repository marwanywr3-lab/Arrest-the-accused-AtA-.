import { useSyncExternalStore } from 'react';
import '../assets/features.js';

export const features = globalThis.CaseMasterFeatures;
export function useLocalDraft(caseId, field) {
  const key = features.draftKey(caseId, field);
  const value = useSyncExternalStore(features.subscribe, () => features.readDraft(key), () => '');
  return [value, next => features.setDraft(key, next)];
}
export function useAdvisorPreferences() {
  return useSyncExternalStore(features.subscribe, features.getPreferences, features.getPreferences);
}
