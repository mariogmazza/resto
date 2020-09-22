import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
import ChipList from './ChipList';
import PapersBackground from './PapersBackground';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  switchContainer: {
    minWidth: 150
  },
  titleCard: {
    textAlign: 'center',
    color: '#ffffff'
  },
  subHeader: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 420,
    fontSize: '0.8rem'
  },
  subHeader_number: {
    textAlign: 'center',
    color: '#ff7543',
    fontWeight: 420,
    fontSize: '0.8rem'
  },
  cardHeader_custom: {
    backgroundColor: "#005b4f"
  },
  cardHeader_Settings_Icon: {
    color: '#ffffff'
  },
  summeryIconCard: {
    color: '#651FFF'
  }
}));

export default function ProjectCard() {
  const classes = useStyles();
  const todosAssignedToMe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const completedTasksAssignedToMe = [1, 2, 3, 4, 5, 6, 7, 8];
  const commentsArr = [1, 2, 3, 4];

  const jiraCardMainInfo = {
    customerName: 'Advantus Corp.',
    srdNumber: 'CNSS-140'
  };

  return (
    <>
      <PapersBackground />
      <Card className={classes.root}>
        <CardHeader
          //   avatar={(
          //     <div className={classes.switchContainer}>
          //       <WorkInProgressSwitch />
          //     </div>
          // )}
          className={classes.cardHeader_custom}
          action={
            <IconButton className={classes.cardHeader_Settings_Icon} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography
              className={classes.titleCard}
              variant="h6"
              component="div"
            >
              {jiraCardMainInfo.customerName}
            </Typography>
          }
          subheader={
            <div className={classes.subHeader}>
              SRD: <span className={classes.subHeader_number}>
                {jiraCardMainInfo.srdNumber}
              </span>
            </div>
          }
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
                  <ListItemText
                    className={classes.summeryIconCard}
                    primary={`${todosAssignedToMe.length} To-Do's`}
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <ChatSharpIcon />
                  </ListItemIcon>
                  <ListItemText primary={`${commentsArr.length} Comments`} />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <AssignmentTurnedInOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${completedTasksAssignedToMe.length} 
                       Completed Tasks`}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={8} container direction="row" justify="space-evenly">
              <Grid item>
                <Typography
                  className={classes.titleCard}
                  variant="subtitle2"
                  component="div"
                >
                  RF-SMART
                </Typography>
                <ChipList />
              </Grid>
              <Grid item>
                <Typography
                  className={classes.titleCard}
                  variant="subtitle2"
                  component="div"
                >
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
    </>
  );
}
