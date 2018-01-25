import React, { Component } from 'react';
import { Grid, Form, Input, Button, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';

import campaignFactoryInstance from '../../campaignFactory';
import web3 from '../../web3';
import { Router } from '../../routes';

class CampaignNew extends Component {

    state = {
        title: '',
        desc: '',
        minimumContribution: '',
        errorMsg: '',
        loading: false
    }

    async createCampaign() {
        event.preventDefault();

        this.setState({ errorMsg: '', loading: true });

        try {
            const accounts = await web3.eth.getAccounts();
            const receipt = await campaignFactoryInstance.methods
                .createCampaign(this.state.title, this.state.desc, web3.utils.toWei(this.state.minimumContribution, 'ether'))
                .send({ from: accounts[0] });
            Router.pushRoute('/');
        } catch (err) {
            this.setState({ errorMsg: err.message });
        }

        this.setState({ loading: false });
    }

    render() {
        return (
            <Layout>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <h3>Create a new campaign</h3>
                            <Form error={!!this.state.errorMsg} >
                                <Form.Field>
                                    <label>Title: </label>
                                    <input placeholder='Enter the campaign title here...'
                                        value={this.state.title}
                                        onChange={event => this.setState({ title: event.target.value })} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Description: </label>
                                    <Form.TextArea placeholder='Enter the campaign description here...'
                                        value={this.state.desc}
                                        onChange={event => this.setState({ desc: event.target.value })} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Minimum Contribution: </label>
                                    <Input placeholder='Enter the minimum amount one needs to contribute...'
                                        label='ETH' labelPosition='right'
                                        value={this.state.minimumContribution}
                                        onChange={event => this.setState({ minimumContribution: event.target.value })} />
                                </Form.Field>
                                <Message error header='Oops!!!' content={this.state.errorMsg} />
                                <Button onClick={this.createCampaign.bind(this)} loading={this.state.loading}
                                    type='submit' positive>Kickstart</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }

}

export default CampaignNew;