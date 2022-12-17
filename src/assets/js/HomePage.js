import axios from "axios"
import { mapGetters } from "vuex"
    export default {
        name : 'HomePage',
        data() {
            return {
               getdata : {},
               postdata :{},
               saledata :{},
            }
        },
        computed:{
            ...mapGetters(['receivecount'])
        },
        methods: {
            apidata(){
                axios.get('http://localhost:8000/api/trendpost').then((response)=>{
                    for(let i=0;i<response.data.data.length;i++){
                     if(response.data.data[i].image != null){
                         response.data.data[i].image = 'http://localhost:8000/storage/'+response.data.data[i].image
                     }else{
                         response.data.data[i].image =  response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                     }
                    }
                    this.getdata = response.data.data
                 })
            },
            postget(){
                axios.get('http://localhost:8000/api/post').then((response)=>{
                    for(let i=0;i<response.data.data.length;i++){
                     if(response.data.data[i].image != null){
                         response.data.data[i].image = 'http://localhost:8000/storage/'+response.data.data[i].image
                     }else{
                         response.data.data[i].image =  response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                     }
                    }
                    this.postdata = response.data.data
                 })
            },
            getcountdata(){
                axios.get('http://localhost:8000/api/getcount').then((response)=>{
                        this.$store.dispatch('setcountdata',response.data.data.length);
                        console.log(response.data.data.length)
                 })
            },
            getsale(){
                axios.get('http://localhost:8000/api/sale').then((response)=>{
                   this.saledata = response.data.data;
                })
            },
            nextshop(){
                this.$router.push({
                    name : 'ShopPage',
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
        mounted () {
           this.apidata();
           this.postget();
           this.getsale();
           this.getcountdata();
        },
    }

    