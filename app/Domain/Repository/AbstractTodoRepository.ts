import { TodoFinderInterface } from 'App/Domain/Repository/TodoFinderInterface'
import { TodoManageInterface } from 'App/Domain/Repository/TodoManageInterface'
import { Todo } from 'App/Domain/Entity/Todo'

export abstract class AbstractTodoRepository implements TodoFinderInterface, TodoManageInterface {
  public abstract addTodo(todo: Todo): unknown

  public abstract deleteTodo(id: number): unknown

  public abstract editTodo(id: number, todo: Partial<Todo>): unknown

  public abstract getTodoById(id: number): Todo

  public abstract getTodos(): Todo[]
}
