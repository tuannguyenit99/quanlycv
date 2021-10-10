import { Component } from "react";
// import "../TCss/color.css"
class Reset extends Component{
    Reset =() => {
        this.props.Resett(true);
    }
    render(){
        return(
      
                   
                     
                     <button type="button" className="btn btn-danger" onClick={() => this.Reset()}>Reset</button>

                
                  
                   

                 
   
    

        );
    }
}
export default Reset;