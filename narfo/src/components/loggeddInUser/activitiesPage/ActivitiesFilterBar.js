import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: 200,
    margin: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

function ActivitiesFilterBar(props) {
  const { classes } = props;
  return (
    <form className={classes.container} noValidate>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-label-placeholder">
          Activity Type
        </InputLabel>
        <Select
          // value={state.age}
          // onChange={handleChange}
          input={<Input name="Activity Type" id="age-label-placeholder" />}
          displayEmpty
          name="Activity Type"
          className={classes.selectEmpty}
        >
          <MenuItem value="Dedicated Sports Shooting Activity">
            Dedicated Sports Shooting Activity
          </MenuItem>
          <MenuItem value="Dedicated Hunter Activity">
            Dedicated Hunter Activity
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2019-02-11"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}

ActivitiesFilterBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActivitiesFilterBar);
