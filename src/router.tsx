import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";


const FavoritesPages = lazy(() => import("./views/FavoritesPages"));
const IndexPage = lazy(() => import("./views/IndexPage"));
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={
            <Suspense fallback={'Cargando...'}>
              <IndexPage />
            </Suspense>
          } index></Route>
          <Route path="/favoritos" element={
            <Suspense fallback={'Cargando...'}>
              <FavoritesPages />
            </Suspense>
          }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
