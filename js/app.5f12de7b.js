(function(i){function n(n){for(var u,l,e=n[0],o=n[1],g=n[2],c=0,p=[];c<e.length;c++)l=e[c],Object.prototype.hasOwnProperty.call(h,l)&&h[l]&&p.push(h[l][0]),h[l]=0;for(u in o)Object.prototype.hasOwnProperty.call(o,u)&&(i[u]=o[u]);t&&t(n);while(p.length)p.shift()();return s.push.apply(s,g||[]),a()}function a(){for(var i,n=0;n<s.length;n++){for(var a=s[n],u=!0,e=1;e<a.length;e++){var o=a[e];0!==h[o]&&(u=!1)}u&&(s.splice(n--,1),i=l(l.s=a[0]))}return i}var u={},h={app:0},s=[];function l(n){if(u[n])return u[n].exports;var a=u[n]={i:n,l:!1,exports:{}};return i[n].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=i,l.c=u,l.d=function(i,n,a){l.o(i,n)||Object.defineProperty(i,n,{enumerable:!0,get:a})},l.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},l.t=function(i,n){if(1&n&&(i=l(i)),8&n)return i;if(4&n&&"object"===typeof i&&i&&i.__esModule)return i;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:i}),2&n&&"string"!=typeof i)for(var u in i)l.d(a,u,function(n){return i[n]}.bind(null,u));return a},l.n=function(i){var n=i&&i.__esModule?function(){return i["default"]}:function(){return i};return l.d(n,"a",n),n},l.o=function(i,n){return Object.prototype.hasOwnProperty.call(i,n)},l.p="/";var e=window["webpackJsonp"]=window["webpackJsonp"]||[],o=e.push.bind(e);e.push=n,e=e.slice();for(var g=0;g<e.length;g++)n(e[g]);var t=o;s.push([0,"chunk-vendors"]),a()})({0:function(i,n,a){i.exports=a("56d7")},"034f":function(i,n,a){"use strict";a("85ec")},"03cd":function(i,n,a){},"56d7":function(i,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var u=a("2b0e"),h=function(){var i=this,n=i.$createElement,a=i._self._c||n;return a("div",{attrs:{id:"app"}},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],l=function(){var i=this,n=i.$createElement,a=i._self._c||n;return a("div",{staticClass:"hello"},[a("el-tabs",{staticStyle:{height:"100%"},attrs:{"tab-position":"top"}},[a("el-tab-pane",{attrs:{label:"组件"}},[a("div",{staticClass:"row"},[i._l(i.list,(function(n,u){return[a("el-button",{key:u,staticStyle:{"margin-left":"1px"},attrs:{size:"mini",type:"info",plain:""}},[i._v(" "+i._s(n.shouzimu)+" ")]),i._l(n.wupin,(function(n,h){return a("el-button",{key:n.name,staticStyle:{"margin-left":"1px"},attrs:{size:"mini"},on:{click:function(n){return i.getData(u,h)}}},[i._v(i._s(n)+" ")])}))]}))],2)]),a("el-tab-pane",{attrs:{label:"建筑"}},[a("div",{staticClass:"row"},[i._l(i.jianzhu_list,(function(n,u){return[a("el-button",{key:u,staticStyle:{"margin-left":"1px"},attrs:{size:"mini",type:"info",plain:""}},[i._v(" "+i._s(n.shouzimu)+" ")]),i._l(n.wupin,(function(n,h){return a("el-button",{key:n.name,staticStyle:{"margin-left":"1px"},attrs:{size:"mini"},on:{click:function(n){return i.getjianzhuData(u,h)}}},[i._v(i._s(n)+" ")])}))]}))],2)]),a("el-tab-pane",{attrs:{label:"图例"}},[a("div",{staticClass:"row-center"},[a("el-tag",{attrs:{size:"mini"}},[i._v("组件"),i.switchvalue.shuliang?a("span",[i._v("*数量")]):i._e()]),i._v(" 丨 "),a("el-tag",{attrs:{size:"mini",type:"warning"}},[i._v("建筑"),i.switchvalue.shuliang?a("span",[i._v("*数量")]):i._e()]),i._v(" 丨 "),a("el-tag",{attrs:{type:"danger",size:"mini"}},[i._v("采集物品"),i.switchvalue.shuliang?a("span",[i._v("*数量")]):i._e()]),a("span",[i._v("丨")]),i.switchvalue.duoyu?a("el-tag",{attrs:{type:"info",size:"mini"}},[a("span",[i._v(" 额外产物"),i.switchvalue.shuliang?a("span",[i._v("*数量")]):i._e()])]):i._e(),i.switchvalue.duoyu?a("span",[i._v("丨")]):i._e(),i.switchvalue.shebei?a("el-tag",{attrs:{type:"success",size:"mini",effect:"plain"}},[i._v("合成设备 ")]):i._e(),i.switchvalue.shebei?a("span",[i._v("丨")]):i._e(),a("el-link",{attrs:{type:"primary"}},[a("i",{staticClass:"el-icon-caret-left"})]),a("el-tag",{attrs:{type:"info",size:"mini",effect:"plain"}},[i._v("当前合成方式 ")]),a("el-link",{attrs:{type:"primary"}},[a("i",{staticClass:"el-icon-caret-right"})])],1)]),a("el-tab-pane",{attrs:{label:"设置"}},[a("div",{staticClass:"row-center"},[i.switchvalue.shuliang?a("div",{staticStyle:{width:"100%","margin-bottom":"4px"}},[i._v(" 产物数量： "),i.switchvalue.shuliang?a("el-input-number",{attrs:{size:"mini",min:1,max:1e4,label:"产物数量"},model:{value:i.zongshuliang,callback:function(n){i.zongshuliang=n},expression:"zongshuliang"}}):i._e()],1):i._e(),a("div",[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#82848a"},model:{value:i.switchvalue.shuliang,callback:function(n){i.$set(i.switchvalue,"shuliang",n)},expression:"switchvalue.shuliang"}}),i._v(" 显示数量丨 "),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#82848a"},model:{value:i.switchvalue.shebei,callback:function(n){i.$set(i.switchvalue,"shebei",n)},expression:"switchvalue.shebei"}}),i._v(" 显示设备丨 "),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#82848a"},model:{value:i.switchvalue.duoyu,callback:function(n){i.$set(i.switchvalue,"duoyu",n)},expression:"switchvalue.duoyu"}}),i._v(" 显示额外产物 ")],1)])]),a("el-tab-pane",{attrs:{label:"反馈"}},[a("div",{staticClass:"row-center"},[a("el-link",{attrs:{href:"https://github.com/yoko008/dyson_sphere_tree",target:"_blank"}},[i._v("源码地址")]),a("el-link",{attrs:{disabled:"",target:"_blank"}},[i._v("丨")]),a("el-link",{attrs:{href:"https://github.com/yoko008/dyson_sphere_tree/issues/new",target:"_blank"}},[i._v("数据报错/建议 ")]),a("span",{staticStyle:{color:"#c0c4cc","font-size":"6px"}},[i._v("（需github账号）")])],1)])],1),a("div",{staticClass:"row",staticStyle:{display:"inline-block","*display":"inline","*zoom":"1"}},[a("Tree",{attrs:{tree:i.tree,shuliang:1,zongshuliang:i.zongshuliang,dangqian:i.dangqian,switchvalue:i.switchvalue}})],1)],1)},e=[],o=function(){var i=this,n=i.$createElement,a=i._self._c||n;return a("div",[a("div",[1==i.tree.info[i.dangqian].caiji?a("el-tag",{attrs:{type:"danger",size:"mini"}},[i._v(i._s(i.tree.name)),i.switchvalue.shuliang?a("span",[i._v("*"+i._s(i.zongshuliang))]):i._e()]):1==i.tree.jianzhu?a("el-tag",{attrs:{type:"warning",size:"mini"}},[i._v(i._s(i.tree.name)),i.switchvalue.shuliang?a("span",[i._v("*"+i._s(i.zongshuliang))]):i._e()]):a("el-tag",{attrs:{size:"mini"}},[i._v(i._s(i.tree.name)),i.switchvalue.shuliang?a("span",[i._v("*"+i._s(i.zongshuliang))]):i._e()]),i.switchvalue.duoyu&&void 0!=i.tree.info[i.dangqian].duoyu?a("el-tag",{attrs:{type:"info",size:"mini"}},i._l(i.tree.info[i.dangqian].duoyu,(function(n){return a("span",{key:n.wupin},[i._v(i._s(n.wupin)),i.switchvalue.shuliang?a("span",[i._v("*"+i._s(n.shuliang*i.zongshuliang))]):i._e()])})),0):i._e()],1),i.switchvalue.shebei?a("div",[a("el-tag",{attrs:{type:"success",size:"mini",effect:"plain"}},[i._v(i._s(i.tree.info[i.dangqian].leixing)+" ")])],1):i._e(),i.tree.info.length>1?a("div",{staticStyle:{"white-space":"nowrap"}},[a("el-link",{attrs:{type:"primary"},on:{click:function(n){return i.qiehuanhechengfangshi(-1)}}},[a("i",{staticClass:"el-icon-caret-left"})]),a("el-tag",{attrs:{type:"info",size:"mini",effect:"plain"}},[i._v(i._s(i.tree.info[i.dangqian].zhushi))]),a("el-link",{attrs:{type:"primary"},on:{click:function(n){return i.qiehuanhechengfangshi(1)}}},[a("i",{staticClass:"el-icon-caret-right"})])],1):i._e(),i.tree.info[i.dangqian].yuanliao.length>1?a("div",[i._v("丨")]):i._e(),a("div",{staticClass:"yuanliao"},i._l(i.tree.info[i.dangqian].yuanliao,(function(n,u){return a("div",{key:u,staticClass:"a"},[0==u&&i.tree.info[i.dangqian].yuanliao.length>1?a("div",{staticClass:"border-box"},[a("div",{staticStyle:{width:"100%"}}),a("div",{staticStyle:{"border-top":"1px black solid",width:"100%"}})]):u==i.tree.info[i.dangqian].yuanliao.length-1&&i.tree.info[i.dangqian].yuanliao.length>1?a("div",{staticClass:"border-box"},[a("div",{staticStyle:{"border-top":"1px black solid",width:"100%"}}),a("div",{staticStyle:{width:"100%"}})]):1==i.tree.info[i.dangqian].yuanliao.length?a("div",{staticClass:"border-box"}):a("div",{staticClass:"border-box"},[a("div",{staticStyle:{"border-top":"1px black solid",width:"100%"}})]),a("div",[i._v("丨")]),a("Tree",{attrs:{tree:n.wupin,shuliang:n.shuliang,zongshuliang:n.shuliang*i.zongshuliang,dangqian:0,switchvalue:i.switchvalue}})],1)})),0)])},g=[],t=(a("a9e3"),{name:"Tree",props:{tree:Object,shuliang:Number,zongshuliang:Number,dangqian:Number,switchvalue:Object},data:function(){return{}},mounted:function(){},methods:{qiehuanhechengfangshi:function(i){var n=this.dangqian+i;n<0?this.dangqian=this.tree.info.length-1:n>=this.tree.info.length?this.dangqian=0:this.dangqian=n}}}),c=t,p=(a("8fee"),a("2877")),j=Object(p["a"])(c,o,g,!1,null,"b2cde3e4",null),w=j.exports,z={yelianshebei:"冶炼设备",zhizaotai:"制造台",keyanshebei:"科研设备",caijiqi:"采矿机",choushuizhan:"抽水设备",chouyouzhan:"抽油设备",jinglianshebei:"精炼设备",huagongshebei:"化工设备",fenliushebei:"分馏设备",liziduizhuangji:"粒子对撞机",shexianjieshouzhan:"射线接收站",weiding:"未定"},y={name:"铁矿",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1}]},r={name:"铜矿",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1}]},f={name:"石矿",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1}]},m={name:"硅石",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1,zhushi:"采集"},{yuanliao:[{wupin:f,shuliang:10}],shijian:10,leixing:z.yelianshebei,caiji:!1,shoucuo:!1,zhushi:"冶炼"}]},x={name:"光栅石",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1}]},d={name:"高纯硅块",info:[{yuanliao:[{wupin:m,shuliang:2}],shijian:2,leixing:z.yelianshebei,caiji:!1,shoucuo:!0}]},b={name:"铁块",info:[{yuanliao:[{wupin:y,shuliang:1}],shijian:1,leixing:z.yelianshebei,caiji:!1,shoucuo:!0}]},v={name:"铜块",info:[{yuanliao:[{wupin:r,shuliang:1}],shijian:1,leixing:z.yelianshebei,caiji:!1,shoucuo:!0}]},q={name:"电路板",info:[{yuanliao:[{wupin:b,shuliang:2},{wupin:v,shuliang:1}],shijian:1,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},_={name:"磁铁",info:[{yuanliao:[{wupin:y,shuliang:1}],shijian:1,leixing:z.yelianshebei,caiji:!1,shoucuo:!0}]},k={name:"磁线圈",a:0,info:[{yuanliao:[{wupin:_,shuliang:1},{wupin:v,shuliang:1}],shijian:1,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},S={name:"电磁矩阵",info:[{yuanliao:[{wupin:k,shuliang:1},{wupin:q,shuliang:1}],shijian:1,leixing:z.keyanshebei,caiji:!1,shoucuo:!0}]},C={name:"钛石",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1}]},O={name:"钛块",info:[{yuanliao:[{wupin:C,shuliang:2}],shijian:2,leixing:z.yelianshebei,caiji:!1,shoucuo:!0}]},I={name:"石材",info:[{yuanliao:[{wupin:f,shuliang:1}],shijian:1,leixing:z.yelianshebei,caiji:!1,shoucuo:!0}]},M={name:"煤矿",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1}]},D={name:"原油",info:[{yuanliao:[],shijian:0,leixing:z.chouyouzhan,caiji:!0,shoucuo:!1}]},P={name:"精炼油",info:[{yuanliao:[{wupin:D,shuliang:1}],shijian:2,leixing:z.jinglianshebei,caiji:!1,shoucuo:!1,duoyu:[{wupin:"氢",shuliang:.5}]}]},T={name:"可燃冰",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1}]},$={name:"临界光子",info:[{yuanliao:[],shijian:0,leixing:z.shexianjieshouzhan,caiji:!0,shoucuo:!1}]},W={name:"氢",info:[{yuanliao:[{wupin:D,shuliang:2}],shijian:4,leixing:z.jinglianshebei,caiji:!1,shoucuo:!1,duoyu:[{wupin:"精炼油",shuliang:2}],zhushi:"等离子精炼"},{yuanliao:[{wupin:T,shuliang:2}],shijian:2,leixing:z.jinglianshebei,caiji:!1,shoucuo:!1,duoyu:[{wupin:"石墨烯",shuliang:2}],zhushi:"分解可燃冰"},{yuanliao:[{wupin:P,shuliang:1/3},{wupin:{name:"氢",info:[{yuanliao:[],shijian:0,leixing:z.weiding,caiji:!1,shoucuo:!1}]},shuliang:2/3}],shijian:4,leixing:z.jinglianshebei,caiji:!1,shoucuo:!1,duoyu:[{wupin:"高能石墨",shuliang:1/3}],zhushi:"X射线裂解"},{yuanliao:[{wupin:$,shuliang:1}],shijian:2,leixing:z.liziduizhuangji,caiji:!1,shoucuo:!1,duoyu:[{wupin:"反物质",shuliang:1}],zhushi:"质能储存"}]},E={name:"高能石墨",info:[{yuanliao:[{wupin:M,shuliang:2}],shijian:2,leixing:z.yelianshebei,caiji:!1,shoucuo:!0,zhushi:"普通"},{yuanliao:[{wupin:P,shuliang:1},{wupin:W,shuliang:2}],shijian:4,leixing:z.jinglianshebei,caiji:!1,shoucuo:!0,duoyu:[{wupin:"氢",shuliang:3}],zhushi:"X射线裂解"}]},H={name:"塑料",info:[{yuanliao:[{wupin:P,shuliang:2},{wupin:E,shuliang:1}],shijian:3,leixing:z.huagongshebei,caiji:!1,shoucuo:!1}]},N={name:"水",info:[{yuanliao:[],shijian:0,leixing:z.choushuizhan,caiji:!0,shoucuo:!1}]},A={name:"硫酸",info:[{yuanliao:[{wupin:P,shuliang:1.5},{wupin:f,shuliang:2},{wupin:N,shuliang:1}],shijian:6,leixing:z.huagongshebei,caiji:!1,shoucuo:!1}]},J={name:"石墨烯",info:[{yuanliao:[{wupin:E,shuliang:3},{wupin:A,shuliang:1}],shijian:3,leixing:z.huagongshebei,caiji:!1,shoucuo:!1,zhushi:"普通"},{yuanliao:[{wupin:T,shuliang:1}],shijian:1,leixing:z.jinglianshebei,caiji:!1,shoucuo:!1,duoyu:[{wupin:"氢",shuliang:.5}],zhushi:"高效"}]},X={name:"分形硅石",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1}]},V={name:"晶格硅",info:[{yuanliao:[{wupin:d,shuliang:1}],shijian:2,leixing:z.yelianshebei,caiji:!1,shoucuo:!1,zhushi:"普通"},{yuanliao:[{wupin:X,shuliang:1}],shijian:4,leixing:z.zhizaotai,caiji:!1,shoucuo:!1,zhushi:"高效"}]},Y={name:"钢材",info:[{yuanliao:[{wupin:b,shuliang:3}],shijian:3,leixing:z.yelianshebei,caiji:!1,shoucuo:!1}]},B={name:"钛合金",info:[{yuanliao:[{wupin:O,shuliang:1},{wupin:Y,shuliang:1},{wupin:A,shuliang:2}],shijian:3,leixing:z.yelianshebei,caiji:!1,shoucuo:!1}]},F={name:"玻璃",info:[{yuanliao:[{wupin:f,shuliang:2}],shijian:2,leixing:z.yelianshebei,caiji:!1,shoucuo:!0}]},G={name:"金伯利矿石",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1}]},K={name:"金刚石",info:[{yuanliao:[{wupin:E,shuliang:1}],shijian:2,leixing:z.yelianshebei,caiji:!1,shoucuo:!1,zhushi:"普通"},{yuanliao:[{wupin:G,shuliang:1}],shijian:2,leixing:z.yelianshebei,caiji:!1,shoucuo:!1,zhushi:"高效"}]},L={name:"木材",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1}]},Q={name:"植物燃料",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1}]},R={name:"有机晶体",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1,zhushi:"采集"},{yuanliao:[{wupin:H,shuliang:2},{wupin:P,shuliang:1},{wupin:N,shuliang:1}],shijian:6,leixing:z.huagongshebei,caiji:!1,shoucuo:!1,zhushi:"普通"},{yuanliao:[{wupin:L,shuliang:20},{wupin:Q,shuliang:30},{wupin:N,shuliang:10}],shijian:6,leixing:z.zhizaotai,caiji:!1,shoucuo:!1,zhushi:"原始"}]},U={name:"液氢燃料棒",info:[{yuanliao:[{wupin:O,shuliang:1},{wupin:W,shuliang:5}],shijian:3,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},Z={name:"齿轮",info:[{yuanliao:[{wupin:b,shuliang:1}],shijian:1,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},ii={name:"电动机",info:[{yuanliao:[{wupin:b,shuliang:2},{wupin:Z,shuliang:1},{wupin:k,shuliang:1}],shijian:2,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},ni={name:"钛化玻璃",info:[{yuanliao:[{wupin:F,shuliang:1},{wupin:O,shuliang:1},{wupin:N,shuliang:1}],shijian:5,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},ai={name:"棱镜",info:[{yuanliao:[{wupin:F,shuliang:1.5}],shijian:1,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},ui={name:"钛晶石",info:[{yuanliao:[{wupin:R,shuliang:1},{wupin:O,shuliang:3}],shijian:4,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},hi={name:"推进器",info:[{yuanliao:[{wupin:Y,shuliang:2},{wupin:v,shuliang:3}],shijian:4,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},si={name:"电磁涡轮",info:[{yuanliao:[{wupin:ii,shuliang:2},{wupin:k,shuliang:2}],shijian:2,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},li={name:"加力推进器",info:[{yuanliao:[{wupin:B,shuliang:5},{wupin:si,shuliang:5}],shijian:6,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},ei={name:"重氢",info:[{yuanliao:[{wupin:W,shuliang:2}],shijian:1,leixing:z.liziduizhuangji,caiji:!1,shoucuo:!1,zhushi:"普通"},{yuanliao:[{wupin:W,shuliang:100}],shijian:1,leixing:z.fenliushebei,caiji:!1,shoucuo:!1,zhushi:"重氢分馏",duoyu:[{wupin:"氢",shuliang:99}]}]},oi={name:"电浆激发器",info:[{yuanliao:[{wupin:k,shuliang:4},{wupin:ai,shuliang:2}],shijian:2,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},gi={name:"超级磁场环",info:[{yuanliao:[{wupin:si,shuliang:2},{wupin:_,shuliang:3},{wupin:E,shuliang:1}],shijian:3,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},ti={name:"刺笋结晶",info:[{yuanliao:[],shijian:0,leixing:z.weiding,caiji:!0,shoucuo:!1}]},ci={name:"碳纳米管",info:[{yuanliao:[{wupin:J,shuliang:1.5},{wupin:O,shuliang:.5}],shijian:2,leixing:z.huagongshebei,caiji:!1,shoucuo:!1,zhushi:"普通"},{yuanliao:[{wupin:ti,shuliang:1}],shijian:2,leixing:z.huagongshebei,caiji:!1,shoucuo:!1,zhushi:"高效"}]},pi={name:"粒子宽带",info:[{yuanliao:[{wupin:ci,shuliang:2},{wupin:V,shuliang:2},{wupin:H,shuliang:1}],shijian:8,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},ji={name:"卡西米尔晶体",info:[{yuanliao:[{wupin:ui,shuliang:1},{wupin:J,shuliang:2},{wupin:W,shuliang:12}],shijian:4,leixing:z.zhizaotai,caiji:!1,shoucuo:!0,zhushi:"普通"},{yuanliao:[{wupin:x,shuliang:6},{wupin:J,shuliang:2},{wupin:W,shuliang:12}],shijian:4,leixing:z.zhizaotai,caiji:!1,shoucuo:!1,zhushi:"高效"}]},wi={name:"单极磁石",info:[{yuanliao:[],shijian:0,leixing:z.caijiqi,caiji:!0,shoucuo:!1}]},zi={name:"粒子容器",info:[{yuanliao:[{wupin:si,shuliang:2},{wupin:v,shuliang:2},{wupin:J,shuliang:2}],shijian:4,leixing:z.zhizaotai,caiji:!1,shoucuo:!0,zhushi:"普通"},{yuanliao:[{wupin:wi,shuliang:6},{wupin:v,shuliang:2}],shijian:4,leixing:z.zhizaotai,caiji:!1,shoucuo:!1,zhushi:"高效"}]},yi={name:"框架材料",info:[{yuanliao:[{wupin:ci,shuliang:4},{wupin:B,shuliang:1},{wupin:d,shuliang:1}],shijian:6,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},ri={name:"微晶元件",info:[{yuanliao:[{wupin:d,shuliang:2},{wupin:v,shuliang:1}],shijian:2,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},fi={name:"处理器",info:[{yuanliao:[{wupin:q,shuliang:2},{wupin:ri,shuliang:2}],shijian:3,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},mi={name:"物流运输机",info:[{yuanliao:[{wupin:b,shuliang:5},{wupin:fi,shuliang:2},{wupin:hi,shuliang:2}],shijian:4,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},xi={name:"星际物流运输船",info:[{yuanliao:[{wupin:B,shuliang:10},{wupin:fi,shuliang:10},{wupin:li,shuliang:2}],shijian:6,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},di={name:"光子合并器",info:[{yuanliao:[{wupin:ai,shuliang:2},{wupin:q,shuliang:1}],shijian:3,leixing:z.zhizaotai,caiji:!1,shoucuo:!0,zhushi:"普通"},{yuanliao:[{wupin:x,shuliang:1},{wupin:q,shuliang:1}],shijian:3,leixing:z.zhizaotai,caiji:!1,shoucuo:!1,zhushi:"高效"}]},bi={name:"位面过滤器",info:[{yuanliao:[{wupin:ji,shuliang:1},{wupin:ni,shuliang:2}],shijian:12,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},vi={name:"氚核燃料棒",info:[{yuanliao:[{wupin:B,shuliang:1},{wupin:ei,shuliang:10},{wupin:gi,shuliang:1}],shijian:6,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},qi={name:"奇异物质",info:[{yuanliao:[{wupin:zi,shuliang:2},{wupin:b,shuliang:2},{wupin:ei,shuliang:10}],shijian:8,leixing:z.liziduizhuangji,caiji:!1,shoucuo:!1}]},_i={name:"引力透镜",info:[{yuanliao:[{wupin:K,shuliang:4},{wupin:qi,shuliang:1}],shijian:6,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},ki={name:"太阳帆",info:[{yuanliao:[{wupin:J,shuliang:.5},{wupin:di,shuliang:.5}],shijian:2,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},Si={name:"湮灭约束球",info:[{yuanliao:[{wupin:zi,shuliang:1},{wupin:fi,shuliang:1}],shijian:20,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},Ci={name:"量子芯片",info:[{yuanliao:[{wupin:fi,shuliang:2},{wupin:bi,shuliang:2}],shijian:6,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},Oi={name:"反物质",info:[{yuanliao:[{wupin:$,shuliang:1}],shijian:1,leixing:z.liziduizhuangji,caiji:!1,shoucuo:!1,duoyu:[{wupin:"氢",shuliang:1}]}]},Ii={name:"反物质燃料棒",info:[{yuanliao:[{wupin:Oi,shuliang:10},{wupin:W,shuliang:10},{wupin:Si,shuliang:1},{wupin:B,shuliang:1}],shijian:12,leixing:z.zhizaotai,caiji:!1,shoucuo:!1}]},Mi={name:"戴森球组件",info:[{yuanliao:[{wupin:yi,shuliang:3},{wupin:ki,shuliang:3},{wupin:fi,shuliang:3}],shijian:8,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},Di={name:"小型运载火箭",info:[{yuanliao:[{wupin:yi,shuliang:3},{wupin:ki,shuliang:3},{wupin:fi,shuliang:3}],shijian:8,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},Pi={name:"能量矩阵",info:[{yuanliao:[{wupin:E,shuliang:2},{wupin:W,shuliang:2}],shijian:6,leixing:z.keyanshebei,caiji:!1,shoucuo:!0}]},Ti={name:"结构矩阵",info:[{yuanliao:[{wupin:K,shuliang:1},{wupin:ui,shuliang:1}],shijian:8,leixing:z.keyanshebei,caiji:!1,shoucuo:!0}]},$i={name:"信息矩阵",info:[{yuanliao:[{wupin:fi,shuliang:2},{wupin:pi,shuliang:1}],shijian:10,leixing:z.keyanshebei,caiji:!1,shoucuo:!0}]},Wi={name:"引力矩阵",info:[{yuanliao:[{wupin:_i,shuliang:.5},{wupin:Ci,shuliang:.5}],shijian:12,leixing:z.keyanshebei,caiji:!1,shoucuo:!0}]},Ei={name:"宇宙矩阵",info:[{yuanliao:[{wupin:S,shuliang:1},{wupin:Pi,shuliang:1},{wupin:Ti,shuliang:1},{wupin:$i,shuliang:1},{wupin:Wi,shuliang:1},{wupin:Oi,shuliang:1}],shijian:15,leixing:z.keyanshebei,caiji:!1,shoucuo:!1}]},Hi={name:"地基",info:[{yuanliao:[{wupin:I,shuliang:3},{wupin:Y,shuliang:1}],shijian:1,leixing:z.zhizaotai,caiji:!1,shoucuo:!0}]},Ni={name:"空间翘曲器",info:[{yuanliao:[{wupin:_i,shuliang:1}],shijian:10,leixing:z.zhizaotai,caiji:!1,shoucuo:!0,zhushi:"普通"},{yuanliao:[{wupin:Wi,shuliang:.125}],shijian:1.25,leixing:z.zhizaotai,caiji:!1,shoucuo:!0,zhushi:"高效"}]},Ai={boli:F,citie:_,cixianquan:k,chilun:Z,chaojicichanghuan:gi,chuliqi:fi,dianluban:q,daoheranliaobang:vi,diandongji:ii,dianciwolun:si,dianjiangfasheqi:oi,daisenqiuzujian:Mi,diji:Hi,diancijuzhen:S,fanwuzhi:Oi,fanwuzhiranliaobang:Ii,guishi:m,gaochunguikuai:d,gaonengshimo:E,gangcai:Y,guangzihebingqi:di,jinglianyou:P,jinggegui:V,jingangshi:K,jialituijinqi:li,jiegoujuzhen:Ti,kaximierjingti:ji,kuangjiacailiao:yi,kongjianqiaoquqi:Ni,lengjing:ai,liusuan:A,lizikuandai:pi,lizirongqi:zi,liangzixinpian:Ci,nengliangjuzhen:Pi,qing:W,qiyiwuzhi:qi,shicai:I,suliao:H,shimoxi:J,tiekuai:b,tongkuai:v,taikuai:O,taihejin:B,taihuaboli:ni,taijingshi:ui,tuijinqi:hi,tannamiguan:ci,taiyangfan:ki,weimianguolvqi:bi,wuliuyunshuji:mi,weijingyuanjian:ri,xingjiwuliuyunshuchuan:xi,xiaoxingyunzaihuojian:Di,xinxijuzhen:$i,youjijingti:R,yeqingranliaobang:U,yinlitoujing:_i,yanmieyueshuqiu:Si,yinlijuzhen:Wi,yuzhoujuzhen:Ei,zhongqing:ei},Ji={yelianshebei:"冶炼设备",zhizaotai:"制造台",keyanshebei:"科研设备",caijiqi:"采矿机",choushuizhan:"抽水设备",chouyouzhan:"抽油设备",jinglianshebei:"精炼设备",huagongshebei:"化工设备",fenliushebei:"分馏设备",liziduizhuangji:"粒子对撞机",shexianjieshouzhan:"射线接收站",weiding:"未定"},Xi={jianzhu:!0,name:"电力感应塔",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:2},{wupin:Ai.cixianquan,shuliang:1}],shijian:1,leixing:Ji.zhizaotai}]},Vi={jianzhu:!0,name:"无线输电塔",info:[{yuanliao:[{wupin:Xi,shuliang:1},{wupin:Ai.dianjiangfasheqi,shuliang:1}],shijian:1,leixing:Ji.zhizaotai}]},Yi={jianzhu:!0,name:"微型配电站",info:[{yuanliao:[{wupin:Vi,shuliang:1},{wupin:Ai.chaojicichanghuan,shuliang:10},{wupin:Ai.kuangjiacailiao,shuliang:2}],shijian:5,leixing:Ji.zhizaotai}]},Bi={jianzhu:!0,name:"风力涡轮机",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:6},{wupin:Ai.chilun,shuliang:1},{wupin:Ai.cixianquan,shuliang:3}],shijian:4,leixing:Ji.zhizaotai}]},Fi={jianzhu:!0,name:"火力发电厂",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:10},{wupin:Ai.shicai,shuliang:4},{wupin:Ai.chilun,shuliang:4},{wupin:Ai.cixianquan,shuliang:4}],shijian:5,leixing:Ji.zhizaotai}]},Gi={jianzhu:!0,name:"太阳能板",info:[{yuanliao:[{wupin:Ai.tongkuai,shuliang:6},{wupin:Ai.gaochunguikuai,shuliang:6},{wupin:Ai.dianluban,shuliang:4}],shijian:5,leixing:Ji.zhizaotai}]},Ki={jianzhu:!0,name:"蓄电器",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:6},{wupin:Ai.chaojicichanghuan,shuliang:6},{wupin:Ai.jinggegui,shuliang:4}],shijian:5,leixing:Ji.zhizaotai}]},Li={jianzhu:!0,name:"射线接收站",info:[{yuanliao:[{wupin:Ai.gangcai,shuliang:20},{wupin:Ai.gaochunguikuai,shuliang:20},{wupin:Ai.guangzihebingqi,shuliang:10},{wupin:Ai.chuliqi,shuliang:5},{wupin:Ai.chaojicichanghuan,shuliang:20}],shijian:8,leixing:Ji.zhizaotai}]},Qi={jianzhu:!0,name:"微型聚变发电站",info:[{yuanliao:[{wupin:Ai.taihejin,shuliang:12},{wupin:Ai.chaojicichanghuan,shuliang:10},{wupin:Ai.tannamiguan,shuliang:8},{wupin:Ai.chuliqi,shuliang:4}],shijian:10,leixing:Ji.zhizaotai}]},Ri={jianzhu:!0,name:"能量枢纽",info:[{yuanliao:[{wupin:Ai.taihejin,shuliang:40},{wupin:Ai.gangcai,shuliang:40},{wupin:Ai.chuliqi,shuliang:40},{wupin:Ai.lizirongqi,shuliang:8}],shijian:15,leixing:Ji.zhizaotai}]},Ui={jianzhu:!0,name:"人造恒星",info:[{yuanliao:[{wupin:Ai.taihejin,shuliang:20},{wupin:Ai.kuangjiacailiao,shuliang:20},{wupin:Ai.yanmieyueshuqiu,shuliang:10},{wupin:Ai.liangzixinpian,shuliang:10}],shijian:30,leixing:Ji.zhizaotai}]},Zi={jianzhu:!0,name:"传送带",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:2/3},{wupin:Ai.chilun,shuliang:1/3}],shijian:1/3,leixing:Ji.zhizaotai}]},nn={jianzhu:!0,name:"传送带（高速）",info:[{yuanliao:[{wupin:Zi,shuliang:1},{wupin:Ai.dianciwolun,shuliang:1/3}],shijian:1/3,leixing:Ji.zhizaotai}]},an={jianzhu:!0,name:"传送带（极速）",info:[{yuanliao:[{wupin:nn,shuliang:1},{wupin:Ai.chaojicichanghuan,shuliang:1/3},{wupin:Ai.shimoxi,shuliang:1/3}],shijian:1/3,leixing:Ji.zhizaotai}]},un={jianzhu:!0,name:"四向分流器",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:3},{wupin:Ai.chilun,shuliang:2},{wupin:Ai.dianluban,shuliang:1}],shijian:2,leixing:Ji.zhizaotai}]},hn={jianzhu:!0,name:"小型储物仓",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:4},{wupin:Ai.shicai,shuliang:4}],shijian:2,leixing:Ji.zhizaotai}]},sn={jianzhu:!0,name:"大型储物仓",info:[{yuanliao:[{wupin:Ai.gangcai,shuliang:8},{wupin:Ai.shicai,shuliang:8}],shijian:4,leixing:Ji.zhizaotai}]},ln={jianzhu:!0,name:"储液罐",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:8},{wupin:Ai.shicai,shuliang:4},{wupin:Ai.boli,shuliang:4}],shijian:2,leixing:Ji.zhizaotai}]},en={jianzhu:!0,name:"电磁轨道弹射器",info:[{yuanliao:[{wupin:Ai.gangcai,shuliang:20},{wupin:Ai.chilun,shuliang:20},{wupin:Ai.chuliqi,shuliang:5},{wupin:Ai.chaojicichanghuan,shuliang:10}],shijian:6,leixing:Ji.zhizaotai}]},on={jianzhu:!0,name:"行星内物流运输站",info:[{yuanliao:[{wupin:Ai.gangcai,shuliang:40},{wupin:Ai.taikuai,shuliang:40},{wupin:Ai.chuliqi,shuliang:40},{wupin:Ai.lizirongqi,shuliang:20}],shijian:20,leixing:Ji.zhizaotai}]},gn={jianzhu:!0,name:"微型粒子对撞机",info:[{yuanliao:[{wupin:Ai.taihejin,shuliang:20},{wupin:Ai.kuangjiacailiao,shuliang:20},{wupin:Ai.chaojicichanghuan,shuliang:50},{wupin:Ai.shimoxi,shuliang:10},{wupin:Ai.chuliqi,shuliang:8}],shijian:15,leixing:Ji.zhizaotai}]},tn={jianzhu:!0,name:"分拣器",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:1},{wupin:Ai.dianluban,shuliang:1}],shijian:1,leixing:Ji.zhizaotai}]},cn={jianzhu:!0,name:"分拣器（高速）",info:[{yuanliao:[{wupin:tn,shuliang:1},{wupin:Ai.diandongji,shuliang:.5}],shijian:.5,leixing:Ji.zhizaotai}]},pn={jianzhu:!0,name:"分拣器（极速）",info:[{yuanliao:[{wupin:cn,shuliang:1},{wupin:Ai.dianciwolun,shuliang:.5}],shijian:.5,leixing:Ji.zhizaotai}]},jn={jianzhu:!0,name:"采矿机",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:4},{wupin:Ai.dianluban,shuliang:2},{wupin:Ai.cixianquan,shuliang:2},{wupin:Ai.chilun,shuliang:2}],shijian:3,leixing:Ji.zhizaotai}]},wn={jianzhu:!0,name:"抽水站",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:8},{wupin:Ai.shicai,shuliang:4},{wupin:Ai.diandongji,shuliang:4},{wupin:Ai.dianluban,shuliang:2}],shijian:4,leixing:Ji.zhizaotai}]},zn={jianzhu:!0,name:"原油萃取站",info:[{yuanliao:[{wupin:Ai.gangcai,shuliang:12},{wupin:Ai.shicai,shuliang:12},{wupin:Ai.dianluban,shuliang:6},{wupin:Ai.dianjiangfasheqi,shuliang:4}],shijian:8,leixing:Ji.zhizaotai}]},yn={jianzhu:!0,name:"原油精炼厂",info:[{yuanliao:[{wupin:Ai.gangcai,shuliang:10},{wupin:Ai.shicai,shuliang:10},{wupin:Ai.dianluban,shuliang:6},{wupin:Ai.dianjiangfasheqi,shuliang:6}],shijian:6,leixing:Ji.zhizaotai}]},rn={jianzhu:!0,name:"垂直发射井",info:[{yuanliao:[{wupin:Ai.taihejin,shuliang:80},{wupin:Ai.kuangjiacailiao,shuliang:30},{wupin:Ai.yinlitoujing,shuliang:20},{wupin:Ai.liangzixinpian,shuliang:10}],shijian:30,leixing:Ji.zhizaotai}]},fn={jianzhu:!0,name:"星际物流运输站",info:[{yuanliao:[{wupin:on,shuliang:1},{wupin:Ai.taihejin,shuliang:40},{wupin:Ai.lizirongqi,shuliang:20}],shijian:30,leixing:Ji.zhizaotai}]},mn={jianzhu:!0,name:"制造台Mk.I",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:4},{wupin:Ai.chilun,shuliang:8},{wupin:Ai.dianluban,shuliang:4}],shijian:2,leixing:Ji.zhizaotai}]},xn={jianzhu:!0,name:"制造台Mk.II",info:[{yuanliao:[{wupin:mn,shuliang:1},{wupin:Ai.shimoxi,shuliang:8},{wupin:Ai.chuliqi,shuliang:4}],shijian:3,leixing:Ji.zhizaotai}]},dn={jianzhu:!0,name:"制造台Mk.III",info:[{yuanliao:[{wupin:xn,shuliang:1},{wupin:Ai.lizikuandai,shuliang:8},{wupin:Ai.liangzixinpian,shuliang:2}],shijian:4,leixing:Ji.zhizaotai}]},bn={jianzhu:!0,name:"电弧熔炉",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:4},{wupin:Ai.shicai,shuliang:2},{wupin:Ai.dianluban,shuliang:4},{wupin:Ai.cixianquan,shuliang:2}],shijian:3,leixing:Ji.zhizaotai}]},vn={jianzhu:!0,name:"分馏塔",info:[{yuanliao:[{wupin:Ai.gangcai,shuliang:8},{wupin:Ai.shicai,shuliang:4},{wupin:Ai.boli,shuliang:4},{wupin:Ai.chuliqi,shuliang:1}],shijian:3,leixing:Ji.zhizaotai}]},qn={jianzhu:!0,name:"化工厂",info:[{yuanliao:[{wupin:Ai.gangcai,shuliang:8},{wupin:Ai.shicai,shuliang:8},{wupin:Ai.boli,shuliang:8},{wupin:Ai.dianluban,shuliang:2}],shijian:5,leixing:Ji.zhizaotai}]},_n={jianzhu:!0,name:"矩阵研究站",info:[{yuanliao:[{wupin:Ai.tiekuai,shuliang:8},{wupin:Ai.boli,shuliang:4},{wupin:Ai.dianluban,shuliang:4},{wupin:Ai.cixianquan,shuliang:4}],shijian:3,leixing:Ji.zhizaotai}]},kn={jianzhu:!0,name:"轨道采集器",info:[{yuanliao:[{wupin:fn,shuliang:1},{wupin:Ai.chaojicichanghuan,shuliang:50},{wupin:Ai.jialituijinqi,shuliang:20},{wupin:Ki,shuliang:20}],shijian:30,leixing:Ji.zhizaotai}]},Sn={dianliganyingta:Xi,wuxianshudianta:Vi,weixingpeidianzhan:Yi,fengliwolunji:Bi,huolifadianchang:Fi,taiyangnengban:Gi,xudianqi:Ki,shexianjieshouzhan:Li,weixingjubianfadianzhan:Qi,nengliangshuniu:Ri,renzaohengxing:Ui,chuansongdai:Zi,gaosuchuansongdai:nn,jisuchuansongdai:an,sixiangfenliuqi:un,xiaoxingchuwucang:hn,daxingchuwucang:sn,chuyeguan:ln,dianciguidaotansheqi:en,xingxingneiwuliuyunshuzhan:on,weixingliziduizhuangji:gn,fenjianqi:tn,gaosufenjianqi:cn,jisufenjianqi:pn,caikuangji:jn,choushuizhan:wn,yuanyoucuiquzhan:zn,yuanyoujinglianchang:yn,chuizhifashejing:rn,xingjiwuliuyunshuzhan:fn,zhizaotaimk1:mn,zhizaotaimk2:xn,zhizaotaimk3:dn,dianhuronglu:bn,fenliuta:vn,huagongchang:qn,juzhenyanjiuzhan:_n,guidaocaijiqi:kn},Cn={name:"HelloWorld",components:{Tree:w},data:function(){return{list:[{shouzimu:"A",wupin:[]},{shouzimu:"B",wupin:["玻璃"]},{shouzimu:"C",wupin:["磁铁","磁线圈","齿轮","超级磁场环","处理器"]},{shouzimu:"D",wupin:["电路板","氘核燃料棒","电动机","电磁涡轮","电浆激发器","戴森球组件","地基","电磁矩阵"]},{shouzimu:"E",wupin:[]},{shouzimu:"F",wupin:["反物质","反物质燃料棒"]},{shouzimu:"G",wupin:["硅石","高纯硅块","高能石墨","钢材","光子合并器"]},{shouzimu:"H",wupin:[]},{shouzimu:"I",wupin:[]},{shouzimu:"J",wupin:["精炼油","晶格硅","金刚石","加力推进器","结构矩阵"]},{shouzimu:"K",wupin:["卡西米尔晶体","框架材料","空间翘曲器"]},{shouzimu:"L",wupin:["棱镜","硫酸","粒子宽带","粒子容器","量子芯片"]},{shouzimu:"M",wupin:[]},{shouzimu:"N",wupin:["能量矩阵"]},{shouzimu:"O",wupin:[]},{shouzimu:"P",wupin:[]},{shouzimu:"Q",wupin:["氢","奇异物质"]},{shouzimu:"R",wupin:[]},{shouzimu:"S",wupin:["石材","塑料","石墨烯"]},{shouzimu:"T",wupin:["铁块","铜块","钛块","钛合金","钛化玻璃","钛晶石","推进器","碳纳米管","太阳帆"]},{shouzimu:"U",wupin:[]},{shouzimu:"V",wupin:[]},{shouzimu:"W",wupin:["位面过滤器","物流运输机","微晶原件"]},{shouzimu:"X",wupin:["星际物流运输船","小型运载火箭","信息矩阵"]},{shouzimu:"Y",wupin:["有机晶体","液氢燃料棒","引力透镜","湮灭约束球","引力矩阵","宇宙矩阵"]},{shouzimu:"Z",wupin:["重氢"]},{shouzimu:"矩阵",wupin:["电磁矩阵","能量矩阵","结构矩阵","信息矩阵","引力矩阵","宇宙矩阵"]}],listDetail:[[],[Ai.boli],[Ai.citie,Ai.cixianquan,Ai.chilun,Ai.chaojicichanghuan,Ai.chuliqi],[Ai.dianluban,Ai.daoheranliaobang,Ai.diandongji,Ai.dianciwolun,Ai.dianjiangfasheqi,Ai.daisenqiuzujian,Ai.diji,Ai.diancijuzhen],[],[Ai.fanwuzhi,Ai.fanwuzhiranliaobang],[Ai.guishi,Ai.gaochunguikuai,Ai.gaonengshimo,Ai.gangcai,Ai.guangzihebingqi],[],[],[Ai.jinglianyou,Ai.jinggegui,Ai.jingangshi,Ai.jialituijinqi,Ai.jiegoujuzhen],[Ai.kaximierjingti,Ai.kuangjiacailiao,Ai.kongjianqiaoquqi],[Ai.lengjing,Ai.liusuan,Ai.lizikuandai,Ai.lizirongqi,Ai.liangzixinpian],[],[Ai.nengliangjuzhen],[],[],[Ai.qing,Ai.qiyiwuzhi],[],[Ai.shicai,Ai.suliao,Ai.shimoxi],[Ai.tiekuai,Ai.tongkuai,Ai.taikuai,Ai.taihejin,Ai.taihuaboli,Ai.taijingshi,Ai.tuijinqi,Ai.tannamiguan,Ai.taiyangfan],[],[],[Ai.weimianguolvqi,Ai.wuliuyunshuji,Ai.weijingyuanjian],[Ai.xingjiwuliuyunshuchuan,Ai.xiaoxingyunzaihuojian,Ai.xinxijuzhen],[Ai.youjijingti,Ai.yeqingranliaobang,Ai.yinlitoujing,Ai.yanmieyueshuqiu,Ai.yinlijuzhen,Ai.yuzhoujuzhen],[Ai.zhongqing],[Ai.diancijuzhen,Ai.nengliangjuzhen,Ai.jiegoujuzhen,Ai.xinxijuzhen,Ai.yinlijuzhen,Ai.yuzhoujuzhen]],jianzhu_list:[{shouzimu:"A",wupin:[]},{shouzimu:"B",wupin:[]},{shouzimu:"C",wupin:["传送带","传送带（高速）","传送带（极速）","储液罐","采矿机","抽水站","垂直发射井"]},{shouzimu:"D",wupin:["电力感应塔","大型储物仓","电磁轨道弹射器","电弧熔炉"]},{shouzimu:"E",wupin:[]},{shouzimu:"F",wupin:["风力涡轮机","分拣器","分拣器（高速）","分拣器（极速）","分馏塔"]},{shouzimu:"G",wupin:["轨道采集器"]},{shouzimu:"H",wupin:["火力发电厂","化工厂"]},{shouzimu:"I",wupin:[]},{shouzimu:"J",wupin:["矩阵研究站"]},{shouzimu:"K",wupin:[]},{shouzimu:"L",wupin:[]},{shouzimu:"M",wupin:[]},{shouzimu:"N",wupin:["能量枢纽"]},{shouzimu:"O",wupin:[]},{shouzimu:"P",wupin:[]},{shouzimu:"Q",wupin:[]},{shouzimu:"R",wupin:["人造恒星"]},{shouzimu:"S",wupin:["射线接收站","四向分流器"]},{shouzimu:"T",wupin:["太阳能板"]},{shouzimu:"U",wupin:[]},{shouzimu:"V",wupin:[]},{shouzimu:"W",wupin:["无线输电塔","微型配电站","微型聚变发电站","微型粒子对撞机"]},{shouzimu:"X",wupin:["蓄电器","小型储物仓","行星内物流运输站","星际物流运输站"]},{shouzimu:"Y",wupin:["原油萃取站","原油精炼厂"]},{shouzimu:"Z",wupin:["制造台Mk.I","制造台Mk.II","制造台Mk.III"]}],jianzhu_listDetail:[[],[],[Sn.chuansongdai,Sn.gaosuchuansongdai,Sn.jisuchuansongdai,Sn.chuyeguan,Sn.caikuangji,Sn.choushuizhan,Sn.chuizhifashejing],[Sn.dianliganyingta,Sn.daxingchuwucang,Sn.dianciguidaotansheqi,Sn.dianhuronglu],[],[Sn.fengliwolunji,Sn.fenjianqi,Sn.gaosufenjianqi,Sn.jisufenjianqi,Sn.fenliuta],[Sn.guidaocaijiqi],[Sn.huolifadianchang,Sn.huagongchang],[],[Sn.juzhenyanjiuzhan],[],[],[],[Sn.nengliangshuniu],[],[],[],[Sn.renzaohengxing],[Sn.shexianjieshouzhan,Sn.sixiangfenliuqi],[Sn.taiyangnengban],[],[],[Sn.wuxianshudianta,Sn.weixingpeidianzhan,Sn.weixingjubianfadianzhan,Sn.weixingliziduizhuangji],[Sn.xudianqi,Sn.xiaoxingchuwucang,Sn.xingxingneiwuliuyunshuzhan,Sn.xingjiwuliuyunshuzhan],[Sn.yuanyoucuiquzhan,Sn.yuanyoujinglianchang],[Sn.zhizaotaimk1,Sn.zhizaotaimk2,Sn.zhizaotaimk3]],tree:Ai.boli,dangqian:0,switchvalue:{shuliang:!0,shebei:!0,duoyu:!0},zongshuliang:1}},mounted:function(){},methods:{getData:function(i,n){this.tree=this.listDetail[i][n],this.dangqian=0},getjianzhuData:function(i,n){this.tree=this.jianzhu_listDetail[i][n],this.dangqian=0}}},On=Cn,In=(a("f8c9"),Object(p["a"])(On,l,e,!1,null,"d57a923a",null)),Mn=In.exports,Dn={name:"App",components:{HelloWorld:Mn}},Pn=Dn,Tn=(a("034f"),Object(p["a"])(Pn,h,s,!1,null,null,null)),$n=Tn.exports,Wn=a("5c96"),En=a.n(Wn);a("0fae");u["default"].use(En.a),u["default"].config.productionTip=!1,new u["default"]({render:function(i){return i($n)}}).$mount("#app")},"85ec":function(i,n,a){},"8fee":function(i,n,a){"use strict";a("9c15")},"9c15":function(i,n,a){},f8c9:function(i,n,a){"use strict";a("03cd")}});
//# sourceMappingURL=app.5f12de7b.js.map