// import { useEffect } from "react";
import { Suspense } from "react";
import { Header, TextEffect, ToastifyComp, Clipboard } from "./components";
import { useTranslation } from "react-i18next";
export const App = () => {
  const { t } = useTranslation("translation");
  // useEffect(() => {
  //   const lng = navigator.language;
  //   i18n.changeLanguage(lng);
  // }, []);
  const lng = navigator.language;
  return (
    <Suspense fallback="loading">
      <h2>{t("login")}</h2>
      <span>Browser Language: {lng}</span>
      <Header />
      <TextEffect />
      <ToastifyComp />
      <Clipboard />
      
    </Suspense>
  );
};

export default App;
