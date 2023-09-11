import React from "react";
import PropTypes from 'prop-types'

import s from './Statistics.module.css'

export const Statistics = props => {
    return(
        <section className={s.section}>
            {
               // render title if prop 'title' exists
               props.title ? <h2 className={props.title}>Upload stats</h2> : 'none'
            }

            <ul className={s.list}>
                { props.stats.map(result => (
                
                    <li className={s.item} key={result.id}>   
                        <span className={s.lable}>{result.label}</span>
                        <span className={s.percentage}>{result.percentage + "%"}</span>
                    </li>       
                   
                ))}
            </ul> 
        </section>
    );
};

Statistics.propTypes = {

  title: PropTypes.string,  
  stats: PropTypes.array.isRequired,
 
};
