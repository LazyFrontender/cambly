import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
export const Header = () => {
  const { t, i18n } = useTranslation("translation");
  return (
    <div>
      <h1>Header</h1>
      <p>{t("header-ielts")}</p>
      <p>{t("header-cefr")}</p>
      <p>{t("header-about")}</p>
      <p>{t("promo-title")}</p>
      <p>{t("promo-subtitle")}</p>
      <p>{t("promo-btn")}</p>
      <Button
        sx={{ m: 1 }}
        variant="contained"
        onClick={() => i18n.changeLanguage("uz")}
      >
        UZ
      </Button>
      <Button
        sx={{ m: 1 }}
        variant="contained"
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </Button>
      <Button
        sx={{ m: 1 }}
        variant="contained"
        onClick={() => i18n.changeLanguage("ru")}
      >
        RU
      </Button>
    </div>
  );
};
