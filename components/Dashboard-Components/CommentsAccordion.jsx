import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
}));

export default function CommentsItemList() {
  const classes = useStyles();
  //  const [comment, setComment] = React.useState([]);

  //  temp until Redux

  const comments = [{
    id: 1, date: '01/01/2025', name: 'Hemy Sharp', avatarLink: '/static/images/avatar/1.jpg', comment: 'When will you have this done? ', questionTask: 'Block double submission 1'
  },
  {
    id: 2, date: '01/01/2053', name: 'Customer 1', avatarLink: '/static/images/avatar/1.jpg', comment: 'done yet? ', questionTask: 'Block double submission 2'
  },
  {
    id: 3, date: '01/01/2028', name: 'B.A 2', avatarLink: '/static/images/avatar/1.jpg', comment: 'Really this is taking too long? ', questionTask: 'Block double submission 3'
  }
  ];

  return (
    <List className={classes.root}>
      {comments.map((item) => {
        const {
          id, name, avatarLink, comment, questionTask, date
        } = item;

        return (
          <div key={`${id}-${questionTask}`}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={name} src={avatarLink} />
              </ListItemAvatar>
              <ListItemText
                // disableTypography
                primary={(
                  questionTask)}
                secondary={(
                  <>

                    {name}
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >

                      {` - ${comment}`}

                    </Typography>
                    <br />
                    <Typography
                      component="span"
                      variant="caption"
                    >
                      {date}
                    </Typography>
                  </>
          )}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        );
      })}
    </List>
  );
}
