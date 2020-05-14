import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AvatarBadge from './avatarBadge';
import clsx from 'clsx';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MessageIcon from '@material-ui/icons/Message';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AppPreview from './appPreview';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: 'none',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  statusText: {
    color: 'grey',
    fontSize: 14,
    position: 'relative',
    top: '-20px',
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: '20px',
    height: '50px',
  },
  userSettings: {
    position: 'relative',
    left: '200px',
  },
  currentApp: {
    position: 'relative',
    top: '10px',
    right: '-30px',
  },
  currentlyLabel: {
    fontSize: '12px',
  }
});

const UserCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <AvatarBadge img={props.userData.img} active={props.userData.active} />
        }
        action={
          <React.Fragment>
            <div className={classes.currentApp}>
              <div className={classes.currentlyLabel}>
                Currently on
              </div>
              <AppPreview appData={props.userData.app} />
            </div>
          </React.Fragment>
        }
        title={props.userData.name}
        subheader={props.userData.title}
      />
      <CardContent>
        <span className={classes.statusText}>
          {props.userData.status}
        </span>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<MessageIcon />}
          endIcon={<ArrowForwardIcon />}
        >
          Message
        </Button>
        <IconButton aria-label="show more" className={classes.userSettings}>
            <MoreVertIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default UserCard;