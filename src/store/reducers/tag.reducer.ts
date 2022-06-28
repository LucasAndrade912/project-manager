/* eslint-disable indent */
import { TagProps } from '../../components/Tag'

export type TagState = TagProps[] | undefined

export type TagActions = 
	{ type: 'SET_TAGS', payload: TagState } |
	{ type: 'ADD_TAG', payload: TagProps }

export const tagReducer = (state: TagState, action: TagActions) => {
	const { type, payload } = action

	switch (type) {
		case 'SET_TAGS': {
			if (payload) return [ ...payload ]

			return state
		}
	
		case 'ADD_TAG': {
			return {
				...state,
				...payload
			}
		}

		default: {
			return state
		}
	}
}