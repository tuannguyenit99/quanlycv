import { Component } from "react";
import "../TCss/color.css"
class XSetting extends Component{
    Tang (c){    

           this.props.ChangSize(c);
        
    }
    

    render()
    {
       
        return(
        
                      
                      
                      <div className="panel panel-success">
                            <div className="panel-heading">
                                  <h3 className="panel-title">Size: {this.props.Fontsize} px </h3>
                            </div>
                            <div className="panel-body">
                               
                               <button type="button" className="btn btn-success" onClick={() =>this.Tang(+2)}>Tăng</button>
                               &nbsp;
                               <button type="button" className="btn btn-success" onClick={() =>this.Tang(-2)}>Giảm</button>
                               
                            </div>
                      </div>
                     
               




     
         
    
   
    

        );
    }
}
export default XSetting;