import React from 'react';
import TimelineImg from '../assets/timeline.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  timelineImg: {
    width: '400px',
    borderRadius: '30px',
  }
}));

/* FIXME: Returning image cause no time to code it */

const Timeline = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <img className={classes.timelineImg} src={TimelineImg}/>
    </React.Fragment>
  )
}

export default Timeline;