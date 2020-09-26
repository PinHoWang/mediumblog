import React, { Component } from "react";
import "../App.css"

import Toolbar from "./Toolbar";
import ArticleCard from "./ArticleCard";

const articles = [
    {
        title: 'Introduction to Machine Learning',
        author: 'Jimmy Wang',
        description: "This is description.",
        createdAt: "Oct 8, 2019",
        contents: "This is content."
    },
    {
        title: 'Introduction to Machine Learning 2',
        author: 'Jeff Lin',
        description: "This is description.",
        createdAt: "Oct 8, 2019",
        contents: "This is content."
    },
    {
        title: 'Introduction to Machine Learning 3',
        author: 'Jack Wang',
        description: "This is description.",
        createdAt: "Oct 8, 2019",
        contents: "This is content."
    }
]

const popularArticles = [
    {
        title: 'Introduction to Machine Learning',
        author: 'Jimmy Wang',
        description: "This is description.",
        createdAt: "Oct 8, 2019",
        contents: "This is content."
    },
    {
        title: 'Introduction to Machine Learning 2',
        author: 'Jeff Lin',
        description: "This is description.",
        createdAt: "Oct 8, 2019",
        contents: "This is content."
    },
    {
        title: 'Introduction to Machine Learning 3',
        author: 'Jack Wang',
        description: "This is description.",
        createdAt: "Oct 8, 2019",
        contents: "This is content."
    }
]

class Blog extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                <div className="articles-lastest">
                    <h1>Latest Articles</h1>
                    <ul>
                        {articles.map((value, index) => {
                            return (
                                <ArticleCard 
                                    title={value.title}
                                    author={value.author}
                                    description={value.description}
                                    createdAt={value.createdAt}
                                    contents={value.contents}
                                />
                            )
                        })}
                     </ul>
                </div>
                <div className="articles-popular">
                    <h1>Popular Articles</h1>
                    <ul>
                        {popularArticles.map((value, index) => {
                            return (
                                <ArticleCard
                                    title={value.title}
                                    author={value.author}
                                    description={value.description}
                                    createdAt={value.createdAt}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Blog;