import React, { Fragment } from 'react'

const Header = () => {

    return (
        <Fragment>

            <header className="header">
                <div className="container">
                    <h1 className="header-titulo">
                        <a href="#">Lyrics Songs</a>
                    </h1>
                    {/* <nav className="cabecalhoPrincipal-nav">
                        <a className="cabecalhoPrincipal-nav-link" href="#">Home</a>
                        <a className="cabecalhoPrincipal-nav-link" href="#">Cursos</a>
                        <a className="cabecalhoPrincipal-nav-link" href="#">Sobre nós</a>
                        <a className="cabecalhoPrincipal-nav-link" href="#">Contato</a>
                        <a className="cabecalhoPrincipal-nav-link cabecalhoPrincipal-nav-link-app" href="#">Nosso APP</a>
                    </nav> */}
                </div>
            </header>


        </Fragment>
    )

}

export default Header