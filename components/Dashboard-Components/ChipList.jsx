import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0
  },
  chip: {
    margin: theme.spacing(0.5),
    borderColor: blue[300]
  }
}));

export default function ChipsArray(props) {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Dev 1' },
    { key: 1, label: 'Dev 2' },
    { key: 2, label: 'BA 1' },
    { key: 3, label: 'BA 2' }
  ]);

  //   const handleDelete = (chipToDelete) => () => {
  //     setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  //   };
  const iconCustom = (data) => {
    const { user } = props;

    if (user && user.pic) {
      return (
        <Chip
          avatar={<Avatar>M</Avatar>}
          label={data ? data.label : ''}
          className={classes.chip}
          variant="outlined"
        />
      );
    }

    return (
      <Chip
        icon={<TagFacesIcon />}
        label={data ? data.label : ''}
        className={classes.chip}
        variant="outlined"

      />

    );
  };

  return (
    <Box component="ul" className={classes.root}>
      {chipData.map((data) => (
        <li key={data.key}>
          {iconCustom(data)}
        </li>
      ))}
    </Box>
  );
}
