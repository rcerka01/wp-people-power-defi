import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div class="hero">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div>
                            <h2 style={{paddingBottom:20}}>BLOCKCHAIN POWERED <span>GREEN</span> ENERGY INVESTING </ h2>
                        </div>
                        <div>
                            <img src="/util/img/banner.jpg" alt="People Power" />
                            <div class="iframe-container">
                                <iframe class="responsive-iframe" src="https://drive.google.com/file/d/1FWx6xiNwNP5NNC1XEnBNcSK7AO0o_0Qo/preview"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }

}

export default About;
