import React, { useRef, Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Cabecalho } from '../../components/Cabecalho/Cabecalho.js'
import { Widget } from '../../components/Widget/Widget.js'

import * as LoginService from '../../model/services/LoginService.js';

import './loginPage.css'

function LoginPage(props) {
    const [isValid, setIsValid] = useState(true);

    const $inputLogin = useRef(null);
    const $inputSenha = useRef(null);

    const statusClassInvalid = "loginPage__input " + (!isValid ? "loginPage__invalido" : "");
    const backgrounClassInvalid = "loginPage " + (!isValid ? "loginPage__background_invalido" : "");

    const isAutenticado = LoginService.isAutenticado();

    function onFormSubmit(event) {
        event.preventDefault();

        const usuario = $inputLogin.current.value;
        const senha = $inputSenha.current.value;

        const isValidSubmit = usuario.length !== 0 && senha.length !== 0;

        setIsValid(isValidSubmit);

        if (isValidSubmit) {
            LoginService.logar(usuario, senha)
                .then(() => props.history.push("/"))
                .catch(err => setIsValid(false));
        }
    }


    const $paginaLogin = (
        <Fragment>
            <Cabecalho />
            <div className={backgrounClassInvalid}>
                <div className="container">
                    <Widget>
                        <h2 className="loginPage__title">Seja bem vindo!</h2>
                        <form className="loginPage__form" action="/" onSubmit={onFormSubmit}>
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="login">Login</label>
                                <input ref={$inputLogin} className={statusClassInvalid} type="text" id="login" name="login" />
                            </div>
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="senha">Senha</label>
                                <input ref={$inputSenha} className={statusClassInvalid} type="password" id="senha" name="senha" />
                            </div>
                            {
                                !isValid
                                    ? <div className="loginPage__errorBox">
                                        Usuário ou senha inválido!
                                </div> : ''
                            }
                            <div className="loginPage__inputWrap">
                                <button className="loginPage__btnLogin" type="submit">
                                    Logar
                                </button>
                            </div>
                        </form>
                    </Widget>
                </div>
            </div>
        </Fragment>
    )

    return (
        <Fragment>
            {!isAutenticado
                ? $paginaLogin
                : <Redirect to="/" />
            }
        </Fragment>
    )
}


export { LoginPage }