describe('Union type', () => {
    it('should support in typescript', () => {
        let name: string | boolean = "Eko"
        console.log('name', name)

        name = true
        console.log('name', name)
    })
})