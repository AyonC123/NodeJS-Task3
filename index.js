const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Server");
});

app.get("/number", (req, res) => {
    res.send('Go to "/number/:num" to check if :num is prime or composite');
});

app.get("/number/:num", (req, res) => {
    let num = req.params.num;
    const isPrime = (num) => {
        if (num <= 2) {
            res.send("2 is a prime number");
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                res.send(`${num} is a composite number`);
                break;
            }
        }
        res.send(`${num} is a prime number`);
    };
    isPrime(num);
});

app.listen(3000, () => console.log("server started"));
