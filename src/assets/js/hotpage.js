import axios from "axios";
import 'animate.css'
export default {
    name: 'HotPage',
    data() {
        return {
            categorydata: {},
            selectdata: '',
            gethotdata: {},
            showStatus: false,
            multipledata: {},
        }
    },
    methods: {
        category() {
            axios.get('http://localhost:8000/api/category').then((response) => {
                this.categorydata = response.data.data;
            })
        },
        getselectdata() {
            let data = {
                key: this.selectdata,
            }
            axios.post('http://localhost:8000/api/checkcondition', data).then((response) => {
                this.sameconditionfunction(response)
            })
        },
        getdata() {
            axios.get('http://localhost:8000/api/hotdata').then((response) => {
                this.sameconditionfunction(response)
            })
        },
        searchcategoryid(id) {
            let data = {
                key: id
            }
            axios.post('http://localhost:8000/api/searchcategoryid', data).then((response) => {
                this.sameconditionfunction(response)
                this.multipledata = response.data.data
            })
        },
        sameconditionfunction(response) {
            for (let i = 0; i < response.data.data.length; i++) {
                if (response.data.data[i].image != null) {
                    response.data.data[i].image = 'http://localhost:8000/storage/' + response.data.data[i].image
                } else {
                    response.data.data[i].image = response.data.data[i].image = 'http://127.0.0.1:8000/image/default-upload-image.jpeg';
                }
            }
            this.gethotdata = response.data.data
        },
        statuscheck() {
            this.showStatus = true;
        },
        statuscondition() {
            this.showStatus = false;
        },
        getid(id) {
            this.$router.push({
                name: 'DetailHotitem',
                params: {
                    id: id
                }
            })
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
    },
    mounted() {
        this.category(),
            this.getdata()
    },
}