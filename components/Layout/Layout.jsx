import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import NavBar from '../navigation/NavBar';
import ProjectCard from '../Dashboard-Components/ProjectCard';
import PapersBackground from '../Dashboard-Components/PapersBackground';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  scrollUp: {
    position: 'fixed',
    bottom: theme.spacing(0),
    right: theme.spacing(2)
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 4
  });

  const handleClick = (event) => {
    // const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    const anchor = event.target.ownerDocument.querySelector('html').querySelector('body').querySelector('#back-to-top-anchor');
    // eslint-disable-next-line no-console
    // eslint-disable-next-line max-len
    // console.log('anchor =>', event.target.ownerDocument.querySelector('html').querySelector('body').querySelector('#back-to-top-anchor'));
    if (anchor) {
    // eslint-disable-next-line no-console
      console.log('anchor =>', event.target.ownerDocument.querySelector('html').querySelector('body').querySelector('#back-to-top-anchor'));

      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.scrollUp}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired
};

export default function Layout(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} id="back-to-top-anchor" />
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <PapersBackground />
            </Grid>
            <Grid item xs={12}>
              <ProjectCard className={classes.paper} />
            </Grid>
          </Grid>
        </Container>
      </main>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
