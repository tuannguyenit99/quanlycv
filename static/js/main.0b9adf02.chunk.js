(this.webpackJsonpreactjs_sell=this.webpackJsonpreactjs_sell||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){},16:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n=s(1),a=s.n(n),c=s(8),i=s.n(c),r=(s(13),s(2)),l=s(3),o=s(5),u=s(4),d=(s(14),s(6)),j=s(0),h=function(t){Object(o.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).Close=function(){n.props.Close()},n.Add=function(t){var e=t.target,s=e.name,a=e.value;"status"===e.name&&(a="true"===e.value),n.setState(Object(d.a)({},s,a))},n.onSubmit=function(t){t.preventDefault(),n.props.Chuyen(n.state),n.setState({id:"",name:"",status:!0})},n.state={id:"",name:"",status:!0},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.taskEd&&this.setState({id:this.props.taskEd.id,name:this.props.taskEd.name,status:this.props.taskEd.status})}},{key:"componentWillReceiveProps",value:function(t){t&&t.taskEd?this.setState({id:t.taskEd.id,name:t.taskEd.name,status:t.taskEd.status}):t.taskEd&&this.setState({id:"",name:"",status:!1})}},{key:"render",value:function(){var t=this.state.id;return Object(j.jsxs)("div",{className:"panel panel-warning",children:[Object(j.jsx)("div",{className:"panel-heading",children:Object(j.jsxs)("div",{className:"panel-title",children:[""!==t?"S\u1eeda C\xf4ng Vi\u1ec7c":"Th\xeam C\xf4ng Vi\u1ec7c",Object(j.jsx)("div",{className:"haha",onClick:this.Close,children:"Exit"})]})}),Object(j.jsx)("div",{className:"panel-body",children:Object(j.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"T\xean"}),Object(j.jsx)("input",{type:"text",className:"form-control",name:"name",value:this.state.name,onChange:this.Add})]}),Object(j.jsx)("label",{children:"Tr\u1ea1ng Th\xe1i"}),Object(j.jsxs)("select",{className:"form-control",name:"status",value:this.state.status,onChange:this.Add,children:[Object(j.jsx)("option",{value:!0,children:"K\xedch Ho\u1ea1t"}),Object(j.jsx)("option",{value:!1,children:"\u1ea8n"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"L\u01b0u L\u1ea1i"}),"\u2003",Object(j.jsx)("button",{type:"reset",className:"btn btn-danger",children:"H\u1ee7y B\u1ecf"})]})})]})}}]),s}(n.Component),b=(s(16),function(t){Object(o.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).Search=function(t){var e=t.target,s=e.name,a=e.value;n.setState(Object(d.a)({},s,a))},n.TK=function(){n.props.TK(n.state.keyword)},n.state={keyword:""},n}return Object(l.a)(s,[{key:"render",value:function(){var t=this.state.keyword;return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(j.jsx)("input",{name:"keyword",type:"text",className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a",value:t,onChange:this.Search})}),Object(j.jsx)("div",{className:"col-xs-2 col-sm-2 col-md-2 col-lg-2",children:Object(j.jsx)("button",{type:"button",className:"btn btn-default",onClick:this.TK,children:"T\xecm"})})]})}}]),s}(n.Component)),O=function(t){Object(o.a)(s,t);var e=Object(u.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)(b,{TK:this.props.TK})}}]),s}(n.Component),m=function(t){Object(o.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(r.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).Onstatus=function(){t.props.Onstatus(t.props.task.id)},t.Delete=function(){t.props.Delete(t.props.task.id)},t.Edit=function(){t.props.Edit(t.props.task.id)},t}return Object(l.a)(s,[{key:"render",value:function(){var t=this,e=this.props,s=e.task,n=e.index;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:n+1}),Object(j.jsx)("td",{children:s.name}),Object(j.jsx)("td",{className:"text-center",children:Object(j.jsx)("span",{className:!0===s.status?"label label-danger":"label label-success",onClick:this.Onstatus,children:!0===s.status?"K\xedch ho\u1ea1t":"\u1ea8n"})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.Edit,children:"S\u1eeda"}),"\xa0",Object(j.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){window.confirm("Are you delete!")&&t.Delete()},children:"X\xf3a"})]})]})}}]),s}(n.Component),f=function(t){Object(o.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).Onchange=function(t){var e=t.target,s=e.name,a=e.value;n.props.Filter("filterName"===s?a:n.state.filterName,"fifterStatus"===s?a:n.state.fifterStatus),n.setState(Object(d.a)({},s,a))},n.state={filterName:"",fifterStatus:-1},n}return Object(l.a)(s,[{key:"render",value:function(){var t=this,e=this.props.tasks,s=this.state,n=s.filterName,a=s.fifterStatus,c=e.map((function(e,s){return Object(j.jsx)(m,{index:s,task:e,Onstatus:t.props.Onstatus,Delete:t.props.Delete,Edit:t.props.Edit},e.id)}));return Object(j.jsxs)("table",{className:"table table-bordered table-hover",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"STT"}),Object(j.jsx)("th",{children:"T\xean"}),Object(j.jsx)("th",{children:"Tr\u1ea1ng Th\xe1i"}),Object(j.jsx)("th",{children:"Ho\u1ea1t \u0110\u1ed9ng"})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",className:"form-control",name:"filterName",value:n,onChange:this.Onchange})}),Object(j.jsx)("td",{children:Object(j.jsxs)("select",{className:"form-control",name:"fifterStatus",value:a,onChange:this.Onchange,children:[Object(j.jsx)("option",{value:-1,children:"T\u1ea5t C\u1ea3"}),Object(j.jsx)("option",{value:1,children:"Ho\u1ea1t \u0110\u1ed9ng"}),Object(j.jsx)("option",{value:0,children:"\u1ea8n"})]})}),Object(j.jsx)("td",{})]}),c]})]})}}]),s}(n.Component),p=function(t){Object(o.a)(s,t);var e=Object(u.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).HT=function(){n.setState({DisplayForm:!n.state.DisplayForm,taskEd:null})},n.Close=function(){n.setState({DisplayForm:!1,taskEd:null})},n.Open=function(){n.setState({DisplayForm:!0})},n.taskEd=function(){n.setState({taskEd:null})},n.Chuyen=function(t){var e=n.state.tasks;(console.log(t),""===t.id)?(console.log("xtttt"),t.id=n.lay(),e.push(t),n.Close(),n.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))):(console.log("xx"),e[n.findid(t.id)]=t,n.Close(),n.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e)))},n.Onstatus=function(t){var e=n.state.tasks,s=n.findid(t);-1!==s&&(e[s].status=!e[s].status,n.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e)))},n.findid=function(t){var e=-1;return n.state.tasks.forEach((function(s,n){s.id===t&&(e=n)})),e},n.Delete=function(t){var e=n.state.tasks,s=n.findid(t);-1!==s&&(e.splice(s,1),n.setState({tasks:e})),localStorage.setItem("tasks",JSON.stringify(e)),n.Close()},n.Edit=function(t){n.Open();var e=n.state.tasks[n.findid(t)];n.setState({taskEd:e})},n.Filter=function(t,e){e=+e,n.setState({filter:{name:t.toLowerCase(),status:e}})},n.TK=function(t){n.setState({keyword:t})},n.state={tasks:[],DisplayForm:!1,taskEd:null,filter:{name:"",status:-1},keyword:""},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){if(localStorage&&localStorage.getItem("tasks")){var t=JSON.parse(localStorage.getItem("tasks"));this.setState({tasks:t})}}},{key:"s4",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"lay",value:function(){return this.s4()+this.s4()+this.s4()+this.s4()+this.s4()+this.s4()}},{key:"render",value:function(){var t=this.state,e=t.tasks,s=t.DisplayForm,n=t.taskEd,a=t.filter,c=t.keyword;a&&(a.name&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(a.name)}))),e=e.filter((function(t){return-1===a.status?t:t.status===(1===a.status)})),c&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(c)}))));var i=s?Object(j.jsx)(h,{Close:this.Close,Chuyen:this.Chuyen,taskEd:n}):"";return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("br",{}),Object(j.jsx)("h1",{children:"Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:s?"col-xs-4 col-sm-4 col-md-4 col-lg-4":"",children:i}),Object(j.jsxs)("div",{className:s?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.HT,children:"Th\xeam C\xf4ng Vi\u1ec7c"}),"\xa0",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(O,{TK:this.TK}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:Object(j.jsx)(f,{tasks:e,Onstatus:this.Onstatus,Delete:this.Delete,Edit:this.Edit,Filter:this.Filter})})]})]})]})}}]),s}(n.Component),x=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;s(t),n(t),a(t),c(t),i(t)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("sell")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.0b9adf02.chunk.js.map