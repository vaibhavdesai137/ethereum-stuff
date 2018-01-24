import React, { Component } from 'react';
import { Grid, Form, Input, Button, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';

import campaignFactoryInstance from '../../campaignFactory';
import web3 from '../../web3';
import { Router } from '../../routes';

class CampaignShow extends Component {

    state = {
        contribution: '',
        loading: false
    }

    contribute() {
        event.preventDefault();

        this.setState({ errMsg: '', loading: true });

        alsert('hi');

        this.setState({ loading: false });
    }

    render() {
        return (
            <Layout>
                <Grid style={{ marginTop: '30px' }} divided='vertically' stretched>
                    <Grid.Row>
                        <Grid.Column width={9}>
                            <h3>Campaign Details</h3>
                        </Grid.Column>
                        <Grid.Column width={3}>
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