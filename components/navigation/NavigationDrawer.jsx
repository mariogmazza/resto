import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddToPhotosSharpIcon from '@material-ui/icons/AddToPhotosSharp';
import ChatSharpIcon from '@material-ui/icons/ChatSharp';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  drawerBackground_List: {
    background: '#CFD8DC'
  },
  divider_custom: {
    background: '#ffa06d'
  }
}));

function NavigationDrawer(props) {
  const { window, mobileOpen, handleDrawerToggle } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider className={classes.divider_custom} />
      <List className={classes.drawerBackground_List}>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ChatSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Communication" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddToPhotosSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Add a Project" />
        </ListItem>
      </List>
      <Divider className={classes.divider_custom} />
      <List className={classes.drawerBackground_List}>
        <ListItem button>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
}

export default NavigationDrawer;
