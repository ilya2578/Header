import React from "react";
import style from './header.module.scss';
import Life from './standart.svg';
import Group_31 from './Group_31.svg';
import Message from './Bubble.svg';
import Emily from './Emily.svg';
import Avatar from './Ellipse_1.svg';
import Group_32 from './Group_32.svg';
export default function Header() {
  return <div className={style.up}>
      <header>
      <div className="left">
       <img src={Life}/> 
       <img src={Group_31}/>
       <img src={Group_32}/>
       </div>
       <div className="rights"> 
       <img src={Message}/>
       <img src={Emily}/>
       <img src={Avatar}/>
      </div>
      </header>
  </div>;
}
