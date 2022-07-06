"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[427],{66218:function(e,t,n){n.d(t,{X:function(){return x},Z:function(){return f}});var i=n(29439),r=n(15671),o=n(43144),s=n(55942),c=n(25617),a=n(66624),l=n(26138),u=n(2139),d=n(80184),h=Promise.all([n.e(36),n.e(460)]).then(n.bind(n,72953)).then((function(e){return e.default})),f=function(){function e(t,n,i,o){var s=this;(0,r.Z)(this,e),this.key=void 0,this.sheet=void 0,this.data=void 0,this.rarity=void 0,this.weaponType=void 0,this.tr=function(e){return(0,d.jsx)(a.v,{ns:"weapon_".concat(s.key,"_gen"),key18:e})},this.passiveDescription=function(e){return s.hasRefinement?s.tr("passiveDescription.".concat(e)):""},this.rarity=i.rarity,this.weaponType=i.weaponType,this.key=t,this.sheet=n,this.data=o}return(0,o.Z)(e,[{key:"name",get:function(){return this.tr("name")}},{key:"hasRefinement",get:function(){return this.rarity>2}},{key:"passiveName",get:function(){return this.hasRefinement?this.tr("passiveName"):""}},{key:"description",get:function(){return this.tr("description")}},{key:"document",get:function(){return this.sheet.document}},{key:"milestoneLevels",get:function(){return this.hasRefinement?u.D4:u.Xu}},{key:"ambiguousLevel",value:function(e){return this.hasRefinement?(0,u.ek)(e):(0,u.nB)(e)}},{key:"getImg",value:function(e){return e<2?this.sheet.icon:this.sheet.iconAwaken}}],[{key:"getAll",get:function(){return h}}]),e}();f.get=function(e){return e?h.then((function(t){return t[e]})):void 0},f.getWeaponsOfType=function(e,t){return Object.fromEntries(Object.entries(e).filter((function(e){var n=(0,i.Z)(e,2);n[0];return n[1].weaponType===t})))},f.getLevelString=function(e){return"".concat(e.level,"/").concat(u.SJ[e.ascension])};var x=function(e,t,n,i){var r=function(t){return(0,d.jsx)(a.v,{ns:"weapon_".concat(e,"_gen"),key18:t})};return{title:r("passiveName"),icon:function(e){return(0,d.jsx)(s.Z,{size:2,sx:{m:-1},src:e.get(l.qH.weapon.asc).value<2?t:n})},action:i&&(0,d.jsx)(c.Z,{color:"success",children:i}),description:function(e){return r("passiveDescription.".concat(e.get(l.qH.weapon.refineIndex).value))}}}},98897:function(e,t,n){n.r(t),n.d(t,{default:function(){return Oe}});var i,r=n(95193),o=n(61889),s=n(68870),c=n(39504),a=n(20890),l=n(23060),u=n(30418),d=n(10757),h=n(22020),f=n(76899),x=n(3992),p=n(29439),m=n(30168),Z=n(63204),j=n(55200),g=n(9585),v=n(94721),y=n(66647),b=n(81918),w=n(72791),T=n(43504),k=n(10658),D=n(95614),C=n(71310),z=n(82095),P=n(55942),L=n(75545),S=n(947),_=n(66218),O=n(7618),G=n(42320),M=n(24351),R=n(60393),A=n(80184);function H(){var e=(0,h.$)(["page_home","ui"]).t,t=(0,w.useContext)(O.t).database,n=(0,G.Z)((function(){return S.Z.getAll}),[]),o=(0,w.useMemo)((function(){var e=t.chars.keys,i=(0,R.O)(M.N,(function(){return 0}));return n&&e.forEach((function(e){var r,o=n[e].elementKey;o||(o=null!==(r=t.chars.get(e).elementKey)&&void 0!==r?r:"anemo"),i[o]=i[o]+1})),{characterTally:i,characterTotal:e.length}}),[t,n]),s=o.characterTally,l=o.characterTotal,d=(0,G.Z)((function(){return _.Z.getAll}),[]),f=(0,w.useMemo)((function(){var e=t.weapons.values,n=(0,R.O)(M.yd,(function(){return 0}));return d&&e.forEach((function(e){var t=d[e.key].weaponType;n[t]=n[t]+1})),{weaponTally:n,weaponTotal:e.length}}),[t,d]),H=f.weaponTally,q=f.weaponTotal,W=(0,w.useMemo)((function(){var e=(0,R.O)(M.eV,(function(){return 0})),n=t.arts.values;return n.forEach((function(t){var n=t.slotKey;e[n]=e[n]+1})),{artifactTally:e,artifactTotal:n.length}}),[t]),E=W.artifactTally,U=W.artifactTotal,J=(0,u.Z)(),N=!(0,r.Z)(J.breakpoints.up("md"));return(0,A.jsxs)(x.Z,{children:[(0,A.jsx)(g.Z,{title:(0,A.jsx)(a.Z,{variant:"h5",children:e(i||(i=(0,m.Z)(["inventoryCard.title"])))}),avatar:(0,A.jsx)(Z.Z,{fontSize:"large"})}),(0,A.jsx)(v.Z,{}),(0,A.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,A.jsx)(C.Z,{children:(0,A.jsxs)(y.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:T.rU,to:"/characters",children:[(0,A.jsx)(b.Z,{label:(0,A.jsxs)("strong",{children:[e("ui:tabs.characters")," ",l]}),icon:(0,A.jsx)(j.Z,{}),sx:{flexBasis:N?"100%":"auto",flexGrow:1},color:l?"primary":"secondary"}),Object.entries(s).map((function(e){var t=(0,p.Z)(e,2),n=t[0],i=t[1];return(0,A.jsx)(b.Z,{sx:{flexGrow:1},color:i?n:"secondary",icon:(0,A.jsx)(z.Z,{icon:L.z9[n]}),label:(0,A.jsx)("strong",{children:i})},n)}))]})}),(0,A.jsx)(C.Z,{children:(0,A.jsxs)(y.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:T.rU,to:"/weapons",children:[(0,A.jsx)(b.Z,{label:(0,A.jsxs)("strong",{children:[e("ui:tabs.weapons")," ",q]}),icon:k.Z.svg.anvil,sx:{flexBasis:N?"100%":"auto",flexGrow:1},color:q?"primary":"secondary"}),Object.entries(H).map((function(e){var t,n=(0,p.Z)(e,2),i=n[0],r=n[1];return(0,A.jsx)(b.Z,{sx:{flexGrow:1},color:r?"success":"secondary",icon:(0,A.jsx)(P.Z,{src:null===(t=k.Z.weaponTypes)||void 0===t?void 0:t[i],size:2}),label:(0,A.jsx)("strong",{children:r})},i)}))]})}),(0,A.jsx)(C.Z,{children:(0,A.jsxs)(y.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:T.rU,to:"/artifacts",children:[(0,A.jsx)(b.Z,{label:(0,A.jsxs)("strong",{children:[e("ui:tabs.artifacts")," ",U]}),icon:(0,A.jsx)(z.Z,{icon:D.xe.flower}),sx:{flexBasis:N?"100%":"auto",flexGrow:1},color:U?"primary":"secondary"}),Object.entries(E).map((function(e){var t=(0,p.Z)(e,2),n=t[0],i=t[1];return(0,A.jsx)(b.Z,{sx:{flexGrow:1},color:i?"success":"secondary",icon:(0,A.jsx)(z.Z,{icon:D.xe[n]}),label:(0,A.jsx)("strong",{children:i})},n)}))]})})]})]})}var q,W,E=n(43136),U=JSON.parse(null!==(q='["hiRjngMgHfQ","HGti4mHrmYE","zhGB108SufQ","d1O3pYM0bAc","YtHLQdL9WwA","Ate5O2UuRJE"]')?q:"[]");function J(){var e=(0,h.$)(["page_home","ui"]).t;return U.length?(0,A.jsxs)(x.Z,{children:[(0,A.jsx)(g.Z,{title:(0,A.jsx)(a.Z,{variant:"h5",component:l.Z,color:"inherit",href:"https://youtube.com/playlist?list=PLcVsEMZO5IVFQdeh8zteZwiNchObfQ684",target:"_blank",rel:"noopener",children:e(W||(W=(0,m.Z)(["vidGuideCard.title"])))}),avatar:(0,A.jsx)(E.Z,{fontSize:"large"})}),(0,A.jsx)(v.Z,{}),(0,A.jsx)(c.Z,{children:(0,A.jsx)(o.ZP,{container:!0,columns:{xs:1,sm:2},spacing:2,children:U.map((function(e){return(0,A.jsx)(o.ZP,{item:!0,xs:1,children:(0,A.jsx)(s.Z,{sx:{position:"relative",pb:"56.25%",pt:"25px",height:0,borderRadius:2,overflow:"hidden","> iframe":{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},children:(0,A.jsx)("iframe",{width:"560",height:"349",title:"Genshin Optimizer Guide",src:"https://www.youtube-nocookie.com/embed/".concat(e),frameBorder:0,allowFullScreen:!0})},e)})}))})})]}):null}var N,I,K,Q,B,V,X,F,$,Y,ee,te=n(27118),ne=n(90255),ie=n(64523),re=n(35210),oe=n(39217),se=n(18801),ce=n(40315),ae=n(40165),le=n(24518),ue=[{tooltip:"Genshin Optimizer Discord",icon:(0,A.jsx)(z.Z,{icon:te.omb}),url:"https://discord.gg/CXUbQXyfUs",color:"discord"},{tooltip:"Genshin Optimizer Github",icon:(0,A.jsx)(ne.Z,{}),url:"https://github.com/frzyc/genshin-optimizer",color:"white"},{tooltip:"Youtube (frzyc)",icon:(0,A.jsx)(E.Z,{}),url:"https://www.youtube.com/user/Frzyc",color:"red"},{tooltip:"Twitch (frzyc)",icon:(0,A.jsx)(z.Z,{icon:te.z0T}),url:"https://www.twitch.tv/frzyc",color:"twitch"},{tooltip:"Twitter (frzyc)",icon:(0,A.jsx)(ie.Z,{}),url:"https://twitter.com/frzyc",color:"twitter"},{tooltip:"Patreon (frzyc)",icon:(0,A.jsx)(z.Z,{icon:te.MkT}),url:"https://www.patreon.com/frzyc",color:"patreon"},{tooltip:"PayPal (frzyc)",icon:(0,A.jsx)(z.Z,{icon:te.PDv}),url:"https://www.paypal.com/donate?hosted_button_id=WAHN2DGLCXPZW",color:"paypal"}],de=[{title:function(e){return e(N||(N=(0,m.Z)(["quickLinksCard.buttons.tyGuide.title"])))},icon:(0,A.jsx)(E.Z,{}),tooltip:function(e){return e(I||(I=(0,m.Z)(["quickLinksCard.buttons.tyGuide.tooltip"])))},url:"https://youtube.com/playlist?list=PLcVsEMZO5IVFQdeh8zteZwiNchObfQ684",color:"red"},{title:function(e){return e(K||(K=(0,m.Z)(["quickLinksCard.buttons.scanners.title"])))},icon:(0,A.jsx)(re.Z,{}),tooltip:function(e){return e(Q||(Q=(0,m.Z)(["quickLinksCard.buttons.scanners.tooltip"])))},to:"/scanner",color:"primary"},{title:function(e){return e(B||(B=(0,m.Z)(["quickLinksCard.buttons.kqm.title"])))},icon:(0,A.jsx)(oe.Z,{}),tooltip:function(e){return e(V||(V=(0,m.Z)(["quickLinksCard.buttons.kqm.tooltip"])))},url:"https://keqingmains.com/",color:"keqing"},{title:function(e){return e(X||(X=(0,m.Z)(["quickLinksCard.buttons.devDiscord.title"])))},icon:(0,A.jsx)(z.Z,{icon:te.omb}),tooltip:function(e){return e(F||(F=(0,m.Z)(["quickLinksCard.buttons.devDiscord.tooltip"])))},url:"https://discord.gg/8Hpz2F7AnR",color:"discord"},{title:function(e){return e($||($=(0,m.Z)(["quickLinksCard.buttons.good.title"])))},icon:(0,A.jsx)(se.Z,{}),tooltip:function(e){return e(Y||(Y=(0,m.Z)(["quickLinksCard.buttons.good.tooltip"])))},to:"/doc",color:"primary"}];function he(){var e=(0,h.$)(["page_home","ui"]).t;return(0,A.jsxs)(x.Z,{children:[(0,A.jsx)(g.Z,{title:(0,A.jsx)(a.Z,{variant:"h5",children:e(ee||(ee=(0,m.Z)(["quickLinksCard.title"])))}),avatar:(0,A.jsx)(ce.Z,{fontSize:"large"})}),(0,A.jsx)(v.Z,{}),(0,A.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,A.jsx)(s.Z,{display:"flex",justifyContent:"space-between",gap:1,children:ue.map((function(e){var t=e.tooltip,n=e.icon,i=e.url,r=e.color;return(0,A.jsx)(ae.Z,{title:t,placement:"top",arrow:!0,children:(0,A.jsx)(le.Z,{fullWidth:!0,color:r,sx:{p:1,minWidth:0},component:l.Z,href:i,target:"_blank",rel:"noopener",children:n},t)})}))}),de.map((function(t,n){var i,r=t.title,o=t.icon,s=t.tooltip,c=t.color;return"to"in t&&(i=(0,A.jsx)(le.Z,{fullWidth:!0,color:c,component:T.rU,to:t.to,startIcon:o,children:r(e)},n)),"url"in t&&(i=(0,A.jsx)(le.Z,{fullWidth:!0,color:c,component:l.Z,href:t.url,target:"_blank",rel:"noopener",startIcon:o,children:r(e)},n)),(0,A.jsx)(ae.Z,{title:s(e),placement:"top",arrow:!0,children:i})}))]})]})}var fe=n(14399),xe=n(93758),pe=n(589),me=n(17278),Ze=n(52771);function je(){var e=(0,me.Z)("ToolsDisplayTimezone",pe.z1),t=(0,p.Z)(e,1)[0].timeZoneKey,n=(0,w.useState)(new Date(Date.now()+pe.W3[t])),i=(0,p.Z)(n,2),r=i[0],o=i[1];(0,w.useEffect)((function(){var e=function n(){return o(new Date(Date.now()+pe.W3[t])),setTimeout((function(){e=n()}),Ze.vL-Date.now()%Ze.vL)}();return function(){return clearTimeout(e)}}),[t]);var s=(0,me.Z)("ToolsDisplayResin",xe._T),l=(0,p.Z)(s,2),u=l[0],d=u.resin,h=u.date,f=l[1],m=(0,w.useRef)(void 0);return(0,w.useEffect)((function(){if(d<xe.nD){var e=Date.now(),t=xe.nD-d,n=Math.min(Math.floor((e-h)/xe.T5),t),i=d+n,r=h+n*xe.T5;f({resin:i,date:r}),i<xe.nD&&(m.current=setTimeout((function(){return(e=i+1)>=xe.nD?(m.current&&clearTimeout(m.current),m.current=void 0):m.current=setTimeout((function(){return console.log("set resin",e+1)}),xe.T5),void f({resin:e,date:(new Date).getTime()});var e}),e-r))}return function(){return m.current&&clearTimeout(m.current)}}),[]),(0,A.jsxs)(x.Z,{children:[(0,A.jsx)(g.Z,{title:(0,A.jsxs)(a.Z,{variant:"h5",children:[t," ",r.toLocaleTimeString([],{timeZone:"UTC"})]}),avatar:(0,A.jsx)(fe.Z,{fontSize:"large"})}),(0,A.jsx)(v.Z,{}),(0,A.jsx)(c.Z,{children:(0,A.jsx)(C.Z,{children:(0,A.jsx)(y.Z,{sx:{p:2},component:T.rU,to:"/tools",children:(0,A.jsxs)(a.Z,{variant:"h2",sx:{textAlign:"center"},children:[(0,A.jsx)(P.Z,{src:k.Z.resin.fragile}),(0,A.jsxs)("span",{children:[d,"/",xe.nD]})]})})})})]})}var ge,ve,ye,be,we,Te,ke=n.p+"static/media/frzyc.f212a854d96a06634299.png",De=n.p+"static/media/lantua.ee2d4bdd1f99b6b5d189.png",Ce=n.p+"static/media/van.7fffd8572b1a7cebf234.png",ze=n.p+"static/media/stain.a1ff1f2839ae1dc7a7fc.png",Pe=n.p+"static/media/sin.62c279bb0076b8046b5b.png",Le=n(35893),Se=[{name:"frzyc",img:ke,title:function(e){return e(ge||(ge=(0,m.Z)(["teamCard.jobTitle.leadDev"])))},subtitle:"Insomniac in Chief",url:"https://github.com/frzyc"},{name:"Lantua",img:De,title:function(e){return e(ve||(ve=(0,m.Z)(["teamCard.jobTitle.dev"])))},subtitle:"Copium Calculator",url:"https://github.com/lantua"},{name:"Van",img:Ce,title:function(e){return e(ye||(ye=(0,m.Z)(["teamCard.jobTitle.dev"])))},subtitle:"Waverider Stowaway",url:"https://github.com/nguyentvan7"},{name:"\u2726 Sin \u2726",img:Pe,title:function(e){return e(be||(be=(0,m.Z)(["teamCard.jobTitle.mod"])))},subtitle:"Ohh, shiny.",url:""},{name:"Stain",img:ze,title:function(e){return e(we||(we=(0,m.Z)(["teamCard.jobTitle.mod"])))},subtitle:"Australia Man",url:""}];function _e(){var e=(0,h.$)(["page_home","ui"]).t;return(0,A.jsxs)(x.Z,{children:[(0,A.jsx)(g.Z,{title:(0,A.jsx)(a.Z,{variant:"h5",children:e(Te||(Te=(0,m.Z)(["teamCard.title"])))}),avatar:(0,A.jsx)(Le.Z,{fontSize:"large"})}),(0,A.jsx)(v.Z,{}),(0,A.jsx)(c.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:(0,A.jsx)(o.ZP,{container:!0,columns:{xs:6,md:5},spacing:1,children:Se.map((function(t,n){var i=t.name,r=t.img,u=t.title,d=t.subtitle,h=t.url;return(0,A.jsx)(o.ZP,{item:!0,xs:n<2?3:2,md:1,children:(0,A.jsx)(C.Z,{sx:{height:"100%"},children:(0,A.jsxs)(c.Z,{children:[(0,A.jsx)(s.Z,{component:"img",src:r,sx:{width:"100%",height:"auto",borderRadius:"50%"}}),(0,A.jsxs)(s.Z,{display:"flex",flexDirection:"column",children:[h?(0,A.jsx)(a.Z,{variant:"h6",sx:{textAlign:"center"},color:"inherit",component:l.Z,href:h,target:"_blank",rel:"noopener",children:(0,A.jsx)("strong",{children:i})}):(0,A.jsx)(a.Z,{variant:"h6",sx:{textAlign:"center"},children:(0,A.jsx)("strong",{children:i})}),(0,A.jsx)(a.Z,{variant:"subtitle1",sx:{textAlign:"center"},children:u(e)}),(0,A.jsx)(a.Z,{variant:"subtitle2",sx:{textAlign:"center",transform:"Stain"===i?"rotate(180deg)":void 0},color:"secondary.light",children:d})]})]})})},"name")}))})})]})}function Oe(){var e=(0,u.Z)(),t=(0,r.Z)(e.breakpoints.up("lg"));return d.ZP.send({hitType:"pageview",page:"/home"}),t?(0,A.jsxs)(o.ZP,{container:!0,spacing:2,direction:"row-reverse",sx:{my:2},children:[(0,A.jsxs)(o.ZP,{item:!0,xs:12,lg:5,xl:4,sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,A.jsx)(he,{}),(0,A.jsx)(je,{})]}),(0,A.jsxs)(o.ZP,{item:!0,xs:12,lg:7,xl:8,sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,A.jsx)(Ge,{}),(0,A.jsx)(H,{}),(0,A.jsx)(J,{}),(0,A.jsx)(_e,{})]})]}):(0,A.jsxs)(s.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,A.jsx)(Ge,{}),(0,A.jsx)(he,{}),(0,A.jsx)(H,{}),(0,A.jsx)(je,{}),(0,A.jsx)(J,{}),(0,A.jsx)(_e,{})]})}function Ge(){var e=(0,h.$)("page_home").t;return(0,A.jsx)(x.Z,{children:(0,A.jsx)(c.Z,{children:(0,A.jsx)(a.Z,{variant:"subtitle1",children:(0,A.jsxs)(f.c,{t:e,i18nKey:"intro",children:["The ",(0,A.jsx)("strong",{children:"ultimate"})," ",(0,A.jsx)(l.Z,{href:"https://genshin.mihoyo.com/",target:"_blank",rel:"noreferrer",children:(0,A.jsx)("i",{children:"Genshin Impact"})})," calculator, GO will keep track of your artifact/weapon/character inventory, and help you create the best build based on how you play, with that you have."]})})})})}},93758:function(e,t,n){n.d(t,{T5:function(){return g},ZP:function(){return y},_T:function(){return v},nD:function(){return j}});var i=n(29439),r=n(61889),o=n(20890),s=n(94721),c=n(39504),a=n(4834),l=n(2199),u=n(24518),d=n(72791),h=n(10658),f=n(3992),x=n(55942),p=n(17278),m=n(52771),Z=n(80184),j=160,g=8*m.g4;function v(){return{resin:j,date:(new Date).getTime()}}function y(){var e=(0,p.Z)("ToolsDisplayResin",v),t=(0,i.Z)(e,2),n=t[0],y=n.resin,b=n.date,w=t[1],T=(0,d.useRef)(void 0),k=function(e){e>=j?(T.current&&clearTimeout(T.current),T.current=void 0):T.current=setTimeout((function(){return console.log("set resin",e+1)}),g),w({resin:e,date:(new Date).getTime()})};(0,d.useEffect)((function(){if(y<j){var e=Date.now(),t=j-y,n=Math.min(Math.floor((e-b)/g),t),i=y+n,r=b+n*g;w({resin:i,date:r}),i<j&&(T.current=setTimeout((function(){return k(i+1)}),e-r))}return function(){return T.current&&clearTimeout(T.current)}}),[]);var D=y>=j?b:b+g,C=new Date(y>=j?b:b+(j-y)*g),z=(0,m.JR)(Math.abs(D-Date.now()));return(0,Z.jsxs)(f.Z,{children:[(0,Z.jsxs)(r.ZP,{container:!0,sx:{px:2,py:1},spacing:2,children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(x.Z,{src:h.Z.resin.fragile,sx:{fontSize:"2em"}})}),(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsx)(o.Z,{variant:"h6",children:"Resin Counter"})})]}),(0,Z.jsx)(s.Z,{}),(0,Z.jsx)(c.Z,{children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,Z.jsx)(r.ZP,{item:!0,children:(0,Z.jsxs)(o.Z,{variant:"h2",children:[(0,Z.jsx)(x.Z,{src:h.Z.resin.fragile}),(0,Z.jsx)(a.ZP,{type:"number",sx:{width:"2em",fontSize:"4rem"},value:y,inputProps:{min:0,max:999,sx:{textAlign:"right"}},onChange:function(e){return k(parseInt(e.target.value))}}),(0,Z.jsxs)("span",{children:["/",j]})]})}),(0,Z.jsxs)(r.ZP,{item:!0,flexGrow:1,children:[(0,Z.jsxs)(l.Z,{fullWidth:!0,children:[(0,Z.jsx)(u.Z,{onClick:function(){return k(0)},disabled:0===y,children:"0"}),(0,Z.jsx)(u.Z,{onClick:function(){return k(y-1)},disabled:0===y,children:"-1"}),(0,Z.jsx)(u.Z,{onClick:function(){return k(y-20)},disabled:y<20,children:"-20"}),(0,Z.jsx)(u.Z,{onClick:function(){return k(y-40)},disabled:y<40,children:"-40"}),(0,Z.jsx)(u.Z,{onClick:function(){return k(y-60)},disabled:y<60,children:"-60"}),(0,Z.jsx)(u.Z,{onClick:function(){return k(y+1)},children:"+1"}),(0,Z.jsx)(u.Z,{onClick:function(){return k(y+60)},children:"+60"}),(0,Z.jsxs)(u.Z,{onClick:function(){return k(j)},disabled:y===j,children:["MAX ",j]})]}),(0,Z.jsx)(o.Z,{variant:"subtitle1",sx:{mt:2},children:y<j?(0,Z.jsxs)("span",{children:["Next resin in ",z,", full Resin at ",C.toLocaleTimeString()," ",C.toLocaleDateString()]}):(0,Z.jsxs)("span",{children:["Resin has been full for at least ",z,", since ",C.toLocaleTimeString()," ",C.toLocaleDateString()]})})]}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsx)(o.Z,{variant:"caption",children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})})]})})]})}},589:function(e,t,n){n.d(t,{W3:function(){return Z},ZP:function(){return g},z1:function(){return j}});var i=n(29439),r=n(53174),o=n(54483),s=n(61889),c=n(20890),a=n(23786),l=n(94721),u=n(39504),d=n(72791),h=n(3992),f=n(33890),x=n(17278),p=n(52771),m=n(80184),Z={America:-5*p.yJ,Europe:p.yJ,Asia:8*p.yJ,"TW, HK, MO":8*p.yJ};function j(){return{timeZoneKey:Object.keys(Z)[0]}}function g(){var e=(0,x.Z)("ToolsDisplayTimezone",j),t=(0,i.Z)(e,2),n=t[0].timeZoneKey,g=t[1],v=(0,d.useCallback)((function(e){return g({timeZoneKey:e})}),[g]),y=(0,d.useState)(new Date(Date.now()+Z[n])),b=(0,i.Z)(y,2),w=b[0],T=b[1];(0,d.useEffect)((function(){var e=function t(){return T(new Date(Date.now()+Z[n])),setTimeout((function(){e=t()}),p.vL-Date.now()%p.vL)}();return function(){return clearTimeout(e)}}),[n]);var k=new Date(w);k.getUTCHours()<4?k.setUTCHours(4,0,0,0):(k=new Date(k.getTime()+p.mf)).setUTCHours(4,0,0,0);var D=k.getTime()-w.getTime(),C=(0,p.JR)(D);return(0,m.jsxs)(h.Z,{children:[(0,m.jsxs)(s.ZP,{container:!0,sx:{px:2,py:1},spacing:2,children:[(0,m.jsx)(s.ZP,{item:!0,children:(0,m.jsx)(c.Z,{variant:"h6",children:(0,m.jsx)(o.G,{icon:r.SZw,className:"fa-fw"})})}),(0,m.jsx)(s.ZP,{item:!0,flexGrow:1,children:(0,m.jsx)(c.Z,{variant:"h6",children:"Teyvat Time"})}),(0,m.jsx)(s.ZP,{item:!0,children:(0,m.jsx)(f.Z,{title:n,children:Object.keys(Z).map((function(e){return(0,m.jsx)(a.Z,{selected:n===e,disabled:n===e,onClick:function(){return v(e)},children:e},e)}))})})]}),(0,m.jsx)(l.Z,{}),(0,m.jsx)(u.Z,{children:(0,m.jsxs)(s.ZP,{container:!0,justifyContent:"center",spacing:3,children:[(0,m.jsx)(s.ZP,{item:!0,sx:{my:4},children:(0,m.jsx)(c.Z,{variant:"h2",children:w.toLocaleTimeString([],{timeZone:"UTC"})})}),(0,m.jsxs)(s.ZP,{item:!0,display:"flex",flexDirection:"column",justifyContent:"space-around",children:[(0,m.jsxs)(c.Z,{children:["Server Date: ",(0,m.jsx)("b",{children:w.toDateString()})]}),(0,m.jsxs)(c.Z,{children:["Time until reset: ",(0,m.jsx)("b",{children:C})]}),(0,m.jsxs)(c.Z,{children:["Resin until reset: ",(0,m.jsx)("b",{children:Math.floor(D/(8*p.g4))})]})]})]})})]})}},52771:function(e,t,n){n.d(t,{JR:function(){return l},e6:function(){return u},g4:function(){return o},mf:function(){return c},vL:function(){return r},yJ:function(){return s}});var i=n(60393),r=1e3,o=60*r,s=60*o,c=24*s;function a(e){var t=e%1e3,n=Math.floor(e/1e3%60),i=Math.floor(e/6e4%60);return{hours:Math.floor(e/36e5),minutes:i,seconds:n,milliseconds:t}}function l(e){var t=a(e),n=t.hours,r=t.minutes,o=t.seconds,s="Minutes";return n&&(s="Hours"),"".concat(n?"".concat(n,":"):"").concat((0,i.H_)(r,"0",2),":").concat((0,i.H_)(o,"0",2)," ").concat(s)}function u(e){var t=a(e),n=t.hours,r=t.minutes,o=t.seconds,s=t.milliseconds,c="Minutes";return n&&(c="Hours"),"".concat(n?"".concat(n,":"):"").concat((0,i.H_)(r,"0",2),":").concat((0,i.H_)(o,"0",2),".").concat((0,i.H_)(s,"0",3)," ").concat(c)}}}]);
//# sourceMappingURL=427.aa2b47d8.chunk.js.map