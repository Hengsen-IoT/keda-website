(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{437:function(t,e,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("3ad0a924",content,!0,{sourceMap:!1})},450:function(t,e,n){"use strict";n(437)},451:function(t,e,n){var o=n(22)(!1);o.push([t.i,".hero-section[data-v-78d17dba]{background-image:url(/bg/bg-pcb.png);background-size:cover;background-repeat:no-repeat;background-position:50%;height:400px}.hero-section .nav[data-v-78d17dba]{display:none}",""]),t.exports=o},492:function(t,e,n){"use strict";n.r(e);n(25),n(207),n(36);var o=n(436),r={data:function(){return{search:"",products:o}},watch:{"$route.query":function(){this.search=this.$route.query.name||""}},created:function(){this.search=this.$route.query.name}},c=(n(450),n(47)),l=n(60),d=n.n(l),h=n(438),v=n(431),f=n(491),m=n(197),x=n(168),_=n(485),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"hero-section d-flex align-center"},[n("v-container",{},[n("h1",{staticClass:"white--text text-center text-h1 mb-4"},[t._v("Product Center")]),t._v(" "),n("h2",{staticClass:"text-h4 white--text text-center font-weight-light mb-5"},[t._v("\n        Keda Enterprise Development Co. has long been focusing on the\n        semiconductor field as a first-level agent for multiple brands.\n      ")])])],1),t._v(" "),n("v-container",[n("v-text-field",{staticClass:"mt-4",attrs:{label:"Search Product",clearable:"",outlined:"",autofocus:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:[{text:"",align:"left",value:"logo",width:"120"},{text:"Part No",align:"left",value:"name"},{text:"Brand",align:"left",value:"brand"}],items:t.products,search:t.search,"no-data-text":"Product is not listed. Please contact us via info@kedachip.com","no-results-text":"Product is not listed. Please contact us via info@kedachip.com"},scopedSlots:t._u([{key:"item.logo",fn:function(t){var e=t.item;return[n("v-img",{attrs:{width:"80",height:"40",alt:e.name+" logo",src:"logo/"+e.brand.toLowerCase()+"_logo.png"}})]}},{key:"item.name",fn:function(e){var o=e.item;return[n("span",{staticClass:"font-weight-bold"},[t._v(t._s(o.name))]),t._v(" "),o.hot?n("v-chip",{staticClass:"ma-2",attrs:{color:"red",outlined:"",small:""}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-trending-up ")]),t._v("\n          Hot\n        ")],1):t._e()]}}])})],1)],1)}),[],!1,null,"78d17dba",null);e.default=component.exports;d()(component,{VChip:h.a,VContainer:v.a,VDataTable:f.a,VIcon:m.a,VImg:x.a,VTextField:_.a})}}]);