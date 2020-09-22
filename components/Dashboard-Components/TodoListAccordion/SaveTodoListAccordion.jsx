import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import blue from '@material-ui/core/colors/blue';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonSuccess: {
    backgroundColor: green[500],
    color: 'white',
    '&:hover': {
      backgroundColor: green[700],
      color: 'white'
    }
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1
  },
  buttonCustom: {
    backgroundColor: blue[300],
    color: 'white',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color: 'white'

    }
  }
}));

export default function CircularIntegration() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
    [classes.buttonCustom]: !success
  });

  React.useEffect(() => () => {
    clearTimeout(timer.current);
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Tooltip title="Save TODOs" placement="left" aria-label="save">
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Fab
            aria-label="save"
            className={buttonClassname}
            onClick={handleButtonClick}
          >
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
          {loading && <CircularProgress size={68} className={classes.fabProgress} />}
        </div>
      </div>
    </Tooltip>
  );
}
