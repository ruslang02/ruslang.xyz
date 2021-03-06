import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Responsive } from 'semantic-ui-react';

function MenuItemText({ content }) {
  return (<div style={{ marginLeft: '.5rem' }}>{content ?? ' '}</div>);
}

MenuItemText.propTypes = {
  content: PropTypes.string.isRequired,
};

export default function Header() {
  return (
    <Menu style={{ marginTop: '.5rem' }}>
      <Menu.Item header>Ruslan Garifullin</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item href="https://www.linkedin.com/in/ruslang02/" style={{ padding: '0 .5em' }}>
          <Icon name="linkedin" size="big" style={{ margin: 0 }} />
          <Responsive as={MenuItemText} content="LinkedIn" minWidth={576} />
        </Menu.Item>
        <Menu.Item href="https://github.com/ruslang02" style={{ padding: '0 .5em' }}>
          <Icon name="github" size="big" style={{ margin: 0 }} />
          <Responsive as={MenuItemText} content="GitHub" minWidth={576} />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
