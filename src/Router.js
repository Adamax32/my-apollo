import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

import { FilmsPage } from "./pages/FilmsPage";
import { HomePage } from "./pages/HomePage";
import { StarshipPage } from "./pages/StarshipPage";
import { CharacterDetailPage } from "./pages/CharacterDetailPage";
import { StarshipDetailPage } from "./pages/SSDetailPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="films">
            <Route index element={<FilmsPage />} />
            <Route path=":id" element={<CharacterDetailPage />} />

          </Route>
          <Route path="starships" >
            <Route index element={<StarshipPage />} />
            <Route path=":id" element={<StarshipDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
