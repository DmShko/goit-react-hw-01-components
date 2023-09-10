import React from "react";

import fl from './FriendListItem.module.css';

export const FriendListItem = props => {
    return(
        <li className={fl.item} key={props.id}>

            {
                
               props.isOnline ? <span className={`${fl.statusTrue} ${fl.main}`}></span> : <span className={`${fl.statusFalse} ${fl.main}`}></span>
                
            }
           
            <img className={fl.avatar} src={props.avatar} alt="User avatar" width="48" />
            <p className={fl.name}>{props.name}</p>
        </li>
    )
};
