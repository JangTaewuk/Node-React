import React from 'react'

function Sample1 (props) {
    console.log("props" , props)

    return(
        <div>
            <h5> function component </h5>
            <h1>
                {props.title}
            </h1>
        </div>
    )
}

export default Sample1