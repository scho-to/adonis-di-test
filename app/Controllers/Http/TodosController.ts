import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Todo } from 'App/Domain/Entity/Todo'
import { inject } from '@adonisjs/fold'
import { AbstractGetTodosService } from 'App/Domain/Service/AbstractGetTodosService'
import { AbstractTodoRepository } from 'App/Domain/Repository/AbstractTodoRepository'

@inject(['App/Infrastructure/Repository/LocalArrayRepository', 'App/Application/TodoService'])
export default class TodosController {
  constructor(private repo: AbstractTodoRepository, private service: AbstractGetTodosService) {}
  public async index({ response }: HttpContextContract) {
    response.send(this.service.getTodos())
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const todo = Todo.fromJson(body)
    response.send(this.repo.addTodo(todo))
  }

  public async show({ request, response }: HttpContextContract) {
    const id = parseInt(request.param('id'))
    const todo = this.service.getTodoById(id)
    response.send(todo)
  }

  public async update({ request, response }: HttpContextContract) {
    const partialTodo = request.body() as Partial<Todo>
    const id = parseInt(request.param('id'))
    response.send(this.repo.editTodo(id, partialTodo))
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id = parseInt(request.param('id'))
    response.send(this.repo.deleteTodo(id))
  }
}
