import { Menu, Icon, Responsive } from "semantic-ui-react";
export function Header() {
  return (
    <Menu style={{marginTop: ".5rem"}}>
      <Menu.Item header>Ruslan Garifullin</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item href="https://www.linkedin.com/in/ruslang02/">
          <Icon name="linkedin" />
          <Responsive as={MenuItemText} content="LinkedIn" minWidth={576}/>
        </Menu.Item>
        <Menu.Item href="https://github.com/ruslang02">
          <Icon name="github" />
          <Responsive as={MenuItemText} content="GitHub" minWidth={576}/>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

function MenuItemText(props) {
  return (<div>{props.content ?? " "}</div>);
}
