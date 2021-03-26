import { Component } from "react";

class Display extends Component{
    render(props){
      return(
        <div>
            <div className="row">
			<div className="col-md-12 col12"><h1 className="text-right">{this.props.displayNumber}</h1></div>
		</div>
             </div>
  
      )
    }
  }
  export default Display;
  