import{b as j,p as t,cP as ht,cQ as ft,cR as pt,cS as mt,cT as gt,cU as vt,cV as yt,cW as xt,cX as St,cY as bt,bF as _t,bD as Ct,bH as oe,cz as Y,cZ as Dt,cB as Z,c_ as A,cy as ee,cx as z,cA as L,c$ as te,u as De,bl as ye,bk as It,n as l,br as D,T as g,r as H,i as G,j as V,aJ as Ie,e as _,f as ae,d0 as wt,a3 as B,X as Mt,d as E,cw as Rt,d1 as $t,bO as jt,co as kt,a2 as Bt,K as v,U as ie,t as W,J as $,k as Tt,am as ce,bi as Et,a9 as we,bh as le,bf as Me,q as N,b_ as Re,aC as $e,Q as At,bm as je,b7 as zt,o as ke,cd as Nt,$ as Be,bP as Ot,bR as Wt,bZ as Ht,bY as Gt,b3 as Vt,bS as Ft,bT as Pt,aA as Te}from"./index-85cfbf13.js";import{B as Ee,d as qt}from"./BootstrapTooltip-b3328893.js";import{b as J,d as Kt,e as Lt,h as Ut,p as Jt}from"./StarDisplay-fcf9b853.js";import{D as Q}from"./DataContext-cb40fc9b.js";import{E as Qt,s as Ae,J as S,K as w,L as M,M as y,N as R,p,O as F,P,Q as T,R as ze,V as ne,W as Xt,T as Ne,q as Yt,g as q,r as se,D as Zt,X as ea,w as Oe,G as ta,S as We,d as aa,v as na,u as xe,x as sa,n as ra,I as He,Y as oa,i as U,o as Se,m as ia,A as ca}from"./index-ac0d9841.js";import{A as Ge}from"./Artifact-1851f3bf.js";import{S as k}from"./SqBadge-454f7f55.js";import{b as la,g as da}from"./index-ef713999.js";import{S as ua}from"./SlotIcon-10e77f9b.js";import{i as de,I as ha}from"./ColoredText-1e6821be.js";import{u as fa}from"./useWeapon-36a17728.js";import{g as Ve,W as Fe}from"./index-95ad8698.js";import{C as O}from"./CardActionArea-d26a3a9f.js";function pa(e){const a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,(s,o,r,i)=>o+o+r+r+i+i);const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}function ma(e){const a=j();return J(a.charMeta,e)}function Pe(e){const a=j();return J(a.chars,e)}function ga(e){const a=j();return J(a.teams,e)}function va(e){const a=j();return J(a.teamChars,e)}function ya({statKey:e,iconProps:a={}}){switch(e){case"hp":case"hp_":case"base_hp":return t(Ct,{...a});case"atk":case"atk_":case"base_atk":return t(_t,{...a});case"def":case"def_":case"base_def":return t(bt,{...a});case"eleMas":return t(St,{...a});case"critRate_":return t(xt,{...a});case"critDMG_":return t(yt,{...a});case"enerRech_":return t(vt,{...a});case"incHeal_":return t(gt,{...a});case"heal_":return t(mt,{...a});case"cdRed_":return t(pt,{...a});case"shield_":return t(ft,{...a});case"stamina":return t(ht,{...a})}const n=e.split("_")[0];return oe.includes(n)?t(xa,{ele:n,iconProps:a}):null}function xa({ele:e,iconProps:a={}}){switch(e){case"anemo":return t(te,{...a});case"cryo":return t(L,{...a});case"dendro":return t(z,{...a});case"electro":return t(ee,{...a});case"geo":return t(A,{...a});case"hydro":return t(Z,{...a});case"physical":return t(Dt,{...a});case"pyro":return t(Y,{...a})}}function Sa({statKey:e,value:a,color:n,prefix:s="",typographyProps:o={}}){const{t:r}=De("statKey_gen"),i=ye(e),c=It(a,ye(e));return l(g,{color:n?`${n}.main`:void 0,...o,children:[t(ya,{statKey:e,iconProps:D})," ",r(e)," ",t("strong",{children:`${s}${c}${i}`})]},e)}function qe({condition:e,wrapper:a,falseWrapper:n,children:s}){return e?a(s):n?n(s):s}var ue={},ba=G;Object.defineProperty(ue,"__esModule",{value:!0});var Ke=ue.default=void 0,_a=ba(H()),Ca=V,Da=(0,_a.default)((0,Ca.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");Ke=ue.default=Da;const Le=({stars:e=1,colored:a=!1,inline:n=!1})=>t(Ie,{color:a?"warning":void 0,children:[...Array(e).keys()].map((s,o)=>t(Kt,{fontSize:n?"inherit":void 0,sx:n?{verticalAlign:"text-top"}:void 0},o))});var he={},Ia=G;Object.defineProperty(he,"__esModule",{value:!0});var wa=he.default=void 0,Ma=Ia(H()),Ra=V,$a=(0,Ma.default)((0,Ra.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");wa=he.default=$a;const ja=_.createContext({});function ka({iconProps:e}){const[a,n]=_.useState(0);return _.useEffect(()=>{const s=setInterval(()=>n(o=>o+1),1e3);return()=>clearInterval(s)},[]),t(Qt,{ele:ae[a%ae.length],iconProps:e})}const x=e=>t(Ne,{ns:"elementalResonance_gen",key18:e}),re=e=>t(Ne,{ns:"elementalResonance",key18:e}),C=Ae(...ae.map(e=>S[e])),Ue=wt(oe,e=>[`${e}_res_`,w(p.charKey,y(S.ele,4,R(.15)),M.info(`${e}_res_`))]),Ba={name:x("ProtectiveCanopy.name"),desc:x("ProtectiveCanopy.desc"),icon:l("span",{children:[t(ka,{iconProps:D})," x4"]}),canShow:e=>e.get(S.ele).value>=4,sections:[{teamBuff:!0,fields:Object.values(Ue).map(([e,a])=>({node:a}))}]},[Ta,Ea]=w(p.charKey,y(C,4,y(S.pyro,2,R(.25))),M.info("atk_")),Aa={name:x("FerventFlames.name"),desc:x("FerventFlames.desc"),icon:l("span",{children:[t(Y,{...D})," ",t(Y,{...D})]}),canShow:e=>e.get(S.pyro).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,fields:[{text:T("effectDuration.cryo"),value:-40,unit:"%"},{node:Ta}]}]},[za,Na]=w(p.charKey,y(C,4,y(S.hydro,2,R(.25))),M.info("hp_")),Oa={name:x("SoothingWater.name"),desc:x("SoothingWater.desc"),icon:l("span",{children:[t(Z,{...D})," ",t(Z,{...D})]}),canShow:e=>e.get(S.hydro).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,fields:[{text:T("effectDuration.pyro"),value:-40,unit:"%"},{node:za}]}]},Je=["resonance","ShatteringIce"],Qe=F(Je),[Wa,Ha]=w(p.charKey,y(C,4,y(S.cryo,2,P(Qe,"on",R(.15)))),M.info("critRate_")),Ga={name:x("ShatteringIce.name"),desc:x("ShatteringIce.desc"),icon:l("span",{children:[t(L,{...D})," ",t(L,{...D})]}),canShow:e=>e.get(S.cryo).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,fields:[{text:T("effectDuration.electro"),value:-40,unit:"%"}]},{teamBuff:!0,path:Je,value:Qe,name:T("enemyAffected.frozenOrCryo"),header:{title:x("ShatteringIce.name"),icon:t(L,{})},states:{on:{fields:[{node:Wa}]}}}]},Va={name:x("HighVoltage.name"),desc:x("HighVoltage.desc"),icon:l("span",{children:[t(ee,{...D})," ",t(ee,{...D})]}),canShow:e=>e.get(S.electro).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,fields:[{text:T("effectDuration.hydro"),value:-40,unit:"%"}]}]},[Fa,Pa]=w(p.charKey,y(C,4,y(S.anemo,2,R(-.15))),M.info("staminaDec_")),[qa,Ka]=w(p.charKey,y(C,4,y(S.anemo,2,R(.1))),M.info("moveSPD_")),[La,Ua]=w(p.charKey,y(C,4,y(S.anemo,2,R(-.05))),M.info("cdRed_")),Ja={name:x("ImpetuousWinds.name"),desc:x("ImpetuousWinds.desc"),icon:l("span",{children:[t(te,{...D})," ",t(te,{...D})]}),canShow:e=>e.get(S.anemo).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,fields:[{node:Fa},{node:qa},{node:La}]}]},Xe=["resonance","EnduringRock"],Ye=F(Xe),Ze=["resonance","EnduringRockHit"],et=F(Ze),[Qa,Xa]=w(p.charKey,y(C,4,y(S.geo,2,R(.15))),M.info("shield_")),[Ya,Za]=w(p.charKey,y(C,4,y(S.geo,2,P(Ye,"on",R(.15)))),M.info("all_dmg_")),[en,tn]=w(p.charKey,y(C,4,y(S.geo,2,P(et,"on",R(-.2)))),M.info("geo_enemyRes_")),an={name:x("EnduringRock.name"),desc:x("EnduringRock.desc"),icon:l("span",{children:[t(A,{...D})," ",t(A,{...D})]}),canShow:e=>e.get(S.geo).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,text:x("EnduringRock.desc"),fields:[{node:Qa}]},{teamBuff:!0,path:Xe,value:Ye,header:{title:x("EnduringRock.name"),icon:t(A,{})},name:T("protectedByShield"),states:{on:{fields:[{node:ze(Ya,{isTeamBuff:!1})}]}}},{teamBuff:!0,path:Ze,value:et,header:{title:x("EnduringRock.name"),icon:t(A,{})},name:re("EnduringRock.hitCond"),states:{on:{fields:[{node:en},{text:ne("duration"),value:15,unit:"s"}]}}}]},tt=["resonance","SprawlingCanopy2ele"],at=F(tt),nt=["resonance","SprawlingCanopy3ele"],st=F(nt),[nn,sn]=w(p.charKey,y(C,4,y(S.dendro,2,50)),M.info("eleMas")),[rn,on]=w(p.charKey,y(C,4,y(S.dendro,2,P(at,"on",30))),M.info("eleMas")),[cn,ln]=w(p.charKey,y(C,4,y(S.dendro,2,P(st,"on",20))),M.info("eleMas")),dn={name:x("SprawlingGreenery.name"),desc:x("SprawlingGreenery.desc"),icon:l("span",{children:[t(z,{...D})," ",t(z,{...D})]}),canShow:e=>e.get(S.dendro).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,text:x("SprawlingGreenery.desc"),fields:[{node:nn}]},{teamBuff:!0,path:tt,value:at,header:{title:x("SprawlingGreenery.name"),icon:t(z,{})},name:re("SprawlingGreenery.cond2ele"),states:{on:{fields:[{node:rn},{text:ne("duration"),value:6,unit:"s"}]}}},{teamBuff:!0,path:nt,value:st,header:{title:x("SprawlingGreenery.name"),icon:t(z,{})},name:re("SprawlingGreenery.cond3ele"),states:{on:{fields:[{node:cn},{text:ne("duration"),value:6,unit:"s"}]}}}]},os=[Ba,Aa,Oa,Ga,Va,Ja,an,dn],un=Xt({premod:{all_dmg_:Za},teamBuff:{premod:{...B(Ue,([e,a])=>a),atk_:Ea,hp_:Na,staminaDec_:Pa,moveSPD_:Ka,cdRed_:Ua,shield_:Xa,geo_enemyRes_:tn,eleMas:ze(Ae(sn,on,ln),{pivot:!0})},total:{critRate_:Ha}}});function hn(e,a=0,n,s){const o=j(),[r,i]=Mt(),c=_.useDeferredValue(r),{gender:d}=E(),h=_.useMemo(()=>c&&pn(o,e,a,d,n,s),[c,d,e,o,a,n,s]);return _.useEffect(()=>e?o.chars.follow(e,i):void 0,[e,i,o]),h}class fn{constructor(a){this.data={},a.chars.followAny(n=>{this.removeData(n)})}getData(a){return this.data[a]}cacheData(a,n){this.data[a]=n}removeData(a){delete this.data[a]}}const X=new Map,be=e=>{if(X.has(e))return X.get(e);const a=new fn(e);return X.set(e,a),a};function pn(e,a,n=0,s,o,r){if(!a)return;if(!n&&!o&&!r){const f=be(e).getData(a);if(f)return f}const{teamData:i,teamBundle:c}=mn(e,a,n,o,r)??{};if(!i||!c)return;const d=Yt(i,s,a),h=Rt(d,(f,u)=>{const{data:m,...b}=c[u];return{...f,...b}});return!n&&!o&&!r&&be(e).cacheData(a,h),h}function mn(e,a,n=0,s,o){if(!a)return;const r=e.chars.get(a);if(!r)return;const i=gn(e,!0,n,r,o||(e.weapons.get(r.equippedWeapon)??$t()),s??Object.values(r.equippedArtifacts).map(h=>e.arts.get(h)).filter(h=>h));if(!i)return;const c={[a]:i};return{teamData:{[a]:i.data},teamBundle:c}}function gn(e,a=!1,n,s,o,r){const i=q(s.key,e.gender);if(!i)return;const c=Ve(o.key);if(!c)return;const d=Fe.getAllDataOfType(i.weaponTypeKey),h=a?(()=>{const{display:b,...I}=c.data;return se([I,d])})():c.data,f=se([i.data,h,la]),m=[...Array.isArray(r)?r.map(b=>Zt(b,n)):[r],ea(s),Oe(o),f,ta,un];return{character:s,weapon:o,characterSheet:i,weaponSheet:c,data:m}}function vn({art:e,children:a}){const n=t(v,{children:t(ie,{variant:"rectangular",width:100,height:100})}),s=t(_.Suspense,{fallback:n,children:t(yn,{art:e})});return t(Ee,{placement:"top",title:s,disableInteractive:!0,children:a})}function yn({art:e}){const{t:a}=De("statKey_gen"),n=da(e.setKey),{slotKey:s,level:o,rarity:r,mainStatKey:i,substats:c}=e,d=n.getSlotName(s),h=jt.getVariant(i);return l(v,{p:1,children:[l(g,{variant:"h6",children:[t(ua,{slotKey:s,iconProps:D})," ",d]}),l(g,{variant:"subtitle1",color:`${h}.main`,children:[t(We,{statKey:i,iconProps:D})," ",a(i)," ",kt(i,r,o)]}),l(g,{variant:"subtitle2",sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t(Lt,{stars:r}),l(k,{color:Ge.levelVariant(o),children:["+",o]})," "]}),t(v,{py:1,children:c.map(({value:f,key:u,rolls:m})=>!!(f&&u)&&t(Sa,{statKey:u,value:f,color:`roll${Bt(m.length,1,6)}`,prefix:"+"},u))}),t(g,{color:"success.main",children:n.name}),t(Ut,{color:"secondary.main",location:e.location})]})}function xn({artifactObj:e,slotKey:a}){if(!e)return t(W,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:t(v,{sx:{width:"100%",pb:"100%",position:"relative"},children:t(v,{sx:{position:"absolute",width:"70%",height:"70%",left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:.7},component:"img",src:de.slot[a]})})});const{mainStatKey:n,rarity:s,level:o}=e,i=oe.find(c=>e.mainStatKey.includes(c))??"secondary";return t(vn,{art:e,children:l(W,{sx:{display:"flex",flexDirection:"column",position:"relative"},children:[t(v,{component:"img",className:`grad-${s}star`,src:aa(e.setKey,e.slotKey),maxWidth:"100%",maxHeight:"100%"}),t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:t("strong",{children:t(k,{sx:{p:.5},color:Ge.levelVariant(o),children:l("strong",{children:["+",o]})})})}),t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t(k,{color:i,sx:{p:.5},children:t(We,{statKey:n,iconProps:{fontSize:"inherit"}})})})]})})}function Sn({sheet:e,addlText:a,children:n}){const s=l(_.Suspense,{fallback:t(ie,{variant:"text",width:100}),children:[l(g,{children:[t(ha,{src:de.weaponTypes[e.weaponType],size:1.5})," ",e.name]}),a]});return t(Ee,{placement:"top",title:s,disableInteractive:!0,children:n})}function bn({weaponId:e}){const a=fa(e);return a?t(rt,{weapon:a}):null}function rt({weapon:e}){const a=(e==null?void 0:e.key)&&Ve(e.key),n=_.useMemo(()=>a&&e&&na([a.data,Oe(e)]),[a,e]);if(!e||!a||!n)return null;const s=l(v,{children:[t(_e,{node:n.get(xe.weapon.main)}),t(_e,{node:n.get(xe.weapon.sub)})]});return l(W,{sx:{height:"100%",maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:[t(v,{display:"flex",flexDirection:"column",alignContent:"flex-end",className:`grad-${a.rarity}star`,children:t(Sn,{sheet:a,addlText:s,children:t(v,{component:"img",src:sa(e.key,e.ascension>=2),maxWidth:"100%",maxHeight:"100%",sx:{mt:"auto"}})})}),t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:t("strong",{children:t(k,{color:"primary",children:Fe.getLevelString(e)})})}),a.hasRefinement&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:l(k,{color:"secondary",children:["R",e.refinement]})})})]})}function _e({node:e}){return l(g,{children:[e.info.icon," ",ra(e)]})}function _n({hideWeapon:e=!1}){var n;const{data:a}=_.useContext(Q);return t(v,{children:l($,{container:!0,columns:e?5:6,spacing:.5,children:[!e&&t($,{item:!0,xs:1,height:"100%",children:t(bn,{weaponId:((n=a.get(p.weapon.id).value)==null?void 0:n.toString())??""})}),t(Cn,{})]})})}function Cn(){const e=j(),{data:a}=_.useContext(Q),n=Tt.map(s=>{var o;return[s,e.arts.get(((o=a.get(p.art[s].id).value)==null?void 0:o.toString())??"")]});return t(ce,{children:n.map(([s,o])=>t($,{item:!0,xs:1,children:t(xn,{artifactObj:o,slotKey:s})},s))})}function Dn({weapon:e}){return t(v,{children:l($,{container:!0,columns:e?6:5,spacing:.5,sx:{},children:[e&&t($,{item:!0,xs:1,height:"100%",children:t(rt,{weapon:e})}),t($,{item:!0,xs:5,children:t(Et,{sx:{backgroundColor:"info.main",height:"44px",display:"flex",justifyContent:"center",alignItems:"center"},children:t(g,{children:"TC Build"})})})]})})}function ot(e,a,n){const s=Jt(e,a),o=He(e,"icon",a);return n&&s?s:o||""}function In({children:e,characterKey:a,onClick:n}){const{gender:s}=E(),{silly:o}=_.useContext(we),r=le(a),i=_.useCallback(d=>t(O,{onClick:n,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:d}),[n]),c=He(a,"banner",s);return t(qe,{condition:!!n,wrapper:i,children:l(v,{display:"flex",position:"relative",className:c?void 0:`grad-${r.rarity}star`,sx:{"&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${c})`,backgroundPosition:"center",backgroundSize:"cover"}},width:"100%",children:[t(v,{flexShrink:1,component:"img",src:ot(a,s,o),sx:{maxWidth:"40%"},alignSelf:"flex-end",display:"flex",flexDirection:"column",zIndex:1}),t(v,{flexGrow:1,sx:{py:1,pr:1},display:"flex",flexDirection:"column",zIndex:1,justifyContent:"space-between",children:e})]})})}function wn({characterKey:e}){const{gender:a}=E(),{data:n}=_.useContext(Q),s=n.get(p.charEle).value,o=n.get(p.lvl).value,r=n.get(p.constellation).value,i=n.get(p.asc).value,c=n.get(p.total.autoBoost).value,d=n.get(p.total.skillBoost).value,h=n.get(p.total.burstBoost).value,f=n.get(p.total.auto).value,u=n.get(p.total.skill).value,m=n.get(p.total.burst).value,b=le(e);return l(ce,{children:[t(N,{label:t(g,{variant:"subtitle1",children:t(Me,{characterKey:e,gender:a})}),size:"small",color:s,sx:{opacity:.85}}),l(v,{display:"flex",gap:1,sx:{textShadow:"0 0 5px gray"},alignItems:"center",children:[l(v,{children:[l(g,{component:"span",variant:"h6",whiteSpace:"nowrap",children:["Lv. ",o]}),l(g,{component:"span",variant:"h6",color:"text.secondary",children:["/",Re[i]]})]}),t(g,{component:"span",whiteSpace:"nowrap",sx:{opacity:.85},children:t($e,{color:`roll${r<3?3:r}`,children:t(Ie,{color:"white",children:l("strong",{children:["C",r]})})})})]}),l(v,{display:"flex",gap:1,sx:{opacity:.85},children:[t(N,{size:"small",color:c?"info":"secondary",label:t("strong",{children:f})}),t(N,{size:"small",color:d?"info":"secondary",label:t("strong",{children:u})}),t(N,{size:"small",color:h?"info":"secondary",label:t("strong",{children:m})})]}),t(g,{variant:"h6",lineHeight:1,children:t(Le,{stars:b.rarity,colored:!0,inline:!0})})]})}function is({characterKey:e}){const{gender:a}=E(),n=le(e),s=q(e,a);return l(ce,{children:[t(N,{label:t(g,{variant:"subtitle1",children:t(Me,{characterKey:e,gender:a})}),size:"small",color:s.elementKey,sx:{opacity:.85}}),t(v,{mt:1,children:t(g,{variant:"h4",children:t($e,{children:"NEW"})})}),t(g,{mt:1.5,children:t(Le,{stars:n.rarity,colored:!0})})]})}var fe={},Mn=G;Object.defineProperty(fe,"__esModule",{value:!0});var it=fe.default=void 0,Rn=Mn(H()),$n=V,jn=(0,Rn.default)((0,$n.jsx)("path",{d:"M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5 6 4.5H6z"}),"Checkroom");it=fe.default=jn;var pe={},kn=G;Object.defineProperty(pe,"__esModule",{value:!0});var ct=pe.default=void 0,Bn=kn(H()),Tn=V,En=(0,Bn.default)((0,Tn.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");ct=pe.default=En;var me={},An=G;Object.defineProperty(me,"__esModule",{value:!0});var lt=me.default=void 0,zn=An(H()),Nn=V,On=(0,zn.default)((0,Nn.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");lt=me.default=On;function Wn({characterKey:e,onClick:a,onMouseDown:n,onMouseEnter:s,hoverChild:o}){const r=Pe(e),{favorite:i}=ma(e),{gender:c}=E(),{silly:d}=_.useContext(we),h=q(e,c),f=_.useCallback(()=>a==null?void 0:a(e),[e,a]),u=_.useCallback(K=>t(O,{onClick:f,onMouseDown:n,onMouseEnter:s,children:K}),[f,n,s]),[m,b,I]=At();return t(je,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!o&&m,onClose:I,onOpen:b,title:o,children:t(W,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:l(qe,{condition:!!a||!!n||!!s,wrapper:u,children:[t(v,{display:"flex",className:`grad-${h.rarity}star`,children:t(v,{component:"img",src:ot(e,c,d),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),r&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:t("strong",{children:l(k,{color:"primary",children:[r.level,"/",Re[r.ascension]]})})}),t(v,{sx:{position:"absolute",top:0,right:0},children:i?t(Ke,{fontSize:"small"}):t(lt,{fontSize:"small"})}),r&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:l(k,{color:"secondary",children:["C",r.constellation]})})})]})})})}function Hn({index:e}){return t(W,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:t(v,{component:"img",src:de.team[`team${e+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}const Ce=oa(zt({dyn:{...p.art,...p.artSet}})),Gn={art:ke([...Nt,...Be],e=>Ce.dyn[e]),artSet:B(p.artSet,(e,a)=>Ce.dyn[a])};function cs(e,a,n){const s={base:{},values:{flower:[],plume:[],goblet:[],circlet:[],sands:[]}},o=new Set;for(const r of e){const i=Ot(r.mainStatKey,r.rarity,Math.max(Math.min(a,Wt[r.rarity]),r.level)),c={id:r.id,set:r.setKey,values:{[r.setKey]:1,[r.mainStatKey]:r.mainStatKey.endsWith("_")?i/100:i,...Object.fromEntries(r.substats.map(d=>[d.key,d.key.endsWith("_")?d.accurateValue/100:d.accurateValue]))}};delete c.values[""],s.values[r.slotKey].push(c),Object.keys(c.values).forEach(d=>o.add(d))}if(s.base=ke([...o],r=>0),n)for(const r of Object.values(s.values))r.push({id:"",values:{}});return s}function ls(e,a,n){var f;const{artifact:{sets:s},optimization:{target:o,minTotal:r}}=n;if(!o)return{};const i=(f=e[a])==null?void 0:f.target.data[0];if(!i)return{};Object.assign(i,se([i,Gn]));const c=Vt(i.display??{},o);if(!c)return{};const d=Object.keys(r).map(u=>i.total[u]).filter(u=>u);let h=Se([c,...d],i,({path:[u]})=>u!=="dyn");return h=ia(h,u=>{if(u.operation==="read"&&u.path[0]==="dyn"){const m=s[u.path[1]];if(m)return U(m);if(!Be.includes(u.path[1]))return U(0)}return u},u=>u),h=Se(h,{},u=>!1),{nodes:h}}function ds(e){const a=new Set;return ca(e,{},n=>{const s=n.path[1];return a.add(s),s},1),a}function us(e){const{artifact:{slots:a,substats:{stats:n,type:s,rarity:o}}}=e,r=B(n,(d,h)=>Math.ceil(n[h]/Ft(h,o,s))),i=Pn(a),c=Fn(a);return{minSubLines:c,minOtherRolls:Vn(Object.entries(r),i,c)}}function Vn(e,a,n=4*5){const s=e.reduce((o,[r,i])=>{const c=5-(a[r]??0);return o+Math.min(i,c)},0);return n-s}function Fn(e){return Object.values(e).reduce((a,{rarity:n,level:s})=>{const{high:o,low:r}=Pt[n];return a+(s>=4?o:r)},0)}function Pn(e){const a={};return Object.values(e).forEach(({statKey:n})=>{a[n]=(a[n]??0)+1},0),a}function qn(e){const{artifact:{slots:a,substats:{stats:n},sets:s}}=e,o=B(n,(r,i)=>Ht(r,i));return Object.values(a).forEach(({statKey:r,rarity:i,level:c})=>o[r]=(o[r]??0)+Gt(r,i,c)),{art:B(o,(r,i)=>i.endsWith("_")?R(r):U(r)),artSet:B(s,r=>U(r))}}function hs(e){const{weapon:{key:a,level:n,ascension:s,refinement:o}}=e;return{id:"",location:"",key:a,level:n,ascension:s,refinement:o,lock:!1}}function fs({teamId:e,onClick:a,hoverCard:n=!1,bgt:s}){const o=ga(e),{name:r,description:i,loadoutData:c}=o,d=j(),h=c.map(f=>{if(!f)return;const u=d.teamChars.get(f.teamCharId);if(u)return q(u.key).elementKey});return t(Te,{bgt:s,sx:{height:"100%"},children:l(v,{sx:f=>({height:"100%",display:"flex",flexDirection:"column",background:`linear-gradient(to right, ${h.map(m=>{if(!m)return"rgba(0,0,0,0)";const b=f.palette[m].main,I=pa(b);return I?`rgba(${I.r},${I.g},${I.b},0.25)`:"rgba(0,0,0,0)"}).map((m,b)=>`${m} ${b*25+12.5}%`).join(", ")})`}),children:[t(O,{onClick:()=>a(),sx:{p:1},children:l(g,{sx:{display:"flex",gap:1},children:[t("span",{children:r})," ",t(je,{title:t(g,{children:i}),children:t(qt,{})})]})}),t(v,{sx:{p:1,marginTop:"auto"},children:t($,{container:!0,columns:4,spacing:1,children:c.map((f,u)=>{var I;const m=f==null?void 0:f.teamCharId,b=m&&((I=d.teamChars.get(m))==null?void 0:I.key);return t($,{item:!0,xs:1,height:"100%",children:b?t(O,{onClick:()=>a(b),children:t(Wn,{characterKey:b,hoverChild:n&&t(Kn,{characterKey:b,teamCharId:m,teamId:e})})}):t(O,{onClick:()=>a(),children:t(Hn,{index:u})})},u)})})})]})})}function Kn({characterKey:e,teamId:a,teamCharId:n}){var ge;const s=j(),o=Pe(e),{gender:r}=E(),i=q(e,r),{name:c}=va(n),d=s.teams.getLoadoutDatum(a,n),h=s.teams.getActiveBuildName(d),f=(()=>s.teams.getLoadoutWeapon(d))(),u=(()=>{const{buildType:dt,buildTcId:ve}=d;return dt==="tc"&&ve?qn(s.buildTcs.get(ve)):Object.values(s.teams.getLoadoutArtifacts(d)).filter(ut=>ut)})(),m=hn(e,void 0,u,f),b=(ge=m==null?void 0:m[e])==null?void 0:ge.target,I=_.useMemo(()=>o&&i&&{character:o,characterSheet:i,characterDispatch:()=>{}},[o,i]),K=_.useMemo(()=>b&&m&&{data:b,teamData:m},[b,m]);return!I||!K?null:t(ja.Provider,{value:I,children:t(Q.Provider,{value:K,children:t(v,{sx:{width:300,m:-1},children:t(_.Suspense,{fallback:t(ie,{variant:"rectangular",width:"100%",height:300}),children:l(Te,{children:[t(In,{characterKey:e,children:t(wn,{characterKey:e})}),l(v,{sx:{p:1,display:"flex",flexDirection:"column",gap:1},children:[l(g,{sx:{display:"flex",gap:1,alignItems:"center"},children:[t(ct,{}),t("span",{children:c})]}),l(g,{sx:{display:"flex",gap:1,alignItems:"center"},children:[t(it,{}),t("span",{children:h})]}),(d==null?void 0:d.buildType)==="tc"&&(d!=null&&d.buildTcId)?t(Dn,{weapon:f}):t(_n,{})]})]})})})})})}export{xn as A,ja as C,xa as E,is as H,ya as S,fs as T,bn as W,Ke as a,ct as b,it as c,wa as d,Wn as e,cs as f,qn as g,Gn as h,In as i,wn as j,_n as k,us as l,ds as m,hs as n,ls as o,pa as p,va as q,os as r,Pe as s,hn as t,ga as u,ma as v,vn as w,Sn as x,un as y,ot as z};
