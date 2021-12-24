import React, { useState, useEffect } from 'react';

import {webLinks} from '../data.js'
import Fade from 'react-reveal/Fade';

export default function Articles() {

    const [articles, setArticles] = useState([])

    async function getFeed() {
        setArticles(webLinks)
    }

    useEffect(() => {
        if (window.safari !== undefined) {
            return undefined
        }
        getFeed()
    }, []);

    if (window.safari !== undefined) {
        return null
    }

    return (
        <div className="articles container-fluid section" name="writing">
            <Fade bottom>
                <h2 className="section-header">僕の留学ブログ/My Study Abroad Blog</h2>
            </Fade>
            <div className="section-body section-width top-bot-border-xs">
                {articles.map((article, index) => (
                    <Fade bottom key={index}>
                        <a href={article.guid} target="_blank" rel="noopener noreferrer" className="long-card">
                            <div className="long-card-body">
                                <h5 className="title">{article.title}</h5>
                                <p className="remarks">掲載日 {article.pubDate}</p>
                                <div className="remarks">栄陽子留学研究所</div>
                            </div>
                        </a>
                    </Fade>
                ))}
            </div>
        </div>
    )
}
