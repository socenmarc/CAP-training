const cds = require('@sap/cds')



module.exports = async function () {

    // NEW
    const db = await cds.connect.to('db') // connect to database service
    const { Books, BusinessPartners } = db.entities         // get reflected definitions
    const extSrv = await cds.connect.to('API_BUSINESS_PARTNER');

    this.on('READ', BusinessPartners, req => extSrv.tx(req).run(req.query))
    // NEW
   
    
    // Register your event handlers in here, e.g....
    this.after('READ', 'Books', each => {

        if (each.stock > 111) {
            each.title += ` -- 11% discount!`
        }

    })

    // Reduce stock of ordered books if available stock suffices
    this.on('submitOrder', async req => {
        const { book, amount } = req.data
        const n = await UPDATE(Books, book)
            .with({ stock: { '-=': amount } })
            .where({ stock: { '>=': amount } })
        n > 0 || req.error(409, `${amount} exceeds stock for book #${book}`)
    })


}

