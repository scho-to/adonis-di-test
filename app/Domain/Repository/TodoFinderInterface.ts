import { Todo } from 'App/Domain/Entity/Todo'

export interface TodoFinderInterface {
  getTodos(): Todo[]
  getTodoById(id: number): Todo
}
