import axios from 'axios';

const baseUrl = 'http://localhost:5000';

// Get all invoices
axios.get('${baseUrl}/api/invoices')    
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err.message));

// Create a new invoice
axios.post('${baseUrl}/api/invoices', {
  invoiceNo: 'INV-001',
  customerName: 'John Doe',
  amount: 100,
  date: new Date(),
})
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err.message));
  
// Update an existing invoice
axios.put('${baseUrl}/api/invoices/123', {
  invoiceNo: 'INV-001',
  customerName: 'Jane Doe',
  amount: 200,
  date: new Date(),
})
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err.message));
  
// Delete an invoice
axios.delete('${baseUrl}/api/invoices/123')
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err.message));