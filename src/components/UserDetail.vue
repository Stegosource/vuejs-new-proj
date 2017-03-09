<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ reverseName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset</button>
        <button @click="resetFn()">Reset</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props: {
        propName: {
            type: String,
            required: false,
            default: 'example'
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        reverseName: function() {
            return this.propName.split("").reverse().join("");
        },
        resetName: function() {
            this.propName = 'Austin';
            this.$emit('nameWasReset', this.propName);
        }
    },
    created() {
        eventBus.$on('ageWasEdited', (data) => {
            this.userAge = data;
        });
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
