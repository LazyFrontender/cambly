// import { useEffect } from "react";
import { Suspense } from "react";
import { Header, BasicModal } from "./components";
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
      <hr />
      <BasicModal />
    </Suspense>
  );
};

export default App;
