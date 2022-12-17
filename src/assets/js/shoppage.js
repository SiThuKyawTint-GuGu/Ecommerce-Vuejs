import axios from "axios"
import 'animate.css'
import { mapGetters } from "vuex"
export default{
    name:'ShopPage',
    data() {
        return {
           cartdata:{},
           branddata:{},
           categorydata:{},
           availabilitydata:{},
           datakey:'',
           showStatus : false,
        }
    },
    computed:{
        ...mapGetters(['receivecount'])
    },
    methods: {
        cart() {
            axios.get('http://localhost:8000/api/cart?page').then((response)=>{
                this.datasent(response)
         })
        },
        brand(){
            axios.get('http://localhost:8000/api/brand').then((response)=>{
                this.branddata = response.data.data;
             })
        },
        category(){
            axios.get('http://localhost:8000/api/category').then((response)=>{
                this.categorydata = response.data.data;
             })
        },
        availability(){
            axios.get('http://localhost:8000/api/availability').then((response)=>{
                this.availabilitydata = response.data.data;
             })
        },
        searchitem(searchkey) {
            let datapost = {
                key: searchkey,
            }
            axios.post('http://localhost:8000/api/searchcategory', datapost).then((response) => {
              this.datareceive(response)
            })
        },
        searchbrand(datasearch) {
            let datapost = {
              key :datasearch
            }
            axios.post('http://localhost:8000/api/searchbrand', datapost).then((response) => {
                this.datareceive(response)
            })
        },
        searchcondition(searchkey) {
            let datapost = {
                key: searchkey,
            }
            axios.post('http://localhost:8000/api/searchcondition', datapost).then((response) => {
                this.datareceive(response)
                console.log(response.data.data)
            })
        },
        lowtohigh(){
            axios.post('http://localhost:8000/api/lowtohigh', this.cartdata).then((response) => {
                this.datareceive(response)
            })
        },
        hightolow(){
            axios.post('http://localhost:8000/api/hightolow', this.cartdata).then((response) => {
                this.datareceive(response)
            })
        },
        searchdata() {
            let datapost = {
                key: this.datakey,
            }
            axios.post('http://localhost:8000/api/searchkey', datapost).then((response) => {
                this.datareceive(response)
                this.datakey = '';
            })
        },
        datareceive(response){
            for (let i = 0; i < response.data.data.length; i++) {
                if (response.data.data[i].image != null) {
                    response.data.data[i].image = 'http://127.0.0.1:8000/storage/' + response.data.data[i].image;
                } else {
                    response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                }
            }
            this.cartdata = response.data.data
        },
        datasent(response){
            for (let i = 0; i < response.data.data.length; i++) {
                if (response.data.data[i].image != null) {
                    response.data.data[i].image = 'http://127.0.0.1:8000/storage/' + response.data.data[i].image;
                } else {
                    response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                }
            }
            this.cartdata = response.data.data
        },
        statuscheck(){
          this.showStatus = true;
        },
        statuscondition(){
            this.showStatus = false;
        },
        getid(id){
           this.$router.push({
            name:'DetailPage',
            params:{
                id:id
            }
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
    },
    mounted() {
        this.cart();
        this.brand();
        this.category();
        this.availability();
        console.log(this.receivecount)
    },
}