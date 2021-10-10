
import { Component } from "react";


class Item extends Component{
    Onstatus =() => {
       this.props.Onstatus(this.props.task.id)
    }

    Delete =() => {
        this.props.Delete(this.props.task.id);
    }
    Edit =() => {
        this.props.Edit(this.props.task.id);
    }
    render()
    {
        var {task,index} =this.props;
        return (
            
            <tr>
                                       <td>{index+1}</td>
                                       <td>{task.name}</td>
                                       <td className="text-center">
                                           <span className={task.status===true?
                                             'label label-danger': 'label label-success'}
        
                                             onClick={this.Onstatus}
                                              >
                                                   
                                               {task.status===true ? 'Kích hoạt': 'Ẩn' }
                                               </span>
                                       </td>
                                       <td>
                                        
                                        <button type="button" className="btn btn-danger"
                                        
                                        onClick={this.Edit}
                                        
                                        >Sửa</button>
                                        
                                        &nbsp;
                                        
                                        <button type="button" className="btn btn-warning"
                                        
                                        onClick={() => {if (window.confirm('Are you delete!'))  this.Delete() }}
                                        
                                        >Xóa</button>
                                        

                                       </td>



                                    </tr>
            
        )
       
    }
}

export  default Item;