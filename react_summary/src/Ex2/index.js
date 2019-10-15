import React,{Component,Fragment} from 'react'
import PrintName from './PrintName'
import PrintArr from './PrintArr'
import PrintSum from './PrintSum'

export default class Ex2 extends Component{

    constructor(){
        super()
        this.state = {
            arr:[
                {pcode:1, panme:'연필', price:300, selected:false},
                {pcode:2, panme:'노트', price:500, selected:false},
                {pcode:3, panme:'샤프', price:800, selected:false},
                {pcode:4, panme:'볼펜', price:1000, selected:false}
            ]
        }
    }

    checkProduct = ({pcode}) => {
        console.log("pcode: " + pcode)

        const target = this.state.arr.filter((obj) => obj.pcode === pcode)[0]

        const idx = this.state.arr.indexOf(target)
        console.log("idx: "+idx)

        this.state.arr[idx].selected = !this.state.arr[idx].selected
        this.setState( {arr: this.state.arr})
    }
    render(){

        const {arr} = this.state;

        return(
            <Fragment>
                <PrintArr arr={arr} fn={this.checkProduct}></PrintArr>
                <PrintSum arr={arr}></PrintSum>
                <PrintName name="Jang"></PrintName>
            </Fragment>
        )
    }

}