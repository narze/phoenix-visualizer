class Window {
  constructor() {
    this._frame = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }
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

class Key {
  static on(key, modifiers, callback) {
    console.debug(`Key.on(${key}, ${modifiers}, ${callback}) called`)
  }
}

class Event {
  static on(eventName, callback) {
    console.debug(`Event.on(${eventName}, ${callback}) called`)
  }
}

class Phoenix {
  static log(...params) {
    console.debug("Phoenix.log called")
    console.log(...params)
  }
}

class Space {
  constructor() {

  }

  static active() {
    return new Space() // TODO: Return
  }

  windows() {
    return [new Window()] // TODO: Return list of instantiated windows
  }
}

class Screen {
  constructor() {

  }

  static main() {
    return new Screen() // TODO: Return main screen
  }

  flippedVisibleFrame() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }
  }
}
