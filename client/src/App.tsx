import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">{t("welcome")}</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => i18n.changeLanguage(i18n.language === "en" ? "pt" : "en")}
      >
        {i18n.language === "en" ? "Trocar para Português" : "Switch to English"}
      </button>
    </div>
  );
}

export default App;
