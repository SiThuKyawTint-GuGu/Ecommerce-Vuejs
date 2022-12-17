import axios from "axios"
import { mapGetters } from "vuex"
   export default {
        name: 'CartPage',
        data() {
            return {
               currentdata :[],
               delivery:10.00,
               taxes:15.00,
               allcount:'',
            }
        },
        computed:{
            ...mapGetters(['getcount','receivecount']),
            totalvalue(){
                var total = 0;
                for(var items in this.currentdata){
                    var individual = this.currentdata[items]
                    total +=  Number(individual['price'])  * Number(individual['quantity']) 
                }
                return total
                
            }
        },
        
        methods: {
            sentdata() {
                let data = {
                    keyid : this.$route.params.id,
                    quantity : this.getcount,
                }
                axios.post('http://localhost:8000/api/shopcart',data).then((response) =>{
                  this.currentdata = response.data.data
                    console.log(this.currentdata)
                 }
                )
            },
            getdel(id){
                let data = {
                    id : id
                }
                axios.post('http://localhost:8000/api/delid',data).then((response) =>{
                    this.currentdata = response.data.data
                 }
                )
            },
            previous(){
                history.back()
            },
            nextshop(){
                this.$router.push({
                    name:'ShopPage',
                })
            },
            gotohome(){
                this.$router.push({
                    name:'HomePage',
                })
            },
            gotoproduct(){
                this.$router.push({
                    name:'DetailPage',
                    params:{
                        id:2,
                    }
                })
            },
            gotoblog(){
                this.$router.push({
                    name:'BlogPage',
                })
            },
            gotopage(){
                this.$router.push({
                    name:'AboutPage',
                })
            },
            gotohot(){
                this.$router.push({
                    name:'HotPage',
                })
            },
        },
        mounted() {
            this.sentdata()
        }
    }