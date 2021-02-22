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
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <embed src="/util/whitepaper_people_power_defi.pdf" width="1205" height="1000" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }

}

export default About;
