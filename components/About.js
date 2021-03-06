import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="hero">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div>
                            <h1 style={{paddingBottom:20},{textAlign: 'center'}}>
                                BLOCKCHAIN POWERED FRACTIONAL INVESTMENT<br /> IN <span>GREEN</span> ENERGY PROJECTS
                            </ h1>
                        </div>
                        <div>
                            <img src="/util/img/banner.jpg" alt="People Power" />
                            <div className="iframe-container">
                                <iframe className="responsive-iframe" src="https://drive.google.com/file/d/1FWx6xiNwNP5NNC1XEnBNcSK7AO0o_0Qo/preview"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }

}

export default About;
