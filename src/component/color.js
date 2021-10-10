import { Component } from "react";
import "../TCss/color.css";
import ColorPicker from "./colorpicker";
import Reset from "./reset";
import Result from "./result";
import XSetting from "./setting";
class Color extends Component{
    constructor(props){
        super(props)
        this.state ={
            color : 'red',
            Fontsize : 12
        }
    }
    sendColor = (next)  => {
       this.setState (
           {
             color : next
           }
       );
    }
    OnChange=(size) => {
       if(this.state.Fontsize +size >=8 && this.state.Fontsize + size <=36)
       {
           this.setState({
               Fontsize: this.state.Fontsize +size 
           })
       }
    }
    Resett=(value) =>{
      if(value){
          this.setState({
            color : 'red',
            Fontsize : 12
          })
      }
    }


    render(){

    
      
        return(
         <div id="thongtin">  
                    <br/>
                     <b>Color Picker</b>
                    <br/>   

                    <hr/>
                    <div className="row"> 
                       <ColorPicker  color={this.state.color} SendColor={this.sendColor}/>


                  <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                      
                    <XSetting Fontsize={this.state.Fontsize} 
                    
                    ChangSize={this.OnChange}


                    />
                     
                    <Reset Resett={this.Resett}/>


                    </div>

                
                     <Result color={this.state.color} Fontsize={this.state.Fontsize}/>
           
                    </div>

                
         </div>
         
    
   
    

        );
    }
}
export default Color;