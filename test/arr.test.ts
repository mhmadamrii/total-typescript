describe('Array', function () {
    it('should same with javascript', function () {
        const names: string[] = ["John", "Doe", "Foo", "Bar"]
        const ages: number[] = [1, 2, 3, 4]

        console.info(names)
        console.info(ages)
    })

    it('should readonly', function () {
        const hobbies: ReadonlyArray<string> = ["Reading", "Writing"]
        console.info(hobbies)
        // hobbies[0] = "Playing"
    })
})