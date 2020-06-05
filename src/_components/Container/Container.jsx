
import React, { Component } from "react";
import SignIn from "../SignIn/SignIn";
import { Paper, Container, Grid } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";


class ContainerAppView extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   systemVsActualDailyChart: {
    //     nameBar1: "Actual Volume",
    //     margin: { top: 5, right: 10, left: 32, bottom: 10 }
    //   }
    // };
  }




//   componentDidMount() {
//     console.log("Accuracy Tracker Compoenent DID Mount!!");
//   }

//   getChartTitle() {
//     return null;
//   }

//   setCurrentFilterValues(
//     region,
//     flowType
//   ) {
//     this.setState({
//       filterValues: {
//         selectedRegion: region,
//         selectedFlowType: flowType
//       }
//     });
//   }

  render() {
    // const { classes } = this.props;
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    // const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);
    return (
      <div> 
            <Router>
                <Switch>
                <Route
                    exact
                    path="/"
                    component={() => {
                        return <Home />;
                    }} />
                    <Route
                    exact
                    path="/dashboard"
                    component={() => {
                        return <Dashboard />;
                    }} />
                    <Route
                    exact
                    path="/signin"
                    component={() => {
                        return <SignIn />;
                    }} />
                </Switch>
            </Router>
                 
      </div>
    );
  }
}

export default ContainerAppView;

