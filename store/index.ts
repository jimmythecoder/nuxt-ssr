
export const state = () => ({

    /**
     * Root state name
     */
    name: 'RootState',

    /**
     * Test counter
     */
    counter: 0
});

export type RootState = ReturnType<typeof state>;

export const mutations = {
    increment (state: RootState) {
        state.counter++
    }
}
