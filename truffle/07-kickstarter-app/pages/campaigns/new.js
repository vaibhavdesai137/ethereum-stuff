import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import campaignFactoryInstance from '../../campaignFactory';

class CampaignNew extends Component {

    render() {
        return (
            <Layout>
                <h3>Create a new campaign</h3>
                <Form>
                    <Form.Field>
                        <label>Title: </label>
                        <input placeholder='Enter the campaign title here...' />
                    </Form.Field>
                    <Form.Field>
                        <label>Description: </label>
                        <Form.TextArea placeholder='Enter the campaign description here...' />
                    </Form.Field>
                    <Form.Field>
                        <label>Minimum Contribution: </label>
                        <input placeholder='Enter the minimum amount to contribute (in ethers)...' />
                    </Form.Field>
                    <Button type='submit' primary={true}>Submit</Button>
                </Form>
            </Layout>
        );
    }

}

export default CampaignNew;