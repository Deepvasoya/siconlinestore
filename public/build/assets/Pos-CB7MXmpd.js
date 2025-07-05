import{S as be,Y as me,u as Te,f as F,aZ as pe,_ as te,b as _e,o as d,c as v,j as h,t as s,k as A,b2 as Ne,R as ke,b3 as Ve,b4 as Le,aA as Ce,E as we,V as Be,r as O,i as m,w as t,a,l as c,G as S,M as T,am as We,q as de,h as ie,B as Fe,J as Se,aD as fe,n as De,I as je,b5 as Ke,F as Ae,ap as Xe,aG as ge,d as Ee,a1 as Ge,H as He,aF as Pe,aV as Qe,az as Ye,g as Je,af as Ze,aW as $e,aX as et,b6 as tt,b7 as at,b8 as nt,C as ot,X as lt,ab as ce,ay as dt,aY as it,aM as st,a_ as rt,a0 as ut,D as ct}from"./app-C3PTe4Ra.js";import{a as mt}from"./apiAdmin-BxetVwJ6.js";import{s as pt}from"./sumBy-CfrZqv2s.js";import{f as _t}from"./filter-D7S-dBe1.js";import{C as ft}from"./CustomerAddButton-BLVaV61k.js";import{I as gt}from"./Invoice-BMeZ8Lwv.js";import{C as yt}from"./ContainerOutlined-Co4rNfex.js";import{U as ht}from"./UnorderedListOutlined-ChdWUMeM.js";import"./index-DeYRqHBO.js";import{S as vt}from"./SaveOutlined-DeZedP1Y.js";import{S as xt}from"./SettingOutlined-B6P8Q6z5.js";import{S as bt}from"./ShoppingCartOutlined-qcdddWlR.js";import"./fields-DRZ1Oz6O.js";import"./Upload-DoFh1GkI.js";import"./AddButton-BIa_5rsC.js";import"./AddEdit-DLLUfadv.js";import"./AddButton-BhW-IckL.js";import"./AddEdit-6WwsTWmu.js";import"./BarcodeGenerator-CSlQGyHf.js";import"./PrinterOutlined-DJLfl6To.js";be.div`
    border-radius: 10px;
    background-color: #fff;
    position: relative;
	width: 100%;

    @media only screen and (max-width: 767px){
        max-width: 350px;
        margin: 0 auto;
    }
    &.list-view{
        max-width: 100%;
        .product-single-price__offer{
            @media only screen and (max-width: 991px) and (min-width: 768px){
                display: block;
            }
        }
    }
    .product-list{
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        figure{
            @media only screen and (max-width: 1199px){
            }
            @media only screen and (max-width: 991px){
                margin: 0 0 20px;
            }
            img{
                border-radius: 10px;
            }
        }
        .product-single-description{
            p{
                font-size: 15px;
            }
        }
        .product-single-title{
            font-size: 18px;
            margin: 25px 0 16px;
            @media only screen and (max-width: 1199px){
                margin: 0 0 16px;
            }
        }
        .product-single-info{
            margin-top: 25px;
            @media only screen and (max-width: 1199px){
                margin-top: 0;
            }
        }
        .product-single-price__new{
            font-size: 16px;
        }
        .product-single-action{
            flex-flow: column;
            align-items: flex-start;
            margin: 28px 0 0 0;
            button{
                min-width: 132px;
                margin: 0;
                padding: 0px 14px;
                height: 38px;
            }
            .btn-cart{
                margin: 0 0 10px;
            }
            .ant-btn-sm{
                height: 38px;
            }
        }
        .btn-heart{
            @media only screen and (max-width: 1599px){
                top: 0;
            }
            @media only screen and (max-width: 1199px){
                top: -4px;
            }
            @media only screen and (max-width: 991){
                top: 0;
            }
        }
    }
    figure{
        margin-bottom: 0;
        img{
            width: 100px;
        }
    }
    figcaption{
        padding: 20px 20px 26px;
    }
    .quantity-box{
        position: absolute;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 15px;
        top: 1px;
        background-color: #fff;
		padding: 0 6px;
		left: 1px;
    }
    .product-single-title{
        margin-bottom: 10px;
        font-size: 15px;
        font-weight: 500;

    }
    .product-single-price{
        margin-bottom: 5px;
        del{
            margin: 0 5px;
        }
    }
    .product-single-price__new{
        font-weight: 600;
    }
    .product-single-price__offer{
        font-weight: 500;
        font-size: 12px;
    }
    .product-single-rating{
        font-size: 12px;
        font-weight: 500;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        .ant-rate-star{
            div{
                transform: none !important;
            }
        }
        .total-reviews{
            font-weight: 400;
          
        }
        svg{
            width: 13px;
        }
    }
    .product-single-action{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 20px -5px -5px -5px;
        button{
            font-size: 12px;
            margin: 5px;
        }


        .ant-btn-sm{
            font-size: 12px;
            padding: 0px 18.065px;
            height: 36px;
        }
    }
`;const kt=be.div`
    max-width: 650px;
    margin: 0 auto;
    .ant-card{
        margin-bottom: 0 !important;
    }

    .ant-form-item{
        margin-bottom: 0;
    }

    .summary-table-title{
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 25px;
      
    }
    .order-summary-inner{
        padding-bottom: 5px;
        @media only screen and (max-width: 1599px){
            max-width: 600px;
            margin: 0 auto;
        }
        .ant-form-item-control{
            line-height: 2.2;
        }
        .ant-form-item-control-wrapper{
            width: 100%;
        }
        .ant-select{
            .ant-select-selection-item{
                font-weight: 500;
            }
        }
        .ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
            height: 30px !important;
        }
    }
    .invoice-summary-inner{
        .summary-list{
            margin: 22px 0;
            li{
                &:not(:last-child){
                    margin-bottom: 12px;
                }
            }
        }
      
    }

    .summary-list{
		padding: 0;
        li{
            display: flex;
            justify-content: space-between;
            &:not(:last-child){
                margin-bottom: 18px;
            }
            span{
                font-weight: 500;
            }
          
        }
    }
    .ant-select-focused.ant-select-single{
        .ant-select-selector{
            box-shadow: 0 0 !important;
        }
    }
    .ant-select-single{
        margin-top: 18px;
        .ant-select-selection-search-input{
            height: fit-content;
        }
        .ant-select-selector{
            padding: 0 !important;
            border: 0 none !important;
            
        }
       
    }
    .promo-apply-form{
        display: flex;
        align-items: flex-end;
        margin: 5px 0 18px;
        @media only screen and (max-width: 479px){
            flex-flow: column;
            align-items: flex-start;
        }
        .ant-form-item{
            margin-bottom: 0;
        }
        .ant-row{
            flex: auto;
            flex-flow: column;
        }
        .ant-form-item-label{
            text-align: 'right';
            line-height: 30px;
            label{
                font-weight: 400;
                margin-bottom: 4px;
                height: fit-content;
                
            }
        }
        .ant-form-item-control-wrapper{
            display: flex;
            width: 100%;
            @media only screen and (max-width: 479px){
                flex-flow: column;
            }
            .ant-form-item-control{
                width: 100%;
            }
            .ant-form-item-children{
                display: block;
                margin: '0 6px 0 0';
                height: auto;
                @media only screen and (max-width: 479px){
                    margin: '0 6px 10px 0';
                }
            }
            input{
                height: 40px;
                @media only screen and (max-width: 479px){
                    width: 100% !important;
                }
            }
            button{
                height: 40px;
            }
        }
    }
    .summary-total{
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        .summary-total-label{
            font-size: 16px;
            font-weight: 500;
          
        }
        .summary-total-amount{
            font-size: 18px;
            font-weight: 600;
          
        }
    }
    .btn-proceed{
        font-size: 15px;
        font-weight: 500;
        width: 100%;
        height: 50px;
        border-radius: 8px;
        margin-top: 22px;
        @media only screen and (max-width: 575px){
            font-size: 13px;
        }
        a{
            display: flex;
            align-items: center;
        }
        i,
        svg{
            'margin-left' : 6px;
            color: #fff;
        }
    }
`,Ct=()=>{const{t:n}=me();Te();const l=F([]);F([]);const k=F([]),e=F([]),U=F([]),V=F([]),_=F({}),y=F({user_id:void 0,tax_id:void 0,category_id:void 0,brand_id:void 0,tax_id:void 0,tax_rate:0,tax_amount:0,discount_type:"percentage",discount_value:0,discount:0,shipping:0,subtotal:0}),u=[{title:"#",dataIndex:"sn"},{title:n("product.name"),dataIndex:"name"},{title:n("product.quantity"),dataIndex:"unit_quantity"},{title:n("product.subtotal"),dataIndex:"subtotal"},{title:n("common.action"),dataIndex:"action"}],w="customers?limit=10000";return{taxes:l,customers:k,brands:e,categories:U,productLists:V,formData:y,customerUrl:w,orderItemColumns:u,getPreFetchData:()=>{const x=axiosAdmin.get("taxes?limit=10000"),N=axiosAdmin.get(w),f=axiosAdmin.get("categories?limit=10000"),g=axiosAdmin.get("brands?limit=10000"),E=axiosAdmin.post("pos/products",{brand_id:y.value.brand_id,category_id:y.value.category_id}),W=axiosAdmin.get("default-walkin-customer");Promise.all([x,N,E,f,g,W]).then(([z,j,M,I,q,K])=>{l.value=z.data,k.value=j.data,U.value=I.data,e.value=q.data,V.value=M.data.products;var p=pe(k.value,["xid",K.data.customer.xid]);p&&(_.value=p,y.value={...y.value,user_id:p.xid})})},posDefaultCustomer:_}},wt={props:["product"],setup(n){const{formatAmountCurrency:l}=_e();return{formatAmountCurrency:l}}},Ft={key:0,class:"product-pos"},St={class:"product-pos-top"},Dt={href:"javascript:void(0)"},At={key:0,class:"quantity-box",to:"#"},Et={key:1,class:"quantity-box",to:"#"},Pt=["src"],Ot={class:"product-pos-bottom"},It={class:"product-title"},qt={class:"product-details"},Rt={class:"product-price"};function Ut(n,l,k,e,U,V){return k.product&&k.product.xid?(d(),v("div",Ft,[h("div",St,[h("a",Dt,[k.product.product_type=="service"?(d(),v("span",At,s(n.$t("product.service")),1)):(d(),v("span",Et,s(k.product.stock_quantity)+" "+s(k.product.unit.short_name),1)),h("img",{src:k.product.image_url,class:"img-fit"},null,8,Pt)])]),h("div",Ot,[h("div",null,[h("h5",It,s(k.product.name),1)]),h("div",qt,[h("div",Rt,[h("span",null,s(e.formatAmountCurrency(k.product.subtotal)),1)])])])])):A("",!0)}const Mt=te(wt,[["render",Ut]]),zt={props:["visible","data","selectedProducts"],emits:["closed","success"],components:{CheckOutlined:Ne,PlusOutlined:ke,LeftOutlined:Ve,RightOutlined:Le,DeleteOutlined:Ce},setup(n,{emit:l}){const{addEditRequestAdmin:k,loading:e,rules:U}=mt(),{appSetting:V,formatAmountCurrency:_}=_e(),y=F([]),u=F({payment_mode_id:void 0,amount:0,notes:""}),{t:w}=me(),r=F([]),x=F([{title:w("payments.payment_mode"),dataIndex:"payment_mode"},{title:w("payments.amount"),dataIndex:"amount"},{title:w("common.action"),dataIndex:"action"}]),N=F(!1);we(()=>{axiosAdmin.get("payment-modes").then(I=>{y.value=I.data})});const f=()=>{u.value={payment_mode_id:void 0,amount:0,notes:""},r.value=[],l("closed")},g=()=>{k({url:"pos/payment",data:u.value,success:I=>{r.value=[...r.value,{...u.value,id:Math.random().toString(36).slice(2)}],u.value={payment_mode_id:void 0,amount:0,notes:""},N.value=!1}})},E=()=>{const I={all_payments:r.value,product_items:n.selectedProducts,details:n.data};k({url:"pos/save",data:I,successMessage:n.successMessage,success:q=>{u.value={payment_mode_id:void 0,amount:0,notes:""},r.value=[],N.value=!1,l("success",q.order)}})},W=()=>{u.value={payment_mode_id:void 0,amount:0,notes:""},N.value=!1},z=I=>{var q=pe(y.value,["xid",I]);return q?q.name:"-"},j=I=>{var q=_t(r.value,K=>K.id!=I);r.value=q},M=Be(()=>{var I=pt(r.value,q=>parseFloat(q.amount));return I+parseFloat(u.value.amount)});return{loading:e,rules:U,drawerClosed:f,paymentModes:y,formData:u,appSetting:V,formatAmountCurrency:_,onSubmit:g,allPaymentRecords:r,paymentRecordsColumns:x,showAddForm:N,completeOrder:E,goBack:W,getPaymentModeName:z,deletePayment:j,totalEnteredAmount:M,drawerWidth:window.innerWidth<=991?"90%":"50%"}}},Tt={style:{color:"#7c8db5 !important"}};function Nt(n,l,k,e,U,V){const _=We,y=de,u=ie,w=O("PlusOutlined"),r=Fe,x=O("RightOutlined"),N=O("LeftOutlined"),f=O("DeleteOutlined"),g=Se,E=ge,W=fe,z=De,j=je,M=Ke,I=O("CheckOutlined"),q=Ae,K=Xe;return d(),m(K,{title:n.$t("payments.order_payment"),width:e.drawerWidth,maskClosable:!1,open:k.visible,onClose:e.drawerClosed},{default:t(()=>[a(u,null,{default:t(()=>[a(y,{xs:24,sm:24,md:8,lg:8},{default:t(()=>[a(u,null,{default:t(()=>[a(y,{span:24},{default:t(()=>[a(_,{title:n.$t("stock.total_items"),value:k.selectedProducts.length,style:{"margin-right":"50px"}},null,8,["title","value"])]),_:1}),a(y,{span:24,class:"mt-20"},{default:t(()=>[a(_,{title:n.$t("stock.paying_amount"),value:e.formatAmountCurrency(e.totalEnteredAmount)},null,8,["title","value"])]),_:1}),a(y,{span:24,class:"mt-20"},{default:t(()=>[a(_,{title:n.$t("stock.payable_amount"),value:e.formatAmountCurrency(k.data.subtotal)},null,8,["title","value"])]),_:1}),a(y,{span:24,class:"mt-20"},{default:t(()=>[e.totalEnteredAmount<=k.data.subtotal?(d(),m(_,{key:0,title:n.$t("payments.due_amount"),value:e.formatAmountCurrency(k.data.subtotal-e.totalEnteredAmount)},null,8,["title","value"])):(d(),m(_,{key:1,title:n.$t("stock.change_return"),value:e.formatAmountCurrency(e.totalEnteredAmount-k.data.subtotal)},null,8,["title","value"]))]),_:1})]),_:1})]),_:1}),a(y,{xs:24,sm:24,md:16,lg:16},{default:t(()=>[a(u,{gutter:[24,24]},{default:t(()=>[e.showAddForm?(d(),m(y,{key:1,span:24},{default:t(()=>[a(u,null,{default:t(()=>[a(y,{xs:24,sm:24,md:10,lg:10},{default:t(()=>[a(r,{block:!0,type:"primary",onClick:e.goBack},{default:t(()=>[a(N),c(" "+s(n.$t("common.back")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})):(d(),m(y,{key:0,span:24},{default:t(()=>[a(u,{gutter:[16,8],class:"mt-20"},{default:t(()=>[a(y,{xs:24,sm:24,md:10,lg:10},{default:t(()=>[a(r,{block:!0,type:"primary",onClick:l[0]||(l[0]=()=>e.showAddForm=!0)},{default:t(()=>[a(w),c(" "+s(n.$t("payments.add")),1)]),_:1})]),_:1}),a(y,{xs:24,sm:24,md:10,lg:10},{default:t(()=>[a(r,{loading:e.loading,block:!0,onClick:e.completeOrder},{default:t(()=>[c(s(n.$t("stock.complete_order"))+" ",1),a(x)]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1})),e.showAddForm?(d(),m(y,{key:3,span:24},{default:t(()=>[a(q,{layout:"vertical"},{default:t(()=>[a(u,{gutter:16},{default:t(()=>[a(y,{xs:24,sm:24,md:12,lg:12},{default:t(()=>[a(z,{label:n.$t("payments.payment_mode"),name:"payment_mode_id",help:e.rules.payment_mode_id?e.rules.payment_mode_id.message:null,validateStatus:e.rules.payment_mode_id?"error":null},{default:t(()=>[a(W,{value:e.formData.payment_mode_id,"onUpdate:value":l[1]||(l[1]=p=>e.formData.payment_mode_id=p),placeholder:n.$t("common.select_default_text",[n.$t("payments.payment_mode")]),allowClear:!0},{default:t(()=>[(d(!0),v(S,null,T(e.paymentModes,p=>(d(),m(E,{key:p.xid,value:p.xid},{default:t(()=>[c(s(p.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1}),a(y,{xs:24,sm:24,md:12,lg:12},{default:t(()=>[a(z,{label:n.$t("stock.paying_amount"),name:"amount",help:e.rules.amount?e.rules.amount.message:null,validateStatus:e.rules.amount?"error":null},{default:t(()=>[a(j,{prefix:e.appSetting.currency.symbol,value:e.formData.amount,"onUpdate:value":l[2]||(l[2]=p=>e.formData.amount=p),placeholder:n.$t("common.placeholder_default_text",[n.$t("stock.payable_amount")])},null,8,["prefix","value","placeholder"]),h("small",Tt,[c(s(n.$t("stock.payable_amount"))+" ",1),h("span",null,s(e.formatAmountCurrency(k.data.subtotal)),1)])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(u,{gutter:16},{default:t(()=>[a(y,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(z,{label:n.$t("payments.notes"),name:"notes",help:e.rules.notes?e.rules.notes.message:null,validateStatus:e.rules.notes?"error":null},{default:t(()=>[a(M,{value:e.formData.notes,"onUpdate:value":l[3]||(l[3]=p=>e.formData.notes=p),placeholder:n.$t("payments.notes"),rows:5},null,8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(u,{gutter:16},{default:t(()=>[a(y,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(r,{type:"primary",loading:e.loading,onClick:e.onSubmit,block:""},{icon:t(()=>[a(I)]),default:t(()=>[c(" "+s(n.$t("common.add")),1)]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1})]),_:1})):(d(),m(y,{key:2,span:24},{default:t(()=>[a(g,{dataSource:e.allPaymentRecords,columns:e.paymentRecordsColumns,pagination:!1},{bodyCell:t(({column:p,record:X})=>[p.dataIndex==="payment_mode"?(d(),v(S,{key:0},[c(s(e.getPaymentModeName(X.payment_mode_id)),1)],64)):A("",!0),p.dataIndex==="amount"?(d(),v(S,{key:1},[c(s(e.formatAmountCurrency(X.amount)),1)],64)):A("",!0),p.dataIndex==="action"?(d(),m(r,{key:2,type:"primary",onClick:Y=>e.deletePayment(X.id),danger:""},{icon:t(()=>[a(f)]),_:2},1032,["onClick"])):A("",!0)]),_:1},8,["dataSource","columns"])]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1},8,["title","width","open","onClose"])}const Vt=te(zt,[["render",Nt]]),Lt=Ee({props:["formData","brands","categories"],emits:["changed"],components:{ContainerOutlined:yt},setup(n,{emit:l}){return{reFetchProducts:()=>{l("changed")},getCategoryName:U=>U.length>9?U.substring(0,8)+"..":U}}}),Bt=["onClick"];function Wt(n,l,k,e,U,V){const _=O("ContainerOutlined"),y=Ge,u=He,w=de,r=ie;return d(),m(r,{gutter:[16,16]},{default:t(()=>[a(w,{xs:24,sm:24,md:24,lg:24,xl:24,class:"pos-style-1-category-scroll"},{default:t(()=>[h("div",{onClick:l[0]||(l[0]=()=>{n.formData.category_id=void 0,n.reFetchProducts()}),class:"pos-style-1-category-box"},[a(y,{shape:"square",size:"large",style:{backgroundColor:"#fff",color:"black",verticalAlign:"middle",marginTop:"5px"}},{icon:t(()=>[a(_)]),_:1}),h("p",null,s(n.$t("common.all")),1)]),(d(!0),v(S,null,T(n.categories,x=>(d(),v("div",{key:x.xid,onClick:()=>{n.formData.category_id=x.xid,n.reFetchProducts()},class:"pos-style-1-category-box"},[a(u,{title:x.name},{default:t(()=>[a(y,{size:"large",src:x.image_url,style:{verticalAlign:"middle",marginTop:"5px"}},null,8,["src"]),h("p",null,s(n.getCategoryName(x.name)),1)]),_:2},1032,["title"])],8,Bt))),128))]),_:1})]),_:1})}const jt=te(Lt,[["render",Wt]]),Kt=Ee({props:["formData","brands","categories"],emits:["changed"],setup(n,{emit:l}){return{reFetchProducts:()=>{l("changed")}}}});function Xt(n,l,k,e,U,V){const _=ge,y=fe,u=de,w=Pe,r=ie;return d(),m(r,{gutter:[16,16]},{default:t(()=>[a(u,{xs:24,sm:24,md:12,lg:12,xl:12},{default:t(()=>[a(y,{value:n.formData.brand_id,"onUpdate:value":l[0]||(l[0]=x=>n.formData.brand_id=x),placeholder:n.$t("common.select_default_text",[n.$t("product.brand")]),allowClear:!0,style:{width:"100%"},optionFilterProp:"title","show-search":"",onChange:n.reFetchProducts},{default:t(()=>[(d(!0),v(S,null,T(n.brands,x=>(d(),m(_,{key:x.xid,title:x.name,value:x.xid},{default:t(()=>[c(s(x.name),1)]),_:2},1032,["title","value"]))),128))]),_:1},8,["value","placeholder","onChange"])]),_:1}),a(u,{xs:24,sm:24,md:12,lg:12,xl:12},{default:t(()=>[a(w,{compact:""},{default:t(()=>[a(y,{value:n.formData.category_id,"onUpdate:value":l[1]||(l[1]=x=>n.formData.category_id=x),placeholder:n.$t("common.select_default_text",[n.$t("product.category")]),allowClear:!0,style:{width:"100%"},optionFilterProp:"title","show-search":"",onChange:n.reFetchProducts},{default:t(()=>[(d(!0),v(S,null,T(n.categories,x=>(d(),m(_,{key:x.xid,title:x.name,value:x.xid},{default:t(()=>[c(s(x.name),1)]),_:2},1032,["title","value"]))),128))]),_:1},8,["value","placeholder","onChange"])]),_:1})]),_:1})]),_:1})}const Gt=te(Kt,[["render",Xt]]),Ht={components:{PlusOutlined:ke,SearchOutlined:Qe,EditOutlined:Ye,DeleteOutlined:Ce,SaveOutlined:vt,SettingOutlined:xt,ShoppingCartOutlined:bt,UnorderedListOutlined:ht,PosLayout1:jt,PosLayout2:Gt,ProductCardNew:Mt,OrderSummary:kt,PayNow:Vt,CustomerAddButton:ft,InvoiceModal:gt},setup(){const{taxes:n,customers:l,brands:k,categories:e,productLists:U,orderItemColumns:V,formData:_,customerUrl:y,getPreFetchData:u,posDefaultCustomer:w}=Ct(),r=F([]),x=F([]),N=F([]),f=F(1),g=Je({orderSearchTerm:void 0,productFetching:!1,products:[]}),{formatAmount:E,formatAmountCurrency:W,appSetting:z,taxTypes:j,permsArray:M}=_e(),{t:I}=me(),q=F(!1),K=F(!1),p=F({}),X=F([]),Y=F(""),G=F(!1),J=F(!1),Z=F({}),se=F(!1),H=F(!1);we(()=>{u(),H.value=!1}),Ze(()=>{});const $=()=>{axiosAdmin.post("pos/products",{brand_id:_.value.brand_id,category_id:_.value.category_id}).then(i=>{U.value=i.data.products})},ae=$e(i=>{ee(i)},300),ee=i=>{g.products=[],i!=""&&(g.productFetching=!0,axiosAdmin.post("search-product",{order_type:"sales",search_term:i}).then(D=>{D.data.length==1?ne("",{product:D.data[0]}):g.products=D.data,g.productFetching=!1}))},re=i=>{tt(()=>{i.keyCode==13&&ee(i.target.value)})},ne=(i,b)=>{const D=b.product;oe(D)},oe=i=>{if(at(x.value,i.xid)){const R=pe(r.value,["xid",i.xid]);if(R&&(R.quantity<R.stock_quantity||R.product_type=="service")){const P=[];var D={};r.value.map(B=>{var Q=B.quantity;B.xid==i.xid&&(Q+=1,B.quantity=Q,D=B),P.push(B)}),r.value=P;var b=new Audio(z.value.beep_audio_url);b.play(),g.orderSearchTerm=void 0,g.products=[],o(D)}else g.orderSearchTerm=void 0,g.products=[],nt.error(I("common.out_of_stock"))}else{x.value.push(i.xid),r.value.push({...i,sn:r.value.length+1,unit_price:E(i.unit_price),tax_amount:E(i.tax_amount),subtotal:E(i.subtotal)}),g.orderSearchTerm=void 0,g.products=[],C();var b=new Audio(z.value.beep_audio_url);b.play()}},ue=i=>{var b=parseFloat(i.quantity),D=parseFloat(i.stock_quantity);const R=parseFloat(i.unit_price);i.product_type!="service"&&(b=b>D?D:b);const P=i.discount_rate,ve=P>0?P/100*R:0,B=R-ve;var Q=0,xe=B,le=R;return i.tax_rate>0&&(i.tax_type=="inclusive"?(le=B*100/(100+i.tax_rate),Q=le*(i.tax_rate/100)):(Q=B*(i.tax_rate/100),xe=B+Q,le=B)),{...i,total_discount:ve*b,subtotal:xe*b,quantity:b,total_tax:Q*b,max_quantity:D,single_unit_price:le}},o=i=>{const b=[];r.value.map(D=>{if(D.xid==i.xid){const R=ue(i);b.push(R)}else b.push(D)}),r.value=b,C()},C=()=>{let i=0;r.value.map(P=>{i+=P.subtotal});var b=0;_.value.discount_type=="percentage"?b=_.value.discount_value!=""?parseFloat(_.value.discount_value)*i/100:0:_.value.discount_type=="fixed"&&(b=_.value.discount_value!=""?parseFloat(_.value.discount_value):0);const D=_.value.tax_rate!=""?parseFloat(_.value.tax_rate):0;i=i-b;const R=i*(D/100);i=i+parseFloat(_.value.shipping),_.value.subtotal=E(i+R),_.value.tax_amount=E(R),_.value.discount=b},L=i=>{const b=[];let D=1;r.value.map(P=>{P.item_id!=null&&(N.value=[...N.value,P.item_id]),P.xid!=i.xid&&(b.push({...P,sn:D,single_unit_price:E(P.single_unit_price),tax_amount:E(P.tax_amount),subtotal:E(P.subtotal)}),D++)}),r.value=b;const R=x.value.filter(P=>P!=i.xid);x.value=R,C()},Oe=(i,b)=>{_.value.tax_rate=i==null?0:b.tax.rate,C()},Ie=i=>{p.value={id:i.xid,discount_rate:i.discount_rate,unit_price:i.unit_price,tax_id:i.x_tax_id,tax_type:i.tax_type==null?void 0:i.tax_type},q.value=!0,Y.value=i.name},qe=()=>{G.value=!0},Re=()=>{G.value=!1},ye=()=>{r.value=[],x.value=[],_.value={..._.value,tax_id:void 0,category_id:void 0,brand_id:void 0,tax_id:void 0,tax_rate:0,tax_amount:0,discount_value:0,discount:0,shipping:0,subtotal:0},C()},Ue=()=>{const i=r.value.filter(P=>P.xid==p.value.id),b=n.value.filter(P=>P.xid==p.value.tax_id),D=p.value.tax_type!=null?p.value.tax_type:"exclusive",R={...i[0],discount_rate:parseFloat(p.value.discount_rate),unit_price:parseFloat(p.value.unit_price),tax_id:p.value.tax_id,tax_rate:b[0]?b[0].rate:0,tax_type:D};o(R),he()},he=()=>{p.value={},q.value=!1},Me=()=>{axiosAdmin.get(y).then(i=>{l.value=i.data})},ze=i=>{ye();var b=w.value&&w.value.xid?w.value.xid:void 0;_.value={..._.value,user_id:b},$(),G.value=!1,Z.value=i,J.value=!0};return{taxes:n,customers:l,categories:e,brands:k,productLists:U,formData:_,reFetchProducts:$,selectSaleProduct:oe,taxChanged:Oe,quantityChanged:o,recalculateFinalTotal:C,payNow:qe,payNowVisible:G,payNowClosed:Re,resetPos:ye,appSetting:z,permsArray:M,...et(g),fetchProducts:ae,searchValueSelected:ne,selectedProducts:r,orderItemColumns:V,formatAmount:E,formatAmountCurrency:W,containerStyle:{height:window.innerHeight-110+"px",overflow:"scroll","overflow-y":"scroll"},customerAdded:Me,editItem:Ie,addEditVisible:q,addEditFormData:p,addEditFormSubmitting:K,addEditRules:X,addEditPageTitle:Y,onAddEditSubmit:Ue,onAddEditClose:he,taxTypes:j,showDeleteConfirm:L,payNowSuccess:ze,printInvoiceModalVisible:J,printInvoiceOrder:Z,postLayout:f,innerWidth:window.innerWidth,inputValueChanged:re,showMobileCart:se,isFullscreen:H,toggleFullscreen:()=>{document.fullscreenElement?(H.value=!1,document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()):(H.value=!0,document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen())},handleFullscreenChange:()=>{H.value=!!document.fullscreenElement}}}},Qt={style:{display:"flex"}},Yt={key:0},Jt=h("br",null,null,-1),Zt={class:"pos-left-wrapper"},$t={class:"pos-left-header"},ea={class:"bill-filters"},ta={style:{display:"flex"}},aa={key:0},na=h("br",null,null,-1),oa={style:{display:"flex"}},la={class:"pos-left-content"},da={class:"bill-body"},ia={class:"bill-table"},sa=h("br",null,null,-1),ra={key:0},ua={class:"pos-left-footer"},ca={class:"bill-footer"},ma={style:{right:0,bottom:20,width:"100%",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},pa={class:"pos-grand-total"},_a={class:"pos-grand-total"},fa={style:{display:"flex"}},ga={class:"pos1-left-wrapper"},ya={key:0,class:"pos-left-header"},ha={key:1,class:"pos-left-content"},va={key:2},xa=h("br",null,null,-1),ba={key:0},ka={key:3,class:"pos-left-footer"},Ca={class:"bill-footer",style:{paddingBotton:"30px"}},wa={key:0,class:"pos-mobile-footer"},Fa={class:"pos-grand-total"};function Sa(n,l,k,e,U,V){const _=O("FullscreenOutlined"),y=O("FullscreenExitOutlined"),u=Fe,w=ge,r=fe,x=O("CustomerAddButton"),N=dt,f=de,g=ie,E=ot,W=O("SearchOutlined"),z=it,j=st,M=rt,I=O("EditOutlined"),q=O("DeleteOutlined"),K=Se,p=De,X=Pe,Y=ut,G=O("PosLayout1"),J=O("PosLayout2"),Z=O("ProductCardNew"),se=ct,H=O("perfect-scrollbar"),$=O("ShoppingCartOutlined"),ae=O("UnorderedListOutlined"),ee=Ae,re=O("SaveOutlined"),ne=lt,oe=O("PayNow"),ue=O("InvoiceModal");return d(),v(S,null,[a(E,{class:"page-content-sub-header breadcrumb-left-border",bodyStyle:{padding:"0px",margin:"0px 16px 0"}},{default:t(()=>[a(g,null,{default:t(()=>[a(f,{span:24},{default:t(()=>[a(N,{title:n.$t("menu.pos"),onBack:l[1]||(l[1]=()=>n.$router.go(-1)),class:"p-0"},ce({extra:t(()=>[a(u,{type:"primary",onClick:e.toggleFullscreen},{icon:t(()=>[e.isFullscreen?(d(),m(y,{key:1})):(d(),m(_,{key:0}))]),default:t(()=>[c(" "+s(e.isFullscreen?" Exit Fullscreen":" Fullscreen"),1)]),_:1},8,["onClick"])]),_:2},[e.innerWidth<=768?{name:"extra",fn:t(()=>[h("span",Qt,[a(r,{value:e.formData.user_id,"onUpdate:value":l[0]||(l[0]=o=>e.formData.user_id=o),placeholder:n.$t("user.walk_in_customer"),style:{width:"100%"},optionFilterProp:"title","show-search":""},{default:t(()=>[(d(!0),v(S,null,T(e.customers,o=>(d(),m(w,{key:o.xid,title:o.name,value:o.xid},{default:t(()=>[c(s(o.name)+" ",1),o.phone&&o.phone!=""?(d(),v("span",Yt,[Jt,c(" "+s(o.phone),1)])):A("",!0)]),_:2},1032,["title","value"]))),128))]),_:1},8,["value","placeholder"]),a(x,{onOnAddSuccess:e.customerAdded},null,8,["onOnAddSuccess"])])]),key:"0"}:void 0]),1032,["title"])]),_:1})]),_:1})]),_:1}),a(ee,{layout:"vertical"},{default:t(()=>[e.innerWidth>=768?(d(),m(g,{key:0,gutter:[8,8],class:"mt-5",style:{margin:"10px 16px 0"}},{default:t(()=>[a(f,{xs:24,sm:24,md:24,lg:10,xl:10},{default:t(()=>[h("div",Zt,[h("div",$t,[a(E,{class:"left-pos-top",style:{marginBottom:"10px"}},{default:t(()=>[h("div",ea,[a(g,{gutter:16},{default:t(()=>[a(f,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[h("span",ta,[a(r,{value:e.formData.user_id,"onUpdate:value":l[2]||(l[2]=o=>e.formData.user_id=o),placeholder:n.$t("user.walk_in_customer"),style:{width:"100%"},optionFilterProp:"title","show-search":""},{default:t(()=>[(d(!0),v(S,null,T(e.customers,o=>(d(),m(w,{key:o.xid,title:o.name,value:o.xid},{default:t(()=>[c(s(o.name)+" ",1),o.phone&&o.phone!=""?(d(),v("span",aa,[na,c(" "+s(o.phone),1)])):A("",!0)]),_:2},1032,["title","value"]))),128))]),_:1},8,["value","placeholder"]),a(x,{onOnAddSuccess:e.customerAdded},null,8,["onOnAddSuccess"])])]),_:1})]),_:1}),a(g,{class:"mt-20 mb-30"},{default:t(()=>[a(f,{xs:24,sm:24,md:24,lg:24,xl:24},{default:t(()=>[h("span",oa,[a(r,{value:null,searchValue:n.orderSearchTerm,"show-search":"","filter-option":!1,placeholder:n.$t("product.search_scan_product"),style:{width:"100%"},"not-found-content":n.productFetching?void 0:null,onSearch:l[3]||(l[3]=o=>{n.orderSearchTerm=o,e.fetchProducts(o)}),"option-label-prop":"label",onFocus:l[4]||(l[4]=o=>n.products=[]),onSelect:e.searchValueSelected,onInputKeyDown:e.inputValueChanged},ce({suffixIcon:t(()=>[a(W)]),default:t(()=>[(d(!0),v(S,null,T(n.products,o=>(d(),m(w,{key:o.xid,value:o.xid,label:o.name,product:o},{default:t(()=>[c(" => "+s(o.name),1)]),_:2},1032,["value","label","product"]))),128))]),_:2},[n.productFetching?{name:"notFoundContent",fn:t(()=>[a(z,{size:"small"})]),key:"0"}:void 0]),1032,["searchValue","placeholder","not-found-content","onSelect","onInputKeyDown"])])]),_:1})]),_:1})])]),_:1})]),h("div",la,[a(E,{class:"left-pos-middle-table",style:{marginBottom:"10px"}},{default:t(()=>[h("div",da,[h("div",ia,[a(g,{class:"mt-20 mb-30"},{default:t(()=>[a(f,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(K,{"row-key":o=>o.xid,dataSource:e.selectedProducts,columns:e.orderItemColumns,pagination:!1,size:"middle"},{bodyCell:t(({column:o,record:C})=>[o.dataIndex==="name"?(d(),v(S,{key:0},[c(s(C.name)+" ",1),sa,C.product_type!="service"?(d(),v("small",ra,[a(j,{code:""},{default:t(()=>[c(s(n.$t("product.avl_qty"))+" "+s(`${C.stock_quantity}${C.unit_short_name}`),1)]),_:2},1024)])):A("",!0)],64)):A("",!0),o.dataIndex==="unit_quantity"?(d(),m(M,{key:1,id:"inputNumber",value:C.quantity,"onUpdate:value":L=>C.quantity=L,min:0,onChange:L=>e.quantityChanged(C)},null,8,["value","onUpdate:value","onChange"])):A("",!0),o.dataIndex==="subtotal"?(d(),v(S,{key:2},[c(s(e.formatAmountCurrency(C.subtotal)),1)],64)):A("",!0),o.dataIndex==="action"?(d(),v(S,{key:3},[a(u,{type:"primary",onClick:L=>e.editItem(C),style:{"margin-left":"4px","margin-top":"4px"}},{icon:t(()=>[a(I)]),_:2},1032,["onClick"]),a(u,{type:"primary",onClick:L=>e.showDeleteConfirm(C),style:{"margin-left":"4px","margin-top":"4px"}},{icon:t(()=>[a(q)]),_:2},1032,["onClick"])],64)):A("",!0)]),_:1},8,["row-key","dataSource","columns"])]),_:1})]),_:1})])])]),_:1})]),h("div",ua,[a(E,null,{default:t(()=>[h("div",ca,[a(g,{gutter:[16,16]},{default:t(()=>[a(f,{xs:24,sm:24,md:8,lg:8,xl:8},{default:t(()=>[a(p,{label:n.$t("stock.order_tax")},{default:t(()=>[a(r,{value:e.formData.tax_id,"onUpdate:value":l[5]||(l[5]=o=>e.formData.tax_id=o),placeholder:n.$t("common.select_default_text",[n.$t("stock.order_tax")]),allowClear:!0,style:{width:"100%"},onChange:e.taxChanged},{default:t(()=>[(d(!0),v(S,null,T(e.taxes,o=>(d(),m(w,{key:o.xid,value:o.xid,tax:o},{default:t(()=>[c(s(o.name)+" ("+s(o.rate)+"%) ",1)]),_:2},1032,["value","tax"]))),128))]),_:1},8,["value","placeholder","onChange"])]),_:1},8,["label"])]),_:1}),a(f,{xs:24,sm:24,md:8,lg:8,xl:8},{default:t(()=>[a(p,{label:n.$t("stock.discount")},{default:t(()=>[a(X,{compact:""},{default:t(()=>[a(r,{value:e.formData.discount_type,"onUpdate:value":l[6]||(l[6]=o=>e.formData.discount_type=o),onChange:e.recalculateFinalTotal,style:{width:"30%"}},{default:t(()=>[a(w,{value:"percentage"},{default:t(()=>[c(" % ")]),_:1}),a(w,{value:"fixed"},{default:t(()=>[c(s(e.appSetting.currency.symbol),1)]),_:1})]),_:1},8,["value","onChange"]),a(M,{value:e.formData.discount_value,"onUpdate:value":l[7]||(l[7]=o=>e.formData.discount_value=o),placeholder:n.$t("common.placeholder_default_text",[n.$t("stock.discount")]),onChange:e.recalculateFinalTotal,min:"0",style:{width:"70%"}},null,8,["value","placeholder","onChange"])]),_:1})]),_:1},8,["label"])]),_:1}),a(f,{xs:24,sm:24,md:8,lg:8,xl:8},{default:t(()=>[a(p,{label:n.$t("stock.shipping")},{default:t(()=>[a(M,{value:e.formData.shipping,"onUpdate:value":l[8]||(l[8]=o=>e.formData.shipping=o),placeholder:n.$t("common.placeholder_default_text",[n.$t("stock.shipping")]),onChange:e.recalculateFinalTotal,min:"0",style:{width:"100%"}},{addonBefore:t(()=>[c(s(e.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder","onChange"])]),_:1},8,["label"])]),_:1})]),_:1})])]),_:1}),h("div",ma,[a(g,{gutter:16},{default:t(()=>[a(f,{xs:24,sm:24,md:10,lg:10,xl:10},{default:t(()=>[a(g,{gutter:16,style:{background:"#dbdbdb",padding:"5px"}},{default:t(()=>[a(f,{xs:24,sm:24,md:12,lg:12,xl:12},{default:t(()=>[h("span",pa,s(n.$t("stock.grand_total"))+" : ",1)]),_:1}),a(f,{xs:24,sm:24,md:12,lg:12,xl:12},{default:t(()=>[h("span",_a,s(e.formatAmountCurrency(e.formData.subtotal)),1)]),_:1})]),_:1})]),_:1}),a(f,{xs:24,sm:24,md:6,lg:6,xl:6,class:"mt-10"},{default:t(()=>[h("small",null,s(n.$t("product.tax"))+" : "+s(e.formatAmountCurrency(e.formData.tax_amount))+" | "+s(n.$t("product.discount"))+" : "+s(e.formatAmountCurrency(e.formData.discount)),1)]),_:1}),a(f,{xs:24,sm:24,md:8,lg:8,xl:8},{default:t(()=>[a(Y,null,{default:t(()=>[a(u,{type:"primary",onClick:e.payNow,disabled:e.formData.subtotal<=0||e.formData.user_id==null||e.formData.user_id==""||!e.formData.user_id},{default:t(()=>[c(s(n.$t("stock.pay_now")),1)]),_:1},8,["onClick","disabled"]),a(u,{onClick:e.resetPos},{default:t(()=>[c(s(n.$t("stock.reset")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})])])])]),_:1}),a(f,{class:"right-pos-sidebar",xs:24,sm:24,md:24,lg:14,xl:14},{default:t(()=>[a(H,{options:{wheelSpeed:1,swipeEasing:!0,suppressScrollX:!0}},{default:t(()=>[e.postLayout==1?(d(),m(G,{key:0,brands:e.brands,categories:e.categories,formData:e.formData,onChanged:e.reFetchProducts},null,8,["brands","categories","formData","onChanged"])):(d(),m(J,{key:1,brands:e.brands,categories:e.categories,formData:e.formData,onChanged:e.reFetchProducts},null,8,["brands","categories","formData","onChanged"])),e.productLists.length>0?(d(),m(g,{key:2,gutter:30},{default:t(()=>[(d(!0),v(S,null,T(e.productLists,o=>(d(),m(f,{key:o.xid,xxl:6,lg:6,md:12,xs:24,onClick:C=>e.selectSaleProduct(o)},{default:t(()=>[a(Z,{product:o},null,8,["product"])]),_:2},1032,["onClick"]))),128))]),_:1})):(d(),m(g,{key:3},{default:t(()=>[a(f,{span:24},{default:t(()=>[a(se,{title:n.$t("stock.no_product_found"),style:{marginTop:"20%"}},null,8,["title"])]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})):(d(),m(g,{key:1,gutter:[8,8],class:"mt-5",style:{margin:"10px 16px 0"}},{default:t(()=>[a(f,{span:24},{default:t(()=>[h("span",fa,[a(r,{value:null,searchValue:n.orderSearchTerm,"show-search":"","filter-option":!1,placeholder:n.$t("product.search_scan_product"),style:{width:"90%"},"not-found-content":n.productFetching?void 0:null,onSearch:l[9]||(l[9]=o=>{n.orderSearchTerm=o,e.fetchProducts(o)}),"option-label-prop":"label",onFocus:l[10]||(l[10]=o=>n.products=[]),onSelect:e.searchValueSelected,onInputKeyDown:e.inputValueChanged},ce({suffixIcon:t(()=>[a(W)]),default:t(()=>[(d(!0),v(S,null,T(n.products,o=>(d(),m(w,{key:o.xid,value:o.xid,label:o.name,product:o},{default:t(()=>[c(" => "+s(o.name),1)]),_:2},1032,["value","label","product"]))),128))]),_:2},[n.productFetching?{name:"notFoundContent",fn:t(()=>[a(z,{size:"small"})]),key:"0"}:void 0]),1032,["searchValue","placeholder","not-found-content","onSelect","onInputKeyDown"]),e.showMobileCart?(d(),m(u,{key:0,class:"ml-5",style:{width:"100%"},onClick:l[11]||(l[11]=()=>e.showMobileCart=!1),type:"primary"},{icon:t(()=>[a($)]),_:1})):(d(),m(u,{key:1,class:"ml-5",style:{width:"100%"},onClick:l[12]||(l[12]=()=>e.showMobileCart=!0),type:"primary"},{icon:t(()=>[a(ae)]),_:1}))])]),_:1}),a(f,{span:24},{default:t(()=>[h("div",ga,[e.showMobileCart?A("",!0):(d(),v("div",ya,[e.postLayout==1?(d(),m(G,{key:0,brands:e.brands,categories:e.categories,formData:e.formData,onChanged:e.reFetchProducts},null,8,["brands","categories","formData","onChanged"])):(d(),m(J,{key:1,brands:e.brands,categories:e.categories,formData:e.formData,onChanged:e.reFetchProducts},null,8,["brands","categories","formData","onChanged"]))])),e.showMobileCart?A("",!0):(d(),v("div",ha,[e.productLists.length>0?(d(),m(g,{key:0,gutter:30,class:"pos1-products-lists"},{default:t(()=>[(d(!0),v(S,null,T(e.productLists,o=>(d(),m(f,{key:o.xid,xxl:8,lg:8,md:8,sm:12,xs:12,onClick:C=>e.selectSaleProduct(o)},{default:t(()=>[a(Z,{product:o},null,8,["product"])]),_:2},1032,["onClick"]))),128))]),_:1})):A("",!0)])),e.showMobileCart?(d(),v("div",va,[a(g,{class:"mt-5 mb-5"},{default:t(()=>[a(f,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(K,{"row-key":o=>o.xid,dataSource:e.selectedProducts,columns:e.orderItemColumns,pagination:!1,size:"middle"},{bodyCell:t(({column:o,record:C})=>[o.dataIndex==="name"?(d(),v(S,{key:0},[c(s(C.name)+" ",1),xa,C.product_type!="service"?(d(),v("small",ba,[a(j,{code:""},{default:t(()=>[c(s(n.$t("product.avl_qty"))+" "+s(`${C.stock_quantity}${C.unit_short_name}`),1)]),_:2},1024)])):A("",!0)],64)):A("",!0),o.dataIndex==="unit_quantity"?(d(),m(M,{key:1,id:"inputNumber",value:C.quantity,"onUpdate:value":L=>C.quantity=L,min:0,onChange:L=>e.quantityChanged(C)},null,8,["value","onUpdate:value","onChange"])):A("",!0),o.dataIndex==="subtotal"?(d(),v(S,{key:2},[c(s(e.formatAmountCurrency(C.subtotal)),1)],64)):A("",!0),o.dataIndex==="action"?(d(),v(S,{key:3},[a(u,{type:"primary",onClick:L=>e.editItem(C),style:{"margin-left":"4px","margin-top":"4px"}},{icon:t(()=>[a(I)]),_:2},1032,["onClick"]),a(u,{type:"primary",onClick:L=>e.showDeleteConfirm(C),style:{"margin-left":"4px","margin-top":"4px"}},{icon:t(()=>[a(q)]),_:2},1032,["onClick"])],64)):A("",!0)]),_:1},8,["row-key","dataSource","columns"])]),_:1})]),_:1})])):A("",!0),e.showMobileCart?(d(),v("div",ka,[a(E,null,{default:t(()=>[h("div",Ca,[a(g,{gutter:[16]},{default:t(()=>[a(f,{xs:24,sm:24,md:8,lg:8},{default:t(()=>[a(p,{label:n.$t("stock.order_tax")},{default:t(()=>[a(r,{value:e.formData.tax_id,"onUpdate:value":l[13]||(l[13]=o=>e.formData.tax_id=o),placeholder:n.$t("common.select_default_text",[n.$t("stock.order_tax")]),allowClear:!0,style:{width:"100%"},onChange:e.taxChanged},{default:t(()=>[(d(!0),v(S,null,T(e.taxes,o=>(d(),m(w,{key:o.xid,value:o.xid,tax:o},{default:t(()=>[c(s(o.name)+" ("+s(o.rate)+"%) ",1)]),_:2},1032,["value","tax"]))),128))]),_:1},8,["value","placeholder","onChange"])]),_:1},8,["label"])]),_:1}),a(f,{xs:24,sm:24,md:8,lg:8},{default:t(()=>[a(p,{label:n.$t("stock.discount")},{default:t(()=>[a(X,{compact:""},{default:t(()=>[a(r,{value:e.formData.discount_type,"onUpdate:value":l[14]||(l[14]=o=>e.formData.discount_type=o),onChange:e.recalculateFinalTotal,style:{width:"30%"}},{default:t(()=>[a(w,{value:"percentage"},{default:t(()=>[c(" % ")]),_:1}),a(w,{value:"fixed"},{default:t(()=>[c(s(e.appSetting.currency.symbol),1)]),_:1})]),_:1},8,["value","onChange"]),a(M,{value:e.formData.discount_value,"onUpdate:value":l[15]||(l[15]=o=>e.formData.discount_value=o),placeholder:n.$t("common.placeholder_default_text",[n.$t("stock.discount")]),onChange:e.recalculateFinalTotal,min:"0",style:{width:"70%"}},null,8,["value","placeholder","onChange"])]),_:1})]),_:1},8,["label"])]),_:1}),a(f,{xs:24,sm:24,md:8,lg:8},{default:t(()=>[a(p,{label:n.$t("stock.shipping")},{default:t(()=>[a(M,{value:e.formData.shipping,"onUpdate:value":l[16]||(l[16]=o=>e.formData.shipping=o),placeholder:n.$t("common.placeholder_default_text",[n.$t("stock.shipping")]),onChange:e.recalculateFinalTotal,min:"0",style:{width:"100%"}},{addonBefore:t(()=>[c(s(e.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder","onChange"])]),_:1},8,["label"])]),_:1})]),_:1})])]),_:1})])):A("",!0)])]),_:1})]),_:1}))]),_:1}),e.innerWidth<=768?(d(),v("div",wa,[a(g,{gutter:16},{default:t(()=>[a(f,{span:10},{default:t(()=>[a(g,{gutter:16,style:{padding:"10px"}},{default:t(()=>[a(f,{span:24},{default:t(()=>[h("span",Fa,s(n.$t("common.total"))+" : "+s(e.formatAmountCurrency(e.formData.subtotal)),1)]),_:1})]),_:1})]),_:1}),a(f,{span:14},{default:t(()=>[a(Y,{style:{marginTop:"5px"}},{default:t(()=>[e.showMobileCart?(d(),m(u,{key:0,onClick:l[17]||(l[17]=()=>e.showMobileCart=!1),type:"primary"},{icon:t(()=>[a($)]),_:1})):(d(),m(u,{key:1,onClick:l[18]||(l[18]=()=>e.showMobileCart=!0),type:"primary"},{icon:t(()=>[a(ae)]),_:1})),a(u,{type:"primary",onClick:e.payNow,disabled:e.formData.subtotal<=0||e.formData.user_id==null||e.formData.user_id==""||!e.formData.user_id},{default:t(()=>[c(s(n.$t("stock.pay_now")),1)]),_:1},8,["onClick","disabled"]),a(u,{onClick:e.resetPos},{default:t(()=>[c(s(n.$t("stock.reset")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})])):A("",!0),a(ne,{open:e.addEditVisible,closable:!1,centered:!0,title:e.addEditPageTitle,onOk:e.onAddEditSubmit},{footer:t(()=>[a(u,{key:"submit",type:"primary",loading:e.addEditFormSubmitting,onClick:e.onAddEditSubmit},{icon:t(()=>[a(re)]),default:t(()=>[c(" "+s(n.$t("common.update")),1)]),_:1},8,["loading","onClick"]),a(u,{key:"back",onClick:e.onAddEditClose},{default:t(()=>[c(s(n.$t("common.cancel")),1)]),_:1},8,["onClick"])]),default:t(()=>[a(ee,{layout:"vertical"},{default:t(()=>[a(g,{gutter:16},{default:t(()=>[a(f,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(p,{label:n.$t("product.unit_price"),name:"unit_price",help:e.addEditRules.unit_price?e.addEditRules.unit_price.message:null,validateStatus:e.addEditRules.unit_price?"error":null},{default:t(()=>[a(M,{value:e.addEditFormData.unit_price,"onUpdate:value":l[19]||(l[19]=o=>e.addEditFormData.unit_price=o),placeholder:n.$t("common.placeholder_default_text",[n.$t("product.unit_price")]),min:"0",style:{width:"100%"}},{addonBefore:t(()=>[c(s(e.appSetting.currency.symbol),1)]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(g,{gutter:16},{default:t(()=>[a(f,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(p,{label:n.$t("product.discount"),name:"discount_rate",help:e.addEditRules.discount_rate?e.addEditRules.discount_rate.message:null,validateStatus:e.addEditRules.discount_rate?"error":null},{default:t(()=>[a(M,{value:e.addEditFormData.discount_rate,"onUpdate:value":l[20]||(l[20]=o=>e.addEditFormData.discount_rate=o),placeholder:n.$t("common.placeholder_default_text",[n.$t("product.discount")]),min:"0",style:{width:"100%"}},{addonAfter:t(()=>[c("%")]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(g,{gutter:16},{default:t(()=>[a(f,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(p,{label:n.$t("product.tax"),name:"tax_id",help:e.addEditRules.tax_id?e.addEditRules.tax_id.message:null,validateStatus:e.addEditRules.tax_id?"error":null},{default:t(()=>[a(r,{value:e.addEditFormData.tax_id,"onUpdate:value":l[21]||(l[21]=o=>e.addEditFormData.tax_id=o),placeholder:n.$t("common.select_default_text",[n.$t("product.tax")]),allowClear:!0},{default:t(()=>[(d(!0),v(S,null,T(e.taxes,o=>(d(),m(w,{key:o.xid,value:o.xid},{default:t(()=>[c(s(o.name)+" ("+s(o.rate)+"%) ",1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1}),a(g,{gutter:16},{default:t(()=>[a(f,{xs:24,sm:24,md:24,lg:24},{default:t(()=>[a(p,{label:n.$t("product.tax_type"),name:"tax_type",help:e.addEditRules.tax_type?e.addEditRules.tax_type.message:null,validateStatus:e.addEditRules.tax_type?"error":null},{default:t(()=>[a(r,{value:e.addEditFormData.tax_type,"onUpdate:value":l[22]||(l[22]=o=>e.addEditFormData.tax_type=o),placeholder:n.$t("common.select_default_text",[n.$t("product.tax_type")]),allowClear:!0},{default:t(()=>[(d(!0),v(S,null,T(e.taxTypes,o=>(d(),m(w,{key:o.key,value:o.key},{default:t(()=>[c(s(o.value),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])]),_:1},8,["label","help","validateStatus"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open","title","onOk"]),a(oe,{visible:e.payNowVisible,onClosed:e.payNowClosed,onSuccess:e.payNowSuccess,data:e.formData,selectedProducts:e.selectedProducts},null,8,["visible","onClosed","onSuccess","data","selectedProducts"]),a(ue,{visible:e.printInvoiceModalVisible,order:e.printInvoiceOrder,onClosed:l[23]||(l[23]=o=>e.printInvoiceModalVisible=!1)},null,8,["visible","order"])],64)}const Ha=te(Ht,[["render",Sa]]);export{Ha as default};
