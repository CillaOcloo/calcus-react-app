import { Component } from "react";

class Row extends Component{
    render(){
      return(
        <div>
          <div className="row">
			<div className="col-md-3 col3"><h1>{this.props.value1}</h1></div>
			<div className="col-md-3 col3"><h1>{this.props.value2}</h1></div>
			<div className="col-md-3 col3"><h1>{this.props.value3}</h1></div>
			<div className="col-md-3 col4"><h1>{this.props.value4}</h1></div>
		</div>
        </div>
  
      )
    }
  }
  export default Row;