import{P as t}from"./index-724f7b60.js";import{e as p,s,o as m,c as _,b as u,u as i,a as e,t as d}from"./index-5449505c.js";const r=e("h1",null,"分页",-1),c=e("p",null," 分页组件提供了当前页码的显示以及数个可以点击的按钮，可以跳转到上一页、下一页或者指定的页码。 ",-1),g=e("p",null,"使用 v-model 绑定一个整数值，表示当前的页码，页码从 1 开始。",-1),h=e("p",null,"使用 max 绑定一个整数值，表示最大的页码。",-1),v=e("br",null,null,-1),V=e("pre",null,[e("code",null,d('<Pagination v-model="page" :max="5"></Pagination>'))],-1),f=e("p",null,"当页面数量很多时，会自动省略部分页码。",-1),x=e("p",null," 不同于市面上常见的组件库，为了更好的用户体验，在页码变化时，分页组件的总长度不会变化，也就是说上一页和下一页按钮的位置不会变化，减少了用户误点击的可能性。 ",-1),P=e("br",null,null,-1),b=e("pre",null,[e("code",null,d('<Pagination v-model="page2" :max="100"></Pagination>'))],-1),y=p({name:"pagination",setup(B){const n=s(1),a=s(10);return(k,l)=>(m(),_("div",null,[r,c,g,h,u(i(t),{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=o=>n.value=o),max:5},null,8,["modelValue"]),v,V,f,x,u(i(t),{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=o=>a.value=o),max:100},null,8,["modelValue"]),P,b]))}});export{y as default};
