import { AbstractGetTodosService } from 'App/Domain/Service/AbstractGetTodosService'
import { inject } from '@adonisjs/fold'
import { Todo } from 'App/Domain/Entity/Todo'
import { AbstractTodoRepository } from 'App/Domain/Repository/AbstractTodoRepository'

@inject(['App/Infrastructure/Repository/LocalArrayRepository'])
export class TodoService extends AbstractGetTodosService {
  constructor(private repo: AbstractTodoRepository) {
    super()
  }
  public getTodos(): Todo[] {
    return this.repo.getTodos()
  }

  public getTodoById(id: number): Todo {
    return this.repo.getTodoById(id)
  }
}
