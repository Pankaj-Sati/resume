!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{N3tb:function(e,i,o){"use strict";o.r(i),o.d(i,"StartScreenPageModule",(function(){return v}));var a=o("ofXK"),r=o("3Pt+"),c=o("TEn/"),s=o("tyNb"),d=o("aepv"),l=o("fXoL"),b=o("k8HE");function m(t,n){if(1&t){var e=l.Lb();l.Kb(0,"circular-animation",13),l.Sb("animationFinish",(function(){return l.Zb(e),l.Ub().circleAnimationFinished()})),l.Jb()}}var g,f,p,u=[{path:"",component:(g=function(){function e(n){t(this,e),this.navCtrl=n,this.showCircleAnimation=!1}var i,o,a;return i=e,(o=[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var t=this;d.timeline({loop:!1}).add({targets:".ml8 .circle-white",scale:[0,3],opacity:[0,1],easing:"easeInOutExpo",rotateZ:360,duration:1100}).add({targets:".ml8 .circle-container",scale:[0,1],duration:1100,easing:"easeInOutExpo",offset:"-=1000"}).add({targets:".ml8 .circle-dark",scale:[0,1],duration:1100,easing:"easeOutExpo",offset:"-=600"}).add({targets:".ml8 .letters-left",scale:[0,1],duration:1200,offset:"-=550"}).add({targets:".ml8 .bang",scale:[0,1],rotateZ:[45,15],duration:1200,offset:"-=1000"}).add({targets:".ml8",opacity:1,duration:1e3,easing:"easeOutExpo",delay:1400,complete:function(){setTimeout((function(){t.showCircleAnimation=!0}),1e3)}}),d({targets:".ml8 .circle-dark-dashed",rotateZ:360,duration:8e3,easing:"linear",loop:!0})}},{key:"circleAnimationFinished",value:function(){this.navCtrl.navigateRoot("digital-resume")}}])&&n(i.prototype,o),a&&n(i,a),e}(),g.\u0275fac=function(t){return new(t||g)(l.Hb(c.o))},g.\u0275cmp=l.Bb({type:g,selectors:[["app-start-screen"]],decls:38,vars:1,consts:[["location","BottomRight",3,"animationFinish",4,"ngIf"],[1,"mainContainer"],[1,"container"],[1,"ml8"],[1,"letters-container"],[1,"letters","letters-left"],[1,"circle","circle-dark"],[1,"circle","circle-container"],[1,"circle","circle-dark-dashed"],[1,"slide-in-top",2,"text-align","center","font-size","2em"],[1,"slide-in-top","nameContainer"],[1,"eachLetter"],[1,"eachLetter","spacing"],["location","BottomRight",3,"animationFinish"]],template:function(t,n){1&t&&(l.Kb(0,"ion-content"),l.cc(1,m,1,0,"circular-animation",0),l.Kb(2,"div",1),l.Kb(3,"div",2),l.Kb(4,"h1",3),l.Kb(5,"span",4),l.Kb(6,"span",5),l.dc(7,"Hi"),l.Jb(),l.Jb(),l.Ib(8,"span",6),l.Kb(9,"span",7),l.Ib(10,"span",8),l.Jb(),l.Jb(),l.Jb(),l.Kb(11,"h1",9),l.dc(12,"I Am"),l.Jb(),l.Kb(13,"div",10),l.Kb(14,"div",11),l.dc(15,"P"),l.Jb(),l.Kb(16,"div",11),l.dc(17,"A"),l.Jb(),l.Kb(18,"div",11),l.dc(19,"N"),l.Jb(),l.Kb(20,"div",11),l.dc(21,"K"),l.Jb(),l.Kb(22,"div",11),l.dc(23,"A"),l.Jb(),l.Kb(24,"div",11),l.dc(25,"J"),l.Jb(),l.Kb(26,"div",12),l.dc(27,"|"),l.Jb(),l.Kb(28,"div",12),l.dc(29,"|"),l.Jb(),l.Kb(30,"div",11),l.dc(31,"S"),l.Jb(),l.Kb(32,"div",11),l.dc(33,"A"),l.Jb(),l.Kb(34,"div",11),l.dc(35,"T"),l.Jb(),l.Kb(36,"div",11),l.dc(37,"I"),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&t&&(l.xb(1),l.Xb("ngIf",n.showCircleAnimation))},directives:[c.e,a.i,b.a],styles:["ion-content[_ngcontent-%COMP%]{--background:none;background-image:url(bg.714dfaa7c3fc94c640cf.gif);background-repeat:no-repeat;background-size:cover;background-position:40% 50%}.mainContainer[_ngcontent-%COMP%]{background-color:hsla(0,0%,100%,.83);position:fixed;width:100%;height:100vh;padding-top:15%}@media (min-width:720px){.mainContainer[_ngcontent-%COMP%]{padding-top:0}}.container[_ngcontent-%COMP%]{max-height:50vh;position:relative}h1.ml8[_ngcontent-%COMP%]{font-weight:900;font-size:4.5em;color:#fff;margin-right:10px;text-align:center;width:3em;height:3em}.ml8[_ngcontent-%COMP%]   .letters-container[_ngcontent-%COMP%]{position:absolute;left:0;right:0;margin:auto;top:0;bottom:0;height:1em}.ml8[_ngcontent-%COMP%]   .letters[_ngcontent-%COMP%]{position:relative;z-index:2;display:inline-block;line-height:.7em;right:-.12em;top:-.2em}.ml8[_ngcontent-%COMP%]   .bang[_ngcontent-%COMP%]{font-size:1.4em;top:auto;left:-.06em}.ml8[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{position:absolute;left:0;right:-10px;margin:auto;top:0;bottom:0}.ml8[_ngcontent-%COMP%]   .circle-white[_ngcontent-%COMP%]{width:3em;height:3em;border:2px dashed #fff;border-radius:2em}.ml8[_ngcontent-%COMP%]   .circle-dark[_ngcontent-%COMP%]{width:2.2em;height:2.2em;background-color:#4f7b86;border-radius:3em;z-index:1}.ml8[_ngcontent-%COMP%]   .circle-dark-dashed[_ngcontent-%COMP%]{border-radius:2.4em;background-color:transparent;border:2px dashed #4f7b86;width:2.3em;height:2.3em;right:0}.nameContainer[_ngcontent-%COMP%]{background:#2196f3;border-radius:10px;display:flex;color:#fff;margin:auto;width:64%;flex-direction:row;justify-content:center}.nameContainer[_ngcontent-%COMP%]   .eachLetter[_ngcontent-%COMP%]{font-size:2em;font-weight:900}.nameContainer[_ngcontent-%COMP%]   .spacing[_ngcontent-%COMP%]{visibility:hidden}.slide-in-top[_ngcontent-%COMP%]{-webkit-animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) 1s both;animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) 1s both}@-webkit-keyframes slide-in-top{0%{transform:translateY(-1000px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{transform:translateY(-1000px);opacity:0}to{transform:translateY(0);opacity:1}}"]}),g)}],h=((f=function n(){t(this,n)}).\u0275mod=l.Fb({type:f}),f.\u0275inj=l.Eb({factory:function(t){return new(t||f)},imports:[[s.i.forChild(u)],s.i]}),f),C=o("xOzl"),v=((p=function n(){t(this,n)}).\u0275mod=l.Fb({type:p}),p.\u0275inj=l.Eb({factory:function(t){return new(t||p)},imports:[[a.b,r.a,C.a,c.m,h]]}),p)}}])}();