import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

import './style.css';
import Pic1 from '../images/pic1.jpeg'
import Pic2 from '../images/pic2.jpeg'
import Pic3 from '../images/pic3.jpeg'
import Pic4 from '../images/pic4.jpeg'

const content = [
  {
    title: 'My Experience',
    description: "Linnea is an incredible yoga teacher and person. She is patient, thoughtful, genuine and inspiring. Her classes are well considered and seamlessly tie storytelling, body awareness, meditation, and exercise together. I have taken yoga classes for over 10 years but did not embrace or understand yoga as part of my daily life until taking classes with her.  I try to take classes with her every chance I get. Her positivity, understanding of movement and love of teaching make her a joy to work with and learn from.",
    image: Pic1,
    user: 'Emily Nachison',
    userProfile: 'https://i.imgur.com/JSW6mEk.png'
  }, {
    title: 'Consitent',
    description: 'Despite taking many classes over the years, a consistent yoga practice eluded me until I took my first class with Linnea. The dedication, intention, and joy that she brings to her classes is the foundation for my daily practice. Linnea brings authenticity, a love of movement, and personal insight to her classes. Although I know she prepares extensively for her classes, they do not feel rote, repetitive, or that boxes are being ticked. It feels as though she is along with us, excited and curious, as we discover the next movement. And that excitement is infectious.',
    image: Pic2,
    user: 'Michael Endo',
    userProfile: 'https://i.imgur.com/0Clfnu7.png'
  }, {
    title: 'Wonderful :)',
    description: 'Linnea’s love for this practice is contagious, which makes it a delight to attend her classes. Her teaching style is a playfully choreographed dance of traditional and non-traditional postures assisted with a detailed anatomy lesson exploring our felt senses. I truly appreciate any class that prompts me to muse over my body’s cells, organs and/or muscles to better understand my internal systems. Linnea offers a holistic approach to moving, strengthening and perceiving the body that fills me with just the right balance of physical and cerebral education.',
    image: Pic3,
    user: 'Adrian E.',
    userProfile: 'https://i.imgur.com/4KeKvtH.png'
  }
];

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    maxheight: '100vh',
    justify: "center",
    margin: "auto",
    padding: 20
  },
  root1:{
    padding: 10


}
});

function Testimonials() {
  const classes = useStyles();
  return (<div className={classes.root}>
    <Box borderRadius={16} bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>

        <h1>Testimonials</h1>
        <p className={classes.root1}>Linnea is an incredible yoga teacher and person. She is patient, thoughtful, genuine and inspiring. Her classes are well considered and seamlessly tie storytelling, body awareness, meditation, and exercise together. I have taken yoga classes for over 10 years but did not embrace or understand yoga as part of my daily life until taking classes with her.  I try to take classes with her every chance I get. Her positivity, understanding of movement and love of teaching make her a joy to work with and learn from. -Emily Nachison</p>

       <p className={classes.root1}>Despite taking many classes over the years, a consistent yoga practice eluded me until I took my first class with Linnea. The dedication, intention, and joy that she brings to her classes is the foundation for my daily practice. Linnea brings authenticity, a love of movement, and personal insight to her classes. Although I know she prepares extensively for her classes, they do not feel rote, repetitive, or that boxes are being ticked. It feels as though she is along with us, excited and curious, as we discover the next movement. And that excitement is infectious. -Michael Endo
      </p>
      <p className={classes.root1}>
        Linnea’s love for this practice is contagious, which makes it a delight to attend her classes. Her teaching style is a playfully choreographed dance of traditional and non-traditional postures assisted with a detailed anatomy lesson exploring our felt senses. I truly appreciate any class that prompts me to muse over my body’s cells, organs and/or muscles to better understand my internal systems. Linnea offers a holistic approach to moving, strengthening and perceiving the body that fills me with just the right balance of physical and cerebral education. -Adrian E.
      </p>

    </Box>
  </div>);
}
export default Testimonials
