import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Om from "../images/om.png"
import {Link} from 'react-router-dom'

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
  <Grid item xs={3}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Om}
          title={props._title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props._title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props._about}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props._tools}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href ={props._ul} size="small" color="primary">
          Buy $3.00
        </Button>
      </CardActions>
    </Card>
  </Grid>
  );
}
