
import { Component } from "react";
import "../TCss/search.css" ;
class Search extends Component{
    constructor(props) {
        super(props);
        this.state ={
            keyword : ''
        }
    }
    
    
 Search = (event) => {
     var target = event.target;
     var name = target.name;
     var value =target.value;
     this.setState ({
         [name] : value
     })
     
 }
 TK = () => {
     this.props.TK(this.state.keyword);
 }

    render()
    {
        var {keyword} =this.state;
        return (
           
              
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                                
                                <input name="keyword"
                                type="text" 
                                className="form-control"
                                placeholder="Nhập từ khóa"
                                
                                value={keyword}
                                onChange={this.Search}
                                
                                
                                
                                /> 
                               

                                    
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                
                                <button type="button" 
                                className="btn btn-default"
                                onClick={this.TK}
                                
                                
                                >
                                    
                                    
                                    
                                    
                                    Tìm</button>
                                
                            </div>
                              
                            
                            </div>
                        
                        
                               

                            
            
        )
       
    }
}

export  default Search;