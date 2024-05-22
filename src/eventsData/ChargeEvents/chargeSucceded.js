
const jsondoc = {
  "object": {
    "id": "ch_3PBW8nRxqlZt79sD15DqupbX",
    "object": "charge",
    "amount": 50000,
    "amount_captured": 50000,
    "amount_refunded": 0,
    "application": null,
    "application_fee": null,
    "application_fee_amount": null,
    "balance_transaction": null,
    "billing_details": {
      "address": {
        "city": null,
        "country": "IN",
        "line1": null,
        "line2": null,
        "postal_code": null,
        "state": null
      },
      "email": "New@email.com",
      "name": "New",
      "phone": null
    },
    "calculated_statement_descriptor": "Stripe",
    "captured": true,
    "created": 1714542941,
    "currency": "usd",
    "customer": null,
    "description": null,
    "destination": null,
    "dispute": null,
    "disputed": false,
    "failure_balance_transaction": null,
    "failure_code": null,
    "failure_message": null,
    "fraud_details": {
    },
    "invoice": null,
    "livemode": false,
    "metadata": {
    },
    "on_behalf_of": null,
    "order": null,
    "outcome": {
      "network_status": "approved_by_network",
      "reason": null,
      "risk_level": "normal",
      "risk_score": 44,
      "seller_message": "Payment complete.",
      "type": "authorized"
    },
    "paid": true,
    "payment_intent": "pi_3PBW8nRxqlZt79sD1HEouJ4Z",
    "payment_method": "pm_1PBW8mRxqlZt79sD85hdfWE6",
    "payment_method_details": {
      "card": {
        "amount_authorized": 50000,
        "brand": "visa",
        "checks": {
          "address_line1_check": null,
          "address_postal_code_check": null,
          "cvc_check": "pass"
        },
        "country": "US",
        "exp_month": 4,
        "exp_year": 2025,
        "extended_authorization": {
          "status": "disabled"
        },
        "fingerprint": "IHPFKU6RvXWZ9wda",
        "funding": "credit",
        "incremental_authorization": {
          "status": "unavailable"
        },
        "installments": null,
        "last4": "4242",
        "mandate": null,
        "multicapture": {
          "status": "unavailable"
        },
        "network": "visa",
        "network_token": {
          "used": false
        },
        "overcapture": {
          "maximum_amount_capturable": 50000,
          "status": "unavailable"
        },
        "three_d_secure": null,
        "wallet": null
      },
      "type": "card"
    },
    "radar_options": {
    },
    "receipt_email": null,
    "receipt_number": null,
    "receipt_url": "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xUDNFUjNSeHFsWnQ3OXNEKN6yx7EGMgYBpiFF1qM6LBYtcyoDFjNQM0-av3-T4kSqP4wIOBBmFsO6BGBU0vzgHK-GkWCd5PENMNlB",
    "refunded": false,
    "review": null,
    "shipping": null,
    "source": null,
    "source_transfer": null,
    "statement_descriptor": null,
    "statement_descriptor_suffix": null,
    "status": "succeeded",
    "transfer_data": null,
    "transfer_group": null
  }
} 