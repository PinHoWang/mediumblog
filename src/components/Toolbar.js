import React, { Component } from "react";
import "../App.css";

import logo from "./assets/temp_logo.png";
import photo from "./assets/photo.png";

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <div className="toolbar-left">
          <a href="/">
            <img src={logo} alt="logo" />{" "}
          </a>
          <span>Skunk.ai Researcher Blog</span>
          {/* <ul>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/newblog">Post</a>
            </li>
          </ul> */}

        </div>
        <div className="toolbar-right">
          <img src={photo} alt="profile" />{" "}
        </div>
      </div>
    );
  }
}

export default Toolbar;
