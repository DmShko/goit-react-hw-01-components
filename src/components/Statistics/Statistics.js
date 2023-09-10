import React from "react";
import s from './Statistics.module.css'

export const Statistics = props => {
    return(
        <section className={s.section}>
            <h2 className={s.title}>Upload stats</h2>
            <ul className={s.list}>
                { props.data.map(result => (
                
                    <li className={s.item} key={result.id}>   
                        <span className={s.lable}>{result.label}</span>
                        <span className={s.percentage}>{result.percentage + "%"}</span>
                    </li>       
                   
                ))}
            </ul> 
        </section>
    );
};