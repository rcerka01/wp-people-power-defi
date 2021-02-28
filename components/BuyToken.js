import React, { Component } from 'react';
import blockchain from '../blockchain/factory';

class BuyToken extends Component {

    UNSAFE_componentWillMount() {
        this.accessBlokchain();
    }

    async accessBlokchain() {
        const name = await blockchain.ppt.methods.name().call();
        const tokenPrice = await blockchain.ppts.methods.tokenPrice().call();
        const totalSupply = await blockchain.ppt.methods.totalSupply().call();

        const tokensSold = await blockchain.ppts.methods.tokensSold().call();
        const tokenContract = await blockchain.ppts.methods.tokenContract().call();

        const tokensAllocated = 10000000;
        
        //const accounts = blockchain.accounts();
        
        this.setState({name: name});
        this.setState({tokenPrice: tokenPrice});
        this.setState({totalSupply: totalSupply});
        this.setState({tokensSold: tokensSold});
        this.setState({tokenContract: tokenContract});
        this.setState({tokensAllocated: tokensAllocated});
        this.setState({progress: 100 * tokensSold / tokensAllocated});
        //this.setState({account: accounts[0]});
    }

    constructor(props) {
        super(props);
        this.state = {name: ''}
        this.state = {natokenPriceme: ''}
        this.state = {totalSupply: ''}
        this.state = {tokensSold: ''}
        this.state = {tokenContract: ''}
        this.state = {tokensAllocated: ''}
        this.state = {progress: ''}
        //this.state = {account: ''}
    }

    render() {
        return (
        <div>
            <div>
                <img src="/util/img/banner.jpg" alt="People Power" />
            </div>
            <div className="single">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            
                            <h2 className="section-title">Buy PPD tokens </h2>
                            
                            <p>
                                Lorem ipsum dolor sit amet, posuere leo elit id augue. Donec ullamcorper tortor et tellus convallis maximus.
                                Lorem ipsum dolor sit amet, posuere leo elit id augue. Donec ullamcorper tortor et tellus convallis maximus.
                            </p>

                            <div className="alert alert-info" role="alert"style={{textAlign: 'center'}} >
                            <strong>Price: { this.state.tokenPrice / 100000 } xDAI </strong><br />
                            PPD coins in total: { this.state.totalSupply } <br />
                                <strong>Total allocated for ICO (hard cap):</strong> { this.state.tokensAllocated }/ <strong>Available:</strong> { this.state.tokensAllocated - this.state.tokensSold }<br />
                                Token Contract: <a href="https://blockscout.com/poa/sokol/address/0x20013c256Af08187B86DDFaDa43B6D34987910C4/transactions"
                                 target="_blank"> {this.state.tokenContract}</a>
                            </div>

                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: this.state.progress + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>

                            <hr />
                            <br />

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><img src="util/img/coin.png" width="35" /></span>
                                <input id="inputlg" className="form-control form-control-lg" type="number"  min="1" pattern="[0-9]" placeholder="Amount of PPD" aria-label="Amount PPD" aria-describedby="basic-addon1" />
                            </div>

                            <div style={{marginTop:10 +'px'}} className="form-group">
                                <div className="col-sm-12 controls">
                                    <a id="btn-buy" href="#" className="btn btn-primary btn-lg">Buy PPD (ICO) Tokens</a>
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
