import React, { useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { withRouter, NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ForumIcon from '@material-ui/icons/Forum';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AvatarBadge from './avatarBadge';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StatusCard from '../components/statusCard';

const useStyles = makeStyles((theme) => ({
  grow: {
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
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logo: {
    paddingTop: '20px',
    width: '150px',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(137, 196, 244, 0.2)',
    '&:hover': {
      backgroundColor: 'rgba(250, 190, 88, 0.2)',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'grey',
    fontWeight: 700,
  },
  inputRoot: {
    color: 'grey',
    fontFamily: '"Helvetica Neue ", sans-serif !important',
    fontWeight: 700,
    fontSize: '0.85rem',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
  listBtn: {
    color: 'grey',
    textDecorationLine: 'none',
    textTransform: 'none',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    paddingRight: '15px',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  activeSidebar: {
    color: 'orange !important',
    borderLeft: '5px solid orange',
  },
  activeSidebarLogo: {
    color: 'orange !important',
  },
  notifIcon: {
    paddingRight: '30px !important',
  },
  mobileNotifLabel: {
    paddingLeft: '10px !important',
  },
  mobileProfileLabel: {
    paddingLeft: '15px !important',
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
  status: {
    marginLeft: 'calc(50% - 80px)',
  },
  statusLabel: {
    marginLeft: 'calc(50% - 45px)',
    color: 'grey',
    fontWeight: 700,
    paddingBottom: '10px'
  }
}));

const NavBarLogged = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: true,
    bottom: false,
    right: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p className={classes.mobileNotifLabel}>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
      <AvatarBadge className={classes.mobileAvatar}/>
        <p className={classes.mobileProfileLabel}>Profile</p>
      </MenuItem>
    </Menu>
  );

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

  useEffect(() => {
    document.getElementsByTagName('body')[0].className = 'side-menu-opened';
  },[]);

  const listLogged = (anchor) => (
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
        <ListItem button key='Dashboard'>
          <ListItemIcon><AssessmentIcon/></ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItem>
        <ListItem button key='Working Group'>
          <ListItemIcon> <ForumIcon /></ListItemIcon>
          <ListItemText primary='Working Group' />
        </ListItem>
        <ListItem button key='Contacts'>
          <ListItemIcon> <PermIdentityIcon /></ListItemIcon>
          <ListItemText primary='Contacts' />
        </ListItem>
        <ListItem button key='Applications'>
          <ListItemIcon> <ViewAgendaIcon /></ListItemIcon>
          <ListItemText primary='Applications' />
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
      <Divider id='side-menu-divider' />
      <div className={classes.status}>
        <div className={classes.statusLabel}>Status</div>
        <StatusCard/>
      </div>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', !state.left)}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <NavLink className={classes.link} to={"/home"}>
              <span className={classes.logoPartWord}>BACK</span>
              <span className={classes.logoPartTwo}>2</span>
              <span className={classes.logoPartWord}>WORK✌️</span>
            </NavLink>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search here…(Firstname, Lastname, Email...)"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit" className={classes.notifIcon}>
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Button className={classes.listBtn} href="/home">Keanu Reeves<ExpandMoreIcon/></Button>
            <AvatarBadge/>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} anchor='left' open={state['left']}>
          {listLogged('left')}
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default withRouter(NavBarLogged);