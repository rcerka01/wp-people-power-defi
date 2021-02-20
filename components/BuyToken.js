import React, { Component } from 'react';

class BuyToken extends Component {

    render() {
        return (
        <div>
            <div>
                <img src="/util/img/banner.jpg" alt="People Power" />
            </div>
            <div class="single">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            
                            <h2 class="section-title">Buy PPD tokens </h2>
                            
                            <p>
                                Lorem ipsum dolor sit amet, posuere leo elit id augue. Donec ullamcorper tortor et tellus convallis maximus.
                                Lorem ipsum dolor sit amet, posuere leo elit id augue. Donec ullamcorper tortor et tellus convallis maximus.
                            </p>

                            <div class="alert alert-info" role="alert"style={{textAlign: 'center'}} >
                                <strong>Price: 1.23 xDAI </strong><br />
                                <strong>Total (hard cap):</strong> 54545000000000 / <strong>Available:</strong> 464564566666666 <br />
                                <a href="https://blockscout.com/poa/sokol/address/0x20013c256Af08187B86DDFaDa43B6D34987910C4/transactions"
                                 target="_blank">0x20013c256Af08187B86DDFaDa43B6D34987910C4</a>
                            </div>

                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: 45 + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>

                            <hr />
                            <br />

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><img src="util/img/coin.png" width="35" /></span>
                                <input id="inputlg" class="form-control form-control-lg" type="number"  min="1" pattern="[0-9]" placeholder="Amount of PPD" aria-label="Amount PPD" aria-describedby="basic-addon1" />
                            </div>

                            <div style={{marginTop:10 +'px'}} class="form-group">
                                <div class="col-sm-12 controls">
                                    <a id="btn-buy" href="#" class="btn btn-primary btn-lg">Buy PPD (ICO) Tokens</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}

export default BuyToken;
