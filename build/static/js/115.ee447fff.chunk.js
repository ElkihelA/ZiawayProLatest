(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[115],{2776:function(e,a,t){"use strict";t.r(a);var r=t(42),i=t(43),n=t(57),l=t(58),s=t(0),m=t.n(s),o=(t(124),t(34),t(77)),c=t(28),d=(t(217),t(101),t(31),t(355),t(1446)),u=(t(56),function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(e){var i;return Object(r.a)(this,t),(i=a.call(this,e)).handleSubmit=function(e){console.log(e),i.props.updateProfile(e)},i.state={nom:"",telephone:"",email:""},i}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,a){}},{key:"render",value:function(){console.log("state",this.props);var e=this.props.profile,a=e.displayName,t=e.email,r=e.telephone;return this.props.profile&&{nom:a,telephone:r,email:t},m.a.createElement("div",null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12"},m.a.createElement("div",{className:"card mb-4"},m.a.createElement("div",{className:"card-body"},this.props.profile&&m.a.createElement("form",{className:"needs-validation",onSubmit:this.handleSubmit},m.a.createElement("div",{className:"form-row"},m.a.createElement("div",{className:Object(c.a)({"col-md-6 mb-3":!0})},m.a.createElement("label",{htmlFor:"validationCustom202"},"Pr\xe9nom"),m.a.createElement("input",{type:"text",className:"form-control",id:"validationCustom202",placeholder:"Nom",name:"nom",value:a,required:!0}),m.a.createElement("div",{className:"valid-feedback"},"Enchant\xe9!"),m.a.createElement("div",{className:"invalid-feedback"},"Le pr\xe9nom est obligatoire")),m.a.createElement("div",{className:Object(c.a)({"col-md-6 mb-3":!0})},m.a.createElement("label",{htmlFor:"validationCustomUsername"},"Email"),m.a.createElement("div",{className:"input-group"},m.a.createElement("div",{className:"input-group-prepend"},m.a.createElement("span",{className:"input-group-text",id:"inputGroupPrepend"},"@")),m.a.createElement("input",{type:"email",className:"form-control",id:"validationCustomUsername",placeholder:"Courriel","aria-describedby":"inputGroupPrepend",name:"email",value:t,required:!0}),m.a.createElement("div",{className:"invalid-feedback"},"Le courriel est obligatoire")))),m.a.createElement("div",{className:"form-row"},m.a.createElement("div",{className:Object(c.a)({"col-md-12":!0})},m.a.createElement("label",{htmlFor:"validationCustom203"},"T\xe9l\xe9phone"),m.a.createElement(d.a,{className:"form-control",defaultCountry:"CA",id:"telephone",value:r,name:"telephone"}),m.a.createElement("div",{className:"invalid-tooltip"}))),m.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:this.handleSubmit},"Enregistrer")))))))}}]),t}(s.Component));o.object().shape({prenom:o.string().required("first name is required"),nom:o.string().required("last name is required"),email:o.string().required("select any option"),city:o.string().required("birthDay is required"),zip:o.number().required("email is required"),agree:o.string().required("Required"),state:o.string().required("Required")}),o.object().shape({firstName:o.string().required("first name is required"),lastName:o.string().required("last name is required"),username:o.string().required("select any option"),city:o.string().required("birthDay is required"),zip:o.number().required("email is required"),agree:o.string().required("Required"),state:o.string().required("Required")});a.default=u}}]);
//# sourceMappingURL=115.ee447fff.chunk.js.map