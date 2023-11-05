const blankLineItemsChecker = (arr: any[]) => {
    const checkedLineItems = arr.some(data => data?.unit_price !== '');
    return checkedLineItems;
};

describe('blankLineItemsChecker function', () => {
    test('should return true if at least one item has a non-empty unit_price', () => {
        const inputArr = [
            { id: 1, unit_price: '' },
            { id: 2, unit_price: '50' },
            { id: 3, unit_price: '' },
        ];
        const expectedResult = true;

        const result = blankLineItemsChecker(inputArr);

        expect(result).toEqual(expectedResult);
    });

    test('should return false if all items have an empty unit_price', () => {
        const inputArr = [
            { id: 1, unit_price: '' },
            { id: 2, unit_price: '' },
            { id: 3, unit_price: '' },
        ];
        const expectedResult = false;

        const result = blankLineItemsChecker(inputArr);

        expect(result).toEqual(expectedResult);
    });

    test('should return false if the array is empty', () => {
        const inputArr: any[] = [];
        const expectedResult = false;

        const result = blankLineItemsChecker(inputArr);

        expect(result).toEqual(expectedResult);
    });
});