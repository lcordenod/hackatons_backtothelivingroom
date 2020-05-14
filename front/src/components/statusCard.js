import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StatusImg from '../assets/status.png'

const useStyles = makeStyles(() => ({
  statusImg: {
    width: '160px',
    borderRadius: '10px',
  }
}));

/* FIXME: Returning image cause no time to code it */

const Status = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <img className={classes.statusImg} src={StatusImg}/>
    </React.Fragment>
  )
}

export default Status;