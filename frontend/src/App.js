import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import Gallery from "./components/gallery/gallery";
import Footer from "./components/footer/footer";

// import AddPhoto from "./components/add-photo.component";
// import Photo from "./components/photo.component";
// import PhotosList from "./components/photo-gallery.component";

function App() {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
