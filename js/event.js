/**
 * Created by acer on 2019/8/6.
 */
new Vue({
    el:"#root",
    methods:{
        btn1 (){
            alert('text')
        },
        btn2 (msg){
            alert(msg)
        },
        btn3 (event){
            alert(event.target.tagName)
        },
        btn4 (mag,$event){
            alert(mag+" "+event.target.innerHTML)
        },
        btn5 (){
            alert('inner')
        },
        btn6 (){
            alert('outer')
        },
        btn7 (){
            alert('a')
        },
        keyup (event){
            alert(event.target.value)
        },
        handelSubmit (){
            console.log("----"+this.username,this.password,this.sex,this.likes,this.citiId,this.desc)
        }
    },
    data:{
        username:'',
        password:'',
        sex:'female',
        likes:['basketball'],
        cities:[
            {id:1,cityN:'shanghai'},
            {id:2,cityN:'beijing'},
            {id:3,cityN:'nanjing'}
        ],
        citiId:'1',
        desc:''

    }
})
