import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { LocalArrayRepository } from 'App/Infrastructure/Repository/LocalArrayRepository'
import { TodoService } from 'App/Application/TodoService'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
    this.app.container.singleton('App/Infrastructure/Repository/LocalArrayRepository', () => {
      return new LocalArrayRepository()
    })
  }

  public async boot() {
    // IoC container is ready
    const repo = this.app.container.resolveBinding(
      'App/Infrastructure/Repository/LocalArrayRepository'
    )
    this.app.container.bind('App/Application/TodoService', () => {
      return new TodoService(repo)
    })
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
