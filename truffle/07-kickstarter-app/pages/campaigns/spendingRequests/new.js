import React, { Component } from 'react';
import { Grid, Form, Input, Message, Button } from 'semantic-ui-react';
import Layout from '../../../components/Layout';

import web3 from '../../../web3';
import CampaignFetcher from '../../../campaign.js';
import { Link, Router } from '../../../routes';

class SpendingRequestNew extends Component {

    state = {
        desc: '',
        amount: '',
        recipient: '',
        loading: false,
        errorMsg: ''
    }

    // Used solely by Next.js since componentDidMount() works only with React and not Next
    static async getInitialProps(props) {
        return { address: props.query.address };
    }

    async createSpendingRequest() {
        event.preventDefault();

        this.setState({ errorMsg: '', loading: true });

        try {
            const campaignInstance = CampaignFetcher(this.props.address);
            const accounts = await web3.eth.getAccounts();
            const receipt = await campaignInstance.methods
                .createSpendingRequest(this.state.desc, web3.utils.toWei(this.state.amount, 'ether'), this.state.recipient)
                .send({ from: accounts[0] });
            Router.pushRoute('/campaigns/' + this.props.address + '/spendingRequests');
        } catch (err) {
            console.log('ERROR: \n' + err);
            console.log('ERROR MESSAGE: \n' + err.message);
            this.setState({ errorMsg: JSON.stringify(err.message) });
        }

        this.setState({ loading: false });
    }

    render() {
        return (
            <Layout>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={'/campaigns/' + this.props.address + '/spendingRequests'} >
                                <a>Back</a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <h3>Create a new spending request</h3>
                            <Form error={!!this.state.errorMsg} >
                                <Form.Field>
                                    <label>Description: </label>
                                    <Form.TextArea placeholder='Enter the spending request description here...'
                                        value={this.state.desc}
                                        onChange={event => this.setState({ desc: event.target.value })} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Amount: </label>
                                    <Input placeholder='Enter the amount for this spending request...'
                                        label='ETH' labelPosition='right'
                                        value={this.state.amount}
                                        onChange={event => this.setState({ amount: event.target.value })} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Recipient: </label>
                                    <Input placeholder='Enter the address of the account that needs to be paid for this spending request...'
                                        value={this.state.recipient}
                                        onChange={event => this.setState({ recipient: event.target.value })} />
                                </Form.Field>
                                <Message error header='Oops!!!' content={this.state.errorMsg} />
                                <Button onClick={this.createSpendingRequest.bind(this)} loading={this.state.loading}
                                    type='submit' positive>Submit</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }

}

export default SpendingRequestNew;