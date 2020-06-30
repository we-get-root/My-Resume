import React from 'react';
import './style.scss';

function Preloader({...props}) {
  return (
    <div class="backdrop">
      <div class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  )
}

export default Preloader;