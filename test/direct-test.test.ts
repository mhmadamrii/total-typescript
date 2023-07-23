const add = (a: number, b: number): number => {
    return a + b;
}


describe('Direct test', () => {
    it('should add two numbers', () => {
        const result = add(5, 10);
        expect(result).toBe(15)
    })
})