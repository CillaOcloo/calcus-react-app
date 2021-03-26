import { Component } from "react";
import Display from "./Display";
import Row from "./Row";
import Subrow from "./Subrow";


class Calculator extends Component{
    
    render(){
      return(
        <div>
            <div className="container">
                <Display displayNumber="0"/>
				<Row value1="AC" value2="+/-" value3="%" value4="÷"/>
				<Row value1="7" value2="8" value3="9" value4="x"/>
				<Row value1="4" value2="5" value3="6" value4="-"/>
				<Row value1="1" value2="2" value3="3" value4="+"/>
				<Subrow value1="0" value2="." value3="="></Subrow>

        </div>
		</div>
		
  
      )
    }
  }
  export default Calculator;
  