import { type FilterHeader } from './FilterHeader'

export interface FiltersDefinition {
  headerSelect: FilterHeader | 'first-day'
  hideCompleted: boolean
}
