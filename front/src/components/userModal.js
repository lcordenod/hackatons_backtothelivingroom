import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UserModalImg from '../assets/user-modal.png';

const Modal = ({ onRequestClose }) => {
  const useStyles = makeStyles(() => ({
    modal__backdrop: {
      background: 'rgba(0, 0, 0, .65)',
      bottom: 0,
      left: 0,
      overflow: 'auto',
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: 1,
    },
    modal__container: {
      background: '#fff',
      borderRadius: '30px',
      maxWidth: '100%',
      margin: '50px auto',
      padding: '15px',
      width: '560px',
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
    userModalImg: {
      width: '560px',
    }
  }));
  const classes = useStyles();
  // Use useEffect to add an event listener to the document
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				onRequestClose();
			}
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
  });

  /* FIXME: Returning image cause no time to code it */

	return (
		<div className={classes.modal__backdrop}>
			<div className={classes.modal__container}>
      <img className={classes.userModalImg} src={UserModalImg}/>
			</div>
		</div>
	);
};

export default Modal;
