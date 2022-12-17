export default {
    name:'AboutPage',
    methods: {
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
}
