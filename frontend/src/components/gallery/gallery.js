import React, { Component } from "react";
import "./gallery.css";

export class gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: [
        {
          id: 1,
          link_image: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        },
        {
          id: 2,
          link_image: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        },
        {
          id: 3,
          link_image: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        },
        {
          id: 4,
          link_image: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        },
        {
          id: 5,
          link_image: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        },
        {
          id: 6,
          link_image: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        },
        {
          id: 7,
          link_image: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        },
        {
          id: 8,
          link_image: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        },
        {
          id: 9,
          link_image: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        },
        {
          id: 10,
          link_image: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        },
        {
          id: 11,
          link_image: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        },
        {
          id: 12,
          link_image: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        },
        {
          id: 13,
          link_image: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        },
      ],
    };
  }
  render() {
    return (
      // <div classNameName="px-3">
      //   <h1 classNameName="font-weight-light text-center text-lg-center mt-5 mb-0">
      //     Thumbnail Gallery
      //   </h1>

      //   <hr classNameName="mt-2 mb-5" />
      //   <div classNameName="gallery-block compact-gallery">
      //     {this.state.url.map((item, key) => (
      //       <div classNameName="col-lg-3 col-md-4 col-6">
      //         <a href="/#" className="d-block mb-4 h-100">
      //           <img
      //             key={item.id}
      //             classNameName="img-fluid img-thumbnail"
      //             src={item.link_image}
      //             alt=""
      //           />
      //         </a>
      //       </div>
      //     ))}
      //   </div>
      // </div>

      <section className="gallery-block compact-gallery">
        {/* <div className="container-fluid"> */}
        <div className="row no-gutters">
          {this.state.url.map((item, key) => (
            <div
              key={item.id}
              className="col-lg-3 col-md-4 col-sm-6 col-12 item zoom-on-hover"
            >
              <a className="lightbox" href="../img/image1.jpg">
                <img
                  className="img-fluid image center"
                  src={item.link_image}
                  alt=""
                />
                <span className="description">
                  <span className="description-heading">Lorem Ipsum</span>
                  <span className="description-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quam urna.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </span>
                </span>
              </a>
            </div>
          ))}
        </div>
        {/* </div> */}
      </section>
    );
  }
}

export default gallery;
