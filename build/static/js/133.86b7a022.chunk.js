(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[133],{2711:function(e,t,a){"use strict";a.r(t);var l=a(42),c=a(52),n=a(57),r=a(58),m=a(0),s=a.n(m),o=a(123),E=a(439),d=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={newUserList:[{name:"Smith Doe",email:"Smith@gmail.com",status:"active",photoUrl:"/assets/images/faces/1.jpg"},{name:"Jhon Doe",email:"Jhon@gmail.com",status:"pending",photoUrl:"/assets/images/faces/2.jpg"},{name:"Alex",email:"Otttio@gmail.com",status:"inactive",photoUrl:"/assets/images/faces/3.jpg"}]},e.getUserStatusClass=function(e){switch(e){case"active":return"badge-success";case"inactive":return"badge-warning";case"pending":return"badge-primary"}},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.newUserList;return s.a.createElement("div",null,s.a.createElement(o.a,{routeSegments:[{name:"UI Kits",path:"/uikits"},{name:"Table"}]}),s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"basic table"},s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table  text-center"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))}))))))),s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Basic Dark Table"},s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table table-dark  text-center"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))})))))))),s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"light table head"},s.a.createElement("p",null,"Similar to tables and dark tables, use the modifier classes",s.a.createElement("code",null,".thead-light")," to make ",s.a.createElement("code",null,"thead")," appear light"),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table  text-center"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))}))))))),s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Dark Table head"},s.a.createElement("p",null,"Similar to tables and dark tables, use the modifier classes",s.a.createElement("code",null,".thead-dark")," to make ",s.a.createElement("code",null,"thead")," appear Dark"),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table  text-center"},s.a.createElement("thead",{className:"thead-dark"},s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))})))))))),s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Striped rows"},s.a.createElement("p",null,"Use ",s.a.createElement("code",null,".table-striped")," to add zebra-striping to any table rowwithin the ",s.a.createElement("code",null,"<tbody>"),"."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table table-striped  text-center"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))}))))))),s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Dark Table head"},s.a.createElement("p",null,"Use ",s.a.createElement("code",null,".table-striped")," to add zebra-striping to any table rowwithin the ",s.a.createElement("code",null,"<tbody>"),"."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table table-striped table-dark  text-center"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))})))))))),s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Light Bordered Table"},s.a.createElement("p",null,"Add ",s.a.createElement("code",null,".table-bordered")," for borders on all sides of the table and cells."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table table-bordered  text-center"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))}))))))),s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Dark Bordered Table"},s.a.createElement("p",null,"Add ",s.a.createElement("code",null,".table-bordered")," for borders on all sides of the table and cells."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table table-bordered table-dark"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))})))))))),s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Light Borderless Table"},s.a.createElement("p",null,"Add ",s.a.createElement("code",null,".table-borderless")," for a table without borders."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table table-borderless  text-center"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))}))))))),s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Dark Bordereless Table"},s.a.createElement("p",null,"Add ",s.a.createElement("code",null,".table-borderless")," for a table without borders."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table table-borderless table-dark"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))})))))))),s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Light hoverable Table"},s.a.createElement("p",null,"Add ",s.a.createElement("code",null,".table-hover")," to enable a hover state on table rows within a ",s.a.createElement("code",null,"<tbody>"),"."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table table-hover  text-center"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))}))))))),s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Dark hoverable Table"},s.a.createElement("p",null,"Add ",s.a.createElement("code",null,".table-hover")," to enable a hover state on table rows within a ",s.a.createElement("code",null,"<tbody>"),"."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table table-hover table-dark"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))})))))))),s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Light Small Table"},s.a.createElement("p",null,"Add ",s.a.createElement("code",null,".table-sm")," to make tables more compact by cutting cell padding in half."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table table-sm  text-center"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))}))))))),s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Dark Small Table"},s.a.createElement("p",null,"Add ",s.a.createElement("code",null,".table-sm")," to make tables more compact by cutting cell padding in half."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table table-sm table-dark"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))})))))))),s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Light Table With Contextual classes"},s.a.createElement("p",null,"Use contextual classes to color table rows or individual cells."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{className:"table "},s.a.createElement("thead",{className:""},s.a.createElement("tr",{className:"table-primary"},s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"First"),s.a.createElement("th",{scope:"col"},"Last"),s.a.createElement("th",{scope:"col"},"Handle"),s.a.createElement("th",{scope:"col"},"Handle 2"),s.a.createElement("th",{scope:"col"},"Handle 3"),s.a.createElement("th",{scope:"col"},"Handle 4"))),s.a.createElement("tbody",null,s.a.createElement("tr",{className:"table-success"},s.a.createElement("th",{scope:"row"},"1"),s.a.createElement("td",null,"Mark"),s.a.createElement("td",null,"Otto"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo")),s.a.createElement("tr",{className:"table-active"},s.a.createElement("th",{scope:"row"},"1"),s.a.createElement("td",null,"Mark"),s.a.createElement("td",null,"Otto"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo")),s.a.createElement("tr",{className:"table-info"},s.a.createElement("th",{scope:"row"},"1"),s.a.createElement("td",null,"Mark"),s.a.createElement("td",null,"Otto"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo")),s.a.createElement("tr",{className:"table-warning"},s.a.createElement("th",{scope:"row"},"1"),s.a.createElement("td",null,"Mark"),s.a.createElement("td",null,"Otto"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo")),s.a.createElement("tr",{className:"table-dark"},s.a.createElement("th",{scope:"row"},"1"),s.a.createElement("td",null,"Mark"),s.a.createElement("td",null,"Otto"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo")),s.a.createElement("tr",null,s.a.createElement("td",{className:"table-active"},"..."),s.a.createElement("td",{className:"table-primary"},"..."),s.a.createElement("td",{className:"table-secondary"},"..."),s.a.createElement("td",{className:"table-success"},"..."),s.a.createElement("td",{className:"table-danger"},"..."),s.a.createElement("td",{className:"table-warning"},"..."),s.a.createElement("td",{className:"table-info"},"..."))))))),s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Dark Table With Background"},s.a.createElement("p",null,"Regular table background variants are not available with the dark table, however, you may use text or background utilities to achieve similar styles."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{className:"table  table-dark "},s.a.createElement("thead",{className:""},s.a.createElement("tr",{className:"bg-primary"},s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"First"),s.a.createElement("th",{scope:"col"},"Last"),s.a.createElement("th",{scope:"col"},"Handle"),s.a.createElement("th",{scope:"col"},"Handle 2"),s.a.createElement("th",{scope:"col"},"Handle 3"),s.a.createElement("th",{scope:"col"},"Handle 4"))),s.a.createElement("tbody",null,s.a.createElement("tr",{className:"bg-success"},s.a.createElement("th",{scope:"row"},"1"),s.a.createElement("td",null,"Mark"),s.a.createElement("td",null,"Otto"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo")),s.a.createElement("tr",{className:"bg-active"},s.a.createElement("th",{scope:"row"},"1"),s.a.createElement("td",null,"Mark"),s.a.createElement("td",null,"Otto"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo")),s.a.createElement("tr",{className:"bg-info"},s.a.createElement("th",{scope:"row"},"1"),s.a.createElement("td",null,"Mark"),s.a.createElement("td",null,"Otto"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo")),s.a.createElement("tr",{className:"bg-warning"},s.a.createElement("th",{scope:"row"},"1"),s.a.createElement("td",null,"Mark"),s.a.createElement("td",null,"Otto"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo")),s.a.createElement("tr",{className:"bg-dark"},s.a.createElement("th",{scope:"row"},"1"),s.a.createElement("td",null,"Mark"),s.a.createElement("td",null,"Otto"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo"),s.a.createElement("td",null,"@mdo")),s.a.createElement("tr",null,s.a.createElement("td",{className:"bg-active"},"..."),s.a.createElement("td",{className:"bg-primary"},"..."),s.a.createElement("td",{className:"bg-secondary"},"..."),s.a.createElement("td",{className:"bg-success"},"..."),s.a.createElement("td",{className:"bg-danger"},"..."),s.a.createElement("td",{className:"bg-warning"},"..."),s.a.createElement("td",{className:"bg-info"},"...")))))))),s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"light table with caption"},s.a.createElement("p",null,"A ",s.a.createElement("code",null,"<caption>")," functions like a heading for a table. It helps users with screen readers to find a table and understand what it\u2019s about and decide if they want to read it."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table  text-center"},s.a.createElement("caption",null,"List of users"),s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))}))))))),s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement(E.a,{title:"Dark Table with catption"},s.a.createElement("p",null,"A ",s.a.createElement("code",null,"<caption>")," functions like a heading for a table. It helps users with screen readers to find a table and understand what it\u2019s about and decide if they want to read it."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{id:"user_table",className:"table table-dark  text-center"},s.a.createElement("caption",null,"List of users"),s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Avatar"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,t.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",{scope:"row"},a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",null,s.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:t.photoUrl,alt:""})),s.a.createElement("td",null,t.email),s.a.createElement("td",null,s.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(t.status))},t.status)),s.a.createElement("td",null,s.a.createElement("span",{className:"cursor-pointer text-success mr-2"},s.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),s.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},s.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))})))))))))}}]),a}(m.Component);t.default=d}}]);
//# sourceMappingURL=133.86b7a022.chunk.js.map