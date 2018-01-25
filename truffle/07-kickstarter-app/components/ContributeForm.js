import React, { Component } from 'react';
import { Header, Form, Input, Button, Message } from 'semantic-ui-react';
import CampaignFetcher from '../campaign.js';
import web3 from '../web3';
import { Router } from '../routes';

class CampignContribute extends Component {

    state = {
        contribution: '',
        errorMsg: '',
        loading: false
    }

    async contribute() {
        event.preventDefault();

        this.setState({ errorMsg: '', loading: true });

        try {
            const campaignInstance = CampaignFetcher(this.props.address);
            const accounts = await web3.eth.getAccounts();
            const receipt = await campaignInstance.methods.contribute().send({
                from: accounts[0], value: web3.utils.toWei(this.state.contribution, 'ether')
            });
            // Refresh the page once txn is successful
            Router.replaceRoute('/campaigns/' + this.props.address);
        } catch (err) {
            this.setState({ errorMsg: err.message });
        }

        this.setState({ loading: false });
    }

    render() {
        return (
            <div>
                <h3>Wanna contribute?</h3>
                <Form error={!!this.state.errorMsg} >
                    <Form.Field>
                        <Input label='ETH' labelPosition='right'
                            value={this.state.contribution}
                            onChange={event => this.setState({ contribution: event.target.value })} />
                    </Form.Field>
                    <Message error header='Oops!!!' content={this.state.errorMsg} />
                    <Button onClick={this.contribute.bind(this)} loading={this.state.loading}
                        type='submit' positive>Contribute</Button>
                </Form>
            </div>
        );
    }
}

export default CampignContribute;
