
import React, { Component } from "react";
import '../App.css'

import Toolbar from "../components/Toolbar";
import Editor from "../components/Editor";

class NewBlog extends Component {
    render() {
        return (
            <div className='newblog'>
                <div><Toolbar /></div>
                <div className='editor'>
                    <Editor />
                </div>
            </div>
        );
    }
}

export default NewBlog;