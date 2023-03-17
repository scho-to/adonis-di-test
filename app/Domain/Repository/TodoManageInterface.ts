import { Todo } from 'App/Domain/Entity/Todo'

export interface TodoManageInterface {
  addTodo(todo: Todo): unknown
  deleteTodo(id: number): unknown
  editTodo(id: number, todo: Partial<Todo>): unknown
}
