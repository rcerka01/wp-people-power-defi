import React, { Component } from 'react';
// import blockchain from '../blockchain/factory';
// import detectEthereumProvider from '@metamask/detect-provider'

class BuyToken extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {name: ''}
//         this.state = {natokenPriceme: ''}
//         this.state = {totalSupply: ''}
//         this.state = {tokensSold: ''}
//         this.state = {tokenContract: ''}
//         this.state = {tokenSaleContract: ''}
//         this.state = {tokensAllocated: ''}
//         this.state = {progress: ''}
//         this.state = {currentAccount: ''}        
//         this.state = {ppdBalance: ''}   
//         this.state = {inputField: ''}   
        
//         this.handleAccountsChanged = this.handleAccountsChanged.bind(this);
//         this.updateInputValue = this.updateInputValue.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.onKeyPress = this.onKeyPress.bind(this);
//     }

//     // loader
//     async UNSAFE_componentWillMount() {
//         const metamaskProvider = await detectEthereumProvider();

//         if (metamaskProvider) {
//             metamaskProvider
//             .request({ method: 'eth_accounts' })
//             .then(this.handleAccountsChanged)
//             .catch((err) => {
//                 console.error(err);
//             });

//             metamaskProvider
//             .on('accountsChanged', this.handleAccountsChanged);
//         }

//         const name = await blockchain.ppt.methods.name().call();
//         const tokenPrice = await blockchain.ppts.methods.tokenPrice().call();
//         const totalSupply = await blockchain.ppt.methods.totalSupply().call();
//         const tokensSold = await blockchain.ppts.methods.tokensSold().call();
//         const tokenContract = blockchain.ppt._address;
//         const tokenSaleContract = blockchain.ppts._address;
//         const tokensAllocated = 10000000
 
//         this.setState({name: name});
//         this.setState({tokenPrice: tokenPrice});
//         this.setState({totalSupply: totalSupply});
//         this.setState({tokensSold: tokensSold});
//         this.setState({tokenContract: tokenContract});
//         this.setState({tokenSaleContract: tokenSaleContract});
//         this.setState({tokensAllocated: tokensAllocated});
//         this.setState({progress: 100 * tokensSold / tokensAllocated});
//     }

//     // metamask
//     handleAccountsChanged(accounts) {
//         if (accounts.length === 0) {
//             console.log('Please connect to MetaMask.');
//         } else if (accounts[0] !== this.state.currentAccount) {
//             this.setState({currentAccount: accounts[0]});
//         }
//     }

//    // submit form 
//    async handleSubmit(event) {
//         event.preventDefault();
//         blockchain.ppts.methods.buyTokens(this.state.inputField).send({
//                 from: this.state.currentAccount,
//                 value: this.state.inputField * this.state.tokenPrice,
//                 gas: 500000 
//         });
//     }

//     // prevent input from letters
//     onKeyPress(evt) {
//         var theEvent = evt || window.event;
//         if (theEvent.type === 'paste') {
//             key = event.clipboardData.getData('text/plain');
//         } else {
//             var key = theEvent.keyCode || theEvent.which;
//             key = String.fromCharCode(key);
//         }
//         var regex = /[0-9]|\./;
//         if( !regex.test(key) ) {
//           theEvent.returnValue = false;
//           if(theEvent.preventDefault) theEvent.preventDefault();
//         }
//     }

//     // amount of PPD to buy to state
//     updateInputValue(event){
//         this.setState({inputField: event.target.value});   
//     }

    render() {

        // function createContractHref(address) {
        //     return "https://blockscout.com/poa/sokol/address/" + address + "/transactions"
        // }

        return (
            <div className="hero">
                <img style={{paddingBottom:10}} src="/util/img/banner.jpg" alt="People Power" />

                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <br />
                            <h2 className="section-title">Buy PPD tokens </h2>

                            <p style={{textAlign:'center'}}>
                                Our token sale will be launching soon. <br />For all future announcements about our token sale and keep up-to date with all of our progress make sure that you follow our social media channels.
                                <br />
                                <br />
                                <a href='https://twitter.com/peoplepowerdefi' target="_blank" style={{padding:15}}><i class="fab fa-twitter fa-2x"></i></a>
                                <a href='https://t.me/joinchat/u8mpa_EuHGcyZWFk' target="_blank" style={{padding:15}}><i class="fab fa-telegram fa-2x"></i></a>
                            </p>
                            
                            {/* <p>
                                Lorem ipsum dolor sit amet, posuere leo elit id augue. Donec ullamcorper tortor et tellus convallis maximus.
                                Lorem ipsum dolor sit amet, posuere leo elit id augue. Donec ullamcorper tortor et tellus convallis maximus.
                            </p>

                            <div className="alert alert-info" role="alert"style={{textAlign: 'center'}} >
                                <strong>Price: { this.state.tokenPrice / 100000 } xDAI </strong><br />
                                PPD coins in total: { this.state.totalSupply } <br />
                                <strong>Total allocated for ICO (hard cap):</strong> { this.state.tokensAllocated }/ <strong>Available:</strong> { this.state.tokensAllocated - this.state.tokensSold }<br />
                                Token Contract: <a href={createContractHref(this.state.tokenContract)}
                                    target="_blank"> {this.state.tokenContract}</a><br />
                                Token Sale Contract: <a href={createContractHref(this.state.tokenSaleContract)}
                                    target="_blank"> {this.state.tokenSaleContract}</a><br />
                            </div>

                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: this.state.progress + '%'}} aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100">{this.state.progress+'%'}</div>
                            </div>
 
                            <br />

                            <div className="alert alert-info" role="alert"style={{textAlign: 'center'}} >
                                Your Account: <strong>{this.state.currentAccount}</strong><br />
                                Your PPD balance: <strong>{this.state.ppdBalance}</strong><br />
                            </div>

                            <hr />

                            <form id="buy-ppd" role="form">

                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><img src="util/img/coin.png" width="35" /></span>
                                    <input id="inputlg" onKeyPress={this.onKeyPress} onChange={this.updateInputValue} className="form-control form-control-lg" type="number"  min="1" pattern="[0-9]+$" placeholder="Amount of PPD" aria-label="Amount PPD" aria-describedby="basic-addon1" />
                                </div>

                                <div style={{marginTop:10 +'px'}} className="form-group">
                                    <div className="col-sm-12 controls">
                                        <a id="btn-buy" href="#" className="btn btn-primary btn-lg" onClick={this.handleSubmit}>Buy PPD (ICO) Tokens</a>
                                    </div>
                                </div>

                            </form> */}

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default BuyToken;
