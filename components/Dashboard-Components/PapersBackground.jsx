import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(35),
      height: theme.spacing(16)
    }
  },
  title: {
    textAlign: 'center',
    backgroundColor: blue[300],
    color: 'white'
  },
  content: {
    textAlign: 'center',
    color: 'rgb(99 98 98 / 87%)'
  }

}));

const item = [{ titleProp: 'Project hours', contentProp: 200 }, { titleProp: 'Number of Tasks', contentProp: 54 }, { titleProp: 'Used hours', contentProp: 23 }];

export default function PaperBackground() {
  const classes = useStyles();

  // const { titleProp, contentProp } = props;

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        className={classes.root}
      >
        {item.map((val) => (
          <Card key={val.titleProp}>
            <CardHeader
              className={classes.title}
              title={val.titleProp || 'Place Holder'}
            />
            <Divider variant="middle" />
            <CardContent className={classes.content}>
              <Typography variant="h4">
                {val.contentProp || 'Content'}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </>
  );
}
