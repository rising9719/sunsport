(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{192:function(t,e,o){t.exports=o.p+"img/29258aa.png"},193:function(t,e,o){t.exports=o.p+"img/97b5a5c.png"},194:function(t,e,o){t.exports=o.p+"img/13e1150.jpg"},195:function(t,e,o){t.exports=o.p+"img/636f431.jpg"},196:function(t,e,o){t.exports=o.p+"img/0376984.jpg"},197:function(t,e,o){t.exports=o.p+"img/5899607.gif"},198:function(t,e,o){t.exports=o.p+"img/6e0fcfd.jpg"},199:function(t,e,o){t.exports=o.p+"img/98aa60f.jpg"},200:function(t,e,o){t.exports=o.p+"img/b1dd4c4.jpg"},201:function(t,e,o){t.exports=o.p+"img/e859e44.jpg"},202:function(t,e,o){t.exports=o.p+"img/1b3949f.jpg"},203:function(t,e,o){"use strict";o.r(e);var r=o(192),n=o.n(r),th=o(193),c=o.n(th),l=o(194),m=o.n(l),d=o(195),j=o.n(d),_=o(196),v=o.n(_),f=o(197),w=o.n(f),h=o(198),y=o.n(h),k=o(199),C=o.n(k),x=o(200),H=o.n(x),O=o(201),W=o.n(O),P=o(202),T=o.n(P),E="DigiSalad Ltd.",L="Innopage Ltd.",S={HW:{name:"Hanson Wu",icon:n.a},TH:{name:"Tani Huang",icon:c.a}},A="front-end",J="back-end",I="cms",R="web-template",$="Next.js\\React",B="Nuxt.js\\Vue",M="Vue",N="AngularJs",F="jQuery",U="AdonisJs",D="Laravel",Y="App",V="Blog",X="Company Homepage",G="Corporate Website",K="PSD to HTML",Q="Real-estate Website",Z="Room Booking System",z=[{name:"美聯集團 - 人才招聘",category:G,date:"JUL 2019",workers:[S.HW],contributions:[{area:A,tool:$}],url:"https://www.midland.com.hk/joinus/",image:T.a},{name:"Champion REIT | 冠君產業信託",category:G,vendor:E,date:"JUN 2019",workers:[S.HW,S.TH],contributions:[{area:A,tool:B},{area:J,tool:D},{area:I}],url:"https://www.championreit.com/",image:v.a},{name:"ONTOLO 朗濤",category:Q,vendor:E,date:"APR 2019",workers:[S.HW,S.TH],contributions:[{area:A,tool:B},{area:J,tool:D},{area:I}],url:"https://www.ontolo.com.hk/",image:j.a},{name:"Wynn MRBS | 市場營銷訂房系統",category:Z,vendor:E,date:"JAN 2019",workers:[S.HW,S.TH],contributions:[{area:A,tool:M}],url:"https://digisalad.cool/work/wynn",image:C.a},{name:"美联物业(深圳) - 香港好房网",category:G,vendor:L,date:"SEP 2018",workers:[S.HW],contributions:[{area:A,tool:$}],url:"http://www2.1200.com.cn/hk/"},{name:"Innopage",category:X,vendor:L,date:"AUG 2018",workers:[S.HW],contributions:[{area:A,tool:F},{area:J,tool:U}],url:"https://www.innopage.com",image:y.a},{name:"Toudays",category:Y,vendor:L,date:"JUL 2018",workers:[S.HW],contributions:[{area:J,tool:U},{area:I}],url:"https://www.toudays.com/",image:H.a},{name:"美聯物業 - 專業代理",category:V,vendor:L,date:"MAY 2018",workers:[S.HW],contributions:[{area:A,tool:$}],url:"https://www.midland.com.hk/agents",image:W.a},{name:"HKairport Shop | 香港國際機場網上商店",category:K,vendor:L,date:"DEC 2017",workers:[S.HW],contributions:[{area:R}],url:"https://www.hkairportshop.com/",image:w.a},{name:"my903.com 商業電台 - 903格",category:V,vendor:L,date:"OCT 2017",workers:[S.HW],contributions:[{area:A,tool:N}],url:"https://www.my903.com/903openbox",image:m.a}],tt=o(130),et={name:"ProjectPreview",props:{project:{type:Object,default:function(){}}},mounted:function(){this.initTiltFx()},methods:{initTiltFx:function(){document.querySelectorAll(".project__image").forEach((function(t){new TiltFx(t,{extraImgs:2,opacity:.6,bgfixed:!0,movement:{perspective:1500,translateX:10,translateY:10,translateZ:2,rotateX:3,rotateY:3}})}))}}},ot=o(10),at=Object(ot.a)(et,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project__preview"},[o("div",{staticClass:"project__preview--placeholder"},[t.project.image&&!t.project.video?[o("img",{staticClass:"project__image",attrs:{id:"project__image",src:t.project.image,alt:t.project.name}})]:t._e()],2),t._v(" "),o("div",{staticClass:"project__preview--hover"},[o("div",{staticClass:"project__description"},[o("h3",{staticClass:"project__category"},[t._v("\n        "+t._s(t.project.category)+"\n      ")])])])])}),[],!1,null,null,null).exports,nt={name:"ProjectInfo",props:{project:{type:Object,default:function(){}}}},st=Object(ot.a)(nt,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project__info"},[o("h2",{staticClass:"project-title"},[o("a",{attrs:{target:"_blank",title:t.project.name,href:t.project.url},on:{mouseover:t.handleMouseOver,mouseleave:t.handleMouseLeave}},[t._v("\n      "+t._s(t.project.name)+"\n    ")])]),t._v(" "),o("div",{staticClass:"project-creation"},[o("div",{staticClass:"project-creation__vendor"},[t._v("\n      "+t._s(t.project.vendor||"Freelance Project")+"\n    ")]),t._v(" "),o("div",{staticClass:"project-creation__date"},[t._v("\n      "+t._s(t.project.date)+"\n    ")])])])}),[],!1,null,null,null).exports,ct={name:"ProjectBy",props:{project:{type:Object,default:function(){}}}},it={name:"Project",components:{projectPreview:at,projectInfo:st,projectBy:Object(ot.a)(ct,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project__by"},[o("div",{staticClass:"project-worker"},t._l(t.project.workers,(function(t,e){return o("img",{key:"worker-"+e,attrs:{src:t.icon,alt:t.name}})})),0),t._v(" "),o("div",{staticClass:"project-tool"},t._l(t.project.contributions,(function(e,r){return o("div",{key:"contribution-"+r,class:"tag "+e.area},[e.tool?o("span",{staticClass:"tag__tooltip"},[t._v("\n        "+t._s(e.tool)+"\n      ")]):t._e(),t._v(" "),o("span",{staticClass:"tag__name"},[t._v("\n        "+t._s(e.area)+"\n      ")])])})),0)])}),[],!1,null,null,null).exports},props:{project:{type:Object,default:function(){}}}},pt=Object(ot.a)(it,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"project"},[e("project-preview",{attrs:{project:this.project}}),this._v(" "),e("project-info",{attrs:{project:this.project}}),this._v(" "),e("project-by",{attrs:{project:this.project}})],1)}),[],!1,null,null,null).exports,lt={name:"ProjectList",components:{contact:tt.a,project:pt},methods:{getProjects:function(){return z}}},ut={name:"Index",components:{projectList:Object(ot.a)(lt,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"project-list row",attrs:{"data-aos":"fade-up","data-aos-duration":"1200","data-aos-delay":"1300"}},[e("div",{staticClass:"project-list__author col-lg-4 col-md-6 col-12"},[e("contact",{attrs:{mode:"profile-pic"}})],1),this._v(" "),this._l(this.getProjects(),(function(t,o){return e("div",{key:"project-list-"+o,staticClass:"project-list__item col-lg-4 col-md-6 col-12"},[e("project",{attrs:{project:t}})],1)}))],2)}),[],!1,null,null,null).exports},methods:{getSiteHeader:function(){return"#project_references"}}},mt=Object(ot.a)(ut,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v("\n      "+this._s(this.getSiteHeader())+"\n    ")]),this._v(" "),e("project-list")],1)])}),[],!1,null,null,null);e.default=mt.exports}}]);