const cds = require('@sap/cds')

const { Yy1_KantoxApi } = require('./generated/modules/yy-1-kantoxapi-cds-service/index');


module.exports = async function () {

    const db = await cds.connect.to('db') // connect to database service
    const { Books } = db.entities         // get reflected definitions

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

