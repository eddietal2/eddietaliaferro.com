!function(){"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(self.webpackChunkeddietaliaferro_com=self.webpackChunkeddietaliaferro_com||[]).push([[42],{42:function(t,o,i){i.r(o),i.d(o,{BlogsPageModule:function(){return Z}});var r=i(8583),l=i(665),s=i(7823),a=i(1382),g=i(4762),c=i(7797),d=i(331),u=i(8720),b=i(7775),m=i(2036);function h(e,n){if(1&e){var t=u.EpF();u.TgZ(0,"ion-row",14),u.TgZ(1,"ion-col",15),u._UZ(2,"img",16),u.qZA(),u.TgZ(3,"ion-col",17),u.TgZ(4,"h5",18),u._uU(5),u.qZA(),u.TgZ(6,"h1",19),u._uU(7),u.qZA(),u.TgZ(8,"h6",20),u._uU(9),u.qZA(),u.TgZ(10,"p",21),u._uU(11,"Visible"),u.qZA(),u.TgZ(12,"ion-toggle",22),u.NdJ("ionChange",function(e){var n=u.CHM(t).$implicit;return u.oxw().visibleToggle(e,n._id,n.title,n.visible)}),u.qZA(),u.qZA(),u.TgZ(13,"ion-col",23),u.TgZ(14,"ion-button",24),u.NdJ("click",function(){var e=u.CHM(t).$implicit;return u.oxw().editBlog(e._id)}),u._uU(15," Edit "),u.qZA(),u.TgZ(16,"ion-button",25),u.NdJ("click",function(){var e=u.CHM(t).$implicit;return u.oxw().deleteAlert(e._id)}),u._uU(17," Delete "),u.qZA(),u.qZA(),u.qZA()}if(2&e){var o=n.$implicit;u.xp6(2),u.s9C("src",o.thumbnail,u.LSH),u.xp6(3),u.Oqu(o.date),u.xp6(2),u.Oqu(o.title),u.xp6(2),u.Oqu(o.hashtags),u.xp6(3),u.s9C("checked",o.visible)}}var p,f=[{path:"",component:(p=function(){function t(n,o,i,r,l,s){e(this,t),this.router=n,this.alert=o,this.toastController=i,this.adminBlogEmitterService=r,this.loadingController=l,this.blogService=s}var o,i,r;return o=t,(i=[{key:"ngOnInit",value:function(){var e=this;null==this.adminBlogEmitterService.subsVar&&(this.adminBlogEmitterService.subsVar=this.adminBlogEmitterService.invokeAdminBlogsPageRefresh.subscribe(function(){e.getBlogs()})),this.getBlogs()}},{key:"getBlogs",value:function(){var e=this;this.blogService.getBlogs().subscribe(function(n){e.allBlogs=n,console.log(n);for(var t=0;t<e.allBlogs.length;t++)console.log(e.allBlogs[t].date),e.allBlogs[t].date=(0,c.Z)((0,d.Z)(e.allBlogs[t].date),"MMMM do, uu")})}},{key:"addBlog",value:function(){this.router.navigateByUrl("/admin/blogs/add-blog")}},{key:"deleteAlert",value:function(e){return(0,g.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var t,o=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alert.create({cssClass:"my-custom-class",header:"Delete Blog",message:"Are you sure you want to Delete this Blog Post? It cannot be undone.",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(e){console.log("Confirm Cancel: blah")}},{text:"Delete",cssClass:"alert-delete-button",handler:function(){console.log(e),o.blogService.deleteBlog(e).subscribe(function(e){o.presentLoading(e),o.allBlogs=e,o.deleteBlogToast()})}}]});case 2:return t=n.sent,n.next=5,t.present();case 5:return n.next=7,t.onDidDismiss().then();case 7:case"end":return n.stop()}},n,this)}))}},{key:"presentLoading",value:function(e){return(0,g.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingController.create({cssClass:"my-custom-class",duration:1e3});case 2:return t=n.sent,n.next=5,t.present();case 5:return n.next=7,t.onDidDismiss().then(function(){console.log(e)});case 7:case"end":return n.stop()}},n,this)}))}},{key:"deleteBlogToast",value:function(){return(0,g.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastController.create({message:"Deleted Blog!",cssClass:"danger-toast",position:"top",duration:2e3});case 2:e.sent.present();case 3:case"end":return e.stop()}},e,this)}))}},{key:"editBlog",value:function(e){this.router.navigate(["/admin/blogs/edit-blog",e])}},{key:"visibleToggle",value:function(e,n,t,o){console.log(e);var i=e.detail.checked;if(!0===i)console.log("The Blog is Visible"),this.blogService.blogVisibility(n,t,o).subscribe(function(e){console.log(e)});else{if(!1!==i)return Error("There was an error with making toggling the Blogs visibility.");console.log("The Blog is NOT Visible"),this.blogService.blogVisibility(n,t,o).subscribe(function(e){console.log(e)})}}},{key:"ngOnDestroy",value:function(){console.log("Admin Blogs Page destroyed")}}])&&n(o.prototype,i),r&&n(o,r),t}(),p.\u0275fac=function(e){return new(e||p)(u.Y36(a.F0),u.Y36(s.Br),u.Y36(s.yF),u.Y36(b.b),u.Y36(s.HT),u.Y36(m.Z))},p.\u0275cmp=u.Xpm({type:p,selectors:[["app-blogs"]],hostBindings:function(e,n){1&e&&u.NdJ("unloaded",function(){return n.ngOnDestroy()})},decls:27,vars:1,consts:[[1,"ion-justify-content-center",2,"margin-top","3em"],["id","header-button","size-xs","11","size-sm","9","size-md","9","size-lg","9","size-xl","7"],["slot","end"],[1,"green-button",3,"click"],["slot","start","name","add"],[1,"ion-justify-content-center"],["size-xs","11","size-sm","9","size-md","8","size-lg","9","size-xl","7"],["class","blog-post",4,"ngFor","ngForOf"],[1,"admin-mobile-tab","ion-hide-lg-up"],["size","3",1,"ion-text-center"],["routerLink","/admin/blogs","routerLinkActive","active-link"],["routerLink","/admin/projects","routerLinkActive","active-link"],["routerLink","/admin/contact","routerLinkActive","active-link"],["routerLink","/admin/donate","routerLinkActive","active-link"],[1,"blog-post"],["size-xs","2","size-sm","2","size-lg","2"],["alt","Blog Post Thumbnail",1,"blog-thumbnail",3,"src"],["size-xs","10","size-sm","10","size-lg","8",1,"blog-info"],[1,"blog-date"],[1,"blog-title"],[1,"blog-hashtags"],[2,"display","inline"],[3,"checked","ionChange"],["size-xs","11","size-sm","11","size-lg","2",1,"view-page-button","ion-text-right"],[1,"gold-button",3,"click"],[1,"red-button",3,"click"]],template:function(e,n){1&e&&(u.TgZ(0,"ion-content"),u.TgZ(1,"ion-grid"),u.TgZ(2,"ion-row",0),u.TgZ(3,"ion-col",1),u.TgZ(4,"ion-toolbar"),u.TgZ(5,"ion-title"),u._uU(6,"Blogs"),u.qZA(),u.TgZ(7,"ion-buttons",2),u.TgZ(8,"ion-button",3),u.NdJ("click",function(){return n.addBlog()}),u._UZ(9,"ion-icon",4),u._uU(10," Add Blog "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(11,"ion-row",5),u.TgZ(12,"ion-col",6),u.YNc(13,h,18,5,"ion-row",7),u.qZA(),u.qZA(),u.TgZ(14,"ion-row",8),u.TgZ(15,"ion-col",9),u.TgZ(16,"a",10),u._uU(17,"Blogs"),u.qZA(),u.qZA(),u.TgZ(18,"ion-col",9),u.TgZ(19,"a",11),u._uU(20,"Projects"),u.qZA(),u.qZA(),u.TgZ(21,"ion-col",9),u.TgZ(22,"a",12),u._uU(23,"Contact"),u.qZA(),u.qZA(),u.TgZ(24,"ion-col",9),u.TgZ(25,"a",13),u._uU(26,"Donate"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(13),u.Q6J("ngForOf",n.allBlogs))},directives:[s.W2,s.jY,s.Nd,s.wI,s.sr,s.wd,s.Sm,s.YG,s.gu,r.sg,a.yS,s.YI,a.Od,s.ho,s.w],styles:["ion-grid[_ngcontent-%COMP%]{background-image:url(Matrix-Background.4d89e68e49e74a3df462.svg);background-attachment:fixed;background-size:cover;--color: white;min-height:100vh;padding-bottom:10em}@media only screen and (max-width: 600px){ion-grid[_ngcontent-%COMP%]{background-image:url(Matrix-Background.4d89e68e49e74a3df462.svg);background-size:cover;background-repeat:no-repeat}}ion-toolbar[_ngcontent-%COMP%]{margin:2.5em 0;--background: #6e6e6e9e;border-radius:5px;padding:0 1em}ion-toolbar[_ngcontent-%COMP%]   .green-button[_ngcontent-%COMP%]{width:150px;display:block;margin:30px 0;--background: linear-gradient(360deg, #3df63d -2%, #005c47, #3df63d);--color: white;--border-radius: 50px;--box-shadow: none}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{position:relative;left:-20px}.blog-post[_ngcontent-%COMP%]{height:auto;background:linear-gradient(118deg,#320534 1%,rgba(48,7,55,.5) 25%,#320534 50%,rgba(38,7,42,.5) 75%,#320534 100%);padding:30px;transition:.5s;margin:2em 0;border-radius:10px;border-left:16px solid #1d071f;display:flex;align-items:center}.blog-post[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{margin:2.5em 0;--background: #0c0e0c;border-radius:5px;padding:0 1em}.blog-post[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{position:relative;left:-20px}.blog-post[_ngcontent-%COMP%]   .grey-button[_ngcontent-%COMP%]{width:150px;display:block;margin:30px 0;--background: linear-gradient(360deg, #777777 -2%, #333, #777777);--color: white;--border-radius: 50px;--box-shadow: none}.blog-post[_ngcontent-%COMP%]   .blog-info[_ngcontent-%COMP%]{display:inline-block}.blog-post[_ngcontent-%COMP%]   .blog-thumbnail[_ngcontent-%COMP%]{width:100%;border-radius:100px;margin-right:2.5em}.blog-post[_ngcontent-%COMP%]   .blog-date[_ngcontent-%COMP%]{color:#999;margin:0;opacity:.6}.blog-post[_ngcontent-%COMP%]   .blog-title[_ngcontent-%COMP%]{margin:0;color:#fff;font-size:1.2em}.blog-post[_ngcontent-%COMP%]   .blog-hashtags[_ngcontent-%COMP%]{margin:0;color:#3df63d;padding:0 1em 1em 0;border-bottom:1px solid #777}.blog-post[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%]{position:relative;top:12px;--background: #000;--background-checked: #999;--handle-background: #BC3790;--handle-background-checked: #3df63d}@media only screen and (max-width: 600px){.blog-post[_ngcontent-%COMP%]   .blog-thumbnail[_ngcontent-%COMP%]{height:60px;margin-right:.75em}.blog-post[_ngcontent-%COMP%]   .green-button[_ngcontent-%COMP%]{margin-top:3em}.blog-post[_ngcontent-%COMP%]:hover{margin:2.3em 0;background:#0c0e0c;border-left:none}}.active-link[_ngcontent-%COMP%]{color:#3df63d;padding-left:.3em;padding-bottom:4px;font-weight:600;transition:.5s}"]}),p)},{path:"add-blog",loadChildren:function(){return Promise.all([i.e(8592),i.e(2070)]).then(i.bind(i,2070)).then(function(e){return e.AddBlogPageModule})}},{path:"edit-blog/:id",loadChildren:function(){return Promise.all([i.e(8592),i.e(4338)]).then(i.bind(i,4338)).then(function(e){return e.EditBlogPageModule})}}],v=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[[a.Bz.forChild(f)],a.Bz]}),n}(),Z=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[[r.ez,l.u5,s.Pc,v]]}),n}()}}])}();