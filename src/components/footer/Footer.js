import React from "react";
import "../../styles/Footer.css";
import ShuffleRoundedIcon from "@material-ui/icons/ShuffleRounded";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import SkipPreviousRoundedIcon from "@material-ui/icons/SkipPreviousRounded";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid , Slider } from "@material-ui/core";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
       <img className="footer__albumLogo" src="https://images-na.ssl-images-amazon.com/images/I/71nHJk%2BhoHL._AC_UL600_SR600,600_.jpg" alt=""/>
       <div className="footer__songInfo">
            <h4>Yeah</h4>
            <p>Usher</p>
       </div>
      </div>

      <div className="footer__center">
        <ShuffleRoundedIcon className="footer__green"/>
        <SkipPreviousRoundedIcon className="footer__icon" />
        <PlayCircleOutlineRoundedIcon
          fontSize="large"
          className="footer__icon"
        />
        <SkipNextRoundedIcon className="footer__icon" />
        <RepeatRoundedIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item>
            <Slider/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
