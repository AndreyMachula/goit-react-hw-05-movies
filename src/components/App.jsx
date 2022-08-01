import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {ThreeDots} from "react-loader-spinner";
import Container from "./Container";
import Navigation from "./Navigation";
import NotFound from "./NotFound";

const HomePage = lazy(() =>
  import("./HomePage" /* webpackChunkName: 'home-page' */)
);
const MoviesPage = lazy(() =>
  import("./MoviesPage" /* webpackChunkName: 'movies-page' */)
);
const MovieDetailsPage = lazy(() =>
  import("./MovieDetailsPage" /* webpackChunkName: 'details-page' */)
);

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense
        fallback={
          <ThreeDots
            type="ThreeDots"
            color="#2196f3"
            height={70}
            width={70}
            timeout={2000}
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:slug/*" element={<MovieDetailsPage />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;