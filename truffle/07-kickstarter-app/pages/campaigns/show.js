import React, { Component } from 'react';
import { Header, Grid, Form, Input, Button, Message, Card } from 'semantic-ui-react';
import Layout from '../../components/Layout';

import CampaignFetcher from '../../campaign.js';
import web3 from '../../web3';
import { Router } from '../../routes';
import TextArea from 'semantic-ui-react/dist/commonjs/addons/TextArea/TextArea';

class CampaignShow extends Component {

    state = {
        contribution: '',
        loading: false
    }

    // Used solely by Next.js since componentDidMount() works only with React and not Next
    static async getInitialProps(props) {
        const campaignInstance = CampaignFetcher(props.query.address);
        const campaignDetails = await campaignInstance.methods.getDetails().call();
        return {
            creator: campaignDetails[0],
            title: campaignDetails[1],
            desc: campaignDetails[2],
            minimumContribution: campaignDetails[3],
            contributorsCount: campaignDetails[4],
            spendingRequestsCount: campaignDetails[5],
            balance: campaignDetails[6]
        };
    }

    renderCards() {

        const {
            creator,
            title,
            desc,
            minimumContribution,
            contributorsCount,
            spendingRequestsCount,
            balance
        } = this.props;

        const items = [
            {
                header: <Header as='h1' style={{ fontSize: '50px' }}>{balance}</Header>,
                description: 'Total Contribution So Far'
            },
            {
                header: <Header as='h1' style={{ fontSize: '50px' }}>{minimumContribution}</Header>,
                description: 'Minimum Contribution'
            },
            {
                header: <Header as='h1' style={{ fontSize: '50px' }}>{contributorsCount}</Header>,
                description: 'Total Contributors'
            },
            {
                header: <Header as='h1' style={{ fontSize: '50px' }}>{spendingRequestsCount}</Header>,
                description: 'Total Spending Requests',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: <Header as='h3'>{this.props.creator}</Header>,
                description: 'Campaign Creator',
                style: { overflowWrap: 'break-word' }
            }
        ];

        return <Card.Group items={items} />;
    }

    async contribute() {
        event.preventDefault();

        this.setState({ errMsg: '', loading: true });

        try {
            const accounts = await web3.eth.getAccounts();
            const receipt = await campaignFactoryInstance.methods
                .createCampaign(this.state.title, this.state.desc, this.state.minimumContribution)
                .send({ from: accounts[0] });
            Router.pushRoute('/');
        } catch (err) {
            this.setState({ errMsg: err.message });
        }

        this.setState({ loading: false });
    }

    render() {
        return (
            <Layout>
                <Grid style={{ marginTop: '30px' }}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header as='h1' textAlign='center'>
                                <Header.Content>{this.props.title}</Header.Content>
                                <Header.Subheader style={{ marginTop: '10px' }}>{this.props.desc}</Header.Subheader>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: '50px' }}>
                        <Grid.Column width={12}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <h3>Wanna contribute?</h3>
                            <Form error={!!this.state.errMsg} >
                                <Form.Field>
                                    <Input label='WEI' labelPosition='right'
                                        value={this.state.contribution}
                                        onChange={event => this.setState({ contribution: event.target.value })} />
                                </Form.Field>
                                <Message error header='Oops!!!' content={this.state.errMsg} />
                                <Button onClick={this.contribute.bind(this)} loading={this.state.loading}
                                    type='submit' positive>Contribute</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    };

}

export default CampaignShow;