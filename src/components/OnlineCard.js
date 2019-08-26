import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import One from "../images/one.jpg"
import Two from "../images/two.jpg"
import Three from "../images/three.jpg"
import Four from "../images/pic4.jpeg"

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

function getPic2(id){
    if(id === 1){
        return One;
    }
    else if(id === 2){
        return Two;
    }
    else if(id=== 3){
    return Three;
    }
    else if(id=== 4){
    return Four;
}

  }

export default function MediaCard(props) {
  const classes = useStyles();

  return (
  <Grid item xs={4}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={getPic2(props.pic)}
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
          View
        </Button>
      </CardActions>
    </Card>
  </Grid>
  );
}
