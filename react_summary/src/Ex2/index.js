import React,{Component,Fragment} from 'react'
import PrintName from './PrintName'

export default class Ex2 extends Component{

    constructor(){
        super()
    }

    render(){
        return(
            <Fragment>
                <PrintName name="Jang"></PrintName>
            </Fragment>
        )
    }

}