const cds = require('@sap/cds')
const { serializeEntity } = require("@sap-cloud-sdk/core");

const { Yy1_KantoxApi } = require('./generated/modules/yy-1-kantoxapi-cds-service/index');


module.exports = async function () {

    const db = await cds.connect.to('db') // connect to database service
    const { Books } = db.entities;         // get reflected definitions

    this.on('READ', 'kantoxData', async req => {

        const kantoxData = await Yy1_KantoxApi
        .requestBuilder()
        .getAll()  
       .select(
            Yy1_KantoxApi.COMPANY_CODE,
            Yy1_KantoxApi.FISCAL_YEAR,
            Yy1_KantoxApi.ACCOUNTING_DOCUMENT,
            Yy1_KantoxApi.ACCOUNTING_DOCUMENT_ITEM,
            Yy1_KantoxApi.SUPPLIER,
            Yy1_KantoxApi.IS_CLEARED,
            //Yy1_KantoxApi.POSTING_DATE,
            //Yy1_KantoxApi.DOCUMENT_DATE,
            Yy1_KantoxApi.DOCUMENT_REFERENCE_ID,
            Yy1_KantoxApi.STATUS_SAP,
            Yy1_KantoxApi.STATUS_SAP_TEXT,
            Yy1_KantoxApi.STATUS_KANTOX,
            Yy1_KantoxApi.STATUS_KANTOX_TEXT,
            Yy1_KantoxApi.SENDING_DATE,
            Yy1_KantoxApi.REFERENCE_BATCH_KANTOX,
            Yy1_KantoxApi.KANTOX_ORDER_REFERENCE,
            Yy1_KantoxApi.KANTOX_REFERENCE,
            Yy1_KantoxApi.VALUE_DATE_KANTOX
        ) 
        .execute({destinationName: 'S4HC'})  
      //  .then(result => console.log(JSON.stringify(result)))
        .then(result => result.map(kd => serializeEntity(kd, Yy1_KantoxApi)))  
        .catch(reason => {
            req.error(409,`Error calling api ${reason.message}`);
            console.log('error calling api ', reason.message)          
        })    
        
        return kantoxData;
    })

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

