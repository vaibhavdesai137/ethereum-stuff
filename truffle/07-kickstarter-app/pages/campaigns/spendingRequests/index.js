import React, { Component } from 'react';
import { Grid, Button, Table, Icon } from 'semantic-ui-react';
import Layout from '../../../components/Layout';

import CampaignFetcher from '../../../campaign.js';
import SpendingRequestRow from '../../../components/SpendingRequestRow';
import { Link } from '../../../routes';

class SpendingRequestIndex extends Component {

    // Used solely by Next.js since componentDidMount() works only with React and not Next
    static async getInitialProps(props) {

        // Solidity does not have a way to return an array of structs
        // So we'll need to get spendingRequests count and make those many individual calls
        // Using Promise.all(..) to make all calls at once
        const campaignInstance = CampaignFetcher(props.query.address);
        const contributorsCount = await campaignInstance.methods.contributorsCount().call();
        const spendingRequestsCount = await campaignInstance.methods.spendingRequestsCount().call();
        const spendingRequests = await Promise.all(
            Array(parseInt(spendingRequestsCount))
                .fill()
                .map((element, index) => {
                    return campaignInstance.methods.spendingRequests(index).call();
                })
        );

        return {
            address: props.query.address,
            contributorsCount: contributorsCount,
            spendingRequests: spendingRequests
        };
    }

    renderRows() {

        return this.props.spendingRequests.map((spendingRequest, index) => {
            return <SpendingRequestRow
                key={index}
                id={index}
                spendingRequest={spendingRequest}
                address={this.props.address}
                contributorsCount={this.props.contributorsCount} />;
        })
    }

    render() {
        return (
            <Layout>

                <Link route={'/campaigns/' + this.props.address + '/spendingRequests/new'} >
                    <a>
                        <Button floated='right' style={{ marginBottom: '20px' }} positive={true}>
                            New Spending Request
                        </Button>
                    </a>
                </Link>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                            <Table.HeaderCell>Recipient</Table.HeaderCell>
                            <Table.HeaderCell>Approval Count</Table.HeaderCell>
                            <Table.HeaderCell>Approve?</Table.HeaderCell>
                            <Table.HeaderCell>Finalize?</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderRows()}
                    </Table.Body>
                </Table>
                <div>Found {this.props.spendingRequests.length} spending request(s)</div>
            </Layout>
        );
    }

}

export default SpendingRequestIndex;