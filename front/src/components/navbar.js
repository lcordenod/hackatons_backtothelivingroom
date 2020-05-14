import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const NavBar = props => {
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1000,
    height:'65px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none'
  },
  logoPartWord: {
    color: 'grey',
    fontWeight: '1000',
  },
  logoPartTwo: {
    color: 'orange',
    fontWeight: '1000',
  },
  btn: {
    color: 'grey',
    textDecorationLine: 'none',
    textTransform: 'none',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
  },
  activeBtn: {
    color: 'orange !important',
    borderBottom: '5px solid orange',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  logo: {
    paddingTop: '20px',
    width: '150px',
  },
  drawer: {
    display: 'block !important',
    position: 'absolute !important',
    top: '100px !important',
  },
  activeSidebar: {
    color: 'orange !important',
    borderLeft: '5px solid orange',
  },
  activeSidebarLogo: {
    color: 'orange !important',
  }
}));
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    if (open) {
      document.getElementsByTagName('body')[0].className = 'side-menu-opened';
    } else {
      document.getElementsByTagName('body')[0].className = 'side-menu-closed';
    }
    setState({ ...state, [anchor]: open });
  };

  const listNotLogged = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className={props.activeTab === 'home' ? classes.activeSidebar : null} button key='Home'>
          <ListItemIcon> <HomeIcon className={props.activeTab === 'home' ? classes.activeSidebarLogo : null} /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem className={props.activeTab === 'login' ? classes.activeSidebar : null} button key='Login'>
          <ListItemIcon><AccountBoxIcon className={props.activeTab === 'login' ? classes.activeSidebarLogo : null} /></ListItemIcon>
          <ListItemText primary='Login' />
        </ListItem>
        <ListItem className={props.activeTab === 'register' ? classes.activeSidebar : null} button key='Register'>
          <ListItemIcon> <PersonAddIcon className={props.activeTab === 'register' ? classes.activeSidebarLogo : null} /></ListItemIcon>
          <ListItemText primary='Register' />
        </ListItem>
      </List>
      <Divider id='side-menu-divider' />
      <List>
      <ListItem button key='Help Center'>
          <ListItemIcon> <HelpOutlineIcon /></ListItemIcon>
          <ListItemText primary='Help Center' />
        </ListItem>
        <ListItem button key='Settings'>
          <ListItemIcon> <SettingsIcon /></ListItemIcon>
          <ListItemText primary='Settings' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', !state.left)}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <NavLink className={classes.link} to={"/"}>
              <span className={classes.logoPartWord}>BACK</span>
              <span className={classes.logoPartTwo}>2</span>
              <span className={classes.logoPartWord}>WORK✌️</span>
            </NavLink>
          </Typography>
          <Button className={[classes.btn, props.activeTab === 'login' ? classes.activeBtn : null]} href="/user/login">Login</Button>
          <Button className={[classes.btn, props.activeTab === 'register' ? classes.activeBtn : null]} href="/user/register">Register</Button>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
        {listNotLogged('left')}
      </Drawer>
    </div>
  );
}

export default withRouter(NavBar);