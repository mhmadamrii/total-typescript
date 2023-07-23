describe('Data type', function () {
    it('should declare', function () {
        const name: string = "John Doe"
        const balance: number = 3000
        const isVip: boolean = true

        console.info(name)
        console.info(balance)
        console.info(isVip)

        /* jalankan perintah "npx tsc --watch" untuk monitoring pada deklarasi types */

        /* 
        contoh:
        jalankan command "npx tsc --watch"

        lalu ubah tipe data
        let name: string = "Foo"
        name = 123
        
        maka typescript akan komplain terkait error tersebut
        */
    })
})