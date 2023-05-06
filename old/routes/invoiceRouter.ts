import { Router, Request, Response } from 'express';
import Invoice, { IInvoice } from '../models/invoice';

const router = Router();

// Get all invoices
router.get('/', async (req: Request, res: Response) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

// Get a single invoice by ID
router.get('/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ msg: 'Invoice not found' });
    }
    res.json(invoice);
  } catch (error) {
    console.error((error as Error).message);
    res.status(500).send('Server Error');
  }
});

// Create a new invoice
router.post('/', async (req: Request, res: Response) => {
  const invoice: IInvoice = new Invoice({
    invoiceNo: req.body.invoiceNo,
    customerName: req.body.customerName,
    amount: req.body.amount,
    date: req.body.date,
  });

  try {
    const newInvoice = await invoice.save();
    res.status(201).json(newInvoice);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
});

// Update an existing invoice
router.put('/:id', async (req, res) => {
  try {
    const { invoiceNo, customerName, amount, date } = req.body;
    const invoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      { invoiceNo, customerName, amount, date },
      { new: true }
    );
    if (!invoice) {
      return res.status(404).json({ msg: 'Invoice not found' });
    }
    res.json(invoice);
  } catch (error) {
    console.error((error as Error).message);
    res.status(500).send('Server Error');
  }
});

// Delete an invoice
router.delete('/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndDelete(req.params.id);
    if (!invoice) {
      return res.status(404).json({ msg: 'Invoice not found' });
    }
    res.json({ msg: 'Invoice deleted' });
  } catch (error) {
    console.error((error as Error).message);
    res.status(500).send('Server Error');
  }
});

export default router;
