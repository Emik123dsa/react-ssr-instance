const { Schema, model } = require("mongoose");

const schema = new Schema({
    id: { type: String, required: true },
    from_currency: { type: String, required: true },
    to_currency: { type: String, required: true },
    uuid: { type: String, required: true }
}, {collection: "__pickarVendor"})

module.exports = model('Transactions', schema);