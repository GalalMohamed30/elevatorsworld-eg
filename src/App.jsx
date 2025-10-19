import { HelmetProvider } from "react-helmet-async";
import { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import HeroSection from "./pages/HeroSection";
import Root from "./pages/Root";
import PriceOfPageEG from "./components/PricesPage/PriceOfPageEG";
import PriceOfPageSA from "./components/PricesPage/PriceOfPageSA";
import LoadingComponents from "./components/Loading/LoadingComponents";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingComponents />
      ) : (
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<HeroSection />} />
              <Route path="price-eg" element={<PriceOfPageEG />} />
              <Route path="price-sa" element={<PriceOfPageSA />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </div>
  );
}

export default App;
