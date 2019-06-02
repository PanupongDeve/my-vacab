import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#2196f3'
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
  });
class Appbar extends Component {
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
            <AppBar style={{ backgroundColor: '#2196f3'}} position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  My-Vocab
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
        )
    }
}

const AppBarWithStyles = withStyles(styles)(Appbar)

export default AppBarWithStyles;
