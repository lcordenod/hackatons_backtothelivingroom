import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  eventImg: {
    width: '250px',
    borderRadius: '30px',
  }
}));

/* FIXME: Returning image cause no time to code it */

const Event = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <img className={classes.eventImg} src={props.EventImg}/>
    </React.Fragment>
  )
}

export default Event;