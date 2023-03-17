import { Todo } from 'App/Domain/Entity/Todo'

export abstract class AbstractGetTodosService {
  public abstract getTodos(): Todo[]
  public abstract getTodoById(id: number): Todo
}
