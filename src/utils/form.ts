class Form<T> {
  public fields: T
  public errors: Record<keyof T, string> = {} as Record<keyof T, string>

  constructor (fields: T) {
    this.fields = Object.assign({}, fields)
    for (const key in fields) {
      this.errors[key] = ''
    }
  }

  cleanAllErrors () {
    for (const key in this.errors) {
      this.errors[key] = ''
    }
  }
}

function generateForm<T>(fields: T): Form<T> {
  return new Form<T>(fields)
}

export {
  generateForm
}
