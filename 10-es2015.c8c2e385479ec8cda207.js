(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Ffuq:function(t,n,e){"use strict";e.r(n),e.d(n,"BuiltWithIonicPageModule",(function(){return u}));var i=e("ofXK"),o=e("3Pt+"),a=e("TEn/"),c=e("tyNb"),s=e("aepv"),r=e("fXoL"),l=e("k8HE");function d(t,n){if(1&t){const t=r.Lb();r.Kb(0,"circular-animation",3),r.Sb("animationFinish",(function(){return r.Zb(t),r.Ub().circleAnimationFinished()})),r.Jb()}}function p(t,n){1&t&&(r.Kb(0,"div",4),r.Kb(1,"h1",5),r.Kb(2,"span",6),r.Ib(3,"span",7),r.Kb(4,"span",8),r.dc(5,"BUILT WITH"),r.Jb(),r.Ib(6,"span",9),r.Jb(),r.Jb(),r.Ib(7,"ion-icon",10),r.Jb())}function m(t,n){1&t&&(r.Kb(0,"div",4),r.Kb(1,"h1",5),r.Kb(2,"span",6),r.Ib(3,"span",7),r.Kb(4,"span",8),r.dc(5,"DEVELOPED WITH"),r.Jb(),r.Ib(6,"span",9),r.Jb(),r.Jb(),r.Ib(7,"ion-icon",11),r.Jb())}function g(t,n){1&t&&(r.Kb(0,"div",4),r.Kb(1,"h1",12),r.Kb(2,"span",13),r.dc(3,"Styled"),r.Jb(),r.Kb(4,"span",13),r.dc(5,"With"),r.Jb(),r.Jb(),r.Kb(6,"h1",14),r.dc(7,"SCSS"),r.Jb(),r.Jb())}const b=[{path:"",component:(()=>{class t{constructor(t){this.navCtrl=t,this.showCircleAnimation=!1,this.techType=0}ngOnInit(){}ngAfterViewInit(){this.startBuiltWithAnimation()}startBuiltWithAnimation(){var t=document.querySelector(".ml1 .letters");t.innerHTML=t.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),s.timeline({loop:!1}).add({targets:".ml1 .letter",scale:[.3,1],opacity:[0,1],translateZ:0,easing:"easeOutExpo",duration:600,delay:(t,n)=>70*(n+1)}).add({targets:".ml1 .line",scaleX:[0,1],opacity:[.5,1],easing:"easeOutExpo",duration:700,offset:"-=875",delay:(t,n,e)=>80*(e-n)}).add({targets:".ml1",opacity:0,duration:1e3,easing:"easeOutExpo",delay:2e3,loopComplete:function(t){console.log(" Animation Loop Finished"),this.techType++},complete:()=>{this.onAnimationComplete()}})}circleAnimationFinished(){this.navCtrl.navigateRoot("experience")}onAnimationComplete(){if(console.log("Finished Animation"),2==this.techType)this.showCircleAnimation=!0;else if(0==this.techType){let t=document.getElementsByClassName("tracking-out-expand-fwd-bottom")[0];console.log("Icon element",t),t.classList.replace("tracking-out-expand-fwd-bottom","fade-in"),this.techType++,setTimeout(()=>{this.startBuiltWithAnimation()},20)}else if(1==this.techType){let t=document.getElementsByClassName("tracking-out-expand-fwd-bottom")[0];console.log("Icon element",t),t.classList.replace("tracking-out-expand-fwd-bottom","fade-in"),this.techType++,setTimeout(()=>{this.startStyledWithAnimation()},20)}else this.techType++,console.log("techType incremented",this.techType)}startStyledWithAnimation(){s.timeline({loop:!1}).add({targets:".ml15 .word",scale:[14,1],opacity:[0,1],easing:"easeOutCirc",duration:800,delay:(t,n)=>800*n}).add({targets:".ml15",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3,complete:()=>{document.getElementById("styledWithText").style.display="none",document.getElementById("scssText").classList.add("slide-in-right","slideText"),setTimeout(()=>{this.onAnimationComplete()},4e3)}})}}return t.\u0275fac=function(n){return new(n||t)(r.Hb(a.o))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-built-with-ionic"]],viewQuery:function(t,n){var e;1&t&&r.fc(a.e,!0),2&t&&r.Yb(e=r.Tb())&&(n.ionContentRef=e.first)},decls:5,vars:4,consts:[["id","builtWith_IonContent"],["location","BottomRight",3,"animationFinish",4,"ngIf"],["class","container",4,"ngIf"],["location","BottomRight",3,"animationFinish"],[1,"container"],[1,"ml1"],[1,"text-wrapper"],[1,"line","line1"],[1,"letters"],[1,"line","line2"],["src","assets/imgs/ionic.svg",1,"tracking-out-expand-fwd-bottom","ionic"],["src","assets/imgs/angular.svg",1,"tracking-out-expand-fwd-bottom","angular"],["id","styledWithText",1,"ml15"],[1,"word"],["id","scssText",2,"display","none"]],template:function(t,n){1&t&&(r.Kb(0,"ion-content",0),r.cc(1,d,1,0,"circular-animation",1),r.cc(2,p,8,0,"div",2),r.cc(3,m,8,0,"div",2),r.cc(4,g,8,0,"div",2),r.Jb()),2&t&&(r.xb(1),r.Xb("ngIf",n.showCircleAnimation),r.xb(1),r.Xb("ngIf",0===n.techType),r.xb(1),r.Xb("ngIf",1===n.techType),r.xb(1),r.Xb("ngIf",2==n.techType))},directives:[a.e,i.i,l.a,a.f],styles:["ion-content[_ngcontent-%COMP%]{--background:none;background-image:url(bg.714dfaa7c3fc94c640cf.gif);background-repeat:no-repeat;background-size:cover;background-position:40% 50%}.container[_ngcontent-%COMP%]{width:100%;height:100vh;position:fixed;background-color:rgba(0,0,0,.83);color:#fff;text-align:center}.color-change-2x[_ngcontent-%COMP%]{-webkit-animation:color-change-2x 2s linear infinite alternate both;animation:color-change-2x 2s linear infinite alternate both}@-webkit-keyframes color-change-2x{0%{background:#19dcea}to{background:#b22cff}}@keyframes color-change-2x{0%{background:#19dcea}to{background:#b22cff}}.ml1[_ngcontent-%COMP%]{font-weight:900;font-size:3.5em}.ml1[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]{display:inline-block;line-height:1em}.ml1[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]{position:relative;display:inline-block;padding-top:.1em;padding-right:.05em;padding-bottom:.15em}.ml1[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{opacity:0;position:absolute;left:0;height:3px;width:100%;background-color:#fff;transform-origin:0 0}.ml1[_ngcontent-%COMP%]   .line1[_ngcontent-%COMP%]{top:0}.ml1[_ngcontent-%COMP%]   .line2[_ngcontent-%COMP%]{bottom:0}.tracking-out-expand-fwd-bottom[_ngcontent-%COMP%]{-webkit-animation:tracking-out-expand-fwd-bottom 1s cubic-bezier(.55,.085,.68,.53) .5s reverse both;animation:tracking-out-expand-fwd-bottom 1s cubic-bezier(.55,.085,.68,.53) .5s reverse both}.ionic[_ngcontent-%COMP%]{width:100%;height:20vh;margin-top:10px}.angular[_ngcontent-%COMP%]{zoom:2;margin-top:10px;width:50%;height:15vh}@media (min-width:720px){.ionic[_ngcontent-%COMP%]{width:25%}.angular[_ngcontent-%COMP%], .ionic[_ngcontent-%COMP%]{height:10vh}}@-webkit-keyframes tracking-out-expand-fwd-bottom{0%{transform:translateZ(0) translateY(0);opacity:1}60%{opacity:.8}to{letter-spacing:1em;transform:translateZ(300px) translateY(200px);opacity:0}}@keyframes tracking-out-expand-fwd-bottom{0%{transform:translateZ(0) translateY(0);opacity:1}60%{opacity:.8}to{letter-spacing:1em;transform:translateZ(300px) translateY(200px);opacity:0}}.fade-in[_ngcontent-%COMP%]{-webkit-animation:fade-in .2s cubic-bezier(.39,.575,.565,1) reverse both;animation:fade-in .2s cubic-bezier(.39,.575,.565,1) reverse both}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ml15[_ngcontent-%COMP%]{font-weight:800;font-size:3em;text-transform:uppercase;letter-spacing:.5em;margin-top:30vh;text-align:center}.ml15[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%]{display:inline-block;line-height:1em}.slideText[_ngcontent-%COMP%]{font-size:40vh;margin-top:25vh;color:#fff;display:block!important;white-space:nowrap;text-align:center;font-weight:700}.slide-in-right[_ngcontent-%COMP%]{-webkit-animation:slide-in-right 6s cubic-bezier(.23,1,.32,1) both;animation:slide-in-right 6s cubic-bezier(.23,1,.32,1) both}@-webkit-keyframes slide-in-right{0%{transform:translateX(1500px)}to{transform:translateX(-1000px)}}@keyframes slide-in-right{0%{transform:translateX(1500px)}to{transform:translateX(-1000px)}}"]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(n){return new(n||t)},imports:[[c.i.forChild(b)],c.i]}),t})();var f=e("xOzl");let u=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(n){return new(n||t)},imports:[[i.b,o.a,a.m,f.a,h]]}),t})()}}]);