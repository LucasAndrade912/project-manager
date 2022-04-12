export interface IStatus {
  status: 'to-do' | 'in-progress' | 'done'
}

export interface ITag {
  name?: string
  color: '#FF6262' | '#94FA55' | '#3F75FF' | '#27FD89' | '#E8EC3F' | '#58ADFC'
}