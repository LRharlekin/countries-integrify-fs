import React from "react";

import SearchInput from "./Countries/SearchInput";
import CountriesList from "./Countries/CountriesList";

export default function CountriesPage() {
  return (
    <div>
      <SearchInput />
      <CountriesList />
    </div>
  );
}
