(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[29],{1005:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var n=a(5),i=a(3),r=a(103),c=a(51),o=a(17),s=a(353),l=a(986),d=a(468),h=a(397),j=a(350),b=a(372),u=a(469),m=a(79),x=a(272),f=a(221),O=a(265),p=a(1),g=a(84),y=a(95),v=a(131),w=a(58),k=a(278),G=a(276),z=a(301),B=a.p+"static/media/art_editor.e1c49f87.png",C=a.p+"static/media/build_generator.2002f43b.png",K=a.p+"static/media/character_editor.b21d8cc2.png",A=a.p+"static/media/talent_scr.3bb2e9ad.png",T=a.p+"static/media/tools.9c56cfe9.png",L=a(0);function _(e){var t=e.image,a=e.title,n=e.content,r=e.t,c=Object(p.useState)(!1),o=Object(i.a)(c,2),l=o[0],u=o[1];return Object(L.jsxs)(G.a,{children:[Object(L.jsx)(d.a,{sx:{p:1,pb:0},children:Object(L.jsx)(h.a,{component:"img",image:t,alt:"test",sx:{width:"100%",height:"auto"}})}),Object(L.jsx)(j.a,{action:Object(L.jsx)(z.a,{expand:l,onClick:function(){return u(!l)},"aria-expanded":l,"aria-label":"show more",children:Object(L.jsx)(s.a,{})}),titleTypographyProps:{variant:"subtitle1"},title:a(r)}),Object(L.jsx)(b.a,{in:l,timeout:"auto",unmountOnExit:!0,children:Object(L.jsx)(d.a,{sx:{pt:0},children:n(r)})})]})}var E=[{image:B,title:function(e){return Object(L.jsx)(u.a,{component:w.b,to:"/artifact",children:Object(L.jsx)(y.a,{i18nKey:"features.artifact.title",t:e,children:"Artifact Editor & Inventory"})})},content:function(e){return Object(L.jsx)(m.a,{component:"div",variant:"body1",color:"text.secondary",children:Object(L.jsx)(y.a,{i18nKey:"features.artifact.content",t:e,children:Object(L.jsxs)("ul",{children:[Object(L.jsx)("li",{children:"Fully featured Artifact editor."}),Object(L.jsx)("li",{children:"Add Artifacts by scanning a screenshot."}),Object(L.jsx)("li",{children:"Automatically calculate the exact rolled value of each artifact."}),Object(L.jsx)("li",{children:"Calculate substat efficiency, using the roll calculations. Use a single number to determine whether to keep or trash an artifact!"}),Object(L.jsx)("li",{children:"Maintains a completely sortable, filterable artifact inventory."}),Object(L.jsxs)("li",{children:["Imports artifact database from ",Object(L.jsx)(u.a,{component:w.b,to:"/scanner",children:"3rd party automatic scanners"}),"."]})]})})})}},{image:K,title:function(e){return Object(L.jsx)(u.a,{component:w.b,to:"/character",children:Object(L.jsx)(y.a,{i18nKey:"features.characterEditor.title",t:e,children:"Character & Weapon Editor"})})},content:function(e){return Object(L.jsx)(m.a,{component:"div",variant:"body1",color:"text.secondary",children:Object(L.jsx)(y.a,{i18nKey:"features.characterEditor.content",t:e,children:Object(L.jsxs)("ul",{children:[Object(L.jsx)("li",{children:"Fully featured Character editor."}),Object(L.jsx)("li",{children:"Automatically populate character stats at every milestone level/ascension."}),Object(L.jsx)("li",{children:"Fully editable stats for customization."}),Object(L.jsx)("li",{children:"Calculate current stats based on weapon/artifacts."}),Object(L.jsx)("li",{children:"Fully featured weapon editor, with milestone level/ascension stats"}),Object(L.jsx)("li",{children:"Apply conditional passives, from talents & weapons & artifacts to accurately mimic in-game conditions. "})]})})})}},{image:A,title:function(e){return Object(L.jsx)(u.a,{component:w.b,to:"/character",children:Object(L.jsx)(y.a,{i18nKey:"features.characterCalc.title",t:e,children:"Character Damage Calculations"})})},content:function(e){return Object(L.jsx)(m.a,{component:"div",variant:"body1",color:"text.secondary",children:Object(L.jsx)(y.a,{i18nKey:"features.characterCalc.content",t:e,children:Object(L.jsxs)("ul",{children:[Object(L.jsx)("li",{children:"All the details for every character's talents."}),Object(L.jsx)("li",{children:"All numbers should reflect real in game damage (within 1% error)."}),Object(L.jsx)("li",{children:"Conditional stats and modifications from every Constellation accounted for."}),Object(L.jsx)("li",{children:"Shows calculations for all the numbers, along with formulas."}),Object(L.jsx)("li",{children:"Enemy editor with level/ resistance fields to customize damage calculations."}),Object(L.jsx)("li",{children:"Account for elemental infusion for normal/charged/plunging attacks."}),Object(L.jsx)("li",{children:"Real time damage calculations."})]})})})}},{image:C,title:function(e){return Object(L.jsx)(u.a,{component:w.b,to:"/build",children:Object(L.jsx)(y.a,{i18nKey:"features.build.title",t:e,children:"Build Generator"})})},content:function(e){return Object(L.jsx)(m.a,{component:"div",variant:"body1",color:"text.secondary",children:Object(L.jsx)(y.a,{i18nKey:"features.build.content",t:e,children:Object(L.jsxs)("ul",{children:[Object(L.jsx)("li",{children:"Generates builds for specific characters using artifact inventory."}),Object(L.jsx)("li",{children:"Allows the maximization of character build based on specified optimization target."}),Object(L.jsx)("li",{children:"Limit builds by artifact sets, main stats..."}),Object(L.jsx)("li",{children:"Fully featured build settings to fine-tune build results."}),Object(L.jsx)("li",{children:"Compare generated artifact build against artifacts currently on character."}),Object(L.jsx)("li",{children:"Use conditional stats from artifact sets, e.g. Embled of Severed Fate's 4-set Elemental Burst DMG Bonus conversion, as part of the build calculations."})]})})})}},{image:T,title:function(e){return Object(L.jsx)(u.a,{component:w.b,to:"/tools",children:Object(L.jsx)(y.a,{i18nKey:"features.tools.title",t:e,children:"Tools and Gadgets"})})},content:function(e){return Object(L.jsx)(m.a,{component:"div",variant:"body1",color:"text.secondary",children:Object(L.jsx)(y.a,{i18nKey:"features.tools.content",t:e,children:Object(L.jsxs)("ul",{children:[Object(L.jsx)("li",{children:"Server time, with countdown to reset."}),Object(L.jsx)("li",{children:"Resin Counter."}),Object(L.jsx)("li",{children:"Experience Calculator, to optimize EXP. books usage."})]})})})}}];function D(e){var t=e.href,a=e.icon,n=e.children;return Object(L.jsx)(x.a,{variant:"text",size:"small",component:"a",href:t,target:"_blank",rel:"noreferrer",startIcon:a,children:n})}function I(){var e=Object(v.a)("page_home").t;return g.a.pageview("/home"),Object(L.jsxs)(f.a,{sx:{mt:1,"> div":{mb:1}},children:[Object(L.jsx)(k.a,{children:Object(L.jsx)(d.a,{children:Object(L.jsxs)(y.a,{i18nKey:"intro",t:e,children:[Object(L.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:"What is Genshin Optimizer?"}),Object(L.jsxs)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["Genshin Optimizer (GO) is an open-source fan-made website for the action-RPG gacha game ",Object(L.jsx)(u.a,{href:"https://genshin.mihoyo.com/",target:"_blank",rel:"noreferrer",children:Object(L.jsx)("strong",{children:"Genshin Impact"})}),". It is mainly intended to help players with the complex aspect of the game: Artifact Optimization. Since artifacts are heavily RNG-based elements that directly contribute to how effective your characters are in the game, GO will try to find the best artifacts for your characters based on your current artifact inventory."]}),Object(L.jsx)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:"GO can keep track of your artifacts, and allows more ease in filtering/comparing artifacts, it serves as a tool to help user find good artifacts in their inventory to level up, and bad artifacts to use as fodder."}),Object(L.jsx)(m.a,{variant:"body1",color:"text.secondary",children:"Since GO can replicate the exact stats of any character, along with calculate all their damage numbers to up 1% accuracy, it can also serve as a Damage calculator, and a tool for theory crafting."})]})})}),Object(L.jsx)(k.a,{sx:{width:"100%"},children:Object(L.jsxs)(d.a,{children:[Object(L.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:Object(L.jsx)(y.a,{i18nKey:"quickLinks.title",t:e,children:"Quick Links"})}),Object(L.jsx)(G.a,{sx:{mb:1},children:Object(L.jsxs)(d.a,{children:[Object(L.jsx)(m.a,{variant:"h6",gutterBottom:!0,children:Object(L.jsx)(y.a,{i18nKey:"quickLinks.scannerTitle",t:e,children:"Do you want to automate some of the artifact input process?"})}),Object(L.jsx)(m.a,{color:"text.secondary",gutterBottom:!0,children:Object(L.jsx)(y.a,{i18nKey:"quickLinks.scannerText",t:e,children:"Here is a list of compatible automatic scanners that can feed data into GO. These programs will automatically scan artifacts from your game, and exporting that data into a file. This file can then be imported to GO."})}),Object(L.jsx)(x.a,{component:w.b,size:"small",to:"/scanner",variant:"contained",startIcon:Object(L.jsx)(l.a,{}),children:Object(L.jsx)(y.a,{i18nKey:"quickLinks.scannerBtn",t:e,children:"Scanner List"})})]})}),Object(L.jsx)(G.a,{children:Object(L.jsxs)(d.a,{children:[Object(L.jsx)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:Object(L.jsxs)(y.a,{i18nKey:"quickLinks.goGithubText",t:e,children:["GO is completely open-source, written in TypeScript, with the ",Object(L.jsx)(o.a,{icon:r.e}),"React framework."]})}),Object(L.jsx)(x.a,{size:"small",variant:"contained",component:"a",href:"https://github.com/frzyc/genshin-optimizer",target:"_blank",rel:"noreferrer",startIcon:Object(L.jsx)(o.a,{icon:r.b}),children:Object(L.jsx)(y.a,{i18nKey:"quickLinks.goGithubBtn",t:e,children:"Genshin Optimizer Github"})})]})})]})}),Object(L.jsx)(k.a,{children:Object(L.jsxs)(d.a,{children:[Object(L.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:Object(L.jsx)(y.a,{i18nKey:"features.title",t:e,children:"Features"})}),Object(L.jsx)(O.a,{container:!0,spacing:2,children:E.map((function(t,a){return Object(L.jsx)(O.a,{item:!0,xs:12,md:4,children:Object(L.jsx)(_,Object(n.a)(Object(n.a)({},t),{},{t:e}))},a)}))})]})}),Object(L.jsx)(k.a,{children:Object(L.jsxs)(O.a,{container:!0,children:[Object(L.jsx)(O.a,{item:!0,xs:12,md:6,children:Object(L.jsx)(d.a,{children:Object(L.jsxs)(y.a,{i18nKey:"helpDe",t:e,children:[Object(L.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:"Want to help the developer?"}),Object(L.jsxs)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["If you want to financially support the developer, please consider donating via ",Object(L.jsx)(D,{href:"https://www.paypal.com/donate?hosted_button_id=WAHN2DGLCXPZW",icon:Object(L.jsx)(o.a,{icon:r.d}),children:"Paypal"})," or ",Object(L.jsx)(D,{href:"https://www.patreon.com/frzyc",icon:Object(L.jsx)(o.a,{icon:r.c}),children:"Patreon"}),". GO does not host ads, and will not lock any features behind a paywall."]}),Object(L.jsxs)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["If you want to help with localization/translation of GO to your native language, request a feature or report a bug, join our ",Object(L.jsx)(D,{href:"https://discord.gg/CXUbQXyfUs",icon:Object(L.jsx)(o.a,{icon:r.a}),children:"discord"}),". This is where you will find more GO-related information, and checkout what is being actively worked on."]}),Object(L.jsxs)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["You can also join the ",Object(L.jsx)(D,{href:"https://discord.gg/8Hpz2F7AnR",icon:Object(L.jsx)(o.a,{icon:r.a}),children:"Genshin Dev discord"})," if you are interested in creating Genshin apps."]})]})})}),Object(L.jsx)(O.a,{item:!0,xs:12,md:6,children:Object(L.jsx)(d.a,{sx:{width:"100%",height:"100%",minHeight:300},children:Object(L.jsx)("iframe",{src:"https://discord.com/widget?id=785153694478893126&theme=dark",width:"100%",height:"100%",frameBorder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",title:"discordFrame"})})})]})}),Object(L.jsx)(k.a,{children:Object(L.jsx)(d.a,{children:Object(L.jsxs)(y.a,{i18nKey:"credits",t:e,children:[Object(L.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:"Credit where credit is due"}),Object(L.jsxs)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["GO is the culmination of hundreds of hours of programming/designing by two maintainers, ",Object(L.jsx)(D,{href:"https://github.com/frzyc",icon:Object(L.jsx)(o.a,{icon:c.E}),children:Object(L.jsx)("strong",{children:" frzyc"})})," and ",Object(L.jsx)(D,{href:"https://github.com/lantua",icon:Object(L.jsx)(o.a,{icon:c.E}),children:Object(L.jsx)("strong",{children:" lantua"})}),". There are also a ton of other resources that aid in the creation of this website. Time to take a bow and thank them."]}),Object(L.jsx)(m.a,{component:"div",variant:"body1",color:"text.secondary",children:Object(L.jsxs)("ul",{children:[Object(L.jsxs)("li",{children:["Thanks to everyone in the community, and especially people on our ",Object(L.jsx)(u.a,{href:"https://discord.gg/CXUbQXyfUs",target:"_blank",rel:"noreferrer",children:"discord"})," for providing feedback and helping us improve this tool."]}),Object(L.jsxs)("li",{children:["Thanks to ",Object(L.jsx)(u.a,{href:"https://github.com/Dimbreath",target:"_blank",rel:"noreferrer",children:"Dimbreath"}),", for giving us a reliable, consistent source for Genshin data and numbers. All our calculations would be moot without them."]}),Object(L.jsxs)("li",{children:["Some of our Genshin images are directly yoinked from ",Object(L.jsx)(u.a,{href:"https://genshin-impact.fandom.com/",target:"_blank",rel:"noreferrer",children:"The Genshin Impact Wiki"}),", so a serendipitous thanks for them."]}),Object(L.jsx)("li",{children:"Special thanks to members of our community who has gone the extra mile, and has been helping us with localization/translation of GO to other languages, help us test formulas by recording in-game data, and programmers who has helped us with source code contributions."}),Object(L.jsx)("li",{children:"Thanks for everyone else, for sharing this tool, and getting more people to use this tool."}),Object(L.jsxs)("li",{children:["Lastly, and most importantly, thank ",Object(L.jsx)("strong",{children:"YOU"}),", for using GO right now."]})]})})]})})})]})}},276:function(e,t,a){"use strict";var n=a(10),i=a(467),r=Object(n.a)(i.a)((function(e){return{backgroundColor:e.theme.palette.contentLight.main}}));t.a=r},278:function(e,t,a){"use strict";var n=a(10),i=a(467),r=Object(n.a)(i.a)((function(e){return{backgroundColor:e.theme.palette.contentDark.main}}));t.a=r},301:function(e,t,a){"use strict";var n=a(5),i=a(132),r=a(10),c=a(273),o=a(0),s=Object(r.a)((function(e){e.expand;var t=Object(i.a)(e,["expand"]);return Object(o.jsx)(c.a,Object(n.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}}));t.a=s}}]);
//# sourceMappingURL=29.5d6d7495.chunk.js.map