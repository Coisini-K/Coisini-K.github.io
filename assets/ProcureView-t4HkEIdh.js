import{_ as P,B as S,q as I,a as U}from"./index-RD38uKKR.js";import{r as n,o as r,a as o,b as e,F as V,e as C,t as i,k as B,s as E,c as M,i as w,U as F,V as N,v as j,W as T,f as m,u as W,X as z,w as A,E as L,g as R}from"./vendor-xI_S6KZC.js";import{E as Y}from"./EchartsStore-BFublbjn.js";import{g as q,P as O}from"./ProductNews-CbUItOVv.js";const H={class:"recommend-cates"},X=["href"],G={__name:"HotRecommend",setup(D){const p=n([{items:[{name:"苹果",url:"/purchase/apple"},{name:"柑桔",url:"/purchase/citrus"},{name:"鸡",url:"/purchase/chicken"},{name:"鸡蛋",url:"/purchase/egg"},{name:"红薯",url:"/purchase/sweetpotato"},{name:"猪副产品",url:"/purchase/pigbyproducts"},{name:"辣椒",url:"/purchase/chili"},{name:"鸡苗",url:"/purchase/chickensalvage"},{name:"土豆",url:"/purchase/potato"},{name:"生姜",url:"/purchase/ginger"},{name:"大蒜",url:"/purchase/garlic"},{name:"葡萄",url:"/purchase/grape"},{name:"大米",url:"/purchase/rice"},{name:"白菜",url:"/purchase/cabbage"},{name:"柚子",url:"/purchase/grapefruit"}]},{items:[{name:"甘蔗",url:"/purchase/sugarcane"},{name:"板栗",url:"/purchase/chestnut"},{name:"榴莲",url:"/purchase/durian"},{name:"大闸蟹",url:"/purchase/crab"},{name:"干玉米",url:"/purchase/corn"},{name:"有机肥",url:"/purchase/fertilizer"},{name:"西红柿",url:"/purchase/tomato"},{name:"核桃",url:"/purchase/walnut"},{name:"梨",url:"/purchase/pear"},{name:"大葱",url:"/purchase/scallion"},{name:"花生",url:"/purchase/peanut"},{name:"杀菌剂",url:"/purchase/fungicide"},{name:"羊",url:"/purchase/sheep"},{name:"山药",url:"/purchase/yam"},{name:"牛",url:"/purchase/cattle"}]},{items:[{name:"鱼苗",url:"/purchase/fishseed"},{name:"橙子",url:"/purchase/orange"},{name:"鲜枣",url:"/purchase/jujube"},{name:"杀虫剂",url:"/purchase/insecticide"},{name:"包菜",url:"/purchase/cabbage"},{name:"大豆",url:"/purchase/soybean"},{name:"鲜玉米",url:"/purchase/freshcorn"},{name:"鹅苗",url:"/purchase/gooseseed"},{name:"萝卜",url:"/purchase/radish"},{name:"干菜",url:"/purchase/driedvegetables"},{name:"鸭",url:"/purchase/duck"},{name:"休闲零食",url:"/purchase/snacks"},{name:"生蚝",url:"/purchase/oyster"},{name:"黄精",url:"/purchase/huangjing"}]}]);return(s,u)=>(r(),o("div",H,[e("ul",null,[u[0]||(u[0]=e("li",{class:"label-recommend"},"热门推荐",-1)),(r(!0),o(V,null,C(p.value,(c,h)=>(r(),o("li",{class:"sub-row",key:h},[(r(!0),o(V,null,C(c.items,(v,_)=>(r(),o("a",{key:_,href:v.url,target:"_blank",class:"third-cate-item link-expanded"},i(v.name),9,X))),128))]))),128))])]))}},J=P(G,[["__scopeId","data-v-61ad79c8"]]),K={class:"table-form"},Q={class:"demo-form-inline"},Z={class:"form-item"},ee=["value"],ae={class:"form-item"},te={class:"form-item"},se={class:"table-box"},le={class:"custom-table",style:{width:"100%"}},ne=["onClick"],re={class:"pagination"},oe=["disabled"],ue=["disabled"],ce={__name:"TableForm",setup(D){const p=B(),s=n(1),u=n(10),c=n(0),h=n([]),v=n(!1),_=n(!1),g=n(1),b=l=>{l>=1&&l<=x.value&&(s.value=l,f())},f=async()=>{try{const l=k.value?k.value:"",a=await T.get(`${S}/purchase/query/${s.value}/${u.value}`,{params:{params:l}});h.value=a.data.data.list,c.value=a.data.data.total,s.value=a.data.data.pageNum}catch(l){console.log(`警告: ${l.message}`)}},k=n(""),y=n([]),$=async()=>{try{const l=await T.get(`${S}/city/list`);y.value=l.data.data.map(a=>({id:a.id,city:a.city}))}catch(l){console.log(`警告: ${l.message}`)}};E(()=>{f(),$()});const d=l=>{console.log("查看行情",l),p.push("/market")},x=M(()=>Math.ceil(c.value/u.value));return(l,a)=>(r(),o("div",K,[e("div",null,[e("form",Q,[e("div",Z,[a[8]||(a[8]=e("label",null,"收货地区:",-1)),w(e("select",{"onUpdate:modelValue":a[0]||(a[0]=t=>k.value=t),onChange:f,size:"1"},[a[7]||(a[7]=e("option",{value:""},"不限地区",-1)),(r(!0),o(V,null,C(y.value,t=>(r(),o("option",{key:t.id,value:t.city},i(t.city),9,ee))),128))],544),[[F,k.value]])]),e("div",ae,[w(e("input",{type:"checkbox","onUpdate:modelValue":a[1]||(a[1]=t=>v.value=t)},null,512),[[N,v.value]]),a[9]||(a[9]=e("label",null,"最近7天发布",-1))]),e("div",te,[w(e("input",{type:"checkbox","onUpdate:modelValue":a[2]||(a[2]=t=>_.value=t)},null,512),[[N,_.value]]),a[10]||(a[10]=e("label",null,"最近30天发布",-1))])])]),e("div",se,[e("table",le,[a[11]||(a[11]=e("thead",null,[e("tr",null,[e("th",null,"采购品种"),e("th",null,"采购量"),e("th",null,"收货地"),e("th",null,"采购方"),e("th",null,"更新时间"),e("th",null,"采购等级"),e("th",null,"操作")])],-1)),e("tbody",null,[(r(!0),o(V,null,C(h.value,t=>(r(),o("tr",{key:t.id},[e("td",null,i(t.kName),1),e("td",null,i(t.amount),1),e("td",null,i(t.receipt),1),e("td",null,i(t.buyer),1),e("td",null,i(t.updateTime),1),e("td",null,i(t.level),1),e("td",null,[e("button",{class:"success-btn",onClick:Ve=>d(t)}," 查看行情 ",8,ne)])]))),128))])])]),e("div",re,[e("button",{onClick:a[3]||(a[3]=t=>b(s.value-1)),disabled:s.value<=1}," 上一页 ",8,oe),e("span",null,"第 "+i(s.value)+" 页",1),e("button",{onClick:a[4]||(a[4]=t=>b(s.value+1)),disabled:s.value>=x.value}," 下一页 ",8,ue),e("span",null,"共 "+i(x.value)+" 页",1),w(e("input",{type:"number","onUpdate:modelValue":a[5]||(a[5]=t=>g.value=t),min:"1",max:"totalPages"},null,512),[[j,g.value,void 0,{number:!0}]]),e("button",{onClick:a[6]||(a[6]=t=>b(g.value))},"跳转")])]))}},ie=P(ce,[["__scopeId","data-v-2faf98b1"]]),de={class:"cloud"},me={class:"box"},pe={__name:"WordCloud",setup(D){const p=n([["玉米",6],["鸡蛋",9],["柑桔",7],["大米",8],["苹果",6],["红薯",7],["橙子",9]]),s=([,u])=>(u>5,"#000");return(u,c)=>(r(),o("div",de,[c[0]||(c[0]=e("p",{class:"title"},"近7天热门采购榜",-1)),e("div",me,[m(W(z),{words:p.value,color:s,spacing:1},null,8,["words"])])]))}},he=P(pe,[["__scopeId","data-v-e7bb6d07"]]),ve={class:"container"},_e={class:"list"},ge={class:"container_box"},be={class:"left"},fe={class:"right"},ke={class:"word"},xe={class:"echarts"},ye={class:"echarts_title"},$e={class:"product"},we={class:"footer"},Me={__name:"ProcureView",setup(D){const p=q(null,"MM-DD"),s=[25,26,24.5,27,25.5,27,26.5],u=M(()=>Math.round(Math.max(...s)*100)/100),c=M(()=>Math.round(Math.min(...s)*100)/100),h=M(()=>s.reduce(($,d)=>$+d,0)/s.length),_=Math.round(h.value*100)/100+"元/斤",g=n((u.value-c.value)/4),b=Math.round(u.value+g.value),f=Math.round(c.value-g.value),k=Math.round((b-f)/8),y=n({animation:!0,animationDuration:1e3,title:{text:"猫牙米",subtext:_,left:"left",textStyle:{fontSize:16,color:"#39bf3e"}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},feature:{saveAsImage:{},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{}}},grid:{top:"25%",left:"5%",right:"2%",bottom:"15%",containLabel:!0},xAxis:{type:"category",data:p.datesOfWeek},yAxis:{type:"value",min:b,max:f,interval:k},series:[{name:"价格",type:"line",smooth:!0,data:s,color:["#007bff"],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}}]});return($,d)=>{const x=L("router-link");return r(),o("div",ve,[e("div",_e,[m(J)]),e("div",ge,[e("div",be,[m(ie)]),e("div",fe,[e("div",ke,[m(he)]),e("div",xe,[e("div",ye,[d[1]||(d[1]=e("p",null,"行情动态",-1)),m(x,{to:"/market",class:"link"},{default:A(()=>d[0]||(d[0]=[R("更多 ❯")])),_:1})]),m(Y,{options:y.value,height:"200px"},null,8,["options"])]),e("div",$e,[m(O,{news:W(I)},null,8,["news"])])])]),e("div",we,[m(U)])])}}},Ne=P(Me,[["__scopeId","data-v-753d0268"]]);export{Ne as default};
