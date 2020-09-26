
import React, { Component } from 'react'
import ReactQuilla from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';
// import 'react-quill/dist/quill.core.css';

class Editor extends Component {
    render() {
        return (
            <div>
                <ReactQuilla theme='snow'/>
                <br />
                <button type='submit'>Submit</button>
            </div>
            
            
        )
    }
    
}

export default Editor;