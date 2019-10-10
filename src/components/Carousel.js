import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Pic1 from '../images/pic1.jpeg'
import Pic2 from '../images/bike.jpg'
import Pic3 from '../images/pic3.jpeg'
import "./style.css"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 700,

  }
});

function Carousel(){
    const classes = useStyles();
    return (
    <div className={classes.root}>
    
      <div id="demo" className="carousel slide" data-ride="carousel">
       {/* Indicators */}
       <ul className="carousel-indicators">
         <li data-target="#demo" data-slide-to={0} className="active" />
         <li data-target="#demo" data-slide-to={1} />
         <li data-target="#demo" data-slide-to={2} />
       </ul>
       {/* The slideshow */}
       <div className="carousel-inner">
         <div className="carousel-item active">
           <img src={Pic1} alt="Los Angeles" width="600" height="300" />
           <div class="carousel-caption">
               <h3>Yoga and Movement</h3>
             </div>
         </div>
         <div className="carousel-item">
           <img src={Pic2} alt="Chicago" width="600" height="300" />
         </div>
         <div className="carousel-item">
           <img src={Pic3} alt="New York" width="600" height="300" />
         </div>
       </div>
       {/* Left and right controls */}
       <a className="carousel-control-prev" href="#demo" data-slide="prev">
         <span className="carousel-control-prev-icon" />
       </a>
       <a className="carousel-control-next" href="#demo" data-slide="next">
         <span className="carousel-control-next-icon" />
       </a>
     </div>
   </div>
  )};

export default Carousel
