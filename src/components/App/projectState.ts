/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import { ProjectProps } from '../Project'
import { TaskProps } from '../Task'

export interface ProjectState {
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
  { type: 'UPDATE_PROJECT_STATUS', payload: UpdateProjectStatusPayload } |
  { type: 'ADD_TASK', payload: Omit<TaskProps, 'finished'> }

export const projectReducer = (state: ProjectState, action: Action) => {
  const { type, payload } = action

	switch (type) {
    case 'SET_PROJECTS':
      return {
        toDo: payload?.filter(project => project.status === 'to-do'),
        inProgress: payload?.filter(project => project.status === 'in-progress'),
        done: payload?.filter(project => project.status === 'done')
      }
    
    case 'ADD_PROJECT':
      if (!state.toDo) {
        return {
          ...state,
          toDo: [{ ...payload }]
        }
      }

      return {
        ...state,
        toDo: [ ...state.toDo, { ...payload } ]
      }

    case 'UPDATE_PROJECT_STATUS': {
      if (payload.from === payload.to) {
        return state
      }

      const updatedProject = { ...payload.data }

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

      const key = `${payload.from}-For-${payload.to}` as Keys
      const updateState = stateUpdates[key]
      
      return updateState()
    }
    
    case 'ADD_TASK': {
      const updateProject = (project: ProjectProps) => {
        if (project.id === payload.idProject) {
          if (project.tasks) {
            project.tasks.push({ id: payload.idTask, task_name: payload.task, finished: false })
          } else {
            project.tasks = [{ id: payload.idTask, task_name: payload.task, finished: false }]
          }
        }

        return project
      }

      return {
        toDo: state.toDo?.map(project => updateProject(project)),
        inProgress: state.inProgress?.map(project => updateProject(project)),
        done: state.done?.map(project => updateProject(project))
      }
    }

	  default:
		  return state
	}
}