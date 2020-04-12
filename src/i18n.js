import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

const fallbackLng = ["it"];
const availableLanguages = ["it"];

i18n
  .use(Backend) // carica translation -> vedi /public/locales.

  .use(initReactI18next) // passo  i18n instance a react-i18next.

  .init({
    lng:'it',
    returnObjects:true,
    fallbackLng, // fallback se no set lang vedi sopra
    debug: false, // disattivo console.log
    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  }).then(() => {
      return null
})

export default i18n;
