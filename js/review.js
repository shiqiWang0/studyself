/**
 * Created by acer on 2019/8/5.
 */
const vm = new Vue({
    el:"#app",
    data:{
        msg:"",
        imgUrl:'https://cn.vuejs.org/images/logo.png',
        first:'',
        last:'',
        fullAn:'',
        css:'aclass',
        aclass: true,
        bclass: false,
        persons:[
            {name:'LIihs',age:15},
            {name:'Tom',age:23},
            {name:'Bob',age:10}

        ],
        searchName:'',
        option:0
    },
    methods:{
        btn (){
            alert("nihao")
        },
        update (){
            this.css = 'bclass'
            this.aclass= !this.aclass
            this.bclass = !this.bclass
        },
        del (index){
           this.persons.splice(this.index,1)
        },
        up (index,newP){
           this.persons.splice(index,1,newP)
        },
        getOption(number){
            this.option=number
        }
    },
    watch:{
        first: function (value) {
            this.fullAn = value+' '+this.last
        },
        last: function (value) {
            this.fullAn = this.first+' '+value
        }
    },
    computed:{
        full () {

            return this.first+' '+this.last
        },
        fullDoub:{
            get(){
                return this.first +" "+ this.last
            },
            set(value){
                const names = value.split(" ")
                this.first = names[0]
                this.last = names[1]
            }
        },
        filterPersons(){
            //取出相关的数据进行计算
            const {persons,searchName,option} = this
            let filteresult =persons.filter(p =>p.name.indexOf(searchName)!==-1)
            if(option!==0){
                filteresult.sort(function (p1,p2) {
                    if(option===2){
                        return p2.age-p1.age
                    }else if(option===1){
                        return p1.age-p2.age
                    }
                })

            }

            return filteresult
        }

    }

})