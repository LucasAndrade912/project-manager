/* eslint-disable indent */
export interface Color {
	id: number
	color_name: string
}

export type ColorState = Color[] | undefined

export type ColorActions = { type: 'SET_COLORS', payload: ColorState }

export const colorReducer = (state: ColorState, action: ColorActions) => {
	const { type, payload } = action

	switch (type) {
		case 'SET_COLORS': {
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