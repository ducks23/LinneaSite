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
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Om}
          title={props._type}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.time}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href ={props.directions} size="small" color="primary">
          Driections
        </Button>
      </CardActions>
    </Card>
  );
}
