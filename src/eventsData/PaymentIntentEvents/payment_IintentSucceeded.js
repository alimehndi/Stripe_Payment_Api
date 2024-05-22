const jsondoc = {
  "id": "evt_3PBWUkRxqlZt79sD18BH2Rbr",
  "object": "event",
  "api_version": "2023-10-16",
  "created": 1714544303,
  "data": {
    "object": {
      "id": "pi_3PBWUkRxqlZt79sD1pnAkMIS",
      "object": "payment_intent",
      "amount": 50000,
      "amount_capturable": 0,
      "amount_details": {
        "tip": {
        }
      },
      "amount_received": 50000,
      "application": null,
      "application_fee_amount": null,
      "automatic_payment_methods": null,
      "canceled_at": null,
      "cancellation_reason": null,
      "capture_method": "automatic_async",
      "client_secret": "pi_3PBWUkRxqlZt79sD1pnAkMIS_secret_gIZAZkJct5p09gLan9RpkdlHO",
      "confirmation_method": "automatic",
      "created": 1714544302,
      "currency": "usd",
      "customer": null,
      "description": null,
      "invoice": null,
      "last_payment_error": null,
      "latest_charge": "ch_3PBWUkRxqlZt79sD1iUzdR2w",
      "livemode": false,
      "metadata": {
      },
      "next_action": null,
      "on_behalf_of": null,
      "payment_method": "pm_1PBWUjRxqlZt79sDJvejGgmS",
      "payment_method_configuration_details": null,
      "payment_method_options": {
        "card": {
          "installments": null,
          "mandate_options": null,
          "network": null,
          "request_three_d_secure": "automatic"
        }
      },
      "payment_method_types": [
        "card"
      ],
      "processing": null,
      "receipt_email": null,
      "review": null,
      "setup_future_usage": null,
      "shipping": null,
      "source": null,
      "statement_descriptor": null,
      "statement_descriptor_suffix": null,
      "status": "succeeded",
      "transfer_data": null,
      "transfer_group": null
    }
  },
  "livemode": false,
  "pending_webhooks": 2,
  "request": {
    "id": "req_pvaZbDq14sKTPN",
    "idempotency_key": "92b5660c-c990-4ed1-a4b8-fd88eaa02b31"
  },
  "type": "payment_intent.succeeded"
}