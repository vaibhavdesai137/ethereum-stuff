import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import Layout from '../../../components/Layout';

import { Link } from '../../../routes';

class SpendingRequestIndex extends Component {

    // Used solely by Next.js since componentDidMount() works only with React and not Next
    static async getInitialProps(props) {
        return { address: props.query.address };
    }

    render() {
        return (
            <Layout>
                <Link route={'/campaigns/' + this.props.address + '/spendingRequests/new'} >
                    <a>
                        <Button style={{ fontSize: '14px' }} positive={true}>
                            Create New Spending Request
                        </Button>
                    </a>
                </Link>
            </Layout>
        );
    }

}

export default SpendingRequestIndex;