/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import { ProjectProps } from '../Project'

export interface ProjectState_ {
	toDo: ProjectProps[] | undefined
	inProgress: ProjectProps[] | undefined
	done: ProjectProps[] | undefined
}

interface UpdateProjectStatusPayload {
  data: ProjectProps
  from: 'toDo' | 'inProgress' | 'done'
  to: 'toDo' | 'inProgress' | 'done'
}

export type Action = 
  { type: 'SET_PROJECTS', payload: ProjectProps[] | undefined } |
  { type: 'ADD_PROJECT', payload: ProjectProps } |
  { type: 'UPDATE_PROJECT_STATUS', payload: UpdateProjectStatusPayload }

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

    case 'UPDATE_PROJECT_STATUS': {
      if (action.payload.from === action.payload.to) {
        return state
      }

      const updatedProject = { ...action.payload.data }

      const stateUpdates = {
        'toDo-For-inProgress': () => ({
          ...state,
          toDo: state.toDo?.filter(project => project.id !== updatedProject.id),
          inProgress: state.inProgress ? [ ...state.inProgress , { ...updatedProject }] : [{ ...updatedProject }]
        
        }),

        'toDo-For-done': () => ({
          ...state,
          toDo: state.toDo?.filter(project => project.id !== updatedProject.id),
          done: state.done ? [ ...state.done , { ...updatedProject }] : [{ ...updatedProject }]
        }),

        'inProgress-For-toDo': () => ({
          ...state,
          inProgress: state.inProgress?.filter(project => project.id !== updatedProject.id),
          toDo: state.toDo ? [ ...state.toDo , { ...updatedProject }] : [{ ...updatedProject }]
        }),

        'inProgress-For-done': () => ({
          ...state,
          inProgress: state.inProgress?.filter(project => project.id !== updatedProject.id),
          done: state.done ? [ ...state.done , { ...updatedProject }] : [{ ...updatedProject }]
        }),

        'done-For-toDo': () => ({
          ...state,
          done: state.done?.filter(project => project.id !== updatedProject.id),
          toDo: state.toDo ? [ ...state.toDo , { ...updatedProject }] : [{ ...updatedProject }]
        }),

        'done-For-inProgress': () => ({
          ...state,
          done: state.done?.filter(project => project.id !== updatedProject.id),
          inProgress: state.inProgress ? [ ...state.inProgress , { ...updatedProject }] : [{ ...updatedProject }]
        })
      }
      
      type Keys = keyof typeof stateUpdates

      const key = `${action.payload.from}-For-${action.payload.to}` as Keys
      const updateState = stateUpdates[key]
      
      return updateState()
    }
    
	  default:
		  return state
	}
}