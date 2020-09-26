import React, { Component } from "react";

import '../App.css'
import { Link } from "react-router-dom";

/*
title, type: string, required
description, type: string
createdAt, type: Date, default: Date.now
slug, type: string, unique, required
sanitizedHtml, type: string, required

*/

class ArticleCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            description: "",
            createdAt: ""
        }
    }

    componentDidMount() {
        this.setState({
            title: this.props.title,
            author: this.props.author,
            description: this.props.description,
            createdAt: this.props.createdAt
        })
    }

    render() {
        const {title, description, author, createdAt} = this.state;

        return (
            <div className='article-body'>
                <Link to='/' style={{ textDecoration: 'none' }}><h2 className='article-title'>{title}</h2></Link>
                <p className='article-description'>{description}</p>
                <p className='article-author'>{author}</p>
                <p className='article-date'>{createdAt}</p>
            </div>
        );
    }
}

export default ArticleCard;