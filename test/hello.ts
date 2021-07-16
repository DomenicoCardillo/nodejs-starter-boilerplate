import { helloWorld } from "../src/hello"

describe('Hello', () => {
    it('Hello World', () => {
        expect(helloWorld()).toBe('Hello World!')
    })
})