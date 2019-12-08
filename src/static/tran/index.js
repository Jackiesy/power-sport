import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources"


const defaultLang = "cn";

i18n
  .use(initReactI18next)
  .init({
    resources,

    lng: defaultLang,

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;