import React, { Component } from 'react';
import { Grid, Card, Button, Icon } from 'semantic-ui-react';

import Layout from '../components/Layout';
import campaignFactoryInstance from '../campaignFactory';
import { Link } from '../routes';

class CampaignIndex extends Component {

    // Used solely by Next.js since componentDidMount() works only with React and not Next
    static async getInitialProps() {
        const campaigns = await campaignFactoryInstance.methods.getAllCampaigns().call();
        return { campaigns: campaigns };
    }

    renderCampaigns() {

        let items;
        if (this.props.campaigns.length == 0) {
            items = [{
                header: 'No campaigns found',
                description: '',
                fluid: true
            }];
        } else {
            items = this.props.campaigns.map(address => {
                var campaignDetailsLink = '/campaigns/' + address;
                return {
                    header: address,
                    description: (
                        <Link route={campaignDetailsLink}>
                            <a>View Campaign</a>
                        </Link>
                    ),
                    fluid: true
                };
            });
        }

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <Grid divided='vertically' stretched>
                    <Grid.Row>
                        <Grid.Column width={13}>
                            <h3>Open Campaigns</h3>
                            {this.renderCampaigns()}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h3>&nbsp;</h3>
                            <Link route='/campaigns/new'>
                                <a>
                                    <Button style={{ fontSize: '14px' }} positive={true}>
                                        Got An Idea?
                                    <br /><br />Start Here
                                </Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }

}

export default CampaignIndex;