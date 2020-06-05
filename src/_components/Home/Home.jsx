
import React, { Component } from "react";
import { Paper, Container, Grid, CardActionArea } from "@material-ui/core";
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Route, Switch, useHistory, withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 5000,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


class Home extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = e => {
    // this.props.history.push("/signin");
    this.props.history.push({
      pathname: `/signin`,
      state: null
  });
  };
  render() {
    // const history = useHistory();
    const classes = this.props;
    // const routeChange = (e) =>{ 
    //   let path = `/signin`; 
    //   History.push(path);
    // }
    return (
      <div> 
            <Grid container spacing={2}>
                <Grid item xl={6} xs={12} sm={6}>
                <Card className={classes.root}>
                <CardActionArea
                onClick={this.handleClick}
                >
                    <CardContent>
                      {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                      </Typography> */}
                      <Typography variant="h5" component="h2">
                        Insurer
                      </Typography>
                      {/* <Typography className={classes.pos} color="textSecondary">
                        adjective
                      </Typography>
                      <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography> */}
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xl={6} xs={12} sm={6}>
                <Card className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="h2">
                        Surveyor
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        adjective
                      </Typography>
                      <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
            </Grid>
      </div>
    );
  }
}

export default withRouter((withStyles(useStyles))(Home));

