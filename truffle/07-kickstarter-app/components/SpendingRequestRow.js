import React, { Component } from 'react';
import { Header, Form, Table, Input, Button, Message } from 'semantic-ui-react';
import CampaignFetcher from '../campaign.js';
import web3 from '../web3';
import { Router } from '../routes';

class SpendingRequestRow extends Component {

    async approveSpendingRequest() {
        event.preventDefault();

        try {
            const campaignInstance = CampaignFetcher(this.props.address);
            const accounts = await web3.eth.getAccounts();
            const receipt = await campaignInstance.methods.approveSpendingRequest(this.props.id).send({
                from: accounts[0]
            });
            Router.replaceRoute('/campaigns/' + this.props.address + '/spendingRequests');
        } catch (err) { }
    }

    async finalizeSpendingRequest() {
        event.preventDefault();

        try {
            const campaignInstance = CampaignFetcher(this.props.address);
            const accounts = await web3.eth.getAccounts();
            const receipt = await campaignInstance.methods.finalizeSpendingRequest(this.props.id).send({
                from: accounts[0]
            });
            Router.replaceRoute('/campaigns/' + this.props.address + '/spendingRequests');
        } catch (err) { }
    }

    render() {

        const spendingRequest = this.props.spendingRequest;
        const readyToFinalize = spendingRequest.approversCount > (this.props.contributorsCount / 2);

        return (
            <Table.Row disabled={spendingRequest.complete} positive={readyToFinalize && !spendingRequest.complete}>
                <Table.Cell>{this.props.id}</Table.Cell>
                <Table.Cell>{spendingRequest.desc}</Table.Cell>
                <Table.Cell>{web3.utils.fromWei(spendingRequest.amount, 'ether') + ' ETH'}</Table.Cell>
                <Table.Cell>{spendingRequest.recipient}</Table.Cell>
                <Table.Cell>
                    {spendingRequest.approversCount} / {this.props.contributorsCount}
                </Table.Cell>
                <Table.Cell>
                    {spendingRequest.complete ? null : (
                        <Button color='green' basic
                            onClick={this.approveSpendingRequest.bind(this)}>
                            Approve
                        </Button>
                    )}
                </Table.Cell>
                <Table.Cell>
                    {spendingRequest.complete ? null : (
                        <Button color='blue' basic
                            onClick={this.finalizeSpendingRequest.bind(this)}>
                            Finalize
                        </Button>
                    )}
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default SpendingRequestRow;
