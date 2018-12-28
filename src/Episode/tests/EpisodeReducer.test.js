import EpisodeReducer, { getInitialState } from 'Episode/EpisodesReducer'
import { EPISODES_LOADED } from 'Episode/Load/EpisodeLoadMany'

const WHATEVER_STRING = 'whatever'

describe('EpisodeReducer', () => {
    describe('EPISODES_LOADED', () => {
        let initialState
        let action
        let newState

        beforeAll(() => {
            initialState = getInitialState()

            action = {
                type: EPISODES_LOADED,
                meta: WHATEVER_STRING,
                items: {},
                searchKey: WHATEVER_STRING,
            }

            newState = EpisodeReducer(initialState, action)
        })

        it('should set meta', () => {
            expect(newState.meta).toEqual(WHATEVER_STRING)
        })

        it('should set searchKey', () => {
            expect(newState.searchKey).toEqual(WHATEVER_STRING)
        })

        describe('items', () => {
            it('should set loaded episodes when state.items is empty', () => {
                action = {
                    type: EPISODES_LOADED,
                    meta: WHATEVER_STRING,
                    items: {
                        1: 'A',
                        2: 'B',
                        3: 'C',
                    },
                    searchKey: WHATEVER_STRING,
                }

                newState = EpisodeReducer(initialState, action)
                expect(newState.items).toEqual({
                    1: 'A',
                    2: 'B',
                    3: 'C',
                })
            })

            it('should merge episodes with existed items when state.items is NOT empty and searchKey has not changed', () => {
                initialState = getInitialState()
                initialState.items = {
                    1: 'A',
                    2: 'B',
                    3: 'C',
                }
                initialState.searchKey = WHATEVER_STRING

                action = {
                    type: EPISODES_LOADED,
                    meta: WHATEVER_STRING,
                    items: {
                        4: 'D',
                        5: 'E',
                    },
                    searchKey: WHATEVER_STRING,
                }

                newState = EpisodeReducer(initialState, action)
                expect(newState.items).toEqual({
                    1: 'A',
                    2: 'B',
                    3: 'C',
                    4: 'D',
                    5: 'E',
                })
            })

            it('should set loaded episodes when searchKey has changed', () => {
                initialState = getInitialState()
                initialState.items = {
                    1: 'A',
                    2: 'B',
                    3: 'C',
                }
                initialState.searchKey = WHATEVER_STRING

                action = {
                    type: EPISODES_LOADED,
                    meta: WHATEVER_STRING,
                    items: {
                        4: 'D',
                        5: 'E',
                    },
                    searchKey: 'anotherString',
                }

                newState = EpisodeReducer(initialState, action)
                expect(newState.items).toEqual({
                    4: 'D',
                    5: 'E',
                })
            })
        })
    })
})
