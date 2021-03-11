import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
                <div className="header">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="brand">
                                    <a href="/">
                                        <img src="util/img/logo.png" alt="Logo" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-10">
                                <div class="topbar">

                                    <div class="topbar-col">
                                        <a href="mailto:info@peoplepowerde.fi"><i class="fa fa-envelope"></i>info@peoplepowerde.fi</a>
                                    </div>
                                    <div class="topbar-col">
                                        <div class="topbar-social">
                                            <a href="https://twitter.com/peoplepowerdefi"><i class="fab fa-twitter"></i></a>
                                            <a href="https://t.me/joinchat/u8mpa_EuHGcyZWFk"><i class="fab fa-telegram"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="navbar navbar-expand-lg bg-light navbar-light">
                                    <a href="#" className="navbar-brand">MENU</a>
                                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                        <div className="navbar-nav ml-auto">
                                            <a href="/" className="nav-item nav-link">WHITEPAPER</a>
                                            <a href="/buy-ppd-tokens" className="nav-item nav-link active">BUY TOKENS</a>
                                            <a href="/news" className="nav-item nav-link">NEWS</a>
                                            <a href="/roadmap" className="nav-item nav-link">ROADMAP</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
    }
}

export default Menu;
