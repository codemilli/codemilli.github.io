!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.rectsColliding=function(t,e){return!(t.x>e.x+e.w||t.x+t.w<e.x||t.y>e.y+e.h||t.y+t.h<e.y)},e.isMouseInRectangle=function(t,e,i){return t>i[0]&&t<i[0]+i[2]&&e>i[1]&&e<i[1]+i[3]}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(){R.y=height/2,U=frameCount,window._frameCount=frameCount-U,N=!0}function a(){I+=1,P.value=0,P.jumped=0,U=frameCount,window._frameCount=0,R.y=height/2,R.status="live",F=[]}function s(){E=loadImage("/static/images/aramy.png"),C=loadSound("/static/sound/jump.wav"),M=loadImage("/static/images/background_01/layer_01.png"),A=loadImage("/static/images/background_01/layer_02.png"),z=loadImage("/static/images/background_01/layer_03.png"),L=loadImage("/static/images/background_01/layer_04.png"),W=loadImage("/static/images/background_01/layer_05.png")}function u(){console.log(Y,H),createCanvas(Y,H),O=new x.default(M,A,z,L,W),R=new y.default(E,C)}function r(){return clear(),O.show(),"dead"===R.status?c():(window._frameCount=frameCount-U,N?(R.update(),R.show(),h(),_frameCount%80==0&&F.push(new _.default),void P.show()):d())}function h(){F=F.filter(function(t){return t.show(),"dead"===R.status||(t.update(),t.isPassed(R)&&P.up(),!(t.x+t.w<0||(t.hits(R)&&(R.die(),c()),0)))})}function l(){" "===key&&R.jump(N&&"dead"!==R.status,P)}function c(){var t=width/2,e=height/2;R.show(),h(),textFont("sans-serif"),textSize(45),fill(0),text(P.value,t-textWidth(P.value)/2,e-200),textFont("Indie Flower"),textSize(Z),fill(255,0,0),text("RETRY",t-textWidth("RETRY")/2,e-70),X=[t-textWidth("RETRY")/2,e-70-Z/2,textWidth("RETRY"),Z]}function d(){var t=width/2,e=height/2;R.show(),R.bounce(),textFont("Indie Flower"),textSize(55),fill(0),text(T,t-textWidth(T)/2,e-200),textSize(Z),fill(255,0,0),text(j,t-textWidth(j)/2,e-80),X=[t-textWidth(j)/2,e-80-Z/2,textWidth(j),Z]}var f=i(2),p=n(f),w=i(3),y=n(w),m=i(4),g=n(m),v=i(5),_=n(v),b=i(6),x=n(b),S=i(0),T=(i(7),p.default.TITLE),j=p.default.START_AS_GUEST,k=p.default.START_BTN_SIZE,I=0,P=new g.default,R=void 0,C=void 0,E=void 0,O=void 0,M=void 0,A=void 0,z=void 0,L=void 0,W=void 0,F=[],Y=window.innerWidth>720?720:window.innerWidth,H=window.innerHeight>900?900:window.innerHeight,N=!1,U=0,X=[0,0,0,0],Z=k;if(window._frameCount=0,window.preload=s,window.setup=u,window.draw=r,window.keyPressed=l,isMobile.any){var B=function(){return K||(N&&"dead"!==R.status||(0,S.isMouseInRectangle)(mouseX,mouseY,X)&&(N?a():o()),R.jump(N&&"dead"!==R.status,P),K=!0),!1},G=function(){K=!1},K=!1;window.touchStarted=B,window.touchEnded=G}else{var $=function(){Z=k,N&&"dead"!==R.status||(0,S.isMouseInRectangle)(mouseX,mouseY,X)&&(N?a():o())},V=function(){N&&"dead"!==R.status||(0,S.isMouseInRectangle)(mouseX,mouseY,X)&&(Z=k-5),R.jump(N&&"dead"!==R.status)};window.mouseClicked=$,window.mousePressed=V}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={TITLE:"Flappy Arami",START:"START",START_AS_GUEST:"START  as guest",RANKING:"Ranking",START_BTN_SIZE:30,RANK_BTN_SIZE:25,HELLO_USER_TEXT_SIZE:13}},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(e,i){n(this,t),this.y=height/2,this.x=64,this.w=25,this.h=20,this.img=e,this.jumpSound=i,this.jumpSound.setVolume(.1),this.jumpStatus=!1,this.gravity=.7,this.upwardSpeed=11,this.velocity=0,this.status="live",this.bounceTo="up"}return o(t,[{key:"show",value:function(){image(this.img,this.x-7,this.y-13)}},{key:"update",value:function(){this.jumpStatus&&(this.velocity=-this.upwardSpeed,this.jumpStatus=!1),this.velocity+=this.gravity,this.y+=this.velocity,this.y+this.h>height&&(this.y=height-this.h,this.velocity=0,this.die()),this.y<=0&&(this.y=0)}},{key:"bounce",value:function(){"down"===this.bounceTo?this.y+=.8:this.y-=.8,this.y<height/2-20?this.bounceTo="down":this.y>height/2+20&&(this.bounceTo="up")}},{key:"jump",value:function(t,e){t&&(this.jumpStatus=!0,e&&(e.jumped+=1),this.jumpSound.isPlaying()&&this.jumpSound.stop(),this.jumpSound.play())}},{key:"die",value:function(){this.status="dead"}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(){n(this,t),this.value=0,this.jumped=0}return o(t,[{key:"show",value:function(){textFont("sans-serif"),fill(0),textSize(30),text(this.value,20,50)}},{key:"up",value:function(){this.value+=1}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(0),s=function(){function t(){n(this,t),this.hasPassed=!1,this.minSpace=30,this.holeSize=random(100,220),this.top=random(this.minSpace,height-this.holeSize-this.minSpace),this.bottom=height-this.holeSize-this.top,this.x=width,this.w=20,this.speed=5,this.topPipe={x:this.x,y:0,w:this.w,h:this.top},this.bottomPipe={x:this.x,y:height-this.bottom,w:this.w,h:this.bottom}}return o(t,[{key:"show",value:function(){stroke(0),fill(255),rect(this.x,0,this.w,this.top),rect(this.x,this.bottomPipe.y,this.w,this.bottom)}},{key:"update",value:function(){this.x-=this.speed,this.topPipe.x=this.x,this.bottomPipe.x=this.x}},{key:"hits",value:function(t){return(0,a.rectsColliding)(t,this.topPipe)||(0,a.rectsColliding)(t,this.bottomPipe)}},{key:"isPassed",value:function(t){return!this.hasPassed&&t.x>this.x+this.w&&(this.hasPassed=!0,!0)}}]),t}();e.default=s},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(e,i,o,a,s){n(this,t),this.layerSize=2048,this.layerHeight=1546,this.wRatio=this.layerSize/width,this.hRatio=this.layerHeight/height,this.ratio=height/width,this.width=this.layerSize/(this.ratio>1?this.hRatio:this.wRatio),this.height=this.layerHeight/(this.ratio>1?this.hRatio:this.wRatio),this.layer1Image=e,this.layer2Image=i,this.layer3Image=o,this.layer4Image=a,this.layer5Image=s}return o(t,[{key:"show",value:function(){this.drawLayer(this.layer1Image,_frameCount/6,this.width,this.height),this.drawLayer(this.layer2Image,_frameCount/4,this.width,this.height),this.drawLayer(this.layer3Image,_frameCount/2,this.width,this.height),this.drawLayer(this.layer4Image,_frameCount/1,this.width,this.height),this.drawLayer(this.layer5Image,_frameCount/.5,this.width,this.height)}},{key:"drawLayer",value:function(t,e,i,n){push();var o=parseInt((e+width)/i);translate(-e,0),image(t,o<2?0:i*(o-1),0,i,n),o>0&&image(t,i*o,0,i,n),pop()}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(){n(this,t)}return o(t,[{key:"renderUserComponent",value:function(t){var e=$(".user-list__wrap ul");e.empty(),t.forEach(function(t,i){var n=$("#user__wrap").clone();n.find(".user__rank").text("#"+(i+1)),n.find("img").attr("src",t.profile.picture),n.find(".user__name").text(t.profile.name),n.find(".user__score").text(t.score),e.append(n)})}}]),t}();e.userSvc=new a}]);