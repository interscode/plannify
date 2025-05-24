import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const RNLocalize = {
  getLocales: () => [{ languageCode: 'en' }]
};

const en = require('./langs/en.json');
const es = require('./langs/es.json');

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: RNLocalize.getLocales()[0].languageCode || 'en',
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'languageChanged',
      useSuspense: false,
    }
  });

export default i18n;