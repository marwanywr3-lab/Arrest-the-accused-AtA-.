import { useSyncExternalStore } from 'react';
import '../assets/i18n.js';

export function useTranslation() {
  const i18n = globalThis.CaseMasterI18n;
  const language = useSyncExternalStore(i18n.subscribe, i18n.getLanguage, () => 'ar');
  return { language, t: i18n.t, setLanguage: i18n.setLanguage };
}
export const currentLanguage = () => globalThis.CaseMasterI18n.getLanguage();
