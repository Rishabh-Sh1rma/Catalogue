import React, { useState, useEffect } from 'react';
import "./Scrool.css";

const Slider = () => {
  var counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 5000);

 return(
   <section className = "Scrool">
    <div className="slider">
      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
        <input type="radio" name="radio-btn" id="radio3"/>
        <input type="radio" name="radio-btn" id="radio4"/>
        <div className="slide first">
          <img src="https://images.unsplash.com/photo-1585383234137-2367d3c5302d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2Vtc3RvbmVzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
        </div>
        <div className="slide">
          <img src="https://cdn.pixabay.com/photo/2015/03/09/13/56/colorful-665704__340.jpg" alt=""/>
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1613843351058-1dd06fda7c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2Vtc3RvbmV8ZW58MHx8MHx8&w=1000&q=80" alt=""/>
        </div>
        <div className="slide">
          <img src="https://cdn.pixabay.com/photo/2014/05/10/18/51/purpurit-341399__340.jpg" alt=""/>
        </div>
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>
      </div>
      <div className="navigation-manual">
        <label for="radio1" className="manual-btn"></label>
        <label for="radio2" className="manual-btn"></label>
        <label for="radio3" className="manual-btn"></label>
        <label for="radio4" className="manual-btn"></label>
      </div>
    </div>
    </section>
  );
};

export default Slider;
