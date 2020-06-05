import React,{Component} from 'react';
import clsx from 'clsx';
import { withStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Common from '../SurveyRequestForm/Common'
import {
  fetchCustomerDetailsAction,
  fetchMenuAction
} from "../../_actions/DashboardActions";
import {
  getCustomer,
  getMenu
} from "../../_reducers/DashboardReducer";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;


const styles = theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    // menuButtonRight: {
    //     marginLeft: -12,
    //     marginRight: 20
    //   },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  });

class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
          open: true,
          viewName: "Create Survey Ticket"
        }
    }
    componentDidMount() {
      this.props.fetchCustomerDetailsAction();
      this.props.fetchMenuAction();
    }
    render(){

    const { classes } = this.props;
    // const theme = useTheme();
   
    const handleDrawerOpen = () => {
        this.setState({
                  open: true
                });
    };
    const handleDrawerClose = () => {
        this.setState({
            open: false
          });
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: this.state.open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, this.state.open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {this.state.viewName}
          </Typography>
          
          <div>
            <IconButton >
                <AccountCircleIcon /> 
            </IconButton>
          </div>
         
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={this.state.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon /> 
          </IconButton>
        </div>
        <Divider />
        <List>
          {this.props.Menu.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text.view_name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                    
                </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                <Paper />
                </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                <Paper className={classes.paper}>
                    
                </Paper>
                </Grid>
            </Grid>
            <Box pt={4}>
              <div> 
                <Common />
              </div>
                <Paper >{JSON.stringify(this.props.Customers)}</Paper>
            </Box>
            </Container>
        </main>
        </div>
    );
    }
}


// export default  (withStyles(styles)(Dashboard));


Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  Customers: PropTypes.array.isRequired,
  Menu : PropTypes.array.isRequired
};
const mapStateToProps = state => ({
    Customers: getCustomer(state),
    Menu: getMenu(state)
});


export default connect(
  mapStateToProps
  ,{
    fetchCustomerDetailsAction,
    fetchMenuAction
  }
)(withStyles(styles)(Dashboard));
