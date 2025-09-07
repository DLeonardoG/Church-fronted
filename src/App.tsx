import { ThemeProvider } from "@/core/components/theme-provider"

import { Button } from "@/core/components/ui/button"
import { ModeToggle } from "@/core/components/mode-toggle"

function App() {

  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Button>holi</Button>
      <ModeToggle></ModeToggle>
    </ThemeProvider>
  )
}

export default App
