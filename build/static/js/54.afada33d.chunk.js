(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[54],{1409:function(e,a,t){"use strict";var l=t(6),n=t(8),r=t(7),s=t.n(r),i=t(0),c=t.n(i),m=t(16),o=t(257);function d(e,a,t){var l=(e-a)/(t-a)*100;return Math.round(1e3*l)/1e3}function u(e,a){var t,r=e.min,i=e.now,m=e.max,o=e.label,u=e.srOnly,f=e.striped,p=e.animated,g=e.className,b=e.style,h=e.variant,v=e.bsPrefix,E=Object(n.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return c.a.createElement("div",Object(l.a)({ref:a},E,{role:"progressbar",className:s()(g,v+"-bar",(t={},t["bg-"+h]=h,t[v+"-bar-animated"]=p,t[v+"-bar-striped"]=p||f,t)),style:Object(l.a)({width:d(i,r,m)+"%"},b),"aria-valuenow":i,"aria-valuemin":r,"aria-valuemax":m}),u?c.a.createElement("span",{className:"sr-only"},o):o)}var f=c.a.forwardRef((function(e,a){var t=e.isChild,r=Object(n.a)(e,["isChild"]);if(r.bsPrefix=Object(m.a)(r.bsPrefix,"progress"),t)return u(r,a);var d=r.min,f=r.now,p=r.max,g=r.label,b=r.srOnly,h=r.striped,v=r.animated,E=r.bsPrefix,N=r.variant,O=r.className,x=r.children,j=Object(n.a)(r,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return c.a.createElement("div",Object(l.a)({ref:a},j,{className:s()(O,E)}),x?Object(o.b)(x,(function(e){return Object(i.cloneElement)(e,{isChild:!0})})):u({min:d,now:f,max:p,label:g,srOnly:b,striped:h,animated:v,bsPrefix:E,variant:N},a))}));f.displayName="ProgressBar",f.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1},a.a=f},2749:function(e,a,t){"use strict";t.r(a);var l=t(5),n=t(15),r=t(442),s=t(42),i=t(52),c=t(57),m=t(58),o=t(0),d=t.n(o),u=t(123),f=t(150),p=t(254),g=t(342),b=t(90),h=t(1409),v=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var i=arguments.length,c=new Array(i),m=0;m<i;m++)c[m]=arguments[m];return(e=a.call.apply(a,[this].concat(c))).state={dragClass:"",files:[],statusList:[],queProgress:0},e.handleFileSelect=function(a){var t,l=a.target.files,n=[],s=Object(r.a)(l);try{for(s.s();!(t=s.n()).done;){var i=t.value;n.push({file:i,uploading:!1,error:!1,progress:0})}}catch(c){s.e(c)}finally{s.f()}e.setState({files:[].concat(n)})},e.handleDragOver=function(a){a.preventDefault(),e.setState({dragClass:"drag-shadow"})},e.handleDrop=function(a){a.preventDefault(),a.persist();var t,l=a.dataTransfer.files,n=[],s=Object(r.a)(l);try{for(s.s();!(t=s.n()).done;){var i=t.value;n.push({file:i,uploading:!1,error:!1,progress:0})}}catch(c){s.e(c)}finally{s.f()}return e.setState({dragClass:"",files:[].concat(n)}),!1},e.handleDragStart=function(a){e.setState({dragClass:"drag-shadow"})},e.handleSingleRemove=function(a){var t=Object(n.a)(e.state.files);t.splice(a,1),e.setState({files:Object(n.a)(t)})},e.handleAllRemove=function(){e.setState({files:[],queProgress:0})},e.uploadSingleFile=function(a){var t=Object(n.a)(e.state.files),r=e.state.files[a];t[a]=Object(l.a)(Object(l.a)({},r),{},{uploading:!0,error:!1}),e.setState({files:Object(n.a)(t)})},e.uploadAllFile=function(){var a=[];e.state.files.map((function(e){return a.push(Object(l.a)(Object(l.a)({},e),{},{uploading:!0,error:!1})),e})),e.setState({files:[].concat(a),queProgress:35})},e.handleSingleCancel=function(a){var t=Object(n.a)(e.state.files),r=e.state.files[a];t[a]=Object(l.a)(Object(l.a)({},r),{},{uploading:!1,error:!0}),e.setState({files:Object(n.a)(t)})},e.handleCancelAll=function(){var a=[];e.state.files.map((function(e){return a.push(Object(l.a)(Object(l.a)({},e),{},{uploading:!1,error:!0})),e})),e.setState({files:[].concat(a),queProgress:0})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.dragClass,l=a.files,n=a.queProgress,r=0===l.length;return d.a.createElement("div",null,d.a.createElement(u.a,{routeSegments:[{name:"Home",path:"/"},{name:"Extra Kits",path:"/extra-kits"},{name:"Upload"}]}),d.a.createElement(u.h,{title:"File Upload"},d.a.createElement("div",{className:"d-flex flex-wrap mb-4"},d.a.createElement("label",{htmlFor:"upload-single-file"},d.a.createElement(f.a,{className:"btn-rounded",as:"span"},d.a.createElement("div",{className:"flex flex-middle"},d.a.createElement("i",{className:"i-Share-on-Cloud"}," "),d.a.createElement("span",null,"Single File")))),d.a.createElement("input",{className:"d-none",onChange:this.handleFileSelect,id:"upload-single-file",type:"file"}),d.a.createElement("div",{className:"px-3"}),d.a.createElement("label",{htmlFor:"upload-multiple-file"},d.a.createElement(f.a,{className:"btn-rounded",as:"span"},d.a.createElement("div",{className:"flex flex-middle"},d.a.createElement("i",{className:"i-Share-on-Cloud "}," "),d.a.createElement("span",null,"Multiple File")))),d.a.createElement("input",{className:"d-none",onChange:this.handleFileSelect,id:"upload-multiple-file",type:"file",multiple:!0})),d.a.createElement("div",{className:"".concat(t," dropzone mb-4 d-flex justify-content-center align-items-center"),onDragEnter:this.handleDragStart,onDragOver:this.handleDragOver,onDrop:this.handleDrop},r?d.a.createElement("span",null,"Drop your files here"):d.a.createElement("h5",{className:"m-0"},l.length," file",l.length>1?"s":""," selected...")),d.a.createElement(p.a,{className:"mb-4"},d.a.createElement(g.a,{className:"align-items-center p-3"},d.a.createElement(b.a,{lg:4,md:4},"Name"),d.a.createElement(b.a,{lg:1,md:1},"Size"),d.a.createElement(b.a,{lg:2,md:2},"Progress"),d.a.createElement(b.a,{lg:1,md:1},"Status"),d.a.createElement(b.a,{lg:4,md:4},"Actions")),d.a.createElement("hr",{className:"mt-0 mb-3"}),r&&d.a.createElement("p",{className:"p-3 py-0"},"Que is empty"),l.map((function(a,t){var l=a.file,n=a.uploading,r=a.error,s=a.progress;return d.a.createElement(g.a,{className:"align-items-center px-3",key:l.name},d.a.createElement(b.a,{lg:4,md:4,sm:12,xs:12,className:"mb-3"},l.name),d.a.createElement(b.a,{lg:1,md:1,sm:12,xs:12,className:"mb-3"},(l.size/1024/1024).toFixed(1)," MB"),d.a.createElement(b.a,{lg:2,md:2,sm:12,xs:12,className:"mb-3"},d.a.createElement(h.a,{now:s,variant:"success",className:"progress-thin"})),d.a.createElement(b.a,{lg:1,md:1,sm:12,xs:12,className:"mb-3"},r&&d.a.createElement("i",{className:"i-Information text-danger text-18"}," ")),d.a.createElement(b.a,{lg:4,md:4,sm:12,xs:12,className:"mb-3"},d.a.createElement("div",{className:"d-flex"},d.a.createElement(f.a,{disabled:n,onClick:function(){return e.uploadSingleFile(t)}},"Upload"),d.a.createElement(f.a,{className:"mx-8",variant:"warning",disabled:!n,onClick:function(){return e.handleSingleCancel(t)}},"Cancel"),d.a.createElement(f.a,{variant:"danger",onClick:function(){return e.handleSingleRemove(t)}},"Remove"))))}))),d.a.createElement("div",null,d.a.createElement("p",{className:"m-0"},"Queue progress:"),d.a.createElement("div",{className:"py-3"},d.a.createElement(h.a,{now:n,variant:"success",className:"progress-thin"})),d.a.createElement("div",{className:"flex"},d.a.createElement(f.a,{disabled:r,onClick:this.uploadAllFile},"Upload All"),d.a.createElement(f.a,{className:"mx-8",variant:"warning",disabled:r,onClick:this.handleCancelAll},"Cancel All"),!r&&d.a.createElement(f.a,{variant:"danger",onClick:this.handleAllRemove},"Remove All")))))}}]),t}(o.Component);a.default=v}}]);
//# sourceMappingURL=54.afada33d.chunk.js.map