import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
  _id: { type: String, require: true },
  object: { type: String },
  api_version: { type: Date },
  created: { type: Number },
  data: {
    object: {
      id: { type: String, require: true },
      object: { type: String },
      application: { type: String },
      automatic_payment_methods: { type: String },
      cancellation_reasons: { type: String },
      client_secret: { type: String },
      created: { type: Number },
      customer: { type: String },
      description: { type: String },
      flow_direction: { type: String },
      last_setup_error: { type: String },
      latest_attempt: { type: String },
      livemode: { type: Boolean, default: false },
      mandate: { type: String },
      metadata: { type: Map, of: String },
      next_action: { type: String },
      on_behalf_of: { type: String },
      payment_method: { type: String },
      payment_method_options: {
        acss_debit: {
          currency: { type: String },
          mandate_options: {
            interval_description: { type: String },
            payment_schedule: { type: String },
            transaction_type: { type: String }
          },
          verification_method: { type: String }
        }
      },
      payment_methods_types: [{ type: String }],
      single_use_mandate: { type: String },
      status: { type: String },
      usage: { type: String }
    }
  },
  livemode: { type: String },
  pending_webhooks: { type: Number },
  request: {
    id: { type: String },
    idempotency_key: { type: String }
  },
  type: { type: String }
})

const Event = mongoose.model('Event',eventSchema);
export default Event;