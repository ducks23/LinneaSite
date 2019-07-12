import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,

  },
});

function Bio(){
    const classes = useStyles();
    return (
      <Grid container justify = "center">
        <div className={classes.root}>
            <Typography mx="auto" variant="h6" gutterBottom>
                Why I teach
            </Typography>
            <Typography variant="subtitle1" gutterBottom> I teach yoga because I love it dearly and I delight in sharing this practice of connection and curiosity with others. I believe that mindful movement can be healing and empowering and that building a healthy relationship with our own bodies can help us as we pursue healthy relationships with the people and circumstances around us. For the past 19 years of my life yoga has been a secure and consistent source of support and grounding     especially in times of stress and upheaval. My desire is to create communities that feel warm, supportive and safe in which we can explore our humanness with compassion, humor and love.

            </Typography>


        </div>
        </Grid>

)

}

export default Bio
