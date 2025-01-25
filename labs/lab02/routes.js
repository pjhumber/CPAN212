import express from "express";
let router = express.Router();

router.get("/name", (req, res) => {
    res.send("parveer");
});

router.get("/greeting", (req, res) => {
    res.send("parveer - student no.: n01645521");
});

router.get("/add", (req, res) => {
    let { x, y } = req.query;
    let result = parseFloat(x) + parseFloat(y);
    res.send(`Result: ${result}`);
});

router.get('/calculate', (req, res) => {
    let { a, b, operation } = req.query;
    let numA = parseFloat(a);
    let numB = parseFloat(b);
    let result;

    if (operation === '+') {  //there was a way in which i could've rerouted the operation to /add but i ran out of time to implement
        result = numA + numB;
    } else if (operation === '-') {
        result = numA - numB;
    } else if (operation === '*') {
        result = numA * numB;
    } else if (operation === '/') {
        result = numA / numB;
    } else if (operation === '**') {
        result = numA ** numB;
    } else {
        return res.send('wrong operation used try +, -, *, /, or **.');
    }

    res.send(`result: ${result}`);
});

export default router;
