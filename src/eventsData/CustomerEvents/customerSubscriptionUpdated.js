const jsondoc = {
    "id": "evt_1PBXo8RxqlZt79sD2GiyF29g",
    "object": "event",
    "api_version": "2023-10-16",
    "created": 1714549347,
    "data": {
      "object": {
        "id": "sub_1PBXo5RxqlZt79sD3kdxoDVi",
        "object": "subscription",
        "application": null,
        "application_fee_percent": null,
        "automatic_tax": {
          "enabled": false,
          "liability": null
        },
        "billing_cycle_anchor": 1714549345,
        "billing_cycle_anchor_config": null,
        "billing_thresholds": null,
        "cancel_at": null,
        "cancel_at_period_end": false,
        "canceled_at": null,
        "cancellation_details": {
          "comment": null,
          "feedback": null,
          "reason": null
        },
        "collection_method": "charge_automatically",
        "created": 1714549345,
        "currency": "usd",
        "current_period_end": 1717227745,
        "current_period_start": 1714549345,
        "customer": "cus_Q1b0Yi7UkcAh2A",
        "days_until_due": null,
        "default_payment_method": "pm_1PBXo3RxqlZt79sDfpsFppCd",
        "default_source": null,
        "default_tax_rates": [
        ],
        "description": null,
        "discount": null,
        "discounts": [
        ],
        "ended_at": null,
        "invoice_settings": {
          "account_tax_ids": null,
          "issuer": {
            "type": "self"
          }
        },
        "items": {
          "object": "list",
          "data": [
            {
              "id": "si_Q1b0xMKytrAKKA",
              "object": "subscription_item",
              "billing_thresholds": null,
              "created": 1714549345,
              "discounts": [
              ],
              "metadata": {
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
              "quantity": 7,
              "subscription": "sub_1PBXo5RxqlZt79sD3kdxoDVi",
              "tax_rates": [
              ]
            }
          ],
          "has_more": false,
          "total_count": 1,
          "url": "/v1/subscription_items?subscription=sub_1PBXo5RxqlZt79sD3kdxoDVi"
        },
        "latest_invoice": "in_1PBXo5RxqlZt79sDAbGhMpyk",
        "livemode": false,
        "metadata": {
        },
        "next_pending_invoice_item_invoice": null,
        "on_behalf_of": null,
        "pause_collection": null,
        "payment_settings": {
          "payment_method_options": {
            "acss_debit": null,
            "bancontact": null,
            "card": {
              "network": null,
              "request_three_d_secure": "automatic"
            },
            "customer_balance": null,
            "konbini": null,
            "sepa_debit": null,
            "us_bank_account": null
          },
          "payment_method_types": null,
          "save_default_payment_method": "off"
        },
        "pending_invoice_item_interval": null,
        "pending_setup_intent": null,
        "pending_update": null,
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
        "quantity": 7,
        "schedule": null,
        "start_date": 1714549345,
        "status": "active",
        "test_clock": null,
        "transfer_data": null,
        "trial_end": null,
        "trial_settings": {
          "end_behavior": {
            "missing_payment_method": "create_invoice"
          }
        },
        "trial_start": null
      },
      "previous_attributes": {
        "default_payment_method": null,
        "status": "incomplete"
      }
    },
    "livemode": false,
    "pending_webhooks": 2,
    "request": {
      "id": "req_2dtjtwjzCMzgWz",
      "idempotency_key": "afed5965-42ea-48e5-bb3d-cbc6201f4c2b"
    },
    "type": "customer.subscription.updated"
  }
  