import axios from 'axios';

// Get all invoices
axios.get('http://localhost:5000/api/invoices')
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err.message));

// Create a new invoice
axios.post('http://localhost:5000/api/invoices', {
  invoiceNo: 'INV-001',
  customerName: 'John Doe',
  amount: 100,
  date: new Date(),
})
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err.message));
  
// Update an existing invoice
axios.put('http://localhost:5000/api/invoices/123', {
  invoiceNo: 'INV-001',
  customerName: 'Jane Doe',
  amount: 200,
  date: new Date(),
})
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err.message));
  
// Delete an invoice
axios.delete('http://localhost:5000/api/invoices/123')
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err.message));