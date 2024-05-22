
const jsondoc = {
    "id": "evt_3PBWUkRxqlZt79sD1jweBrdP",
    "object": "event",
    "api_version": "2023-10-16",
    "created": 1714544305,
    "data": {
      "object": {
        "id": "ch_3PBWUkRxqlZt79sD1iUzdR2w",
        "object": "charge",
        "amount": 50000,
        "amount_captured": 50000,
        "amount_refunded": 0,
        "application": null,
        "application_fee": null,
        "application_fee_amount": null,
        "balance_transaction": "txn_3PBWUkRxqlZt79sD1VVujQCV",
        "billing_details": {
          "address": {
            "city": null,
            "country": "IN",
            "line1": null,
            "line2": null,
            "postal_code": null,
            "state": null
          },
          "email": "alimehndi99@gmail.com",
          "name": "Ali",
          "phone": null
        },
        "calculated_statement_descriptor": "Stripe",
        "captured": true,
        "created": 1714544302,
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
          "risk_score": 55,
          "seller_message": "Payment complete.",
          "type": "authorized"
        },
        "paid": true,
        "payment_intent": "pi_3PBWUkRxqlZt79sD1pnAkMIS",
        "payment_method": "pm_1PBWUjRxqlZt79sDJvejGgmS",
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
            "exp_month": 5,
            "exp_year": 2066,
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
        "receipt_url": "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xUDNFUjNSeHFsWnQ3OXNEKLG9x7EGMga880531Po6LBYDdlP05Y6poh5Ojt6xS6rOaysFun7BunMexoyDcep5N3a20r31HLi-vw4D",
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
      },
      "previous_attributes": {
        "balance_transaction": null,
        "receipt_url": "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xUDNFUjNSeHFsWnQ3OXNEKLG9x7EGMgZ7sqhPVLQ6LBYOuv9lYm1l8GvR2tHw1Wy-oxccowjEumo_AaAHJC6bYOti2KfsGrtFIxVh"
      }
    },
    "livemode": false,
    "pending_webhooks": 2,
    "request": {
      "id": null,
      "idempotency_key": null
    },
    "type": "charge.updated"
  }