import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { ThemeProvider } from '@material-ui/styles';
import { lightBlue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#343a40'
  }
});

const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[300] }, // Purple and green play nicely together.
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <ThemeProvider theme={theme}>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction to='/' component={Link} className={classes.selected} label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction to='/about' component={Link} className={classes.selected} label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction to='/shop' component={Link} className={classes.selected} label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction className={classes.selected} label="Folder" value="folder" icon={<Icon>folder</Icon>} />
    </BottomNavigation>
    </ThemeProvider>
  );
}