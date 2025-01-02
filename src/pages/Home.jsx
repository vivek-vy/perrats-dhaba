/* eslint-disable react/no-unescaped-entities */

import { NavLink} from 'react-router-dom';
import {Button} from "@mui/material"
import Banner from '../../public/images/banner.jpeg'
import "../styles/HomeStyles.css"
const Home = () => {
  return (
    
     <>
     <div className="home" style={{backgroundImage:`url(${Banner})`}}>
      <div className='headerContainer'>
        <h1>Perrat's Dhaba</h1>
        <p>Best Food In India</p>
        <Button>
          <NavLink to={"/menu"}>Lets Explore</NavLink>
        </Button>
        <br />
      </div>
     </div>
     </>
   
  );
};

export default Home;
