
import React, { Component } from "react";
import { Paper, Container, Grid } from "@material-ui/core";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Motor from './Motor';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    getStates,
    getDistrict
} from '../../_reducers/SurveyRequestFormReducer';
import {
    fetchStates,
    fetchDistricts
} from '../../_actions/SurveyRequestFormActions';

const styles = theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: "50%",
      },
    },
  });

class CommonView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        surveyType : [
            {
                id: 1,
                value: 'MOTOR'
            },
            {
                id: 2,
                value: 'FIRE'
            },
            {
                id: 3,
                value: 'CEMENT'
            }
          ],
        selectedSurveyType : 'MOTOR',
        selectedState : null,
        selectedDistrict : null
    };
  }
  componentDidMount() {
    this.props.fetchStates();
  }
  getSurveyFormSwitch(param) {
    switch(param) {
      case 'MOTOR':
        return <Motor/>;
      default:
        return <Paper>Default</Paper>;
    }
  }

  render() {
    const { classes } = this.props;
    const handleSurveyTypeChange= (e) => {
        this.setState({
            selectedSurveyType: e.target.value
        });
    }
    const handleStateChange= (e) => {
        this.setState({
            selectedState: e.target.value
        });
        this.props.fetchDistricts(e.target.value);
    }
    const handleDistrictChange= (e) => {
        this.setState({
            selectedDistrict: e.target.value
        });
    }
    console.log("Printing States")
    this.props.states.map((options) => {
        console.log(options)
    })
    return ( 
       
    <div>
        <Paper>
            {/* <form className={classes.root} noValidate autoComplete="off"> */}
                <div className={classes.root} >
                    <div>
                    <TextField
                        id="first_name"
                        label="First Name"
                        placeholder="Enter Name"
                        multiline
                        variant="outlined"
                    />
                    <TextField
                        id="last_name"
                        label="Last Name"
                        placeholder="Enter Surname"
                        multiline
                        variant="outlined"
                    />
                    <TextField
                        id="address"
                        label="Address"
                        placeholder="Enter Address"
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                    <TextField
                        id="city"
                        label="City"
                        placeholder="Enter City"
                        multiline
                        variant="outlined"
                    />
                    </div>
                    <div>

                  <TextField
                        id="states"
                        select
                        label="State"
                        value={this.state.selectedState}
                        helperText="Please select State"
                        variant="outlined"
                        onChange={handleStateChange}
                    > 
                    
           
                    {this.props.states.map((option) => (
                        <MenuItem key={option} value={option}>
                        {option}
                        </MenuItem>
                    ))}
                    </TextField> 
                    <TextField
                        id="district"
                        select
                        label="District"
                        value={this.state.selectedDistrict}
                        helperText="Please select District"
                        variant="outlined"
                        onChange={handleDistrictChange}
                    >
                    {this.props.districts.map((option) => (
                        <MenuItem key={option} value={option}>
                        {option}
                        </MenuItem>
                    ))}
                    </TextField>
                    <TextField
                        id="zip_code"
                        label="Zip Code"
                        placeholder="Enter Zip Code"
                        multiline
                        variant="outlined"
                    />
                    <TextField
                        id="phone_number"
                        label="Phone Number"
                        placeholder="Enter Contact Number"
                        multiline
                        variant="outlined"
                    />
                    </div>
                    <div>
                    
                    
                    <TextField 
                        id="survey_type"
                        select
                        fullWidth
                        label="Survey Type"
                        value={this.state.selectedSurveyType}
                        helperText="Please select survey type"
                        variant="outlined"
                        onChange={handleSurveyTypeChange}
                    >
                    
                    {this.state.surveyType.map((option) => (
                        <MenuItem key={option.id} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>
                    </div>
                </div>
                {this.getSurveyFormSwitch(this.state.selectedSurveyType)}
            {/* </form> */}
        </Paper>
    </div>

    );
  }
}

CommonView.propTypes = {
    classes: PropTypes.object.isRequired,
    states: PropTypes.array.isRequired,
    districts : PropTypes.array.isRequired
  };
  const mapStateToProps = state => ({
      states: getStates(state),
      districts: getDistrict(state)
  });
  
  
  export default connect(
    mapStateToProps
    ,{
        fetchStates,
        fetchDistricts
    }
  )(withStyles(styles)(CommonView));
  
