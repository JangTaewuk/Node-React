import React from 'react'
import {connect} from 'react-redux'


function CountReduxButton(props){

    console.log(props)

    const doClick = () => {
        props.dispatch({type:"INC"})
    }

    return(
        <button onClick={doClick}>Click Redux </button>
    )

}

export default connect()(CountReduxButton)