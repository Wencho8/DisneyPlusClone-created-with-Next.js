import classes from "./HeaderBar.module.css";
import logoDisney from "../assets/logoD.svg";
import Image from "next/image";
import avatar from "../assets/vader.png";
import { useState, useEffect} from "react";
import { useRouter } from "next/router";

import {
  HomeIcon,
  PlusIcon,
  StarIcon,
  TvIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

const HeaderBar = () => {
  const [show, handleShow] = useState(false);
  const router = useRouter();

  useEffect (() => {  
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100 ) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    })
    return () => {
        window.removeEventListener('scroll',null) //Removerlo para que no se quede escuchando
    }

} ,[])

const clickHandler = () => {
  router.push("/");
}


  return (
      <div className={`${classes.container} ${show  && classes.containerScrolled} `}>
        <Image onClick={clickHandler} className={classes.logoDisney} src={logoDisney} alt="logo" />
        <div onClick={clickHandler}  className={classes.wrapper}>
          <HomeIcon className={classes.icons} />
          <p>Home</p>
        </div>
        <div onClick={() => { router.push("/watchlist");} } className={classes.wrapperList}>
          <PlusIcon className={classes.icons} />
          <p>My list</p>
        </div>
        <div onClick={() => { router.push("/originals");} } className={classes.wrapper}>
          <StarIcon className={classes.icons} />
          <p>Originals</p>
        </div>
        <div onClick={() => { router.push("/");}} className={classes.wrapper}>
          <TvIcon className={classes.icons} />
          <p>Movies</p>
        </div>
        <div onClick={() => { router.push("/");}}  className={classes.wrapper}>
          <ComputerDesktopIcon className={classes.icons} />
          <p>Series</p>
        </div>
        <Image className={classes.avatar} src={avatar} alt="avatar" />
    </div>
     
  );
};

export default HeaderBar;

/*

*/
