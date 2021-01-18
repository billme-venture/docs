const API = {
  create_invoice: 'POST api.billme.co.th/invoices',
  invoice_detail: 'GET api.billme.co.th/invoices/:invoiceId',
  confirm_payment: 'POST api.billme.co.th/invoices/:invoiceId/payment',
  cancel_invoice: 'DELETE api.billme.co.th/invoices/:invoiceId',
  create_receipt: 'POST api.billme.co.th/receipts',
  receipt_detail: 'GET api.billme.co.th/receipts/:receiptId',
  cancel_receipt: 'DELETE api.billme.co.th/receipts/:receiptId',
  create_tax_invoice: 'POST api.billme.co.th/tax_invoices',
  tax_invoice_detail: 'GET api.billme.co.th/tax_invoices/:taxInvoiceId',
  cancel_tax_invoice: 'DELETE api.billme.co.th/tax_invoices/:taxInvoiceId'
}
