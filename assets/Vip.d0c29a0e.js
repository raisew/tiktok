import{j as s,k as a,q as e,H as l,t as i,w as d,a as c,n as t,B as r,I as p,J as n,u as o,C as x,b as v,l as f,T as g,L as b}from"./index.7727cc7f.js";import{_ as u}from"./ComHeader.b8412a41.js";const m={class:"mgb-20 w-100 bgc-primary pd-20 flex flex-between flex-align-center"},y={class:"w-180px"},h={class:"w-180px h-180px overflow-hidden"},w=["src"],k=l('<div class="flex-auto pdl-30 h-100 flex flex-column flex-around"><div><div class="font-30">金额 <span class="com-text-primary">$100</span></div><div class="text-overflow-2 c-gray mgt-10">簡介：會員專屬vip服務活動規則介紹明細簡介</div></div><div class="flex flex-end"><a class="pdt-7 pdb-7 pdl-20 pdr-20 border-radius-5 bgc-second"><span class="com-text-primary">明细</span></a><a class="pdt-7 pdb-7 pdl-20 pdr-20 border-radius-5 com-btn-primary mgl-10"><span class="c-black">購買</span></a></div></div>',1),I={setup:l=>(l,i)=>(s(),a("div",m,[e("div",y,[e("div",h,[e("img",{src:l.Pub.getThemeImg("logo.png"),class:"w-100 h-100"},null,8,w)])]),k]))},P={class:"shade-black header-shadow"},j={class:"bgc-primary border-radius-15"},C={class:"flex flex-align-center bd-base-bottom pd-30"},E=e("div",{class:"flex-1"},null,-1),T=e("div",{class:"flex-3 align-center font-36 com-text-primary"},"陞級",-1),_={class:"flex-1 align-right"},G=["src"],S={class:"box-cont"},V={class:"pd-30"},D={class:"flex flex-between flex-align-center h-80px link pdl-30 pdr-30 bgc-input border-radius-5"},L=e("span",{class:"font-30"}," 選擇級別 ",-1),$={class:"flex flex-end flex-align-center"},B=e("span",{class:"font-30 com-text-primary pdr-20"},"銀牌",-1),U={class:"position-absolute w-100 text-nowrap bgc-base bd-base border-radius-10 pdl-20 pdr-20 pdt-10 pdb-10 z-index-11",style:{top:"40px","max-height":"200px","overflow-y":"auto"}},z=[e("div",{class:"w-100 flex flex-align-center pdt-10 pdb-10 click-effect"},[e("span",{class:"font-26"},"銀牌")],-1),e("div",{class:"w-100 flex flex-align-center pdt-10 pdb-10 click-effect"},[e("span",{class:"font-26"},"銀牌")],-1),e("div",{class:"w-100 flex flex-align-center pdt-10 pdb-10 click-effect"},[e("span",{class:"font-26"},"銀牌")],-1),e("div",{class:"w-100 flex flex-align-center pdt-10 pdb-10 click-effect"},[e("span",{class:"font-26"},"銀牌")],-1)],H=l('<div class="pdt-20 font-28 c-gray"> 補差金額 <span class="com-text-primary">167 $</span></div><div class="bgc-input border-radius-5 border-radius-5 mgt-30 h-86px"><input type="password" placeholder="输入密码" class="w-100 h-100 pdl-30 pdr-30"></div><div class="btn-primary-lg full mgt-30">立即陞級</div>',3),O={props:{status:Boolean,data:Object},emits:["closeDialog"],setup(l,{emit:b}){const u=l,m=i({isShowGrade:!1}),y=s=>{13==s.keyCode&&u.status};return d((()=>u.status),(s=>{})),c((()=>{document.addEventListener("keyup",y),t((()=>{document.addEventListener("click",(s=>{let a=document.getElementById("grade");a&&!a.contains(s.target)&&(m.isShowGrade=!1)}))}))})),r((()=>{document.removeEventListener("keyup",y)})),(i,d)=>(s(),a("div",null,[p(e("div",P,null,512),[[n,l.status]]),e("div",{class:x(["dialog-middle bgc-primary",{active:l.status}])},[e("div",j,[e("div",C,[E,T,e("div",_,[e("a",{class:"click-effect",onClick:d[0]||(d[0]=s=>i.$emit("closeDialog"))},[e("img",{src:i.Pub.getThemeImg("icon/icon_close.png"),class:"h-48px"},null,8,G)])])]),e("div",S,[e("div",V,[e("div",{class:"position-relative",id:"grade",onClick:d[1]||(d[1]=s=>o(m).isShowGrade=!o(m).isShowGrade)},[e("div",D,[L,e("div",$,[B,e("i",{class:x(["icon-tri-down",{"icon-tri-up":o(m).isShowGrade}])},null,2)])]),v(g,{name:"fade"},{default:f((()=>[p(e("div",U,z,512),[[n,o(m).isShowGrade]])])),_:1})]),H])])])],2)]))}},q={class:"shade-black header-shadow"},J={class:"bgc-primary border-radius-15"},Y={class:"flex flex-align-center bd-base-bottom pd-30"},A=e("div",{class:"flex-1"},null,-1),F=e("div",{class:"flex-3 align-center font-36 com-text-primary"},"選取",-1),K={class:"flex-1 align-right"},M=["src"],N=l('<div class="box-cont"><div class="pd-30"><div class="bgc-input border-radius-5 border-radius-5 mgt-30 h-86px"><input type="amount" placeholder="輸入金額" class="w-100 h-100 pdl-30 pdr-30 font-30"></div><div class="pdt-20 font-26 c-gray"> 手續費0.1% </div><div class="bgc-input border-radius-5 border-radius-5 mgt-30 h-86px"><input type="password" placeholder="输入密码" class="w-100 h-100 pdl-30 pdr-30 font-30"></div><div class="pdt-20 font-24 c-gray"> 選取T+2到賬 </div><div class="btn-primary-lg full mgt-30">確定</div></div></div>',1),Q={props:{status:Boolean,data:Object},emits:["closeDialog"],setup(l,{emit:t}){const o=l;i({isShowGrade:!1});const v=s=>{13==s.keyCode&&o.status};return d((()=>o.status),(s=>{})),c((()=>{document.addEventListener("keyup",v)})),r((()=>{document.removeEventListener("keyup",v)})),(i,d)=>(s(),a("div",null,[p(e("div",q,null,512),[[n,l.status]]),e("div",{class:x(["dialog-middle bgc-primary",{active:l.status}])},[e("div",J,[e("div",Y,[A,F,e("div",K,[e("a",{class:"click-effect",onClick:d[0]||(d[0]=s=>i.$emit("closeDialog"))},[e("img",{src:i.Pub.getThemeImg("icon/icon_close.png"),class:"h-48px"},null,8,M)])])]),N])],2)]))}},R=e("div",null,null,-1),W={class:"w-100 position-relative"},X=["src"],Z=e("div",{class:"position-absolute w-100 h-100 flex flex-column flex-align-center flex-justify-center"},[e("div",{class:"com-text-primary font-64"},"會員專屬"),e("div",{class:"font-26 mgt-20"},"最新活動全網陞級")],-1),ss={class:"bgc-primary h-80px flex flex-align-center pdl-25 pdr-25"},as=["src"],es=e("div",{class:"flex-auto pdl-20"},[e("div",{class:"text-overflow-1"},[e("span",{class:"com-text-primary pdr-20"},"會員專屬vip服務活動規則介紹明細會員專屬vip服務活動規則介紹明細")])],-1),ls={class:"pd-20"},is={class:"w-100 position-relative"},ds=["src"],cs={class:"position-absolute w-100 h-100 flex flex-align-center"},ts={class:"pd-40 flex flex-align-center"},rs=["src"],ps=e("div",{class:"pdl-30"},[e("div",{class:"font-30"},"Youxiangzhanghao@163.com"),e("div",{class:"com-text-primary mgt-10"},"等級 銀牌")],-1),ns={class:"pdl-25 pdr-25 pdt-25"},os={class:"bgc-primary pd-25 border-radius-10"},xs={class:"flex flex-between flex-align-center"},vs=e("span",{class:"font-48 com-text-primary font-bold"},"銀牌",-1),fs=l('<div class="pdl-10 pdr-10 mgt-20 flex flex-align-center"><div class="w-56px h-56px bd-primary border-radius-56 flex flex-align-center flex-justify-center"><span class="com-text-primary">銅牌</span></div><div class="w-40px h-4px bgc-c-primary"></div><div class="w-60px h-60px bd-primary border-radius-60 flex flex-align-center flex-justify-center"><span class="com-text-primary">銀牌</span></div><div class="w-40px h-4px bgc-base"></div><div class="w-68px h-68px border-radius-68 flex flex-align-center flex-justify-center bgc-base"><span class="c-gray">金牌</span></div><div class="w-40px h-4px bgc-base"></div><div class="w-76px h-76px border-radius-76 flex flex-align-center flex-justify-center bgc-base"><span class="c-gray">鑽石</span></div><div class="w-40px h-4px bgc-base"></div><div class="w-80px h-80px border-radius-80 flex flex-align-center flex-justify-center bgc-base"><span class="c-gray">合夥人1</span></div><div class="w-40px h-4px bgc-base"></div><div class="w-84px h-84px border-radius-84 flex flex-align-center flex-justify-center bgc-base"><span class="c-gray">合夥人2</span></div></div>',1),gs={class:"pdl-25 pdr-25 pdt-25"},bs={class:"bgc-primary border-radius-10"},us=e("div",{class:"pdt-20 pdb-20 pdl-30 pdr-30 flex flex-align-center flex-between bd-base-bottom"},[e("div",{class:"font-30"},[b(" 质押金額: "),e("span",{class:"com-text-primary"},"167 $")]),e("div",null,[e("a",{class:"pdt-7 pdb-7 pdl-20 pd-20 c-primary bgc-second border-radius-5"},"退款")])],-1),ms={class:"pdt-20 pdb-20 pdl-30 pdr-30 flex flex-align-center flex-between"},ys=e("div",{class:"font-30"},[b(" 任務傭金: "),e("span",{class:"com-text-primary"},"167 $")],-1),hs=e("a",{class:"pdt-7 pdb-7 pdl-20 pd-20 c-primary bgc-second border-radius-5 click-effect"},"紀錄",-1),ws=e("div",{class:"mgt-25 c-gray"}," VIP待遇說明VIP待遇說明VIP待遇說明VIP待遇說明VIP待遇說明VIP待遇說明 ",-1),ks={setup(l){const d=i({isUpgrade:!1,isExtract:!1});return(l,i)=>(s(),a("div",null,[v(u,{headerTitle:"VIP"},{header_left:f((()=>[R])),_:1}),p(e("div",null,[e("div",W,[e("img",{src:l.Pub.getThemeImg("img/vip.png"),class:"w-100"},null,8,X),Z]),e("div",ss,[e("img",{src:l.Pub.getThemeImg("icon/icon_vip_rule.png"),class:"w-36px"},null,8,as),es]),e("div",ls,[v(I),v(I),v(I),v(I),v(I)])],512),[[n,!1]]),e("div",null,[e("div",is,[e("img",{src:l.Pub.getThemeImg("img/vip_active.png"),class:"w-100"},null,8,ds),e("div",cs,[e("div",ts,[e("img",{src:l.Pub.getThemeImg("logo.png"),class:"w-100px h-100px border-radius-100 bd-primary"},null,8,rs),ps])])]),e("div",ns,[e("div",os,[e("div",xs,[vs,e("a",{class:"pdt-7 pdb-7 pdl-20 pdr-20 com-btn-primary border-radius-5 c-black click-effect",onClick:i[0]||(i[0]=s=>o(d).isUpgrade=!0)}," 立即陞級 ")]),fs])]),e("div",gs,[e("div",bs,[us,e("div",ms,[ys,e("div",null,[e("a",{class:"pdt-7 pdb-7 pdl-20 pd-20 c-black com-btn-primary border-radius-5 mgr-10 click-effect",onClick:i[1]||(i[1]=s=>o(d).isExtract=!0)},"選取"),hs])])]),ws])]),v(O,{status:o(d).isUpgrade,data:{},onCloseDialog:i[2]||(i[2]=s=>{o(d).isUpgrade=!1})},null,8,["status"]),v(Q,{status:o(d).isExtract,data:{},onCloseDialog:i[3]||(i[3]=s=>{o(d).isExtract=!1})},null,8,["status"])]))}};export{ks as default};
