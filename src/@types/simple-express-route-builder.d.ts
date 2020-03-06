import { Router } from 'express'

declare namespace RouteBuilder {
  class Action {
    // new Action('GET', ACTION)
    // eslint-disable-next-line
    constructor(method: string, action: Function)
    // new Action('GET', MIDDLEWARE, ACTION)
    // eslint-disable-next-line
    constructor(method: string, middleware: Function, action: Function)
    // eslint-disable-next-line
    constructor(method: string, middleware: Function[], action: Function)
    // new Action('GET', ':/job_id', ACTION)
    // eslint-disable-next-line
    constructor(method: string, path: string, action: Function)
    // new Action('GET', ':/job_id', MIDDLEWARE, ACTION)
    // eslint-disable-next-line
    constructor(method: string, path: string, middleware: Function, action: Function)
    // eslint-disable-next-line
    constructor(method: string, path: string, middleware: Function[], action: Function)
  }

  // eslint-disable-next-line
  class Group {
    // new Group(':/job_id', CHILDREN|[CHILDREN])
    // eslint-disable-next-line
    constructor(path: string, children: Group | Action)
    // eslint-disable-next-line
    constructor(path: string, children: (Group | Action)[])
    // new Group(':/job_id', MIDDLEWARES|[MIDDLEWARES], CHILDREN|[CHILDREN])
    // new Group(':/job_id', MIDDLEWARES|[MIDDLEWARES], CHILDREN|[CHILDREN])
    // eslint-disable-next-line
    constructor(path: string, middlewares: Function, children: Group | Action)
    // eslint-disable-next-line
    constructor(path: string, middlewares: Function, children: (Group | Action)[])
    // eslint-disable-next-line
    constructor(path: string, middlewares: Function[], children: Group | Action)
    // eslint-disable-next-line
    constructor(path: string, middlewares: Function[], children: (Group | Action)[])
    // new Group(MIDDLEWARES|[MIDDLEWARES], CHILDREN|[CHILDREN])
    // eslint-disable-next-line
    constructor(middlewares: Function, children: Group | Action)
    // eslint-disable-next-line
    constructor(middlewares: Function, children: (Group | Action)[])
    // eslint-disable-next-line
    constructor(middlewares: Function[], children: Group | Action)
    // eslint-disable-next-line
    constructor(middlewares: Function[], children: (Group | Action)[])
  }
}

// eslint-disable-next-line
declare class RouteBuilder {
  // eslint-disable-next-line
  constructor(router: Router)
  // eslint-disable-next-line
  constructor(basePath: string, router: Router)

  // eslint-disable-next-line
  private applyMiddleware(path: string, middlewares: Function[]): void;
  // eslint-disable-next-line
  private applyMiddleware(path: string, middlewares: Function[], children: (RouteBuilder.Group | RouteBuilder.Action)[]): void;

  // eslint-disable-next-line
  private applyGroup(group: RouteBuilder.Group);

  // eslint-disable-next-line
  public use(router: (
    group: (
      pathOrMiddlewares: String | Function | Function[],
      middlewaresOrChildren: Function | Function[] | RouteBuilder.Group | RouteBuilder.Action | (RouteBuilder.Group | RouteBuilder.Action)[],
      children?: RouteBuilder.Group | RouteBuilder.Action | (RouteBuilder.Group | RouteBuilder.Action)[]
    ) => RouteBuilder.Group,
    action: (
      method: string,
      pathOrMiddlewareOrAction: string | Function[] | Function,
      middlewareOrAction?: Function[] | Function,
      action?: Function
    ) => RouteBuilder.Action
  ) => any): any

  // new Action('GET', ACTION)
  // new Action('GET', MIDDLEWARE, ACTION)
  // new Action('GET', ':/job_id', ACTION)
  // new Action('GET', ':/job_id', MIDDLEWARE, ACTION)
  // eslint-disable-next-line
  static action(method: string, action: Function): RouteBuilder.Action
  // eslint-disable-next-line
  static action(method: string, middleware: Function, action: Function): RouteBuilder.Action
  // eslint-disable-next-line
  static action(method: string, middleware: Function[], action: Function): RouteBuilder.Action
  // eslint-disable-next-line
  static action(method: string, path: string, action: Function): RouteBuilder.Action
  // eslint-disable-next-line
  static action(method: string, path: string, middleware: Function, action: Function): RouteBuilder.Action
  // eslint-disable-next-line
  static action(method: string, path: string, middleware: Function[], action: Function): RouteBuilder.Action

