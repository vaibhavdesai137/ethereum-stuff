import React, { Component } from 'react';
import { Header, Grid, Form, Input, Button, Message, Card, TextArea } from 'semantic-ui-react';
import Layout from '../../components/Layout';

import CampaignFetcher from '../../campaign.js';
import web3 from '../../web3';
import { Router } from '../../routes';
import ContributeForm from '../../components/ContributeForm';

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
            address: props.query.address,
            creator: campaignDetails[0],
            title: campaignDetails[1],
            desc: campaignDetails[2],
            minimumContribution: web3.utils.fromWei(campaignDetails[3], 'ether'),
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
                meta: 'ETH',
                description: 'Total Contribution So Far',
            },
            {
                header: <Header as='h1' style={{ fontSize: '50px' }}>{minimumContribution}</Header>,
                meta: 'ETH',
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

    render() {
        return (
            <Layout>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header as='h1' textAlign='left'>
                                <Header.Content>{this.props.title}</Header.Content>
                                <Header.Subheader style={{ marginTop: '10px' }}>{this.props.desc}</Header.Subheader>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: '30px' }}>
                        <Grid.Column width={12}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    };

}

export default CampaignShow;