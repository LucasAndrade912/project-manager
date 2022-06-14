/* eslint-disable indent */
import { ProjectProps } from '../Project'

interface ProjectState {
	toDo: ProjectProps[] | undefined
	inProgress: ProjectProps[] | undefined
	done: ProjectProps[] | undefined
}

type Action = {
  type: 'SET_PROJECTS',
  payload: ProjectProps[] | undefined
}

export const projectReducer = (state: ProjectState, action: Action) => {
	switch (action.type) {
    case 'SET_PROJECTS':
      return {
        toDo: action.payload?.filter(project => project.status === 'to-do'),
        inProgress: action.payload?.filter(project => project.status === 'in-progress'),
        done: action.payload?.filter(project => project.status === 'done')
      }

	default:
		return state
	}
}