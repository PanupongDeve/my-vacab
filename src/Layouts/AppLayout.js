import React, { Component, Fragment } from 'react'
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Appbar from '../components/Appbar'
import Sidebar from '../components/Sidebar';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '80vh',
    marginTop: '25px'
  },
  sideBar: {
    marginTop: '25px'
  }
});;
class AppLayout extends Component {
  

  render() {
    const { classes } = this.props;
    return (
      <Fragment >
        <Appbar />
        <Container maxWidth="xl">
          <Grid xs={12}>
            <Paper className={classes.paper}>
            <Grid container xs={12}>
                <Grid className={classes.sideBar} item md={4} xs={12}>
                  <Sidebar />
                </Grid>
                <Grid item  md={8} xs={12}>
                  {this.props.children}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Container>
      </Fragment>
    )
  }
}

export default withStyles(styles)(AppLayout);
