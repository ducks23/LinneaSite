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
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Om}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Yoga 2/3
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Hands, heart and hamstrings connect to create stable and sweet side bending in triangle pose
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Props: strap, blanket, 2 blocks
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="https://onlineclasses.thebhaktishop.com/courses/yoga-2-3-with-linnea" size="small" color="primary">
          Buy $3.00
        </Button>
      </CardActions>
    </Card>
  );
}
