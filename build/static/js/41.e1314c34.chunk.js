(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[41],{1354:function(e,a,t){(function(r){var n;e.exports=(n=t(0),function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=n},function(e,a,t){"use strict";var r=t(3);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,s,l){if(l!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:s,resetWarningCache:n};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),l=r(0),i=r.n(l);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=function(e){var a=e.pageClassName,t=e.pageLinkClassName,r=e.page,n=e.selected,l=e.activeClassName,i=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,m=e.href,p=e.extraAriaContext,d=e.ariaLabel||"Page "+r+(p?" "+p:""),f=null;return n&&(f="page",d=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+l:l,void 0!==t?void 0!==i&&(t=t+" "+i):t=i),s.a.createElement("li",{className:a},s.a.createElement("a",o({role:"button",className:t,href:m,tabIndex:"0","aria-label":d,"aria-current":f,onKeyPress:u},c(u)),r))};c.propTypes={pageSelectedHandler:i.a.func.isRequired,selected:i.a.bool.isRequired,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,extraAriaContext:i.a.string,href:i.a.string,ariaLabel:i.a.string,page:i.a.number.isRequired,getEventListener:i.a.func.isRequired};var u=c;function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var p=function(e){var a=e.breakLabel,t=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,l=e.getEventListener,i=t||"break";return s.a.createElement("li",{className:i},s.a.createElement("a",m({className:r,role:"button",tabIndex:"0",onKeyPress:n},l(n)),a))};p.propTypes={breakLabel:i.a.oneOfType([i.a.string,i.a.node]),breakClassName:i.a.string,breakLinkClassName:i.a.string,breakHandler:i.a.func.isRequired,getEventListener:i.a.func.isRequired};var d=p;function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function b(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,a){return(v=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function h(e,a){return!a||"object"!==f(a)&&"function"!=typeof a?y(e):a}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var C=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&v(e,a)}(n,e);var a,t,r=function(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=E(e);if(a){var n=E(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return h(this,t)}}(n);function n(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,n),N(y(a=r.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),N(y(a),"handleNextPage",(function(e){var t=a.state.selected,r=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<r-1&&a.handlePageSelected(t+1,e)})),N(y(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),N(y(a),"getEventListener",(function(e){return N({},a.props.eventListener,e)})),N(y(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var r=a.state.selected;a.handlePageSelected(r<e?a.getForwardJump():a.getBackwardJump(),t)})),N(y(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),N(y(a),"pagination",(function(){var e=[],t=a.props,r=t.pageRangeDisplayed,n=t.pageCount,l=t.marginPagesDisplayed,i=t.breakLabel,o=t.breakClassName,c=t.breakLinkClassName,u=a.state.selected;if(n<=r)for(var m=0;m<n;m++)e.push(a.getPageElement(m));else{var p,f,g,b=r/2,v=r-b;u>n-r/2?b=r-(v=n-u):u<r/2&&(v=r-(b=u));var h=function(e){return a.getPageElement(e)};for(p=0;p<n;p++)(f=p+1)<=l||f>n-l||p>=u-b&&p<=u+v?e.push(h(p)):i&&e[e.length-1]!==g&&(g=s.a.createElement(d,{key:p,breakLabel:i,breakClassName:o,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,p),getEventListener:a.getEventListener}),e.push(g))}return e})),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=n,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<r)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,r=t.pageClassName,n=t.pageLinkClassName,l=t.activeClassName,i=t.activeLinkClassName,o=t.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:r,pageLinkClassName:n,activeClassName:l,activeLinkClassName:i,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,r=e.containerClassName,n=e.previousLabel,l=e.previousClassName,i=e.previousLinkClassName,o=e.previousAriaLabel,c=e.nextLabel,u=e.nextClassName,m=e.nextLinkClassName,p=e.nextAriaLabel,d=this.state.selected,f=l+(0===d?" ".concat(a):""),b=u+(d===t-1?" ".concat(a):""),v=0===d?"true":"false",h=d===t-1?"true":"false";return s.a.createElement("ul",{className:r},s.a.createElement("li",{className:f},s.a.createElement("a",g({className:i,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":v,"aria-label":o},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),s.a.createElement("li",{className:b},s.a.createElement("a",g({className:m,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":h,"aria-label":p},this.getEventListener(this.handleNextPage)),c)))}}])&&b(a.prototype,t),n}(n.Component);N(C,"propTypes",{pageCount:i.a.number.isRequired,pageRangeDisplayed:i.a.number.isRequired,marginPagesDisplayed:i.a.number.isRequired,previousLabel:i.a.node,previousAriaLabel:i.a.string,nextLabel:i.a.node,nextAriaLabel:i.a.string,breakLabel:i.a.oneOfType([i.a.string,i.a.node]),hrefBuilder:i.a.func,onPageChange:i.a.func,initialPage:i.a.number,forcePage:i.a.number,disableInitialCallback:i.a.bool,containerClassName:i.a.string,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,previousClassName:i.a.string,nextClassName:i.a.string,previousLinkClassName:i.a.string,nextLinkClassName:i.a.string,disabledClassName:i.a.string,breakClassName:i.a.string,breakLinkClassName:i.a.string,extraAriaContext:i.a.string,ariaLabelBuilder:i.a.func,eventListener:i.a.string}),N(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),t.default=C,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,t(51))},1769:function(e,a,t){"use strict";var r=t(6),n=t(8),s=t(7),l=t.n(s),i=t(0),o=t.n(i),c=t(16),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],m=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.striped,m=e.bordered,p=e.borderless,d=e.hover,f=e.size,g=e.variant,b=e.responsive,v=Object(n.a)(e,u),h=Object(c.a)(t,"table"),y=l()(s,h,g&&h+"-"+g,f&&h+"-"+f,i&&h+"-striped",m&&h+"-bordered",p&&h+"-borderless",d&&h+"-hover"),E=o.a.createElement("table",Object(r.a)({},v,{className:y,ref:a}));if(b){var N=h+"-responsive";return"string"===typeof b&&(N=N+"-"+b),o.a.createElement("div",{className:N},E)}return E}));a.a=m},2804:function(e,a,t){"use strict";t.r(a);var r=t(42),n=t(43),s=t(57),l=t(58),i=t(0),o=t.n(i),c=t(124),u=t(5),m=t(1341),p=t.n(m),d=function(e){var a=e.height,t=Object(u.a)(Object(u.a)({},c.i.lineSplitNoAxis),{},{grid:{top:15,left:35,right:35,bottom:0},series:[{data:[40,80,20,90,30,80,40],lineStyle:Object(u.a)({color:"rgba(102, 51, 153, 0.8)",width:3},c.i.lineShadow),label:{show:!0,color:"#212121"},type:"line",smooth:!0,itemStyle:{borderColor:"rgba(102, 51, 153, 1)"}}]});return o.a.createElement(p.a,{style:{height:a},option:t})},f=function(e){var a=e.height,t=Object(u.a)(Object(u.a)({},c.i.defaultOptions),{},{legend:{show:!0,bottom:0},series:[Object(u.a)(Object(u.a)({type:"pie"},c.i.pieRing),{},{label:c.i.pieLabelCenterHover,data:[{name:"Completed",value:80,itemStyle:{color:"#663399"}},{name:"Pending",value:20,itemStyle:{color:"#ced4da"}}]})]});return o.a.createElement(p.a,{style:{height:a},option:t})},g=t(1769),b=t(1354),v=t.n(b),h=t(438),y=t(28),E=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={cardList:[{icon:"i-Data-Download",subtitle:"Today's Upload",title:"21"},{icon:"i-Add-User",subtitle:"new users",title:"53"},{icon:"i-Money-2",subtitle:"total sales",title:"4031"},{icon:"i-Money-2",title:"4031"},{icon:"i-Gear",title:"4031"},{icon:"i-Bell",title:"4031"}],topAuthorList:[{name:"David Hopkins",description:"Lorem ipsum dolor sit amet consectetur.",photoUrl:"/assets/images/faces/2.jpg"},{name:"James Mitchell",description:"Lorem ipsum dolor sit amet consectetur.",photoUrl:"/assets/images/faces/3.jpg"},{name:"Jessica Mitchell",description:"Lorem ipsum dolor sit amet consectetur.",photoUrl:"/assets/images/faces/4.jpg"}],lastMonthSummery:[{name:"Portable Speaker",status:"+ $1200"},{name:"Portable Headphe",status:"In Stock"},{name:"Speaker",status:"Out of Stock"},{name:"Watch",status:"Low Stock"}],newUserList:[{name:"David Hopkins",email:"hopkins@gmail.com",photoUrl:"/assets/images/faces/2.jpg",status:"active"},{name:"James Mitchell",email:"petter@gmail.com",photoUrl:"/assets/images/faces/3.jpg",status:"pending"},{name:"Jessica Mitchell",email:"johndoe@gmail.com",photoUrl:"/assets/images/faces/4.jpg",status:"inactive"}],topProductList:[{name:"Watch",date:"12-10-2019",price:30,status:"delivered"},{name:"Iphone",date:"24-10-2019",price:350,status:"pending"},{name:"Headphone",date:"11-11-2019",price:10,status:"not delivered"}]},e.handlePageClick=function(a){var t=a.selected,r=Math.ceil(t*e.props.perPage);e.setState({offset:r},(function(){console.log(a)}))},e.getUserStatusClass=function(e){switch(e){case"active":case"delivered":return"badge-success";case"inactive":case"not delivered":return"badge-warning";case"pending":return"badge-primary"}},e.getStatusTextColor=function(e){switch(e){case"In Stock":return"text-success";case"Low Stock":return"text-warning";case"Out of Stock":return"text-danger";default:return"text-primary"}},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.cardList,r=void 0===t?[]:t,n=a.lastMonthSummery,s=void 0===n?[]:n,l=a.topAuthorList,i=void 0===l?[]:l,u=a.newUserList,m=void 0===u?[]:u,p=a.topProductList,b=void 0===p?[]:p;return o.a.createElement("div",null,o.a.createElement(c.a,{routeSegments:[{name:"Dashboard",path:"/dashboard"},{name:"Version 2"}]}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 col-md-12"},o.a.createElement("div",{className:"row"},r.map((function(e,a){return o.a.createElement("div",{key:a,className:"col-md-4"},o.a.createElement("div",{className:"card card-icon-big mb-4"},o.a.createElement("div",{className:"card-body text-center"},o.a.createElement("i",{className:e.icon}),o.a.createElement("p",{className:"text-muted mt-2 mb-0 text-capitalize"},e.subtitle),o.a.createElement("p",{className:"lead text-18 mt-2 mb-0 text-capitalize"},e.title))))})))),o.a.createElement("div",{className:"col-lg-6 col-md-12"},o.a.createElement("div",{className:"card mb-4"},o.a.createElement("div",{className:"card-body p-0"},o.a.createElement("h5",{className:"card-title m-0 p-3"},"Sales"),o.a.createElement(d,{height:"300px"})))),o.a.createElement("div",{className:"col-lg-6 col-md-12"},o.a.createElement(h.a,{title:"Last Month Summary",className:"mb-4"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("table",{className:"table"},o.a.createElement("thead",{className:"thead-light"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Item"),o.a.createElement("th",{scope:"col"},"Status"))),o.a.createElement("tbody",null,s.map((function(a,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,a.name),o.a.createElement("td",{className:e.getStatusTextColor(a.status)},a.status))}))))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(f,{height:"200px"}))))),o.a.createElement("div",{className:"col-lg-6 col-md-12"},o.a.createElement(h.a,{title:"Top Authors",className:"mb-4"},i.map((function(e,a){return o.a.createElement("div",{key:a,className:Object(y.a)({"d-flex align-items-center border-bottom-dotted-dim":!0,"mb-3 pb-3":a!==i.length-1})},o.a.createElement("img",{className:"avatar-md rounded mr-3",src:e.photoUrl,alt:""}),o.a.createElement("div",{className:"flex-grow-1"},o.a.createElement("h6",{className:"m-0"},e.name),o.a.createElement("p",{className:"m-0 text-small text-muted"},e.description)),o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-outline-primary btn-rounded btn-sm"},"Follow")))}))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"card o-hidden mb-4"},o.a.createElement("div",{className:"card-header d-flex card-title align-items-center mb-0"},o.a.createElement("h3",{className:"w-50 float-left m-0"},"New Users")),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(g.a,{hover:!0,id:"user_table",className:"table dataTable-collapse text-center"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"#"),o.a.createElement("th",{scope:"col"},"Name"),o.a.createElement("th",{scope:"col"},"Avatar"),o.a.createElement("th",{scope:"col"},"Email"),o.a.createElement("th",{scope:"col"},"Status"),o.a.createElement("th",{scope:"col"},"Action"))),o.a.createElement("tbody",null,m.map((function(a,t){return o.a.createElement("tr",{key:t},o.a.createElement("th",{scope:"row"},t+1),o.a.createElement("td",null,a.name),o.a.createElement("td",null,o.a.createElement("img",{className:"rounded-circle m-0 avatar-sm-table ",src:a.photoUrl,alt:""})),o.a.createElement("td",null,a.email),o.a.createElement("td",null,o.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(a.status))},a.status)),o.a.createElement("td",null,o.a.createElement("span",{className:"cursor-pointer text-success mr-2"},o.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),o.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},o.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))})))),o.a.createElement("div",{className:"px-3 pb-3 mt-3 d-flex flex-row justify-content-end"},o.a.createElement(v.a,{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",breakClassName:"break-me",pageCount:5,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"card o-hidden mb-4"},o.a.createElement("div",{className:"card-header d-flex card-title m-0 align-items-center"},o.a.createElement("h3",{className:"w-50 float-left card-title m-0"},"Total Sales")),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(g.a,{hover:!0,id:"sales_table",className:"table dataTable-collapse text-center"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"#"),o.a.createElement("th",{scope:"col"},"Product"),o.a.createElement("th",{scope:"col"},"Date"),o.a.createElement("th",{scope:"col"},"Price"),o.a.createElement("th",{scope:"col"},"Status"),o.a.createElement("th",{scope:"col"},"Action"))),o.a.createElement("tbody",null,b.map((function(a,t){return o.a.createElement("tr",{key:t},o.a.createElement("th",{scope:"row"},t+1),o.a.createElement("td",null,a.name),o.a.createElement("td",null,a.date),o.a.createElement("td",null,"$",a.price),o.a.createElement("td",null,o.a.createElement("span",{className:"badge ".concat(e.getUserStatusClass(a.status))},a.status)),o.a.createElement("td",null,o.a.createElement("span",{className:"cursor-pointer text-success mr-2"},o.a.createElement("i",{className:"nav-icon i-Pen-2 font-weight-bold"})),o.a.createElement("span",{className:"cursor-pointer text-danger mr-2"},o.a.createElement("i",{className:"nav-icon i-Close-Window font-weight-bold"}))))})))),o.a.createElement("div",{className:"px-3 pb-3 mt-3 d-flex flex-row justify-content-end"},o.a.createElement(v.a,{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",breakClassName:"break-me",pageCount:5,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))))))}}]),t}(i.Component);a.default=E}}]);
//# sourceMappingURL=41.e1314c34.chunk.js.map