import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  return (
    <div className="App">
      <Navbar />
      {selectedCountry ? <CountryDetailPage /> : <CountriesPage />}
    </div>
  );
}

export default App;
