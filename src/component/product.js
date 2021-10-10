import { Component } from "react";
// import pc from "../picture/all2.jpg";
import "../TCss/product.css";

class Product extends Component {

  Addsp2 =() => {
      alert("Bạn đã mua " + this.props.children + " và giá thành "  + this.props.price);
      console.log(this.props.children + " và giá thành "  + this.props.price);
  }


    // Addsp (sp,sp2)
    // {
    //      alert("Bạn đã mua " + sp + " Thành Công!" +sp2);
        
    //      console.log(sp+ " "+ sp2);


    // }

    // ShowInfor(check)
    // {
    //     if(check.status){
    //         return (
    //                 <div>
    //                  ID : {check.id} <br/>
    //               Name: {check.name} <br/>
    //               Price : {check.price} <br/>
    //              status: {check.status? "Active":"Pending"}
    //                 </div>
    //         );
           
    //     }
    // }
    
    render() {
        // var sp={
        //     id:1,
        //     name:"IP 12",
        //     price:1500000,
        //     status:true
        // }
        // var users =[
        //     {
        //        id:1,
        //        name:"Nguyen Quoc Tuan",
        //        age:10,
        //        address:"Ha Noi"
        //     },
        //     {
        //         id:2,
        //         name: "Nguyen Van C",
        //         age: "13",
        //         address: "Hung Yen"
        //     },
        //     {
        //         id:3,
        //         name: "Nguyen Van D",
        //         age: "15",
        //         address: "Ha Nam"
        //     }
        // ];
        // var elements =users.map((user,index) =>
        // {
        //     return <div key={user.id}>
        //               <h2> Name: {user.name}</h2>
        //               <p> Age: {user.age}</p>
        //               <p>Address: {user.address}</p>
        //            </div>
                 
            
            
        // })
        return (
            
      
           <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
            <hr/>
            <div className="haha">

            
               <div className="thumbnail">
               <img src={this.props.img} alt="xx" width="300" />
                   <div className="caption">
                   
                       <h3>{this.props.children}</h3>
                       <p>
                       {this.props.price}
                       </p>
                       <p>
                           <a href="http://localhost:3800/#" className="btn btn-primary" onClick={this.Addsp2 }>Mua Hang</a>

                          &ensp;
                          
                      
                           <a href="http://localhost:3800/#" className="hihi">Them vao</a>
                       </p>
                       </div>
                 
                 </div>
                 <div>
                
                  {/* {this.ShowInfor(sp)}
                  {elements} */}

                 </div>
                 
              </div>
           
                

              <br/>

             
              </div>
          
           

        );
    }
}

export default Product;