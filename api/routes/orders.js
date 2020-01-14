const express = require("express");
const router = express.Router();

router.post("/", (req, res, next)=> {
    const order = {
        orderId: req.body.orderId,
        quantity: req.body.quantity
    };
    res.status(200).json({
        wiadomosc: "Dodanie nowego produktu do zamówienia",
        zamowienie: order
    });
});

router.get("/:orderId", (req, res, next)=> {
    const id = req.params.orderId;
    res.status(200).json({wiadomosc: "Lista wszystkich produktów"});
});

router.post("/:orderId", (req, res, next)=> {
    const id = req.params.orderId;
    res.status(200).json({wiadomosc: "Dodaj produkty"});
});

module.exports = router;