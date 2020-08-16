<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
import { RootState } from '~/store'

@Component
export default class MyComponent extends Vue {
    get name() {
        return (this.$store.state as RootState).name;
    }

    get age() {
        return this.$store.state.user.age;
    }

    login() {
        this.$store.commit('user/setAge', 30);
    }
}
</script>

<template>
<div>
    <h1>Login component</h1>
    <p>Name: {{name}}</p>
    <p>Age: {{age}}</p>

    <button @click="login">Login</button>
</div>
</template>
