import { expect } from 'chai'
import { PhoenixWeb, Screen, Space, Window } from '@/phoenix-web-adapter'

describe('PhoenixWeb', () => {
  it('exists', () => {
    expect(PhoenixWeb).not.to.be.undefined
  })

  describe('.init', () => {
    it('initializes 1 screen with 1 space, and 1 window', () => {
      expect(Screen.all()).to.have.lengthOf(0)
      expect(Space.all()).to.have.lengthOf(0)
      expect(Window.all()).to.have.lengthOf(0)

      PhoenixWeb.init()

      expect(Screen.all()).to.have.lengthOf(1)
      const firstScreen = Screen.all()[0]

      expect(firstScreen).to.be.instanceOf(Screen)

      expect(Space.all()).to.have.lengthOf(1)
      const firstSpace = Space.all()[0]

      expect(firstScreen.spaces()).to.have.lengthOf(1)

      expect(Window.all()).to.have.lengthOf(1)
      const firstWindow = Window.all()[0]

      expect(firstScreen.windows()).to.have.lengthOf(1)
      expect(firstScreen.windows()[0]).to.equal(firstWindow)
      expect(firstSpace.windows()).to.have.lengthOf(1)
      expect(firstSpace.windows()[0]).to.equal(firstWindow)
    })
  })
})
