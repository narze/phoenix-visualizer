export class Window {
  id = null
  screenId = null

  constructor({ screenId, spaceId }) {
    this.id = uuidv4()
    this.screenId = screenId
    this.spaceId = spaceId

    this._frame = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }
  }

  static all() {
    return PhoenixWeb.windows
  }

  frame() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }
  }

  isVisible() {
    return true
  }

  setFrame(frame) {
    this._frame = frame
  }
}

export class Key {
  static on(key, modifiers, callback) {
    console.debug(`Key.on(${key}, ${modifiers}, ${callback}) called`)
  }
}

export class Event {
  static on(eventName, callback) {
    console.debug(`Event.on(${eventName}, ${callback}) called`)
  }
}

export class Phoenix {
  static log(...params) {
    console.debug("Phoenix.log called")
    console.log(...params)
  }
}

export class Space {
  id = null
  screenId = null

  static all() {
    return PhoenixWeb.spaces
  }

  constructor({ screenId, spaceId }) {
    this.id = uuidv4()
    this.screenId = screenId
    this.spaceId = spaceId
  }

  static active() {
    return new Space() // TODO: Return
  }

  windows() {
    return PhoenixWeb.windows.filter((window) => window.spaceId === this.id)
  }
}

export class Screen {
  id = null

  constructor() {
    this.id = uuidv4()
  }

  static main() {
    return new Screen() // TODO: Return main screen
  }

  static all() {
    return PhoenixWeb.screens
  }

  flippedVisibleFrame() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }
  }

  spaces() {
    return PhoenixWeb.spaces.filter((space) => space.screenId === this.id)
  }

  windows() {
    return PhoenixWeb.windows.filter((window) => window.screenId === this.id)
  }
}

export class PhoenixWeb {
  static spaces = []
  static screens = []
  static windows = []

  static init() {
    const screen = new Screen()
    const space = new Space({ screenId: screen.id })
    const window = new Window({ screenId: screen.id, spaceId: space.id })

    this.screens.push(screen)
    this.spaces.push(space)
    this.windows.push(window)
  }
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
