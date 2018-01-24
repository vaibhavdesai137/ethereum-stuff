import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {

    return (
        <div>
            <Menu style={{ marginTop: '30px', marginBottom: '30px' }}>

                {/*
                Menu.Item works goofy with Link. So we'll use Link from next-routes 
                <Menu.Item><a href='/'>All Campaigns</a></Menu.Item>
                */}

                <Link route='/'>
                    <a className='item'>All Campaigns</a>
                </Link>

                {/*
                <Menu.Item>
                <a href='/campaigns/new'><Icon name='add' size='medium' />Create Campaign</a>
                </Menu.Item>
                */}

                <Link route='/campaigns/new'>
                    <a className='item'><Icon name='add' />Create Campaign</a>
                </Link>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        Vaibhav Desai
                    </Menu.Item>

                    <Menu.Item>
                        <a target='_blank' href='https://github.com/vaibhavdesai137/ethereum-stuff/tree/master/truffle/07-kickstarter-app'>
                            <Icon name='github' size='large' />
                        </a>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <hr style={{ borderTop: '1px solid green' }} />
        </div>
    );

}