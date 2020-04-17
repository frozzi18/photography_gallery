import React, { Component } from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export class footer extends Component {
  render() {
    return (
      <div className="footer-basic">
        <footer className="bg-primary">
          <div className="social pt-4">
            <a href="/#">
              <i className="icon ion-social-snapchat">
                <FaFacebookF />
              </i>
            </a>
            <a href="/#">
              <i className="icon ion-social-snapchat">
                <FaTwitter />
              </i>
            </a>
            <a href="/#">
              <i className="icon ion-social-snapchat">
                <FaInstagram />
              </i>
            </a>
            <a href="/#">
              <i className="icon ion-social-snapchat">
                <FaYoutube />
              </i>
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/#">Home</a>
            </li>
            <li className="list-inline-item">
              <a href="/#">Services</a>
            </li>
            <li className="list-inline-item">
              <a href="/#">About</a>
            </li>
            <li className="list-inline-item">
              <a href="/#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="/#">Privacy Policy</a>
            </li>
          </ul>
          <p className="copyright pb-4">Frozzi © 2020</p>
        </footer>
      </div>
    );
  }
}

export default footer;
