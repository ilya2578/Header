import React from "react";
import style from "./header.module.scss";
import Life from "./standart.svg";
import Group_31 from "./Group_31.svg";
import Message from "./Bubble.svg";
import Emily from "./Emily.svg";
import Avatar from "./Ellipse_1.svg";
import Group_32 from "./Group_32.svg";
export default function Header() {
  return (
    <div className={style.up}>
      <header>
        <div className={style.left}>
          <img src={Life} />
          <div className={style.left2}>
            <img src={Group_31} />
          </div>
          <div className={style.left3}>
            <img src={Group_32} />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.right2}>
            <img src={Message} />
            <img src={Emily} />
          </div>
          <div className={style.right3}>
            <img src={Avatar} />
          </div>
        </div>
      </header>
      <main>
      <div className={style.potrebnosti}>    
            Потребности
        </div>
        </main>
    </div>
  );
}
