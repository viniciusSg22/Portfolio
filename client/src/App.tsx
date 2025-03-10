import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";

function App() {
  const { t, i18n } = useTranslation("common");

  const handleLanguageChange = (language: string) =>
    i18n.changeLanguage(language);

  //ToDo: useTranslation for two different JSON's should work:
  //const { t, i18n } = useTranslation(["home", "common"]);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">{t("welcome")}</h1>

      {/* Bug: "Teste" from home.json should work */}
      {/* <h2 className="text-3xl font-bold">{t("teste")}</h2> */}

      <div className="flex justify-center items-center space-x-6 p-4">
        <div
          className="cursor-pointer transition-transform transform hover:scale-110"
          onClick={() => handleLanguageChange("pt")}
        >
          <Flag
            code="BR"
            alt="Brasil"
            className="w-16 h-12 hover:scale-110 transition-transform"
          />
        </div>
        <div
          className="cursor-pointer transition-transform transform hover:scale-110"
          onClick={() => handleLanguageChange("en")}
        >
          <Flag
            code="US"
            alt="Estados Unidos"
            className="w-16 h-12 hover:scale-110 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
