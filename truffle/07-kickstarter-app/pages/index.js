import React, { Component } from 'react';
import { Grid, Card, Button, Icon } from 'semantic-ui-react';
import Layout from '../components/Layout';
import campaignFactoryInstance from '../campaignFactory';

class Campaigns extends Component {

    state = {
        campaigns: []
    };

    // Used soelly by Next.js since componentDidMount() works only with React and not Next
    static async getInitialProps() {
        const campaigns = await campaignFactoryInstance.methods.getAllCampaigns().call();
        return { campaigns: campaigns };
    }

    renderCampaigns() {

        const items = this.props.campaigns.map(campaignAddress => {
            return {
                header: campaignAddress,
                description: <a>View Campaign</a>,
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <Grid style={{ marginTop: '30px' }} divided='vertically' stretched>
                    <Grid.Row>
                        <Grid.Column width={13}>
                            <h3>Open Campaigns</h3>
                            {this.renderCampaigns()}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h3>&nbsp;</h3>
                            <Button style={{fontSize: '14px'}} positive={true}>
                                Got An Idea?
                                <br/><br/>Start Here
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }

}

export default Campaigns;