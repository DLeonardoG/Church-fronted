import LoadingFallback from "@/core/components/loading";
import { ThemeProvider } from "@/core/components/theme-provider";
import MainLayout from "@/core/layouts/MainLayout";
import { lazy, Suspense } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import DepartmentPage from "./domains/Departaments/components/DepartamentPage";

// Lazy load of components
const Home = lazy(() => import("@/domains/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("@/domains/About").then(m => ({ default: m.About })));
const Events = lazy(() => import("@/domains/events").then(m => ({ default: m.Events })));
const Resources = lazy(() => import("@/domains/Resources").then(m => ({ default: m.Resources })));

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
              <About />
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
              <Resources />
            </Suspense>
          ),
        },
        {
        path: "/departamentos/:slug",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <DepartmentPage />
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
