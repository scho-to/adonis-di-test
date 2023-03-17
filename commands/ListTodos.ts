import { BaseCommand } from '@adonisjs/core/build/standalone'
import { TodoService } from 'App/Application/TodoService'

export default class ListTodos extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'todos'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Lists all todos'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    const service: TodoService = this.application.container.resolveBinding(
      'App/Application/TodoService'
    )

    const todos = service.getTodos()

    this.logger.info(JSON.stringify(todos))
  }
}
