export class Todo {
  private id: number
  constructor(private text: string, private done: boolean = false) {
    this.id = new Date().getTime()
  }

  public static fromJson(jsonObject: Record<PropertyKey, unknown>): Todo {
    return new Todo(<string>jsonObject.text, <boolean>jsonObject.done ?? false)
  }

  public toggleDone(): void {
    this.done = !this.done
  }

  public getId(): number {
    return this.id
  }

  public getTodo(): Record<PropertyKey, unknown> {
    return {
      text: this.text,
      done: this.done,
    }
  }
}
