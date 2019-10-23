import React, { useState } from 'react'

import '../css/novoTweet.css';

import {
    Cabecalho,
    NavMenu,
    Dashboard,
    Widget,
    TrendsArea,
    Tweet
} from '../components/index.js'


export function Home() {

    const [ textoTweet, setTextoTweet ] = useState("");

    const [ listaTweets, setListaTweets ] = useState([]);

    function validaTweet(event) {
        const $textArea = event.target;
        setTextoTweet($textArea.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        setListaTweets([ textoTweet, ...listaTweets ])
    }

    const invalidTweet = textoTweet.length > 140;
    const statusClass = "novoTweet__status " + (invalidTweet ? "novoTweet__status--invalido" : "");

    return (
        <>
            <Cabecalho>
                <NavMenu user="will3g"></NavMenu>
            </Cabecalho>

            <div className="container">
                <Dashboard>
                    <Widget>
                        <form className="novoTweet" onSubmit={ onFormSubmit }>
                            <div className="novoTweet__editorArea">
                                <span className={ statusClass }>{ textoTweet.length }/140</span>
                                <textarea className="novoTweet__editor" placeholder="O que está acontecendo?" onChange={ validaTweet }></textarea>
                            </div>
                            <button disabled={ invalidTweet } type="submit" className="novoTweet__envia">Tweetar</button>
                        </form>
                    </Widget>
                    <Widget>
                        <TrendsArea/>
                    </Widget>
                </Dashboard>
                <Dashboard posicao="centro">
                    <Widget>
                        <div className="tweetsArea">
                            {
                                listaTweets.map((item, key) => (
                                    <Tweet usuario="will3g" qtdLikes={ textoTweet.length } key={ key }>
                                        {item}
                                    </Tweet>
                                ))
                            }
                        </div>
                    </Widget>
                </Dashboard>
            </div>
        </>
    )
}