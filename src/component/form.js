import { Component } from "react";
import "../TCss/form.css";
class Form extends Component{
  constructor(props) {
      super(props);
      this.state = {
          txtName : '',
          txtPassWord : '',
          txtDecs : '',
          txtgt : 0,
          ckelag : 'vn',
          checktt : false
      };
      this.Hand=this.Hand.bind(this);
      this.Submitt=this.Submitt.bind(this);
      this.Xoa=this.Xoa.bind(this);
  }
  Hand(event){

       var target =event.target;
       var name = target.name;
       var value = target.type ==='checkbox'? target.checked : target.value;
       this.setState ({
           [name] : value
       })

  }
  Submitt(event){
    event.preventDefault();
    console.log(this.state)
    
     
  }
  Xoa() {
    this.setState({
        txtName : '',
        txtPassWord : '',
        txtDecs : '',
        txtgt : 0,
        ckelag : 'vn',
        checktt : false
    })
}


    render(){
         return(
                
                <div className="container mt">
                    <h2> Form Information</h2>

                    


                    <hr/>



                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            
                            <form onSubmit={this.Submitt}>
                               
                            
                                <div className="form-group">
                                    <label >User Name</label>
                                    <input type="text" className="form-control"
                                    name="txtName"
                                    onChange={this.Hand}
                                    value={this.state.txtName}
                                    />
                                    <label >PassWord</label>
                                     <input type="password" className="form-control"
                                    name="txtPassWord"
                                    onChange={this.Hand}
                                    value={this.state.xtPassWord}
                                    />
                                    <label >Mô Tả</label>
                                     
                                     <textarea  className="form-control" rows="3"
                                     name="txtDecs"
                                     onChange={this.Hand} 
                                     value={this.state.txtDecs}
                                     >


                                     </textarea>
                                     <br/>
                                     <label>Giới Tính</label>
                                     <select  className="form-control"
                                     value={this.state.txtgt}
                                     onChange={this.Hand}
                                     name="txtgt"
                                     
                                     >
                                         <option value={1}>Nam</option>
                                         <option value={0}>Nữ</option>
                                     </select>
                                     <label>Ngôn Ngữ</label>
                                     
                                     <div className="radio">
                                         <label
                                        
                                         >
                                         
                                             <input type="radio" 
                                              name="ckelag"
                                              value="eg"
                                              onChange={this.Hand}
                                              checked={this.state.ckelag==="eg"}
                                               />
                                             Tiếng Anh

                                              &nbsp;
                                              &nbsp;
                                              &nbsp;
                                              &nbsp;
                                             <input type="radio" 
                                              name="ckelag"
                                              value="vn"
                                              onChange={this.Hand}
                                              checked={this.state.ckelag==="vn"}
                                               />
                                             Tiếng Việt
                                         </label>
                                     </div>
                                     <br/>
                                     <label>Trạng Thái</label>
                                     
                                     <div className="checkbox">
                                         <label>
                                             <input type="checkbox" 

                                             name="checktt"
                                             onChange={this.Hand}
                                            
                                             value={this.state.checktt}
                                             
                                             /> 
                                             Đồng ý với điều khoản
                                         </label>
                                     </div>
                                     

                                     


                    



                                </div>
                        
                                <button type="submit" className="btn btn-primary">Lưu</button> &nbsp;
                                <button type="reset" className="btn btn-defalt" onClick={this.Xoa}>Xóa Trắng</button>
                            </form>
                            <hr/>
                        </div>
                    </div>
                    
                </div>
                
         )
    };
}
export default Form;



