import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBarLogged from "../components/navbarLogged";
import UserCard from "../components/userCard";
import Timeline from "../components/timeline";
import Grid from '@material-ui/core/Grid';
import FirstEvent from '../assets/event-1.png';
import SecondEvent from '../assets/event-2.png';
import ThirdEvent from '../assets/event-3.png';
import EventCard from '../components/eventCard';
import UserModal from '../components/userModal';
import PsLogo from '../assets/apps/ps.png';
import VSCodeLogo from '../assets/apps/vscode.png';
import GitKrakenLogo from '../assets/apps/gitkraken.png';
import ExcelLogo from '../assets/apps/excel.png';
import UserOneImg from '../assets/users/user-one-img.jpg';
import UserTwoImg from '../assets/users/user-two-img.jpg';
import UserThreeImg from '../assets/users/user-three-img.jpeg';
import UserFourImg from '../assets/users/user-four-img.jpg';

const HomeLogged = () => {
  const useStyles = makeStyles(() => ({
    homeContainer: {
      marginLeft: '5%',
      marginRight: '5%',
      position: 'relative',
      height: '800px',
      zIndex: '99999999999',
    },
    title: {
      fontSize: '1.7em',
    },
    secondRowCards: {
      position: 'relative',
      top: '-250px',
    },
    grid: {
      height: '520px',
    },
    userModal: {
      zIndex: 9999999999999999999999999,
    }
  }));
  const classes = useStyles();
  const [isModalOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    console.log('toggle modal');
		setModalIsOpen(!isModalOpen);
  };

  const userOne = {
    img: UserOneImg,
    name: 'Jean Mironeau',
    title: 'Designer',
    active: 'active',
    status: 'Available to chat',
    app: {img: PsLogo, label: 'Photoshop', filename: 'homepage-v1.psd'}
  }

  const userTwo = {
    img: UserTwoImg,
    name: 'Monica Doe',
    title: 'Backend Developer',
    active: 'inactive',
    status: 'Debugging, do not disturb! 🙏',
    app: {img: VSCodeLogo, label: 'VS Code', filename: 'payment.go'}
  }

  const userThree = {
    img: UserThreeImg,
    name: 'Kevin Bleu',
    title: 'Digital Marketing',
    active: 'inactive',
    status: 'Available at 5PM',
    app: {img: ExcelLogo, label: 'Excel', filename: 'nov-sales.xls'}
  }

  const userFour = {
    img: UserFourImg,
    name: 'Julie Tulipe',
    title: 'Front-end Developer',
    active: 'active',
    status: 'Available to chat',
    app: {img: GitKrakenLogo, label: 'GitKraken'}
  }

  return (
    <React.Fragment>
      <NavBarLogged activeTab='home'/>
        <div className={classes.homeContainer}>
          {isModalOpen && <UserModal className={classes.userModal} onRequestClose={toggleModal} />}
          <h5 className={classes.title}>My Teammates</h5>
          <Grid className={classes.grid} container spacing={6}>
            <Grid item xs={4} onClick={toggleModal}>
              <UserCard userData={userOne}/>
            </Grid>
            <Grid item xs={4}>
              <UserCard userData={userTwo}/>
            </Grid>
            <Grid item xs={4}>
              <Timeline/>
            </Grid>
            {/* FIXME: Should be on a second row */}
            <Grid className={classes.secondRowCards} item xs={4}>
              <UserCard userData={userThree}/>
            </Grid>
            <Grid className={classes.secondRowCards} item xs={4}>
              <UserCard userData={userFour}/>
            </Grid>
          </Grid>
          <h5 className={classes.title}>My Events</h5>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <EventCard EventImg={FirstEvent}/>
            </Grid>
            <Grid item xs={3}>
              <EventCard EventImg={SecondEvent}/>
            </Grid>
            <Grid item xs={3}>
              <EventCard EventImg={ThirdEvent}/>
            </Grid>
          </Grid>
        </div>
    </React.Fragment>
  )
}

export default HomeLogged;