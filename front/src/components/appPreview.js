import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  appLogo: {
    maxWidth: '30px',
    maxHeight: '30px',
  },
  appLabel: {
    paddingLeft: '5px',
    fontSize: '12px',
  },
  fileLabel: {
    fontSize: '10px',
    color: 'grey',
  }
}));

const AppPreview = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Button>
          <img className={classes.appLogo} src={props.appData.img}/>
          <span className={classes.appLabel}>{props.appData.label}</span>
        </Button>
        {props.appData.filename ? <div className={classes.fileLabel}>📂 {props.appData.filename}</div> : null}
    </React.Fragment>
  )
}

export default AppPreview;