  // eslint-disable-next-line
  private action(method: string, action: Function): RouteBuilder.Action
  // eslint-disable-next-line
  private action(method: string, middleware: Function, action: Function): RouteBuilder.Action
  // eslint-disable-next-line
  private action(method: string, middleware: Function[], action: Function): RouteBuilder.Action
  // eslint-disable-next-line
  private action(method: string, path: string, action: Function): RouteBuilder.Action
  // eslint-disable-next-line
  private action(method: string, path: string, middleware: Function, action: Function): RouteBuilder.Action
  // eslint-disable-next-line
  private action(method: string, path: string, middleware: Function[], action: Function): RouteBuilder.Action

  // new Group(':/job_id', CHILDREN|[CHILDREN])
  // new Group(':/job_id', MIDDLEWARES|[MIDDLEWARES], CHILDREN|[CHILDREN])
  // new Group(MIDDLEWARES|[MIDDLEWARES], CHILDREN|[CHILDREN])
  // eslint-disable-next-line
  static group(path: string, children: RouteBuilder.Group | RouteBuilder.Action): RouteBuilder.Group
  // eslint-disable-next-line
  static group(path: string, children: (RouteBuilder.Group | RouteBuilder.Action)[]): RouteBuilder.Group
  // eslint-disable-next-line
  static group(path: string, middlewares: Function, children: RouteBuilder.Group | RouteBuilder.Action): RouteBuilder.Group
  // eslint-disable-next-line
  static group(path: string, middlewares: Function, children: (RouteBuilder.Group | RouteBuilder.Action)[]): RouteBuilder.Group
  // eslint-disable-next-line
  static group(path: string, middlewares: Function[], children: RouteBuilder.Group | RouteBuilder.Action): RouteBuilder.Group
  // eslint-disable-next-line
  static group(path: string, middlewares: Function[], children: (RouteBuilder.Group | RouteBuilder.Action)[]): RouteBuilder.Group
  // eslint-disable-next-line
  static group(middlewares: Function, children: RouteBuilder.Group | RouteBuilder.Action): RouteBuilder.Group
  // eslint-disable-next-line
  static group(middlewares: Function, children: (RouteBuilder.Group | RouteBuilder.Action)[]): RouteBuilder.Group
  // eslint-disable-next-line
  static group(middlewares: Function[], children: RouteBuilder.Group | RouteBuilder.Action): RouteBuilder.Group
  // eslint-disable-next-line
  static group(middlewares: Function[], children: (RouteBuilder.Group | RouteBuilder.Action)[]): RouteBuilder.Group

  // eslint-disable-next-line
  private group(path: string, children: RouteBuilder.Group | RouteBuilder.Action): RouteBuilder.Group
  // eslint-disable-next-line
  private group(path: string, children: (RouteBuilder.Group | RouteBuilder.Action)[]): RouteBuilder.Group
  // eslint-disable-next-line
  private group(path: string, middlewares: Function, children: RouteBuilder.Group | RouteBuilder.Action): RouteBuilder.Group
  // eslint-disable-next-line
  private group(path: string, middlewares: Function, children: (RouteBuilder.Group | RouteBuilder.Action)[]): RouteBuilder.Group
  // eslint-disable-next-line
  private group(path: string, middlewares: Function[], children: RouteBuilder.Group | RouteBuilder.Action): RouteBuilder.Group
  // eslint-disable-next-line
  private group(path: string, middlewares: Function[], children: (RouteBuilder.Group | RouteBuilder.Action)[]): RouteBuilder.Group
  // eslint-disable-next-line
  private group(middlewares: Function, children: RouteBuilder.Group | RouteBuilder.Action): RouteBuilder.Group
  // eslint-disable-next-line
  private group(middlewares: Function, children: (RouteBuilder.Group | RouteBuilder.Action)[]): RouteBuilder.Group
  // eslint-disable-next-line
  private group(middlewares: Function[], children: RouteBuilder.Group | RouteBuilder.Action): RouteBuilder.Group
  // eslint-disable-next-line
  private group(middlewares: Function[], children: (RouteBuilder.Group | RouteBuilder.Action)[]): RouteBuilder.Group
}

export = RouteBuilder;
