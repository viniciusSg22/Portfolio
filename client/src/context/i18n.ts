import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import common_en from "../locales/en/common.json";
import common_pt from "../locales/pt/common.json";
import home_en from "../locales/en/home.json";
import home_pt from "../locales/pt/home.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: common_en,
        home: home_en,
      },
      pt: {
        common: common_pt,
        home: home_pt,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
