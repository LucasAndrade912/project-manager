import { ProjectState, ProjectActions } from './reducers/project.reducer'
import { TagState, TagActions } from './reducers/tag.reducer'
import { ColorState, ColorActions } from './reducers/color.reducer'

export interface State {
  projects: ProjectState
  tags: TagState
  colors: ColorState
}

export type Action = ProjectActions | TagActions | ColorActions

export interface Context {
  state: State
  dispatch: (action: Action) => void
}