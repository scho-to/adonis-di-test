import { Todo } from 'App/Domain/Entity/Todo'
import { AbstractTodoRepository } from 'App/Domain/Repository/AbstractTodoRepository'

export class LocalArrayRepository extends AbstractTodoRepository {
  private todos: Todo[] = []
  public addTodo(todo: Todo): number {
    const response = this.todos.push(todo)
    console.log(this.todos)
    return response
  }

  public deleteTodo(id: number): boolean {
    this.todos = this.todos.filter((todo) => {
      return todo.getId() !== id
    })
    return true
  }

  public editTodo(id: number, todo: Partial<Todo>): Todo {
    return Object.assign(this.getTodoById(id), todo)
  }

  public getTodos(): Todo[] {
    return this.todos
  }

  public getTodoById(id: number): Todo {
    const foundTodos = this.todos.filter((todo) => todo.getId() === id)
    console.log(foundTodos)
    if (!foundTodos || foundTodos.length === 0) {
      throw new Error('todo not found by id ' + id)
    }
    return foundTodos[0]
  }
}
