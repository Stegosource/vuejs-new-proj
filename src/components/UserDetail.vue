<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ reverseName() }}</p>
        <button @click="resetName">Reset</button>
        <button @click="resetFn()">Reset</button>
    </div>
</template>

<script>
export default {
    props: {
        propName: {
            type: String,
            required: false,
            default: 'example'
        },
        resetFn: Function
    },
    methods: {
        reverseName: function() {
            return this.propName.split("").reverse().join("");
        },
        resetName: function() {
            this.propName = 'Austin';
            this.$emit('nameWasReset', this.propName);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
