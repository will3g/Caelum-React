import React, { Component } from 'react';

import Tweet from './tweet/Tweet.js';

const listaTweets = [
    'tweet1',
    'tweet2',
    'tweet3',
]

class Dashboard extends Component {

    render() {
        return (
            <div className="container">

                <div className="dashboard">
                    <div className="widget">
                        <form className="novoTweet">
                            <div className="novoTweet__editorArea">
                                <span className="novoTweet__status">0/140</span>
                                <textarea className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                            </div>
                            <button type="submit" className="novoTweet__envia">Tweetar</button>
                        </form>
                    </div>
                    <div className="widget">
                        <div className="trendsArea">
                            <h2 className="trendsArea__titulo widget__titulo">Trends Brasil</h2>
                            <ol className="trendsArea__lista">
                                <li><a href="/">#bagulhos</a></li>
                                <li><a href="/">#bagulheiros</a></li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="dashboard dashboard__centro">
                    <div className="widget">
                        <div className="tweetsArea">
                            {
                                listaTweets.map(conteudo => (
                                    <Tweet>
                                        {conteudo}
                                    </Tweet>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Dashboard;