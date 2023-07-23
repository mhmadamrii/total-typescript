import { sayHello } from "../src/say-hello"

describe('sayHello', function () {
    it('should return hello', function() {
        expect(sayHello('John')).toBe("Hello John")
    })
})