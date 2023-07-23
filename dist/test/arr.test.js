"use strict";
describe('Array', function () {
    it('should same with javascript', function () {
        const names = ["John", "Doe", "Foo", "Bar"];
        const ages = [1, 2, 3, 4];
        console.info(names);
        console.info(ages);
    });
    it('should readonly', function () {
        const hobbies = ["Reading", "Writing"];
        console.info(hobbies);
        hobbies[0] = "Playing";
    });
});
