import React, { Component } from 'react';
import { Header, Grid, Form, Input, Button, Message, Card, TextArea, Icon } from 'semantic-ui-react';
import Layout from '../../components/Layout';

import CampaignFetcher from '../../campaign.js';
import web3 from '../../web3';
import { Link, Router } from '../../routes';
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
                header: <Header as='h3' style={{ fontSize: '40px' }}>{web3.utils.fromWei(balance, 'ether') + ' ETH'}</Header>,
                description: 'Total Contribution So Far'
            },
            {
                header: <Header as='h3' style={{ fontSize: '40px' }}>{minimumContribution + ' ETH'}</Header>,
                description: 'Minimum Contribution'
            },
            {
                header: <Header as='h3' style={{ fontSize: '40px' }}>{contributorsCount}</Header>,
                description: 'Total Contributors'
            },
            {
                header: <Header as='h3' style={{ fontSize: '40px' }}>{spendingRequestsCount}</Header>,
                description: 'Total Spending Requests',
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
                        <Grid.Column>
                            <Message icon='user' header='Campaign Creator' content={this.props.creator} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header as='h1' textAlign='left'>
                                <Header.Content>{this.props.title}</Header.Content>
                                <Header.Subheader style={{ marginTop: '10px' }}>{this.props.desc}</Header.Subheader>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={'/campaigns/' + this.props.address + '/spendingRequests'} >
                                <a>
                                    <Button style={{ fontSize: '14px' }} positive={true}>
                                        View Spending Requests
                                    </Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    };

}

export default CampaignShow;