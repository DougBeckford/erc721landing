import {useState,useEffect} from 'react'
import scrollReveal from 'scrollreveal';
import Navbar from '../components/Navbar';
import Tree from "../components/Tree";
import "../scss/index.scss";

const Roadmap = () => {
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


        return (<div className="app-container" data-theme={theme}>
                <Navbar changeTheme={changeTheme} currentTheme={theme}/>
                <Tree/>
        </div>);
}
export default Roadmap;