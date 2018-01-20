import React, {Component} from "react";
import * as ReactBootstrap from 'react-bootstrap';
import web3 from "./web3";
import lotteryContract from "./lotteryContract";
import "./App.css";

// Order of rendering:
// 1. App component loads
// 2. Constructor is called, parent React.App is created, our props get initialized
// 3. render() is called
// 4. When render() is done, componentDidMount() gets called
class App extends Component {
    
    // Older way
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         manager: ''
    //     };
    // }

    // Newer way
    state = {
        manager: '',
        players: [],
        balance: '',
        playerBet: '',
        message: ''
    };

    // automatically called when render() complete
    async componentDidMount() {
        
        const manager = await lotteryContract.methods.manager().call();
        const players = await lotteryContract.methods.getPlayers().call();
        const balance = await web3.eth.getBalance(
            lotteryContract.options.address
        );

        // Older way
        // this.setState({
        //   manager: manager
        // });

        // Newer way (if both keys and values use same variable name)
        this.setState({
            manager,
            players,
            balance
        });
    }

    async enterLottery(event) {
        event.preventDefault();
        
        this.setState({
            message: 'Waiting for transaction receipt...'
        });
        
        const playerAddress = await web3.eth.getCoinbase();
        const receipt = await lotteryContract.methods.enter().send({
            from: playerAddress,
            value: web3.utils.toWei(this.state.playerBet, 'ether')
        });
        
        this.setState({
            message: 'Your participation is now confirmed. \nTxnHash: ' + receipt.transactionHash
        });
    };

    async pickWinner(event) {
        event.preventDefault();
      
        const playerAddress = await web3.eth.getCoinbase();
        if (playerAddress.toUpperCase() !== this.state.manager.toUpperCase()) {
            alert('Only lottery manager can pick a winner');
            return;
        }

        this.setState({
            message: 'Waiting for transaction receipt...'
        });
        
        const receipt = await lotteryContract.methods.pickWinner().send({
            from: playerAddress
        });
        
        this.setState({
            message: 'Winner has been picked and lottery contract has been reset'
        });
    };

    render() {
        return (
            <div className="container">

                <ReactBootstrap.Jumbotron>
                    <h1>Jumbo Lottery Contract</h1>
                    <p>Managed by {this.state.manager}</p>
                    <p>There are currently {this.state.players.length} player(s) entered in the lottery, 
                    competing to win {web3.utils.fromWei(this.state.balance.toString(), 'ether')} ethers</p>
                </ReactBootstrap.Jumbotron>

                <hr />
              
                <ReactBootstrap.Form inline>
                    <ReactBootstrap.FormGroup>
                          <ReactBootstrap.ControlLabel>Enter the lottery: </ReactBootstrap.ControlLabel>{' '}
                          <ReactBootstrap.FormControl 
                              type="text" placeholder="in ethers"
                              value = {this.state.playerBet}
                              onChange = {event => this.setState({playerBet: event.target.value})}
                          />
                    </ReactBootstrap.FormGroup>
                    <ReactBootstrap.Button bsStyle="primary" onClick={this.enterLottery.bind(this)}>Enter</ReactBootstrap.Button>
                </ReactBootstrap.Form>
              
                <hr />

                <ReactBootstrap.Button bsStyle="info" onClick={this.pickWinner.bind(this)}>Pick Winner</ReactBootstrap.Button> (manager only)
        
                <hr />

                <h1>{this.state.message}</h1>

            </div>
        );
    }
}

export default App;