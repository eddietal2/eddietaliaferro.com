"use strict";(self.webpackChunkeddietaliaferro_com=self.webpackChunkeddietaliaferro_com||[]).push([[4471],{4471:function(e,n,t){t.r(n),t.d(n,{ContactPageModule:function(){return m}});var o=t(8583),i=t(665),s=t(7823),r=t(1382),a=t(4762),c=t(8720),g=t(4329);function l(e,n){if(1&e){const e=c.EpF();c.TgZ(0,"div",13),c.TgZ(1,"h2"),c._uU(2),c.qZA(),c.TgZ(3,"h5"),c._uU(4),c.qZA(),c.TgZ(5,"p"),c._uU(6),c.qZA(),c.TgZ(7,"ion-toolbar"),c.TgZ(8,"ion-buttons",14),c.TgZ(9,"ion-button",15),c.NdJ("click",function(){const n=c.CHM(e).$implicit;return c.oxw().deleteAlert(n._id)}),c._uU(10," Delete "),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=n.$implicit;c.xp6(2),c.Oqu(e.fullName),c.xp6(2),c.Oqu(e.email),c.xp6(2),c.Oqu(e.message)}}const d=[{path:"",component:(()=>{class e{constructor(e,n,t){this.router=e,this.contactService=n,this.alert=t}ngOnInit(){this.contactService.getMessages().subscribe(e=>{console.log(e),this.allMessages=e.messages,this.messageCount=e.messageCount})}deleteAlert(e){return(0,a.mG)(this,void 0,void 0,function*(){const n=yield this.alert.create({cssClass:"my-custom-class",header:"Delete Message",message:"Are you sure you want to Delete this message? It cannot be undone.",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:e=>{console.log("Confirm Cancel: blah")}},{text:"Delete",cssClass:"alert-delete-button",handler:()=>{console.log("Deleting message ..."),this.contactService.deleteMessage(e).subscribe(e=>{console.log(e),this.allMessages=e.messages,this.messageCount=e.messageCount})}}]});yield n.present();const{role:t}=yield n.onDidDismiss();console.log("onDidDismiss resolved with role",t)})}reply(){console.log("Replying to message ..."),document.getElementById("reply")}submitReply(){}}return e.\u0275fac=function(n){return new(n||e)(c.Y36(r.F0),c.Y36(g.y),c.Y36(s.Br))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-contact"]],decls:24,vars:2,consts:[[1,"ion-hide-lg-down",2,"height","100px"],[1,"ion-hide-lg-up",2,"height","50px"],[1,"ion-justify-content-center"],["size-xs","11","size-sm","9","size-md","8","size-lg","6"],["id","message-count"],["size-xs","11","size-sm","9","size-md","8","size-lg","6",2,"position","relative","top","-32px"],["class","message",4,"ngFor","ngForOf"],[1,"admin-mobile-tab","ion-hide-lg-up"],["size","3",1,"ion-text-center"],["routerLink","/admin/blogs","routerLinkActive","active-link"],["routerLink","/admin/projects","routerLinkActive","active-link"],["routerLink","/admin/contact","routerLinkActive","active-link"],["routerLink","/admin/donate","routerLinkActive","active-link"],[1,"message"],["slot","end"],["id","delete-message-button",3,"click"]],template:function(e,n){1&e&&(c.TgZ(0,"ion-content"),c.TgZ(1,"ion-grid"),c._UZ(2,"ion-row",0),c._UZ(3,"ion-row",1),c.TgZ(4,"ion-row",2),c.TgZ(5,"ion-col",3),c.TgZ(6,"h1",4),c._uU(7),c.qZA(),c.qZA(),c.qZA(),c.TgZ(8,"ion-row",2),c.TgZ(9,"ion-col",5),c.YNc(10,l,11,3,"div",6),c.qZA(),c.qZA(),c.TgZ(11,"ion-row",7),c.TgZ(12,"ion-col",8),c.TgZ(13,"a",9),c._uU(14,"Blogs"),c.qZA(),c.qZA(),c.TgZ(15,"ion-col",8),c.TgZ(16,"a",10),c._uU(17,"Projects"),c.qZA(),c.qZA(),c.TgZ(18,"ion-col",8),c.TgZ(19,"a",11),c._uU(20,"Contact"),c.qZA(),c.qZA(),c.TgZ(21,"ion-col",8),c.TgZ(22,"a",12),c._uU(23,"Donate"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(7),c.hij("Messages (",n.messageCount,")"),c.xp6(3),c.Q6J("ngForOf",n.allMessages))},directives:[s.W2,s.jY,s.Nd,s.wI,o.sg,r.yS,s.YI,r.Od,s.sr,s.Sm,s.YG],styles:["ion-grid[_ngcontent-%COMP%]{background-image:url(Matrix-Background.4d89e68e49e74a3df462.svg);background-attachment:fixed;background-size:cover;--color: white;min-height:100vh}@media only screen and (max-width: 600px){ion-grid[_ngcontent-%COMP%]{background-image:url(Matrix-Background.4d89e68e49e74a3df462.svg);background-size:cover;background-repeat:no-repeat}}#message-count[_ngcontent-%COMP%]{color:#3df63d;border-bottom:1px solid #fff;padding-bottom:1em}.reply[_ngcontent-%COMP%]{height:0;display:none}.reply[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{background:#e1e9ee;margin:2em auto;border-radius:5px;padding:.3em}.message[_ngcontent-%COMP%]{background:linear-gradient(118deg,#320534 1%,rgba(48,7,55,.5) 25%,#320534 50%,rgba(38,7,42,.5) 75%,#320534 100%);height:auto;border-radius:10px;box-shadow:1px 1px 10px #000;color:#fff;padding:1em;margin:3em auto}.message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#bc3790}.message[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#fff}.message[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: none;border-top:rgba(119,119,119,.2) solid 1px;margin-top:2em}.message[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   #delete-message-button[_ngcontent-%COMP%]{--background: linear-gradient(360deg, #D01801 -2%, #810b00, #D01801);--border-radius: 50px;width:100px;margin:0 0 0 .5em;--color: white}.message[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   #reply-message-button[_ngcontent-%COMP%]{--background: linear-gradient(360deg, #00c400 -2%, #005c47, #00c400);--border-radius: 50px;width:100px;margin:0 0 0 .5em;--color: white}.active-link[_ngcontent-%COMP%]{color:#3df63d;padding-left:.3em;padding-bottom:4px;font-weight:600;transition:.5s}"]}),e})()}];let u=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.Bz.forChild(d)],r.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.ez,i.u5,s.Pc,u]]}),e})()}}]);