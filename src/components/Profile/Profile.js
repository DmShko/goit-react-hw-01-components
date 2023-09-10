import React from "react";
import p from './Profile.module.css';


export const Profile = props => {
    return(
        <div className={p.profile}>
            <div className={p.description}>
                <img
                    src={props.avatar}
                    className={p.avatar}
                    width={320}
                    alt="user"
                />
                <p className={p.name}>{props.username}</p>
                <p className={p.tag}>{props.tag}</p>
                <p className={p.location}>{props.location}</p>
            </div>

            <ul className={p.stats}>
                <li>
                    <span className={p.label}>{Object.keys(props.stats)[0]}</span>
                    <span className={p.quantity}>{props.stats.followers}</span>
                </li>
                <li>
                    <span className={p.label}>{Object.keys(props.stats)[1]}</span>
                    <span className={p.quantity}>{props.stats.views}</span>
                </li>
                <li>
                    <span className={p.label}>{Object.keys(props.stats)[2]}</span>
                    <span className={p.quantity}>{props.stats.likes}</span>
                </li>
            </ul>
        </div>
    )
};

