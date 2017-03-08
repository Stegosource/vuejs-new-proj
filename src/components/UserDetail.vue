<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ reverseName() }}</p>
    </div>
</template>

<script>
export default {
    props: {
        propName: {
            type: String,
            required: true,
            default: 'example'
        }
    },
    methods: {
        reverseName: function() {
            return this.propName.split("").reverse().join("");
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
