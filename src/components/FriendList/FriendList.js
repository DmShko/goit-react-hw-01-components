import React from "react";
import p from './FriendList.module.css';

import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = props => {
    return (
        
        <ul className={p.list}>
            {
                props.friends.map(element => (

                    <FriendListItem avatar={element.avatar} key={element.id} name={element.name} isOnline={element.isOnline}/>

                ))
            }
        </ul>

    )
};

