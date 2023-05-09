import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { EN, RU, UZ } from "../locale";

const resources = {
  en: {
    translation: EN,
  },
  ru: {
    translation: RU,
  },
  uz: {
    translation: UZ,
  },
  // en: {
  //   translation: {
  //     greeting: {
  //       hello: "Hello React",
  //     },
  //   },
  // },
  // uz: {
  //   translation: {
  //     greeting: {
  //       hello: "Salom React",
  //     },
  //   },
  // },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: "uz",
    ns: ["transaltions"],
    supportedLngs: ["en", "uz", "ru"],
    debug: false,
    fallbackLng: "en",

    detection: {
      caches: ["cookie"],
    },
    resources,
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
  });

export default i18next;
