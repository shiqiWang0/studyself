var app = new Vue ({
    el:"#app",
    data:{
        message:'hello world'
    }
})
var app2 = new Vue({
    el:'#app2',
    data:{
        message:"页面加载于"+new Date().toLocaleString()
    }
})
var app3=new Vue({
    el:"#app3",
    data:{
        seen:true
    }
})
var app4=new Vue({
    el:"#app4",
    data:{
        todos:[
            {text:'学习javascript'},
            {text:'vue'},
            {text:'做项目'}
        ]
    }
})
var app5=new Vue({
    el:'#app5',
    data:{
        message:"Hello Vue.js"
    },
    methods:{
        reverseM: function(){
           this.message = this.message.split('').reverse().join('')
        }
    }
})
var app6= new Vue({
    el:'#app6',
    data:{
        message:'hello vue'
    }
})

Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})

var app7=new Vue({
    el:'#app7',
    data:{
        grocerryList:[
            {id:0,text:'蔬菜'},
            {id:1,text:'奶酪'},
            {id:2,text:'随便吃的东西'}
        ]
    }
})
var vm = new Vue({
    el:'#example',
    data:{
        message:'hello'
    },
    computed:{
        reverseMessage:function(){
            return this.message.split("").reverse().join('')
        }
    }

})
var demo=new Vue({
    el:'#demo',
    data:{
        firstName:'Foo',
        lastName:'Bar',
        fullName:'Foo Bar'
    },
    watch:{
        firstName:function(val){
            this.fullName = val+" "+this.lastName
        },
        lastName:function(val){
            this.fullName = this.firstName+' '+val
        }
    }
})

var ex1=new Vue({
    el:'#ex-1',
    data:{
        items:[
            {message:'apple'},
            {message:'orange'}
        ]
    }
})
var ex2 =new Vue({
    el:'#ex-2',
    data:{
        parentM:'parent',
        items:[ 
            {message:'lili'},
            {message:'hah'}
        ]

    }
})
var forinObject = new Vue({
    el:"#inObject",
    data:{
        object:{
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    }
})

var getEven = new Vue({
    el:'#getEven',
    data:{
        Number:[1,2,3,4,5,6,7]
    },
    computed:{
        evenNumber:function(){
           return this.Number.filter(function(item){
                return item%2==0
           })
        }
    }
})
var click1 = new Vue({
    el:'#click',
    data:{
        count:0,
        name:'boy'
    },
    methods:{
        greet:function(event){
            alert('hello,'+this.name)
            if(event){
                alert(event.target.tagName)
            }
        }
    }
})

const vm2 = new Vue({
    el:"#time",
    data:{
        word:"hekk"
    }
})
