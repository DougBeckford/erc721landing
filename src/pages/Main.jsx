import {useState,useEffect} from 'react'; 
import scrollReveal from 'scrollreveal';
import ScrollToTop from '../components/ScrollToTop';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Free from '../components/Free';
import Clients from '../components/Clients';
import SuperRare from '../components/SuperRare';
import Release from '../components/Release';
import Like from '../components/Like';
import Signup from '../components/Signup';
import Footer from '../components/Footer';

import "../scss/index.scss"

const Main = () => {
  const [theme,setTheme] = useState("dark");

  function changeTheme(){
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  useEffect(()=>{
    const registerAnimations = () =>{
      const sr = scrollReveal({
        origin:"bottom",
        distance:"80px",
        duration:2000,
        reset:false
      });
      sr.reveal(".nav,.home,.free,.clients,.super-rare,.releases,.like,.signup,.footer",{interval:500});
    }
    registerAnimations(); 
  },[])

  window.setTimeout(()=>{
    const home = document.getElementsByClassName("home");
    home[0].style.transform="none"
    console.log("home: ",home[0])
    const nav = document.getElementsByClassName("nav");
    nav[0].style.transform="none"
    console.log("nav: ",nav[0])
  },1500)

    return (
    <div className="app-container" data-theme={theme}>
      <ScrollToTop/>
      <Navbar changeTheme={changeTheme} currentTheme={theme}/>
      <Home/>
      <Free/>
      <Clients/>
      <SuperRare/>
      <Release/>
      <Like/>
      <Signup/>
      <Footer/>
    </div>
    );
}
export default Main;