/**
 * Created by acer on 2019/8/7.
 */
new Vue({
    el:"#root",
    data: {
        msg:'hello world',
        bool:'true',
        title:'pay attention to!'
    },
    methods:{
        handelClick (){
           this.bool = !this.bool
        },
        handeltran (){
            this.bool = !this.bool
        },
        handleScale (){
            this.bool = !this.bool
        }
    }
})