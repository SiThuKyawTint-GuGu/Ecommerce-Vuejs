import axios from "axios"
import 'animate.css'
export default {
    name: 'DetailHotitem',
    data() {
        return {
            getdata: {},
            countdata: 1,
            seen: false,
            detailcard: {},
            taxes: 15.00,
            delivery: 10.00,
            gethotdata: {},
        }
    },
    methods: {
        getidfrom() {
            let data = {
                key: this.$route.params.id
            }
            axios.post('http://localhost:8000/api/detailhotitem', data).then((response) => {
                for (let i = 0; i < response.data.data.length; i++) {
                    if (response.data.data[i].image != null) {
                        response.data.data[i].image = 'http://localhost:8000/storage/' + response.data.data[i].image
                    } else {
                        response.data.data[i].image = response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                    }
                }
                this.getdata = response.data.data
            })

        },
        boxhover(id) {
            this.seen = !this.seen
            let data = {
                key: id
            }
            console.log(id)
            axios.post('http://localhost:8000/api/detailcard', data).then((response) => {
                this.samecondition(response)
                this.detailcard = response.data.data
            })
        },
        gethotdataitem() {
            axios.get('http://localhost:8000/api/hotdata').then((response) => {
                this.samecondition(response)
                this.gethotdata = response.data.data
            })
        },
        getid(id) {
            let data = {
                key: id
            }
            axios.post('http://localhost:8000/api/zoomdata', data).then((response) => {
                this.samecondition(response)
                this.getdata = response.data.data
            })
        },
        samecondition(response) {
            for (let i = 0; i < response.data.data.length; i++) {
                if (response.data.data[i].image != null) {
                    response.data.data[i].image = 'http://127.0.0.1:8000/storage/' + response.data.data[i].image;
                } else {
                    response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                }
            }
        },
        minus() {
            this.countdata--
        },
        plus() {
            this.countdata++
        },
        gotocart(id) {
            this.$store.dispatch('setcount', this.countdata)
            this.$router.push({
                name: 'CartPage',
                params: {
                    id: id,
                }
            })
        },
    },
    gotohome() {
        this.$router.push({
            name: 'HomePage',
        })
    },
    gotoproduct() {
        this.$router.push({
            name: 'DetailPage',
            params: {
                id: 2,
            }
        })
    },
    gotoblog() {
        this.$router.push({
            name: 'BlogPage',
        })
    },
    gotopage() {
        this.$router.push({
            name: 'AboutPage',
        })
    },
    nextshop() {
        this.$router.push({
            name: 'ShopPage',
        })
    },
    gotohot(){
        this.$router.push({
            name:'HotPage',
        })
    },
    mounted() {
        this.getidfrom(),
            this.gethotdataitem()
    },
}