(function(){var e={9711:function(e,t,s){"use strict";var a=s(9242),r=s(3396);function i(e,t,s,a,i,n){const o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(o)}s(6035);var n=s(1178),o=s(6623),c={data(){return{}},components:{},computed:{...(0,o.Se)(["roulette","states"])},watch:{states(e,t){"reset"===e.action&&this.reset()}},created(){const e=(0,n.N8)(),t=(0,n.iH)(e,"game"),s=(0,n.iH)(e,"states"),a=(0,n.iH)(e,"users"),r=(0,n.iH)(e,"roulette"),i=(0,n.iH)(e,"questions"),o=(0,n.iH)(e,"recados");(0,n.jM)(t,(e=>{const t=e.val();this.$store.commit("setGame",t)})),(0,n.jM)(a,(e=>{const t=e.val();this.$store.commit("setUsers",t)})),(0,n.jM)(s,(e=>{const t=e.val();this.$store.commit("setState",t)})),(0,n.jM)(r,(e=>{const t=e.val();this.$store.commit("setRoulette",t)})),(0,n.jM)(i,(e=>{const t=e.val();this.$store.commit("setQuestions",t)})),(0,n.jM)(o,(e=>{const t=e.val();this.$store.commit("setRecados",t)}))},methods:{async reset(){const e=(0,n.N8)();await(0,n.t8)((0,n.iH)(e,"states"),{action:"",state:"ready"}),"controle"!=this.$route.name&&this.$router.push({name:"home"})}}},u=s(89);const l=(0,u.Z)(c,[["render",i]]);var d=l,p=s(5431);(0,p.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var m=s(6866);const g={class:"home"};function h(e,t,s,a,i,n){const o=(0,r.up)("live"),c=(0,r.up)("roulette");return(0,r.wg)(),(0,r.iD)("div",g,[(0,r.Wm)(o),(0,r.Wm)(c)])}const v={class:"wrap-roulette"},f=(0,r._)("div",{class:"text"},[(0,r._)("p",null,"27 anos"),(0,r._)("p",null,"Paola"),(0,r._)("p",null,"Launde")],-1),w={class:"roulette"},b={class:"ilustration"},_={class:"circle",ref:"circle"};function x(e,t,s,a,i,n){return(0,r.wg)(),(0,r.iD)("div",v,[f,(0,r._)("div",w,[(0,r._)("div",{class:"pointer",onClick:t[0]||(t[0]=(...e)=>n.start&&n.start(...e))}),(0,r._)("div",b,[(0,r._)("div",_,null,512)])])])}var j={name:"GRoulette",data(){return{currenGameRef:"oDEggroi2hPuShYseIkg",unsubscribe:null}},computed:{...(0,o.Se)(["roulette","states","game","currentArrRoulette"])},watch:{states(e,t){"start"===e.action&&this.start()}},props:{msg:String},created(){},mounted(){},methods:{random(e){let t,s=e.length,a=0;while(s--)a=Math.floor(Math.random()*(s+1)),t=e[s],e[s]=e[a],e[a]=t;return e},async sorteio(){this.currentArrRoulette.length<=0&&this.$store.commit("setCurrentArrRoulette",this.random([1,3,0,2]));const e=Math.floor(Math.random()*this.currentArrRoulette.length),t=(0,n.N8)(),s={};s["game/type"]=this.currentArrRoulette[e],await(0,n.Vx)((0,n.iH)(t),s);const a=this.currentArrRoulette.indexOf(this.game.type);this.$store.commit("updateCurrentArrRoulette",a)},async start(){document.querySelector(".home").classList.add("scene-rotela"),await this.sorteio();let e=2e3,t=90,s=t*this.game.type;this.game.type>=2?this.$refs.circle.style.transform="rotateZ(-"+e+"deg)":this.$refs.circle.style.transform="rotateZ("+e+"deg)",setTimeout((()=>{this.$refs.circle.style.transform="rotateZ("+s+"deg)"}),2400),setTimeout((()=>{this.goGame()}),5500)},async goGame(){if(null!=this.game.type){document.querySelector(".home").classList.add("scene-over");const e=(0,n.N8)();await(0,n.t8)((0,n.iH)(e,"states"),{action:"",state:"selectuser"}),setTimeout((()=>{this.$router.push({name:"game",params:{id:this.game.type}})}),300)}}}};const y=(0,u.Z)(j,[["render",x]]);var k=y,U=s(7139);const C={class:"live"},D=(0,r._)("div",{class:"photo"},null,-1),H={class:"comments"},$={class:"live-texts"},R=(0,r._)("div",{class:"image"},null,-1),A={class:"content"},E={key:0,class:"title"},M={class:"description"},N=(0,r._)("div",{class:"qrcode"},null,-1);function I(e,t,s,a,i,n){return(0,r.wg)(),(0,r.iD)("div",C,[D,(0,r._)("div",H,[(0,r._)("div",$,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.recados,((t,s,a)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,U.C_)(["comment",a>=Object.keys(e.recados).length-6?"active":""])},[R,(0,r._)("div",A,[t.autor?((0,r.wg)(),(0,r.iD)("span",E,(0,U.zw)(t.autor),1)):(0,r.kq)("",!0),(0,r._)("span",M,(0,U.zw)(t.text),1)])],2)))),256))]),N])])}var S={name:"GLive",props:{msg:String},computed:{...(0,o.Se)(["recados"]),teste(){return this.recados.lenght}}};const G=(0,u.Z)(S,[["render",I]]);var P=G,O={name:"HomeView",components:{Roulette:k,Live:P},methods:{}};const V=(0,u.Z)(O,[["render",h]]);var q=V;const T={class:"game gameview",ref:"gameview"},L={class:"header"},z=(0,r._)("div",{class:"stars"},null,-1),Z=(0,r._)("div",{class:"icon"},null,-1),B={class:"text"},X={class:"wrap-game"},Q={class:"active-user"},K={class:"name"},Y={class:"roulette-h"},F={class:"list",ref:"list"},J=["src"],W=(0,r._)("div",{class:"footer"},null,-1);function ee(e,t,a,i,n,o){const c=(0,r.up)("choices");return(0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("div",L,[z,(0,r._)("div",{class:(0,U.C_)(["tag",e.roulette[this.$route.params.id].type])},[Z,(0,r._)("span",B,(0,U.zw)(e.roulette[this.$route.params.id].type),1)],2)]),(0,r._)("div",X,[(0,r._)("div",Q,[(0,r._)("span",K,(0,U.zw)(e.users[n.currentIdUser-1]?e.users[n.currentIdUser-1].name:"fulano")+", você?",1),(0,r.Wm)(c,{data:n.choicesUser,onUpdate:o.goGame},null,8,["data","onUpdate"])]),(0,r._)("div",Y,[(0,r._)("div",{class:"pointer",onClick:t[0]||(t[0]=(...e)=>o.start&&o.start(...e))}),(0,r._)("div",F,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.usersRandom,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,U.C_)(["item",t==n.currentUserIndex?"active":""])},[(0,r._)("img",{src:s(1563)(`./${e.id}.jpeg`)},null,8,J)],2)))),256))],512)])]),W],512)}const te={class:"wrap-choices"},se=["onClick"];function ae(e,t,s,a,i,n){return(0,r.wg)(),(0,r.iD)("div",te,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.data,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"choice",onClick:t=>n.selectChoice(e)},(0,U.zw)(e.text),9,se)))),256))])}var re={name:"GRoulette",data(){return{}},props:{data:Array},methods:{selectChoice(e){this.$emit("update",e)}}};const ie=(0,u.Z)(re,[["render",ae]]);var ne=ie,oe={name:"GameView",data(){return{currenGameRef:"oDEggroi2hPuShYseIkg",currentUserIndex:null,currentListUser:[],currentIdUser:null,choicesUser:[{id:0,text:"vai"},{id:1,text:"não vai"}]}},components:{Choices:ne},computed:{...(0,o.Se)(["roulette","states","users","game"]),currentDataUser(){return this.users.filter((e=>e.id===this.currentIdUser))},usersRandom(){return this.shuffle(this.users)}},watch:{states(e,t){switch(e.action){case"girarUsers":this.start();break;case"accepted":this.goGame({id:0});break;case"refused":this.goGame({id:1});break}}},mounted(){setTimeout((()=>{this.$refs.gameview.classList.add("start")}),200)},methods:{shuffle(e){let t,s=e.length,a=0;while(s--)a=Math.floor(Math.random()*(s+1)),t=e[s],e[s]=e[a],e[a]=t;return e},async goGame(e){const t=(0,n.N8)();if(0===e.id)switch(this.$route.params.id){case"0":await(0,n.t8)((0,n.iH)(t,"states"),{action:"",state:"selectbeber"}),this.$router.push({name:"beber"});break;case"1":await(0,n.t8)((0,n.iH)(t,"states"),{action:"",state:"questions"}),this.$router.push({name:"choices",params:{id:54}});break;case"2":await(0,n.t8)((0,n.iH)(t,"states"),{action:"",state:"selectbeber"}),this.$router.push({name:"beber"});break;default:await(0,n.t8)((0,n.iH)(t,"states"),{action:"",state:"selectcastigo"}),this.$router.push({name:"castigo"})}else await(0,n.t8)((0,n.iH)(t,"states"),{action:"",state:"selectjulgamento"}),this.$router.push({name:"julgamento"})},vh(e){var t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return e*t/100},async randomUser(){let e=this.game.round,t=this.users.filter((t=>t.round===e));if(t.length){const s=Math.floor(Math.random()*t.length),a=t[s].id;return this.currentUserIndex=a-1,this.currentIdUser=a,this.updateScoreUser(this.currentUserIndex,e),!0}return await this.updateScoreRoullete(++e),this.start(),!1},async updateScoreUser(e,t){const s=(0,n.N8)(),a={};a[`users/${e}/round`]=++t,await(0,n.Vx)((0,n.iH)(s),a)},async updateScoreRoullete(e){const t=(0,n.N8)(),s={};s["game/round"]=e,await(0,n.Vx)((0,n.iH)(t),s)},async start(){this.$refs.gameview.classList.remove("choices");let e=this.$refs.list.getBoundingClientRect().width,t=this.vh(50)/2,s=this.vh(50)+this.vh(8),a=e/2-t;const r=this.randomUser();if(r){let e=a-s*this.currentUserIndex;this.$refs.list.style.transform=e>=0?"translateX(-"+a+"px)":"translateX("+a+"px)",setTimeout((()=>{this.$refs.list.style.transform="translateX("+e+"px)"}),2500),setTimeout((()=>{this.$refs.gameview.classList.add("choices");const e=(0,n.N8)();(0,n.t8)((0,n.iH)(e,"states"),{action:"",state:"accept"});const t={};t["game/user"]=this.currentIdUser,(0,n.Vx)((0,n.iH)(e),t)}),5200)}}}};const ce=(0,u.Z)(oe,[["render",ee]]);var ue=ce;const le={class:"choices-view",ref:"choicesview"},de=(0,r.uE)('<div class="header"><div class="stars"></div><div class="tag"><div class="icon"></div><span class="text">Perguntas</span></div></div>',1),pe={class:"wrap-game"},me={class:"question"},ge=(0,r._)("div",{class:"footer"},null,-1);function he(e,t,s,a,i,n){const o=(0,r.up)("choices");return(0,r.wg)(),(0,r.iD)("div",le,[de,(0,r._)("div",pe,[(0,r._)("span",me,(0,U.zw)(i.currentQuestion.text),1),(0,r.Wm)(o,{data:i.currentQuestion.alternatives,onUpdate:n.check,ref:"choices"},null,8,["data","onUpdate"])]),ge],512)}var ve={name:"ChoicesView",data(){return{currentQuestion:{}}},computed:{...(0,o.Se)(["questions","states"])},watch:{states(e,t){let s=e.action.replace("answer-","");switch(e.action){case"answer-1":this.check({id:s});break;case"answer-2":this.check({id:s});break;case"answer-3":this.check({id:s});break;case"answer-4":this.check({id:s});break}}},components:{Choices:ne},created(){this.randomQuestions()},mounted(){setTimeout((()=>{this.$refs.choicesview.classList.add("start")}),100)},methods:{async randomQuestions(){const e=this.questions.filter((e=>0==e.answered)),t=Math.floor(Math.random()*e.length);e[t].id;this.currentQuestion=e[t];const s=(0,n.N8)(),a={};a["game/question"]=this.currentQuestion.id,await(0,n.Vx)((0,n.iH)(s),a)},async check(e){if(this.currentQuestion.answer===Number(e.id)){this.$refs.choices.$el.classList.add("acertou");const e=(0,n.N8)(),t={},s=this.currentQuestion.id-1;t[`questions/${s}/answered`]=!0,await(0,n.Vx)((0,n.iH)(e),t)}else this.$refs.choices.$el.classList.add("errou");const t=(0,n.N8)();(0,n.t8)((0,n.iH)(t,"states"),{action:"",state:"endGame"})}}};const fe=(0,u.Z)(ve,[["render",he]]);var we=fe;const be={class:"game",ref:"beberview"},_e=(0,r.uE)('<div class="header"><div class="stars"></div><div class="tag beber"><div class="icon"></div><span class="text">Beber</span></div></div>',1),xe={class:"wrap-game"},je={class:"roulette-h"},ye={class:"list",ref:"list"},ke=(0,r._)("div",{class:"footer"},null,-1);function Ue(e,t,s,a,i,n){return(0,r.wg)(),(0,r.iD)("div",be,[_e,(0,r._)("div",xe,[(0,r._)("div",je,[(0,r._)("div",{class:"pointer",onClick:t[0]||(t[0]=(...e)=>n.start&&n.start(...e))}),(0,r._)("div",ye,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.options,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,U.C_)(["item",t==i.currentUserIndex?"active":""])},(0,U.zw)(e),3)))),256))],512)])]),ke],512)}var Ce={name:"GameView",data(){return{options:["beber 1 dose","beber 2 doses","beber sem as mãos","paola decide","a ultima pessoa que bebeu decide","todos homens bebem","todas as mulheres","pedra, papel ou tesoura com a paola"],currentUserIndex:null}},components:{Choices:ne},computed:{...(0,o.Se)(["states"])},watch:{states(e,t){"girarBeber"===e.action&&this.start()}},mounted(){setTimeout((()=>{this.$refs.beberview.classList.add("start")}),200)},methods:{vh(e){var t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return e*t/100},start(){let e=this.$refs.list.getBoundingClientRect().width,t=this.vh(50)/2,s=this.vh(50)+this.vh(8),a=e/2-t;const r=Math.floor(Math.random()*this.options.length);this.currentUserIndex=r;let i=a-s*r;this.$refs.list.style.transform=i>=0?"translateX(-"+a+"px)":"translateX("+a+"px)",setTimeout((()=>{this.$refs.list.style.transform="translateX("+i+"px)";const e=(0,n.N8)();(0,n.t8)((0,n.iH)(e,"states"),{action:"",state:"endGame"})}),2500)}}};const De=(0,u.Z)(Ce,[["render",Ue]]);var He=De;const $e={class:"game",ref:"castigoview"},Re=(0,r.uE)('<div class="header"><div class="stars"></div><div class="tag castigo"><div class="icon"></div><span class="text">Castigo</span></div></div>',1),Ae={class:"wrap-game"},Ee={class:"roulette-h"},Me={class:"list",ref:"list"},Ne=(0,r._)("div",{class:"footer"},null,-1);function Ie(e,t,s,a,i,n){return(0,r.wg)(),(0,r.iD)("div",$e,[Re,(0,r._)("div",Ae,[(0,r._)("div",Ee,[(0,r._)("div",{class:"pointer",onClick:t[0]||(t[0]=(...e)=>n.start&&n.start(...e))}),(0,r._)("div",Me,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.options,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,U.C_)(["item",t==i.currentUserIndex?"active":""])},(0,U.zw)(e),3)))),256))],512)])]),Ne],512)}var Se={name:"GameView",data(){return{options:["se for mulher, bata na cara de um homem, se for home uma mulher bate na sua cara","faca uma mimica","advinhe o objeto vendado","troque de roupa com alguem que paola escolher"],currentUserIndex:null}},components:{Choices:ne},computed:{...(0,o.Se)(["states"])},watch:{states(e,t){"girarCastigo"===e.action&&this.start()}},mounted(){setTimeout((()=>{this.$refs.castigoview.classList.add("start")}),200)},methods:{vh(e){var t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return e*t/100},start(){let e=this.$refs.list.getBoundingClientRect().width,t=this.vh(50)/2,s=this.vh(50)+this.vh(8),a=e/2-t;const r=Math.floor(Math.random()*this.options.length);this.currentUserIndex=r;let i=a-s*r;this.$refs.list.style.transform=i>=0?"translateX(-"+a+"px)":"translateX("+a+"px)",setTimeout((()=>{this.$refs.list.style.transform="translateX("+i+"px)";const e=(0,n.N8)();(0,n.t8)((0,n.iH)(e,"states"),{action:"",state:"endGame"})}),2500)}}};const Ge=(0,u.Z)(Se,[["render",Ie]]);var Pe=Ge;const Oe={class:"game",ref:"julgamentoview"},Ve=(0,r.uE)('<div class="header"><div class="stars"></div><div class="tag julgamento"><div class="icon"></div><span class="text">Julgamento</span></div></div>',1),qe={class:"wrap-game"},Te={class:"roulette-h"},Le={class:"list",ref:"list"},ze=(0,r._)("div",{class:"footer"},null,-1);function Ze(e,t,s,a,i,n){return(0,r.wg)(),(0,r.iD)("div",Oe,[Ve,(0,r._)("div",qe,[(0,r._)("div",Te,[(0,r._)("div",{class:"pointer",onClick:t[0]||(t[0]=(...e)=>n.start&&n.start(...e))}),(0,r._)("div",Le,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.options,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,U.C_)(["item",t==i.currentUserIndex?"active":""])},(0,U.zw)(e),3)))),256))],512)])]),ze],512)}var Be={name:"GameView",data(){return{options:["paola decide quantas doses","girar e beber (quantas giradas paola decidir)","dar 3 voltas na piscina e beber uma dose","se jogar na piscina (se não fizer, bebe duas doses)","virar uma priguete em 1min","conte uma piada para paola (se as pessoas não rir, bebe 2 doses)"],currentUserIndex:null}},components:{Choices:ne},computed:{...(0,o.Se)(["states"])},watch:{states(e,t){"girarJulgamento"===e.action&&this.start()}},mounted(){setTimeout((()=>{this.$refs.julgamentoview.classList.add("start")}),200)},methods:{vh(e){var t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return e*t/100},start(){let e=this.$refs.list.getBoundingClientRect().width,t=this.vh(50)/2,s=this.vh(50)+this.vh(8),a=e/2-t;const r=Math.floor(Math.random()*this.options.length);this.currentUserIndex=r;let i=a-s*r;this.$refs.list.style.transform=i>=0?"translateX(-"+a+"px)":"translateX("+a+"px)",setTimeout((()=>{this.$refs.list.style.transform="translateX("+i+"px)";const e=(0,n.N8)();(0,n.t8)((0,n.iH)(e,"states"),{action:"",state:"endGame"})}),2500)}}};const Xe=(0,u.Z)(Be,[["render",Ze]]);var Qe=Xe;const Ke={class:"controle"},Ye={class:"wrap-games"},Fe={key:0,class:"group-start"},Je=(0,r._)("span",{class:"text"},"???",-1),We=[Je],et={key:1,class:"group-game"},tt={class:"type-game"},st={class:"text"},at=(0,r._)("div",{class:"arrow"},null,-1),rt={class:"user"},it={class:"image"},nt=["src"],ot={key:1,class:"placeholder"},ct={class:"text"},ut={key:0,class:"wrap-actions"},lt={key:0,class:"group-questions"},dt=["onClick"],pt={key:1,class:"text"};function mt(e,t,a,i,n,o){return(0,r.wg)(),(0,r.iD)("div",Ke,[(0,r._)("div",{class:"button-reset",onClick:t[0]||(t[0]=(...e)=>o.reset&&o.reset(...e))},"Reset"),(0,r._)("div",Ye,["ready"==e.states.state?((0,r.wg)(),(0,r.iD)("div",Fe,We)):((0,r.wg)(),(0,r.iD)("div",et,[(0,r._)("div",tt,[(0,r._)("div",{class:(0,U.C_)(["icon",e.roulette[e.game.type].type])},null,2),(0,r._)("span",st,(0,U.zw)(e.roulette[e.game.type].type),1)]),at,(0,r._)("div",rt,[(0,r._)("div",it,[e.game.user?((0,r.wg)(),(0,r.iD)("img",{key:0,src:s(1563)(`./${e.game.user}.jpeg`)},null,8,nt)):((0,r.wg)(),(0,r.iD)("span",ot,"?"))]),(0,r._)("span",ct,(0,U.zw)(e.game.user?e.users[e.game.user-1].name:"???"),1)])]))]),"accept"==e.states.state?((0,r.wg)(),(0,r.iD)("div",ut,[(0,r._)("div",{class:"option",onClick:t[1]||(t[1]=e=>o.accepted("accepted"))},"Vai"),(0,r._)("div",{class:"option",onClick:t[2]||(t[2]=e=>o.accepted("refused"))},"Não vai")])):((0,r.wg)(),(0,r.iD)("div",{key:1,class:"wrap-actions",onClick:t[3]||(t[3]=(...e)=>o.goGame&&o.goGame(...e))},["questions"==e.states.state?((0,r.wg)(),(0,r.iD)("div",lt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.questions[e.game.question-1].alternatives,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"option",onClick:t=>o.answer(e.id)},(0,U.zw)(e.text),9,dt)))),256))])):((0,r.wg)(),(0,r.iD)("span",pt,(0,U.zw)(n.statesTexts[this.states.state]),1))]))])}var gt={name:"ControleView",data(){return{statesTexts:{ready:"Start",selectuser:"Girar Pessoas",selectcastigo:"Girar Castigo",selectbeber:"Girar Beber",selectjulgamento:"Girar Julgamento",endGame:"Fim do jogo, resetar"},gameTypes:[{type:"beber",score:0},{type:"perguntas",score:1},{type:"beber",score:0},{type:"castigo",score:0}]}},components:{},computed:{...(0,o.Se)(["roulette","game","states","users","questions"])},created(){},methods:{goGame(){switch(this.states.state){case"ready":this.start();break;case"selectuser":this.girarUsers();break;case"selectcastigo":this.girarCastigo();break;case"selectbeber":this.girarBeber();break;case"selectjulgamento":this.girarJulgamento();break;case"endGame":this.reset();break}},async start(){const e=(0,n.N8)();await(0,n.t8)((0,n.iH)(e,"states"),{action:"start",state:""})},async girarUsers(){const e=(0,n.N8)();await(0,n.t8)((0,n.iH)(e,"states"),{action:"girarUsers",state:""})},async girarCastigo(){const e=(0,n.N8)();await(0,n.t8)((0,n.iH)(e,"states"),{action:"girarCastigo",state:""})},async girarBeber(){const e=(0,n.N8)();await(0,n.t8)((0,n.iH)(e,"states"),{action:"girarBeber",state:""})},async girarJulgamento(){const e=(0,n.N8)();await(0,n.t8)((0,n.iH)(e,"states"),{action:"girarJulgamento",state:""})},async accepted(e){const t=(0,n.N8)();await(0,n.t8)((0,n.iH)(t,"states"),{action:e,state:""})},async answer(e){const t=(0,n.N8)();await(0,n.t8)((0,n.iH)(t,"states"),{action:"answer-"+e,state:""})},async reset(){const e=(0,n.N8)();await(0,n.t8)((0,n.iH)(e,"states"),{action:"reset",state:""});const t={"game/type":"","game/round":0,"game/question":"","game/user":""};await(0,n.Vx)((0,n.iH)(e),t)}}};const ht=(0,u.Z)(gt,[["render",mt]]);var vt=ht;const ft={class:"recado"},wt=(0,r._)("div",{class:"description"},"Mande seu recado para a paola",-1),bt={class:"wrap-input"},_t={class:"group-input"};function xt(e,t,s,i,n,o){return(0,r.wg)(),(0,r.iD)("div",ft,[wt,(0,r._)("div",bt,[(0,r._)("div",_t,[(0,r.wy)((0,r._)("textarea",{class:"input","onUpdate:modelValue":t[0]||(t[0]=e=>n.mensagem=e),placeholder:"Diga algo fofo"},null,512),[[a.nr,n.mensagem]]),(0,r.wy)((0,r._)("input",{class:"input","onUpdate:modelValue":t[1]||(t[1]=e=>n.autor=e),placeholder:"seu nome"},null,512),[[a.nr,n.autor]])]),(0,r._)("button",{class:(0,U.C_)(["send",[n.mensagem.length>=4?"":"disable",n.loading?"loading":""]]),onClick:t[2]||(t[2]=(...e)=>o.send&&o.send(...e))},(0,U.zw)(n.loading?"Enviando":"Enviar")+" recado",3)])])}var jt={name:"RecadoView",data(){return{mensagem:"",autor:"",loading:!1}},components:{},methods:{reset(){this.mensagem="",this.autor=""},async send(){this.loading=!0;const e=(0,n.N8)();await(0,n.VF)((0,n.iH)(e,"recados"),{text:this.mensagem,autor:this.autor}).then((()=>{console.log("foi"),this.loading=!1,this.reset()})).catch((e=>{this.loading=!1}))}}};const yt=(0,u.Z)(jt,[["render",xt]]);var kt=yt;const Ut=[{path:"/",name:"home",component:q},{path:"/game/:id",name:"game",component:ue},{path:"/choices/:id",name:"choices",component:we},{path:"/beber",name:"beber",component:He},{path:"/recado",name:"recado",component:kt},{path:"/castigo",name:"castigo",component:Pe},{path:"/julgamento",name:"julgamento",component:Qe},{path:"/controle",name:"controle",component:vt}],Ct=(0,m.p7)({history:(0,m.PO)("/"),routes:Ut});var Dt=Ct,Ht=(0,o.MT)({state:{game:{},users:[],states:{},questions:[],roulette:[],recados:[],currentRoulette:null,currentArrRoulette:[]},getters:{game:e=>e.game,users:e=>e.users,states:e=>e.states,roulette:e=>e.roulette,recados:e=>e.recados,questions:e=>e.questions,currentRoulette:e=>e.currentRoulette,currentArrRoulette:e=>e.currentArrRoulette},mutations:{setRoulette(e,t){e.roulette=t},setCurrentRoulette(e,t){e.currentRoulette=t},setCurrentArrRoulette(e,t){e.currentArrRoulette=t},updateCurrentArrRoulette(e,t){console.log(t),t>-1&&e.currentArrRoulette.splice(t,1)},setQuestions(e,t){e.questions=t},setGame(e,t){e.game=t},setRecados(e,t){e.recados=t},setUsers(e,t){e.users=t},setState(e,t){e.states=t}},actions:{},modules:{}}),$t=s(4275);const Rt={apiKey:"AIzaSyCxS6Oo_sOPgOe1_6lxX6pt-MkZ6DRyogc",authDomain:"teste-56da2.firebaseapp.com",projectId:"teste-56da2",databaseURL:"https://teste-56da2.firebaseio.com",storageBucket:"teste-56da2.appspot.com",messagingSenderId:"116490922695",appId:"1:116490922695:web:2f25ab1346ca0c179c6ce2",measurementId:{NODE_ENV:"production",VUE_APP_API_KEY:"AIzaSyCxS6Oo_sOPgOe1_6lxX6pt-MkZ6DRyogc",VUE_APP_AUTH_DOMAIN:"teste-56da2.firebaseapp.com",VUE_APP_DATABASE_URL:"https://teste-56da2.firebaseio.com",VUE_APP_PROJECT_ID:"teste-56da2",VUE_APP_STORAGE_BUCKET:"teste-56da2.appspot.com",VUE_APP_MESSAGING_SENDER_ID:"116490922695",VUE_APP_APP_ID:"1:116490922695:web:2f25ab1346ca0c179c6ce2",BASE_URL:"/"}.VUE_APP_MEASUREMENT_ID};(0,$t.ZF)(Rt);(0,a.ri)(d).use(Ht).use(Dt).mount("#app")},1563:function(e,t,s){var a={"./1.jpeg":3412,"./10.jpeg":4585,"./11.jpeg":4323,"./12.jpeg":8828,"./13.jpeg":6264,"./14.jpeg":8025,"./15.jpeg":2651,"./16.jpeg":2879,"./17.jpeg":2554,"./18.jpeg":9631,"./19.jpeg":4550,"./2.jpeg":5846,"./20.jpeg":8930,"./21.jpeg":8175,"./22.jpeg":7839,"./23.jpeg":5617,"./24.jpeg":6092,"./25.jpeg":5876,"./26.jpeg":6298,"./27.jpeg":8413,"./28.jpeg":4173,"./29.jpeg":1205,"./3.jpeg":1479,"./30.jpeg":6104,"./31.jpeg":2181,"./32.jpeg":3703,"./4.jpeg":7457,"./5.jpeg":1785,"./6.jpeg":6882,"./7.jpeg":4151,"./8.jpeg":7853,"./9.jpeg":5508};function r(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=1563},3412:function(e,t,s){"use strict";e.exports=s.p+"img/1.0623c2bd.jpeg"},4585:function(e,t,s){"use strict";e.exports=s.p+"img/10.94a5333b.jpeg"},4323:function(e,t,s){"use strict";e.exports=s.p+"img/11.21df260a.jpeg"},8828:function(e,t,s){"use strict";e.exports=s.p+"img/12.3d615e01.jpeg"},6264:function(e,t,s){"use strict";e.exports=s.p+"img/13.ee3a23bf.jpeg"},8025:function(e,t,s){"use strict";e.exports=s.p+"img/14.5540cc7d.jpeg"},2651:function(e,t,s){"use strict";e.exports=s.p+"img/15.5cf49cb1.jpeg"},2879:function(e,t,s){"use strict";e.exports=s.p+"img/16.5c401dfd.jpeg"},2554:function(e,t,s){"use strict";e.exports=s.p+"img/17.8bbe5f96.jpeg"},9631:function(e,t,s){"use strict";e.exports=s.p+"img/18.8f6ce56a.jpeg"},4550:function(e,t,s){"use strict";e.exports=s.p+"img/19.44b4f5e6.jpeg"},5846:function(e,t,s){"use strict";e.exports=s.p+"img/2.b5df2524.jpeg"},8930:function(e,t,s){"use strict";e.exports=s.p+"img/20.e6adc227.jpeg"},8175:function(e,t,s){"use strict";e.exports=s.p+"img/21.00ea831a.jpeg"},7839:function(e,t,s){"use strict";e.exports=s.p+"img/22.e9ab4da7.jpeg"},5617:function(e,t,s){"use strict";e.exports=s.p+"img/23.dc7dff6e.jpeg"},6092:function(e,t,s){"use strict";e.exports=s.p+"img/24.22c70515.jpeg"},5876:function(e,t,s){"use strict";e.exports=s.p+"img/25.2380f647.jpeg"},6298:function(e,t,s){"use strict";e.exports=s.p+"img/26.a2c83811.jpeg"},8413:function(e,t,s){"use strict";e.exports=s.p+"img/27.0c2aa029.jpeg"},4173:function(e,t,s){"use strict";e.exports=s.p+"img/28.04b56873.jpeg"},1205:function(e,t,s){"use strict";e.exports=s.p+"img/29.e5b7eb19.jpeg"},1479:function(e,t,s){"use strict";e.exports=s.p+"img/3.b41eff1e.jpeg"},6104:function(e,t,s){"use strict";e.exports=s.p+"img/30.c5a60198.jpeg"},2181:function(e,t,s){"use strict";e.exports=s.p+"img/31.25e4e450.jpeg"},3703:function(e,t,s){"use strict";e.exports=s.p+"img/32.d40d6107.jpeg"},7457:function(e,t,s){"use strict";e.exports=s.p+"img/4.9f515c87.jpeg"},1785:function(e,t,s){"use strict";e.exports=s.p+"img/5.c6c1f247.jpeg"},6882:function(e,t,s){"use strict";e.exports=s.p+"img/6.63fc08f5.jpeg"},4151:function(e,t,s){"use strict";e.exports=s.p+"img/7.d7d44b4d.jpeg"},7853:function(e,t,s){"use strict";e.exports=s.p+"img/8.21292cb2.jpeg"},5508:function(e,t,s){"use strict";e.exports=s.p+"img/9.2e449227.jpeg"}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,a,r,i){if(!a){var n=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],i=e[l][2];for(var o=!0,c=0;c<a.length;c++)(!1&i||n>=i)&&Object.keys(s.O).every((function(e){return s.O[e](a[c])}))?a.splice(c--,1):(o=!1,i<n&&(n=i));if(o){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[a,r,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,i,n=a[0],o=a[1],c=a[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(c)var l=c(s)}for(t&&t(a);u<n.length;u++)i=n[u],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(l)},a=self["webpackChunkgameparty"]=self["webpackChunkgameparty"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(9711)}));a=s.O(a)})();
//# sourceMappingURL=app.7166450d.js.map