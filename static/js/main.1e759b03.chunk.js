(this["webpackJsonporder-it"]=this["webpackJsonporder-it"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports={auth:"Login_auth__1wSgo",title:"Login_title__2faVR",control:"Login_control__2Q3aK",actions:"Login_actions__3Jqmi",toggle:"Login_toggle__2G2DW","error-text":"Login_error-text__oiLj6","login-button":"Login_login-button__1I4A_",disabled:"Login_disabled__3o1qr"}},,,,,function(e,t,a){e.exports={form:"Checkout_form__12Seq",control:"Checkout_control__1n3LX",actions:"Checkout_actions__ykSBS",submit:"Checkout_submit__3a-pZ",invalid:"Checkout_invalid__x2cxK"}},function(e,t,a){e.exports={"meal-item":"MealItem_meal-item__rhuqB","meal-header":"MealItem_meal-header__2DsEw","meal-name":"MealItem_meal-name__AEJy_","meal-price":"MealItem_meal-price__2EZhJ","meal-data":"MealItem_meal-data__3oAEy","meal-description":"MealItem_meal-description__3XfmH","meal-image-box":"MealItem_meal-image-box__2I5bC","meal-image":"MealItem_meal-image__2FYAm","mouse-down-active":"MealItem_mouse-down-active__NkCYh","meal-bottom":"MealItem_meal-bottom__3O5Uq"}},,function(e,t,a){e.exports={"cart-items":"Cart_cart-items__9j49B",total:"Cart_total__27NRI",actions:"Cart_actions__2AvFL","button--alt":"Cart_button--alt__1irjg",button:"Cart_button__Bs5qT"}},,function(e,t,a){e.exports={"cart-item":"CartItem_cart-item__18CS3",summary:"CartItem_summary__2P5Q_",price:"CartItem_price__2m1rt",amount:"CartItem_amount__1333W",actions:"CartItem_actions__S8miy"}},function(e,t,a){e.exports={header:"Header_header__28Qr5","left-button":"Header_left-button__vSreL","right-button":"Header_right-button__I8oWG","main-image":"Header_main-image__1qTPr",title:"Header_title__1bOa4"}},,,,function(e,t,a){e.exports={button:"HeaderButton_button__1iTVt",icon:"HeaderButton_icon__3NaCw",badge:"HeaderButton_badge__2QUuE",bump:"HeaderButton_bump__1g9kk"}},function(e,t,a){e.exports={"side-menu":"SideMenu_side-menu__2y4f8",open:"SideMenu_open__1yRb6","menu-text":"SideMenu_menu-text__8Vfqa",title:"SideMenu_title__3JT2w","buttons-space":"SideMenu_buttons-space__3-ItB"}},function(e,t,a){e.exports={meals:"AvailableMeals_meals__203nQ","meals-appear":"AvailableMeals_meals-appear__3llX6",MealsLoading:"AvailableMeals_MealsLoading__EAI0m",MealsError:"AvailableMeals_MealsError__28Mh8",category:"AvailableMeals_category__61WtX"}},,function(e,t,a){e.exports={backdrop:"Modal_backdrop__3qHT3",modal:"Modal_modal__37VW4","slide-down":"Modal_slide-down__20bTz"}},function(e,t,a){e.exports={input:"Input_input__eX3xK",invalid:"Input_invalid__2QICF"}},function(e,t,a){e.exports={summary:"OrderSummery_summary__hzmwZ","summery-items":"OrderSummery_summery-items__djTQv","summery-total":"OrderSummery_summery-total__3lJGy"}},,,,,function(e,t,a){e.exports={burger:"Burger_burger__33UkP",bureger:"Burger_bureger__xCWsJ",clicked:"Burger_clicked__1ULwr"}},,,,,,,function(e,t,a){e.exports={summary:"MealsSummary_summary__1LJRp"}},function(e,t,a){e.exports={card:"Card_card__2aCor"}},function(e,t,a){e.exports={form:"MealItemForm_form__3fU5V"}},,function(e,t,a){e.exports={loader:"Loader_loader__1jPiA"}},function(e,t,a){e.exports={"first-summery":"Orders_first-summery__gw7Dg"}},,,,,function(e,t,a){},,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(22),s=a.n(r),i=a(34),o=(a(52),a(3)),l=a(5),u=a.n(l),j=a(7),d=a(10),b=c.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(e){},clearCart:function(){}}),m=a(28),O=a.n(m),x=a(0),f=function(e){return Object(x.jsx)("div",{className:O.a.backdrop,onClick:e.onClose})},p=function(e){return Object(x.jsx)("div",{className:O.a.modal,children:Object(x.jsx)("div",{className:O.a.content,children:e.children})})},h=document.getElementById("overlays"),g=function(e){return Object(x.jsxs)(n.Fragment,{children:[s.a.createPortal(Object(x.jsx)(f,{onClose:e.onClose}),h),s.a.createPortal(Object(x.jsx)(p,{children:e.children}),h)]})},_=a(17),v=a.n(_),C=a(19),y=a.n(C),w=function(e){var t="$".concat(e.price.toFixed(2));return Object(x.jsxs)("li",{className:y.a["cart-item"],children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:e.name}),Object(x.jsxs)("div",{className:y.a.summary,children:[Object(x.jsx)("span",{className:y.a.price,children:t}),Object(x.jsxs)("span",{className:y.a.amount,children:["x ",e.amount]})]})]}),Object(x.jsxs)("div",{className:y.a.actions,children:[Object(x.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(x.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},N=a(14),S=a.n(N),k=c.a.createContext({id:null,name:null,email:null,photoUrl:null,token:null,street:null,city:null,postal:null,isLoggedIn:!1,setUser:function(){},clearUser:function(){},updateUser:function(){}}),I=function(e){return""===e.trim()},L=function(e){var t=Object(n.useContext)(k),a=Object(n.useState)(t.name||""),c=Object(o.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(t.postal||""),l=Object(o.a)(i,2),u=l[0],j=l[1],d=Object(n.useState)(t.street||""),b=Object(o.a)(d,2),m=b[0],O=b[1],f=Object(n.useState)(t.city||""),p=Object(o.a)(f,2),h=p[0],g=p[1],_=Object(n.useRef)(),v=Object(n.useRef)(),C=Object(n.useRef)(),y=Object(n.useRef)(),w=Object(n.useState)({name:!0,street:!0,city:!0,postal:!0}),N=Object(o.a)(w,2),L=N[0],M=N[1];return Object(x.jsxs)("form",{className:S.a.form,onSubmit:function(t){t.preventDefault();var a=_.current.value,n=v.current.value,c=C.current.value,r=y.current.value,s=!I(a),i=!I(n),o=!I(r),l=!(5!==c.trim().length);M({name:s,street:i,city:o,postal:l}),s&&i&&o&&l&&e.onConfirm({name:a,street:n,city:r,postal:c})},children:[Object(x.jsxs)("div",{className:"".concat(S.a.control," ").concat(L.name?"":S.a.invalid),children:[Object(x.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(x.jsx)("input",{ref:_,value:r,onChange:function(e){s(e.target.value)},type:"text",id:"name"}),!L.name&&Object(x.jsx)("p",{children:"Please enter a valid name!"})]}),Object(x.jsxs)("div",{className:"".concat(S.a.control," ").concat(L.street?"":S.a.invalid),children:[Object(x.jsx)("label",{htmlFor:"street",children:"Street"}),Object(x.jsx)("input",{ref:v,value:m,onChange:function(e){O(e.target.value)},type:"text",id:"street"}),!L.street&&Object(x.jsx)("p",{children:"Please enter a valid street!"})]}),Object(x.jsxs)("div",{className:"".concat(S.a.control," ").concat(L.postal?"":S.a.invalid),children:[Object(x.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(x.jsx)("input",{ref:C,value:u,onChange:function(e){j(e.target.value)},type:"text",id:"postal"}),!L.postal&&Object(x.jsx)("p",{children:"Please enter a valid postal code!"})]}),Object(x.jsxs)("div",{className:"".concat(S.a.control," ").concat(L.city?"":S.a.invalid),children:[Object(x.jsx)("label",{htmlFor:"city",children:"City"}),Object(x.jsx)("input",{ref:y,value:h,onChange:function(e){g(e.target.value)},type:"text",id:"city"}),!L.city&&Object(x.jsx)("p",{children:"Please enter a valid city!"})]}),Object(x.jsxs)("div",{className:e.totalClasses,children:[Object(x.jsx)("span",{children:"Total Amount"}),Object(x.jsx)("span",{children:e.totalAmount})]}),Object(x.jsxs)("div",{className:S.a.actions,children:[Object(x.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(x.jsx)("button",{className:S.a.submit,children:"Confirm"})]})]})},M={addUserToRealTime:function(e,t){return Object(j.a)(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app/users/".concat(e,".json"),{method:"PUT",body:JSON.stringify(t)});case 2:case"end":return a.stop()}}),a)})))()},updateUserToRealTime:function(e,t){return Object(j.a)(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app/users/".concat(e,".json"),{method:"PATCH",body:JSON.stringify(t)});case 2:case"end":return a.stop()}}),a)})))()},getUserfromRealTime:function(e){return Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app/users/".concat(e,".json"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},A=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),l=i[0],m=i[1],O=Object(n.useState)(!1),f=Object(o.a)(O,2),p=f[0],h=f[1],_=Object(n.useContext)(b),C=Object(n.useContext)(k),y=C.isLoggedIn,N="$".concat(_.totalAmount.toFixed(2)),S=_.items.reduce((function(e,t){return e+t.amount}),0),I=function(e){_.removeItem(e)},A=function(e){_.addItem(Object(d.a)(Object(d.a)({},e),{},{amount:1}))},T=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user_id:C.id,orderedItems:_.items})});case 3:return e.next=5,M.updateUserToRealTime(C.id,t);case 5:C.updateUser(t),m(!1),h(!0),_.clearCart();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=Object(x.jsx)("ul",{className:v.a["cart-items"],children:_.items.map((function(e){return Object(x.jsx)(w,{name:e.name,amount:e.amount,price:e.price,onRemove:I.bind(null,e.id),onAdd:A.bind(null,e)},e.id)}))}),U=Object(x.jsxs)("div",{className:v.a.actions,children:[Object(x.jsx)("button",{onClick:e.onClose,className:v.a["button--alt"],children:"Close"}),!y&&Object(x.jsx)("button",{className:v.a.button,onClick:function(){e.onClose(),e.showLogin()},children:"Please Login to order"}),y&&S>0&&Object(x.jsx)("button",{className:v.a.button,onClick:function(){r(!0)},children:"Order"})]}),R=Object(x.jsxs)(n.Fragment,{children:[c?Object(x.jsx)(L,{totalAmount:N,totalClasses:v.a.total,onConfirm:T,onCancel:e.onClose}):Object(x.jsxs)(n.Fragment,{children:[E,Object(x.jsxs)("div",{className:v.a.total,children:[Object(x.jsx)("span",{children:"Total Amount"}),Object(x.jsx)("span",{children:N})]})]}),!c&&U]}),P=Object(x.jsx)("p",{children:" Sending order data..."}),B=Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)("p",{children:"Order Sent!"}),Object(x.jsx)("div",{className:v.a.actions,children:Object(x.jsx)("button",{onClick:e.onClose,className:v.a.button,children:"Close"})})]});return Object(x.jsxs)(g,{onClose:e.onClose,children:[!l&&!p&&R,!l&&p&&B,l&&P]})},T=a.p+"static/media/food-table2.fa348454.jpg",E=function(){return Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(x.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},U=a(24),R=a.n(U),P=function(e){var t=R.a.button+" "+e.className+(e.bump?" ".concat(R.a.bump):"");return Object(x.jsxs)(n.Fragment,{children:[e.showBadge&&Object(x.jsxs)("span",{className:R.a.badge,children:[" ",e.badgeBumber," "]}),Object(x.jsxs)("button",{className:t,onClick:e.onClick,children:[Object(x.jsx)("span",{className:R.a.icon,children:e.children}),Object(x.jsxs)("span",{children:[" ",e.title," "]})]})]})},B=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(n.useContext)(b).items,i=s.reduce((function(e,t){return e+t.amount}),0);return Object(n.useEffect)((function(){if(0!==s.length){r(!0);var e=setTimeout((function(){return r(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(x.jsx)(P,{className:e.className,title:"Cart",showBadge:!0,badgeBumber:i,bump:c,onClick:e.onClick,children:Object(x.jsx)(E,{})})},F=a(20),H=a.n(F),z=function(e){return Object(x.jsx)(P,{className:e.className,title:e.title,onClick:e.onClick,children:e.icon})},D=a(35),V=a.n(D),q=function(e){var t=V.a.burger+" "+(e.open?V.a.clicked:"");return Object(x.jsxs)("div",{onClick:e.onClick,className:t,children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})},J=function(){return Object(x.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 489.9 489.9",fill:"currentColor",children:[Object(x.jsxs)("g",{children:[Object(x.jsx)("g",{children:Object(x.jsxs)("g",{children:[Object(x.jsx)("path",{d:"M468.3,255.8c0.1-0.1,0.1-0.1,0.2-0.2c0.3-0.4,0.6-0.7,0.8-1.1c0.1-0.1,0.1-0.2,0.2-0.3c0.2-0.4,0.5-0.8,0.7-1.2\r c0-0.1,0.1-0.2,0.1-0.2c0.2-0.4,0.4-0.8,0.6-1.3c0-0.1,0-0.1,0.1-0.2c0.2-0.4,0.3-0.9,0.5-1.4c0-0.1,0-0.2,0.1-0.2\r c0.1-0.5,0.3-0.9,0.3-1.4c0-0.2,0-0.3,0.1-0.5c0.1-0.4,0.1-0.8,0.2-1.2c0.1-0.6,0.1-1.1,0.1-1.7c0-0.6,0-1.1-0.1-1.7\r c0-0.4-0.1-0.8-0.2-1.2c0-0.2,0-0.3-0.1-0.5c-0.1-0.5-0.2-0.9-0.3-1.4c0-0.1,0-0.2-0.1-0.2c-0.1-0.5-0.3-0.9-0.5-1.4\r c0-0.1,0-0.1-0.1-0.2c-0.2-0.4-0.4-0.9-0.6-1.3c0-0.1-0.1-0.2-0.1-0.2c-0.2-0.4-0.4-0.8-0.7-1.2c-0.1-0.1-0.1-0.2-0.2-0.3\r c-0.3-0.4-0.5-0.8-0.8-1.1c-0.1-0.1-0.1-0.1-0.2-0.2c-0.4-0.4-0.7-0.9-1.2-1.3l-98.9-98.8c-6.7-6.7-17.6-6.7-24.3,0\r c-6.7,6.7-6.7,17.6,0,24.3l69.6,69.6H136.8c-9.5,0-17.2,7.7-17.2,17.1c0,9.5,7.7,17.2,17.2,17.2h276.8l-69.1,69.1\r c-6.7,6.7-6.7,17.6,0,24.3c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5l98.3-98.3C467.5,256.6,467.9,256.2,468.3,255.8z"}),Object(x.jsx)("path",{d:"M110.7,34.3h128c9.5,0,17.2-7.7,17.2-17.1c0-9.5-7.7-17.2-17.2-17.2h-128C59.4,0,17.6,41.8,17.6,93.1v303.7\r c0,51.3,41.8,93.1,93.1,93.1h125.9c9.5,0,17.2-7.7,17.2-17.1c0-9.5-7.7-17.2-17.2-17.2H110.7c-32.4,0-58.8-26.4-58.8-58.8V93.1\r C52,60.6,78.3,34.3,110.7,34.3z"})]})}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{})]}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{})]})},Z=a(25),W=a.n(Z),Q=a(16),X=function(){return Object(x.jsx)("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 122.88 116.31",fill:"currentColor",children:Object(x.jsx)("g",{children:Object(x.jsx)("path",{d:"M4.06,12.67C1.87,12.67,0,10.8,0,8.51c0-2.19,1.87-4.06,4.06-4.06h5.62c0.1,0,0.31,0,0.42,0c3.75,0.1,7.08,0.83,9.88,2.6 c3.12,1.98,5.41,4.99,6.66,9.47c0,0.1,0,0.21,0.1,0.31L27.78,21h2.34V4.12c0-2.27,1.85-4.12,4.12-4.12h21.67 c2.27,0,4.12,1.85,4.12,4.12v10.02c3.42-3.41,8.06-5.5,13.18-5.5c2.22,0,4.36,0.4,6.34,1.12c4.08-4.33,9.87-7.04,16.29-7.04 c10.96,0,20.07,7.88,21.99,18.28h0.99c2.29,0,4.06,1.87,4.06,4.06c0,0.42-0.11,0.83-0.21,1.25l-10.61,42.76 c-0.42,1.87-2.08,3.12-3.95,3.12l0,0H41.51c1.46,5.41,2.91,8.32,4.89,9.68c2.39,1.56,6.56,1.66,13.53,1.56h0.1l0,0h47.03 c2.29,0,4.06,1.87,4.06,4.06c0,2.29-1.87,4.06-4.06,4.06H60.04l0,0c-8.64,0.1-13.94-0.1-18.21-2.91 c-4.37-2.91-6.66-7.91-8.95-16.96l0,0L18.94,18.92c0-0.1,0-0.1-0.1-0.21c-0.62-2.29-1.66-3.85-3.12-4.68 c-1.46-0.94-3.43-1.35-5.72-1.35c-0.1,0-0.21,0-0.31,0H4.06L4.06,12.67L4.06,12.67z M84.38,37.69c0-1.28,1.27-2.32,2.83-2.32 c1.56,0,2.83,1.04,2.83,2.32v15.69c0,1.28-1.27,2.32-2.83,2.32c-1.56,0-2.83-1.04-2.83-2.32V37.69L84.38,37.69z M67.43,37.69 c0-1.28,1.27-2.32,2.83-2.32c1.56,0,2.83,1.04,2.83,2.32v15.69c0,1.28-1.27,2.32-2.83,2.32c-1.56,0-2.83-1.04-2.83-2.32V37.69 L67.43,37.69z M50.49,37.69c0-1.28,1.27-2.32,2.83-2.32c1.56,0,2.83,1.04,2.83,2.32v15.69c0,1.28-1.27,2.32-2.83,2.32 c-1.56,0-2.83-1.04-2.83-2.32V37.69L50.49,37.69z M85.57,13.37c2.31,2.05,4.14,4.66,5.29,7.63h19.85 c-1.68-6.65-7.7-11.58-14.87-11.58C91.89,9.42,88.29,10.91,85.57,13.37L85.57,13.37z M92.21,29.11L92.21,29.11l-38.01,0l0,0H30.07 l0,0l9.26,34.86h65.65l8.63-34.86H92.21L92.21,29.11z M55.31,21c0.11-0.29,0.23-0.57,0.35-0.85V7.2c0-1.64-1.35-2.99-2.99-2.99 H37.71c-1.64,0-2.99,1.34-2.99,2.99V21H55.31L55.31,21z M94.89,96.33c5.52,0,9.99,4.47,9.99,9.99s-4.47,9.99-9.99,9.99 c-5.51,0-9.99-4.47-9.99-9.99S89.38,96.33,94.89,96.33L94.89,96.33L94.89,96.33z M51.09,96.33c5.51,0,9.99,4.47,9.99,9.99 s-4.47,9.99-9.99,9.99s-9.99-4.47-9.99-9.99S45.57,96.33,51.09,96.33L51.09,96.33L51.09,96.33z"})})})},G=a(4),Y=function(){return Object(x.jsxs)("svg",{id:"Layer_1","data-name":"Layer 1",fill:"currentColor",viewBox:"0 0 122.88 123.88",children:[Object(x.jsx)("title",{children:"meal-food"}),Object(x.jsx)("path",{d:"M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0ZM52.55,58.42c2.92-2,4.39-4.61,4.14-10.58V32.49c0-2.14-3.92-2.4-4.11,0l-.15,12.45a1.75,1.75,0,1,1-3.5,0l.15-12.88c0-2.3-3.77-2.53-3.81,0,0,3.58-.15,9.31-.15,12.88a1.52,1.52,0,1,1-3,0l.15-12.79A2.09,2.09,0,0,0,39,30.61c-1.38.88-1.1,2.65-1.16,4.15l-.48,14.69c.07,4.27,1.19,7.74,4.54,9.22a8.37,8.37,0,0,0,2,.52L42.77,89.25a3.76,3.76,0,0,0,3.71,3.86h.46a4.24,4.24,0,0,0,4.17-4.34l-1-29.59a6.61,6.61,0,0,0,2.45-.76Zm18,29.75-.05-26.41c-11.29-6.52-7.69-31.64,3.6-31.5,13.72.16,15.35,28.31,3.55,31.4l.87,26.64c.17,6.13-8,6.7-8-.13ZM99.29,23.59A53.52,53.52,0,1,0,115,61.44,53.36,53.36,0,0,0,99.29,23.59Z"})]})},$=function(e){var t=Object(n.useContext)(k),a=Object(G.g)(),c="/orders"===Object(G.h)().pathname,r=W.a["side-menu"]+" "+(e.open?W.a.open:""),s=function(){var t=Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.onCloseMenu(),a.push("/orders");case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:r,children:[Object(x.jsx)("span",{className:W.a.title,children:Object(x.jsxs)("h4",{children:["Hi ",t.name,"!"]})}),c?Object(x.jsx)(z,{onClick:function(){e.onCloseMenu(),a.push("/")},title:"Meals",icon:Object(x.jsx)(Y,{})}):Object(x.jsx)(z,{onClick:s,title:"Orders",icon:Object(x.jsx)(X,{})}),Object(x.jsx)("span",{className:W.a["buttons-space"]}),Object(x.jsx)(z,{onClick:function(){e.onCloseMenu(),Q.a.auth().signOut().catch((function(e){console.log(e)})).then((function(){t.clearUser()}))},title:"Logout",icon:Object(x.jsx)(J,{})})]})},K=function(){return Object(x.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 481.5 481.5",fill:"currentColor",children:[Object(x.jsx)("g",{children:Object(x.jsxs)("g",{children:[Object(x.jsx)("path",{d:"M0,240.7c0,7.5,6,13.5,13.5,13.5h326.1l-69.9,69.9c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l93-93\r c5.3-5.3,5.3-13.8,0-19.1l-93-93c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l69.9,69.9h-326C6,227.2,0,233.2,0,240.7z"}),Object(x.jsx)("path",{d:"M382.4,0H99C44.4,0,0,44.4,0,99v58.2c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V99c0-39.7,32.3-72,72-72h283.5\r c39.7,0,72,32.3,72,72v283.5c0,39.7-32.3,72-72,72H99c-39.7,0-72-32.3-72-72V325c0-7.5-6-13.5-13.5-13.5S0,317.5,0,325v57.5\r c0,54.6,44.4,99,99,99h283.5c54.6,0,99-44.4,99-99V99C481.4,44.4,437,0,382.4,0z"})]})}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{}),Object(x.jsx)("g",{})]})},ee=function(e){var t=Object(n.useContext)(k),a=Object(n.useState)(!1),c=Object(o.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(t.isLoggedIn),l=Object(o.a)(i,2),u=l[0],j=l[1],d=function(){s(!r)};return Object(n.useEffect)((function(){j(t.isLoggedIn)}),[t]),Object(x.jsxs)(n.Fragment,{children:[Object(x.jsxs)("header",{className:H.a.header,children:[!u&&Object(x.jsx)(z,{className:H.a["left-button"],onClick:e.onShowLogin,icon:Object(x.jsx)(K,{}),title:"Login"}),u&&Object(x.jsx)("span",{children:Object(x.jsx)(q,{open:r,onClick:d})}),Object(x.jsx)($,{onCloseMenu:d,open:r}),Object(x.jsx)("h1",{className:H.a.title,children:"Order It"}),Object(x.jsx)(B,{className:H.a["right-button"],onClick:e.onShowCart})]}),Object(x.jsx)("div",{className:H.a["main-image"],children:Object(x.jsx)("img",{src:T,alt:"ORDER FOOD! NOW!"})})]})},te=a(42),ae=a.n(te),ne=function(){return Object(x.jsxs)("section",{className:ae.a.summary,children:[Object(x.jsx)("h2",{children:"Your Meal, Your style!"}),Object(x.jsx)("p",{children:"Choose any meal from the list!"}),Object(x.jsx)("p",{children:"All the meals are top notch so dont be afraid to try new stuff!"})]})},ce=a(26),re=a.n(ce),se=a(43),ie=a.n(se),oe=function(e){return Object(x.jsx)("div",{className:ie.a.card,children:e.children})},le=a(15),ue=a.n(le),je=a.p+"static/media/food-table.cdf7f93b.jpg",de=a(29),be=a.n(de),me=c.a.forwardRef((function(e,t){var a=be.a.input+" ".concat(e.invalid?be.a.invalid:"");return Object(x.jsxs)("div",{className:a,children:[Object(x.jsx)("label",{htmlFor:e.input.id,className:be.a.label,children:e.label}),Object(x.jsx)("input",Object(d.a)({ref:t},e.input))]})})),Oe=a(44),xe=a.n(Oe),fe=function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(n.useRef)();return Object(x.jsxs)("form",{className:xe.a.form,children:[Object(x.jsx)(me,{ref:s,input:{id:"amount_"+e.id,type:"number",min:"1",max:"30",step:"1",defaultValue:"1"}}),Object(x.jsx)("button",{onClick:function(t){t.preventDefault();var a=s.current.value,n=+a;0===a.trim().length||n<1||n>30?r(!1):e.onAddToCart(n)},children:"+"}),!c&&Object(x.jsx)("p",{children:"Please enter a valid amount (1-5)"})]})},pe=function(e){var t=Object(n.useContext)(b),a=Object(n.useState)(!1),c=Object(o.a)(a,2),r=c[0],s=c[1],i="$".concat(e.price.toFixed(2)),l=ue.a["meal-item"];r&&(l+=" ".concat(ue.a["mouse-down-active"]));var u=function(e){"mousedown"===e.type?s(!0):s(!1)};return Object(x.jsxs)("li",{onMouseDown:u,onMouseLeave:u,onMouseUp:u,className:l,children:[Object(x.jsx)("div",{className:ue.a["meal-image-box"],children:Object(x.jsx)("img",{className:ue.a["meal-image"],alt:"Meal",src:e.image||je})}),Object(x.jsx)("div",{className:ue.a["meal-data"],children:Object(x.jsxs)("div",{className:ue.a["meal-header"],children:[Object(x.jsx)("h3",{className:ue.a["meal-price"],children:i}),Object(x.jsx)("h3",{className:ue.a["meal-name"],children:e.name})," "]})}),Object(x.jsx)("div",{className:ue.a["meal-description"],children:e.description}),Object(x.jsx)("div",{className:ue.a["meal-bottom"],children:Object(x.jsx)(fe,{id:e.id,onAddToCart:function(a){t.addItem({id:e.id,name:e.name,amount:a,price:e.price})}})})]})},he=a(45),ge=a.n(he),_e=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),i=s[0],l=s[1],d=Object(n.useState)(),b=Object(o.a)(d,2),m=b[0],O=b[1];if(Object(n.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch("https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app/meals.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Something went wrong!");case 6:return O(null),e.next=9,t.json();case 9:a=e.sent,n=[],Object.keys(a).forEach((function(e){n.push({id:e,name:a[e].name,description:a[e].description,price:a[e].price,category:a[e].category,image:a[e].image})})),c(n),l(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){l(!1),O(e.message)}))}),[]),i)return Object(x.jsx)("section",{className:re.a.MealsLoading,children:Object(x.jsx)("p",{children:"Loading..."})});if(m)return Object(x.jsx)("section",{className:re.a.MealsError,children:Object(x.jsx)("p",{children:m})});var f={};a.forEach((function(e){e.category||(e.category="Misc."),f[e.category]||(f[e.category]=[]),f[e.category].push(Object(x.jsx)(pe,{id:e.id,name:e.name,description:e.description,price:e.price,image:e.image},e.id))}));var p=[];return Object.keys(f).forEach((function(e){p.push(Object(x.jsxs)(oe,{children:[Object(x.jsx)("h1",{className:re.a.category,children:e}),Object(x.jsx)(ge.a,{inertiaScrollingSlowdown:.7,inertiaScrolling:!0,alignOnResize:!1,wheel:!1,data:f[e]})]},e))})),Object(x.jsx)("section",{className:re.a.meals,children:p})},ve=function(){return Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)(ne,{}),Object(x.jsx)(_e,{})]})},Ce=a(39),ye={items:[],totalAmount:0},we=function(e,t){if("ADD"===t.type){var a,n,c=e.totalAmount+t.item.price*t.item.amount,r=e.items.findIndex((function(e){return e.id===t.item.id})),s=e.items[r];if(s)n=Object(d.a)(Object(d.a)({},s),{},{amount:s.amount+t.item.amount}),(a=Object(Ce.a)(e.items))[r]=n;else a=e.items.concat(t.item);return{items:a,totalAmount:c}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(d.a)(Object(d.a)({},l),{},{amount:l.amount-1});(i=Object(Ce.a)(e.items))[o]=j}return{items:i,totalAmount:u}}return t.type,ye},Ne=function(e){var t=Object(n.useReducer)(we,ye),a=Object(o.a)(t,2),c=a[0],r=a[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){r({type:"ADD",item:e})},removeItem:function(e){r({type:"REMOVE",id:e})},clearCart:function(){r({type:"CLEAR"})}};return Object(x.jsx)(b.Provider,{value:s,children:e.children})},Se=a(9),ke=a.n(Se),Ie=(a(59),a(46)),Le=a.n(Ie),Me=function(){return Object(x.jsxs)("div",{className:Le.a.loader,children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})};function Ae(e){return/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(e)}function Te(e){return e.trim().length>5}function Ee(e){return e.trim().length>0}var Ue=function(e){var t=Object(n.useContext)(k),a=Object(n.useState)(!0),c=Object(o.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(!1),l=Object(o.a)(i,2),d=l[0],b=l[1],m=Object(n.useState)(""),O=Object(o.a)(m,2),f=O[0],p=O[1],h=Object(n.useState)(!1),_=Object(o.a)(h,2),v=_[0],C=_[1],y=Object(n.useState)(!1),w=Object(o.a)(y,2),N=w[0],S=w[1],I=Object(n.useState)(!1),L=Object(o.a)(I,2),A=L[0],T=L[1],E=Object(n.useState)(!1),U=Object(o.a)(E,2),R=U[0],P=U[1],B=Object(n.useState)(!1),F=Object(o.a)(B,2),H=F[0],z=F[1],D=Object(n.useRef)(),V=Object(n.useRef)(),q=Object(n.useRef)(),J=Object(n.useRef)(),Z=Object(n.useRef)(),W=function(){p(null),C(!1),S(!1),T(!1),P(!1),z(!1)},X=function(e,t){var a=Ae(e);if(C(!a),!a)return p("Email Invalid"),!1;var n=Te(t);return S(!n),!!n||(p("Password Must be at least 6 characters"),!1)},G=function(e){var t=e.email,a=e.password,n=e.confirmPassword,c=e.firstName,r=e.lastName,s=Ae(t),i=Te(a),o=function(e,t){return e.trim()===t.trim()}(a,n),l=Ee(c),u=Ee(r);return C(!s),s?(S(!i),i?(T(!o),o?(P(!l),l?(z(!u),!!u||(p("Last Name Can't Be Empty"),!1)):(p("First Name Can't Be Empty"),!1)):(p("Confirm Password doesn't match"),!1)):(p("Password Must be at least 6 characters"),!1)):(p("Email Invalid"),!1)},Y=function(){var a=Object(j.a)(u.a.mark((function a(n,c){var r,s,i,o,l;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return b(!0),a.next=3,Q.a.auth().signInWithEmailAndPassword(n,c).catch((function(e){b(!1),C(!0),S(!0),p("Email or Password are incorrect")}));case 3:if(!(r=a.sent)){a.next=20;break}return b(!1),s=r.user,a.next=9,s.getIdTokenResult();case 9:return i=a.sent,o=new Date(i.expirationTime),a.next=13,M.getUserfromRealTime(s.uid);case 13:return l=a.sent,a.next=16,l.json();case 16:l=a.sent,console.log(l),t.setUser({name:s.displayName,id:s.uid,email:s.email,street:l.street,city:l.city,postal:l.postal,token:i.token},o),e.onClose();case 20:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),$=function(){var a=Object(j.a)(u.a.mark((function a(n){var c,r,s,i,o,l,j,d,m;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=n.email,r=n.password,s=n.firstName,i=n.lastName,b(!0),a.next=4,Q.a.auth().createUserWithEmailAndPassword(c,r).catch((function(e){b(!1),C(!0),p(e.message)}));case 4:if(!(o=a.sent)){a.next=24;break}return b(!1),l=o.user,a.next=11,l.getIdToken();case 11:return j=a.sent,a.next=14,l.updateProfile({displayName:"".concat(s," ").concat(i)});case 14:return l=Q.a.auth().currentUser,console.log("qgwasv"),a.next=18,M.addUserToRealTime(l.uid,{first_name:s,last_name:i,email:c});case 18:return a.next=20,l.getIdTokenResult();case 20:d=a.sent,m=new Date(d.expirationTime),t.setUser({name:l.displayName,id:l.uid,email:l.email,token:j},m),e.onClose();case 24:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),K=Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)("div",{className:ke.a.control,children:Object(x.jsx)(me,{label:"Confirm Password",invalid:A,ref:q,input:{id:"confirm-password",type:"password",required:!0,minLength:6}})}),Object(x.jsx)("div",{className:ke.a.control,children:Object(x.jsx)(me,{label:"First Name",invalid:R,ref:J,input:{id:"first-name",type:"text",required:!0}})}),Object(x.jsx)("div",{className:ke.a.control,children:Object(x.jsx)(me,{label:"Last Name",invalid:H,ref:Z,input:{id:"last-name",type:"text",required:!0}})})]}),ee=ke.a["login-button"]+" "+(d?ke.a.disabled:"");return Object(x.jsxs)(g,{onClose:e.onClose,className:ke.a.auth,children:[Object(x.jsx)("h1",{className:ke.a.title,children:r?"Login":"Sign Up"}),Object(x.jsxs)("form",{className:ke.a.form,onSubmit:function(e){e.preventDefault(),W();var t=V.current.value,a=D.current.value;if(r){if(!X(t,a))return;Y(t,a)}else{var n={email:t,password:a,confirmPassword:q.current.value,firstName:J.current.value,lastName:Z.current.value};G(n)&&$(n)}},children:[Object(x.jsx)("div",{className:ke.a.control,children:Object(x.jsx)(me,{label:"Email",ref:V,invalid:v,input:{id:"email",type:"email",required:!0}})}),Object(x.jsx)("div",{className:ke.a.control,children:Object(x.jsx)(me,{label:"Password",ref:D,invalid:N,input:{id:"password",type:"password",required:!0,minLength:6}})}),!r&&K,f&&Object(x.jsx)("div",{className:ke.a["error-text"],children:Object(x.jsx)("label",{children:f})}),Object(x.jsxs)("div",{className:ke.a.actions,children:[d?Object(x.jsx)("button",{disabled:!0,className:ee,children:Object(x.jsx)(Me,{})}):Object(x.jsx)("button",{className:ee,children:r?"Login":"Register"}),Object(x.jsx)("button",{type:"button",className:ke.a.toggle,onClick:function(){W(),s((function(e){return!e}))},children:r?"Create new account":"Login with existing account"})]})]})]})},Re=a(47),Pe=a.n(Re),Be={getOrdersByUserId:function(e){return fetch('https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app/orders.json?orderBy="user_id"&startAt="'.concat(e,'"&endAt="').concat(e,'"'))}},Fe=a(30),He=a.n(Fe),ze=function(e){var t=He.a.summary+" "+e.addedClasses,a=0,n=[];return e.orderedItems.forEach((function(e){a+=e.price*e.amount,n.push(Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{children:[e.name," "]}),Object(x.jsxs)("td",{children:["X",e.amount]})]},e.name))})),a=a.toFixed(2),Object(x.jsx)("section",{className:t,children:Object(x.jsxs)("div",{className:He.a["summery-items"],children:[Object(x.jsx)("table",{children:Object(x.jsx)("tbody",{children:n})}),Object(x.jsxs)("div",{className:He.a["summery-total"],children:[Object(x.jsx)("span",{children:"Total Cost: "}),Object(x.jsxs)("span",{children:[a,"$"]})]})]})})},De=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useContext)(k),s=Object(n.useCallback)(Object(j.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Be.getOrdersByUserId(r.id);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=[],Object.keys(a).forEach((function(e){n.push(a[e].orderedItems)})),c(n);case 9:case"end":return e.stop()}}),e)}))),[r.id]);Object(n.useEffect)((function(){s()}),[s]);for(var i=[],l=0;l<a.length;l++){var d="";0===l&&(d+=Pe.a["first-summery"]),i.push(Object(x.jsx)(ze,{addedClasses:d,orderedItems:a[l]},l))}return Object(x.jsx)(n.Fragment,{children:i})};var Ve,qe=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(n.useContext)(k);Object(n.useEffect)((function(){Q.a.apps.length?Q.a.app():Q.a.initializeApp({apiKey:"AIzaSyAuqDv8VgXAc-fkm-Lw0gP7RNnE53GpfJM",authDomain:"order-it-6fb76.firebaseapp.com",databaseURL:"https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app",projectId:"order-it-6fb76",storageBucket:"order-it-6fb76.appspot.com",messagingSenderId:"216157103677",appId:"1:216157103677:web:65d7f3643b0a94629fac54"})}),[]);var j=function(){l(!0)};return Object(x.jsxs)(Ne,{children:[a&&Object(x.jsx)(A,{showLogin:j,onClose:function(){c(!1)}}),i&&Object(x.jsx)(Ue,{onClose:function(){l(!1)}}),Object(x.jsx)(ee,{onShowCart:function(){c(!0)},onShowLogin:j}),Object(x.jsx)("main",{children:Object(x.jsxs)(G.d,{children:[Object(x.jsx)(G.b,{path:"/",exact:!0,children:Object(x.jsx)(ve,{})}),u.isLoggedIn&&Object(x.jsx)(G.b,{path:"/orders",exact:!0,children:Object(x.jsx)(De,{})}),Object(x.jsx)(G.b,{path:"*",children:Object(x.jsx)(G.a,{to:"/"})})]})})]})},Je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},Ze={id:null,name:null,email:null,street:null,city:null,postal:null,photoUrl:null,token:null,isLoggedIn:!1},We=function(e,t){if("SET_USER"===t.type){var a={};return a.id=t.user.id,a.name=t.user.name,a.email=t.user.email,a.photoUrl=t.user.photoUrl,a.token=t.user.token,a.city=t.user.city,a.postal=t.user.postal,a.street=t.user.street,a.isLoggedIn=!0,localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("tokenExpirationTime",t.expirationTime),a}if("UPDATE_USER"===t.type){var n=Object(d.a)(Object(d.a)({},e),t.user);return localStorage.setItem("user",JSON.stringify(n)),n}return"LOGOUT"===t.type?(localStorage.removeItem("user"),localStorage.removeItem("tokenExpirationTime"),Ve&&clearTimeout(Ve),Ze):Ze},Qe=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},Xe=function(e){var t,a=function(){var e=localStorage.getItem("user");e&&(e=JSON.parse(e));var t=localStorage.getItem("tokenExpirationTime"),a=Qe(t);return a<=3600?(localStorage.removeItem("user"),localStorage.removeItem("tokenExpirationTime"),null):{user:e,duration:a}}();a&&(t=a.user);var c=!!t,r=t||Ze,s=Object(n.useReducer)(We,r),i=Object(o.a)(s,2),l=i[0],u=i[1],j=function(){u({type:"LOGOUT"})},d={id:l.id,name:l.name,email:l.email,street:l.street,city:l.city,postal:l.postal,photoUrl:l.photoUrl,token:l.token,isLoggedIn:c,setUser:function(e,t){var a=Qe(t);u({type:"SET_USER",user:e,expirationTime:t}),Ve=setTimeout(j,a)},clearUser:j,updateUser:function(e){u({type:"UPDATE_USER",user:e})}};return Object(n.useEffect)((function(){a&&(Ve=setTimeout(j,a.duration))}),[a]),Object(x.jsx)(k.Provider,{value:d,children:e.children})};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(Xe,{children:Object(x.jsx)(i.a,{children:Object(x.jsx)(qe,{})})})}),document.getElementById("root")),Je()}],[[61,1,2]]]);
//# sourceMappingURL=main.1e759b03.chunk.js.map