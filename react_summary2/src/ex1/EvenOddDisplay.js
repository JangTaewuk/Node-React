import React from 'react'
import {connect} from 'react-redux'

function EvenOddDisplay(props){

    const text = props.count % 2 == 0? "EVEN" : "ODD"
    return(
        <h2>{text}</h2>
    )

}

const mapStateToProps = (state) => {
    console.log("EvenOddDispalay mapStateToProps..........",state)

    return {count : state.count}
}

export default connect(mapStateToProps)(EvenOddDisplay)