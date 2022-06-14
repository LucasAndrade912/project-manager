/* eslint-disable indent */
import { ProjectProps } from '../Project'

export interface ProjectState_ {
	toDo: ProjectProps[] | undefined
	inProgress: ProjectProps[] | undefined
	done: ProjectProps[] | undefined
}

export type Action = 
  { type: 'SET_PROJECTS', payload: ProjectProps[] | undefined } |
  { type: 'ADD_PROJECT', payload: ProjectProps }

export const projectReducer = (state: ProjectState_, action: Action) => {
	switch (action.type) {
    case 'SET_PROJECTS':
      return {
        toDo: action.payload?.filter(project => project.status === 'to-do'),
        inProgress: action.payload?.filter(project => project.status === 'in-progress'),
        done: action.payload?.filter(project => project.status === 'done')
      }
    
    case 'ADD_PROJECT':
      if (!state.toDo) {
        return {
          ...state,
          toDo: [{ ...action.payload }]
        }
      }

      return {
        ...state,
        toDo: [ ...state.toDo, { ...action.payload } ]
      }

	default:
		return state
	}
}