/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable indent */
import React, { useReducer, createContext } from 'react'
import combineReducers from 'react-combine-reducers'

import { Context, Action, State } from './types'

import { projectReducer } from './reducers/project.reducer'
import { tagReducer } from './reducers/tag.reducer'
import { colorReducer } from './reducers/color.reducer'

type RootReducer = (state: State, action: Action) => State

const [rootReducer, initialState] = combineReducers({
	projects: [projectReducer, {
		toDo: undefined,
		inProgress: undefined,
		done: undefined
	}],
	tags: [tagReducer, undefined],
	colors: [colorReducer, undefined]
})

export const AppContext = createContext<Context>({
	state: initialState,
	dispatch: () => {}
})

const Store = ({ children }: { children: JSX.Element }) => {
	const [state, dispatch] = useReducer<RootReducer>(rootReducer, initialState)
	
	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{ children }
		</AppContext.Provider>
	)
}

export default Store