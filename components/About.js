import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div class="hero">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div>
                            <h2>BLOCKCHAIN POWERED <span>GREEN</span> ENERGY INVESTING </ h2>
                            <p>Simple Future</p>
                        </div>
                        <div>
                            <img src="/util/img/banner.jpg" alt="People Power" />
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <p><strong>ABSTRACT</ strong></ p>
                                <p>People power will give our users the chance to own a part of green energy projects and to share in the profits of these projects.</p>
                                <p>   Users will be able to deposit crypto currency into a smart contract, when the smart contract reaches the desired level in GBP the tokens will be sold on an exchange and sent to the contractor charged with erecting the wind turbine (or other alternative project).
                                    The users that have donated to the project will be issued with a proportional share of the project tokens.
                                    We estimate that each project token will have a value of about £50.00.
                                    When the project is completed and begins to produce energy, the energy will be sold (and after expenses have been paid) the proceeds will be taken and exchanged into stable-coin tokens (most likely USDC, which is pegged to USD).
                                    The stable-coin tokens will then be deposited into a smart contract; that distributes the profits proportionally between the holders of the project tokens.
                                    We will start with a single project but eventually move to a platform (where others can post their own projects) and release our own rewards token.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }

}

export default About;
