import "../TCss/quanlycv.css";
import { Component } from "react";
import Taskform from "./Taskform";
import Control from "./Control";
import Table from "./Table";
// import demo from "../trainning/demo.js";
class Quanlycv extends Component{

constructor(props) {
    super(props);
    this.state={
        tasks : [],
        DisplayForm : false ,
        taskEd : null,
        filter  : {
           name : '',
           status : -1,

        },
       keyword : '',
        
    }
    
}

componentDidMount()
{
    if(localStorage && localStorage.getItem('tasks')){
        var tasks= JSON.parse(localStorage.getItem('tasks'));
        this.setState ({
            tasks : tasks
        });

    }
}


  


// Demo =() => {
//       var tasks =[
//           {
//               id : this.lay(),
//               name: 'Học lập trình 1',
//               status : true    

//           },
//           {
//             id : this.lay(),
//             name: 'Học lập trình 2',
//             status : true    

//         },
//         {
//             id : this.lay(),
//             name: 'Học lập trình 3',
//             status : false    

//         },

//       ]


//   this.setState ({
//       tasks : tasks
//   })
//   localStorage.setItem('tasks',JSON.stringify(tasks));

// }
 s4(){
     return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
 }
 lay(){
     return this.s4() +this.s4()+this.s4()+this.s4()+this.s4()+this.s4();
 }
 HT =() =>{
     this.setState ({
         DisplayForm : !this.state.DisplayForm,
         taskEd :null,
     })
 }
 
 Close= () => {
    this.setState (
        {
            DisplayForm : false,
            taskEd :null,
        }
    )
 }

 Open= () => {
    this.setState (
        {
            DisplayForm : true
        }
    )
 }
 taskEd= () => {
    this.setState (
        {
            taskEd : null
        }
    )
 }

 Chuyen =(event)  => {
     var {tasks} =this.state;
     console.log(event);
     if(event.id==="")
     {

        console.log("xtttt");
        event.id =this.lay();
        tasks.push(event);
        this.Close();

           //Luu lại
        this.setState ({
           
            tasks: tasks
          
       });
       localStorage.setItem('tasks', JSON.stringify(tasks));
     }
     else {
        console.log("xx");

    


        var index = this.findid(event.id);
        tasks[index]= event;
        this.Close();


        //Luu lại
        this.setState ({
           
            tasks: tasks
          
       });
       localStorage.setItem('tasks', JSON.stringify(tasks));
     }
      
 }
 Onstatus =(data) => {
    var {tasks} =this.state;
    var index = this.findid(data);
     if(index !==-1){
            tasks[index].status =! tasks[index].status;
            this.setState ({
                tasks : tasks
            })
            localStorage.setItem('tasks',JSON.stringify(tasks));
     }
    
 }

 findid =(id) => {
    var kq= -1;
    var {tasks} =this.state;
    tasks.forEach((task,index) => {
        if(task.id === id)
        {
            kq=index;
        }
    })
    return kq;
 }
 Delete =(id) =>{
     var {tasks} =this.state;
     var index = this.findid(id);
     if(index !==-1){
       tasks.splice(index,1);
       this.setState ({
           tasks :tasks
       })
     }
     localStorage.setItem('tasks', JSON.stringify(tasks));
     this.Close();
 }
Edit = (id) => {
   
    this.Open();
    var {tasks} = this.state;
    var index = this.findid(id);
    var taskEd = tasks[index];
    this.setState ({
        taskEd: taskEd
        
    })
   

}

Filter = (filterName,filterStatus) => {

    filterStatus =+ filterStatus;

   this.setState ({
       filter : {
           name : filterName.toLowerCase(),
           status: filterStatus,
       }
   })

}


TK =(keyword) => {
    this.setState ({
        keyword:keyword
    })
}
    render()
    {
       
        var {tasks, DisplayForm,taskEd,filter,keyword } =this.state;
        
       if(filter)
       {
          if(filter.name){
              tasks =tasks.filter((task) => {
                 return task.name.toLowerCase().indexOf(filter.name) !== -1;
              })

              }

              tasks =tasks.filter((task) => {
                  if(filter.status===-1)
                  {
                      return task;
                  }
                  else
                  {
                      return task.status===(filter.status===1? true :false)
                  }
              })
              if(keyword)
              {
                tasks =tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(keyword) !== -1;
                 })
              }
          
       }


        let Dislay = DisplayForm ? <Taskform
         Close={this.Close} 
         Chuyen={this.Chuyen}
         taskEd={taskEd}
        /> : '';
        return (
            
            <div className="container">
                <br/>
                <h1>Quản Lý Công Việc</h1>
                <hr/>
                
                <div className="row">
                    <div className={DisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
                        
                       
                        {Dislay}
                        
                        
                        
                    </div>

                    <div className={DisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                        
                        <button type="button" className="btn btn-success" onClick={this.HT}>Thêm Công Việc</button> 
                        &nbsp;
                        {/* <button type="button" className="btn btn-warning" onClick={this.Demo} >Demo</button> */}
                        
                        

                    <br/>
                    <br/>
                        <Control  TK={this.TK}/>
                         
                        <br/>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            
                            <Table tasks={tasks} 
                            Onstatus={this.Onstatus}
                            Delete={this.Delete}
                            Edit={this.Edit}
                            Filter={this.Filter}
                            />
                            
                            
                        </div>

                        
                        
                    </div>
                </div>
                
                
            
                
            </div>
            
        )
       
    }
}

export  default Quanlycv;