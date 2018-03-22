import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';

const Logged = (props) => (<IconMenu  {...props} iconButtonElement={<IconButton><MoreVertIcon className="svgColor" style={{color:'#fffff'}}/></IconButton>} targetOrigin={{
    horizontal: 'right',
    vertical: 'top'
  }} anchorOrigin={{
    horizontal: 'right',
    vertical: 'top'
  }}>
  <MenuItem primaryText="Refresh"/>
  <MenuItem primaryText="Help"/>
  <MenuItem primaryText="Sign out"/>
</IconMenu>);

class AppBarExampleIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  }
  Drawerr() {
    <div>
      <RaisedButton label="Open Drawer" onClick={this.handleToggle}/>
      <Drawer docked={this.state.open} width={200} open={true} onRequestChange={(open) => this.setState({open})}>
        <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
        <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
      </Drawer>
    </div>
  }

  handleClose = () => this.setState({open: false});
  render() {
    return (<MuiThemeProvider>
      <AppBar title="Covacap" left='100' iconClassNameRight="muidocs-icon-navigation-expand-more" style={{
          'text-align' : 'center'
        }} iconElementRight={<Logged />} iconElementLight={this.Drawerr} onLeftIconButtonClick={this.handleToggle}/>
    </MuiThemeProvider>);
  }
}
export default AppBarExampleIcon;
