<template>
    <div>
        <h1>The Portfolio/Portfolio Component</h1>
        <div class="row">
            <appStock v-for="stock in stocks" :stock="stock"></appStock>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            appStock: Stock
        }
    }    
</script>