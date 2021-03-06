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
import Bhakti from '../images/Bhakti.jpg'
import Py from '../images/peoplesYoga.jpg'
import Np from '../images/npyoga.png'


const useStyles = makeStyles({
  card: {
    maxWidth: 200,
  },
  media: {
    height: 80,
  },
});


export default function ScheduleCard(props) {
  const classes = useStyles();
  function getPic(id){
      if(id === 1){
          return Bhakti;
      }
      else if(id === 2){
          return Py;
      }
      else if(id=== 3){
      return Np;
}

  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={getPic(props.pic)}
          title={props._type}
        />
        <CardContent>
          <h2>
            {props.type}
          </h2>
          <h3>
            {props.time}
          </h3>
          <p>
            {props.location}
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href ={props.directions} size="small" color="secondary">
          Driections
        </Button>
      </CardActions>
    </Card>
  );
}
