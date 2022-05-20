export interface IStatus {
  status: 'to-do' | 'in-progress' | 'done'
}

export interface ITag {
  name?: string
  color: string
}

export interface ITask {
  task: string
  finished: boolean
}