import React, { Component } from 'react';
import { Header, Form, Input, Button, Message } from 'semantic-ui-react';
import CampaignFetcher from '../campaign.js';

class CampignContribute extends Component {

    state = {
        contribution: '',
        errMsg: '',
        loading: false
    }

    async contribute() {
        event.preventDefault();

        this.setState({ errMsg: '', loading: true });

        try {
            console.log('Address: ' + this.props.address);
            const campaignInstance = CampaignFetcher(this.props.address);
            const accounts = await web3.eth.getAccounts();
            const receipt = await campaignInstance.methods
                .contribute()
                .send({ from: accounts[0], value: web3.utils.toWei(contribution, 'ether') });
        } catch (err) {
            this.setState({ errMsg: err.message });
        }

        this.setState({ loading: false });
    }

    render() {
        return (
            <div>
                <h3>Wanna contribute?</h3>
                <Form error={!!this.state.errMsg} >
                    <Form.Field>
                        <Input label='ETH' labelPosition='right'
                            value={this.state.contribution}
                            onChange={event => this.setState({ contribution: event.target.value })} />
                    </Form.Field>
                    <Message error header='Oops!!!' content={this.state.errMsg} />
                    <Button onClick={this.contribute.bind(this)} loading={this.state.loading}
                        type='submit' positive>Contribute</Button>
                </Form>
            </div>
        );
    }
}

export default CampignContribute;
