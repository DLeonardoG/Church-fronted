import LoadingFallback from "@/core/components/loading";
import { ThemeProvider } from "@/core/components/theme-provider";
import MainLayout from "@/shared/layouts/MainLayout";
import { lazy, Suspense } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

// Lazy load of components
const Home = lazy(() => import("@/domains/Home").then(m => ({ default: m.Home })));
const Nosotros = lazy(() => import("@/features/pages/nosotros"));
const Events = lazy(() => import("@/domains/events").then(m => ({ default: m.Events })));
const Recursos = lazy(() => import("@/features/pages/recursos"));

function App() {
  const router = createHashRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/nosotros",
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <Nosotros />
            </Suspense>
          ),
        },
        {
          path: "/eventos",
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <Events />
            </Suspense>
          ),
        },
        {
          path: "/recursos",
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <Recursos />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
