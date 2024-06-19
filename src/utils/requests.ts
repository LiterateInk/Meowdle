export interface RequestHandler<Parameters, ResponseAPI, Return> {
  ajax: boolean
  authenticated: boolean

  name: string
  schema: Parameters
  // capabilities: string[]
  handle (response: ResponseAPI): Return
}
