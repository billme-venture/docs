const API = {
  is_authorized: 'GET api.billme.co.th/tokens/authorized',
  generate_access_token: 'POST api.billme.co.th/tokens/access_token',
  retrieve_access_token: 'GET api.billme.co.th/tokens/access_token',
  revoke_access_token: 'POST api.billme.co.th/tokens/access_token/revoke',
  create_invoice: 'POST api.billme.co.th/invoices',
  invoice_detail: 'GET api.billme.co.th/invoices/:invoiceId',
  confirm_payment: 'POST api.billme.co.th/invoices/:invoiceId/paid',
  decline_payment: 'POST api.billme.co.th/invoices/:invoiceId/decline_payment',
  invoice_transition_logs: 'GET api.billme.co.th/invoices/:invoiceId/transition_logs',
  cancel_invoice: 'DELETE api.billme.co.th/invoices/:invoiceId',
  create_receipt: 'POST api.billme.co.th/receipts',
  receipt_detail: 'GET api.billme.co.th/receipts/:receiptId',
  cancel_receipt: 'DELETE api.billme.co.th/receipts/:receiptId',
  create_tax_invoice: 'POST api.billme.co.th/tax_invoices',
  tax_invoice_detail: 'GET api.billme.co.th/tax_invoices/:taxInvoiceId',
  cancel_tax_invoice: 'DELETE api.billme.co.th/tax_invoices/:taxInvoiceId'
}
