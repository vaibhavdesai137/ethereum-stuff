import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export default () => {

    return (
        <div>
            <Menu style={{ marginTop: '30px', marginBottom: '30px' }}>
                <Menu.Item>
                    All Campaigns
                </Menu.Item>

                <Menu.Item>
                    <Icon name='add' />
                    Create New Campaign
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        Vaibhav Desai
                    </Menu.Item>

                    <Menu.Item>
                        <a target='_blank' href='https://github.com/vaibhavdesai137/ethereum-stuff/tree/master/truffle/07-kickstarter-app'>
                            <i class="fa fa-github fa-lg"></i>
                        </a>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <hr style={{ borderTop: '1px solid green' }} />
        </div>
    );

}