import express from "express";

interface Invoice {
  id: number;
  customerName: string;
  amount: number;
}

const invoices: Invoice[] = [
  { id: 1, customerName: "Test 1", amount: 100 },
  { id: 2, customerName: "Test 2", amount: 200 },
];

//const express = require('express');
const app = express();
app.use(express.json());

app.get("/invoices", (req, res) => {
  res.send(invoices);
});

app.get("/invoices/:id", (req, res) => {
  const invoice = invoices.find((invoice) => invoice.id === parseInt(req.params.id));
  if (invoice) {
    res.send(invoice);
  } else {
    res.status(404).send("Invoice not found");
  }
});

app.post("/invoices", (req, res) => {
  const invoice = req.body as Invoice;
  invoices.push(invoice);
  res.send(invoice);
});

app.put("/invoices/:id", (req, res) => {
  const index = invoices.findIndex((invoice) => invoice.id === parseInt(req.params.id));
  if (index !== -1) {
    const invoice = req.body as Invoice;
    invoices[index] = invoice;
    res.send(invoice);
  } else {
    res.status(404).send("Invoice not found");
  }
});

app.delete("/invoices/:id", (req, res) => {
  const index = invoices.findIndex((invoice) => invoice.id === parseInt(req.params.id));
  if (index !== -1) {
    invoices.splice(index, 1);
    res.send("Invoice deleted successfully");
  } else {
    res.status(404).send("Invoice not found");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));