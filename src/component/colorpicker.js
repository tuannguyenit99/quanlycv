import { Component } from "react";


class ColorPicker extends Component{

    
    constructor(props){
        super(props);
        this.state ={
            colors : ['red','blue','green','black'],
        };

    }
    change(color){
            return {
                backgroundColor : color  
            };     
           
    };
    next(color) {
        this.props.SendColor(color)
    }
    

    render(){
        var elementColor =this.state.colors.map((color,index) =>
                        {
                            return <span key={index}
                             style={ this.change(color)} 
                             className={this.props.color===color? 'active':''}
                            onClick={() => this.next(color)}
                            
                            
                            
                             >
                                   
                                  
                                        
                                   </span>
                        }
        );

        return(
          
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> 
                              
                              <div className="panel panel-default">
                              <div className="panel-footer">
                                      Color
                                      </div>
                                    <div className="panel-body">
                                         {elementColor}
                                    </div>
                                    
                              </div>
                              
                  </div>


        );
    }
}
export default ColorPicker;