import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'


const styles = (theme: any) => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit
  }
});

class LoginPage extends React.Component {
  render() {
    var classes = {
      padding: "padding",
      margin: "margin"
    }

    return (
      <Paper className={classes.padding}>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Face />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Fingerprint />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField id="username" label="Password" type="password" fullWidth required />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <FormControlLabel control={
                <Checkbox
                  color="primary"
                />
              } label="Remember me" />
            </Grid>
            <Grid item>
              <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: '10px' }}>
            <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
          </Grid>
        </div>
      </Paper>
    );
  }
}


export default withStyles(styles)(LoginPage);