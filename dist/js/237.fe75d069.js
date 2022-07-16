"use strict";(self["webpackChunkbudget"]=self["webpackChunkbudget"]||[]).push([[237],{422:function(e,t,r){r.r(t),r.d(t,{default:function(){return Me}});var i=r(3396);const a={class:"handler"},n={class:"handler__header"},s=(0,i._)("div",{class:"title"},"Валюты",-1),l={class:"handler__content"},d={class:"handler__content-form"};function c(e,t,r,c,o,u){const h=(0,i.up)("app-create-button"),m=(0,i.up)("currency-create-form"),p=(0,i.up)("app-modal"),y=(0,i.up)("currency-list");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",n,[s,(0,i.Wm)(h,{class:"btn",onClickButton:u.showCreateModal},null,8,["onClickButton"])]),(0,i._)("div",l,[(0,i._)("div",d,[(0,i.Wm)(p,{"modal-active":o.activeCreateModal,onHideModal:u.hideCreateModal},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{onHideForm:u.hideCreateModal},null,8,["onHideForm"])])),_:1},8,["modal-active","onHideModal"])]),(0,i.Wm)(y)])])}var o=r(9242),u=r(7139),h=r.p+"img/refresh.d5cd48e9.svg";const m=e=>((0,i.dD)("data-v-1019b945"),e=e(),(0,i.Cn)(),e),p={class:"create-form"},y=m((()=>(0,i._)("div",{class:"title"},"Добавить Валюту",-1))),v={class:"row"},b=m((()=>(0,i._)("div",{class:"label"},[(0,i._)("label",null,"Выберете валюту")],-1))),_=["value"],C={class:"row"},g={class:"label"},w=m((()=>(0,i._)("label",null,"Код",-1))),f={class:"error show"},E={class:"row"},F={class:"label"},$=m((()=>(0,i._)("label",null,"Название",-1))),H={class:"error show"},M={class:"row"},D={class:"label"},S=m((()=>(0,i._)("label",null,"Курс к 1USD",-1))),k={class:"error show"},A=["disabled"],P={class:"row-refresh"},I={class:"error show"},q={class:"wrap"};function z(e,t,r,a,n,s){return(0,i.wg)(),(0,i.iD)("div",p,[(0,i._)("form",{onSubmit:t[9]||(t[9]=(0,o.iM)(((...e)=>s.formHandler&&s.formHandler(...e)),["prevent"]))},[y,(0,i._)("div",v,[b,(0,i.wy)((0,i._)("select",{required:"","onUpdate:modelValue":t[0]||(t[0]=e=>n.candidate.symbol=e),onInput:t[1]||(t[1]=(...t)=>e.selectCurrencyHandler&&e.selectCurrencyHandler(...t))},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.getAvailableCurrenceis,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e.symbol,value:e.symbol},(0,u.zw)(e.symbol)+" "+(0,u.zw)(e.name),9,_)))),128))],544),[[o.bM,n.candidate.symbol]])]),(0,i._)("div",C,[(0,i._)("div",g,[w,(0,i._)("span",f,(0,u.zw)(e.symbolError),1)]),(0,i.wy)((0,i._)("input",{type:"text",required:"",disabled:"","onUpdate:modelValue":t[2]||(t[2]=e=>n.candidate.symbol=e)},null,512),[[o.nr,n.candidate.symbol]])]),(0,i._)("div",E,[(0,i._)("div",F,[$,(0,i._)("span",H,(0,u.zw)(e.titleError),1)]),(0,i.wy)((0,i._)("input",{required:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>n.candidate.title=e),onInput:t[4]||(t[4]=(...t)=>e.resetTitleError&&e.resetTitleError(...t))},null,544),[[o.nr,n.candidate.title]])]),(0,i._)("div",M,[(0,i._)("div",D,[S,(0,i._)("span",k,(0,u.zw)(e.rateError),1)]),(0,i.wy)((0,i._)("input",{required:"",type:"text","onUpdate:modelValue":t[5]||(t[5]=e=>n.candidate.price=e),disabled:s.isMainCurrency,onInput:t[6]||(t[6]=(...t)=>e.resetRateError&&e.resetRateError(...t))},null,40,A),[[o.nr,n.candidate.price]])]),(0,i._)("div",P,[(0,i._)("span",I,(0,u.zw)(e.refreshError),1),(0,i._)("div",q,[(0,i._)("button",{class:"btn",onClick:t[7]||(t[7]=(0,o.iM)(((...e)=>s.getPrice&&s.getPrice(...e)),["prevent"]))}," Обновить курс "),(0,i._)("img",{class:(0,u.C_)(["img",{spin:n.isSpin}]),src:h},null,2)])]),(0,i._)("button",{type:"submit",class:"row btn",onInput:t[8]||(t[8]=(...t)=>e.resetRateError&&e.resetRateError(...t))}," ДОБАВИТЬ ",32)],32)])}var L=r(65),U=r(9117),x={data(){return{titleError:"",symbolError:"",rateError:"",refreshError:""}},validations:{candidate:{title:{required:U.C1,minLength:(0,U.Ei)(3),maxLength:(0,U.BS)(30)},symbol:{required:U.C1},price:{decimal:U.gH}}},methods:{selectCurrencyHandler(e){this.resetSymbolError();const t=e.target.value,r=this.getAvailableCurrenceis.find((e=>e.symbol===t));this.candidate.title=r.name,this.resetRefreshError(),this.isCurrencyCode(t)&&(this.symbolError="валюта уже существует")},checkFormData(){return!this.v$.candidate.title.$dirty&&this.v$.candidate.title.required.$invalid?this.titleError="нет значения":!this.v$.candidate.title.$dirty&&this.v$.candidate.title.minLength.$invalid?this.titleError="минимум 3 символа":!this.v$.candidate.title.$dirty&&this.v$.candidate.title.maxLength.$invalid?this.titleError="максимум 30 символа":this.titleError="",!this.v$.candidate.symbol.$dirty&&this.v$.candidate.symbol.required.$invalid?this.symbolError="нет значения":this.symbolError="",!this.v$.candidate.price.$dirty&&this.v$.candidate.price.decimal.$invalid?this.rateError="только число":this.rateError="",!(this.titleError||this.symbolError||this.rateError)},resetTitleError(){this.titleError=""},resetSymbolError(){this.symbolError=""},resetRateError(){this.rateError=""},resetRefreshError(){this.refreshError=""},resetForm(){this.candidate.title="",this.candidate.symbol="",this.candidate.price=1}}},B=r(3053),W={name:"CurrencyCreateForm",mixins:[x],setup(){return{v$:(0,B.ZP)()}},computed:{...(0,L.Se)(["getAvailableCurrenceis"]),isMainCurrency(){if("USD"===this.candidate.symbol)return this.candidate.price=1,!0}},data(){return{candidate:{title:"",symbol:"",price:1},isSpin:!1}},methods:{...(0,L.nv)(["addCurrency","refreshPrice"]),...(0,L.Se)(["getAllCurrencies"]),async getPrice(){if(this.candidate.price)if(this.candidate.symbol){this.isSpin=!0,await this.refreshPrice();const e=this.getAvailableCurrenceis.find((e=>e.symbol===this.candidate.symbol));this.candidate.price=e.price,this.isSpin=!1}else this.refreshError="валюта не выбрана";else this.candidate.price=1},async formHandler(){if(this.checkFormData()){this.main&&this.resetMainCurrency();try{await this.addCurrency(this.candidate)}catch(e){}finally{this.resetForm(),this.$emit("hideForm",!0)}}},isCurrencyCode(e){let t=!1;const r=this.getAllCurrencies();return r.forEach((r=>{r.symbol==e&&(t=!0)})),t}}},R=r(89);const V=(0,R.Z)(W,[["render",z],["__scopeId","data-v-1019b945"]]);var Z=V;const T={class:"list-header"},j={key:0},K=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,"№"),(0,i._)("th",null,"Название"),(0,i._)("th",null,"Код"),(0,i._)("th",null,"Курс к USD"),(0,i._)("th",null,"Действие")])],-1),O={key:1,class:"empty-list"};function Y(e,t,r,a,n,s){const l=(0,i.up)("currency-list-item"),d=(0,i.up)("app-pagination"),c=(0,i.up)("currency-edit-form"),o=(0,i.up)("app-modal"),u=(0,i.up)("app-confirm-modal");return(0,i.wg)(),(0,i.iD)("div",T,[s.isEmptyList?((0,i.wg)(),(0,i.iD)("div",O,"Список валют пуст")):((0,i.wg)(),(0,i.iD)("div",j,[(0,i._)("table",null,[K,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.pageItems,(e=>((0,i.wg)(),(0,i.j4)(l,{key:e.id,currency:e,onEdit:s.editHandler,onDelete:s.deleteHandler},null,8,["currency","onEdit","onDelete"])))),128))])]),(0,i.Wm)(d,{"pages-amount":e.pageCount,page:e.page,onCurrentPage:s.updateList},null,8,["pages-amount","page","onCurrentPage"])])),(0,i.Wm)(o,{modalActive:n.activeEditForm,onHideModal:s.hideEditForm},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{currency:n.target,onHideForm:s.hideEditForm},null,8,["currency","onHideForm"])])),_:1},8,["modalActive","onHideModal"]),(0,i.Wm)(u,{show:n.activeConfirmForm,onResult:s.deleteCurrency},null,8,["show","onResult"])])}var G=r(4268);const J={class:"td-btn"};function N(e,t,r,a,n,s){const l=(0,i.up)("app-edit-button"),d=(0,i.up)("app-delete-button");return(0,i.wg)(),(0,i.iD)("tr",null,[(0,i._)("td",null,(0,u.zw)(r.currency.id),1),(0,i._)("td",null,(0,u.zw)(r.currency.title),1),(0,i._)("td",null,(0,u.zw)(r.currency.symbol),1),(0,i._)("td",null,(0,u.zw)(r.currency.price),1),(0,i._)("td",null,[(0,i._)("div",J,[(0,i.Wm)(l,{class:"edit__btn",onClickButton:s.edit},null,8,["onClickButton"]),(0,i.Wm)(d,{class:"remove__btn",onClickButton:s.confirm},null,8,["onClickButton"])])])])}var Q={name:"CurrencyListItem",props:{currency:{type:Object,required:!0}},methods:{edit(){this.$emit("edit",{...this.currency})},confirm(){this.$emit("delete",{...this.currency})}}};const X=(0,R.Z)(Q,[["render",N]]);var ee=X;const te={class:"edit-form"},re={class:"row"},ie={class:"label"},ae=(0,i._)("label",null,"Код",-1),ne={class:"error show"},se={class:"row"},le={class:"label"},de=(0,i._)("label",null,"Название",-1),ce={class:"error show"},oe={class:"row"},ue=(0,i._)("div",{class:"label"},[(0,i._)("label",null,"Курс к USD"),(0,i._)("span",{class:"error show"})],-1),he=["disabled"],me={class:"row-refresh"},pe={class:"error show"},ye={class:"wrap"},ve=(0,i._)("img",{class:"img",src:h},null,-1),be=(0,i._)("button",{type:"submit",class:"row btn"}," Изменить ",-1);function _e(e,t,r,a,n,s){return(0,i.wg)(),(0,i.iD)("div",te,[(0,i._)("form",{onSubmit:t[6]||(t[6]=(0,o.iM)(((...e)=>s.formHandler&&s.formHandler(...e)),["prevent"]))},[(0,i._)("div",re,[(0,i._)("div",ie,[ae,(0,i._)("span",ne,(0,u.zw)(e.symbolError),1)]),(0,i.wy)((0,i._)("input",{required:"",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.candidate.symbol=e),onInput:t[1]||(t[1]=(...t)=>e.resetSymbolError&&e.resetSymbolError(...t))},null,544),[[o.nr,n.candidate.symbol]])]),(0,i._)("div",se,[(0,i._)("div",le,[de,(0,i._)("span",ce,(0,u.zw)(e.titleError),1)]),(0,i.wy)((0,i._)("input",{required:"",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>n.candidate.title=e),onInput:t[3]||(t[3]=(...t)=>e.resetTitleError&&e.resetTitleError(...t))},null,544),[[o.nr,n.candidate.title]])]),(0,i._)("div",oe,[ue,(0,i.wy)((0,i._)("input",{required:"",type:"text",disabled:s.isMainCurrency,"onUpdate:modelValue":t[4]||(t[4]=e=>n.candidate.price=e)},null,8,he),[[o.nr,n.candidate.price]])]),(0,i._)("div",me,[(0,i._)("span",pe,(0,u.zw)(e.refreshError),1),(0,i._)("div",ye,[(0,i._)("button",{class:"btn",onClick:t[5]||(t[5]=(0,o.iM)(((...e)=>s.getPrice&&s.getPrice(...e)),["prevent"]))}," Обновить курс "),ve])]),be],32)])}var Ce={name:"CurrencyEditForm",props:{currency:{type:Object,required:!0}},mixins:[x],setup(){return{v$:(0,B.ZP)()}},computed:{...(0,L.Se)(["getAvailableCurrenceis"]),isMainCurrency(){if("USD"===this.candidate.symbol)return this.candidate.price=1,!0}},data(){return{candidate:{id:1,title:"",symbol:"",price:1}}},methods:{...(0,L.nv)(["putCurrencyById","refreshPrice"]),...(0,L.Se)(["getAllCurrencies"]),async formHandler(){if(!this.checkFormData())return;this.main&&(await this.changeMainCurrency(this.id),this.rate=1);const e={id:this.candidate.id,currency:{title:this.candidate.title,symbol:this.candidate.symbol,price:this.candidate.price}};await this.putCurrencyById(e),this.$emit("hideForm",!0)},async getPrice(){if(this.candidate.price)if(this.candidate.symbol){await this.refreshPrice();const e=this.getAvailableCurrenceis.find((e=>e.symbol===this.candidate.symbol));this.candidate.price=e.price}else this.refreshError="валюта не выбрана";else this.candidate.price=1},isCurrencyCode(e){let t=!1;const r=this.getAllCurrencies();return r.forEach((r=>{r.price==e&&(t=!0)})),t}},watch:{currency(){this.candidate={...this.currency}}},mounted(){this.candidate={...this.currency}}};const ge=(0,R.Z)(Ce,[["render",_e]]);var we=ge,fe={components:{CurrencyListItem:ee,CurrencyEditForm:we},name:"CurrencyList",mixins:[G.Z],data(){return{target:{},activeConfirmForm:!1,activeEditForm:!1}},computed:{...(0,L.Se)(["getAllCurrencies"]),isEmptyList(){return 0===this.getAllCurrencies.length}},methods:{...(0,L.nv)(["removeCurrencyById"]),updateList(e){this.page=e,this.setupPagination(this.getAllCurrencies)},async deleteCurrency(e){if(e&&this.target.id)try{await this.removeCurrencyById(this.target.id)}catch(t){}this.activeConfirmForm=!1,this.target={}},editHandler(e){this.target=e,this.activeEditForm=!0},deleteHandler(e){this.target=e,this.activeConfirmForm=!0},hideEditForm(e){e&&(this.target={},this.activeEditForm=!1)}},watch:{getAllCurrencies(){this.setupPagination(this.getAllCurrencies)}},async mounted(){await this.setupPagination(this.getAllCurrencies)}};const Ee=(0,R.Z)(fe,[["render",Y]]);var Fe=Ee,$e={components:{CurrencyCreateForm:Z,CurrencyList:Fe},name:"CurrencyView",data(){return{activeCreateModal:!1}},methods:{showCreateModal(){this.activeCreateModal=!0},hideCreateModal(e){e&&(this.activeCreateModal=!1)}}};const He=(0,R.Z)($e,[["render",c]]);var Me=He}}]);
//# sourceMappingURL=237.fe75d069.js.map