import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatSharpIcon from '@material-ui/icons/ChatSharp';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import Grid from '@material-ui/core/Grid';
import TodoListAccordion from './TodoListAccordion/TodoListAccordion';
import SaveTodoListAccordion from './TodoListAccordion/SaveTodoListAccordion';
import CommentsAccordion from './CommentsAccordion';
import CompletedTasksAccordion from './CompletedTasksAccordion';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  closedAccord_paper: {
    background: '#00897b',
    color: '#ffffff',
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightLight
  }
}));

export default function CardExpansionPanel() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <Accordion className={classes.closedAccord_paper} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <span>
            <AssignmentOutlinedIcon />
          </span>
          <Typography className={classes.heading} component="span">
            To-Do&apos;s List
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            direction="column"
            justify="flex-start"
          >
            <Grid item xs>
              <TodoListAccordion />
            </Grid>
            <Grid item xs>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
              >
                <Grid item>
                  <SaveTodoListAccordion />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <span>
            <ChatSharpIcon />
          </span>
          <Typography className={classes.heading}>Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CommentsAccordion />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <span>
            <AssignmentTurnedInOutlinedIcon />
          </span>
          <Typography className={classes.heading}>Tasks completed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CompletedTasksAccordion />
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
