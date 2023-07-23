"use strict";
describe('Data type', function () {
    it('should declare', function () {
        const name = "John Doe";
        const balance = 3000;
        const isVip = true;
        console.info(name);
        console.info(balance);
        console.info(isVip);
        /* jalankan perintah "npx tsc --watch" untuk monitoring pada deklarasi types */
        /*
        contoh:
        jalankan command "npx tsc --watch"

        lalu ubah tipe data
        let name: string = "Foo"
        name = 123
        
        maka typescript akan komplain terkait error tersebut
        */
    });
});
