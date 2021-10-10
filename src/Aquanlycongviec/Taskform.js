
import { Component } from "react";


class Taskform extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            status : true 
        }
        
    }
    componentDidMount() {
        if(this.props.taskEd){
            this.setState ({
                id : this.props.taskEd.id,
                name : this.props.taskEd.name,
                status : this.props.taskEd.status,

            })
        }
    }

    
   








    componentWillReceiveProps(nextProps) {
        
        if ( nextProps&& nextProps.taskEd) {
            this.setState({
                id: nextProps.taskEd.id,
                name: nextProps.taskEd.name,
                status: nextProps.taskEd.status,
            });
        } else if (nextProps.taskEd) {
            this.setState({
                id: "",
                name: "",
                status: false,
            });
        }
    }
    
   
   
    
  

    
  
  

    

   
       




    
   

     
    



    
  


    

    
    

    Close =() => {
        this.props.Close();
    }
  Add = (event) =>{
      var target = event.target;
      var name = target.name;
      var value =target.value ;
      if(target.name==='status')
      {
          value = target.value==='true' ? true: false ;
      }
      
      this.setState ({
          [name] : value
      })
      
  }
  onSubmit = (event)  => {
      event.preventDefault();
      this.props.Chuyen(this.state);
      this.setState ({
        
            id :'',
            name : '',
            status : true 
      })
    }

  



    render()
    {
        var  {id} =this.state;
        return (
            
            
            <div className="panel panel-warning">
                              <div className="panel-heading">
                                    <div className="panel-title">
                                        {id !==''? 'Sửa Công Việc': 'Thêm Công Việc' }
                                       
                                        <div className="haha" onClick={this.Close}> 
                                                Exit
                                        </div>
                                    </div>
                              </div>
                              <div className="panel-body">
                                    <form  onSubmit={this.onSubmit} >
                                       
                                        <div className="form-group">
                                            <label >Tên</label>
                                            <input type="text" 
                                            className="form-control"
                                            name="name" 
                                            value={this.state.name}
                                            onChange={this.Add} 
                                            
                                             />
                                        </div>
                                     <label>Trạng Thái</label>
                                     
                                     <select  className="form-control"
                                      name="status"
                                      value={this.state.status}
                                      onChange={this.Add} 

                                      >
                                         <option value={true}>Kích Hoạt</option>
                                         <option value={false}>Ẩn</option>
                                     </select>
                                     <br/>
                                    
                                        <button type="submit" className="btn btn-primary">Lưu Lại</button>
                                        &emsp;
                                        <button type="reset" className="btn btn-danger">Hủy Bỏ</button>
                                    </form>
                                    
                              </div>
                        </div>
            
        )
       
    }
}

export  default Taskform;