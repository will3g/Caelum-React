import React, { useState, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import * as LoginService from '../model/services/LoginService.js';

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

    const [textoTweet, setTextoTweet] = useState("");
    const [listaTweets, setListaTweets] = useState([]);

    const isAutenticado = LoginService.isAutenticado();

    function validaTweet(event) {
        const $textArea = event.target;
        setTextoTweet($textArea.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        setListaTweets([textoTweet, ...listaTweets])
    }

    const invalidTweet = textoTweet.length > 140;
    const statusClass = "novoTweet__status " + (invalidTweet ? "novoTweet__status--invalido" : "");

    const $pagina = (
        <Fragment>
            <Cabecalho>
                <NavMenu user="will3g"></NavMenu>
            </Cabecalho>

            <div className="container">
                <Dashboard>
                    <Widget>
                        <form className="novoTweet" onSubmit={onFormSubmit}>
                            <div className="novoTweet__editorArea">
                                <span className={statusClass}>{textoTweet.length}/140</span>
                                <textarea className="novoTweet__editor" placeholder="O que está acontecendo?" onChange={validaTweet}></textarea>
                            </div>
                            <button disabled={invalidTweet} type="submit" className="novoTweet__envia">Tweetar</button>
                        </form>
                    </Widget>
                    <Widget>
                        <TrendsArea />
                    </Widget>
                </Dashboard>
                <Dashboard posicao="centro">
                    <Widget>
                        <div className="tweetsArea">
                            {
                                listaTweets.map((item, key) => (
                                    <Tweet usuario="will3g" qtdLikes={2} key={key}>
                                        {item}
                                    </Tweet>
                                ))
                            }
                        </div>
                    </Widget>
                </Dashboard>
            </div>
        </Fragment>

    )

    return (
        <Fragment>
            {isAutenticado
                ? $pagina
                : <Redirect to="/login" />
            }
        </Fragment>
    )
}