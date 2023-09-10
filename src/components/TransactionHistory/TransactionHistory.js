import React from "react";

import t from './TransactionHistory.module.css'

export const TransactionHistory =  props => {
    return(
        
        <table className={t.table}>
            <thead className={t.head}>
                <tr className={t.row}>
                    <th className={t.cell}>
                        Type
                    </th>
                    <th className={t.cell}>
                        Amount
                    </th>
                    <th className={t.cell}>
                        Currency
                    </th>
                </tr>
            </thead>

            <tbody>
                {
                    props.items.map((element, index) => (
                        <tr className={`${index % 2 ? t.even : t.odd} ${t.row}`}  key={element.id}>
                            <td className={t.cell}>
                               {element.type}
                            </td>
                            <td className={t.cell}>
                               {element.amount}
                            </td>
                            <td className={t.cell}>
                               {element.currency}
                            </td>
                        </tr>
                    ))
                    
                }
            </tbody>
        </table> 
        
    )
}