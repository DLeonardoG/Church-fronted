import { ModeToggle } from "@/core/components/mode-toggle"
import { LanguageToggle } from "@/core/components/language-selector"
import { useTranslation } from "react-i18next"


function Example() {
    const { t } = useTranslation();
    return (
        <div className="flex items-center justify-center min-h-screen">
            <h1 className="scroll-m-20 text-center text-8xl font-extrabold tracking-tight text-balance">
                {t("greeting")}
            </h1>
            <ModeToggle />
            <LanguageToggle />
        </div>
    )
}

export default Example