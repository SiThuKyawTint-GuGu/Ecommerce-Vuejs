import axios from "axios"
import moment from "moment/moment"
export default {
    name:'BLogDetail',
    data() {
        return {
           blogdata:{},
           tagpostdata:{},
           blogcategory:{},
           blogtopic:{},
           searchdatakey:'',
           blogiddata:{},
        }
    },
    methods: {
        gettagpost(){
            axios.get('http://localhost:8000/api/blogpost').then((response)=>{
                this.shortfunction(response)
            })
        },
        tagpostget(){
            axios.get('http://localhost:8000/api/tagpost').then((response)=>{
                this.tagpostdata = response.data.data
            })
        },
        category(){
            axios.get('http://localhost:8000/api/blogcategory').then((response)=>{
                this.blogcategory = response.data.data
            })
        },
        topics(){
            axios.get('http://localhost:8000/api/blogtopic').then((response)=>{
                this.blogtopic = response.data.data
            })
        },
        searchcategory(id){
            let data = {
                key : id,
            }
            axios.post('http://localhost:8000/api/searchblogcategory',data).then((response)=>{
                this.shortfunction(response)
            })
        },
        searchtopic(id){
            let data = {
                key : id,
            }
            axios.post('http://localhost:8000/api/searchtopic',data).then((response)=>{
                this.shortfunction(response)
            })
        },
        searchtagpost(id){
            let data = {
                key : id,
            }
            axios.post('http://localhost:8000/api/searchtagpost',data).then((response)=>{
                this.shortfunction(response)
            })
        },
        getkey(){
            let data = {
                key : this.searchdatakey,
            }
            axios.post('http://localhost:8000/api/searchkey',data).then((response)=>{
                this.shortfunction(response)
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
        nextshop(){
            this.$router.push({
                name : 'ShopPage',
            })
        },
        gotohot(){
            this.$router.push({
                name:'HotPage',
            })
        },
        getdatafromblogpage(){
            let data ={
                key : this.$route.params.id
            }
            axios.post('http://localhost:8000/api/getblogpage',data).then((response)=>{
                console.log(response.data.data)
                this.samefunction(response)
            })

        },
        shortfunction(response){
            for(let i=0;i<response.data.data.length;i++){
                if(response.data.data[i].image != null){
                    response.data.data[i].image = 'http://localhost:8000/storage/'+response.data.data[i].image
                }else{
                    response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                }
               response.data.data[i].blogcreated_at= moment(response.data.data[i].blogcreated_at).format("MMM Do , YY")
               response.data.data[i].date= moment(response.data.data[i].date).format("MMM")
               response.data.data[i].text= moment(response.data.data[i].text).format("DD")
            }
            this.blogdata = response.data.data
        },
        getiddata(id){
            let data={
                key:id,
            }
            axios.post('http://localhost:8000/api/getblogpage',data).then((response)=>{
                this.samefunction(response)
            })
        },
        samefunction(response){
            for(let i=0;i<response.data.data.length;i++){
                if(response.data.data[i].image != null){
                    response.data.data[i].image = 'http://localhost:8000/storage/'+response.data.data[i].image
                }else{
                    response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                }
               response.data.data[i].date= moment(response.data.data[i].date).format("MMMM Do , YY")
                this.blogiddata = response.data.data
            }
        }
    },
    mounted () {
        this.gettagpost(),
        this.tagpostget(),
        this.category(),
        this.topics(),
        this.getdatafromblogpage()
    },
}