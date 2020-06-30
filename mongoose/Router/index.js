const { Router } = require("express");
const Transaction = require("../Model/Transactions");
const { check, validationResult } = require("express-validator");

const router = Router();

router.get("/get-transaction", async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    var query = Transaction.find({ 'uuid': req.query.uuid });

    query.select("from_currency to_currency id");

    query.exec((err, person) => {
        if (err) return handleError(err);

        res.send(person);
    })
})

router.post("/transactions", [
    check('id', 'Empty from id').isString(),
    check('from_currency', 'Empty from_currency').isString(),
    check('to_currency', "Empty to currency").isString()
], async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            error: errors.array(),
            msg: req.query
        })
    }

    try {

        const { id, from_currency, to_currency, uuid } = req.query;

        const transaction = new Transaction({ id, from_currency, to_currency, uuid });

        transaction.save();

        res.status(200).send({ msg: req.cookies });

    } catch (e) {
        res.status(500).json({ msg: req.body });
    }
});

module.exports = router;