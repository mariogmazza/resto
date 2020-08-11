import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChatSharpIcon from '@material-ui/icons/ChatSharp';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import { Grid } from '@material-ui/core';
import CardExpansionPanel from './CardExpansionPanel';
import WorkInProgressSwitch from './WorkInProgressSwitch';
import ChipList from './ChipList';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275
  },
  switchContainer: {
    minWidth: 150
  },
  titleCard: {
    textAlign: 'center'
  }
}));

export default function ProjectCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={(
          <div className={classes.switchContainer}>
            <WorkInProgressSwitch />
          </div>
      )}
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        )}
        title={(
          <Typography className={classes.titleCard} variant="h6" component="div">
            Advantus Corp.
          </Typography>
            )}
        subheader={(
          <div className={classes.titleCard}>
            SRD: CNSS-140
          </div>
          )}
      />
      <CardContent>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
        >
          <Grid item>
            <List component="ul" dense>
              <ListItem>
                <ListItemIcon>
                  <AssignmentOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={`${12} To-Do's`} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <ChatSharpIcon />
                </ListItemIcon>
                <ListItemText primary={`${3} Comments`} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <AssignmentTurnedInOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={`${8} Completed Tasks`} />
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={8}
            container
            direction="row"
            justify="space-evenly"
          >
            <Grid item>
              <Typography className={classes.titleCard} variant="subtitle2" component="div">
                RF-SMART
              </Typography>
              <ChipList />
            </Grid>
            <Grid item>
              <Typography className={classes.titleCard} variant="subtitle2" component="div">
                Customer contact info
              </Typography>
              <ChipList />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <CardExpansionPanel />
      </CardActions>
    </Card>
  );
}
