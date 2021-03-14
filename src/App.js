import './App.css';
import { GiAppleCore } from 'react-icons/gi';
import {BsBatteryFull, BsTrash2Fill } from 'react-icons/bs'; 
import {FaWifi, FaPhoneSquareAlt} from 'react-icons/fa'; 
import {GoFileDirectory} from 'react-icons/go'; 
import {FcSettings} from 'react-icons/fc'; 




function App() {
  return (
    <div>
      <div classname="header">
       
      </div>
    <div className="App">
      <div className= "laptop">
       <div className="bg-pink"> 
       <img className="tab" src="https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"alt="stars"/>
        <img className="stars" src="https://images.pexels.com/photos/2395249/pexels-photo-2395249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="desktop"/>
        
         <div className="text">
           <div className="top-bar">
             <span><GiAppleCore className="apple"/></span>
             <p>Hover Over Icons To View Projects</p>
             <p className="time"><BsBatteryFull className="battery"/> <FaWifi className="battery"/>It's Time for you to hire me!</p>
            </div>
         <h2>TASNIM ALOM</h2>
         <h3>Full stack developer.</h3> 
         <div className="banners">
          <h5>Contact Me</h5> 
         <h5> My Resume</h5>
         </div>
         <div className="bar">
          
          <FaPhoneSquareAlt className="phone"/>
           <FcSettings className="gear"/>
         
          <BsTrash2Fill className="trash"/>
          <GoFileDirectory className="file"/>
         </div>
         </div>
        </div>
      </div>
        <div className="phone"></div>
      
    </div>
    </div>
  );
}

export default App;
