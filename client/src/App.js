import React from "react";
import RoutesMain from "./routesMain";
import Header from "./components/common/Header";

import Form from "./components/common/Form";

// import PhotoApi from "./api/PhotoApi";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <RoutesMain />
      {/* <PhotoApi /> */}
    </div>
  );
}

export default App;
