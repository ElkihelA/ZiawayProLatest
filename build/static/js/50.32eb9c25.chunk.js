(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[50],{1347:function(e,a,t){(function(r){var n;e.exports=(n=t(0),function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=n},function(e,a,t){"use strict";var r=t(3);function n(){}function l(){}l.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,l,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:l,resetWarningCache:n};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),l=r.n(n),s=r(0),i=r.n(s);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o=function(e){var a=e.pageClassName,t=e.pageLinkClassName,r=e.page,n=e.selected,s=e.activeClassName,i=e.activeLinkClassName,o=e.getEventListener,m=e.pageSelectedHandler,u=e.href,d=e.extraAriaContext,p=e.ariaLabel||"Page "+r+(d?" "+d:""),g=null;return n&&(g="page",p=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+s:s,void 0!==t?void 0!==i&&(t=t+" "+i):t=i),l.a.createElement("li",{className:a},l.a.createElement("a",c({role:"button",className:t,href:u,tabIndex:"0","aria-label":p,"aria-current":g,onKeyPress:m},o(m)),r))};o.propTypes={pageSelectedHandler:i.a.func.isRequired,selected:i.a.bool.isRequired,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,extraAriaContext:i.a.string,href:i.a.string,ariaLabel:i.a.string,page:i.a.number.isRequired,getEventListener:i.a.func.isRequired};var m=o;function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var l=void 0;try{l=r[n]}catch(e){continue}e.register(l,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var a=e.breakLabel,t=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,s=e.getEventListener,i=t||"break";return l.a.createElement("li",{className:i},l.a.createElement("a",u({className:r,role:"button",tabIndex:"0",onKeyPress:n},s(n)),a))};d.propTypes={breakLabel:i.a.oneOfType([i.a.string,i.a.node]),breakClassName:i.a.string,breakLinkClassName:i.a.string,breakHandler:i.a.func.isRequired,getEventListener:i.a.func.isRequired};var p=d;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function E(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,a){return(v=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function N(e,a){return!a||"object"!==g(a)&&"function"!=typeof a?b(e):a}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var l=void 0;try{l=r[n]}catch(e){continue}e.register(l,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var x=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&v(e,a)}(n,e);var a,t,r=function(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=y(e);if(a){var n=y(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return N(this,t)}}(n);function n(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,n),h(b(a=r.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),h(b(a),"handleNextPage",(function(e){var t=a.state.selected,r=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<r-1&&a.handlePageSelected(t+1,e)})),h(b(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),h(b(a),"getEventListener",(function(e){return h({},a.props.eventListener,e)})),h(b(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var r=a.state.selected;a.handlePageSelected(r<e?a.getForwardJump():a.getBackwardJump(),t)})),h(b(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),h(b(a),"pagination",(function(){var e=[],t=a.props,r=t.pageRangeDisplayed,n=t.pageCount,s=t.marginPagesDisplayed,i=t.breakLabel,c=t.breakClassName,o=t.breakLinkClassName,m=a.state.selected;if(n<=r)for(var u=0;u<n;u++)e.push(a.getPageElement(u));else{var d,g,f,E=r/2,v=r-E;m>n-r/2?E=r-(v=n-m):m<r/2&&(v=r-(E=m));var N=function(e){return a.getPageElement(e)};for(d=0;d<n;d++)(g=d+1)<=s||g>n-s||d>=m-E&&d<=m+v?e.push(N(d)):i&&e[e.length-1]!==f&&(f=l.a.createElement(p,{key:d,breakLabel:i,breakClassName:c,breakLinkClassName:o,breakHandler:a.handleBreakClick.bind(null,d),getEventListener:a.getEventListener}),e.push(f))}return e})),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=n,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<r)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,r=t.pageClassName,n=t.pageLinkClassName,s=t.activeClassName,i=t.activeLinkClassName,c=t.extraAriaContext;return l.a.createElement(m,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:r,pageLinkClassName:n,activeClassName:s,activeLinkClassName:i,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,r=e.containerClassName,n=e.previousLabel,s=e.previousClassName,i=e.previousLinkClassName,c=e.previousAriaLabel,o=e.nextLabel,m=e.nextClassName,u=e.nextLinkClassName,d=e.nextAriaLabel,p=this.state.selected,g=s+(0===p?" ".concat(a):""),E=m+(p===t-1?" ".concat(a):""),v=0===p?"true":"false",N=p===t-1?"true":"false";return l.a.createElement("ul",{className:r},l.a.createElement("li",{className:g},l.a.createElement("a",f({className:i,href:this.hrefBuilder(p-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":v,"aria-label":c},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),l.a.createElement("li",{className:E},l.a.createElement("a",f({className:u,href:this.hrefBuilder(p+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":N,"aria-label":d},this.getEventListener(this.handleNextPage)),o)))}}])&&E(a.prototype,t),n}(n.Component);h(x,"propTypes",{pageCount:i.a.number.isRequired,pageRangeDisplayed:i.a.number.isRequired,marginPagesDisplayed:i.a.number.isRequired,previousLabel:i.a.node,previousAriaLabel:i.a.string,nextLabel:i.a.node,nextAriaLabel:i.a.string,breakLabel:i.a.oneOfType([i.a.string,i.a.node]),hrefBuilder:i.a.func,onPageChange:i.a.func,initialPage:i.a.number,forcePage:i.a.number,disableInitialCallback:i.a.bool,containerClassName:i.a.string,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,previousClassName:i.a.string,nextClassName:i.a.string,previousLinkClassName:i.a.string,nextLinkClassName:i.a.string,disabledClassName:i.a.string,breakClassName:i.a.string,breakLinkClassName:i.a.string,extraAriaContext:i.a.string,ariaLabelBuilder:i.a.func,eventListener:i.a.string}),h(x,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var l=void 0;try{l=r[n]}catch(e){continue}e.register(l,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),t.default=x,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var l=void 0;try{l=r[n]}catch(e){continue}e.register(l,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,t(50))},2763:function(e,a,t){"use strict";t.r(a);var r=t(42),n=t(52),l=t(57),s=t(58),i=t(0),c=t.n(i),o=t(123),m=t(93),u=t(343),d=t(254),p=t(1347),g=t.n(p),f=t(24),E=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={notificationList:[{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "},{title:"#23. New icons set for an iOS app",text:"corruptedcorrupted 2corrupted 2 20 January, 2015 ",date:"20 January, 2015            "}],itemPerPage:6,currentPage:0},e.handlePageClick=function(a){var t=a.selected;e.setState({currentPage:t})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this.state,a=e.notificationList,t=e.currentPage,r=e.itemPerPage;return c.a.createElement("div",null,c.a.createElement(o.a,{routeSegments:[{name:"Home",path:"/"},{name:"Task Manager"}]}),c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-xl-10"},c.a.createElement("div",{className:"navbar navbar-expand-lg navbar-light navbar-component rounded"},c.a.createElement("div",{className:"text-center d-lg-none w-100"},c.a.createElement("button",{type:"button",className:"task-manager-button navbar-toggler text-white","data-toggle":"collapse","data-target":"#navbar-filter"},c.a.createElement("i",{className:"i-Filter-2"}," "))),c.a.createElement("div",{className:"navbar-collapse collapse",id:"navbar-filter"},c.a.createElement("div",{className:"filter-mobile"},c.a.createElement("span",{className:"navbar-text font-weight-semibold "},"Filter:")),c.a.createElement("ul",{className:"navbar-nav flex-wrap"},c.a.createElement(m.a,{className:"nav-item mx-2"},c.a.createElement(m.a.Toggle,{as:"span",className:"toggle-hidden cursor-pointer"},c.a.createElement(f.a,{className:"navbar-nav-link",to:"#"},c.a.createElement("i",{className:"i-Time-Window "}," ")," By date")),c.a.createElement(m.a.Menu,null,c.a.createElement(m.a.Item,null,"Show all"),c.a.createElement(m.a.Divider,null),c.a.createElement(m.a.Item,null,"Today"),c.a.createElement(m.a.Item,null,"Yesterday"),c.a.createElement(m.a.Item,null,"This week"),c.a.createElement(m.a.Item,null,"This month"),c.a.createElement(m.a.Item,null,"This year"))),c.a.createElement(m.a,{className:"nav-item mx-2"},c.a.createElement(m.a.Toggle,{as:"span",className:"toggle-hidden cursor-pointer"},c.a.createElement(f.a,{className:"navbar-nav-link",to:"#"},c.a.createElement("i",{className:"i-Bar-Chart-2 "})," By status")),c.a.createElement(m.a.Menu,null,c.a.createElement(m.a.Item,null,"Show all"),c.a.createElement(m.a.Divider,null),c.a.createElement(m.a.Item,null,"Open"),c.a.createElement(m.a.Item,null,"On hold"),c.a.createElement(m.a.Item,null,"Resolved"),c.a.createElement(m.a.Item,null,"Closed"),c.a.createElement(m.a.Item,null,"Duplicate"),c.a.createElement(m.a.Item,null,"Invalid"),c.a.createElement(m.a.Item,null,"Wontfix"))),c.a.createElement(m.a,{className:"nav-item mx-2"},c.a.createElement(m.a.Toggle,{as:"span",className:"toggle-hidden cursor-pointer"},c.a.createElement(f.a,{className:"navbar-nav-link",to:"#"},c.a.createElement("i",{className:"i-Arrow-Turn-Right "})," By priority")),c.a.createElement(m.a.Menu,null,c.a.createElement(m.a.Item,null,"Show all"),c.a.createElement(m.a.Divider,null),c.a.createElement(m.a.Item,null,"Highest"),c.a.createElement(m.a.Item,null,"High"),c.a.createElement(m.a.Item,null,"Normal"),c.a.createElement(m.a.Item,null,"Low")))))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-9"},c.a.createElement("div",{className:"row"},a.slice(t*r,(t+1)*r).map((function(e,a){return c.a.createElement("div",{key:a,className:"col-xl-6"},c.a.createElement("div",{className:"card mb-4"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"d-sm-flex align-item-sm-center flex-sm-nowrap"},c.a.createElement("div",null,c.a.createElement("h6",null,c.a.createElement(f.a,{to:"#"},e.title)),c.a.createElement("p",{className:"ul-task-manager__paragraph mb-3"},e.text),c.a.createElement(f.a,{to:"#"},c.a.createElement("img",{src:"/assets/images/faces/1.jpg",className:"rounded-circle",width:"36",height:"36",alt:"corrupted"})),c.a.createElement(f.a,{to:"#"},c.a.createElement("img",{src:"/assets/images/faces/1.jpg",className:"rounded-circle",width:"36",height:"36",alt:"corrupted 2"})),c.a.createElement(f.a,{to:"#"},c.a.createElement("img",{src:"/assets/images/faces/1.jpg",className:"rounded-circle",width:"36",height:"36",alt:"corrupted 2"})),c.a.createElement(f.a,{to:"#"},c.a.createElement("i",{className:"ml-1 ul-task-manager__fonts i-Add text-32 align-middle"}))),c.a.createElement("ul",{className:"list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto"},c.a.createElement("li",null,c.a.createElement("small",{className:"ul-task-manager__font-date text-muted"},e.date)),c.a.createElement(m.a,{className:"list-inline-item my-1"},c.a.createElement(m.a.Toggle,{as:"span",className:"toggle-hidden cursor-pointer d-flex flex-wrap align-items-center"},c.a.createElement("span",null,"Priority: \xa0"),c.a.createElement(f.a,{className:"badge badge-danger align-top dropdown-toggle","data-toggle":"dropdown",to:"#"},"Blocker")),c.a.createElement(m.a.Menu,null,c.a.createElement(m.a.Item,null,c.a.createElement("span",{className:"badge badge-mark mr-2 border-danger"}),"Blocker"),c.a.createElement(m.a.Item,null,c.a.createElement("span",{className:"badge badge-mark mr-2 border-warning-400"}),"High priority"),c.a.createElement(m.a.Item,null,c.a.createElement("span",{className:"badge badge-mark mr-2 border-success"}),"Normal priority"),c.a.createElement(m.a.Item,null,c.a.createElement("span",{className:"badge badge-mark mr-2 border-grey-300"}),"Low priority"))),c.a.createElement("li",null,c.a.createElement(f.a,{to:"#"},"Eternity app"))))),c.a.createElement("div",{className:"card-footer d-sm-flex justify-content-sm-between align-items-sm-center"},c.a.createElement("span",null,"Due:",c.a.createElement("span",{className:"font-weight-semibold"},"18 hours")),c.a.createElement("ul",{className:"list-inline mb-0 mt-2 mt-sm-0"},c.a.createElement(m.a,{className:"list-inline-item"},c.a.createElement(m.a.Toggle,{as:"span",className:"toggle-hidden cursor-pointer"},"On Hold"),c.a.createElement(m.a.Menu,null,c.a.createElement(m.a.Item,null,"Open"),c.a.createElement(m.a.Item,null,"On hold"),c.a.createElement(m.a.Item,null,"Resolved"),c.a.createElement(m.a.Item,null,"Closed"),c.a.createElement(m.a.Divider,null),c.a.createElement(m.a.Item,null,"Dublicate"),c.a.createElement(m.a.Item,null,"Invalid"),c.a.createElement(m.a.Item,null,"Wontfix"))),c.a.createElement(m.a,{className:"list-inline-item"},c.a.createElement(m.a.Toggle,{as:"span",className:"toggle-hidden cursor-pointer"},c.a.createElement("i",{className:"i-Gear-2"}," ")),c.a.createElement(m.a.Menu,null,c.a.createElement(m.a.Item,null,c.a.createElement("i",{className:"i-Bell"}," ")," Check in"),c.a.createElement(m.a.Item,null,c.a.createElement("i",{className:"i-Favorite-Window"}," ")," Attach screenshot"),c.a.createElement(m.a.Item,null,c.a.createElement("i",{className:"i-Medal-3"}," ")," Reassign"),c.a.createElement(m.a.Item,null,c.a.createElement("i",{className:"i-Edit"}," ")," Edit task"),c.a.createElement(m.a.Item,null,c.a.createElement("i",{className:"i-Paint-Brush"}," ")," Remove")))))))}))),c.a.createElement("div",{className:"row justify-content-center mt-4"},c.a.createElement(g.a,{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",breakClassName:"break-me",pageCount:Math.ceil(a.length/r),marginPagesDisplayed:2,pageRangeDisplayed:r,onPageChange:this.handlePageClick,containerClassName:"pagination pagination-lg",subContainerClassName:"pages pagination",activeClassName:"active"}))),c.a.createElement("div",{className:"col-xl-3 "},c.a.createElement(u.a,{className:"mb-3",defaultActiveKey:"search"},c.a.createElement(d.a,null,c.a.createElement(u.a.Toggle,{as:d.a.Header,className:"cursor-pointer d-flex justify-content-between pr-3",eventKey:"search"},c.a.createElement("span",null,"Search Task"),c.a.createElement("span",{className:" dropdown-toggle"})),c.a.createElement(u.a.Collapse,{eventKey:"search"},c.a.createElement("div",{className:"card-body",id:"custom-toggle"},c.a.createElement("input",{type:"text",placeholder:"type  &  hit enter",className:"form-control"}))))),c.a.createElement(u.a,{className:"mb-3",defaultActiveKey:"actions"},c.a.createElement(d.a,null,c.a.createElement(u.a.Toggle,{as:d.a.Header,className:"cursor-pointer d-flex justify-content-between pr-3",eventKey:"actions"},c.a.createElement("span",null,"Actions"),c.a.createElement("span",{className:" dropdown-toggle"})),c.a.createElement(u.a.Collapse,{eventKey:"actions"},c.a.createElement("div",{className:"card-body",id:"custom-toggle2"},c.a.createElement("h5",{className:"card-title"},"Light card title"),c.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."))))),c.a.createElement(u.a,{className:"mb-3",defaultActiveKey:"navigation"},c.a.createElement(d.a,null,c.a.createElement(u.a.Toggle,{as:d.a.Header,className:"cursor-pointer d-flex justify-content-between pr-3",eventKey:"navigation"},c.a.createElement("span",null,"Navigation"),c.a.createElement("span",{className:" dropdown-toggle"})),c.a.createElement(u.a.Collapse,{eventKey:"navigation"},c.a.createElement("div",{className:"card-body",id:"custom-toggle3"},c.a.createElement("p",{className:"card-text"},"Actions"),c.a.createElement("div",{className:"list-group"},c.a.createElement(f.a,{to:"#",className:"list-group-item list-group-item-action"},c.a.createElement("span",{className:"custom-font"},c.a.createElement("i",{className:"i-Add-Window"}," ")),"Create Task"),c.a.createElement(f.a,{to:"#",className:"list-group-item list-group-item-action "},c.a.createElement("i",{className:"i-Empty-Box"}," ")," Create Project"),c.a.createElement(f.a,{to:"#",className:"list-group-item list-group-item-action"},c.a.createElement("i",{className:"i-Edit"}," ")," Edit Task List"),c.a.createElement(f.a,{to:"#",className:"list-group-item list-group-item-action"},c.a.createElement("i",{className:"i-Add-User"}," ")," Assign User"),c.a.createElement(f.a,{to:"#",className:"list-group-item list-group-item-action disabled"},c.a.createElement("i",{className:"i-Business-Mens"}," ")," Create Team")),c.a.createElement("div",{className:"mb-4"}),c.a.createElement("p",{className:"card-text"},"Tasks"),c.a.createElement("div",{className:"list-group"},c.a.createElement(f.a,{to:"#",className:"list-group-item list-group-item-action"},c.a.createElement("span",{className:"custom-font"},c.a.createElement("i",{className:"i-Folders"}," ")),"All Tasks"),c.a.createElement(f.a,{to:"#",className:"list-group-item list-group-item-action "},c.a.createElement("i",{className:"i-Add-File"}," ")," Active Tasks"),c.a.createElement(f.a,{to:"#",className:"list-group-item list-group-item-action"},c.a.createElement("i",{className:"i-Close-Window"}," ")," Closed Tasks"),c.a.createElement(f.a,{to:"#",className:"list-group-item list-group-item-action"},c.a.createElement("i",{className:"i-Administrator"}," ")," Assigned To Me",c.a.createElement("span",{className:"badge badge-primary badge-pill ml-4"},"14")),c.a.createElement(f.a,{to:"#",className:"list-group-item list-group-item-action"},c.a.createElement("i",{className:"i-Conference"}," ")," Assigned To My Team",c.a.createElement("span",{className:"badge badge-primary badge-pill ml-4"},"14")),c.a.createElement(f.a,{to:"#",className:"list-group-item list-group-item-action"},c.a.createElement("i",{className:"i-Gears"}," ")," Settings")))))),c.a.createElement(u.a,{className:"mb-3",defaultActiveKey:"Assigners"},c.a.createElement(d.a,null,c.a.createElement(u.a.Toggle,{as:d.a.Header,className:"cursor-pointer d-flex justify-content-between pr-3",eventKey:"Assigners"},c.a.createElement("span",null,"Assigners"),c.a.createElement("span",{className:" dropdown-toggle"})),c.a.createElement(u.a.Collapse,{eventKey:"Assigners"},c.a.createElement("div",{className:"card-body",id:"custom-toggle4"},c.a.createElement("ul",{className:"media-list"},c.a.createElement("li",{className:"media mb-2"},c.a.createElement(f.a,{to:"#",className:"mr-4"},c.a.createElement("img",{src:"../assets/images/faces/1.jpg",className:"rounded-circle",width:"36",alt:"asd",srcSet:""})),c.a.createElement("div",{className:"ul-task-manager__media"},c.a.createElement(f.a,{to:"#"},"James Alexander gull"),c.a.createElement("div",{className:"font-size-sm text-muted"},"Santa Ana,CA")),c.a.createElement("div",{className:"ml-3 align-self-center"},c.a.createElement("span",{className:"badge badge-mark"}))),c.a.createElement("li",{className:"media mb-2"},c.a.createElement(f.a,{to:"#",className:"mr-4"},c.a.createElement("img",{src:"../assets/images/faces/1.jpg",className:"rounded-circle",width:"36",alt:"asd",srcSet:""})),c.a.createElement("div",{className:"ul-task-manager__media"},c.a.createElement(f.a,{to:"#"},"James Alexander"),c.a.createElement("div",{className:"font-size-sm text-muted"},"Santa Ana,CA")),c.a.createElement("div",{className:"ml-3 align-self-center"},c.a.createElement("span",{className:"badge badge-mark "}))),c.a.createElement("li",{className:"media mb-2"},c.a.createElement(f.a,{to:"#",className:"mr-4"},c.a.createElement("img",{src:"../assets/images/faces/1.jpg",className:"rounded-circle",width:"36",alt:"asd",srcSet:""})),c.a.createElement("div",{className:"ul-task-manager__media"},c.a.createElement(f.a,{to:"#"},"James Alexander"),c.a.createElement("div",{className:"font-size-sm text-muted"},"Santa Ana,CA")),c.a.createElement("div",{className:"ml-3 align-self-center"},c.a.createElement("span",{className:"badge badge-mark"})))))))),c.a.createElement(u.a,{className:"mb-3",defaultActiveKey:"Revisions"},c.a.createElement(d.a,null,c.a.createElement(u.a.Toggle,{as:d.a.Header,className:"cursor-pointer d-flex justify-content-between pr-3",eventKey:"Revisions"},c.a.createElement("span",null,"Revisions"),c.a.createElement("span",{className:" dropdown-toggle"})),c.a.createElement(u.a.Collapse,{eventKey:"Revisions"},c.a.createElement("div",{className:"card-body",id:"custom-toggle5"},c.a.createElement("li",{className:"media mb-3"},c.a.createElement(f.a,{to:"#",className:"revision-font mt-1"},c.a.createElement("i",{className:"i-Arrow-Down-in-Circle mr-2 text-28"})),c.a.createElement("div",{className:"ul-task-manager__media"},c.a.createElement("p",{className:"revisions-p"},"Add full font overrides for popovers and tooltips"),c.a.createElement("div",{className:"font-size-sm text-muted"},"24 minutes ago"))),c.a.createElement("li",{className:"media mb-3"},c.a.createElement(f.a,{to:"#",className:"revision-font mt-1"},c.a.createElement("i",{className:"i-Arrow-Down-in-Circle mr-2 text-28 align-middle"})),c.a.createElement("div",{className:"ul-task-manager__media"},c.a.createElement("p",{className:"revisions-p"},"Add full font overrides for popovers and tooltips"),c.a.createElement("div",{className:"font-size-sm text-muted"},"24 minutes ago"))),c.a.createElement("li",{className:"media mb-3"},c.a.createElement(f.a,{to:"#",className:"revision-font mt-1"},c.a.createElement("i",{className:"i-Arrow-Down-in-Circle mr-2 text-28"})),c.a.createElement("div",{className:"ul-task-manager__media"},c.a.createElement("p",{className:"revisions-p"},"Chris Arney created a new Design branch"),c.a.createElement("div",{className:"font-size-sm text-muted"},"2 hours ago")),c.a.createElement("div",{className:"ml-3 align-self-center"},c.a.createElement("span",{className:"badge badge-mark"}))))))),c.a.createElement(u.a,{className:"mb-3",defaultActiveKey:"Completeness"},c.a.createElement(d.a,null,c.a.createElement(u.a.Toggle,{as:d.a.Header,className:"cursor-pointer d-flex justify-content-between pr-3",eventKey:"Completeness"},c.a.createElement("span",null,"Completeness Stats"),c.a.createElement("span",{className:" dropdown-toggle"})),c.a.createElement(u.a.Collapse,{eventKey:"Completeness"},c.a.createElement("div",{className:"card-body",id:"custom-toggle6"},c.a.createElement("ul",{className:"list-unstyled mb-0"},c.a.createElement("li",{className:"mb-3"},c.a.createElement("div",{className:"d-flex align-items-center mb-1"},"Blockers",c.a.createElement("span",{className:"text-muted ml-auto"},"50%")),c.a.createElement("div",{className:"progress",style:{height:"0.125rem"}},c.a.createElement("div",{className:"progress-bar bg-danger w-50"},c.a.createElement("span",{className:"sr-only"},"50% Complete")))),c.a.createElement("li",{className:"mb-3"},c.a.createElement("div",{className:"d-flex align-items-center mb-1"},"High priority",c.a.createElement("span",{className:"text-muted ml-auto"},"70%")),c.a.createElement("div",{className:"progress",style:{height:"0.125rem"}},c.a.createElement("div",{className:"progress-bar bg-warning-400",style:{width:"70%"}},c.a.createElement("span",{className:"sr-only"},"70% Complete")))),c.a.createElement("li",{className:"mb-3"},c.a.createElement("div",{className:"d-flex align-items-center mb-1"},"Normal priority",c.a.createElement("span",{className:"text-muted ml-auto"},"80%")),c.a.createElement("div",{className:"progress",style:{height:"0.125rem"}},c.a.createElement("div",{className:"progress-bar bg-success-400",style:{width:"80%"}},c.a.createElement("span",{className:"sr-only"},"80% Complete")))),c.a.createElement("li",null,c.a.createElement("div",{className:"d-flex align-items-center mb-1"},"Low priority",c.a.createElement("span",{className:"text-muted ml-auto"},"60%")),c.a.createElement("div",{className:"progress",style:{height:"0.125rem"}},c.a.createElement("div",{className:"progress-bar bg-grey-400",style:{width:"60%"}},c.a.createElement("span",{className:"sr-only"},"60% Complete"))))))))))))}}]),t}(i.Component);a.default=E}}]);
//# sourceMappingURL=50.32eb9c25.chunk.js.map