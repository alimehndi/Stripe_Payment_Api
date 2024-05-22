const jsondoc = {
    "id": "evt_1PBXo9RxqlZt79sDnw7dd5cs",
    "object": "event",
    "api_version": "2023-10-16",
    "created": 1714549347,
    "data": {
      "object": {
        "id": "in_1PBXo5RxqlZt79sDAbGhMpyk",
        "object": "invoice",
        "account_country": "AE",
        "account_name": null,
        "account_tax_ids": null,
        "amount_due": 70000,
        "amount_paid": 70000,
        "amount_remaining": 0,
        "amount_shipping": 0,
        "application": null,
        "application_fee_amount": null,
        "attempt_count": 1,
        "attempted": true,
        "auto_advance": false,
        "automatic_tax": {
          "enabled": false,
          "liability": null,
          "status": null
        },
        "billing_reason": "subscription_create",
        "charge": "ch_3PBXo5RxqlZt79sD1dVQwsQ1",
        "collection_method": "charge_automatically",
        "created": 1714549345,
        "currency": "usd",
        "custom_fields": null,
        "customer": "cus_Q1b0Yi7UkcAh2A",
        "customer_address": {
          "city": null,
          "country": "IN",
          "line1": null,
          "line2": null,
          "postal_code": null,
          "state": null
        },
        "customer_email": "test12@email.com",
        "customer_name": "test12",
        "customer_phone": null,
        "customer_shipping": null,
        "customer_tax_exempt": "none",
        "customer_tax_ids": [
        ],
        "default_payment_method": null,
        "default_source": null,
        "default_tax_rates": [
        ],
        "description": null,
        "discount": null,
        "discounts": [
        ],
        "due_date": null,
        "effective_at": 1714549345,
        "ending_balance": 0,
        "footer": null,
        "from_invoice": null,
        "hosted_invoice_url": "https://invoice.stripe.com/i/acct_1P3ER3RxqlZt79sD/test_YWNjdF8xUDNFUjNSeHFsWnQ3OXNELF9RMWIwM1JxbmNPM3Y5N2J0ZnhRUWg5bW9KeXVodWU3LDEwNTA5MDE0OQ0200fGuVPCD1?s=ap",
        "invoice_pdf": "https://pay.stripe.com/invoice/acct_1P3ER3RxqlZt79sD/test_YWNjdF8xUDNFUjNSeHFsWnQ3OXNELF9RMWIwM1JxbmNPM3Y5N2J0ZnhRUWg5bW9KeXVodWU3LDEwNTA5MDE0OQ0200fGuVPCD1/pdf?s=ap",
        "issuer": {
          "type": "self"
        },
        "last_finalization_error": null,
        "latest_revision": null,
        "lines": {
          "object": "list",
          "data": [
            {
              "id": "il_1PBXo5RxqlZt79sDEE7jv7NB",
              "object": "line_item",
              "amount": 70000,
              "amount_excluding_tax": 70000,
              "currency": "usd",
              "description": "7 × New Plan (at $100.00 / month)",
              "discount_amounts": [
              ],
              "discountable": true,
              "discounts": [
              ],
              "invoice": "in_1PBXo5RxqlZt79sDAbGhMpyk",
              "livemode": false,
              "metadata": {
              },
              "period": {
                "end": 1717227745,
                "start": 1714549345
              },
              "plan": {
                "id": "price_1PBXPdRxqlZt79sDHvLwlTkt",
                "object": "plan",
                "active": true,
                "aggregate_usage": null,
                "amount": 10000,
                "amount_decimal": "10000",
                "billing_scheme": "per_unit",
                "created": 1714547829,
                "currency": "usd",
                "interval": "month",
                "interval_count": 1,
                "livemode": false,
                "metadata": {
                },
                "meter": null,
                "nickname": null,
                "product": "prod_Q1aaAFnFaTrIJT",
                "tiers_mode": null,
                "transform_usage": null,
                "trial_period_days": null,
                "usage_type": "licensed"
              },
              "price": {
                "id": "price_1PBXPdRxqlZt79sDHvLwlTkt",
                "object": "price",
                "active": true,
                "billing_scheme": "per_unit",
                "created": 1714547829,
                "currency": "usd",
                "custom_unit_amount": null,
                "livemode": false,
                "lookup_key": null,
                "metadata": {
                },
                "nickname": null,
                "product": "prod_Q1aaAFnFaTrIJT",
                "recurring": {
                  "aggregate_usage": null,
                  "interval": "month",
                  "interval_count": 1,
                  "meter": null,
                  "trial_period_days": null,
                  "usage_type": "licensed"
                },
                "tax_behavior": "unspecified",
                "tiers_mode": null,
                "transform_quantity": null,
                "type": "recurring",
                "unit_amount": 10000,
                "unit_amount_decimal": "10000"
              },
              "proration": false,
              "proration_details": {
                "credited_items": null
              },
              "quantity": 7,
              "subscription": "sub_1PBXo5RxqlZt79sD3kdxoDVi",
              "subscription_item": "si_Q1b0xMKytrAKKA",
              "tax_amounts": [
              ],
              "tax_rates": [
              ],
              "type": "subscription",
              "unit_amount_excluding_tax": "10000"
            }
          ],
          "has_more": false,
          "total_count": 1,
          "url": "/v1/invoices/in_1PBXo5RxqlZt79sDAbGhMpyk/lines"
        },
        "livemode": false,
        "metadata": {
        },
        "next_payment_attempt": null,
        "number": "7CC2D095-0001",
        "on_behalf_of": null,
        "paid": true,
        "paid_out_of_band": false,
        "payment_intent": "pi_3PBXo5RxqlZt79sD1gfyEF1L",
        "payment_settings": {
          "default_mandate": null,
          "payment_method_options": {
            "acss_debit": null,
            "bancontact": null,
            "card": {
              "request_three_d_secure": "automatic"
            },
            "customer_balance": null,
            "konbini": null,
            "sepa_debit": null,
            "us_bank_account": null
          },
          "payment_method_types": null
        },
        "period_end": 1714549345,
        "period_start": 1714549345,
        "post_payment_credit_notes_amount": 0,
        "pre_payment_credit_notes_amount": 0,
        "quote": null,
        "receipt_number": null,
        "rendering": null,
        "rendering_options": null,
        "shipping_cost": null,
        "shipping_details": null,
        "starting_balance": 0,
        "statement_descriptor": null,
        "status": "paid",
        "status_transitions": {
          "finalized_at": 1714549345,
          "marked_uncollectible_at": null,
          "paid_at": 1714549346,
          "voided_at": null
        },
        "subscription": "sub_1PBXo5RxqlZt79sD3kdxoDVi",
        "subscription_details": {
          "metadata": {
          }
        },
        "subtotal": 70000,
        "subtotal_excluding_tax": 70000,
        "tax": null,
        "test_clock": null,
        "total": 70000,
        "total_discount_amounts": [
        ],
        "total_excluding_tax": 70000,
        "total_tax_amounts": [
        ],
        "transfer_data": null,
        "webhooks_delivered_at": null
      }
    },
    "livemode": false,
    "pending_webhooks": 2,
    "request": {
      "id": "req_2dtjtwjzCMzgWz",
      "idempotency_key": "afed5965-42ea-48e5-bb3d-cbc6201f4c2b"
    },
    "type": "invoice.paid"
  }