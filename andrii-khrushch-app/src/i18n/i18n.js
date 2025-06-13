import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEn from '../localizations/en/translation.json';
import translationUk from '../localizations/uk/translation.json';


const availableLanguages = ['en', 'uk', 'it'];

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: availableLanguages,   
    fallbackLng: 'en',   
    lng: 'en',      
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources:{ 
        en:{
            translation: translationEn
        },
        uk: {
            translation: translationUk
        }
    },
    backend: {
      loadPath: '/localizations/{{lng}}/translation.json',
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;