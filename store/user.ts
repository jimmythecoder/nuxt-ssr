import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class User extends VuexModule {

    /**
     * Users age
     */
    age = 21

    /**
     * User name
     */
    name = 'Jimmy'

    @Mutation
    setAge(age: number) {
        this.age = age
    }

    get maxHeartRate() {
        return 120 - this.age
    }

    @Action({commit: 'setAge'})
    birthday() {
        return this.age++
    }
}
