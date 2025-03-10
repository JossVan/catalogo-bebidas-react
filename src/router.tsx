import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import FavoritesPages from "./views/FavoritesPages";
import Layout from "./layouts/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index></Route>
          <Route path="/favoritos" element={<FavoritesPages />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
