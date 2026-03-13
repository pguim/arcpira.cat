import { defaultLang } from "./config";
import ca from "./translations/ca";
import es from "./translations/es";
import en from "./translations/en";
import type { languagesType } from "./types";

const translations = { ca, es, en };

export function getLang (lang: languagesType) {
  return translations[lang] || translations[defaultLang];
}