//按钮组件
Vue.component('button-counter',{
    data:function(){
        return {
           count:0
        }
    },
    template:'<button v-on:click="count+=1">You click me {{count}} times</button>'
})


//标题组件
Vue.component('blog-post',{
  props:['title'],
  template:'<h2>{{title}}</h2>'
})

new Vue({
    el:'#components-demo',
    data:{
        posts:[
            {id:1,title:"My journey with Vue"},
            {id:2,title:"Blogging with Vue"},
            {id:3,title:"Blogging with Vue"}
        
        ]
    }
})

Vue.component('alert-box',{
    template:
        '<div  class="demo-alert-box">'
            +"<span>Error!</span>" 
             +"<slot></slot>"
        +"</div>"
      
})