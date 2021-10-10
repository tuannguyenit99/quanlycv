
import { Component } from "react";
import Item from "./Item";



class Table extends Component{

    constructor(props) {
        super(props);
    
        this.state={
            filterName : '',
            fifterStatus : -1 ,


        }
        
    }
Onchange =(event) => {
   var target= event.target;
   var name = target.name;
   var value = target.value;
   this.props.Filter( 
       name==='filterName'? value : this.state.filterName ,
       name==='fifterStatus'? value : this.state.fifterStatus ,

     )
   this.setState ({
       [name] : value 
   });

}


    render()
    {
        var {tasks} =this.props;
        var {filterName,fifterStatus} =this.state;

     let elemet = tasks.map((task,index) => {
         return   <Item key={task.id} index={index} task={task} 
           
            Onstatus={this.props.Onstatus}

            Delete={this.props.Delete}

             Edit ={this.props.Edit}
         />
        
     })
        return (
            
            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên</th>
                                        <th>Trạng Thái</th>
                                        <th>Hoạt Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>

                                            <input 
                                            type="text"
                                            className="form-control" 
                                            name="filterName"
                                            value={filterName}
                                            onChange={ this.Onchange }
                                            />
                                        </td>
                                        <td>
                                        <select  className="form-control" name="fifterStatus"
                                        
                                        value={fifterStatus}
                                        onChange={ this.Onchange }
                                        
                                        >
                                         <option value={-1}>Tất Cả</option>
                                         <option value={1}>Hoạt Động</option>
                                         <option value={0}>Ẩn</option>
                                     </select>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    {elemet}    
                                    
                                </tbody>
                            </table>
            
        )
       
    }
}

export  default Table;