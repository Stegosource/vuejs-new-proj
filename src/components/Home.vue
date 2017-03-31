<template>
    <div>
        <h1>Trade or View Your Portfolio</h1>
        <h6>You may save & load your data</h6>
        <p>Click on 'End Day' to begin a new day</p>
        <hr>
        <p>Your funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>