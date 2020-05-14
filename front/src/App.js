import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './App.css';
import NavBar from './components/navbar';
import BackgroundRemote from './assets/background-remote.jpg';

function App() {
  const useStyles = makeStyles(() => ({
    backgroundRemote: {
      width: '100%',
      height: '1200px',
      background: `url(${BackgroundRemote})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity: '0.8',
    },
    backgroundLayer: {
      backgroundColor: 'rgba(137, 196, 244, 0.2)',
      width: '100%',
      height: '100%',
    },
    homeText: {
      position: 'absolute',
      top: '450px',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      backgroundColor: 'rgba(245, 171, 53, 0.9)',
      padding: '40px',
      borderRadius: '30px',
    },
    title: {
      fontSize: '3em',
    },
    tagline: {
      fontSize: '1.5em',
    },
    cta: {
      position: 'absolute',
      top: '700px',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'orange',
      width: '200px',
      height: '60px',
      fontSize: '22px',
    }
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar activeTab="home"/>
      <div className="App">
        <div className={classes.backgroundRemote}>
          <div className={classes.backgroundLayer}>
          </div>
        </div>
        <div className={classes.homeText}>
          <h1 className={classes.title}>Be here. With your colleagues. Virtually.</h1>
          <h2 className={classes.tagline}>Back2Work gives you all you need to make the best of your interactions with your remote colleagues!</h2>
        </div>
        <Button variant="contained" size="large" color="primary" className={classes.cta} href="/user/login">
            Login now
        </Button>
      </div>
    </React.Fragment>
  );
}

export default App;
