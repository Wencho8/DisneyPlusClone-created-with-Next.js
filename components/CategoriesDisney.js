import classes from "./CategoriesDisney.module.css";
import marvelLogo from "../assets/marv.png";
import starwarsLogo from "../assets/starwars.png";
import disneyLogo from "../assets/disnep.png";
import pixarLogo from "../assets/pixar.png";
import natgeoLogo from "../assets/national-geographic.png";
import Image from "next/image";

const CategoriesDisney = () =>  {

return (
  <div className={classes.container}>
    <div className={classes.category}>
        <Image src={disneyLogo} layout="fill" objectFit="contain" alt="disney" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className={classes.videoCat}
        >
          <source src="/disney.mp4" type="video/mp4" />
        </video>
    </div>
    <div className={classes.category}>
        <Image src={pixarLogo} layout="fill" objectFit="contain" alt="pixar" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className={classes.videoCat}
        >
          <source src="/pixar.mp4" type="video/mp4" />
        </video>
    </div>
    <div className={classes.category}>
        <Image src={marvelLogo} layout="fill" objectFit="contain" alt="marvel" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className={classes.videoCat}
        >
          <source src="/marvel.mp4" type="video/mp4" />
        </video>
    </div>
    <div className={classes.category}>
        <Image src={starwarsLogo} layout="fill" objectFit="contain" alt="starwars" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className={classes.videoCat}
        >
          <source src="/star-wars.mp4" type="video/mp4" />
        </video>
    </div>
    <div className={classes.category}>
        <Image src={natgeoLogo} layout="fill" objectFit="contain" alt="natgeo" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className={classes.videoCat}
        >
          <source src="/national-geographic.mp4" type="video/mp4" />
        </video>
    </div>
  </div>  

);
}

export default CategoriesDisney;