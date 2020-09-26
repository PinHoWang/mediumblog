import React, { Component } from "react";
import '../App.css'

import logo from "./assets/temp_logo.png";

class Toolbar extends Component {
    render() {
        return (
            <div className='toolbar'>
                <a href="/">
                    <img src={logo} alt="logo" />{" "}
                </a>
                <ul>
                    <li><a href='/'>Blog</a></li>
                    <li><a href='/newblog'>Post</a></li>
                </ul>
            </div>
        );
    }
}

export default Toolbar;