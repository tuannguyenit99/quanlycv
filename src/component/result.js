import { Component } from "react";


class Result extends Component{
    setT ()
    {
        return { 
             color : this.props.color,
             borderColor : this.props.color,
             fontSize : this.props.Fontsize 
            
        };
    }
    render(){
        let thaydoi= this.props.color
       
        return(
          
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                             <p >Color : <b style={this.setT()}>{thaydoi} </b>    
                             - Fontsize : {this.props.Fontsize}px</p> 
                             <div id="content" style={this.setT()}>
                                 Nội dung cài đặt
                            </div>
                              
                    </div> 

         
    
   
    

        );
    }
}
export default Result;