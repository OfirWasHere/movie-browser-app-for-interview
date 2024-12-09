import React from "react";
import HomePage from "../HomePage/HomePage";
import { Outlet, useOutlet } from "react-router-dom";
import KeyboardNavigation from "../../KeyboardNavigation/KeyboardNavigation";

function Root() {
  const outlet = useOutlet();
  return (
    <div>
      <KeyboardNavigation>
        {outlet ? <Outlet /> : <HomePage />}
      </KeyboardNavigation>
    </div>
  );
}

export default Root;
