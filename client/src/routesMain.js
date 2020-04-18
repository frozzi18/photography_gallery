import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./components/home/HomePage";
import PhotosPage from "./components/photos/PhotosPage";
// import PhotoPage from "./components/photos/PhotoPage";

export default function RoutesMain() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* <Route path="/photos/:id" component={PhotoPage} /> */}
        {/* <Route path="/photos/:id" component={PhotoPage} /> */}
        <Route path="/photos" component={PhotosPage} />
      </Switch>
    </main>
  );
}
