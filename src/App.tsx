import { ThemeProvider } from "@/core/components/theme-provider"
import { ModeToggle } from "@/core/components/mode-toggle"
import { LanguageToggle } from "@/core/components/language-selector"
import { useTranslation } from "react-i18next"

function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="scroll-m-20 text-center text-8xl font-extrabold tracking-tight text-balance">
          {t("greeting")}
        </h1>
      <ModeToggle />
      <LanguageToggle />


      </div>
      {/* <Home /> */}
    </ThemeProvider>
  )
}

export default App