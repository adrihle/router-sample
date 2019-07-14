import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function UserCard({ match }) {
  const classes = useStyles();

  useEffect(() => {
    getUser()
  }, [])

  const [user, setUser] = useState({
      //Hay que declarar que es un json anidado, si no da error
      address: {}
  });

  const url = 'http://jsonplaceholder.typicode.com/users/'

  const getUser = async () => {
      const fetchUser = await fetch(url + match.params.id);
      const user = await fetchUser.json()
      setUser(user)
  }

  
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {user.email}
        </Typography>
        <Typography variant="h5" component="h2">
          {user.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            {user.address.city}
        </Typography>
        <Typography variant="body2" component="p">
          {user.phone}
          <br />
          {user.website}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Fuck her</Button>
      </CardActions>
    </Card>
  );
}