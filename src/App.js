import { Component } from "react";
// import Anh1 from "./picture/all1.jpg";
import Header from "./component/header";
import Product from "./component/product";
import ip6 from "./picture/ip12.jpg";
import ip7 from "./picture/ip7.jpg";
import ip8 from "./picture/ip8.jpg";
 
class Demo extends Component{

 
  constructor(props){
    super(props);
    this.state = {
       thongtins:[
        {
          id:1,
          img:ip6,
          name:"IP6",
          price:"10000",
          status:true
        },
        {
          id:2,
          img:ip7,
          name:"IP7",
          price:"10000",
          status:true
        },
        {
          id:3,
          img:ip8,
          name:"IP8",
          price:"10000",
          status:true
        },
        
      ],
      isActive:false
    };

  }
  
  setHAHA =() =>  {

    this.setState(
      {
       isActive : !this.state.isActive
      }
    );
  }


 

// xử lý sự kiên

  haha()
  {
    console.log("Đây là 1");
  }

     Add1 =() =>{
    
     console.log(this.refs.namee.value);
   }
   
   



    render()
    {
      var sps=[
        {
          id:1,
          img:ip6,
          name:"IP6",
          price:"10000",
          status:true
        },
        {
          id:2,
          img:ip7,
          name:"IP7",
          price:"10000",
          status:true
        },
        {
          id:3,
          img:ip8,
          name:"IP8",
          price:"10000",
          status:false
        },
        
      ];
        let el=sps.map((sp,index) =>  {
          return (
                    <Product
                   
                     key={sp.id} 
                     img= {sp.img}

                      price={sp.price}
                     >
                     {sp.name}
                    </Product>
          );
   

      }
///state
      )


      let element= this.state.thongtins.map((thongtin,index) =>  {
        let cc='';
        
          if(thongtin.status&&this.state.isActive)
          {
            cc=  <tr key={index}>
                        <td>{thongtin.id}</td>
                        <td>{thongtin.name}</td>
                        <td>
                        <span className="label label-success">{thongtin.price}</span>
                        </td>
                </tr>
          }

        return cc;
            
      }
      )
    


        return(
            <div>
            <Header/>
           
           
          <br/>
        <br/>
       
        
        <div className="panel panel-default">
          <div className="panel-body">
         
          </div>
          <div className="panel-body"></div>
          
             
               <div className="form-group">
                 <label >Thông Tin      </label>
                 <input type="text" className="form-control"  ref="namee" />
               </div>
             
               
             
               <button type="submit" className="btn btn-primary" onClick={this.Add1}>Lưu</button>
          
         
          
        </div>
        

        
        <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                
               {el}
            
            </div>
            
            
          <div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                
            
                <button type="button" className="btn btn-warning" onClick={this.haha}>
                  Click Me
                  </button>
                
                 </div>
              
          </div>
         
         <div>  


           
           
           
           
           <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Tên SP</th>
                          <th>Giá </th>

                        </tr>
                      </thead>
                      <tbody>
                        {element}
                      </tbody>
           </table>
           <br/>
           
           <button type="button" className="btn btn-success" onClick={this.setHAHA}> Active: {this.state.isActive===true ? 'true':'false' }</button>
           
           <br/>
           <br/>
         </div>
            
        </div>
         </div>
        
        );
    }
}


export default Demo;
