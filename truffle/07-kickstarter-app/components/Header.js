import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

export default (props) => {

    return (
        <div>
            <Header as='h1' textAlign='center' style={{ marginTop: '30px' }}>
                <Header.Content>
                    <Icon name='lightbulb' color='green' />
                    &nbsp;&nbsp;&nbsp;Kickstartr&nbsp;&nbsp;&nbsp;
                    <Icon name='lightbulb' color='green' />
                </Header.Content>
                <Header.Subheader>
                    Funding the awesome idea the RIGHT way
                </Header.Subheader>
            </Header>
        </div>
    );

}