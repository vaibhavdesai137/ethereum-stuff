import React from 'react';
import { Menu, Header, Icon, Image } from 'semantic-ui-react';

export default (props) => {

    return (
        <div>

            <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css'></link>
            <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'></link>

            <Header as='h1' textAlign='center'>
                <Header.Content style={{ fontColor: 'blue' }}>
                    <Icon name='lightbulb' color='green' />
                    &nbsp;&nbsp;&nbsp;Kickstartr&nbsp;&nbsp;&nbsp;
                    <Icon name='lightbulb' color='green' />
                </Header.Content>
                <Header.Subheader>
                    Funding the awesome idea the RIGHT way
                </Header.Subheader>

            </Header>

            <Menu style={{ marginTop: '30px' }}>
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
        </div>
    );

}