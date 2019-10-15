import React from 'react'

const PrintArr = ({arr,fn}) => {

    const result = arr.map(({pcode,pname,price,selected}) => 
                <li key={pcode}>{pname} {price}
                <input type='checkbox' defaultChecked={selected} onChange={()=>fn({pcode})}>
                </input></li>
        )
}