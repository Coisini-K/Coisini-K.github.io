import{r,c as D,l as M,a as m,b as t,t as i,u as _,i as P,v as T,F as g,e as V,k as F,o as v,n as S}from"./vendor-DljaJcOa.js";import{_ as $,k as j}from"./index-DBvwnPll.js";const q="/assets/back-BrqCTv69.png",z={cellspacing:"0",class:"mockup_table"},E={class:"mockup_tr"},X={rowspan:"7"},J=["src"],K={colspan:"4",class:"tr_one tr_head"},O={class:"head_span"},Q={colspan:"3",class:"tr_two Price"},A={class:"tr_tr_there"},G=["value"],H={class:"td"},W={class:"tr_there"},Y={class:"td"},Z={class:"div"},tt=["src","onClick"],et={__name:"DetailView",setup(st){const k=F(),o=j().items,b=r(o.image||"@/assets/images/aos/1.webp"),c=r([new URL("/assets/1-BvP_uXra.webp",import.meta.url).href,new URL("/assets/2-BgLUTtyg.webp",import.meta.url).href,new URL("/assets/3-B3eOz2hX.webp",import.meta.url).href,new URL("/assets/4-DJ_Ir0yB.webp",import.meta.url).href,new URL("/assets/5-N2Pc8QKd.webp",import.meta.url).href,new URL("/assets/6-tRRENncR.webp",import.meta.url).href]),s=r(1),f=D(()=>parseFloat(s.value*o.price).toFixed(2)+"元"),w=()=>{s.value>1?s.value--:alert("必须选择一件")},h=()=>{s.value<=u.value&&s.value++},C=l=>{const e=parseInt(l.target.value,10);isNaN(e)||e<0||e>u.value?(l.target.value=1,s.value=1,alert("购买数大于可售或输入错误")):s.value=e},a=r(0),R=l=>{a.value=l,d()},B=()=>{a.value--,a.value<0&&(a.value=c.value.length-1),d()},I=()=>{a.value++,a.value>=c.value.length&&(a.value=0),d()},d=()=>{const l=c.value[a.value];b.value=l},u=r(0),L=()=>Math.floor(Math.random()*1e3)+1;M(()=>{u.value=L()});const U=()=>{alert("收藏成功")},x=()=>{alert("已下单")},y=()=>{alert("已加入购物车")},N=()=>{k.back()};return(l,e)=>(v(),m(g,null,[t("div",{class:"back_bt"},[t("button",{id:"go-back-btn",onClick:N},e[3]||(e[3]=[t("img",{src:q},null,-1)]))]),t("table",z,[t("tr",E,[t("td",X,[t("img",{src:b.value||"@/assets/images/aos/1.webp",class:"mockup_img"},null,8,J)])]),t("tr",null,[t("td",K,[t("span",O,i(_(o).title),1)])]),t("tr",null,[e[4]||(e[4]=t("td",{colspan:"1",class:"tr_one"},"单价",-1)),t("td",Q,i(_(o).price)+"元/"+i(_(o).unit),1)]),e[6]||(e[6]=t("tr",null,[t("td",{class:"tr_one"},"服务"),t("td",{colspan:"3",class:"tr_two"},"七天无理由退货·晚发必赔·极速退款")],-1)),e[7]||(e[7]=t("tr",null,[t("td",{class:"tr_one"},"物流"),t("td",{colspan:"3",class:"tr_two"},"农民物流")],-1)),t("tr",null,[e[5]||(e[5]=t("td",{rowspan:"2",class:"tr_one"},"数量",-1)),t("td",A,[t("input",{type:"text",value:f.value,disabled:""},null,8,G)]),t("td",H,[t("a",{href:"javascript:;",class:"decrement",onClick:e[0]||(e[0]=n=>w())},"-"),P(t("input",{type:"number",class:"itxt","onUpdate:modelValue":e[1]||(e[1]=n=>s.value=n),onBlur:C},null,544),[[T,s.value]]),t("a",{href:"javascript:;",class:"increment",onClick:e[2]||(e[2]=n=>h())},"+")])]),t("tr",null,[t("td",W,i(u.value)+"件可售",1)]),t("tr",null,[t("td",Y,[t("button",{class:"left_button",onClick:B},"<"),t("div",Z,[(v(!0),m(g,null,V(c.value,(n,p)=>(v(),m("img",{key:p,src:n,class:S({selected:a.value===p}),onClick:lt=>R(p)},null,10,tt))),128))]),t("button",{class:"right_button",onClick:I},">")]),t("td",{colspan:"4"},[t("div",{class:"button_one"},[t("button",{class:"collection",onClick:U}," ⭐收藏 "),t("button",{class:"purchase",onClick:x}," 🕹️立即购买 "),t("button",{class:"cart",onClick:y}," 🛒加入购物车 ")])])])])],64))}},rt=$(et,[["__scopeId","data-v-7fb360fe"]]);export{rt as default};