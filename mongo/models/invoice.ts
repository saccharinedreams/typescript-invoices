import mongoose, { Schema, Document } from 'mongoose';

export interface IInvoice extends Document {
  invoiceNo: string;
  customerName: string;
  amount: number;
  date: Date;
}

const InvoiceSchema: Schema = new Schema({
  invoiceNo: { type: String, required: true },
  customerName: {type: String, required: true},
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

export default mongoose.model<IInvoice>('Invoice', InvoiceSchema);
