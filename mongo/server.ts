import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import invoiceRoutes from './routes/invoiceRouter';

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb+srv://invoice:sphere@invoices.3tutkhu.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Use routes
app.use('/api/invoices', invoiceRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
