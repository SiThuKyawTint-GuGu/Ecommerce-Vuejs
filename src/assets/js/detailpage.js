import axios from "axios"
import 'animate.css'
import { mapGetters } from "vuex"
export default {
    name: 'DetailPage',
    data() {
        return {
            countdata: 1,
            cartdata: {},
            onlydata:{},
            seen : false,
            shopcard:{},
            taxes:15.00,
            delivery:10.00
        }
    },
    computed:{
        ...mapGetters(['receivecount'])
    },
    methods: {
        minus() {
            this.countdata--
        },
        plus() {
            this.countdata++
        },
        getdata() {
            axios.get('http://localhost:8000/api/cart').then((response) => {
                for (let i = 0; i < response.data.data.length; i++) {
                    if (response.data.data[i].image != null) {
                        response.data.data[i].image = 'http://127.0.0.1:8000/storage/' + response.data.data[i].image;
                    } else {
                        response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                    }
                }
                this.cartdata = response.data.data
            })
        },
        receivedata(){
           let data = {
            key : this.$route.params.id
           }
           axios.post('http://localhost:8000/api/detaildata',data).then((response) => {
            for (let i = 0; i < response.data.data.length; i++) {
                if (response.data.data[i].image != null) {
                    response.data.data[i].image = 'http://127.0.0.1:8000/storage/' + response.data.data[i].image;
                } else {
                    response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                }
            }
            this.onlydata = response.data.data
        })
        },
        boxhover(id){
            this.seen = !this.seen
            let data = {
                key :id
               }
               console.log(data)
               axios.post('http://localhost:8000/api/detaildata',data).then((response) => {
                for (let i = 0; i < response.data.data.length; i++) {
                    if (response.data.data[i].image != null) {
                        response.data.data[i].image = 'http://127.0.0.1:8000/storage/' + response.data.data[i].image;
                    } else {
                        response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                    }
                }
                this.shopcard = response.data.data
            })
        },
        getid(id){
            let data = {
                key : id
               }
               axios.post('http://localhost:8000/api/detaildata',data).then((response) => {
                for (let i = 0; i < response.data.data.length; i++) {
                    if (response.data.data[i].image != null) {
                        response.data.data[i].image = 'http://127.0.0.1:8000/storage/' + response.data.data[i].image;
                    } else {
                        response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                    }
                }
                this.onlydata = response.data.data
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
        gotohome(){
            this.$router.push({
                name:'HomePage',
            })
        },
        nextshop(){
            this.$router.push({
                name:'ShopPage',
            })
        },
        gotocart(id){
            this.$store.dispatch('setcount',this.countdata)
            this.$router.push({
                name:'CartPage',
                params:{
                    id:id,
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
        this.getdata()
        this.receivedata()
    },
}