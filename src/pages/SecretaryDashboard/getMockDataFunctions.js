const dataForImportantForTodayCard = JSON.parse(`{
    "without_forms": {
        "data": [
            {
                "id": 322604,
                "patients_id": 13822,
                "providers_id": 268,
                "appointment_statuses_id": 8,
                "time": 1696528800,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "11:00 AM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 322604
                },
                "patient": {
                    "id": 13822,
                    "first_name": "Juliane",
                    "last_name": "Hummer",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 52,
                    "first_visit_date": "2022-09-29",
                    "last_document_request": {
                        "id": 12017,
                        "patient_id": 13822,
                        "sent_by": 151,
                        "hash": "4bdd9",
                        "expiring_at": "2023-03-24 17:39:21",
                        "sent_to_email": null,
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2023-02-22 17:39:21",
                        "updated_at": "2023-04-15 02:13:49",
                        "sent_to_phone": "(925) 628-2488",
                        "sent_to_phone_error": null,
                        "mandrill_event_id": null,
                        "sent_at": "2023-02-22 17:39:21",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 59677,
                                "request_id": 12017,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 59675,
                                "request_id": 12017,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": "0",
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 59676,
                                "request_id": 12017,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 268,
                    "provider_name": "Dana Rosen, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322480,
                "patients_id": 11401,
                "providers_id": 256,
                "appointment_statuses_id": 8,
                "time": 1696534200,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "12:30 PM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 322480
                },
                "patient": {
                    "id": 11401,
                    "first_name": "Barry",
                    "last_name": "Rado",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "25",
                    "appointments_count": 71,
                    "first_visit_date": "2021-10-11",
                    "last_document_request": {
                        "id": 5444,
                        "patient_id": 11401,
                        "sent_by": 158,
                        "hash": "d5653",
                        "expiring_at": "2021-11-18 15:34:44",
                        "sent_to_email": null,
                        "retrieve_count": 1,
                        "last_retrieved_at": "2021-10-19 15:41:35",
                        "created_at": "2021-10-19 15:34:44",
                        "updated_at": "2023-04-15 02:13:49",
                        "sent_to_phone": "(818) 303-6698",
                        "sent_to_phone_error": null,
                        "mandrill_event_id": null,
                        "sent_at": "2021-10-19 15:34:44",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 26891,
                                "request_id": 5444,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 26889,
                                "request_id": 5444,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": "25",
                                    "charge_for_cancellation": "40"
                                },
                                "filled_at": null
                            },
                            {
                                "id": 26890,
                                "request_id": 5444,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 256,
                    "provider_name": "Alexandra Bruun, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 318944,
                "patients_id": 15862,
                "providers_id": 274,
                "appointment_statuses_id": 8,
                "time": 1696608000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "9:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 318944
                },
                "patient": {
                    "id": 15862,
                    "first_name": "Hazel",
                    "last_name": "Velacruz",
                    "status_id": 1,
                    "primary_insurance_id": 17,
                    "visit_copay": "0",
                    "appointments_count": 6,
                    "first_visit_date": "2023-09-01",
                    "last_document_request": {
                        "id": 14753,
                        "patient_id": 15862,
                        "sent_by": 171,
                        "hash": "a2d0b",
                        "expiring_at": "2023-10-01 16:36:58",
                        "sent_to_email": "hazel.velacruz@gmail.com",
                        "retrieve_count": 2,
                        "last_retrieved_at": "2023-09-01 16:46:11",
                        "created_at": "2023-09-01 16:36:58",
                        "updated_at": "2023-09-01 16:47:34",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "184e56b1b0834bc0bd2f6a32afded75c",
                        "sent_at": "2023-09-01 16:37:02",
                        "delivered_at": null,
                        "opened_at": "2023-09-01 16:46:04",
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": "2023-09-01 16:47:34",
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 73409,
                                "request_id": 14753,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 73407,
                                "request_id": 14753,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": "0",
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 30,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 73408,
                                "request_id": 14753,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 274,
                    "provider_name": "Melanie Lapeyrolerie, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323320,
                "patients_id": 15790,
                "providers_id": 211,
                "appointment_statuses_id": 8,
                "time": 1696611600,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "10:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323320
                },
                "patient": {
                    "id": 15790,
                    "first_name": "Purnell",
                    "last_name": "Williams",
                    "status_id": 1,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 10,
                    "first_visit_date": "2023-08-30",
                    "last_document_request": {
                        "id": 14775,
                        "patient_id": 15790,
                        "sent_by": 110,
                        "hash": "c3c37",
                        "expiring_at": "2023-10-06 08:05:44",
                        "sent_to_email": "purwms@yahoo.com",
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2023-09-06 08:05:44",
                        "updated_at": "2023-09-06 08:05:53",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "ae990fdfe2c24687811d3359560b3e99",
                        "sent_at": "2023-09-06 08:05:53",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 73536,
                                "request_id": 14775,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 73534,
                                "request_id": 14775,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": 0,
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 73535,
                                "request_id": 14775,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 211,
                    "provider_name": "Lisa Miller, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321429,
                "patients_id": 11923,
                "providers_id": 216,
                "appointment_statuses_id": 8,
                "time": 1696615200,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "11:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 321429
                },
                "patient": {
                    "id": 11923,
                    "first_name": "Jamileth",
                    "last_name": "Lara",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 90,
                    "first_visit_date": "2022-03-11",
                    "last_document_request": {
                        "id": 7722,
                        "patient_id": 11923,
                        "sent_by": 115,
                        "hash": "157e9",
                        "expiring_at": "2022-04-13 18:58:30",
                        "sent_to_email": "leclaireyami@gmail.com",
                        "retrieve_count": 2,
                        "last_retrieved_at": "2022-03-15 10:10:55",
                        "created_at": "2022-03-14 18:58:30",
                        "updated_at": "2023-04-15 02:13:49",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": null,
                        "sent_at": "2022-03-14 18:58:30",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 38011,
                                "request_id": 7722,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 38009,
                                "request_id": 7722,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": "0",
                                    "charge_for_cancellation": "0"
                                },
                                "filled_at": null
                            },
                            {
                                "id": 38010,
                                "request_id": 7722,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 216,
                    "provider_name": "Noemi Hernandez, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 315822,
                "patients_id": 13831,
                "providers_id": 268,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 315822
                },
                "patient": {
                    "id": 13831,
                    "first_name": "Lisa",
                    "last_name": "Patten",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 54,
                    "first_visit_date": "2022-10-07",
                    "last_document_request": {
                        "id": 12018,
                        "patient_id": 13831,
                        "sent_by": 151,
                        "hash": "5c34d",
                        "expiring_at": "2023-03-24 17:40:45",
                        "sent_to_email": null,
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2023-02-22 17:40:45",
                        "updated_at": "2023-04-15 02:13:49",
                        "sent_to_phone": "(323) 314-2311",
                        "sent_to_phone_error": null,
                        "mandrill_event_id": null,
                        "sent_at": "2023-02-22 17:40:45",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 59683,
                                "request_id": 12018,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 59681,
                                "request_id": 12018,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": "0",
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 59682,
                                "request_id": 12018,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 268,
                    "provider_name": "Dana Rosen, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322796,
                "patients_id": 16042,
                "providers_id": 280,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322796
                },
                "patient": {
                    "id": 16042,
                    "first_name": "Bruce",
                    "last_name": "Solheim",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-06",
                    "last_document_request": {
                        "id": 15168,
                        "patient_id": 16042,
                        "sent_by": 171,
                        "hash": "1bdcd",
                        "expiring_at": "2023-11-02 16:22:40",
                        "sent_to_email": "bsolheim@citruscollege.edu",
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2023-10-03 16:22:40",
                        "updated_at": "2023-10-03 16:24:14",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "4a1d90d11122404da9ba819b8145996c",
                        "sent_at": "2023-10-03 16:24:14",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 75692,
                                "request_id": 15168,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 75690,
                                "request_id": 15168,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": 0,
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 75691,
                                "request_id": 15168,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 280,
                    "provider_name": "Anastasia Rementegui, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 314685,
                "patients_id": 15306,
                "providers_id": 268,
                "appointment_statuses_id": 8,
                "time": 1696626000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "2:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 314685
                },
                "patient": {
                    "id": 15306,
                    "first_name": "David",
                    "last_name": "Midell",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "25",
                    "appointments_count": 20,
                    "first_visit_date": "2023-06-01",
                    "last_document_request": {
                        "id": 13463,
                        "patient_id": 15306,
                        "sent_by": 167,
                        "hash": "b661b",
                        "expiring_at": "2023-07-01 09:02:12",
                        "sent_to_email": "david.medell@playonproductions.net",
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2023-06-01 09:02:12",
                        "updated_at": "2023-06-01 09:02:16",
                        "sent_to_phone": "(847)-910-4351",
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "326b9c18384a48afb36c4c68ca153575",
                        "sent_at": "2023-06-01 09:02:16",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 66426,
                                "request_id": 13463,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 66424,
                                "request_id": 13463,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": "25",
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 66425,
                                "request_id": 13463,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 268,
                    "provider_name": "Dana Rosen, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322786,
                "patients_id": 10467,
                "providers_id": 53,
                "appointment_statuses_id": 8,
                "time": 1696626000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "2:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322786
                },
                "patient": {
                    "id": 10467,
                    "first_name": "Travis",
                    "last_name": "Gaydos",
                    "status_id": 1,
                    "primary_insurance_id": 23,
                    "visit_copay": "31.63",
                    "appointments_count": 75,
                    "first_visit_date": "2021-06-08",
                    "last_document_request": {
                        "id": 3192,
                        "patient_id": 10467,
                        "sent_by": 42,
                        "hash": "f7fac",
                        "expiring_at": "2021-07-19 09:19:48",
                        "sent_to_email": "travicon@gmail.com",
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2021-06-19 09:19:48",
                        "updated_at": "2023-04-15 02:13:49",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": null,
                        "sent_at": "2021-06-19 09:19:48",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 16085,
                                "request_id": 3192,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 16083,
                                "request_id": 3192,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": "40",
                                    "charge_for_cancellation": "0"
                                },
                                "filled_at": null
                            },
                            {
                                "id": 16084,
                                "request_id": 3192,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 53,
                    "provider_name": "Jennifer Frank, PhD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321501,
                "patients_id": 11228,
                "providers_id": 53,
                "appointment_statuses_id": 8,
                "time": 1696636800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "5:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 321501
                },
                "patient": {
                    "id": 11228,
                    "first_name": "Lisa",
                    "last_name": "Handel",
                    "status_id": 1,
                    "primary_insurance_id": 2,
                    "visit_copay": "5",
                    "appointments_count": 97,
                    "first_visit_date": "2021-09-17",
                    "last_document_request": {
                        "id": 4647,
                        "patient_id": 11228,
                        "sent_by": 151,
                        "hash": "b1387",
                        "expiring_at": "2021-10-17 17:03:20",
                        "sent_to_email": null,
                        "retrieve_count": 1,
                        "last_retrieved_at": "2021-09-18 09:32:44",
                        "created_at": "2021-09-17 17:03:20",
                        "updated_at": "2023-04-15 02:13:49",
                        "sent_to_phone": "(818) 395-5971",
                        "sent_to_phone_error": null,
                        "mandrill_event_id": null,
                        "sent_at": "2021-09-17 17:03:20",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 23135,
                                "request_id": 4647,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 23133,
                                "request_id": 4647,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": "5",
                                    "charge_for_cancellation": "75"
                                },
                                "filled_at": null
                            },
                            {
                                "id": 23134,
                                "request_id": 4647,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 53,
                    "provider_name": "Jennifer Frank, PhD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323043,
                "patients_id": 16054,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696636800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "5:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323043
                },
                "patient": {
                    "id": 16054,
                    "first_name": "Siena",
                    "last_name": "Barnhart",
                    "status_id": 8,
                    "primary_insurance_id": 15,
                    "visit_copay": "30",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-06",
                    "last_document_request": {
                        "id": 15177,
                        "patient_id": 16054,
                        "sent_by": 175,
                        "hash": "44a33",
                        "expiring_at": "2023-11-03 13:17:44",
                        "sent_to_email": "rachelrox76@yahoo.com",
                        "retrieve_count": 2,
                        "last_retrieved_at": "2023-10-04 21:07:40",
                        "created_at": "2023-10-04 13:17:44",
                        "updated_at": "2023-10-04 21:12:15",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "858b87d7eef243a3a627b64c3f8ab311",
                        "sent_at": "2023-10-04 13:17:46",
                        "delivered_at": null,
                        "opened_at": "2023-10-04 21:07:27",
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": "2023-10-04 21:12:15",
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 75746,
                                "request_id": 15177,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 75744,
                                "request_id": 15177,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": "30",
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 25,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 75745,
                                "request_id": 15177,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323074,
                "patients_id": 16055,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696640400,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "6:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323074
                },
                "patient": {
                    "id": 16055,
                    "first_name": "Daonn",
                    "last_name": "Robinson",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-06",
                    "last_document_request": {
                        "id": 15179,
                        "patient_id": 16055,
                        "sent_by": 175,
                        "hash": "19dbd",
                        "expiring_at": "2023-11-03 13:18:52",
                        "sent_to_email": null,
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2023-10-04 13:18:52",
                        "updated_at": "2023-10-04 13:18:52",
                        "sent_to_phone": "(904) 537-2221",
                        "sent_to_phone_error": null,
                        "mandrill_event_id": null,
                        "sent_at": null,
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 75758,
                                "request_id": 15179,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 75756,
                                "request_id": 15179,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": 0,
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 75757,
                                "request_id": 15179,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 319026,
                "patients_id": 15312,
                "providers_id": 274,
                "appointment_statuses_id": 8,
                "time": 1696644000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "7:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 319026
                },
                "patient": {
                    "id": 15312,
                    "first_name": "Raj",
                    "last_name": "Dugel",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 26,
                    "first_visit_date": "2023-06-02",
                    "last_document_request": {
                        "id": 13465,
                        "patient_id": 15312,
                        "sent_by": 171,
                        "hash": "0ff9e",
                        "expiring_at": "2023-07-01 10:30:23",
                        "sent_to_email": "rajdugel@gmail.com",
                        "retrieve_count": 2,
                        "last_retrieved_at": "2023-06-02 17:00:15",
                        "created_at": "2023-06-01 10:30:23",
                        "updated_at": "2023-06-02 17:08:41",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "0d3eba7bfbaf495782855136d8b0f6d5",
                        "sent_at": "2023-06-01 10:30:26",
                        "delivered_at": null,
                        "opened_at": "2023-06-02 17:00:07",
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": "2023-06-02 17:08:41",
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 66438,
                                "request_id": 13465,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 66436,
                                "request_id": 13465,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": 0,
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 66437,
                                "request_id": 13465,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 274,
                    "provider_name": "Melanie Lapeyrolerie, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 319019,
                "patients_id": 15310,
                "providers_id": 274,
                "appointment_statuses_id": 8,
                "time": 1696694400,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "9:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 319019
                },
                "patient": {
                    "id": 15310,
                    "first_name": "Charity",
                    "last_name": "Gates",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 22,
                    "first_visit_date": "2023-06-03",
                    "last_document_request": {
                        "id": 13500,
                        "patient_id": 15310,
                        "sent_by": 171,
                        "hash": "55914",
                        "expiring_at": "2023-07-02 14:49:52",
                        "sent_to_email": "charityb031227@gmail.com",
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2023-06-02 14:49:52",
                        "updated_at": "2023-06-02 14:49:56",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "4f2150c3dc684d6e8969a431fb98230d",
                        "sent_at": "2023-06-02 14:49:56",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 66629,
                                "request_id": 13500,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 66627,
                                "request_id": 13500,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": 0,
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 66628,
                                "request_id": 13500,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 274,
                    "provider_name": "Melanie Lapeyrolerie, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321439,
                "patients_id": 8263,
                "providers_id": 216,
                "appointment_statuses_id": 8,
                "time": 1696698000,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "10:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 321439
                },
                "patient": {
                    "id": 8263,
                    "first_name": "Victor",
                    "last_name": "Choy",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "20",
                    "appointments_count": 164,
                    "first_visit_date": "2020-05-22",
                    "last_document_request": null,
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 216,
                    "provider_name": "Noemi Hernandez, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323319,
                "patients_id": 16061,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696698000,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "10:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323319
                },
                "patient": {
                    "id": 16061,
                    "first_name": "Frank",
                    "last_name": "Miller",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-07",
                    "last_document_request": {
                        "id": 15158,
                        "patient_id": 16061,
                        "sent_by": 171,
                        "hash": "d78ac",
                        "expiring_at": "2023-11-02 14:05:02",
                        "sent_to_email": "millerfr39@gmail.com",
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2023-10-03 14:05:02",
                        "updated_at": "2023-10-03 14:05:20",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "1edbcf911eea43d78577a4eed558b9ea",
                        "sent_at": "2023-10-03 14:05:20",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 75632,
                                "request_id": 15158,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 75630,
                                "request_id": 15158,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": 0,
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 75631,
                                "request_id": 15158,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 320343,
                "patients_id": 15500,
                "providers_id": 274,
                "appointment_statuses_id": 8,
                "time": 1696701600,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "11:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 320343
                },
                "patient": {
                    "id": 15500,
                    "first_name": "April",
                    "last_name": "Alexander",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "55",
                    "appointments_count": 23,
                    "first_visit_date": "2023-07-01",
                    "last_document_request": {
                        "id": 13871,
                        "patient_id": 15500,
                        "sent_by": 176,
                        "hash": "8965c",
                        "expiring_at": "2023-07-31 11:09:01",
                        "sent_to_email": "aealexander0218@gmail.com",
                        "retrieve_count": 2,
                        "last_retrieved_at": "2023-07-01 11:13:27",
                        "created_at": "2023-07-01 11:09:01",
                        "updated_at": "2023-07-01 11:13:27",
                        "sent_to_phone": "(213)-214-5724",
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "0b4ae3bc5a944e98a16bd7400253ef3b",
                        "sent_at": "2023-07-01 11:09:05",
                        "delivered_at": null,
                        "opened_at": "2023-07-01 11:13:18",
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 68645,
                                "request_id": 13871,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 68643,
                                "request_id": 13871,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": 0,
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 68644,
                                "request_id": 13871,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 274,
                    "provider_name": "Melanie Lapeyrolerie, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323350,
                "patients_id": 16058,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696701600,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "11:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323350
                },
                "patient": {
                    "id": 16058,
                    "first_name": "Jonathan",
                    "last_name": "Kee",
                    "status_id": 8,
                    "primary_insurance_id": 5,
                    "visit_copay": "25",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-07",
                    "last_document_request": {
                        "id": 15169,
                        "patient_id": 16058,
                        "sent_by": 171,
                        "hash": "41909",
                        "expiring_at": "2023-11-02 17:01:46",
                        "sent_to_email": "jonathankk97@gmail.com",
                        "retrieve_count": 1,
                        "last_retrieved_at": "2023-10-05 09:01:21",
                        "created_at": "2023-10-03 17:01:46",
                        "updated_at": "2023-10-05 09:08:59",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "ee1b9e0f5c66435c974f3f3038a8265f",
                        "sent_at": "2023-10-03 17:01:49",
                        "delivered_at": null,
                        "opened_at": "2023-10-05 09:01:21",
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": "2023-10-05 09:08:59",
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 75698,
                                "request_id": 15169,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 75696,
                                "request_id": 15169,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": "25",
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": "25",
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 75697,
                                "request_id": 15169,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321639,
                "patients_id": 11641,
                "providers_id": 240,
                "appointment_statuses_id": 8,
                "time": 1696705200,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "12:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 321639
                },
                "patient": {
                    "id": 11641,
                    "first_name": "Sneshia",
                    "last_name": "Stribling",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "10",
                    "appointments_count": 90,
                    "first_visit_date": "2021-10-29",
                    "last_document_request": {
                        "id": 5613,
                        "patient_id": 11641,
                        "sent_by": 139,
                        "hash": "afbfb",
                        "expiring_at": "2021-11-26 10:24:02",
                        "sent_to_email": null,
                        "retrieve_count": 3,
                        "last_retrieved_at": "2021-10-27 10:51:34",
                        "created_at": "2021-10-27 10:24:02",
                        "updated_at": "2023-04-15 02:13:49",
                        "sent_to_phone": "(323) 745-7881",
                        "sent_to_phone_error": null,
                        "mandrill_event_id": null,
                        "sent_at": "2021-10-27 10:24:02",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 27711,
                                "request_id": 5613,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 27709,
                                "request_id": 5613,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": "0",
                                    "charge_for_cancellation": "50"
                                },
                                "filled_at": null
                            },
                            {
                                "id": 27710,
                                "request_id": 5613,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 240,
                    "provider_name": "LaNesha Lacy, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322627,
                "patients_id": 16005,
                "providers_id": 16,
                "appointment_statuses_id": 8,
                "time": 1696705200,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "12:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322627
                },
                "patient": {
                    "id": 16005,
                    "first_name": "Carmen",
                    "last_name": "Parker",
                    "status_id": 8,
                    "primary_insurance_id": 1,
                    "visit_copay": "15",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-07",
                    "last_document_request": {
                        "id": 15142,
                        "patient_id": 16005,
                        "sent_by": 171,
                        "hash": "23331",
                        "expiring_at": "2023-11-01 16:13:16",
                        "sent_to_email": "carmen_parker07@yahoo.com",
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2023-10-02 16:13:16",
                        "updated_at": "2023-10-02 16:15:32",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "39c67f554eb142f4bac9752ff6c98828",
                        "sent_at": "2023-10-02 16:15:32",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 75564,
                                "request_id": 15142,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 75562,
                                "request_id": 15142,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": "15",
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 75563,
                                "request_id": 15142,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 16,
                    "provider_name": "Kim Boykin-Johnson, PsyD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323028,
                "patients_id": 15946,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696705200,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "12:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323028
                },
                "patient": {
                    "id": 15946,
                    "first_name": "Kyle",
                    "last_name": "Barnum COUPLES",
                    "status_id": 1,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 2,
                    "first_visit_date": "2023-09-25",
                    "last_document_request": {
                        "id": 15056,
                        "patient_id": 15946,
                        "sent_by": 175,
                        "hash": "8028c",
                        "expiring_at": "2023-10-25 12:06:28",
                        "sent_to_email": null,
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2023-09-25 12:06:28",
                        "updated_at": "2023-09-25 12:06:28",
                        "sent_to_phone": "(213) 332-4891",
                        "sent_to_phone_error": null,
                        "mandrill_event_id": null,
                        "sent_at": null,
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 75089,
                                "request_id": 15056,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 75087,
                                "request_id": 15056,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": 0,
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 75088,
                                "request_id": 15056,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322838,
                "patients_id": 16030,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696712400,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "2:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322838
                },
                "patient": {
                    "id": 16030,
                    "first_name": "Junko",
                    "last_name": "Manzanilla",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 2,
                    "first_visit_date": "2023-09-30",
                    "last_document_request": {
                        "id": 15157,
                        "patient_id": 16030,
                        "sent_by": 175,
                        "hash": "4137b",
                        "expiring_at": "2023-11-02 11:39:14",
                        "sent_to_email": null,
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2023-10-03 11:39:14",
                        "updated_at": "2023-10-03 11:39:14",
                        "sent_to_phone": "(323) 283-3254",
                        "sent_to_phone_error": null,
                        "mandrill_event_id": null,
                        "sent_at": null,
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 75626,
                                "request_id": 15157,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 75624,
                                "request_id": 15157,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": 0,
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 75625,
                                "request_id": 15157,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323453,
                "patients_id": 16066,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696723200,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "5:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323453
                },
                "patient": {
                    "id": 16066,
                    "first_name": "Jay",
                    "last_name": "Dunlap",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-07",
                    "last_document_request": {
                        "id": 15173,
                        "patient_id": 16066,
                        "sent_by": 175,
                        "hash": "bceb0",
                        "expiring_at": "2023-11-03 13:03:56",
                        "sent_to_email": "PHOTOJAY50@YAHOO.COM",
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2023-10-04 13:03:56",
                        "updated_at": "2023-10-04 13:04:00",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "74ce20dd8ba54a94b507b0274c3c8166",
                        "sent_at": "2023-10-04 13:04:00",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 75722,
                                "request_id": 15173,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 75720,
                                "request_id": 15173,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": 0,
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 75721,
                                "request_id": 15173,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323465,
                "patients_id": 16063,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696726800,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "6:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323465
                },
                "patient": {
                    "id": 16063,
                    "first_name": "Lolita",
                    "last_name": "Pettigrew",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-07",
                    "last_document_request": {
                        "id": 15182,
                        "patient_id": 16063,
                        "sent_by": 171,
                        "hash": "fe3c9",
                        "expiring_at": "2023-11-03 13:51:20",
                        "sent_to_email": "lolita.pettigrew@yahoo.com",
                        "retrieve_count": null,
                        "last_retrieved_at": null,
                        "created_at": "2023-10-04 13:51:20",
                        "updated_at": "2023-10-04 13:51:23",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "61bf43ad782c452481bafa1f18f9507c",
                        "sent_at": "2023-10-04 13:51:23",
                        "delivered_at": null,
                        "opened_at": null,
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": null,
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 75776,
                                "request_id": 15182,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 75774,
                                "request_id": 15182,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": 0,
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 75775,
                                "request_id": 15182,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323688,
                "patients_id": 16064,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696730400,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "7:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323688
                },
                "patient": {
                    "id": 16064,
                    "first_name": "Christian",
                    "last_name": "Rivera",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-07",
                    "last_document_request": null,
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 320316,
                "patients_id": 15304,
                "providers_id": 274,
                "appointment_statuses_id": 8,
                "time": 1696791600,
                "date_of_service": {
                    "date": "10\/08\/2023",
                    "time": "12:00 PM",
                    "text": "10\/08\/2023 (Active)",
                    "value": 320316
                },
                "patient": {
                    "id": 15304,
                    "first_name": "Luna",
                    "last_name": "Rivera",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 25,
                    "first_visit_date": "2023-06-03",
                    "last_document_request": {
                        "id": 13499,
                        "patient_id": 15304,
                        "sent_by": 171,
                        "hash": "cd54c",
                        "expiring_at": "2023-07-02 14:49:08",
                        "sent_to_email": "lunarivera2433@icloud.com",
                        "retrieve_count": 4,
                        "last_retrieved_at": "2023-06-03 12:04:10",
                        "created_at": "2023-06-02 14:49:08",
                        "updated_at": "2023-06-03 12:09:19",
                        "sent_to_phone": null,
                        "sent_to_phone_error": null,
                        "mandrill_event_id": "dd588243a2e3451d96f0bf8b021e8d93",
                        "sent_at": "2023-06-02 14:49:40",
                        "delivered_at": null,
                        "opened_at": "2023-06-03 12:03:24",
                        "deferral_at": null,
                        "hard_bounced_at": null,
                        "soft_bounced_at": null,
                        "bounced_at": null,
                        "click_at": "2023-06-03 12:09:19",
                        "spam_at": null,
                        "unsub_at": null,
                        "rejected_at": null,
                        "items": [
                            {
                                "id": 66623,
                                "request_id": 13499,
                                "form_type_id": 1,
                                "metadata": null,
                                "filled_at": null
                            },
                            {
                                "id": 66621,
                                "request_id": 13499,
                                "form_type_id": 2,
                                "metadata": {
                                    "co_pay": 0,
                                    "payment_for_session_not_converted": 0,
                                    "self_pay": 0,
                                    "charge_for_cancellation": 0,
                                    "other_charges_price": 0
                                },
                                "filled_at": null
                            },
                            {
                                "id": 66622,
                                "request_id": 13499,
                                "form_type_id": 3,
                                "metadata": null,
                                "filled_at": null
                            }
                        ]
                    },
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 274,
                    "provider_name": "Melanie Lapeyrolerie, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            }
        ],
        "meta": {
            "total": 26
        }
    },
    "with_required_eligibility": {
        "data": [
            {
                "id": 323600,
                "patients_id": 11501,
                "providers_id": 16,
                "appointment_statuses_id": 8,
                "time": 1696525200,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "10:00 AM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 323600
                },
                "patient": {
                    "id": 11501,
                    "patient_id": 111216325,
                    "patient_account_number": null,
                    "auth_number": null,
                    "first_name": "Ta'Nika",
                    "home_phone": "4133288518",
                    "parse_home_phone": 1,
                    "last_name": "Gibson",
                    "middle_initial": "",
                    "primary_provider_id": null,
                    "preferred_language_id": null,
                    "email": "tgibson0316@gmail.com",
                    "secondary_email": null,
                    "insured_name": null,
                    "secondary_insured_name": null,
                    "address": "3450 Sawtelle Blvd. #245",
                    "address_2": null,
                    "city": "Los Angeles",
                    "state": "CA",
                    "zip": "90066",
                    "date_of_birth": "1991-03-16",
                    "age": null,
                    "cell_phone": null,
                    "parse_cell_phone": 1,
                    "work_phone": null,
                    "parse_work_phone": 1,
                    "preferred_phone": null,
                    "visits_auth": 0,
                    "visits_auth_left": 0,
                    "primary_insurance": "CIGNA Behavioral Health",
                    "primary_insurance_id": 16,
                    "insurance_plan_id": 185,
                    "eligibility_payer_id": null,
                    "secondary_insurance": null,
                    "sex": "F",
                    "elig_copay": null,
                    "elig_status": null,
                    "reffering_provider": null,
                    "is_payment_forbidden": false,
                    "is_test": 0,
                    "upheal_user_id": null,
                    "upheal_client_session_url": null,
                    "upheal_therapist_session_url": null,
                    "created_at": "2021-10-11 16:44:57",
                    "updated_at": "2023-09-29 09:08:51",
                    "completed_appointment_count": 0,
                    "watching": 1,
                    "visit_copay": "35",
                    "hidden_on_patients_without_appointments_statistics": 0,
                    "created_patient_date": "2021-10-11",
                    "status_id": 1,
                    "eff_stop_date": null,
                    "eff_start_date": null,
                    "subscriber_id": "U64534554 01",
                    "charge_for_cancellation_appointment": 0,
                    "prev_charge_for_cancellation_appointment": 0,
                    "is_parsed_cancellation_fee": 1,
                    "start_synchronization_time": null,
                    "tmp_is_manually_archived": 0,
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    },
                    "alert": {
                        "id": 15810,
                        "patient_id": 11501,
                        "officeally_alert_id": 18947136,
                        "date_created": "2022-01-28",
                        "message": "INS. 2022: Called Beacon SAG- AFRA: 866-277-5383, Pt still has $25 copay in-person & telehealth.",
                        "resolved_by": null,
                        "date_resolved": null,
                        "status": "1",
                        "created_at": "2022-01-28 10:49:43",
                        "updated_at": "2022-01-28 10:51:43"
                    }
                },
                "provider": {
                    "id": 16,
                    "provider_name": "Kim Boykin-Johnson, PsyD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323668,
                "patients_id": 13001,
                "providers_id": 16,
                "appointment_statuses_id": 8,
                "time": 1696528800,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "11:00 AM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 323668
                },
                "patient": {
                    "id": 13001,
                    "patient_id": 117934596,
                    "patient_account_number": null,
                    "auth_number": null,
                    "first_name": "Amy",
                    "home_phone": null,
                    "parse_home_phone": 1,
                    "last_name": "Ripplinger",
                    "middle_initial": "",
                    "primary_provider_id": null,
                    "preferred_language_id": null,
                    "email": "ripp.amy@gmail.com",
                    "secondary_email": null,
                    "insured_name": null,
                    "secondary_insured_name": null,
                    "address": "205 Kelp St.",
                    "address_2": null,
                    "city": "Manhattan Beach",
                    "state": "CA",
                    "zip": "90266",
                    "date_of_birth": "1984-02-11",
                    "age": null,
                    "cell_phone": "8587050708",
                    "parse_cell_phone": 1,
                    "work_phone": null,
                    "parse_work_phone": 1,
                    "preferred_phone": null,
                    "visits_auth": 0,
                    "visits_auth_left": 0,
                    "primary_insurance": "Optum",
                    "primary_insurance_id": 55,
                    "insurance_plan_id": 411,
                    "eligibility_payer_id": null,
                    "secondary_insurance": null,
                    "sex": "F",
                    "elig_copay": null,
                    "elig_status": null,
                    "reffering_provider": null,
                    "is_payment_forbidden": false,
                    "is_test": 0,
                    "upheal_user_id": null,
                    "upheal_client_session_url": null,
                    "upheal_therapist_session_url": null,
                    "created_at": "2022-05-12 12:13:32",
                    "updated_at": "2023-05-19 05:13:06",
                    "completed_appointment_count": 0,
                    "watching": 1,
                    "visit_copay": "45",
                    "hidden_on_patients_without_appointments_statistics": 0,
                    "created_patient_date": "2022-05-12",
                    "status_id": 1,
                    "eff_stop_date": null,
                    "eff_start_date": null,
                    "subscriber_id": "OSC05141320-01",
                    "charge_for_cancellation_appointment": 0,
                    "prev_charge_for_cancellation_appointment": 0,
                    "is_parsed_cancellation_fee": 1,
                    "start_synchronization_time": null,
                    "tmp_is_manually_archived": 0,
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    },
                    "alert": {
                        "id": 18538,
                        "patient_id": 13001,
                        "officeally_alert_id": 22106969,
                        "date_created": "2023-01-13",
                        "message": "copay on 2023 is $45.00",
                        "resolved_by": null,
                        "date_resolved": null,
                        "status": "1",
                        "created_at": "2023-03-02 21:22:45",
                        "updated_at": "2023-03-02 21:22:45"
                    }
                },
                "provider": {
                    "id": 16,
                    "provider_name": "Kim Boykin-Johnson, PsyD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323570,
                "patients_id": 13773,
                "providers_id": 20,
                "appointment_statuses_id": 8,
                "time": 1696532400,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "12:00 PM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 323570
                },
                "patient": {
                    "id": 13773,
                    "patient_id": 120753943,
                    "patient_account_number": null,
                    "auth_number": null,
                    "first_name": "Cynthia",
                    "home_phone": "9092762262",
                    "parse_home_phone": 0,
                    "last_name": "Borruel",
                    "middle_initial": "",
                    "primary_provider_id": null,
                    "preferred_language_id": null,
                    "email": "cborruel12@gmail.com",
                    "secondary_email": null,
                    "insured_name": null,
                    "secondary_insured_name": null,
                    "address": "13247 FOOTHILL BL  7305",
                    "address_2": null,
                    "city": "RANCHO CUCAMONGA",
                    "state": "CA",
                    "zip": "91739-3635",
                    "date_of_birth": "1983-01-20",
                    "age": null,
                    "cell_phone": "9092762262",
                    "parse_cell_phone": 1,
                    "work_phone": null,
                    "parse_work_phone": 1,
                    "preferred_phone": null,
                    "visits_auth": 0,
                    "visits_auth_left": 0,
                    "primary_insurance": "Kaiser Permanente",
                    "primary_insurance_id": 1,
                    "insurance_plan_id": 12,
                    "eligibility_payer_id": 145,
                    "secondary_insurance": null,
                    "sex": "F",
                    "elig_copay": null,
                    "elig_status": null,
                    "reffering_provider": null,
                    "is_payment_forbidden": true,
                    "is_test": 0,
                    "upheal_user_id": null,
                    "upheal_client_session_url": null,
                    "upheal_therapist_session_url": null,
                    "created_at": "2022-09-16 08:54:41",
                    "updated_at": "2023-09-12 09:03:44",
                    "completed_appointment_count": 0,
                    "watching": 1,
                    "visit_copay": "0",
                    "hidden_on_patients_without_appointments_statistics": 0,
                    "created_patient_date": "2022-09-16",
                    "status_id": 1,
                    "eff_stop_date": null,
                    "eff_start_date": null,
                    "subscriber_id": "000021220836",
                    "charge_for_cancellation_appointment": 0,
                    "prev_charge_for_cancellation_appointment": 0,
                    "is_parsed_cancellation_fee": 1,
                    "start_synchronization_time": null,
                    "tmp_is_manually_archived": 0,
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    },
                    "alert": {
                        "id": 18685,
                        "patient_id": 13773,
                        "officeally_alert_id": 22710961,
                        "date_created": "2023-03-21",
                        "message": "2023: MEDICAL, COPAY $0",
                        "resolved_by": null,
                        "date_resolved": null,
                        "status": "1",
                        "created_at": "2023-03-21 12:51:43",
                        "updated_at": "2023-03-21 12:51:43"
                    }
                },
                "provider": {
                    "id": 20,
                    "provider_name": "Fariba Kooklan, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321533,
                "patients_id": 14965,
                "providers_id": 1,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 321533
                },
                "patient": {
                    "id": 14965,
                    "patient_id": 125528290,
                    "patient_account_number": null,
                    "auth_number": "VA0027284364",
                    "first_name": "Heriberto",
                    "home_phone": null,
                    "parse_home_phone": 1,
                    "last_name": "Muleroguzman",
                    "middle_initial": "",
                    "primary_provider_id": null,
                    "preferred_language_id": null,
                    "email": "caguita_13@hotmail.com",
                    "secondary_email": null,
                    "insured_name": null,
                    "secondary_insured_name": null,
                    "address": "809 E North Ave",
                    "address_2": null,
                    "city": "Lompoc",
                    "state": "CA",
                    "zip": "93436",
                    "date_of_birth": "1982-12-14",
                    "age": null,
                    "cell_phone": "8057179181",
                    "parse_cell_phone": 1,
                    "work_phone": null,
                    "parse_work_phone": 1,
                    "preferred_phone": null,
                    "visits_auth": 999,
                    "visits_auth_left": 987,
                    "primary_insurance": "PGBA TriWest VA CCN",
                    "primary_insurance_id": 77,
                    "insurance_plan_id": 502,
                    "eligibility_payer_id": null,
                    "secondary_insurance": null,
                    "sex": "M",
                    "elig_copay": null,
                    "elig_status": null,
                    "reffering_provider": null,
                    "is_payment_forbidden": true,
                    "is_test": 0,
                    "upheal_user_id": null,
                    "upheal_client_session_url": null,
                    "upheal_therapist_session_url": null,
                    "created_at": "2023-04-03 14:26:55",
                    "updated_at": "2023-10-05 17:37:37",
                    "completed_appointment_count": 0,
                    "watching": 1,
                    "visit_copay": "0",
                    "hidden_on_patients_without_appointments_statistics": 0,
                    "created_patient_date": "2023-04-03",
                    "status_id": 1,
                    "eff_stop_date": "2023-10-15",
                    "eff_start_date": "2023-04-03",
                    "subscriber_id": "1285051335",
                    "charge_for_cancellation_appointment": 0,
                    "prev_charge_for_cancellation_appointment": 0,
                    "is_parsed_cancellation_fee": 1,
                    "start_synchronization_time": null,
                    "tmp_is_manually_archived": 0,
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    },
                    "alert": {
                        "id": 18792,
                        "patient_id": 14965,
                        "officeally_alert_id": 22837569,
                        "date_created": "2023-04-03",
                        "message": "Triwest Referral #: VA0027284364, 04\/03\/23-10\/15\/23, 999 sessions. ",
                        "resolved_by": null,
                        "date_resolved": null,
                        "status": "1",
                        "created_at": "2023-04-06 15:52:41",
                        "updated_at": "2023-09-20 10:44:31"
                    }
                },
                "provider": {
                    "id": 1,
                    "provider_name": "William Kaiser, PhD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322293,
                "patients_id": 15988,
                "providers_id": 212,
                "appointment_statuses_id": 8,
                "time": 1696626000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "2:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322293
                },
                "patient": {
                    "id": 15988,
                    "patient_id": 133950611,
                    "patient_account_number": null,
                    "auth_number": null,
                    "first_name": "Sachem",
                    "home_phone": null,
                    "parse_home_phone": 1,
                    "last_name": "Abernathy",
                    "middle_initial": "",
                    "primary_provider_id": null,
                    "preferred_language_id": null,
                    "email": "Sachemabernathy@gmail.com",
                    "secondary_email": null,
                    "insured_name": null,
                    "secondary_insured_name": null,
                    "address": "6810 MILWOOD AVE APT 21",
                    "address_2": null,
                    "city": "Canoga Park",
                    "state": "CA",
                    "zip": "91303",
                    "date_of_birth": "1997-02-18",
                    "age": null,
                    "cell_phone": "8182208108",
                    "parse_cell_phone": 1,
                    "work_phone": null,
                    "parse_work_phone": 1,
                    "preferred_phone": null,
                    "visits_auth": 0,
                    "visits_auth_left": 0,
                    "primary_insurance": "Kaiser Permanente",
                    "primary_insurance_id": 1,
                    "insurance_plan_id": 4,
                    "eligibility_payer_id": null,
                    "secondary_insurance": null,
                    "sex": "F",
                    "elig_copay": null,
                    "elig_status": null,
                    "reffering_provider": null,
                    "is_payment_forbidden": false,
                    "is_test": 0,
                    "upheal_user_id": null,
                    "upheal_client_session_url": null,
                    "upheal_therapist_session_url": null,
                    "created_at": "2023-09-20 15:20:32",
                    "updated_at": "2023-10-05 00:45:09",
                    "completed_appointment_count": 0,
                    "watching": 1,
                    "visit_copay": "25",
                    "hidden_on_patients_without_appointments_statistics": 0,
                    "created_patient_date": "2023-09-20",
                    "status_id": 8,
                    "eff_stop_date": null,
                    "eff_start_date": null,
                    "subscriber_id": "000025674136",
                    "charge_for_cancellation_appointment": 80,
                    "prev_charge_for_cancellation_appointment": 0,
                    "is_parsed_cancellation_fee": 1,
                    "start_synchronization_time": null,
                    "tmp_is_manually_archived": 0,
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    },
                    "alert": null
                },
                "provider": {
                    "id": 212,
                    "provider_name": "Monica Lang, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323043,
                "patients_id": 16054,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696636800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "5:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323043
                },
                "patient": {
                    "id": 16054,
                    "patient_id": 134186787,
                    "patient_account_number": null,
                    "auth_number": null,
                    "first_name": "Siena",
                    "home_phone": null,
                    "parse_home_phone": 1,
                    "last_name": "Barnhart",
                    "middle_initial": "",
                    "primary_provider_id": null,
                    "preferred_language_id": null,
                    "email": "rachelrox76@yahoo.com",
                    "secondary_email": null,
                    "insured_name": null,
                    "secondary_insured_name": null,
                    "address": "6042 Rosemont Dr",
                    "address_2": null,
                    "city": "Huntington Beach",
                    "state": "CA",
                    "zip": "92647",
                    "date_of_birth": "2007-08-07",
                    "age": null,
                    "cell_phone": "7149513904",
                    "parse_cell_phone": 1,
                    "work_phone": null,
                    "parse_work_phone": 1,
                    "preferred_phone": null,
                    "visits_auth": 0,
                    "visits_auth_left": 0,
                    "primary_insurance": "Managed Health Network",
                    "primary_insurance_id": 15,
                    "insurance_plan_id": 16,
                    "eligibility_payer_id": null,
                    "secondary_insurance": null,
                    "sex": "F",
                    "elig_copay": null,
                    "elig_status": null,
                    "reffering_provider": null,
                    "is_payment_forbidden": false,
                    "is_test": 0,
                    "upheal_user_id": null,
                    "upheal_client_session_url": null,
                    "upheal_therapist_session_url": null,
                    "created_at": "2023-10-02 11:33:54",
                    "updated_at": "2023-10-03 09:00:59",
                    "completed_appointment_count": 0,
                    "watching": 1,
                    "visit_copay": "30",
                    "hidden_on_patients_without_appointments_statistics": 0,
                    "created_patient_date": "2023-10-02",
                    "status_id": 8,
                    "eff_stop_date": null,
                    "eff_start_date": null,
                    "subscriber_id": "R00590498",
                    "charge_for_cancellation_appointment": 0,
                    "prev_charge_for_cancellation_appointment": 0,
                    "is_parsed_cancellation_fee": 0,
                    "start_synchronization_time": null,
                    "tmp_is_manually_archived": 0,
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    },
                    "alert": null
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323743,
                "patients_id": 10449,
                "providers_id": 65,
                "appointment_statuses_id": 8,
                "time": 1696644000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "7:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323743
                },
                "patient": {
                    "id": 10449,
                    "patient_id": 107975423,
                    "patient_account_number": null,
                    "auth_number": null,
                    "first_name": "Cynthia",
                    "home_phone": "7145974562",
                    "parse_home_phone": 0,
                    "last_name": "Leon",
                    "middle_initial": "",
                    "primary_provider_id": null,
                    "preferred_language_id": null,
                    "email": "1809cynthia@gmail.com",
                    "secondary_email": null,
                    "insured_name": null,
                    "secondary_insured_name": null,
                    "address": "1314 N. HARBOR BLVD. APT #325",
                    "address_2": null,
                    "city": "SANTA ANA",
                    "state": "CA",
                    "zip": "92703",
                    "date_of_birth": "1991-09-18",
                    "age": null,
                    "cell_phone": "7145974562",
                    "parse_cell_phone": 1,
                    "work_phone": null,
                    "parse_work_phone": 1,
                    "preferred_phone": null,
                    "visits_auth": 0,
                    "visits_auth_left": 0,
                    "primary_insurance": "Kaiser Permanente",
                    "primary_insurance_id": 1,
                    "insurance_plan_id": 4,
                    "eligibility_payer_id": null,
                    "secondary_insurance": null,
                    "sex": "F",
                    "elig_copay": null,
                    "elig_status": null,
                    "reffering_provider": null,
                    "is_payment_forbidden": false,
                    "is_test": 0,
                    "upheal_user_id": null,
                    "upheal_client_session_url": null,
                    "upheal_therapist_session_url": null,
                    "created_at": "2021-06-01 12:38:18",
                    "updated_at": "2023-09-15 04:49:48",
                    "completed_appointment_count": 0,
                    "watching": 1,
                    "visit_copay": "20",
                    "hidden_on_patients_without_appointments_statistics": 0,
                    "created_patient_date": "2021-06-01",
                    "status_id": 2,
                    "eff_stop_date": null,
                    "eff_start_date": null,
                    "subscriber_id": "000020632348",
                    "charge_for_cancellation_appointment": 75,
                    "prev_charge_for_cancellation_appointment": 0,
                    "is_parsed_cancellation_fee": 1,
                    "start_synchronization_time": null,
                    "tmp_is_manually_archived": 0,
                    "status": {
                        "id": 2,
                        "status": "Discharged",
                        "hex_color": "0000ff"
                    },
                    "alert": {
                        "id": 13946,
                        "patient_id": 10449,
                        "officeally_alert_id": 17022670,
                        "date_created": "2021-06-01",
                        "message": "Anaheim patient NEW KAISER SYSTEM HMO 20.00 copay ICD10 codes need to be added after 1st visit",
                        "resolved_by": null,
                        "date_resolved": null,
                        "status": "1",
                        "created_at": "2021-06-05 17:06:51",
                        "updated_at": "2021-06-05 17:06:51"
                    }
                },
                "provider": {
                    "id": 65,
                    "provider_name": "Devorah Teyer, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323350,
                "patients_id": 16058,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696701600,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "11:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323350
                },
                "patient": {
                    "id": 16058,
                    "patient_id": 134208555,
                    "patient_account_number": null,
                    "auth_number": null,
                    "first_name": "Jonathan",
                    "home_phone": null,
                    "parse_home_phone": 1,
                    "last_name": "Kee",
                    "middle_initial": "",
                    "primary_provider_id": null,
                    "preferred_language_id": null,
                    "email": "jonathankk97@gmail.com",
                    "secondary_email": null,
                    "insured_name": null,
                    "secondary_insured_name": null,
                    "address": "6901 LAUREL CANYON BLVD",
                    "address_2": "Apt 209",
                    "city": "North Hollywood",
                    "state": "CA",
                    "zip": "91605",
                    "date_of_birth": "1997-02-27",
                    "age": null,
                    "cell_phone": "7863090890",
                    "parse_cell_phone": 1,
                    "work_phone": null,
                    "parse_work_phone": 1,
                    "preferred_phone": null,
                    "visits_auth": 0,
                    "visits_auth_left": 0,
                    "primary_insurance": "Blue Shield - California \/ Blue Shield MHSA",
                    "primary_insurance_id": 5,
                    "insurance_plan_id": 20,
                    "eligibility_payer_id": null,
                    "secondary_insurance": null,
                    "sex": "M",
                    "elig_copay": null,
                    "elig_status": null,
                    "reffering_provider": null,
                    "is_payment_forbidden": false,
                    "is_test": 0,
                    "upheal_user_id": null,
                    "upheal_client_session_url": null,
                    "upheal_therapist_session_url": null,
                    "created_at": "2023-10-03 09:45:20",
                    "updated_at": "2023-10-03 17:00:01",
                    "completed_appointment_count": 0,
                    "watching": 1,
                    "visit_copay": "25",
                    "hidden_on_patients_without_appointments_statistics": 0,
                    "created_patient_date": "2023-10-03",
                    "status_id": 8,
                    "eff_stop_date": null,
                    "eff_start_date": null,
                    "subscriber_id": "XEA911708109",
                    "charge_for_cancellation_appointment": 0,
                    "prev_charge_for_cancellation_appointment": 0,
                    "is_parsed_cancellation_fee": 0,
                    "start_synchronization_time": null,
                    "tmp_is_manually_archived": 0,
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    },
                    "alert": null
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323465,
                "patients_id": 16063,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696726800,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "6:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323465
                },
                "patient": {
                    "id": 16063,
                    "patient_id": 134261769,
                    "patient_account_number": null,
                    "auth_number": "VA0032153462",
                    "first_name": "Lolita",
                    "home_phone": null,
                    "parse_home_phone": 1,
                    "last_name": "Pettigrew",
                    "middle_initial": "Victoria",
                    "primary_provider_id": null,
                    "preferred_language_id": null,
                    "email": "lolita.pettigrew@yahoo.com",
                    "secondary_email": null,
                    "insured_name": null,
                    "secondary_insured_name": null,
                    "address": "300 N Beaudry Ave",
                    "address_2": "Apt 3016",
                    "city": "Los Angeles",
                    "state": "CA",
                    "zip": "90012",
                    "date_of_birth": "1978-04-11",
                    "age": null,
                    "cell_phone": "7792086448",
                    "parse_cell_phone": 1,
                    "work_phone": null,
                    "parse_work_phone": 1,
                    "preferred_phone": null,
                    "visits_auth": 999,
                    "visits_auth_left": 999,
                    "primary_insurance": "PGBA TriWest VA CCN",
                    "primary_insurance_id": 77,
                    "insurance_plan_id": 502,
                    "eligibility_payer_id": null,
                    "secondary_insurance": null,
                    "sex": "F",
                    "elig_copay": null,
                    "elig_status": null,
                    "reffering_provider": null,
                    "is_payment_forbidden": true,
                    "is_test": 0,
                    "upheal_user_id": null,
                    "upheal_client_session_url": null,
                    "upheal_therapist_session_url": null,
                    "created_at": "2023-10-04 10:17:49",
                    "updated_at": "2023-10-05 17:37:49",
                    "completed_appointment_count": 0,
                    "watching": 1,
                    "visit_copay": "0",
                    "hidden_on_patients_without_appointments_statistics": 0,
                    "created_patient_date": "2023-10-04",
                    "status_id": 8,
                    "eff_stop_date": null,
                    "eff_start_date": "2023-09-29",
                    "subscriber_id": "1103744039",
                    "charge_for_cancellation_appointment": 0,
                    "prev_charge_for_cancellation_appointment": 0,
                    "is_parsed_cancellation_fee": 0,
                    "start_synchronization_time": null,
                    "tmp_is_manually_archived": 0,
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    },
                    "alert": null
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323688,
                "patients_id": 16064,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696730400,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "7:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323688
                },
                "patient": {
                    "id": 16064,
                    "patient_id": 134261878,
                    "patient_account_number": null,
                    "auth_number": "VA0032032459",
                    "first_name": "Christian",
                    "home_phone": null,
                    "parse_home_phone": 1,
                    "last_name": "Rivera",
                    "middle_initial": "Lee",
                    "primary_provider_id": null,
                    "preferred_language_id": null,
                    "email": "christian.l.rivera51@gmail.com",
                    "secondary_email": null,
                    "insured_name": null,
                    "secondary_insured_name": null,
                    "address": "7317 Sepulveda Blvd Apt 116",
                    "address_2": null,
                    "city": "Van Nuys",
                    "state": "CA",
                    "zip": "91405",
                    "date_of_birth": "1982-09-20",
                    "age": null,
                    "cell_phone": "4439791018",
                    "parse_cell_phone": 1,
                    "work_phone": null,
                    "parse_work_phone": 1,
                    "preferred_phone": null,
                    "visits_auth": 999,
                    "visits_auth_left": 999,
                    "primary_insurance": "PGBA TriWest VA CCN",
                    "primary_insurance_id": 77,
                    "insurance_plan_id": 502,
                    "eligibility_payer_id": null,
                    "secondary_insurance": null,
                    "sex": "M",
                    "elig_copay": null,
                    "elig_status": null,
                    "reffering_provider": null,
                    "is_payment_forbidden": true,
                    "is_test": 0,
                    "upheal_user_id": null,
                    "upheal_client_session_url": null,
                    "upheal_therapist_session_url": null,
                    "created_at": "2023-10-04 10:21:05",
                    "updated_at": "2023-10-05 17:38:13",
                    "completed_appointment_count": 0,
                    "watching": 1,
                    "visit_copay": "0",
                    "hidden_on_patients_without_appointments_statistics": 0,
                    "created_patient_date": "2023-10-04",
                    "status_id": 8,
                    "eff_stop_date": null,
                    "eff_start_date": "2023-09-26",
                    "subscriber_id": "1267657250",
                    "charge_for_cancellation_appointment": 0,
                    "prev_charge_for_cancellation_appointment": 0,
                    "is_parsed_cancellation_fee": 0,
                    "start_synchronization_time": null,
                    "tmp_is_manually_archived": 0,
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    },
                    "alert": null
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            }
        ],
        "meta": {
            "total": 10
        }
    },
    "with_negative_balance": {
        "data": [],
        "meta": {
            "total": 0
        }
    },
    "patient_last_appointments": {
        "data": [
            {
                "id": 323599,
                "patients_id": 3668,
                "providers_id": 16,
                "appointment_statuses_id": 8,
                "time": 1696518000,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "8:00 AM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 323599
                },
                "patient": {
                    "id": 3668,
                    "first_name": "Joseph",
                    "last_name": "Lawhorn",
                    "status_id": 1,
                    "primary_insurance_id": 6,
                    "visit_copay": "0",
                    "appointments_count": 147,
                    "first_visit_date": "2018-06-28",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 16,
                    "provider_name": "Kim Boykin-Johnson, PsyD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323600,
                "patients_id": 11501,
                "providers_id": 16,
                "appointment_statuses_id": 8,
                "time": 1696525200,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "10:00 AM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 323600
                },
                "patient": {
                    "id": 11501,
                    "first_name": "Ta'Nika",
                    "last_name": "Gibson",
                    "status_id": 1,
                    "primary_insurance_id": 16,
                    "visit_copay": "35",
                    "appointments_count": 36,
                    "first_visit_date": "2021-10-19",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 16,
                    "provider_name": "Kim Boykin-Johnson, PsyD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323668,
                "patients_id": 13001,
                "providers_id": 16,
                "appointment_statuses_id": 8,
                "time": 1696528800,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "11:00 AM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 323668
                },
                "patient": {
                    "id": 13001,
                    "first_name": "Amy",
                    "last_name": "Ripplinger",
                    "status_id": 1,
                    "primary_insurance_id": 55,
                    "visit_copay": "45",
                    "appointments_count": 35,
                    "first_visit_date": "2022-06-08",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 16,
                    "provider_name": "Kim Boykin-Johnson, PsyD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323410,
                "patients_id": 9429,
                "providers_id": 231,
                "appointment_statuses_id": 8,
                "time": 1696532400,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "12:00 PM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 323410
                },
                "patient": {
                    "id": 9429,
                    "first_name": "Cheri",
                    "last_name": "Valansi",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 126,
                    "first_visit_date": "2021-01-20",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 231,
                    "provider_name": "Tracey St. Johns, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323570,
                "patients_id": 13773,
                "providers_id": 20,
                "appointment_statuses_id": 8,
                "time": 1696532400,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "12:00 PM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 323570
                },
                "patient": {
                    "id": 13773,
                    "first_name": "Cynthia",
                    "last_name": "Borruel",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 15,
                    "first_visit_date": "2022-09-19",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 20,
                    "provider_name": "Fariba Kooklan, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322480,
                "patients_id": 11401,
                "providers_id": 256,
                "appointment_statuses_id": 8,
                "time": 1696534200,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "12:30 PM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 322480
                },
                "patient": {
                    "id": 11401,
                    "first_name": "Barry",
                    "last_name": "Rado",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "25",
                    "appointments_count": 71,
                    "first_visit_date": "2021-10-11",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 256,
                    "provider_name": "Alexandra Bruun, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 314443,
                "patients_id": 13829,
                "providers_id": 268,
                "appointment_statuses_id": 8,
                "time": 1696536000,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "1:00 PM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 314443
                },
                "patient": {
                    "id": 13829,
                    "first_name": "Shaileen",
                    "last_name": "Martinez",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "20",
                    "appointments_count": 61,
                    "first_visit_date": "2022-09-29",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 268,
                    "provider_name": "Dana Rosen, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322828,
                "patients_id": 15916,
                "providers_id": 279,
                "appointment_statuses_id": 8,
                "time": 1696546800,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "4:00 PM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 322828
                },
                "patient": {
                    "id": 15916,
                    "first_name": "Keiji",
                    "last_name": "Patterson",
                    "status_id": 1,
                    "primary_insurance_id": 15,
                    "visit_copay": "20",
                    "appointments_count": 4,
                    "first_visit_date": "2023-09-14",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 279,
                    "provider_name": "Kelly Ramirez"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322982,
                "patients_id": 15815,
                "providers_id": 269,
                "appointment_statuses_id": 8,
                "time": 1696546800,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "4:00 PM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 322982
                },
                "patient": {
                    "id": 15815,
                    "first_name": "Chad",
                    "last_name": "Toth",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "20",
                    "appointments_count": 8,
                    "first_visit_date": "2023-08-30",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 269,
                    "provider_name": "Carmen Donato, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322799,
                "patients_id": 16041,
                "providers_id": 280,
                "appointment_statuses_id": 8,
                "time": 1696554000,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "6:00 PM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 322799
                },
                "patient": {
                    "id": 16041,
                    "first_name": "Steven",
                    "last_name": "Yach",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-05",
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 280,
                    "provider_name": "Anastasia Rementegui, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322822,
                "patients_id": 15964,
                "providers_id": 279,
                "appointment_statuses_id": 8,
                "time": 1696554000,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "6:00 PM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 322822
                },
                "patient": {
                    "id": 15964,
                    "first_name": "Fredy",
                    "last_name": "Ramos Avila",
                    "status_id": 1,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 3,
                    "first_visit_date": "2023-09-21",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 279,
                    "provider_name": "Kelly Ramirez"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323792,
                "patients_id": 4511,
                "providers_id": 16,
                "appointment_statuses_id": 8,
                "time": 1696561200,
                "date_of_service": {
                    "date": "10\/05\/2023",
                    "time": "8:00 PM",
                    "text": "10\/05\/2023 (Active)",
                    "value": 323792
                },
                "patient": {
                    "id": 4511,
                    "first_name": "Farimah",
                    "last_name": "Fiali",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "10",
                    "appointments_count": 230,
                    "first_visit_date": "2019-01-19",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 16,
                    "provider_name": "Kim Boykin-Johnson, PsyD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322372,
                "patients_id": 14503,
                "providers_id": 218,
                "appointment_statuses_id": 8,
                "time": 1696600800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "7:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322372
                },
                "patient": {
                    "id": 14503,
                    "first_name": "Michelle",
                    "last_name": "Polanco",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "10",
                    "appointments_count": 27,
                    "first_visit_date": "2023-01-03",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 218,
                    "provider_name": "Kerry McLean, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322667,
                "patients_id": 15020,
                "providers_id": 256,
                "appointment_statuses_id": 8,
                "time": 1696604400,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "8:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322667
                },
                "patient": {
                    "id": 15020,
                    "first_name": "Claudia",
                    "last_name": "Moody Jones",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "5",
                    "appointments_count": 29,
                    "first_visit_date": "2023-04-14",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 256,
                    "provider_name": "Alexandra Bruun, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322880,
                "patients_id": 15732,
                "providers_id": 243,
                "appointment_statuses_id": 8,
                "time": 1696604400,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "8:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322880
                },
                "patient": {
                    "id": 15732,
                    "first_name": "Richard",
                    "last_name": "Kingston",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 10,
                    "first_visit_date": "2023-08-10",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 243,
                    "provider_name": "Yen Tran, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322983,
                "patients_id": 15013,
                "providers_id": 269,
                "appointment_statuses_id": 8,
                "time": 1696604400,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "8:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322983
                },
                "patient": {
                    "id": 15013,
                    "first_name": "Zheilla Marie",
                    "last_name": "Cordero",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "15",
                    "appointments_count": 28,
                    "first_visit_date": "2023-04-14",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 269,
                    "provider_name": "Carmen Donato, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323107,
                "patients_id": 14589,
                "providers_id": 221,
                "appointment_statuses_id": 8,
                "time": 1696604400,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "8:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323107
                },
                "patient": {
                    "id": 14589,
                    "first_name": "Lydia",
                    "last_name": "Eckels",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "30",
                    "appointments_count": 26,
                    "first_visit_date": "2023-01-20",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 221,
                    "provider_name": "Carol Granville, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 318944,
                "patients_id": 15862,
                "providers_id": 274,
                "appointment_statuses_id": 8,
                "time": 1696608000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "9:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 318944
                },
                "patient": {
                    "id": 15862,
                    "first_name": "Hazel",
                    "last_name": "Velacruz",
                    "status_id": 1,
                    "primary_insurance_id": 17,
                    "visit_copay": "0",
                    "appointments_count": 6,
                    "first_visit_date": "2023-09-01",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 274,
                    "provider_name": "Melanie Lapeyrolerie, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321525,
                "patients_id": 14942,
                "providers_id": 243,
                "appointment_statuses_id": 8,
                "time": 1696608000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "9:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 321525
                },
                "patient": {
                    "id": 14942,
                    "first_name": "Amanda",
                    "last_name": "Stuebe",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 28,
                    "first_visit_date": "2023-04-14",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 243,
                    "provider_name": "Yen Tran, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322497,
                "patients_id": 14006,
                "providers_id": 269,
                "appointment_statuses_id": 8,
                "time": 1696608000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "9:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322497
                },
                "patient": {
                    "id": 14006,
                    "first_name": "Charlee",
                    "last_name": "Williams",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "15",
                    "appointments_count": 44,
                    "first_visit_date": "2022-11-04",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 269,
                    "provider_name": "Carmen Donato, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322613,
                "patients_id": 16010,
                "providers_id": 254,
                "appointment_statuses_id": 8,
                "time": 1696608000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "9:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322613
                },
                "patient": {
                    "id": 16010,
                    "first_name": "Shristie",
                    "last_name": "Nair",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "15",
                    "appointments_count": 2,
                    "first_visit_date": "2023-09-27",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 254,
                    "provider_name": "Denise Montano, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322812,
                "patients_id": 8953,
                "providers_id": 256,
                "appointment_statuses_id": 8,
                "time": 1696608000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "9:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322812
                },
                "patient": {
                    "id": 8953,
                    "first_name": "Bryant",
                    "last_name": "Fuhrmann",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "15",
                    "appointments_count": 129,
                    "first_visit_date": "2020-09-23",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 256,
                    "provider_name": "Alexandra Bruun, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 320566,
                "patients_id": 14520,
                "providers_id": 218,
                "appointment_statuses_id": 8,
                "time": 1696611600,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "10:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 320566
                },
                "patient": {
                    "id": 14520,
                    "first_name": "Kenneth",
                    "last_name": "Segal",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 28,
                    "first_visit_date": "2023-01-05",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 218,
                    "provider_name": "Kerry McLean, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323273,
                "patients_id": 14803,
                "providers_id": 216,
                "appointment_statuses_id": 8,
                "time": 1696611600,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "10:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323273
                },
                "patient": {
                    "id": 14803,
                    "first_name": "Lizette",
                    "last_name": "Tucker",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "20",
                    "appointments_count": 16,
                    "first_visit_date": "2023-03-03",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 216,
                    "provider_name": "Noemi Hernandez, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 317659,
                "patients_id": 14513,
                "providers_id": 269,
                "appointment_statuses_id": 8,
                "time": 1696615200,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "11:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 317659
                },
                "patient": {
                    "id": 14513,
                    "first_name": "Erman",
                    "last_name": "Smith",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 50,
                    "first_visit_date": "2023-01-03",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 269,
                    "provider_name": "Carmen Donato, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321529,
                "patients_id": 15967,
                "providers_id": 280,
                "appointment_statuses_id": 8,
                "time": 1696615200,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "11:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 321529
                },
                "patient": {
                    "id": 15967,
                    "first_name": "David",
                    "last_name": "Gouger",
                    "status_id": 1,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 3,
                    "first_visit_date": "2023-09-20",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 280,
                    "provider_name": "Anastasia Rementegui, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322464,
                "patients_id": 11290,
                "providers_id": 1,
                "appointment_statuses_id": 8,
                "time": 1696615200,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "11:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322464
                },
                "patient": {
                    "id": 11290,
                    "first_name": "Melinda",
                    "last_name": "Holm",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "45",
                    "appointments_count": 32,
                    "first_visit_date": "2021-09-30",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 1,
                    "provider_name": "William Kaiser, PhD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322832,
                "patients_id": 15665,
                "providers_id": 277,
                "appointment_statuses_id": 8,
                "time": 1696615200,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "11:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322832
                },
                "patient": {
                    "id": 15665,
                    "first_name": "David",
                    "last_name": "Austin",
                    "status_id": 1,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 11,
                    "first_visit_date": "2023-08-01",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 277,
                    "provider_name": "Roman Katsnelson, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323004,
                "patients_id": 12893,
                "providers_id": 210,
                "appointment_statuses_id": 8,
                "time": 1696615200,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "11:00 AM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323004
                },
                "patient": {
                    "id": 12893,
                    "first_name": "Darren",
                    "last_name": "Eskandar",
                    "status_id": 2,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 28,
                    "first_visit_date": "2022-04-29",
                    "status": {
                        "id": 2,
                        "status": "Discharged",
                        "hex_color": "0000ff"
                    }
                },
                "provider": {
                    "id": 210,
                    "provider_name": "Eva Eduarte, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 316979,
                "patients_id": 10827,
                "providers_id": 211,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 316979
                },
                "patient": {
                    "id": 10827,
                    "first_name": "Robin",
                    "last_name": "Richardson",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "25",
                    "appointments_count": 117,
                    "first_visit_date": "2021-07-28",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 211,
                    "provider_name": "Lisa Miller, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 317663,
                "patients_id": 15813,
                "providers_id": 269,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 317663
                },
                "patient": {
                    "id": 15813,
                    "first_name": "Michaella",
                    "last_name": "Shnaider",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "30",
                    "appointments_count": 7,
                    "first_visit_date": "2023-08-23",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 269,
                    "provider_name": "Carmen Donato, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321344,
                "patients_id": 12769,
                "providers_id": 49,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 321344
                },
                "patient": {
                    "id": 12769,
                    "first_name": "Tammy",
                    "last_name": "Han",
                    "status_id": 1,
                    "primary_insurance_id": 14,
                    "visit_copay": "20",
                    "appointments_count": 53,
                    "first_visit_date": "2022-04-06",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 49,
                    "provider_name": "Sharareh Ghedari, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321533,
                "patients_id": 14965,
                "providers_id": 1,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 321533
                },
                "patient": {
                    "id": 14965,
                    "first_name": "Heriberto",
                    "last_name": "Muleroguzman",
                    "status_id": 1,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 15,
                    "first_visit_date": "2023-04-18",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 1,
                    "provider_name": "William Kaiser, PhD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322328,
                "patients_id": 14935,
                "providers_id": 253,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322328
                },
                "patient": {
                    "id": 14935,
                    "first_name": "Anastasia",
                    "last_name": "Rojas",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "10",
                    "appointments_count": 23,
                    "first_visit_date": "2023-03-31",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 253,
                    "provider_name": "Christina Ambriz, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322666,
                "patients_id": 10368,
                "providers_id": 254,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322666
                },
                "patient": {
                    "id": 10368,
                    "first_name": "Natalie",
                    "last_name": "Wright",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 83,
                    "first_visit_date": "2021-05-27",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 254,
                    "provider_name": "Denise Montano, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322796,
                "patients_id": 16042,
                "providers_id": 280,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322796
                },
                "patient": {
                    "id": 16042,
                    "first_name": "Bruce",
                    "last_name": "Solheim",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-06",
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 280,
                    "provider_name": "Anastasia Rementegui, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322969,
                "patients_id": 14555,
                "providers_id": 218,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322969
                },
                "patient": {
                    "id": 14555,
                    "first_name": "Alexandra",
                    "last_name": "Lozano",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "10",
                    "appointments_count": 23,
                    "first_visit_date": "2023-01-11",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 218,
                    "provider_name": "Kerry McLean, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323052,
                "patients_id": 15400,
                "providers_id": 210,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323052
                },
                "patient": {
                    "id": 15400,
                    "first_name": "Stephany",
                    "last_name": "Macdowell",
                    "status_id": 1,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 7,
                    "first_visit_date": "2023-06-30",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 210,
                    "provider_name": "Eva Eduarte, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323454,
                "patients_id": 7799,
                "providers_id": 57,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323454
                },
                "patient": {
                    "id": 7799,
                    "first_name": "Kathleen",
                    "last_name": "Kiepper",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 193,
                    "first_visit_date": "2020-02-19",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 57,
                    "provider_name": "Jonathan Perlman, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321553,
                "patients_id": 15892,
                "providers_id": 243,
                "appointment_statuses_id": 8,
                "time": 1696622400,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "1:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 321553
                },
                "patient": {
                    "id": 15892,
                    "first_name": "Ommer",
                    "last_name": "Haziza",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 5,
                    "first_visit_date": "2023-09-08",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 243,
                    "provider_name": "Yen Tran, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 314685,
                "patients_id": 15306,
                "providers_id": 268,
                "appointment_statuses_id": 8,
                "time": 1696626000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "2:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 314685
                },
                "patient": {
                    "id": 15306,
                    "first_name": "David",
                    "last_name": "Midell",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "25",
                    "appointments_count": 20,
                    "first_visit_date": "2023-06-01",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 268,
                    "provider_name": "Dana Rosen, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321547,
                "patients_id": 14417,
                "providers_id": 49,
                "appointment_statuses_id": 8,
                "time": 1696626000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "2:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 321547
                },
                "patient": {
                    "id": 14417,
                    "first_name": "Jasmyn",
                    "last_name": "Covarrubias",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "50",
                    "appointments_count": 27,
                    "first_visit_date": "2022-12-16",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 49,
                    "provider_name": "Sharareh Ghedari, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322293,
                "patients_id": 15988,
                "providers_id": 212,
                "appointment_statuses_id": 8,
                "time": 1696626000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "2:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322293
                },
                "patient": {
                    "id": 15988,
                    "first_name": "Sachem",
                    "last_name": "Abernathy",
                    "status_id": 8,
                    "primary_insurance_id": 1,
                    "visit_copay": "25",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-06",
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 212,
                    "provider_name": "Monica Lang, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322786,
                "patients_id": 10467,
                "providers_id": 53,
                "appointment_statuses_id": 8,
                "time": 1696626000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "2:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322786
                },
                "patient": {
                    "id": 10467,
                    "first_name": "Travis",
                    "last_name": "Gaydos",
                    "status_id": 1,
                    "primary_insurance_id": 23,
                    "visit_copay": "31.63",
                    "appointments_count": 75,
                    "first_visit_date": "2021-06-08",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 53,
                    "provider_name": "Jennifer Frank, PhD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322984,
                "patients_id": 15398,
                "providers_id": 269,
                "appointment_statuses_id": 8,
                "time": 1696626000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "2:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322984
                },
                "patient": {
                    "id": 15398,
                    "first_name": "Rosa",
                    "last_name": "Benavides",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "15",
                    "appointments_count": 17,
                    "first_visit_date": "2023-06-16",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 269,
                    "provider_name": "Carmen Donato, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323596,
                "patients_id": 13198,
                "providers_id": 210,
                "appointment_statuses_id": 8,
                "time": 1696626000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "2:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323596
                },
                "patient": {
                    "id": 13198,
                    "first_name": "Olga",
                    "last_name": "Gonzalez Alvarado",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "5",
                    "appointments_count": 55,
                    "first_visit_date": "2022-06-22",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 210,
                    "provider_name": "Eva Eduarte, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322863,
                "patients_id": 15788,
                "providers_id": 276,
                "appointment_statuses_id": 8,
                "time": 1696629600,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "3:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322863
                },
                "patient": {
                    "id": 15788,
                    "first_name": "Lisardo",
                    "last_name": "Duran Jr",
                    "status_id": 1,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 7,
                    "first_visit_date": "2023-08-25",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 276,
                    "provider_name": "Liana Grigoryan, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322866,
                "patients_id": 2542,
                "providers_id": 1,
                "appointment_statuses_id": 8,
                "time": 1696629600,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "3:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322866
                },
                "patient": {
                    "id": 2542,
                    "first_name": "Marlon",
                    "last_name": "Stern",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 193,
                    "first_visit_date": "2018-02-16",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 1,
                    "provider_name": "William Kaiser, PhD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322883,
                "patients_id": 14675,
                "providers_id": 243,
                "appointment_statuses_id": 8,
                "time": 1696629600,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "3:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322883
                },
                "patient": {
                    "id": 14675,
                    "first_name": "Sean",
                    "last_name": "Rogers",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 8,
                    "first_visit_date": "2023-02-11",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 243,
                    "provider_name": "Yen Tran, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322988,
                "patients_id": 15944,
                "providers_id": 269,
                "appointment_statuses_id": 8,
                "time": 1696629600,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "3:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322988
                },
                "patient": {
                    "id": 15944,
                    "first_name": "Beatrice",
                    "last_name": "Green",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 3,
                    "first_visit_date": "2023-09-22",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 269,
                    "provider_name": "Carmen Donato, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 316986,
                "patients_id": 10928,
                "providers_id": 211,
                "appointment_statuses_id": 8,
                "time": 1696633200,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "4:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 316986
                },
                "patient": {
                    "id": 10928,
                    "first_name": "Kristina",
                    "last_name": "Karapetyan",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "35",
                    "appointments_count": 113,
                    "first_visit_date": "2021-08-06",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 211,
                    "provider_name": "Lisa Miller, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322304,
                "patients_id": 15824,
                "providers_id": 276,
                "appointment_statuses_id": 8,
                "time": 1696633200,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "4:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322304
                },
                "patient": {
                    "id": 15824,
                    "first_name": "Sage",
                    "last_name": "Greenblatt",
                    "status_id": 1,
                    "primary_insurance_id": 5,
                    "visit_copay": "45",
                    "appointments_count": 7,
                    "first_visit_date": "2023-08-25",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 276,
                    "provider_name": "Liana Grigoryan, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323054,
                "patients_id": 15417,
                "providers_id": 210,
                "appointment_statuses_id": 8,
                "time": 1696633200,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "4:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323054
                },
                "patient": {
                    "id": 15417,
                    "first_name": "Ricardo",
                    "last_name": "Linarezyax",
                    "status_id": 1,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 15,
                    "first_visit_date": "2023-07-03",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 210,
                    "provider_name": "Eva Eduarte, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323387,
                "patients_id": 13145,
                "providers_id": 269,
                "appointment_statuses_id": 8,
                "time": 1696633200,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "4:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323387
                },
                "patient": {
                    "id": 13145,
                    "first_name": "Armando",
                    "last_name": "Barajas",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "15",
                    "appointments_count": 52,
                    "first_visit_date": "2022-06-11",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 269,
                    "provider_name": "Carmen Donato, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321610,
                "patients_id": 8444,
                "providers_id": 49,
                "appointment_statuses_id": 8,
                "time": 1696636800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "5:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 321610
                },
                "patient": {
                    "id": 8444,
                    "first_name": "Azita",
                    "last_name": "Ghobadian",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "10",
                    "appointments_count": 97,
                    "first_visit_date": "2020-07-03",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 49,
                    "provider_name": "Sharareh Ghedari, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322884,
                "patients_id": 2927,
                "providers_id": 1,
                "appointment_statuses_id": 8,
                "time": 1696636800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "5:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322884
                },
                "patient": {
                    "id": 2927,
                    "first_name": "Shawna",
                    "last_name": "Carnes",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "35",
                    "appointments_count": 58,
                    "first_visit_date": "2017-11-16",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 1,
                    "provider_name": "William Kaiser, PhD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322886,
                "patients_id": 15557,
                "providers_id": 276,
                "appointment_statuses_id": 8,
                "time": 1696636800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "5:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322886
                },
                "patient": {
                    "id": 15557,
                    "first_name": "Alan",
                    "last_name": "Bonilla",
                    "status_id": 1,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 14,
                    "first_visit_date": "2023-07-13",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 276,
                    "provider_name": "Liana Grigoryan, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323043,
                "patients_id": 16054,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696636800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "5:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323043
                },
                "patient": {
                    "id": 16054,
                    "first_name": "Siena",
                    "last_name": "Barnhart",
                    "status_id": 8,
                    "primary_insurance_id": 15,
                    "visit_copay": "30",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-06",
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321614,
                "patients_id": 14999,
                "providers_id": 1,
                "appointment_statuses_id": 8,
                "time": 1696640400,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "6:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 321614
                },
                "patient": {
                    "id": 14999,
                    "first_name": "Carlos",
                    "last_name": "Barnwell",
                    "status_id": 1,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 16,
                    "first_visit_date": "2023-05-05",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 1,
                    "provider_name": "William Kaiser, PhD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322878,
                "patients_id": 15396,
                "providers_id": 49,
                "appointment_statuses_id": 8,
                "time": 1696640400,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "6:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322878
                },
                "patient": {
                    "id": 15396,
                    "first_name": "John",
                    "last_name": "Eymard",
                    "status_id": 1,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 11,
                    "first_visit_date": "2023-06-14",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 49,
                    "provider_name": "Sharareh Ghedari, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323074,
                "patients_id": 16055,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696640400,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "6:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323074
                },
                "patient": {
                    "id": 16055,
                    "first_name": "Daonn",
                    "last_name": "Robinson",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-06",
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323274,
                "patients_id": 11278,
                "providers_id": 216,
                "appointment_statuses_id": 8,
                "time": 1696640400,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "6:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323274
                },
                "patient": {
                    "id": 11278,
                    "first_name": "Ashley",
                    "last_name": "Correa",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 112,
                    "first_visit_date": "2021-09-24",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 216,
                    "provider_name": "Noemi Hernandez, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321617,
                "patients_id": 7865,
                "providers_id": 210,
                "appointment_statuses_id": 8,
                "time": 1696644000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "7:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 321617
                },
                "patient": {
                    "id": 7865,
                    "first_name": "Estefany",
                    "last_name": "Gonzalez",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 163,
                    "first_visit_date": "2020-02-21",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 210,
                    "provider_name": "Eva Eduarte, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322852,
                "patients_id": 3716,
                "providers_id": 49,
                "appointment_statuses_id": 8,
                "time": 1696644000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "7:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322852
                },
                "patient": {
                    "id": 3716,
                    "first_name": "Dawn",
                    "last_name": "Klever",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "5",
                    "appointments_count": 196,
                    "first_visit_date": "2018-07-14",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 49,
                    "provider_name": "Sharareh Ghedari, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323082,
                "patients_id": 16026,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696644000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "7:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323082
                },
                "patient": {
                    "id": 16026,
                    "first_name": "Robert Lee",
                    "last_name": "Tyler li",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 2,
                    "first_visit_date": "2023-09-29",
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323743,
                "patients_id": 10449,
                "providers_id": 65,
                "appointment_statuses_id": 8,
                "time": 1696644000,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "7:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 323743
                },
                "patient": {
                    "id": 10449,
                    "first_name": "Cynthia",
                    "last_name": "Leon",
                    "status_id": 2,
                    "primary_insurance_id": 1,
                    "visit_copay": "20",
                    "appointments_count": 44,
                    "first_visit_date": "2021-06-05",
                    "status": {
                        "id": 2,
                        "status": "Discharged",
                        "hex_color": "0000ff"
                    }
                },
                "provider": {
                    "id": 65,
                    "provider_name": "Devorah Teyer, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322916,
                "patients_id": 11016,
                "providers_id": 253,
                "appointment_statuses_id": 8,
                "time": 1696690800,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "8:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322916
                },
                "patient": {
                    "id": 11016,
                    "first_name": "Robert",
                    "last_name": "Giordano",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 85,
                    "first_visit_date": "2021-09-01",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 253,
                    "provider_name": "Christina Ambriz, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 318215,
                "patients_id": 14588,
                "providers_id": 216,
                "appointment_statuses_id": 8,
                "time": 1696694400,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "9:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 318215
                },
                "patient": {
                    "id": 14588,
                    "first_name": "Arianny",
                    "last_name": "Gomez",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "5",
                    "appointments_count": 40,
                    "first_visit_date": "2023-01-21",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 216,
                    "provider_name": "Noemi Hernandez, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 319220,
                "patients_id": 15253,
                "providers_id": 240,
                "appointment_statuses_id": 8,
                "time": 1696694400,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "9:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 319220
                },
                "patient": {
                    "id": 15253,
                    "first_name": "Mayra",
                    "last_name": "Cardentti",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "15",
                    "appointments_count": 15,
                    "first_visit_date": "2023-05-26",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 240,
                    "provider_name": "LaNesha Lacy, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 319721,
                "patients_id": 14726,
                "providers_id": 68,
                "appointment_statuses_id": 8,
                "time": 1696694400,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "9:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 319721
                },
                "patient": {
                    "id": 14726,
                    "first_name": "Maria",
                    "last_name": "Vaughan",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "30",
                    "appointments_count": 36,
                    "first_visit_date": "2023-02-18",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 68,
                    "provider_name": "Theresa Pasqualino, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321625,
                "patients_id": 12379,
                "providers_id": 253,
                "appointment_statuses_id": 8,
                "time": 1696694400,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "9:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 321625
                },
                "patient": {
                    "id": 12379,
                    "first_name": "Suvir",
                    "last_name": "Keswani",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "15",
                    "appointments_count": 29,
                    "first_visit_date": "2022-02-15",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 253,
                    "provider_name": "Christina Ambriz, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323211,
                "patients_id": 15630,
                "providers_id": 256,
                "appointment_statuses_id": 8,
                "time": 1696694400,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "9:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323211
                },
                "patient": {
                    "id": 15630,
                    "first_name": "Bridgette",
                    "last_name": "Moses",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 10,
                    "first_visit_date": "2023-07-25",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 256,
                    "provider_name": "Alexandra Bruun, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322206,
                "patients_id": 4556,
                "providers_id": 54,
                "appointment_statuses_id": 8,
                "time": 1696696200,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "9:30 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322206
                },
                "patient": {
                    "id": 4556,
                    "first_name": "Gladys",
                    "last_name": "Gonzalez",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "20",
                    "appointments_count": 171,
                    "first_visit_date": "2019-01-29",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 54,
                    "provider_name": "Hripsime Harutyunyan, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 320637,
                "patients_id": 13950,
                "providers_id": 218,
                "appointment_statuses_id": 8,
                "time": 1696698000,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "10:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 320637
                },
                "patient": {
                    "id": 13950,
                    "first_name": "Magaly",
                    "last_name": "Gomez",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "20",
                    "appointments_count": 17,
                    "first_visit_date": "2022-10-20",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 218,
                    "provider_name": "Kerry McLean, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321269,
                "patients_id": 15301,
                "providers_id": 240,
                "appointment_statuses_id": 8,
                "time": 1696698000,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "10:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 321269
                },
                "patient": {
                    "id": 15301,
                    "first_name": "Jessica",
                    "last_name": "Dawodu",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 19,
                    "first_visit_date": "2023-06-01",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 240,
                    "provider_name": "LaNesha Lacy, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322326,
                "patients_id": 12030,
                "providers_id": 253,
                "appointment_statuses_id": 8,
                "time": 1696698000,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "10:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322326
                },
                "patient": {
                    "id": 12030,
                    "first_name": "Ian",
                    "last_name": "Caceres",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 77,
                    "first_visit_date": "2022-03-26",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 253,
                    "provider_name": "Christina Ambriz, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322997,
                "patients_id": 15924,
                "providers_id": 269,
                "appointment_statuses_id": 8,
                "time": 1696698000,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "10:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322997
                },
                "patient": {
                    "id": 15924,
                    "first_name": "Yzabella",
                    "last_name": "Gordon",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "20",
                    "appointments_count": 4,
                    "first_visit_date": "2023-09-16",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 269,
                    "provider_name": "Carmen Donato, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323319,
                "patients_id": 16061,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696698000,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "10:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323319
                },
                "patient": {
                    "id": 16061,
                    "first_name": "Frank",
                    "last_name": "Miller",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-07",
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 318220,
                "patients_id": 14829,
                "providers_id": 216,
                "appointment_statuses_id": 8,
                "time": 1696701600,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "11:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 318220
                },
                "patient": {
                    "id": 14829,
                    "first_name": "Aubri",
                    "last_name": "Charles",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "5",
                    "appointments_count": 31,
                    "first_visit_date": "2023-03-16",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 216,
                    "provider_name": "Noemi Hernandez, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321626,
                "patients_id": 13421,
                "providers_id": 240,
                "appointment_statuses_id": 8,
                "time": 1696701600,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "11:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 321626
                },
                "patient": {
                    "id": 13421,
                    "first_name": "Arien",
                    "last_name": "Sanchez",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "15",
                    "appointments_count": 56,
                    "first_visit_date": "2022-07-27",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 240,
                    "provider_name": "LaNesha Lacy, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321724,
                "patients_id": 5105,
                "providers_id": 49,
                "appointment_statuses_id": 8,
                "time": 1696701600,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "11:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 321724
                },
                "patient": {
                    "id": 5105,
                    "first_name": "Ashley",
                    "last_name": "Flores",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 128,
                    "first_visit_date": "2019-06-06",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 49,
                    "provider_name": "Sharareh Ghedari, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321832,
                "patients_id": 15758,
                "providers_id": 218,
                "appointment_statuses_id": 8,
                "time": 1696701600,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "11:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 321832
                },
                "patient": {
                    "id": 15758,
                    "first_name": "Mabel",
                    "last_name": "Marmol",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "10",
                    "appointments_count": 6,
                    "first_visit_date": "2023-08-20",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 218,
                    "provider_name": "Kerry McLean, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322327,
                "patients_id": 11374,
                "providers_id": 253,
                "appointment_statuses_id": 8,
                "time": 1696701600,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "11:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322327
                },
                "patient": {
                    "id": 11374,
                    "first_name": "Benjamin",
                    "last_name": "Ruddy",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "15",
                    "appointments_count": 97,
                    "first_visit_date": "2021-10-21",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 253,
                    "provider_name": "Christina Ambriz, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322827,
                "patients_id": 15917,
                "providers_id": 279,
                "appointment_statuses_id": 8,
                "time": 1696701600,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "11:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322827
                },
                "patient": {
                    "id": 15917,
                    "first_name": "William",
                    "last_name": "Sweeney",
                    "status_id": 1,
                    "primary_insurance_id": 15,
                    "visit_copay": "20",
                    "appointments_count": 5,
                    "first_visit_date": "2023-09-16",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 279,
                    "provider_name": "Kelly Ramirez"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322998,
                "patients_id": 15819,
                "providers_id": 269,
                "appointment_statuses_id": 8,
                "time": 1696701600,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "11:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322998
                },
                "patient": {
                    "id": 15819,
                    "first_name": "Alyssa",
                    "last_name": "Alvarez",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 9,
                    "first_visit_date": "2023-08-27",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 269,
                    "provider_name": "Carmen Donato, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323350,
                "patients_id": 16058,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696701600,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "11:00 AM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323350
                },
                "patient": {
                    "id": 16058,
                    "first_name": "Jonathan",
                    "last_name": "Kee",
                    "status_id": 8,
                    "primary_insurance_id": 5,
                    "visit_copay": "25",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-07",
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321639,
                "patients_id": 11641,
                "providers_id": 240,
                "appointment_statuses_id": 8,
                "time": 1696705200,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "12:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 321639
                },
                "patient": {
                    "id": 11641,
                    "first_name": "Sneshia",
                    "last_name": "Stribling",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "10",
                    "appointments_count": 90,
                    "first_visit_date": "2021-10-29",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 240,
                    "provider_name": "LaNesha Lacy, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321726,
                "patients_id": 14764,
                "providers_id": 253,
                "appointment_statuses_id": 8,
                "time": 1696705200,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "12:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 321726
                },
                "patient": {
                    "id": 14764,
                    "first_name": "Dominic",
                    "last_name": "Reyes",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "20",
                    "appointments_count": 22,
                    "first_visit_date": "2023-02-25",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 253,
                    "provider_name": "Christina Ambriz, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322627,
                "patients_id": 16005,
                "providers_id": 16,
                "appointment_statuses_id": 8,
                "time": 1696705200,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "12:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322627
                },
                "patient": {
                    "id": 16005,
                    "first_name": "Carmen",
                    "last_name": "Parker",
                    "status_id": 8,
                    "primary_insurance_id": 1,
                    "visit_copay": "15",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-07",
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 16,
                    "provider_name": "Kim Boykin-Johnson, PsyD"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322917,
                "patients_id": 8994,
                "providers_id": 49,
                "appointment_statuses_id": 8,
                "time": 1696705200,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "12:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322917
                },
                "patient": {
                    "id": 8994,
                    "first_name": "Stephanie",
                    "last_name": "Gonzalez",
                    "status_id": 1,
                    "primary_insurance_id": 15,
                    "visit_copay": "0",
                    "appointments_count": 60,
                    "first_visit_date": "2020-09-30",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 49,
                    "provider_name": "Sharareh Ghedari, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322929,
                "patients_id": 15835,
                "providers_id": 218,
                "appointment_statuses_id": 8,
                "time": 1696705200,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "12:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322929
                },
                "patient": {
                    "id": 15835,
                    "first_name": "Melissa",
                    "last_name": "Rosendale",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "5",
                    "appointments_count": 6,
                    "first_visit_date": "2023-08-26",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 218,
                    "provider_name": "Kerry McLean, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323028,
                "patients_id": 15946,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696705200,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "12:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323028
                },
                "patient": {
                    "id": 15946,
                    "first_name": "Kyle",
                    "last_name": "Barnum COUPLES",
                    "status_id": 1,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 2,
                    "first_visit_date": "2023-09-25",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 321749,
                "patients_id": 15381,
                "providers_id": 253,
                "appointment_statuses_id": 8,
                "time": 1696708800,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "1:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 321749
                },
                "patient": {
                    "id": 15381,
                    "first_name": "Aiden",
                    "last_name": "Melendez",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "15",
                    "appointments_count": 10,
                    "first_visit_date": "2023-06-26",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 253,
                    "provider_name": "Christina Ambriz, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322920,
                "patients_id": 8649,
                "providers_id": 49,
                "appointment_statuses_id": 8,
                "time": 1696708800,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "1:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322920
                },
                "patient": {
                    "id": 8649,
                    "first_name": "Aubrey",
                    "last_name": "Pasmyn",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "20",
                    "appointments_count": 155,
                    "first_visit_date": "2020-07-28",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 49,
                    "provider_name": "Sharareh Ghedari, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323648,
                "patients_id": 15569,
                "providers_id": 240,
                "appointment_statuses_id": 8,
                "time": 1696708800,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "1:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323648
                },
                "patient": {
                    "id": 15569,
                    "first_name": "Breeana",
                    "last_name": "Collins",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "0",
                    "appointments_count": 14,
                    "first_visit_date": "2023-07-12",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 240,
                    "provider_name": "LaNesha Lacy, LCSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322838,
                "patients_id": 16030,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696712400,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "2:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 322838
                },
                "patient": {
                    "id": 16030,
                    "first_name": "Junko",
                    "last_name": "Manzanilla",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 2,
                    "first_visit_date": "2023-09-30",
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323453,
                "patients_id": 16066,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696723200,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "5:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323453
                },
                "patient": {
                    "id": 16066,
                    "first_name": "Jay",
                    "last_name": "Dunlap",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-07",
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323465,
                "patients_id": 16063,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696726800,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "6:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323465
                },
                "patient": {
                    "id": 16063,
                    "first_name": "Lolita",
                    "last_name": "Pettigrew",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-07",
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 323688,
                "patients_id": 16064,
                "providers_id": 282,
                "appointment_statuses_id": 8,
                "time": 1696730400,
                "date_of_service": {
                    "date": "10\/07\/2023",
                    "time": "7:00 PM",
                    "text": "10\/07\/2023 (Active)",
                    "value": 323688
                },
                "patient": {
                    "id": 16064,
                    "first_name": "Christian",
                    "last_name": "Rivera",
                    "status_id": 8,
                    "primary_insurance_id": 77,
                    "visit_copay": "0",
                    "appointments_count": 1,
                    "first_visit_date": "2023-10-07",
                    "status": {
                        "id": 8,
                        "status": "New",
                        "hex_color": "000000"
                    }
                },
                "provider": {
                    "id": 282,
                    "provider_name": "Ka'Daar Hazelton, MFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322926,
                "patients_id": 9924,
                "providers_id": 68,
                "appointment_statuses_id": 8,
                "time": 1696795200,
                "date_of_service": {
                    "date": "10\/08\/2023",
                    "time": "1:00 PM",
                    "text": "10\/08\/2023 (Active)",
                    "value": 322926
                },
                "patient": {
                    "id": 9924,
                    "first_name": "Shana",
                    "last_name": "Bersudsky",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "20",
                    "appointments_count": 115,
                    "first_visit_date": "2021-03-10",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 68,
                    "provider_name": "Theresa Pasqualino, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 322935,
                "patients_id": 14427,
                "providers_id": 68,
                "appointment_statuses_id": 8,
                "time": 1696816800,
                "date_of_service": {
                    "date": "10\/08\/2023",
                    "time": "7:00 PM",
                    "text": "10\/08\/2023 (Active)",
                    "value": 322935
                },
                "patient": {
                    "id": 14427,
                    "first_name": "Angelica",
                    "last_name": "Flores",
                    "status_id": 1,
                    "primary_insurance_id": 1,
                    "visit_copay": "40",
                    "appointments_count": 27,
                    "first_visit_date": "2022-12-18",
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 68,
                    "provider_name": "Theresa Pasqualino, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            }
        ],
        "meta": {
            "total": 101
        }
    },
    "with_cash": {
        "data": [
            {
                "id": 322802,
                "patients_id": 4614,
                "providers_id": 226,
                "appointment_statuses_id": 8,
                "time": 1696618800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "12:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 322802
                },
                "patient": {
                    "id": 4614,
                    "first_name": "Paula",
                    "last_name": "Tible",
                    "status_id": 1,
                    "primary_insurance_id": 31,
                    "visit_copay": "100",
                    "first_visit_date": "2019-02-19",
                    "has_credit_card": true,
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 226,
                    "provider_name": "Jean Borho, ACSW"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            },
            {
                "id": 317974,
                "patients_id": 4639,
                "providers_id": 56,
                "appointment_statuses_id": 8,
                "time": 1696636800,
                "date_of_service": {
                    "date": "10\/06\/2023",
                    "time": "5:00 PM",
                    "text": "10\/06\/2023 (Active)",
                    "value": 317974
                },
                "patient": {
                    "id": 4639,
                    "first_name": "Ani",
                    "last_name": "Ishkhanian",
                    "status_id": 1,
                    "primary_insurance_id": 31,
                    "visit_copay": "30",
                    "first_visit_date": "2019-02-21",
                    "has_credit_card": true,
                    "status": {
                        "id": 1,
                        "status": "Active",
                        "hex_color": "02a756"
                    }
                },
                "provider": {
                    "id": 56,
                    "provider_name": "Miesha Quinones, LMFT"
                },
                "status": {
                    "id": 8,
                    "status": "Active"
                }
            }
        ],
        "meta": {
            "total": 2
        }
    }
}`);

export const getMockDataForImportantForTodayCard = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: dataForImportantForTodayCard })
        }, 3000)
    })
}

const dataForNewLostPatiendCard = JSON.parse(`{
    "new_patients": {
        "data": [
            {
                "id": 15918,
                "status_id": 8,
                "first_name": "James",
                "last_name": "Kahng",
                "cell_phone": "2133212003",
                "home_phone": null,
                "work_phone": "2133210090",
                "created_at": "2023-09-08 17:21:01",
                "created_patient_date": "2023-09-08",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 1,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 13483,
                    "user_id": 171,
                    "patient_id": 15918,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 15918,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0d172928aff2z18a8554c83bz21421c30000",
                    "phone_from": "+18184360166",
                    "phone_to": "+12133212003",
                    "telephony_status": 5,
                    "call_status": 10,
                    "caller_status": 3,
                    "callee_status": 11,
                    "comment": "called and line rang until the call was dropped",
                    "call_starts_at": "2023-09-11 10:40:40",
                    "call_ends_at": "2023-09-11 10:42:03",
                    "created_at": "2023-09-11 10:40:40",
                    "updated_at": "2023-09-11 10:42:24",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "CannotReach",
                    "caller_status_name": "Finished",
                    "callee_status_name": "NoAnswer",
                    "call_status_title": "Cannot Reach",
                    "duration": 83,
                    "user": {
                        "id": 171,
                        "meta": {
                            "user_id": 171,
                            "firstname": "Brittany",
                            "lastname": "Sandoval"
                        }
                    }
                },
                "status_updated_at": "01/02/2024"
            },
            {
                "id": 15932,
                "status_id": 8,
                "first_name": "Roza",
                "last_name": "Yablochnik",
                "cell_phone": "3238682224",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-09-12 15:11:07",
                "created_patient_date": "2023-09-12",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 0,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": null,
                "status_updated_at": "12/29/2023"
            },
            {
                "id": 15950,
                "status_id": 8,
                "first_name": "David",
                "last_name": "Epstein",
                "cell_phone": "8184896049",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-09-14 13:11:02",
                "created_patient_date": "2023-09-14",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 2,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 13976,
                    "user_id": 175,
                    "patient_id": 15950,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 15950,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0d16091e41c8z18ad29fd5bdz2f0e7ca0000",
                    "phone_from": "+12139550099",
                    "phone_to": "+18184896049",
                    "telephony_status": 5,
                    "call_status": 2,
                    "caller_status": 3,
                    "callee_status": 3,
                    "comment": "to check if patient is interested in services and he no longer is",
                    "call_starts_at": "2023-09-26 10:53:24",
                    "call_ends_at": "2023-09-26 10:54:06",
                    "created_at": "2023-09-26 10:53:24",
                    "updated_at": "2023-09-26 10:54:30",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "Success",
                    "caller_status_name": "Finished",
                    "callee_status_name": "Finished",
                    "call_status_title": "Success",
                    "duration": 42,
                    "user": {
                        "id": 175,
                        "meta": {
                            "user_id": 175,
                            "firstname": "Marisol",
                            "lastname": "Flores"
                        }
                    }
                },
                "status_updated_at": "12/25/2023"
            },
            {
                "id": 15971,
                "status_id": 8,
                "first_name": "Robert",
                "last_name": "McCoy",
                "cell_phone": null,
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-09-18 11:05:23",
                "created_patient_date": "2023-09-18",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 1,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 13700,
                    "user_id": 175,
                    "patient_id": 15971,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 15971,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0d17230d27d1z18aa9798461z2f4b09d0000",
                    "phone_from": "+12139550099",
                    "phone_to": "+17143508420",
                    "telephony_status": 5,
                    "call_status": 2,
                    "caller_status": 3,
                    "callee_status": 3,
                    "comment": "to get availability",
                    "call_starts_at": "2023-09-18 11:07:07",
                    "call_ends_at": "2023-09-18 11:08:22",
                    "created_at": "2023-09-18 11:07:07",
                    "updated_at": "2023-09-18 11:08:22",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "Success",
                    "caller_status_name": "Finished",
                    "callee_status_name": "Finished",
                    "call_status_title": "Success",
                    "duration": 75,
                    "user": {
                        "id": 175,
                        "meta": {
                            "user_id": 175,
                            "firstname": "Marisol",
                            "lastname": "Flores"
                        }
                    }
                },
                "status_updated_at": "08/12/2023"
            },
            {
                "id": 15987,
                "status_id": 8,
                "first_name": "Aaron",
                "last_name": "Poley",
                "cell_phone": "8057957458",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-09-20 12:31:07",
                "created_patient_date": "2023-09-20",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 0,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": null
            },
            {
                "id": 15995,
                "status_id": 8,
                "first_name": "Tanya",
                "last_name": "Avila",
                "cell_phone": "8188361589",
                "home_phone": "8188361589",
                "work_phone": null,
                "created_at": "2023-09-21 15:06:28",
                "created_patient_date": "2023-09-21",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 3,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 14086,
                    "user_id": 175,
                    "patient_id": 15995,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 15995,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0e79b52f061ez18addc2851fzf69d260000",
                    "phone_from": "+12139550099",
                    "phone_to": "+18188361589",
                    "telephony_status": 5,
                    "call_status": 2,
                    "caller_status": 3,
                    "callee_status": 3,
                    "comment": "to check if interested in services",
                    "call_starts_at": "2023-09-28 14:47:07",
                    "call_ends_at": "2023-09-28 14:48:21",
                    "created_at": "2023-09-28 14:47:07",
                    "updated_at": "2023-09-28 14:48:23",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "Success",
                    "caller_status_name": "Finished",
                    "callee_status_name": "Finished",
                    "call_status_title": "Success",
                    "duration": 74,
                    "user": {
                        "id": 175,
                        "meta": {
                            "user_id": 175,
                            "firstname": "Marisol",
                            "lastname": "Flores"
                        }
                    }
                }
            },
            {
                "id": 16011,
                "status_id": 8,
                "first_name": "Marguerite",
                "last_name": "Violassi",
                "cell_phone": "8058157157",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-09-26 11:56:46",
                "created_patient_date": "2023-09-26",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 3,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 14132,
                    "user_id": 175,
                    "patient_id": 16011,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 16011,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0d172c12e3ffz18ae2d1f34az205f8a20000",
                    "phone_from": "+12139550099",
                    "phone_to": "+18058157157",
                    "telephony_status": 5,
                    "call_status": 2,
                    "caller_status": 3,
                    "callee_status": 3,
                    "comment": "to check interest and get availability",
                    "call_starts_at": "2023-09-29 14:22:04",
                    "call_ends_at": "2023-09-29 14:23:01",
                    "created_at": "2023-09-29 14:22:04",
                    "updated_at": "2023-09-29 14:23:02",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "Success",
                    "caller_status_name": "Finished",
                    "callee_status_name": "Finished",
                    "call_status_title": "Success",
                    "duration": 57,
                    "user": {
                        "id": 175,
                        "meta": {
                            "user_id": 175,
                            "firstname": "Marisol",
                            "lastname": "Flores"
                        }
                    }
                }
            },
            {
                "id": 16036,
                "status_id": 8,
                "first_name": "Michael",
                "last_name": "Searcy",
                "cell_phone": "9517195999",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-09-28 15:30:47",
                "created_patient_date": "2023-09-28",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 1,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 14093,
                    "user_id": 171,
                    "patient_id": 16036,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 16036,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0e79b52f061ez18addebdaa0z1007db20000",
                    "phone_from": "+18184360166",
                    "phone_to": "+19517195999",
                    "telephony_status": 5,
                    "call_status": 2,
                    "caller_status": 3,
                    "callee_status": 3,
                    "comment": null,
                    "call_starts_at": "2023-09-28 15:32:16",
                    "call_ends_at": "2023-09-28 15:33:38",
                    "created_at": "2023-09-28 15:32:16",
                    "updated_at": "2023-09-28 15:33:40",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "Success",
                    "caller_status_name": "Finished",
                    "callee_status_name": "Finished",
                    "call_status_title": "Success",
                    "duration": 82,
                    "user": {
                        "id": 171,
                        "meta": {
                            "user_id": 171,
                            "firstname": "Brittany",
                            "lastname": "Sandoval"
                        }
                    }
                }
            },
            {
                "id": 16037,
                "status_id": 8,
                "first_name": "Edwin",
                "last_name": "Sepulveda",
                "cell_phone": "2132801995",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-09-28 15:47:51",
                "created_patient_date": "2023-09-28",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 2,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 14139,
                    "user_id": 175,
                    "patient_id": 16037,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 16037,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0d7ada35fbfcz18ae2f94bffz20ed04f0000",
                    "phone_from": "+12139550099",
                    "phone_to": "+12132801995",
                    "telephony_status": 5,
                    "call_status": 2,
                    "caller_status": 3,
                    "callee_status": 3,
                    "comment": "to get availability",
                    "call_starts_at": "2023-09-29 15:05:03",
                    "call_ends_at": "2023-09-29 15:06:57",
                    "created_at": "2023-09-29 15:05:03",
                    "updated_at": "2023-09-29 15:06:58",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "Success",
                    "caller_status_name": "Finished",
                    "callee_status_name": "Finished",
                    "call_status_title": "Success",
                    "duration": 114,
                    "user": {
                        "id": 175,
                        "meta": {
                            "user_id": 175,
                            "firstname": "Marisol",
                            "lastname": "Flores"
                        }
                    }
                }
            },
            {
                "id": 16046,
                "status_id": 8,
                "first_name": "Robert",
                "last_name": "Tyler li",
                "cell_phone": "7074509298",
                "home_phone": "7074509298",
                "work_phone": null,
                "created_at": "2023-09-29 11:05:35",
                "created_patient_date": "2023-09-29",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 1,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 14118,
                    "user_id": 175,
                    "patient_id": 16046,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 16046,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0d17222dacbfz18ae22b8fbaz1bc58bd0000",
                    "phone_from": "+12139550099",
                    "phone_to": "+17074509298",
                    "telephony_status": 5,
                    "call_status": 2,
                    "caller_status": 3,
                    "callee_status": 3,
                    "comment": "to get availability",
                    "call_starts_at": "2023-09-29 11:20:20",
                    "call_ends_at": "2023-09-29 11:22:41",
                    "created_at": "2023-09-29 11:20:20",
                    "updated_at": "2023-09-29 11:22:44",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "Success",
                    "caller_status_name": "Finished",
                    "callee_status_name": "Finished",
                    "call_status_title": "Success",
                    "duration": 141,
                    "user": {
                        "id": 175,
                        "meta": {
                            "user_id": 175,
                            "firstname": "Marisol",
                            "lastname": "Flores"
                        }
                    }
                }
            },
            {
                "id": 16052,
                "status_id": 8,
                "first_name": "Jeanne",
                "last_name": "Reynolds",
                "cell_phone": "8184568396",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-10-02 10:26:49",
                "created_patient_date": "2023-10-02",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 1,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 14162,
                    "user_id": 171,
                    "patient_id": 16052,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 16052,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0e14b02dffe3z18af1765a89z1ae2eee0000",
                    "phone_from": "+18184360166",
                    "phone_to": "+18184568396",
                    "telephony_status": 5,
                    "call_status": 2,
                    "caller_status": 3,
                    "callee_status": 3,
                    "comment": null,
                    "call_starts_at": "2023-10-02 10:36:20",
                    "call_ends_at": "2023-10-02 10:39:52",
                    "created_at": "2023-10-02 10:36:20",
                    "updated_at": "2023-10-02 10:39:55",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "Success",
                    "caller_status_name": "Finished",
                    "callee_status_name": "Finished",
                    "call_status_title": "Success",
                    "duration": 212,
                    "user": {
                        "id": 171,
                        "meta": {
                            "user_id": 171,
                            "firstname": "Brittany",
                            "lastname": "Sandoval"
                        }
                    }
                }
            },
            {
                "id": 16056,
                "status_id": 8,
                "first_name": "Rabin",
                "last_name": "Shaoulian",
                "cell_phone": "3104024899",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-10-02 16:04:57",
                "created_patient_date": "2023-10-02",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 0,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": null
            },
            {
                "id": 16057,
                "status_id": 8,
                "first_name": "Sharellis",
                "last_name": "De Nigro",
                "cell_phone": "8184220087",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-10-02 17:02:53",
                "created_patient_date": "2023-10-02",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 0,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": null
            },
            {
                "id": 16059,
                "status_id": 8,
                "first_name": "Ramon",
                "last_name": "Nigro",
                "cell_phone": null,
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-10-03 10:57:25",
                "created_patient_date": "2023-10-03",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 1,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 14195,
                    "user_id": 175,
                    "patient_id": 16059,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 16059,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0d153f2c7aaez18af6b293c8z31b2e940000",
                    "phone_from": "+12139550099",
                    "phone_to": "+18184220087",
                    "telephony_status": 5,
                    "call_status": 2,
                    "caller_status": 3,
                    "callee_status": 3,
                    "comment": "to check what patient is looking for",
                    "call_starts_at": "2023-10-03 11:00:13",
                    "call_ends_at": "2023-10-03 11:02:47",
                    "created_at": "2023-10-03 11:00:13",
                    "updated_at": "2023-10-03 11:03:10",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "Success",
                    "caller_status_name": "Finished",
                    "callee_status_name": "Finished",
                    "call_status_title": "Success",
                    "duration": 154,
                    "user": {
                        "id": 175,
                        "meta": {
                            "user_id": 175,
                            "firstname": "Marisol",
                            "lastname": "Flores"
                        }
                    }
                }
            },
            {
                "id": 16060,
                "status_id": 8,
                "first_name": "Travis",
                "last_name": "Wolfe",
                "cell_phone": "2672410618",
                "home_phone": "2672410618",
                "work_phone": null,
                "created_at": "2023-10-03 12:05:20",
                "created_patient_date": "2023-10-03",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 2,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 14269,
                    "user_id": 175,
                    "patient_id": 16060,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 16060,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0e147115fe5fz18b00f66435z8ee7550000",
                    "phone_from": "+12139550099",
                    "phone_to": "+12672410618",
                    "telephony_status": 5,
                    "call_status": 2,
                    "caller_status": 3,
                    "callee_status": 3,
                    "comment": "LVM to get availability",
                    "call_starts_at": "2023-10-05 10:50:29",
                    "call_ends_at": "2023-10-05 10:51:59",
                    "created_at": "2023-10-05 10:50:29",
                    "updated_at": "2023-10-05 10:52:02",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "Success",
                    "caller_status_name": "Finished",
                    "callee_status_name": "Finished",
                    "call_status_title": "Success",
                    "duration": 90,
                    "user": {
                        "id": 175,
                        "meta": {
                            "user_id": 175,
                            "firstname": "Marisol",
                            "lastname": "Flores"
                        }
                    }
                }
            },
            {
                "id": 16067,
                "status_id": 8,
                "first_name": "George",
                "last_name": "Lira",
                "cell_phone": "3236145998",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-10-04 15:41:17",
                "created_patient_date": "2023-10-04",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 2,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 14282,
                    "user_id": 175,
                    "patient_id": 16067,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 16067,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0e148a32f8bez18b0163ac84zcac4cb0000",
                    "phone_from": "+12139550099",
                    "phone_to": "+13236145998",
                    "telephony_status": 5,
                    "call_status": 2,
                    "caller_status": 3,
                    "callee_status": 3,
                    "comment": "LVM to get availability",
                    "call_starts_at": "2023-10-05 12:49:51",
                    "call_ends_at": "2023-10-05 12:50:48",
                    "created_at": "2023-10-05 12:49:51",
                    "updated_at": "2023-10-05 12:50:49",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "Success",
                    "caller_status_name": "Finished",
                    "callee_status_name": "Finished",
                    "call_status_title": "Success",
                    "duration": 57,
                    "user": {
                        "id": 175,
                        "meta": {
                            "user_id": 175,
                            "firstname": "Marisol",
                            "lastname": "Flores"
                        }
                    }
                }
            },
            {
                "id": 16068,
                "status_id": 8,
                "first_name": "Irprime",
                "last_name": "Postrero",
                "cell_phone": "4242100672",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-10-04 15:41:19",
                "created_patient_date": "2023-10-04",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 2,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 14295,
                    "user_id": 175,
                    "patient_id": 16068,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 16068,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0e7a78332534z18b0227a77ez10a1ed30000",
                    "phone_from": "+12139550099",
                    "phone_to": "+14242100672",
                    "telephony_status": 5,
                    "call_status": 2,
                    "caller_status": 3,
                    "callee_status": 3,
                    "comment": "to get availability",
                    "call_starts_at": "2023-10-05 16:23:55",
                    "call_ends_at": "2023-10-05 16:25:28",
                    "created_at": "2023-10-05 16:23:55",
                    "updated_at": "2023-10-05 16:27:31",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "Success",
                    "caller_status_name": "Finished",
                    "callee_status_name": "Finished",
                    "call_status_title": "Success",
                    "duration": 93,
                    "user": {
                        "id": 175,
                        "meta": {
                            "user_id": 175,
                            "firstname": "Marisol",
                            "lastname": "Flores"
                        }
                    }
                }
            },
            {
                "id": 16069,
                "status_id": 8,
                "first_name": "Rachel",
                "last_name": "Matthews-New",
                "cell_phone": "8185712506",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-10-04 15:55:37",
                "created_patient_date": "2023-10-04",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 1,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 14255,
                    "user_id": 171,
                    "patient_id": 16069,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 16069,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0d7ada03f142z18afd008f7cz113e7fe0000",
                    "phone_from": "+18184360166",
                    "phone_to": "+18185712506",
                    "telephony_status": 5,
                    "call_status": 2,
                    "caller_status": 3,
                    "callee_status": 3,
                    "comment": "LVM to get availability",
                    "call_starts_at": "2023-10-04 16:23:07",
                    "call_ends_at": "2023-10-04 16:23:55",
                    "created_at": "2023-10-04 16:23:07",
                    "updated_at": "2023-10-04 16:24:04",
                    "telephony_status_name": "NoCall",
                    "call_status_name": "Success",
                    "caller_status_name": "Finished",
                    "callee_status_name": "Finished",
                    "call_status_title": "Success",
                    "duration": 48,
                    "user": {
                        "id": 171,
                        "meta": {
                            "user_id": 171,
                            "firstname": "Brittany",
                            "lastname": "Sandoval"
                        }
                    }
                }
            },
            {
                "id": 16070,
                "status_id": 8,
                "first_name": "Maryam",
                "last_name": "Majidi",
                "cell_phone": "8187440129",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-10-04 16:00:09",
                "created_patient_date": "2023-10-04",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 0,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": null
            },
            {
                "id": 16075,
                "status_id": 8,
                "first_name": "Sherry",
                "last_name": "Renkenberger",
                "cell_phone": "8056575071",
                "home_phone": null,
                "work_phone": null,
                "created_at": "2023-10-05 15:38:49",
                "created_patient_date": "2023-10-05",
                "first_appointment_id": null,
                "ringcentral_call_logs_count": 1,
                "status": {
                    "id": 8,
                    "status": "New",
                    "hex_color": "000000"
                },
                "last_ringcentral_call_log": {
                    "id": 14292,
                    "user_id": 171,
                    "patient_id": 16075,
                    "appointment_id": null,
                    "appointment_type": null,
                    "call_subject_id": 16075,
                    "call_subject_type": "App\Patient",
                    "ring_central_session_id": "s-a0e144b1603eez18b0209ada2z106d5e10000",
                    "phone_from": "+18184360166",
                    "phone_to": "+18056575071",
                    "telephony_status": 2,
                    "call_status": 1,
                    "caller_status": 2,
                    "callee_status": 1,
                    "comment": null,
                    "call_starts_at": "2023-10-05 15:51:10",
                    "call_ends_at": null,
                    "created_at": "2023-10-05 15:51:10",
                    "updated_at": "2023-10-05 15:51:14",
                    "telephony_status_name": "CallConnected",
                    "call_status_name": "InProgress",
                    "caller_status_name": "Success",
                    "callee_status_name": "InProgress",
                    "call_status_title": "In Progress",
                    "duration": null,
                    "user": {
                        "id": 171,
                        "meta": {
                            "user_id": 171,
                            "firstname": "Brittany",
                            "lastname": "Sandoval"
                        }
                    }
                }
            }
        ],
        "meta": {
            "count": 20
        }
    },
    "inactive_patients": {
        "data": [
            {
                "id": 2754,
                "status_id": 4,
                "first_name": "Tamara",
                "last_name": "Sun",
                "last_appointment_id": 309952,
                "appointments_count": 74,
                "last_appointment": {
                    "id": 309952,
                    "time": 1689368400,
                    "providers_id": 16,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/14\/2023",
                        "time": "2:00 PM",
                        "text": "07\/14\/2023 (Visit Created)",
                        "value": 309952
                    },
                    "provider": {
                        "id": 16,
                        "provider_name": "Kim Boykin-Johnson, PsyD"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                },
                "status_updated_at": "12/29/2023"
            },
            {
                "id": 6904,
                "status_id": 4,
                "first_name": "Hanako",
                "last_name": "Reese",
                "last_appointment_id": 312955,
                "appointments_count": 28,
                "last_appointment": {
                    "id": 312955,
                    "time": 1692896400,
                    "providers_id": 269,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/24\/2023",
                        "time": "10:00 AM",
                        "text": "08\/24\/2023 (Cancelled by Provider)",
                        "value": 312955
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                },
                "status_updated_at": "11/30/2023"
            },
            {
                "id": 7198,
                "status_id": 4,
                "first_name": "Kenndra",
                "last_name": "Warren",
                "last_appointment_id": 310062,
                "appointments_count": 76,
                "last_appointment": {
                    "id": 310062,
                    "time": 1689530400,
                    "providers_id": 49,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/16\/2023",
                        "time": "11:00 AM",
                        "text": "07\/16\/2023 (Visit Created)",
                        "value": 310062
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                },
                "status_updated_at": "01/08/2024"
            },
            {
                "id": 7398,
                "status_id": 4,
                "first_name": "Paul",
                "last_name": "Hayes",
                "last_appointment_id": 312617,
                "appointments_count": 39,
                "last_appointment": {
                    "id": 312617,
                    "time": 1690999200,
                    "providers_id": 78,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "08\/02\/2023",
                        "time": "11:00 AM",
                        "text": "08\/02\/2023 (Visit Created)",
                        "value": 312617
                    },
                    "provider": {
                        "id": 78,
                        "provider_name": "Scott Ben-Yashar, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 7896,
                "status_id": 4,
                "first_name": "Veronika",
                "last_name": "Maronyan",
                "last_appointment_id": 303893,
                "appointments_count": 60,
                "last_appointment": {
                    "id": 303893,
                    "time": 1687568400,
                    "providers_id": 54,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/23\/2023",
                        "time": "6:00 PM",
                        "text": "06\/23\/2023 (Visit Created)",
                        "value": 303893
                    },
                    "provider": {
                        "id": 54,
                        "provider_name": "Hripsime Harutyunyan, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 8449,
                "status_id": 4,
                "first_name": "Amy",
                "last_name": "Lan",
                "last_appointment_id": 307270,
                "appointments_count": 53,
                "last_appointment": {
                    "id": 307270,
                    "time": 1688083200,
                    "providers_id": 49,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/29\/2023",
                        "time": "5:00 PM",
                        "text": "06\/29\/2023 (Visit Created)",
                        "value": 307270
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 8906,
                "status_id": 4,
                "first_name": "Diana",
                "last_name": "Lopez",
                "last_appointment_id": 316560,
                "appointments_count": 142,
                "last_appointment": {
                    "id": 316560,
                    "time": 1692806400,
                    "providers_id": 211,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "08\/23\/2023",
                        "time": "9:00 AM",
                        "text": "08\/23\/2023 (Patient Did Not Come)",
                        "value": 316560
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 9124,
                "status_id": 4,
                "first_name": "Liah",
                "last_name": "Kupinsky",
                "last_appointment_id": 312220,
                "appointments_count": 143,
                "last_appointment": {
                    "id": 312220,
                    "time": 1690912800,
                    "providers_id": 83,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "08\/01\/2023",
                        "time": "11:00 AM",
                        "text": "08\/01\/2023 (Cancelled by Patient)",
                        "value": 312220
                    },
                    "provider": {
                        "id": 83,
                        "provider_name": "Shyda Massih, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 9157,
                "status_id": 4,
                "first_name": "Karen",
                "last_name": "Stevens",
                "last_appointment_id": 307323,
                "appointments_count": 126,
                "last_appointment": {
                    "id": 307323,
                    "time": 1687802400,
                    "providers_id": 80,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/26\/2023",
                        "time": "11:00 AM",
                        "text": "06\/26\/2023 (Visit Created)",
                        "value": 307323
                    },
                    "provider": {
                        "id": 80,
                        "provider_name": "Ashley Pezeshkifar, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 9467,
                "status_id": 4,
                "first_name": "Matthew",
                "last_name": "Cabrera",
                "last_appointment_id": 306980,
                "appointments_count": 40,
                "last_appointment": {
                    "id": 306980,
                    "time": 1691874000,
                    "providers_id": 76,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/12\/2023",
                        "time": "2:00 PM",
                        "text": "08\/12\/2023 (Cancelled by Provider)",
                        "value": 306980
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 9550,
                "status_id": 4,
                "first_name": "Paola",
                "last_name": "Nunez",
                "last_appointment_id": 304645,
                "appointments_count": 102,
                "last_appointment": {
                    "id": 304645,
                    "time": 1686258000,
                    "providers_id": 78,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/08\/2023",
                        "time": "2:00 PM",
                        "text": "06\/08\/2023 (Visit Created)",
                        "value": 304645
                    },
                    "provider": {
                        "id": 78,
                        "provider_name": "Scott Ben-Yashar, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 9654,
                "status_id": 4,
                "first_name": "Tandis",
                "last_name": "Pazoki",
                "last_appointment_id": 307984,
                "appointments_count": 37,
                "last_appointment": {
                    "id": 307984,
                    "time": 1688058000,
                    "providers_id": 20,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/29\/2023",
                        "time": "10:00 AM",
                        "text": "06\/29\/2023 (Visit Created)",
                        "value": 307984
                    },
                    "provider": {
                        "id": 20,
                        "provider_name": "Fariba Kooklan, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 9931,
                "status_id": 4,
                "first_name": "xyz",
                "last_name": "abc",
                "last_appointment_id": 318426,
                "appointments_count": 13,
                "last_appointment": {
                    "id": 318426,
                    "time": 1693404000,
                    "providers_id": 28,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/30\/2023",
                        "time": "7:00 AM",
                        "text": "08\/30\/2023 (Cancelled by Provider)",
                        "value": 318426
                    },
                    "provider": {
                        "id": 28,
                        "provider_name": "Xyz Test"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 10106,
                "status_id": 4,
                "first_name": "Sorour",
                "last_name": "Rabizadeh",
                "last_appointment_id": 306569,
                "appointments_count": 31,
                "last_appointment": {
                    "id": 306569,
                    "time": 1688234400,
                    "providers_id": 49,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "07\/01\/2023",
                        "time": "11:00 AM",
                        "text": "07\/01\/2023 (Cancelled by Patient)",
                        "value": 306569
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 10278,
                "status_id": 4,
                "first_name": "Celeste",
                "last_name": "Perez",
                "last_appointment_id": 305012,
                "appointments_count": 26,
                "last_appointment": {
                    "id": 305012,
                    "time": 1686844800,
                    "providers_id": 256,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/15\/2023",
                        "time": "9:00 AM",
                        "text": "06\/15\/2023 (Visit Created)",
                        "value": 305012
                    },
                    "provider": {
                        "id": 256,
                        "provider_name": "Alexandra Bruun, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 10831,
                "status_id": 4,
                "first_name": "Lukas",
                "last_name": "Rosenbaum",
                "last_appointment_id": 309840,
                "appointments_count": 6,
                "last_appointment": {
                    "id": 309840,
                    "time": 1689627600,
                    "providers_id": 76,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/17\/2023",
                        "time": "2:00 PM",
                        "text": "07\/17\/2023 (Visit Created)",
                        "value": 309840
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 11079,
                "status_id": 4,
                "first_name": "Luke",
                "last_name": "Soldano",
                "last_appointment_id": 305043,
                "appointments_count": 21,
                "last_appointment": {
                    "id": 305043,
                    "time": 1687219200,
                    "providers_id": 218,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/19\/2023",
                        "time": "5:00 PM",
                        "text": "06\/19\/2023 (Visit Created)",
                        "value": 305043
                    },
                    "provider": {
                        "id": 218,
                        "provider_name": "Kerry McLean, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 12114,
                "status_id": 4,
                "first_name": "Alberto",
                "last_name": "Hernandez",
                "last_appointment_id": 302557,
                "appointments_count": 60,
                "last_appointment": {
                    "id": 302557,
                    "time": 1687539600,
                    "providers_id": 233,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/23\/2023",
                        "time": "10:00 AM",
                        "text": "06\/23\/2023 (Visit Created)",
                        "value": 302557
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 12175,
                "status_id": 4,
                "first_name": "Viviana",
                "last_name": "Hernandez",
                "last_appointment_id": 312641,
                "appointments_count": 29,
                "last_appointment": {
                    "id": 312641,
                    "time": 1691272800,
                    "providers_id": 49,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "08\/05\/2023",
                        "time": "3:00 PM",
                        "text": "08\/05\/2023 (Visit Created)",
                        "value": 312641
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 12176,
                "status_id": 4,
                "first_name": "Tracey",
                "last_name": "Muehring",
                "last_appointment_id": 306374,
                "appointments_count": 26,
                "last_appointment": {
                    "id": 306374,
                    "time": 1687298400,
                    "providers_id": 53,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/20\/2023",
                        "time": "3:00 PM",
                        "text": "06\/20\/2023 (Visit Created)",
                        "value": 306374
                    },
                    "provider": {
                        "id": 53,
                        "provider_name": "Jennifer Frank, PhD"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 12491,
                "status_id": 4,
                "first_name": "Jennifer",
                "last_name": "Whaley",
                "last_appointment_id": 305418,
                "appointments_count": 26,
                "last_appointment": {
                    "id": 305418,
                    "time": 1687896000,
                    "providers_id": 233,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/27\/2023",
                        "time": "1:00 PM",
                        "text": "06\/27\/2023 (Visit Created)",
                        "value": 305418
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 12545,
                "status_id": 4,
                "first_name": "Liv",
                "last_name": "Martinez",
                "last_appointment_id": 310792,
                "appointments_count": 58,
                "last_appointment": {
                    "id": 310792,
                    "time": 1691096400,
                    "providers_id": 240,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/03\/2023",
                        "time": "2:00 PM",
                        "text": "08\/03\/2023 (Cancelled by Provider)",
                        "value": 310792
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 12598,
                "status_id": 4,
                "first_name": "Cindy",
                "last_name": "Mcguinn",
                "last_appointment_id": 304956,
                "appointments_count": 63,
                "last_appointment": {
                    "id": 304956,
                    "time": 1686610800,
                    "providers_id": 240,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/12\/2023",
                        "time": "4:00 PM",
                        "text": "06\/12\/2023 (Visit Created)",
                        "value": 304956
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 12713,
                "status_id": 4,
                "first_name": "Makensy",
                "last_name": "Smith",
                "last_appointment_id": 311985,
                "appointments_count": 29,
                "last_appointment": {
                    "id": 311985,
                    "time": 1691434800,
                    "providers_id": 49,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "08\/07\/2023",
                        "time": "12:00 PM",
                        "text": "08\/07\/2023 (Patient Did Not Come)",
                        "value": 311985
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 12779,
                "status_id": 4,
                "first_name": "Camilla",
                "last_name": "Galvez",
                "last_appointment_id": 309858,
                "appointments_count": 51,
                "last_appointment": {
                    "id": 309858,
                    "time": 1689620400,
                    "providers_id": 233,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/17\/2023",
                        "time": "12:00 PM",
                        "text": "07\/17\/2023 (Visit Created)",
                        "value": 309858
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 12880,
                "status_id": 4,
                "first_name": "Steve",
                "last_name": "Orozco-Lopez COUPLES",
                "last_appointment_id": 314372,
                "appointments_count": 4,
                "last_appointment": {
                    "id": 314372,
                    "time": 1692140400,
                    "providers_id": 49,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "08\/15\/2023",
                        "time": "4:00 PM",
                        "text": "08\/15\/2023 (Cancelled by Patient)",
                        "value": 314372
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13134,
                "status_id": 4,
                "first_name": "Kyle",
                "last_name": "Bowers",
                "last_appointment_id": 307413,
                "appointments_count": 53,
                "last_appointment": {
                    "id": 307413,
                    "time": 1687809600,
                    "providers_id": 217,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/26\/2023",
                        "time": "1:00 PM",
                        "text": "06\/26\/2023 (Visit Created)",
                        "value": 307413
                    },
                    "provider": {
                        "id": 217,
                        "provider_name": "Manuel Zermeno, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13160,
                "status_id": 4,
                "first_name": "Arshi",
                "last_name": "Khan",
                "last_appointment_id": 302777,
                "appointments_count": 20,
                "last_appointment": {
                    "id": 302777,
                    "time": 1687197600,
                    "providers_id": 49,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/19\/2023",
                        "time": "11:00 AM",
                        "text": "06\/19\/2023 (Visit Created)",
                        "value": 302777
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13164,
                "status_id": 4,
                "first_name": "Tajah",
                "last_name": "Newton",
                "last_appointment_id": 308571,
                "appointments_count": 44,
                "last_appointment": {
                    "id": 308571,
                    "time": 1690844400,
                    "providers_id": 240,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/31\/2023",
                        "time": "4:00 PM",
                        "text": "07\/31\/2023 (Visit Created)",
                        "value": 308571
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13188,
                "status_id": 4,
                "first_name": "Ayla",
                "last_name": "Rodriguez",
                "last_appointment_id": 292391,
                "appointments_count": 16,
                "last_appointment": {
                    "id": 292391,
                    "time": 1687474800,
                    "providers_id": 65,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/22\/2023",
                        "time": "4:00 PM",
                        "text": "06\/22\/2023 (Visit Created)",
                        "value": 292391
                    },
                    "provider": {
                        "id": 65,
                        "provider_name": "Devorah Teyer, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13300,
                "status_id": 4,
                "first_name": "Adam",
                "last_name": "Baldwin",
                "last_appointment_id": 308845,
                "appointments_count": 41,
                "last_appointment": {
                    "id": 308845,
                    "time": 1689793200,
                    "providers_id": 78,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/19\/2023",
                        "time": "12:00 PM",
                        "text": "07\/19\/2023 (Visit Created)",
                        "value": 308845
                    },
                    "provider": {
                        "id": 78,
                        "provider_name": "Scott Ben-Yashar, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13438,
                "status_id": 4,
                "first_name": "Heather",
                "last_name": "Andersen",
                "last_appointment_id": 313270,
                "appointments_count": 30,
                "last_appointment": {
                    "id": 313270,
                    "time": 1691262000,
                    "providers_id": 16,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "08\/05\/2023",
                        "time": "12:00 PM",
                        "text": "08\/05\/2023 (Visit Created)",
                        "value": 313270
                    },
                    "provider": {
                        "id": 16,
                        "provider_name": "Kim Boykin-Johnson, PsyD"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13592,
                "status_id": 4,
                "first_name": "Rae",
                "last_name": "Green",
                "last_appointment_id": 307449,
                "appointments_count": 41,
                "last_appointment": {
                    "id": 307449,
                    "time": 1689865200,
                    "providers_id": 269,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "07\/20\/2023",
                        "time": "8:00 AM",
                        "text": "07\/20\/2023 (Cancelled by Provider)",
                        "value": 307449
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13602,
                "status_id": 4,
                "first_name": "Romain",
                "last_name": "Fricaud",
                "last_appointment_id": 309874,
                "appointments_count": 34,
                "last_appointment": {
                    "id": 309874,
                    "time": 1689800400,
                    "providers_id": 49,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/19\/2023",
                        "time": "2:00 PM",
                        "text": "07\/19\/2023 (Visit Created)",
                        "value": 309874
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13603,
                "status_id": 4,
                "first_name": "Soojin",
                "last_name": "Busch COUPLE",
                "last_appointment_id": 316422,
                "appointments_count": 49,
                "last_appointment": {
                    "id": 316422,
                    "time": 1697580000,
                    "providers_id": 268,
                    "appointment_statuses_id": 8,
                    "date_of_service": {
                        "date": "10\/17\/2023",
                        "time": "3:00 PM",
                        "text": "10\/17\/2023 (Active)",
                        "value": 316422
                    },
                    "provider": {
                        "id": 268,
                        "provider_name": "Dana Rosen, LMFT"
                    },
                    "status": {
                        "id": 8,
                        "status": "Active"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13607,
                "status_id": 4,
                "first_name": "Anupama",
                "last_name": "Dinesh",
                "last_appointment_id": 306996,
                "appointments_count": 24,
                "last_appointment": {
                    "id": 306996,
                    "time": 1687636800,
                    "providers_id": 49,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/24\/2023",
                        "time": "1:00 PM",
                        "text": "06\/24\/2023 (Visit Created)",
                        "value": 306996
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13611,
                "status_id": 4,
                "first_name": "Tali",
                "last_name": "Lockwood",
                "last_appointment_id": 313156,
                "appointments_count": 21,
                "last_appointment": {
                    "id": 313156,
                    "time": 1693533600,
                    "providers_id": 253,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "08\/31\/2023",
                        "time": "7:00 PM",
                        "text": "08\/31\/2023 (Patient Did Not Come)",
                        "value": 313156
                    },
                    "provider": {
                        "id": 253,
                        "provider_name": "Christina Ambriz, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13619,
                "status_id": 4,
                "first_name": "Anthony",
                "last_name": "De Giacomo Junior",
                "last_appointment_id": 308045,
                "appointments_count": 58,
                "last_appointment": {
                    "id": 308045,
                    "time": 1694635200,
                    "providers_id": 76,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "09\/13\/2023",
                        "time": "1:00 PM",
                        "text": "09\/13\/2023 (Cancelled by Provider)",
                        "value": 308045
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13699,
                "status_id": 4,
                "first_name": "Juan",
                "last_name": "Lopez",
                "last_appointment_id": 306532,
                "appointments_count": 25,
                "last_appointment": {
                    "id": 306532,
                    "time": 1687899600,
                    "providers_id": 49,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/27\/2023",
                        "time": "2:00 PM",
                        "text": "06\/27\/2023 (Visit Created)",
                        "value": 306532
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13813,
                "status_id": 4,
                "first_name": "Cameron",
                "last_name": "Cordova",
                "last_appointment_id": 315140,
                "appointments_count": 42,
                "last_appointment": {
                    "id": 315140,
                    "time": 1692662400,
                    "providers_id": 253,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/21\/2023",
                        "time": "5:00 PM",
                        "text": "08\/21\/2023 (Cancelled by Provider)",
                        "value": 315140
                    },
                    "provider": {
                        "id": 253,
                        "provider_name": "Christina Ambriz, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13823,
                "status_id": 4,
                "first_name": "Carla",
                "last_name": "Joaquin",
                "last_appointment_id": 302862,
                "appointments_count": 41,
                "last_appointment": {
                    "id": 302862,
                    "time": 1689958800,
                    "providers_id": 268,
                    "appointment_statuses_id": 10,
                    "date_of_service": {
                        "date": "07\/21\/2023",
                        "time": "10:00 AM",
                        "text": "07\/21\/2023 (Cancelled by Office)",
                        "value": 302862
                    },
                    "provider": {
                        "id": 268,
                        "provider_name": "Dana Rosen, LMFT"
                    },
                    "status": {
                        "id": 10,
                        "status": "Cancelled by Office"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13824,
                "status_id": 4,
                "first_name": "Cynthia",
                "last_name": "Johnson",
                "last_appointment_id": 302541,
                "appointments_count": 37,
                "last_appointment": {
                    "id": 302541,
                    "time": 1689890400,
                    "providers_id": 268,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/20\/2023",
                        "time": "3:00 PM",
                        "text": "07\/20\/2023 (Visit Created)",
                        "value": 302541
                    },
                    "provider": {
                        "id": 268,
                        "provider_name": "Dana Rosen, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 13880,
                "status_id": 4,
                "first_name": "Niloufar",
                "last_name": "Namazi",
                "last_appointment_id": 304731,
                "appointments_count": 19,
                "last_appointment": {
                    "id": 304731,
                    "time": 1686776400,
                    "providers_id": 49,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/14\/2023",
                        "time": "2:00 PM",
                        "text": "06\/14\/2023 (Visit Created)",
                        "value": 304731
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14126,
                "status_id": 4,
                "first_name": "Margo",
                "last_name": "Thompson",
                "last_appointment_id": 311527,
                "appointments_count": 42,
                "last_appointment": {
                    "id": 311527,
                    "time": 1690560000,
                    "providers_id": 269,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/28\/2023",
                        "time": "9:00 AM",
                        "text": "07\/28\/2023 (Visit Created)",
                        "value": 311527
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14183,
                "status_id": 4,
                "first_name": "Matthew I",
                "last_name": "Torres",
                "last_appointment_id": 312759,
                "appointments_count": 16,
                "last_appointment": {
                    "id": 312759,
                    "time": 1693080000,
                    "providers_id": 253,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "08\/26\/2023",
                        "time": "1:00 PM",
                        "text": "08\/26\/2023 (Patient Did Not Come)",
                        "value": 312759
                    },
                    "provider": {
                        "id": 253,
                        "provider_name": "Christina Ambriz, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14273,
                "status_id": 4,
                "first_name": "Arezoo",
                "last_name": "Vasakhah",
                "last_appointment_id": 313624,
                "appointments_count": 16,
                "last_appointment": {
                    "id": 313624,
                    "time": 1691467200,
                    "providers_id": 20,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "08\/07\/2023",
                        "time": "9:00 PM",
                        "text": "08\/07\/2023 (Patient Did Not Come)",
                        "value": 313624
                    },
                    "provider": {
                        "id": 20,
                        "provider_name": "Fariba Kooklan, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14331,
                "status_id": 4,
                "first_name": "Sofia",
                "last_name": "Arias",
                "last_appointment_id": 305083,
                "appointments_count": 28,
                "last_appointment": {
                    "id": 305083,
                    "time": 1688094000,
                    "providers_id": 233,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/29\/2023",
                        "time": "8:00 PM",
                        "text": "06\/29\/2023 (Visit Created)",
                        "value": 305083
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14333,
                "status_id": 4,
                "first_name": "Jesus",
                "last_name": "Camarena",
                "last_appointment_id": 302069,
                "appointments_count": 20,
                "last_appointment": {
                    "id": 302069,
                    "time": 1688083200,
                    "providers_id": 269,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/29\/2023",
                        "time": "5:00 PM",
                        "text": "06\/29\/2023 (Visit Created)",
                        "value": 302069
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14389,
                "status_id": 4,
                "first_name": "Sasan",
                "last_name": "Keyhani",
                "last_appointment_id": 310264,
                "appointments_count": 7,
                "last_appointment": {
                    "id": 310264,
                    "time": 1689649200,
                    "providers_id": 20,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/17\/2023",
                        "time": "8:00 PM",
                        "text": "07\/17\/2023 (Visit Created)",
                        "value": 310264
                    },
                    "provider": {
                        "id": 20,
                        "provider_name": "Fariba Kooklan, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14405,
                "status_id": 4,
                "first_name": "Diego",
                "last_name": "Paredes",
                "last_appointment_id": 307527,
                "appointments_count": 21,
                "last_appointment": {
                    "id": 307527,
                    "time": 1689627600,
                    "providers_id": 269,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/17\/2023",
                        "time": "2:00 PM",
                        "text": "07\/17\/2023 (Visit Created)",
                        "value": 307527
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14407,
                "status_id": 4,
                "first_name": "Victor",
                "last_name": "Avalos",
                "last_appointment_id": 306402,
                "appointments_count": 23,
                "last_appointment": {
                    "id": 306402,
                    "time": 1687395600,
                    "providers_id": 53,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/21\/2023",
                        "time": "6:00 PM",
                        "text": "06\/21\/2023 (Visit Created)",
                        "value": 306402
                    },
                    "provider": {
                        "id": 53,
                        "provider_name": "Jennifer Frank, PhD"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14419,
                "status_id": 4,
                "first_name": "Audrey",
                "last_name": "Martinez",
                "last_appointment_id": 310471,
                "appointments_count": 25,
                "last_appointment": {
                    "id": 310471,
                    "time": 1690311600,
                    "providers_id": 233,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/25\/2023",
                        "time": "12:00 PM",
                        "text": "07\/25\/2023 (Visit Created)",
                        "value": 310471
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14430,
                "status_id": 4,
                "first_name": "Gabriel",
                "last_name": "Friedman",
                "last_appointment_id": 304677,
                "appointments_count": 12,
                "last_appointment": {
                    "id": 304677,
                    "time": 1689897600,
                    "providers_id": 253,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "07\/20\/2023",
                        "time": "5:00 PM",
                        "text": "07\/20\/2023 (Cancelled by Patient)",
                        "value": 304677
                    },
                    "provider": {
                        "id": 253,
                        "provider_name": "Christina Ambriz, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14444,
                "status_id": 4,
                "first_name": "Dulce",
                "last_name": "Cordova",
                "last_appointment_id": 311111,
                "appointments_count": 30,
                "last_appointment": {
                    "id": 311111,
                    "time": 1690837200,
                    "providers_id": 218,
                    "appointment_statuses_id": 5,
                    "date_of_service": {
                        "date": "07\/31\/2023",
                        "time": "2:00 PM",
                        "text": "07\/31\/2023 (Last Minute Cancel by Patient)",
                        "value": 311111
                    },
                    "provider": {
                        "id": 218,
                        "provider_name": "Kerry McLean, LMFT"
                    },
                    "status": {
                        "id": 5,
                        "status": "Last Minute Cancel by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14484,
                "status_id": 4,
                "first_name": "Ava",
                "last_name": "Vincent",
                "last_appointment_id": 312783,
                "appointments_count": 35,
                "last_appointment": {
                    "id": 312783,
                    "time": 1691629200,
                    "providers_id": 233,
                    "appointment_statuses_id": 5,
                    "date_of_service": {
                        "date": "08\/09\/2023",
                        "time": "6:00 PM",
                        "text": "08\/09\/2023 (Last Minute Cancel by Patient)",
                        "value": 312783
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 5,
                        "status": "Last Minute Cancel by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14491,
                "status_id": 4,
                "first_name": "Debra",
                "last_name": "Jocz",
                "last_appointment_id": 309359,
                "appointments_count": 37,
                "last_appointment": {
                    "id": 309359,
                    "time": 1693533600,
                    "providers_id": 211,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/31\/2023",
                        "time": "7:00 PM",
                        "text": "08\/31\/2023 (Cancelled by Provider)",
                        "value": 309359
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14601,
                "status_id": 4,
                "first_name": "Melany",
                "last_name": "Rodas",
                "last_appointment_id": 311019,
                "appointments_count": 27,
                "last_appointment": {
                    "id": 311019,
                    "time": 1690308000,
                    "providers_id": 216,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/25\/2023",
                        "time": "11:00 AM",
                        "text": "07\/25\/2023 (Visit Created)",
                        "value": 311019
                    },
                    "provider": {
                        "id": 216,
                        "provider_name": "Noemi Hernandez, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14658,
                "status_id": 4,
                "first_name": "Christian",
                "last_name": "Robbins",
                "last_appointment_id": 312333,
                "appointments_count": 8,
                "last_appointment": {
                    "id": 312333,
                    "time": 1691427600,
                    "providers_id": 49,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "08\/07\/2023",
                        "time": "10:00 AM",
                        "text": "08\/07\/2023 (Cancelled by Patient)",
                        "value": 312333
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14712,
                "status_id": 4,
                "first_name": "Jamie",
                "last_name": "Inglish",
                "last_appointment_id": 312561,
                "appointments_count": 14,
                "last_appointment": {
                    "id": 312561,
                    "time": 1691078400,
                    "providers_id": 20,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "08\/03\/2023",
                        "time": "9:00 AM",
                        "text": "08\/03\/2023 (Visit Created)",
                        "value": 312561
                    },
                    "provider": {
                        "id": 20,
                        "provider_name": "Fariba Kooklan, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14737,
                "status_id": 4,
                "first_name": "Eric",
                "last_name": "Parra",
                "last_appointment_id": 315858,
                "appointments_count": 29,
                "last_appointment": {
                    "id": 315858,
                    "time": 1692745200,
                    "providers_id": 218,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/22\/2023",
                        "time": "4:00 PM",
                        "text": "08\/22\/2023 (Cancelled by Provider)",
                        "value": 315858
                    },
                    "provider": {
                        "id": 218,
                        "provider_name": "Kerry McLean, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14762,
                "status_id": 4,
                "first_name": "Natalie",
                "last_name": "Santillano",
                "last_appointment_id": 313909,
                "appointments_count": 15,
                "last_appointment": {
                    "id": 313909,
                    "time": 1691766000,
                    "providers_id": 253,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "08\/11\/2023",
                        "time": "8:00 AM",
                        "text": "08\/11\/2023 (Patient Did Not Come)",
                        "value": 313909
                    },
                    "provider": {
                        "id": 253,
                        "provider_name": "Christina Ambriz, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14791,
                "status_id": 4,
                "first_name": "Andrea",
                "last_name": "Salazar",
                "last_appointment_id": 307839,
                "appointments_count": 19,
                "last_appointment": {
                    "id": 307839,
                    "time": 1688162400,
                    "providers_id": 233,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "06\/30\/2023",
                        "time": "3:00 PM",
                        "text": "06\/30\/2023 (Cancelled by Patient)",
                        "value": 307839
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14940,
                "status_id": 4,
                "first_name": "Kaylynn",
                "last_name": "Colclasure",
                "last_appointment_id": 308728,
                "appointments_count": 11,
                "last_appointment": {
                    "id": 308728,
                    "time": 1691085600,
                    "providers_id": 270,
                    "appointment_statuses_id": 5,
                    "date_of_service": {
                        "date": "08\/03\/2023",
                        "time": "11:00 AM",
                        "text": "08\/03\/2023 (Last Minute Cancel by Patient)",
                        "value": 308728
                    },
                    "provider": {
                        "id": 270,
                        "provider_name": "Karen Lopez, LMFT"
                    },
                    "status": {
                        "id": 5,
                        "status": "Last Minute Cancel by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14946,
                "status_id": 4,
                "first_name": "Joy",
                "last_name": "Harris",
                "last_appointment_id": 308124,
                "appointments_count": 15,
                "last_appointment": {
                    "id": 308124,
                    "time": 1688166000,
                    "providers_id": 240,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "06\/30\/2023",
                        "time": "4:00 PM",
                        "text": "06\/30\/2023 (Patient Did Not Come)",
                        "value": 308124
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14959,
                "status_id": 4,
                "first_name": "Rivkah",
                "last_name": "Einbinder",
                "last_appointment_id": 305737,
                "appointments_count": 11,
                "last_appointment": {
                    "id": 305737,
                    "time": 1686866400,
                    "providers_id": 80,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/15\/2023",
                        "time": "3:00 PM",
                        "text": "06\/15\/2023 (Visit Created)",
                        "value": 305737
                    },
                    "provider": {
                        "id": 80,
                        "provider_name": "Ashley Pezeshkifar, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14969,
                "status_id": 4,
                "first_name": "Paul",
                "last_name": "Diaz",
                "last_appointment_id": 307487,
                "appointments_count": 16,
                "last_appointment": {
                    "id": 307487,
                    "time": 1689883200,
                    "providers_id": 269,
                    "appointment_statuses_id": 5,
                    "date_of_service": {
                        "date": "07\/20\/2023",
                        "time": "1:00 PM",
                        "text": "07\/20\/2023 (Last Minute Cancel by Patient)",
                        "value": 307487
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 5,
                        "status": "Last Minute Cancel by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14979,
                "status_id": 4,
                "first_name": "Jeri",
                "last_name": "Yneges",
                "last_appointment_id": 306457,
                "appointments_count": 11,
                "last_appointment": {
                    "id": 306457,
                    "time": 1688076000,
                    "providers_id": 269,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/29\/2023",
                        "time": "3:00 PM",
                        "text": "06\/29\/2023 (Visit Created)",
                        "value": 306457
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14983,
                "status_id": 4,
                "first_name": "Jacqueline",
                "last_name": "Carrera",
                "last_appointment_id": 315105,
                "appointments_count": 22,
                "last_appointment": {
                    "id": 315105,
                    "time": 1692288000,
                    "providers_id": 269,
                    "appointment_statuses_id": 2,
                    "date_of_service": {
                        "date": "08\/17\/2023",
                        "time": "9:00 AM",
                        "text": "08\/17\/2023 (Rescheduled)",
                        "value": 315105
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 2,
                        "status": "Rescheduled"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 14990,
                "status_id": 4,
                "first_name": "Vanessa",
                "last_name": "Knight",
                "last_appointment_id": 309424,
                "appointments_count": 14,
                "last_appointment": {
                    "id": 309424,
                    "time": 1689451200,
                    "providers_id": 233,
                    "appointment_statuses_id": 5,
                    "date_of_service": {
                        "date": "07\/15\/2023",
                        "time": "1:00 PM",
                        "text": "07\/15\/2023 (Last Minute Cancel by Patient)",
                        "value": 309424
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 5,
                        "status": "Last Minute Cancel by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 15070,
                "status_id": 4,
                "first_name": "Alexander",
                "last_name": "Hutchinson",
                "last_appointment_id": 307842,
                "appointments_count": 5,
                "last_appointment": {
                    "id": 307842,
                    "time": 1689012000,
                    "providers_id": 253,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "07\/10\/2023",
                        "time": "11:00 AM",
                        "text": "07\/10\/2023 (Patient Did Not Come)",
                        "value": 307842
                    },
                    "provider": {
                        "id": 253,
                        "provider_name": "Christina Ambriz, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 15192,
                "status_id": 4,
                "first_name": "Molly",
                "last_name": "Tenenbaum",
                "last_appointment_id": 306767,
                "appointments_count": 6,
                "last_appointment": {
                    "id": 306767,
                    "time": 1687363200,
                    "providers_id": 80,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "06\/21\/2023",
                        "time": "9:00 AM",
                        "text": "06\/21\/2023 (Patient Did Not Come)",
                        "value": 306767
                    },
                    "provider": {
                        "id": 80,
                        "provider_name": "Ashley Pezeshkifar, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 15305,
                "status_id": 4,
                "first_name": "Matthew",
                "last_name": "Clark",
                "last_appointment_id": 312793,
                "appointments_count": 10,
                "last_appointment": {
                    "id": 312793,
                    "time": 1691085600,
                    "providers_id": 83,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "08\/03\/2023",
                        "time": "11:00 AM",
                        "text": "08\/03\/2023 (Visit Created)",
                        "value": 312793
                    },
                    "provider": {
                        "id": 83,
                        "provider_name": "Shyda Massih, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 15346,
                "status_id": 4,
                "first_name": "Jerome",
                "last_name": "Orlemann",
                "last_appointment_id": 311593,
                "appointments_count": 4,
                "last_appointment": {
                    "id": 311593,
                    "time": 1690405200,
                    "providers_id": 20,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/26\/2023",
                        "time": "2:00 PM",
                        "text": "07\/26\/2023 (Visit Created)",
                        "value": 311593
                    },
                    "provider": {
                        "id": 20,
                        "provider_name": "Fariba Kooklan, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 15399,
                "status_id": 4,
                "first_name": "Jeremy",
                "last_name": "Edberg",
                "last_appointment_id": 305727,
                "appointments_count": 12,
                "last_appointment": {
                    "id": 305727,
                    "time": 1693256400,
                    "providers_id": 76,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/28\/2023",
                        "time": "2:00 PM",
                        "text": "08\/28\/2023 (Cancelled by Provider)",
                        "value": 305727
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 15479,
                "status_id": 4,
                "first_name": "Pamela",
                "last_name": "Sevilla",
                "last_appointment_id": 310863,
                "appointments_count": 4,
                "last_appointment": {
                    "id": 310863,
                    "time": 1690473600,
                    "providers_id": 218,
                    "appointment_statuses_id": 5,
                    "date_of_service": {
                        "date": "07\/27\/2023",
                        "time": "9:00 AM",
                        "text": "07\/27\/2023 (Last Minute Cancel by Patient)",
                        "value": 310863
                    },
                    "provider": {
                        "id": 218,
                        "provider_name": "Kerry McLean, LMFT"
                    },
                    "status": {
                        "id": 5,
                        "status": "Last Minute Cancel by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 15489,
                "status_id": 4,
                "first_name": "Eric",
                "last_name": "Maxey",
                "last_appointment_id": 308210,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 308210,
                    "time": 1689894000,
                    "providers_id": 233,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "07\/20\/2023",
                        "time": "4:00 PM",
                        "text": "07\/20\/2023 (Visit Created)",
                        "value": 308210
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 15511,
                "status_id": 4,
                "first_name": "Aria",
                "last_name": "Tafarella",
                "last_appointment_id": 311603,
                "appointments_count": 5,
                "last_appointment": {
                    "id": 311603,
                    "time": 1691013600,
                    "providers_id": 240,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "08\/02\/2023",
                        "time": "3:00 PM",
                        "text": "08\/02\/2023 (Cancelled by Patient)",
                        "value": 311603
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 15546,
                "status_id": 4,
                "first_name": "Jessica",
                "last_name": "Clark",
                "last_appointment_id": 312796,
                "appointments_count": 4,
                "last_appointment": {
                    "id": 312796,
                    "time": 1691118000,
                    "providers_id": 83,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "08\/03\/2023",
                        "time": "8:00 PM",
                        "text": "08\/03\/2023 (Visit Created)",
                        "value": 312796
                    },
                    "provider": {
                        "id": 83,
                        "provider_name": "Shyda Massih, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 15573,
                "status_id": 4,
                "first_name": "Madelynn",
                "last_name": "Rime",
                "last_appointment_id": 312343,
                "appointments_count": 5,
                "last_appointment": {
                    "id": 312343,
                    "time": 1691604000,
                    "providers_id": 49,
                    "appointment_statuses_id": 5,
                    "date_of_service": {
                        "date": "08\/09\/2023",
                        "time": "11:00 AM",
                        "text": "08\/09\/2023 (Last Minute Cancel by Patient)",
                        "value": 312343
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 5,
                        "status": "Last Minute Cancel by Patient"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 15642,
                "status_id": 4,
                "first_name": "Scott",
                "last_name": "Salavitch",
                "last_appointment_id": 311736,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 311736,
                    "time": 1690992000,
                    "providers_id": 80,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "08\/02\/2023",
                        "time": "9:00 AM",
                        "text": "08\/02\/2023 (Visit Created)",
                        "value": 311736
                    },
                    "provider": {
                        "id": 80,
                        "provider_name": "Ashley Pezeshkifar, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 15656,
                "status_id": 4,
                "first_name": "Jacob",
                "last_name": "Phillips",
                "last_appointment_id": 313217,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 313217,
                    "time": 1691618400,
                    "providers_id": 233,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "08\/09\/2023",
                        "time": "3:00 PM",
                        "text": "08\/09\/2023 (Patient Did Not Come)",
                        "value": 313217
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            },
            {
                "id": 15669,
                "status_id": 4,
                "first_name": "Valerie",
                "last_name": "Alcazar",
                "last_appointment_id": 312809,
                "appointments_count": 12,
                "last_appointment": {
                    "id": 312809,
                    "time": 1697576400,
                    "providers_id": 76,
                    "appointment_statuses_id": 8,
                    "date_of_service": {
                        "date": "10\/17\/2023",
                        "time": "2:00 PM",
                        "text": "10\/17\/2023 (Active)",
                        "value": 312809
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 8,
                        "status": "Active"
                    }
                },
                "status": {
                    "id": 4,
                    "status": "Inactive",
                    "hex_color": "d09b00"
                }
            }
        ],
        "meta": {
            "count": 82
        }
    },
    "lost_patients": {
        "data": [
            {
                "id": 2174,
                "status_id": 3,
                "first_name": "Abc-6",
                "last_name": "Xyz-6",
                "last_appointment_id": 318005,
                "appointments_count": 16,
                "last_appointment": {
                    "id": 318005,
                    "time": 1693490400,
                    "providers_id": 28,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "08\/31\/2023",
                        "time": "7:00 AM",
                        "text": "08\/31\/2023 (Cancelled by Patient)",
                        "value": 318005
                    },
                    "provider": {
                        "id": 28,
                        "provider_name": "Xyz Test"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 2582,
                "status_id": 3,
                "first_name": "Abc-4",
                "last_name": "Xyz-4",
                "last_appointment_id": 314605,
                "appointments_count": 48,
                "last_appointment": {
                    "id": 314605,
                    "time": 1691762400,
                    "providers_id": 28,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "08\/11\/2023",
                        "time": "7:00 AM",
                        "text": "08\/11\/2023 (Cancelled by Patient)",
                        "value": 314605
                    },
                    "provider": {
                        "id": 28,
                        "provider_name": "Xyz Test"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 4208,
                "status_id": 3,
                "first_name": "Paul",
                "last_name": "Kosty",
                "last_appointment_id": 296978,
                "appointments_count": 65,
                "last_appointment": {
                    "id": 296978,
                    "time": 1682103600,
                    "providers_id": 233,
                    "appointment_statuses_id": 2,
                    "date_of_service": {
                        "date": "04\/21\/2023",
                        "time": "12:00 PM",
                        "text": "04\/21\/2023 (Rescheduled)",
                        "value": 296978
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 2,
                        "status": "Rescheduled"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 4530,
                "status_id": 3,
                "first_name": "Jasmine",
                "last_name": "Ryan",
                "last_appointment_id": 298256,
                "appointments_count": 127,
                "last_appointment": {
                    "id": 298256,
                    "time": 1682524800,
                    "providers_id": 240,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "04\/26\/2023",
                        "time": "9:00 AM",
                        "text": "04\/26\/2023 (Visit Created)",
                        "value": 298256
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 4531,
                "status_id": 3,
                "first_name": "Mary",
                "last_name": "Blad",
                "last_appointment_id": 297580,
                "appointments_count": 215,
                "last_appointment": {
                    "id": 297580,
                    "time": 1682528400,
                    "providers_id": 76,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "04\/26\/2023",
                        "time": "10:00 AM",
                        "text": "04\/26\/2023 (Cancelled by Patient)",
                        "value": 297580
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 4909,
                "status_id": 3,
                "first_name": "Susan",
                "last_name": "Rem",
                "last_appointment_id": 290865,
                "appointments_count": 331,
                "last_appointment": {
                    "id": 290865,
                    "time": 1681426800,
                    "providers_id": 53,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "04\/13\/2023",
                        "time": "4:00 PM",
                        "text": "04\/13\/2023 (Cancelled by Patient)",
                        "value": 290865
                    },
                    "provider": {
                        "id": 53,
                        "provider_name": "Jennifer Frank, PhD"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 5094,
                "status_id": 3,
                "first_name": "Katie-Lee",
                "last_name": "Baker",
                "last_appointment_id": 317229,
                "appointments_count": 41,
                "last_appointment": {
                    "id": 317229,
                    "time": 1699473600,
                    "providers_id": 49,
                    "appointment_statuses_id": 8,
                    "date_of_service": {
                        "date": "11\/08\/2023",
                        "time": "12:00 PM",
                        "text": "11\/08\/2023 (Active)",
                        "value": 317229
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 8,
                        "status": "Active"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 5159,
                "status_id": 3,
                "first_name": "Kymberli",
                "last_name": "Hall",
                "last_appointment_id": 291864,
                "appointments_count": 82,
                "last_appointment": {
                    "id": 291864,
                    "time": 1681347600,
                    "providers_id": 65,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "04\/12\/2023",
                        "time": "6:00 PM",
                        "text": "04\/12\/2023 (Visit Created)",
                        "value": 291864
                    },
                    "provider": {
                        "id": 65,
                        "provider_name": "Devorah Teyer, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 5739,
                "status_id": 3,
                "first_name": "Shirley",
                "last_name": "Scopelitis",
                "last_appointment_id": 293706,
                "appointments_count": 43,
                "last_appointment": {
                    "id": 293706,
                    "time": 1681174800,
                    "providers_id": 267,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "04\/10\/2023",
                        "time": "6:00 PM",
                        "text": "04\/10\/2023 (Visit Created)",
                        "value": 293706
                    },
                    "provider": {
                        "id": 267,
                        "provider_name": "Miriam Lamb, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 7134,
                "status_id": 3,
                "first_name": "Karen",
                "last_name": "Simington",
                "last_appointment_id": 295305,
                "appointments_count": 71,
                "last_appointment": {
                    "id": 295305,
                    "time": 1682622000,
                    "providers_id": 49,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "04\/27\/2023",
                        "time": "12:00 PM",
                        "text": "04\/27\/2023 (Visit Created)",
                        "value": 295305
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 7211,
                "status_id": 3,
                "first_name": "Rory",
                "last_name": "Cohen",
                "last_appointment_id": 303356,
                "appointments_count": 70,
                "last_appointment": {
                    "id": 303356,
                    "time": 1685826000,
                    "providers_id": 274,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "06\/03\/2023",
                        "time": "2:00 PM",
                        "text": "06\/03\/2023 (Patient Did Not Come)",
                        "value": 303356
                    },
                    "provider": {
                        "id": 274,
                        "provider_name": "Melanie Lapeyrolerie, LCSW"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 7298,
                "status_id": 3,
                "first_name": "Marco",
                "last_name": "Fekrat",
                "last_appointment_id": 298797,
                "appointments_count": 156,
                "last_appointment": {
                    "id": 298797,
                    "time": 1682694000,
                    "providers_id": 80,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "04\/28\/2023",
                        "time": "8:00 AM",
                        "text": "04\/28\/2023 (Visit Created)",
                        "value": 298797
                    },
                    "provider": {
                        "id": 80,
                        "provider_name": "Ashley Pezeshkifar, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 7513,
                "status_id": 3,
                "first_name": "Fernando",
                "last_name": "Gaytan",
                "last_appointment_id": 291966,
                "appointments_count": 167,
                "last_appointment": {
                    "id": 291966,
                    "time": 1679018400,
                    "providers_id": 78,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "03\/16\/2023",
                        "time": "7:00 PM",
                        "text": "03\/16\/2023 (Visit Created)",
                        "value": 291966
                    },
                    "provider": {
                        "id": 78,
                        "provider_name": "Scott Ben-Yashar, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 7992,
                "status_id": 3,
                "first_name": "Samantha",
                "last_name": "Majano",
                "last_appointment_id": 301237,
                "appointments_count": 65,
                "last_appointment": {
                    "id": 301237,
                    "time": 1684864800,
                    "providers_id": 49,
                    "appointment_statuses_id": 2,
                    "date_of_service": {
                        "date": "05\/23\/2023",
                        "time": "11:00 AM",
                        "text": "05\/23\/2023 (Rescheduled)",
                        "value": 301237
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 2,
                        "status": "Rescheduled"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 8162,
                "status_id": 3,
                "first_name": "Jariel",
                "last_name": "Milton",
                "last_appointment_id": 319778,
                "appointments_count": 141,
                "last_appointment": {
                    "id": 319778,
                    "time": 1695236400,
                    "providers_id": 1,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "09\/20\/2023",
                        "time": "12:00 PM",
                        "text": "09\/20\/2023 (Cancelled by Provider)",
                        "value": 319778
                    },
                    "provider": {
                        "id": 1,
                        "provider_name": "William Kaiser, PhD"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 8274,
                "status_id": 3,
                "first_name": "Joan",
                "last_name": "Robles",
                "last_appointment_id": 299547,
                "appointments_count": 85,
                "last_appointment": {
                    "id": 299547,
                    "time": 1683248400,
                    "providers_id": 215,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "05\/04\/2023",
                        "time": "6:00 PM",
                        "text": "05\/04\/2023 (Cancelled by Patient)",
                        "value": 299547
                    },
                    "provider": {
                        "id": 215,
                        "provider_name": "Parvin Jahanpanah, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 8581,
                "status_id": 3,
                "first_name": "Max",
                "last_name": "Ashford",
                "last_appointment_id": 308176,
                "appointments_count": 144,
                "last_appointment": {
                    "id": 308176,
                    "time": 1688432400,
                    "providers_id": 78,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "07\/03\/2023",
                        "time": "6:00 PM",
                        "text": "07\/03\/2023 (Patient Did Not Come)",
                        "value": 308176
                    },
                    "provider": {
                        "id": 78,
                        "provider_name": "Scott Ben-Yashar, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 8602,
                "status_id": 3,
                "first_name": "Javier",
                "last_name": "Benavente",
                "last_appointment_id": 293836,
                "appointments_count": 123,
                "last_appointment": {
                    "id": 293836,
                    "time": 1679972400,
                    "providers_id": 78,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "03\/27\/2023",
                        "time": "8:00 PM",
                        "text": "03\/27\/2023 (Visit Created)",
                        "value": 293836
                    },
                    "provider": {
                        "id": 78,
                        "provider_name": "Scott Ben-Yashar, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 8748,
                "status_id": 3,
                "first_name": "Mandana",
                "last_name": "Moshtael",
                "last_appointment_id": 293786,
                "appointments_count": 46,
                "last_appointment": {
                    "id": 293786,
                    "time": 1679940000,
                    "providers_id": 20,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "03\/27\/2023",
                        "time": "11:00 AM",
                        "text": "03\/27\/2023 (Visit Created)",
                        "value": 293786
                    },
                    "provider": {
                        "id": 20,
                        "provider_name": "Fariba Kooklan, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 8827,
                "status_id": 3,
                "first_name": "Adiah",
                "last_name": "Ruvalcaba",
                "last_appointment_id": 311413,
                "appointments_count": 37,
                "last_appointment": {
                    "id": 311413,
                    "time": 1690992000,
                    "providers_id": 218,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/02\/2023",
                        "time": "9:00 AM",
                        "text": "08\/02\/2023 (Cancelled by Provider)",
                        "value": 311413
                    },
                    "provider": {
                        "id": 218,
                        "provider_name": "Kerry McLean, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 8957,
                "status_id": 3,
                "first_name": "Traci",
                "last_name": "Ehrlich",
                "last_appointment_id": 307469,
                "appointments_count": 106,
                "last_appointment": {
                    "id": 307469,
                    "time": 1688000400,
                    "providers_id": 222,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "06\/28\/2023",
                        "time": "6:00 PM",
                        "text": "06\/28\/2023 (Patient Did Not Come)",
                        "value": 307469
                    },
                    "provider": {
                        "id": 222,
                        "provider_name": "Tianna Januzik, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 9085,
                "status_id": 3,
                "first_name": "Michelle",
                "last_name": "Deluya",
                "last_appointment_id": 299909,
                "appointments_count": 4,
                "last_appointment": {
                    "id": 299909,
                    "time": 1683302400,
                    "providers_id": 268,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "05\/05\/2023",
                        "time": "9:00 AM",
                        "text": "05\/05\/2023 (Patient Did Not Come)",
                        "value": 299909
                    },
                    "provider": {
                        "id": 268,
                        "provider_name": "Dana Rosen, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 9367,
                "status_id": 3,
                "first_name": "Artina",
                "last_name": "Tarokh",
                "last_appointment_id": 297745,
                "appointments_count": 119,
                "last_appointment": {
                    "id": 297745,
                    "time": 1686193200,
                    "providers_id": 53,
                    "appointment_statuses_id": 10,
                    "date_of_service": {
                        "date": "06\/07\/2023",
                        "time": "8:00 PM",
                        "text": "06\/07\/2023 (Cancelled by Office)",
                        "value": 297745
                    },
                    "provider": {
                        "id": 53,
                        "provider_name": "Jennifer Frank, PhD"
                    },
                    "status": {
                        "id": 10,
                        "status": "Cancelled by Office"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 9502,
                "status_id": 3,
                "first_name": "Herman",
                "last_name": "Marcial",
                "last_appointment_id": 292934,
                "appointments_count": 107,
                "last_appointment": {
                    "id": 292934,
                    "time": 1681930800,
                    "providers_id": 231,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "04\/19\/2023",
                        "time": "12:00 PM",
                        "text": "04\/19\/2023 (Cancelled by Provider)",
                        "value": 292934
                    },
                    "provider": {
                        "id": 231,
                        "provider_name": "Tracey St. Johns, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 9732,
                "status_id": 3,
                "first_name": "Jorge",
                "last_name": "Romero",
                "last_appointment_id": 303653,
                "appointments_count": 105,
                "last_appointment": {
                    "id": 303653,
                    "time": 1685667600,
                    "providers_id": 78,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "06\/01\/2023",
                        "time": "6:00 PM",
                        "text": "06\/01\/2023 (Patient Did Not Come)",
                        "value": 303653
                    },
                    "provider": {
                        "id": 78,
                        "provider_name": "Scott Ben-Yashar, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 9771,
                "status_id": 3,
                "first_name": "Sandra",
                "last_name": "Custodio",
                "last_appointment_id": 296942,
                "appointments_count": 26,
                "last_appointment": {
                    "id": 296942,
                    "time": 1682802000,
                    "providers_id": 49,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "04\/29\/2023",
                        "time": "2:00 PM",
                        "text": "04\/29\/2023 (Cancelled by Patient)",
                        "value": 296942
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 9900,
                "status_id": 3,
                "first_name": "Afsaneh",
                "last_name": "Feyzjou",
                "last_appointment_id": 300364,
                "appointments_count": 80,
                "last_appointment": {
                    "id": 300364,
                    "time": 1683738000,
                    "providers_id": 20,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "05\/10\/2023",
                        "time": "10:00 AM",
                        "text": "05\/10\/2023 (Cancelled by Provider)",
                        "value": 300364
                    },
                    "provider": {
                        "id": 20,
                        "provider_name": "Fariba Kooklan, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 10141,
                "status_id": 3,
                "first_name": "Gisele",
                "last_name": "Galeana",
                "last_appointment_id": 299472,
                "appointments_count": 53,
                "last_appointment": {
                    "id": 299472,
                    "time": 1686088800,
                    "providers_id": 240,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/06\/2023",
                        "time": "3:00 PM",
                        "text": "06\/06\/2023 (Visit Created)",
                        "value": 299472
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 10445,
                "status_id": 3,
                "first_name": "Mia",
                "last_name": "Alvarez",
                "last_appointment_id": 291240,
                "appointments_count": 51,
                "last_appointment": {
                    "id": 291240,
                    "time": 1680829200,
                    "providers_id": 267,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "04\/06\/2023",
                        "time": "6:00 PM",
                        "text": "04\/06\/2023 (Visit Created)",
                        "value": 291240
                    },
                    "provider": {
                        "id": 267,
                        "provider_name": "Miriam Lamb, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 10549,
                "status_id": 3,
                "first_name": "Tomina",
                "last_name": "Bridwell",
                "last_appointment_id": 292286,
                "appointments_count": 21,
                "last_appointment": {
                    "id": 292286,
                    "time": 1680364800,
                    "providers_id": 218,
                    "appointment_statuses_id": 9,
                    "date_of_service": {
                        "date": "04\/01\/2023",
                        "time": "9:00 AM",
                        "text": "04\/01\/2023 (Last Minute Reschedule)",
                        "value": 292286
                    },
                    "provider": {
                        "id": 218,
                        "provider_name": "Kerry McLean, LMFT"
                    },
                    "status": {
                        "id": 9,
                        "status": "Last Minute Reschedule"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 10860,
                "status_id": 3,
                "first_name": "Caitlyn",
                "last_name": "Hernandez",
                "last_appointment_id": 292632,
                "appointments_count": 48,
                "last_appointment": {
                    "id": 292632,
                    "time": 1679871600,
                    "providers_id": 244,
                    "appointment_statuses_id": 9,
                    "date_of_service": {
                        "date": "03\/26\/2023",
                        "time": "4:00 PM",
                        "text": "03\/26\/2023 (Last Minute Reschedule)",
                        "value": 292632
                    },
                    "provider": {
                        "id": 244,
                        "provider_name": "Marisa Caratachea, LMFT"
                    },
                    "status": {
                        "id": 9,
                        "status": "Last Minute Reschedule"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 11440,
                "status_id": 3,
                "first_name": "Enrique",
                "last_name": "Orozco Constantino",
                "last_appointment_id": 203928,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 203928,
                    "time": 1634749200,
                    "providers_id": 240,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "10\/20\/2021",
                        "time": "10:00 AM",
                        "text": "10\/20\/2021 (Visit Created)",
                        "value": 203928
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 11620,
                "status_id": 3,
                "first_name": "Allison",
                "last_name": "Bogeaus",
                "last_appointment_id": 310150,
                "appointments_count": 16,
                "last_appointment": {
                    "id": 310150,
                    "time": 1689800400,
                    "providers_id": 233,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "07\/19\/2023",
                        "time": "2:00 PM",
                        "text": "07\/19\/2023 (Cancelled by Provider)",
                        "value": 310150
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 11651,
                "status_id": 3,
                "first_name": "Eslim",
                "last_name": "Salazar",
                "last_appointment_id": 295308,
                "appointments_count": 18,
                "last_appointment": {
                    "id": 295308,
                    "time": 1681142400,
                    "providers_id": 65,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "04\/10\/2023",
                        "time": "9:00 AM",
                        "text": "04\/10\/2023 (Visit Created)",
                        "value": 295308
                    },
                    "provider": {
                        "id": 65,
                        "provider_name": "Devorah Teyer, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 12097,
                "status_id": 3,
                "first_name": "Sebastian",
                "last_name": "Yanez",
                "last_appointment_id": 313302,
                "appointments_count": 18,
                "last_appointment": {
                    "id": 313302,
                    "time": 1691550000,
                    "providers_id": 233,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/08\/2023",
                        "time": "8:00 PM",
                        "text": "08\/08\/2023 (Cancelled by Provider)",
                        "value": 313302
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 12147,
                "status_id": 3,
                "first_name": "Maxwell",
                "last_name": "Nadsady",
                "last_appointment_id": 290107,
                "appointments_count": 63,
                "last_appointment": {
                    "id": 290107,
                    "time": 1681570800,
                    "providers_id": 211,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "04\/15\/2023",
                        "time": "8:00 AM",
                        "text": "04\/15\/2023 (Cancelled by Patient)",
                        "value": 290107
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 12562,
                "status_id": 3,
                "first_name": "Matthew",
                "last_name": "Clark",
                "last_appointment_id": 291948,
                "appointments_count": 46,
                "last_appointment": {
                    "id": 291948,
                    "time": 1683079200,
                    "providers_id": 53,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "05\/02\/2023",
                        "time": "7:00 PM",
                        "text": "05\/02\/2023 (Cancelled by Patient)",
                        "value": 291948
                    },
                    "provider": {
                        "id": 53,
                        "provider_name": "Jennifer Frank, PhD"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 12637,
                "status_id": 3,
                "first_name": "Cheyenne",
                "last_name": "Catalano",
                "last_appointment_id": 297436,
                "appointments_count": 66,
                "last_appointment": {
                    "id": 297436,
                    "time": 1686171600,
                    "providers_id": 211,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "06\/07\/2023",
                        "time": "2:00 PM",
                        "text": "06\/07\/2023 (Cancelled by Patient)",
                        "value": 297436
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 12930,
                "status_id": 3,
                "first_name": "Natalia",
                "last_name": "Cervera",
                "last_appointment_id": 300129,
                "appointments_count": 53,
                "last_appointment": {
                    "id": 300129,
                    "time": 1686880800,
                    "providers_id": 212,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "06\/15\/2023",
                        "time": "7:00 PM",
                        "text": "06\/15\/2023 (Cancelled by Provider)",
                        "value": 300129
                    },
                    "provider": {
                        "id": 212,
                        "provider_name": "Monica Lang, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13335,
                "status_id": 3,
                "first_name": "Tanlee",
                "last_name": "Gaspar",
                "last_appointment_id": 321912,
                "appointments_count": 34,
                "last_appointment": {
                    "id": 321912,
                    "time": 1698688800,
                    "providers_id": 233,
                    "appointment_statuses_id": 8,
                    "date_of_service": {
                        "date": "10\/30\/2023",
                        "time": "11:00 AM",
                        "text": "10\/30\/2023 (Active)",
                        "value": 321912
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 8,
                        "status": "Active"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13350,
                "status_id": 3,
                "first_name": "Bao",
                "last_name": "Wong",
                "last_appointment_id": 266462,
                "appointments_count": 46,
                "last_appointment": {
                    "id": 266462,
                    "time": 1698976800,
                    "providers_id": 211,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "11\/02\/2023",
                        "time": "7:00 PM",
                        "text": "11\/02\/2023 (Cancelled by Provider)",
                        "value": 266462
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13357,
                "status_id": 3,
                "first_name": "Wendi",
                "last_name": "Field",
                "last_appointment_id": 304905,
                "appointments_count": 36,
                "last_appointment": {
                    "id": 304905,
                    "time": 1686848400,
                    "providers_id": 233,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "06\/15\/2023",
                        "time": "10:00 AM",
                        "text": "06\/15\/2023 (Cancelled by Provider)",
                        "value": 304905
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13472,
                "status_id": 3,
                "first_name": "Jason",
                "last_name": "Childress",
                "last_appointment_id": 297419,
                "appointments_count": 60,
                "last_appointment": {
                    "id": 297419,
                    "time": 1682629200,
                    "providers_id": 233,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "04\/27\/2023",
                        "time": "2:00 PM",
                        "text": "04\/27\/2023 (Patient Did Not Come)",
                        "value": 297419
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13474,
                "status_id": 3,
                "first_name": "Donald",
                "last_name": "Arceneaux",
                "last_appointment_id": 280756,
                "appointments_count": 54,
                "last_appointment": {
                    "id": 280756,
                    "time": 1684278000,
                    "providers_id": 267,
                    "appointment_statuses_id": 10,
                    "date_of_service": {
                        "date": "05\/16\/2023",
                        "time": "4:00 PM",
                        "text": "05\/16\/2023 (Cancelled by Office)",
                        "value": 280756
                    },
                    "provider": {
                        "id": 267,
                        "provider_name": "Miriam Lamb, LMFT"
                    },
                    "status": {
                        "id": 10,
                        "status": "Cancelled by Office"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13587,
                "status_id": 3,
                "first_name": "Jude",
                "last_name": "Chau",
                "last_appointment_id": 303137,
                "appointments_count": 34,
                "last_appointment": {
                    "id": 303137,
                    "time": 1686502800,
                    "providers_id": 233,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "06\/11\/2023",
                        "time": "10:00 AM",
                        "text": "06\/11\/2023 (Patient Did Not Come)",
                        "value": 303137
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13687,
                "status_id": 3,
                "first_name": "Travis",
                "last_name": "Nguyen",
                "last_appointment_id": 299549,
                "appointments_count": 28,
                "last_appointment": {
                    "id": 299549,
                    "time": 1685552400,
                    "providers_id": 78,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "05\/31\/2023",
                        "time": "10:00 AM",
                        "text": "05\/31\/2023 (Visit Created)",
                        "value": 299549
                    },
                    "provider": {
                        "id": 78,
                        "provider_name": "Scott Ben-Yashar, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13777,
                "status_id": 3,
                "first_name": "Katherine",
                "last_name": "Tsao",
                "last_appointment_id": 301517,
                "appointments_count": 37,
                "last_appointment": {
                    "id": 301517,
                    "time": 1686265200,
                    "providers_id": 212,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "06\/08\/2023",
                        "time": "4:00 PM",
                        "text": "06\/08\/2023 (Cancelled by Provider)",
                        "value": 301517
                    },
                    "provider": {
                        "id": 212,
                        "provider_name": "Monica Lang, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13799,
                "status_id": 3,
                "first_name": "Jorge",
                "last_name": "Bautista",
                "last_appointment_id": 291327,
                "appointments_count": 27,
                "last_appointment": {
                    "id": 291327,
                    "time": 1681059600,
                    "providers_id": 267,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "04\/09\/2023",
                        "time": "10:00 AM",
                        "text": "04\/09\/2023 (Cancelled by Provider)",
                        "value": 291327
                    },
                    "provider": {
                        "id": 267,
                        "provider_name": "Miriam Lamb, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13838,
                "status_id": 3,
                "first_name": "Katie",
                "last_name": "Son",
                "last_appointment_id": 293087,
                "appointments_count": 31,
                "last_appointment": {
                    "id": 293087,
                    "time": 1685124000,
                    "providers_id": 268,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "05\/26\/2023",
                        "time": "11:00 AM",
                        "text": "05\/26\/2023 (Cancelled by Patient)",
                        "value": 293087
                    },
                    "provider": {
                        "id": 268,
                        "provider_name": "Dana Rosen, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13863,
                "status_id": 3,
                "first_name": "Divvjyot",
                "last_name": "Singh",
                "last_appointment_id": 287641,
                "appointments_count": 29,
                "last_appointment": {
                    "id": 287641,
                    "time": 1685030400,
                    "providers_id": 211,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "05\/25\/2023",
                        "time": "9:00 AM",
                        "text": "05\/25\/2023 (Cancelled by Provider)",
                        "value": 287641
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13882,
                "status_id": 3,
                "first_name": "Amanda",
                "last_name": "Ashley",
                "last_appointment_id": 300666,
                "appointments_count": 31,
                "last_appointment": {
                    "id": 300666,
                    "time": 1684893600,
                    "providers_id": 20,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "05\/23\/2023",
                        "time": "7:00 PM",
                        "text": "05\/23\/2023 (Cancelled by Provider)",
                        "value": 300666
                    },
                    "provider": {
                        "id": 20,
                        "provider_name": "Fariba Kooklan, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13883,
                "status_id": 3,
                "first_name": "Emily",
                "last_name": "Duenas",
                "last_appointment_id": 292675,
                "appointments_count": 32,
                "last_appointment": {
                    "id": 292675,
                    "time": 1682989200,
                    "providers_id": 211,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "05\/01\/2023",
                        "time": "6:00 PM",
                        "text": "05\/01\/2023 (Cancelled by Patient)",
                        "value": 292675
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13923,
                "status_id": 3,
                "first_name": "Jessica",
                "last_name": "Monroe",
                "last_appointment_id": 292839,
                "appointments_count": 28,
                "last_appointment": {
                    "id": 292839,
                    "time": 1680890400,
                    "providers_id": 267,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "04\/07\/2023",
                        "time": "11:00 AM",
                        "text": "04\/07\/2023 (Cancelled by Provider)",
                        "value": 292839
                    },
                    "provider": {
                        "id": 267,
                        "provider_name": "Miriam Lamb, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 13933,
                "status_id": 3,
                "first_name": "Kasey",
                "last_name": "Hornberger",
                "last_appointment_id": 307481,
                "appointments_count": 35,
                "last_appointment": {
                    "id": 307481,
                    "time": 1689267600,
                    "providers_id": 269,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "07\/13\/2023",
                        "time": "10:00 AM",
                        "text": "07\/13\/2023 (Cancelled by Patient)",
                        "value": 307481
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14076,
                "status_id": 3,
                "first_name": "Jonathan",
                "last_name": "Arsht",
                "last_appointment_id": 295038,
                "appointments_count": 12,
                "last_appointment": {
                    "id": 295038,
                    "time": 1682035200,
                    "providers_id": 269,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "04\/20\/2023",
                        "time": "5:00 PM",
                        "text": "04\/20\/2023 (Cancelled by Provider)",
                        "value": 295038
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14106,
                "status_id": 3,
                "first_name": "Rekala",
                "last_name": "Ross",
                "last_appointment_id": 298563,
                "appointments_count": 30,
                "last_appointment": {
                    "id": 298563,
                    "time": 1686168000,
                    "providers_id": 211,
                    "appointment_statuses_id": 10,
                    "date_of_service": {
                        "date": "06\/07\/2023",
                        "time": "1:00 PM",
                        "text": "06\/07\/2023 (Cancelled by Office)",
                        "value": 298563
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 10,
                        "status": "Cancelled by Office"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14128,
                "status_id": 3,
                "first_name": "Leilani",
                "last_name": "Viveros",
                "last_appointment_id": 295067,
                "appointments_count": 25,
                "last_appointment": {
                    "id": 295067,
                    "time": 1684800000,
                    "providers_id": 269,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "05\/22\/2023",
                        "time": "5:00 PM",
                        "text": "05\/22\/2023 (Cancelled by Provider)",
                        "value": 295067
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14274,
                "status_id": 3,
                "first_name": "Mehdi",
                "last_name": "Akbarmolaei",
                "last_appointment_id": 298107,
                "appointments_count": 5,
                "last_appointment": {
                    "id": 298107,
                    "time": 1682377200,
                    "providers_id": 20,
                    "appointment_statuses_id": 2,
                    "date_of_service": {
                        "date": "04\/24\/2023",
                        "time": "4:00 PM",
                        "text": "04\/24\/2023 (Rescheduled)",
                        "value": 298107
                    },
                    "provider": {
                        "id": 20,
                        "provider_name": "Fariba Kooklan, LMFT"
                    },
                    "status": {
                        "id": 2,
                        "status": "Rescheduled"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14304,
                "status_id": 3,
                "first_name": "Tess",
                "last_name": "Harmon",
                "last_appointment_id": 296584,
                "appointments_count": 15,
                "last_appointment": {
                    "id": 296584,
                    "time": 1684195200,
                    "providers_id": 269,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "05\/15\/2023",
                        "time": "5:00 PM",
                        "text": "05\/15\/2023 (Cancelled by Provider)",
                        "value": 296584
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14362,
                "status_id": 3,
                "first_name": "Gwen",
                "last_name": "Doroteo",
                "last_appointment_id": 278068,
                "appointments_count": 27,
                "last_appointment": {
                    "id": 278068,
                    "time": 1683676800,
                    "providers_id": 267,
                    "appointment_statuses_id": 10,
                    "date_of_service": {
                        "date": "05\/09\/2023",
                        "time": "5:00 PM",
                        "text": "05\/09\/2023 (Cancelled by Office)",
                        "value": 278068
                    },
                    "provider": {
                        "id": 267,
                        "provider_name": "Miriam Lamb, LMFT"
                    },
                    "status": {
                        "id": 10,
                        "status": "Cancelled by Office"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14433,
                "status_id": 3,
                "first_name": "Evelyn",
                "last_name": "Raygoza",
                "last_appointment_id": 301122,
                "appointments_count": 16,
                "last_appointment": {
                    "id": 301122,
                    "time": 1686006000,
                    "providers_id": 269,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/05\/2023",
                        "time": "4:00 PM",
                        "text": "06\/05\/2023 (Visit Created)",
                        "value": 301122
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14450,
                "status_id": 3,
                "first_name": "Phillip",
                "last_name": "Klein",
                "last_appointment_id": 294580,
                "appointments_count": 12,
                "last_appointment": {
                    "id": 294580,
                    "time": 1680922800,
                    "providers_id": 53,
                    "appointment_statuses_id": 5,
                    "date_of_service": {
                        "date": "04\/07\/2023",
                        "time": "8:00 PM",
                        "text": "04\/07\/2023 (Last Minute Cancel by Patient)",
                        "value": 294580
                    },
                    "provider": {
                        "id": 53,
                        "provider_name": "Jennifer Frank, PhD"
                    },
                    "status": {
                        "id": 5,
                        "status": "Last Minute Cancel by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14494,
                "status_id": 3,
                "first_name": "Ava",
                "last_name": "Torres",
                "last_appointment_id": 292712,
                "appointments_count": 10,
                "last_appointment": {
                    "id": 292712,
                    "time": 1679949000,
                    "providers_id": 218,
                    "appointment_statuses_id": 2,
                    "date_of_service": {
                        "date": "03\/27\/2023",
                        "time": "1:30 PM",
                        "text": "03\/27\/2023 (Rescheduled)",
                        "value": 292712
                    },
                    "provider": {
                        "id": 218,
                        "provider_name": "Kerry McLean, LMFT"
                    },
                    "status": {
                        "id": 2,
                        "status": "Rescheduled"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14500,
                "status_id": 3,
                "first_name": "Vania",
                "last_name": "Molina",
                "last_appointment_id": 291820,
                "appointments_count": 7,
                "last_appointment": {
                    "id": 291820,
                    "time": 1679500800,
                    "providers_id": 218,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "03\/22\/2023",
                        "time": "9:00 AM",
                        "text": "03\/22\/2023 (Patient Did Not Come)",
                        "value": 291820
                    },
                    "provider": {
                        "id": 218,
                        "provider_name": "Kerry McLean, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14507,
                "status_id": 3,
                "first_name": "Raul",
                "last_name": "Perez",
                "last_appointment_id": 322676,
                "appointments_count": 16,
                "last_appointment": {
                    "id": 322676,
                    "time": 1696014000,
                    "providers_id": 83,
                    "appointment_statuses_id": 5,
                    "date_of_service": {
                        "date": "09\/29\/2023",
                        "time": "12:00 PM",
                        "text": "09\/29\/2023 (Last Minute Cancel by Patient)",
                        "value": 322676
                    },
                    "provider": {
                        "id": 83,
                        "provider_name": "Shyda Massih, LMFT"
                    },
                    "status": {
                        "id": 5,
                        "status": "Last Minute Cancel by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14514,
                "status_id": 3,
                "first_name": "Kirsten",
                "last_name": "Blue",
                "last_appointment_id": 295313,
                "appointments_count": 10,
                "last_appointment": {
                    "id": 295313,
                    "time": 1681153200,
                    "providers_id": 218,
                    "appointment_statuses_id": 5,
                    "date_of_service": {
                        "date": "04\/10\/2023",
                        "time": "12:00 PM",
                        "text": "04\/10\/2023 (Last Minute Cancel by Patient)",
                        "value": 295313
                    },
                    "provider": {
                        "id": 218,
                        "provider_name": "Kerry McLean, LMFT"
                    },
                    "status": {
                        "id": 5,
                        "status": "Last Minute Cancel by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14527,
                "status_id": 3,
                "first_name": "Eli",
                "last_name": "White",
                "last_appointment_id": 303937,
                "appointments_count": 10,
                "last_appointment": {
                    "id": 303937,
                    "time": 1687197600,
                    "providers_id": 218,
                    "appointment_statuses_id": 9,
                    "date_of_service": {
                        "date": "06\/19\/2023",
                        "time": "11:00 AM",
                        "text": "06\/19\/2023 (Last Minute Reschedule)",
                        "value": 303937
                    },
                    "provider": {
                        "id": 218,
                        "provider_name": "Kerry McLean, LMFT"
                    },
                    "status": {
                        "id": 9,
                        "status": "Last Minute Reschedule"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14553,
                "status_id": 3,
                "first_name": "Kate",
                "last_name": "Hernandez Letona",
                "last_appointment_id": 291832,
                "appointments_count": 19,
                "last_appointment": {
                    "id": 291832,
                    "time": 1681351200,
                    "providers_id": 267,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "04\/12\/2023",
                        "time": "7:00 PM",
                        "text": "04\/12\/2023 (Cancelled by Provider)",
                        "value": 291832
                    },
                    "provider": {
                        "id": 267,
                        "provider_name": "Miriam Lamb, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14574,
                "status_id": 3,
                "first_name": "Caitlyn",
                "last_name": "Coleman",
                "last_appointment_id": 289098,
                "appointments_count": 15,
                "last_appointment": {
                    "id": 289098,
                    "time": 1681750800,
                    "providers_id": 211,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "04\/17\/2023",
                        "time": "10:00 AM",
                        "text": "04\/17\/2023 (Cancelled by Patient)",
                        "value": 289098
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14584,
                "status_id": 3,
                "first_name": "Hunter",
                "last_name": "Ricci",
                "last_appointment_id": 298637,
                "appointments_count": 8,
                "last_appointment": {
                    "id": 298637,
                    "time": 1682618400,
                    "providers_id": 83,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "04\/27\/2023",
                        "time": "11:00 AM",
                        "text": "04\/27\/2023 (Visit Created)",
                        "value": 298637
                    },
                    "provider": {
                        "id": 83,
                        "provider_name": "Shyda Massih, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14585,
                "status_id": 3,
                "first_name": "Morgan",
                "last_name": "West",
                "last_appointment_id": 299340,
                "appointments_count": 18,
                "last_appointment": {
                    "id": 299340,
                    "time": 1687831200,
                    "providers_id": 240,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "06\/26\/2023",
                        "time": "7:00 PM",
                        "text": "06\/26\/2023 (Cancelled by Provider)",
                        "value": 299340
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14609,
                "status_id": 3,
                "first_name": "Janelle",
                "last_name": "Melton",
                "last_appointment_id": 289984,
                "appointments_count": 11,
                "last_appointment": {
                    "id": 289984,
                    "time": 1680231600,
                    "providers_id": 53,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "03\/30\/2023",
                        "time": "8:00 PM",
                        "text": "03\/30\/2023 (Cancelled by Patient)",
                        "value": 289984
                    },
                    "provider": {
                        "id": 53,
                        "provider_name": "Jennifer Frank, PhD"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14633,
                "status_id": 3,
                "first_name": "Brianna",
                "last_name": "Sheldon",
                "last_appointment_id": 292571,
                "appointments_count": 6,
                "last_appointment": {
                    "id": 292571,
                    "time": 1680904800,
                    "providers_id": 267,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "04\/07\/2023",
                        "time": "3:00 PM",
                        "text": "04\/07\/2023 (Visit Created)",
                        "value": 292571
                    },
                    "provider": {
                        "id": 267,
                        "provider_name": "Miriam Lamb, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14645,
                "status_id": 3,
                "first_name": "Shally",
                "last_name": "Villanueva",
                "last_appointment_id": 285336,
                "appointments_count": 8,
                "last_appointment": {
                    "id": 285336,
                    "time": 1679504400,
                    "providers_id": 211,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "03\/22\/2023",
                        "time": "10:00 AM",
                        "text": "03\/22\/2023 (Visit Created)",
                        "value": 285336
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14667,
                "status_id": 3,
                "first_name": "Tina",
                "last_name": "Shameon",
                "last_appointment_id": 298796,
                "appointments_count": 7,
                "last_appointment": {
                    "id": 298796,
                    "time": 1682632800,
                    "providers_id": 80,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "04\/27\/2023",
                        "time": "3:00 PM",
                        "text": "04\/27\/2023 (Visit Created)",
                        "value": 298796
                    },
                    "provider": {
                        "id": 80,
                        "provider_name": "Ashley Pezeshkifar, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14674,
                "status_id": 3,
                "first_name": "Sarah-Penelope",
                "last_name": "Grant",
                "last_appointment_id": 301770,
                "appointments_count": 6,
                "last_appointment": {
                    "id": 301770,
                    "time": 1684454400,
                    "providers_id": 16,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "05\/18\/2023",
                        "time": "5:00 PM",
                        "text": "05\/18\/2023 (Visit Created)",
                        "value": 301770
                    },
                    "provider": {
                        "id": 16,
                        "provider_name": "Kim Boykin-Johnson, PsyD"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14693,
                "status_id": 3,
                "first_name": "Adia",
                "last_name": "Williams",
                "last_appointment_id": 299920,
                "appointments_count": 12,
                "last_appointment": {
                    "id": 299920,
                    "time": 1685721600,
                    "providers_id": 240,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/02\/2023",
                        "time": "9:00 AM",
                        "text": "06\/02\/2023 (Visit Created)",
                        "value": 299920
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14694,
                "status_id": 3,
                "first_name": "Masoudeh",
                "last_name": "Navabi",
                "last_appointment_id": 298108,
                "appointments_count": 6,
                "last_appointment": {
                    "id": 298108,
                    "time": 1682391600,
                    "providers_id": 20,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "04\/24\/2023",
                        "time": "8:00 PM",
                        "text": "04\/24\/2023 (Visit Created)",
                        "value": 298108
                    },
                    "provider": {
                        "id": 20,
                        "provider_name": "Fariba Kooklan, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14708,
                "status_id": 3,
                "first_name": "Hope",
                "last_name": "Weldon",
                "last_appointment_id": 287824,
                "appointments_count": 20,
                "last_appointment": {
                    "id": 287824,
                    "time": 1685656800,
                    "providers_id": 76,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "06\/01\/2023",
                        "time": "3:00 PM",
                        "text": "06\/01\/2023 (Cancelled by Provider)",
                        "value": 287824
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14721,
                "status_id": 3,
                "first_name": "Kathleen",
                "last_name": "Ray",
                "last_appointment_id": 302707,
                "appointments_count": 10,
                "last_appointment": {
                    "id": 302707,
                    "time": 1685296800,
                    "providers_id": 49,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "05\/28\/2023",
                        "time": "11:00 AM",
                        "text": "05\/28\/2023 (Visit Created)",
                        "value": 302707
                    },
                    "provider": {
                        "id": 49,
                        "provider_name": "Sharareh Ghedari, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14743,
                "status_id": 3,
                "first_name": "Audrina",
                "last_name": "Johnson",
                "last_appointment_id": 292723,
                "appointments_count": 5,
                "last_appointment": {
                    "id": 292723,
                    "time": 1679958000,
                    "providers_id": 218,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "03\/27\/2023",
                        "time": "4:00 PM",
                        "text": "03\/27\/2023 (Patient Did Not Come)",
                        "value": 292723
                    },
                    "provider": {
                        "id": 218,
                        "provider_name": "Kerry McLean, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14769,
                "status_id": 3,
                "first_name": "Chrysa",
                "last_name": "Kovach",
                "last_appointment_id": 297230,
                "appointments_count": 15,
                "last_appointment": {
                    "id": 297230,
                    "time": 1686070800,
                    "providers_id": 211,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "06\/06\/2023",
                        "time": "10:00 AM",
                        "text": "06\/06\/2023 (Cancelled by Patient)",
                        "value": 297230
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14773,
                "status_id": 3,
                "first_name": "Nicole",
                "last_name": "Lima",
                "last_appointment_id": 302228,
                "appointments_count": 15,
                "last_appointment": {
                    "id": 302228,
                    "time": 1686078000,
                    "providers_id": 253,
                    "appointment_statuses_id": 2,
                    "date_of_service": {
                        "date": "06\/06\/2023",
                        "time": "12:00 PM",
                        "text": "06\/06\/2023 (Rescheduled)",
                        "value": 302228
                    },
                    "provider": {
                        "id": 253,
                        "provider_name": "Christina Ambriz, LMFT"
                    },
                    "status": {
                        "id": 2,
                        "status": "Rescheduled"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14793,
                "status_id": 3,
                "first_name": "Jasmine",
                "last_name": "Mims",
                "last_appointment_id": 303196,
                "appointments_count": 7,
                "last_appointment": {
                    "id": 303196,
                    "time": 1686697200,
                    "providers_id": 253,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "06\/13\/2023",
                        "time": "4:00 PM",
                        "text": "06\/13\/2023 (Cancelled by Patient)",
                        "value": 303196
                    },
                    "provider": {
                        "id": 253,
                        "provider_name": "Christina Ambriz, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14796,
                "status_id": 3,
                "first_name": "Max",
                "last_name": "Durr",
                "last_appointment_id": 290826,
                "appointments_count": 12,
                "last_appointment": {
                    "id": 290826,
                    "time": 1685048400,
                    "providers_id": 76,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "05\/25\/2023",
                        "time": "2:00 PM",
                        "text": "05\/25\/2023 (Cancelled by Provider)",
                        "value": 290826
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14800,
                "status_id": 3,
                "first_name": "Solenne",
                "last_name": "Alvarez",
                "last_appointment_id": 302695,
                "appointments_count": 18,
                "last_appointment": {
                    "id": 302695,
                    "time": 1688770800,
                    "providers_id": 268,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "07\/07\/2023",
                        "time": "4:00 PM",
                        "text": "07\/07\/2023 (Cancelled by Patient)",
                        "value": 302695
                    },
                    "provider": {
                        "id": 268,
                        "provider_name": "Dana Rosen, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14837,
                "status_id": 3,
                "first_name": "Ellie",
                "last_name": "Moussiesse",
                "last_appointment_id": 293642,
                "appointments_count": 3,
                "last_appointment": {
                    "id": 293642,
                    "time": 1680973200,
                    "providers_id": 267,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "04\/08\/2023",
                        "time": "10:00 AM",
                        "text": "04\/08\/2023 (Cancelled by Provider)",
                        "value": 293642
                    },
                    "provider": {
                        "id": 267,
                        "provider_name": "Miriam Lamb, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14845,
                "status_id": 3,
                "first_name": "Brycen",
                "last_name": "Speer",
                "last_appointment_id": 293945,
                "appointments_count": 4,
                "last_appointment": {
                    "id": 293945,
                    "time": 1680562800,
                    "providers_id": 240,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "04\/03\/2023",
                        "time": "4:00 PM",
                        "text": "04\/03\/2023 (Visit Created)",
                        "value": 293945
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14846,
                "status_id": 3,
                "first_name": "Mary",
                "last_name": "Patrick",
                "last_appointment_id": 299941,
                "appointments_count": 19,
                "last_appointment": {
                    "id": 299941,
                    "time": 1688400000,
                    "providers_id": 268,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "07\/03\/2023",
                        "time": "9:00 AM",
                        "text": "07\/03\/2023 (Cancelled by Patient)",
                        "value": 299941
                    },
                    "provider": {
                        "id": 268,
                        "provider_name": "Dana Rosen, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14851,
                "status_id": 3,
                "first_name": "Aiden",
                "last_name": "Charles",
                "last_appointment_id": 299637,
                "appointments_count": 8,
                "last_appointment": {
                    "id": 299637,
                    "time": 1684011600,
                    "providers_id": 76,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "05\/13\/2023",
                        "time": "2:00 PM",
                        "text": "05\/13\/2023 (Cancelled by Provider)",
                        "value": 299637
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14863,
                "status_id": 3,
                "first_name": "Alexa",
                "last_name": "Zaldana",
                "last_appointment_id": 293279,
                "appointments_count": 12,
                "last_appointment": {
                    "id": 293279,
                    "time": 1686254400,
                    "providers_id": 76,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "06\/08\/2023",
                        "time": "1:00 PM",
                        "text": "06\/08\/2023 (Cancelled by Provider)",
                        "value": 293279
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14865,
                "status_id": 3,
                "first_name": "Sebastian",
                "last_name": "Lopez",
                "last_appointment_id": 293265,
                "appointments_count": 13,
                "last_appointment": {
                    "id": 293265,
                    "time": 1686160800,
                    "providers_id": 76,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "06\/07\/2023",
                        "time": "11:00 AM",
                        "text": "06\/07\/2023 (Cancelled by Provider)",
                        "value": 293265
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14870,
                "status_id": 3,
                "first_name": "Belinda",
                "last_name": "Madrid",
                "last_appointment_id": 294129,
                "appointments_count": 13,
                "last_appointment": {
                    "id": 294129,
                    "time": 1686870000,
                    "providers_id": 267,
                    "appointment_statuses_id": 8,
                    "date_of_service": {
                        "date": "06\/15\/2023",
                        "time": "4:00 PM",
                        "text": "06\/15\/2023 (Active)",
                        "value": 294129
                    },
                    "provider": {
                        "id": 267,
                        "provider_name": "Miriam Lamb, LMFT"
                    },
                    "status": {
                        "id": 8,
                        "status": "Active"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14894,
                "status_id": 3,
                "first_name": "Morgan",
                "last_name": "Cohen",
                "last_appointment_id": 294252,
                "appointments_count": 12,
                "last_appointment": {
                    "id": 294252,
                    "time": 1686600000,
                    "providers_id": 76,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "06\/12\/2023",
                        "time": "1:00 PM",
                        "text": "06\/12\/2023 (Cancelled by Provider)",
                        "value": 294252
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14897,
                "status_id": 3,
                "first_name": "Leslie",
                "last_name": "Allston",
                "last_appointment_id": 294444,
                "appointments_count": 12,
                "last_appointment": {
                    "id": 294444,
                    "time": 1686762000,
                    "providers_id": 76,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "06\/14\/2023",
                        "time": "10:00 AM",
                        "text": "06\/14\/2023 (Cancelled by Provider)",
                        "value": 294444
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14898,
                "status_id": 3,
                "first_name": "Mabel",
                "last_name": "Vazquez",
                "last_appointment_id": 295156,
                "appointments_count": 9,
                "last_appointment": {
                    "id": 295156,
                    "time": 1685034000,
                    "providers_id": 269,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "05\/25\/2023",
                        "time": "10:00 AM",
                        "text": "05\/25\/2023 (Cancelled by Provider)",
                        "value": 295156
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14899,
                "status_id": 3,
                "first_name": "Iliana",
                "last_name": "Garcia",
                "last_appointment_id": 295281,
                "appointments_count": 5,
                "last_appointment": {
                    "id": 295281,
                    "time": 1683144000,
                    "providers_id": 269,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "05\/03\/2023",
                        "time": "1:00 PM",
                        "text": "05\/03\/2023 (Cancelled by Patient)",
                        "value": 295281
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14922,
                "status_id": 3,
                "first_name": "Kirk",
                "last_name": "Meyer",
                "last_appointment_id": 303574,
                "appointments_count": 15,
                "last_appointment": {
                    "id": 303574,
                    "time": 1689267600,
                    "providers_id": 211,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "07\/13\/2023",
                        "time": "10:00 AM",
                        "text": "07\/13\/2023 (Cancelled by Patient)",
                        "value": 303574
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14964,
                "status_id": 3,
                "first_name": "Brook",
                "last_name": "Barnes",
                "last_appointment_id": 300495,
                "appointments_count": 7,
                "last_appointment": {
                    "id": 300495,
                    "time": 1684285200,
                    "providers_id": 240,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "05\/16\/2023",
                        "time": "6:00 PM",
                        "text": "05\/16\/2023 (Visit Created)",
                        "value": 300495
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 14980,
                "status_id": 3,
                "first_name": "Mylie",
                "last_name": "Cabrera",
                "last_appointment_id": 297075,
                "appointments_count": 9,
                "last_appointment": {
                    "id": 297075,
                    "time": 1685977200,
                    "providers_id": 211,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "06\/05\/2023",
                        "time": "8:00 AM",
                        "text": "06\/05\/2023 (Cancelled by Patient)",
                        "value": 297075
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15049,
                "status_id": 3,
                "first_name": "Zakiya",
                "last_name": "Otis",
                "last_appointment_id": 301044,
                "appointments_count": 5,
                "last_appointment": {
                    "id": 301044,
                    "time": 1684198800,
                    "providers_id": 233,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "05\/15\/2023",
                        "time": "6:00 PM",
                        "text": "05\/15\/2023 (Patient Did Not Come)",
                        "value": 301044
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15054,
                "status_id": 3,
                "first_name": "Dejanee",
                "last_name": "Pledger",
                "last_appointment_id": 298104,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 298104,
                    "time": 1682460000,
                    "providers_id": 20,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "04\/25\/2023",
                        "time": "3:00 PM",
                        "text": "04\/25\/2023 (Visit Created)",
                        "value": 298104
                    },
                    "provider": {
                        "id": 20,
                        "provider_name": "Fariba Kooklan, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15086,
                "status_id": 3,
                "first_name": "Zion",
                "last_name": "Levi",
                "last_appointment_id": 300005,
                "appointments_count": 8,
                "last_appointment": {
                    "id": 300005,
                    "time": 1687014000,
                    "providers_id": 211,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "06\/17\/2023",
                        "time": "8:00 AM",
                        "text": "06\/17\/2023 (Cancelled by Patient)",
                        "value": 300005
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15107,
                "status_id": 3,
                "first_name": "Shavon",
                "last_name": "Cain",
                "last_appointment_id": 301753,
                "appointments_count": 5,
                "last_appointment": {
                    "id": 301753,
                    "time": 1685044800,
                    "providers_id": 240,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "05\/25\/2023",
                        "time": "1:00 PM",
                        "text": "05\/25\/2023 (Patient Did Not Come)",
                        "value": 301753
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15122,
                "status_id": 3,
                "first_name": "Alfredo",
                "last_name": "Leal-Brandt",
                "last_appointment_id": 306440,
                "appointments_count": 8,
                "last_appointment": {
                    "id": 306440,
                    "time": 1688770800,
                    "providers_id": 53,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "07\/07\/2023",
                        "time": "4:00 PM",
                        "text": "07\/07\/2023 (Cancelled by Patient)",
                        "value": 306440
                    },
                    "provider": {
                        "id": 53,
                        "provider_name": "Jennifer Frank, PhD"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15217,
                "status_id": 3,
                "first_name": "Daniel Lawrence",
                "last_name": "Alba",
                "last_appointment_id": 301974,
                "appointments_count": 3,
                "last_appointment": {
                    "id": 301974,
                    "time": 1685757600,
                    "providers_id": 233,
                    "appointment_statuses_id": 1,
                    "date_of_service": {
                        "date": "06\/02\/2023",
                        "time": "7:00 PM",
                        "text": "06\/02\/2023 (Visit Created)",
                        "value": 301974
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 1,
                        "status": "Visit Created"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15295,
                "status_id": 3,
                "first_name": "Tiffany",
                "last_name": "Gharib",
                "last_appointment_id": 302731,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 302731,
                    "time": 1686351600,
                    "providers_id": 65,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "06\/09\/2023",
                        "time": "4:00 PM",
                        "text": "06\/09\/2023 (Cancelled by Provider)",
                        "value": 302731
                    },
                    "provider": {
                        "id": 65,
                        "provider_name": "Devorah Teyer, LCSW"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15296,
                "status_id": 3,
                "first_name": "Nicholas",
                "last_name": "Martin",
                "last_appointment_id": 306010,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 306010,
                    "time": 1687561200,
                    "providers_id": 233,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "06\/23\/2023",
                        "time": "4:00 PM",
                        "text": "06\/23\/2023 (Patient Did Not Come)",
                        "value": 306010
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15307,
                "status_id": 3,
                "first_name": "Avery",
                "last_name": "Williams",
                "last_appointment_id": 303824,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 303824,
                    "time": 1686499200,
                    "providers_id": 233,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "06\/11\/2023",
                        "time": "9:00 AM",
                        "text": "06\/11\/2023 (Patient Did Not Come)",
                        "value": 303824
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15308,
                "status_id": 3,
                "first_name": "Skyler",
                "last_name": "Cowles",
                "last_appointment_id": 304084,
                "appointments_count": 6,
                "last_appointment": {
                    "id": 304084,
                    "time": 1688778000,
                    "providers_id": 274,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "07\/07\/2023",
                        "time": "6:00 PM",
                        "text": "07\/07\/2023 (Cancelled by Provider)",
                        "value": 304084
                    },
                    "provider": {
                        "id": 274,
                        "provider_name": "Melanie Lapeyrolerie, LCSW"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15318,
                "status_id": 3,
                "first_name": "Lesla",
                "last_name": "Copley",
                "last_appointment_id": 304107,
                "appointments_count": 4,
                "last_appointment": {
                    "id": 304107,
                    "time": 1687647600,
                    "providers_id": 274,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "06\/24\/2023",
                        "time": "4:00 PM",
                        "text": "06\/24\/2023 (Cancelled by Provider)",
                        "value": 304107
                    },
                    "provider": {
                        "id": 274,
                        "provider_name": "Melanie Lapeyrolerie, LCSW"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15354,
                "status_id": 3,
                "first_name": "Gonzalo",
                "last_name": "Flores",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15363,
                "status_id": 3,
                "first_name": "Ethan",
                "last_name": "Flores",
                "last_appointment_id": 304210,
                "appointments_count": 4,
                "last_appointment": {
                    "id": 304210,
                    "time": 1688418000,
                    "providers_id": 266,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "07\/03\/2023",
                        "time": "2:00 PM",
                        "text": "07\/03\/2023 (Cancelled by Provider)",
                        "value": 304210
                    },
                    "provider": {
                        "id": 266,
                        "provider_name": "Angela Meyer, MFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15368,
                "status_id": 3,
                "first_name": "Jaime",
                "last_name": "Stone",
                "last_appointment_id": 304258,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 304258,
                    "time": 1686326400,
                    "providers_id": 256,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "06\/09\/2023",
                        "time": "9:00 AM",
                        "text": "06\/09\/2023 (Patient Did Not Come)",
                        "value": 304258
                    },
                    "provider": {
                        "id": 256,
                        "provider_name": "Alexandra Bruun, LCSW"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15371,
                "status_id": 3,
                "first_name": "Jacob",
                "last_name": "Mark",
                "last_appointment_id": 304373,
                "appointments_count": 4,
                "last_appointment": {
                    "id": 304373,
                    "time": 1688432400,
                    "providers_id": 266,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "07\/03\/2023",
                        "time": "6:00 PM",
                        "text": "07\/03\/2023 (Cancelled by Provider)",
                        "value": 304373
                    },
                    "provider": {
                        "id": 266,
                        "provider_name": "Angela Meyer, MFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15372,
                "status_id": 3,
                "first_name": "Steven",
                "last_name": "Lopez",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15374,
                "status_id": 3,
                "first_name": "Jordan",
                "last_name": "Carvel",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15377,
                "status_id": 3,
                "first_name": "Michelle",
                "last_name": "Carlson",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15378,
                "status_id": 3,
                "first_name": "Joann",
                "last_name": "Jackson",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15380,
                "status_id": 3,
                "first_name": "Todd",
                "last_name": "Schultz",
                "last_appointment_id": 306139,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 306139,
                    "time": 1687539600,
                    "providers_id": 241,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "06\/23\/2023",
                        "time": "10:00 AM",
                        "text": "06\/23\/2023 (Patient Did Not Come)",
                        "value": 306139
                    },
                    "provider": {
                        "id": 241,
                        "provider_name": "Ian McNabb, MFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15382,
                "status_id": 3,
                "first_name": "Patricia",
                "last_name": "Sanchez",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15387,
                "status_id": 3,
                "first_name": "Carlos",
                "last_name": "Hernandez",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15388,
                "status_id": 3,
                "first_name": "Michelle",
                "last_name": "Mazur",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15390,
                "status_id": 3,
                "first_name": "Anabelle",
                "last_name": "Sedas",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15391,
                "status_id": 3,
                "first_name": "Diane",
                "last_name": "Curiel",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15395,
                "status_id": 3,
                "first_name": "James",
                "last_name": "Pearlman",
                "last_appointment_id": 315863,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 315863,
                    "time": 1692835200,
                    "providers_id": 53,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "08\/23\/2023",
                        "time": "5:00 PM",
                        "text": "08\/23\/2023 (Cancelled by Patient)",
                        "value": 315863
                    },
                    "provider": {
                        "id": 53,
                        "provider_name": "Jennifer Frank, PhD"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15397,
                "status_id": 3,
                "first_name": "Jody",
                "last_name": "Houston",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15401,
                "status_id": 3,
                "first_name": "Teresa",
                "last_name": "Carcamo",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15404,
                "status_id": 3,
                "first_name": "Crystal",
                "last_name": "Lirajurado",
                "last_appointment_id": 306140,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 306140,
                    "time": 1687392000,
                    "providers_id": 241,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "06\/21\/2023",
                        "time": "5:00 PM",
                        "text": "06\/21\/2023 (Patient Did Not Come)",
                        "value": 306140
                    },
                    "provider": {
                        "id": 241,
                        "provider_name": "Ian McNabb, MFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15405,
                "status_id": 3,
                "first_name": "Jacqueline",
                "last_name": "Hardin",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15406,
                "status_id": 3,
                "first_name": "Michael",
                "last_name": "Wilson",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15440,
                "status_id": 3,
                "first_name": "Jose",
                "last_name": "Miranda",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15447,
                "status_id": 3,
                "first_name": "Jessica",
                "last_name": "Cuffe",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15450,
                "status_id": 3,
                "first_name": "Colin",
                "last_name": "McGrath",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15451,
                "status_id": 3,
                "first_name": "Mutya",
                "last_name": "Santos",
                "last_appointment_id": 306154,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 306154,
                    "time": 1687453200,
                    "providers_id": 270,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "06\/22\/2023",
                        "time": "10:00 AM",
                        "text": "06\/22\/2023 (Cancelled by Patient)",
                        "value": 306154
                    },
                    "provider": {
                        "id": 270,
                        "provider_name": "Karen Lopez, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15452,
                "status_id": 3,
                "first_name": "Josie",
                "last_name": "Cecil",
                "last_appointment_id": 306105,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 306105,
                    "time": 1687554000,
                    "providers_id": 233,
                    "appointment_statuses_id": 10,
                    "date_of_service": {
                        "date": "06\/23\/2023",
                        "time": "2:00 PM",
                        "text": "06\/23\/2023 (Cancelled by Office)",
                        "value": 306105
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 10,
                        "status": "Cancelled by Office"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15453,
                "status_id": 3,
                "first_name": "Albert",
                "last_name": "Saraie",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15456,
                "status_id": 3,
                "first_name": "Marielena",
                "last_name": "Gonzalez",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15458,
                "status_id": 3,
                "first_name": "Edwin",
                "last_name": "Huang",
                "last_appointment_id": 306493,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 306493,
                    "time": 1687633200,
                    "providers_id": 233,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "06\/24\/2023",
                        "time": "12:00 PM",
                        "text": "06\/24\/2023 (Cancelled by Patient)",
                        "value": 306493
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15462,
                "status_id": 3,
                "first_name": "Cynthia",
                "last_name": "Figuerado",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15463,
                "status_id": 3,
                "first_name": "Joshua",
                "last_name": "Broad",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15466,
                "status_id": 3,
                "first_name": "Xiomara",
                "last_name": "Lopez-Velazquez",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15474,
                "status_id": 3,
                "first_name": "Darla",
                "last_name": "Meister",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15485,
                "status_id": 3,
                "first_name": "Estela",
                "last_name": "Gonzalez Sandoval",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15486,
                "status_id": 3,
                "first_name": "Ana",
                "last_name": "Lopez",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15487,
                "status_id": 3,
                "first_name": "Isabella",
                "last_name": "Perez",
                "last_appointment_id": 307589,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 307589,
                    "time": 1688407200,
                    "providers_id": 80,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "07\/03\/2023",
                        "time": "11:00 AM",
                        "text": "07\/03\/2023 (Cancelled by Patient)",
                        "value": 307589
                    },
                    "provider": {
                        "id": 80,
                        "provider_name": "Ashley Pezeshkifar, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15496,
                "status_id": 3,
                "first_name": "Steven",
                "last_name": "Jones",
                "last_appointment_id": 308165,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 308165,
                    "time": 1689091200,
                    "providers_id": 68,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "07\/11\/2023",
                        "time": "9:00 AM",
                        "text": "07\/11\/2023 (Cancelled by Provider)",
                        "value": 308165
                    },
                    "provider": {
                        "id": 68,
                        "provider_name": "Theresa Pasqualino, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15498,
                "status_id": 3,
                "first_name": "Rosalinda",
                "last_name": "Solis",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15499,
                "status_id": 3,
                "first_name": "Keisa",
                "last_name": "Souza",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15501,
                "status_id": 3,
                "first_name": "Addyson",
                "last_name": "Brackett",
                "last_appointment_id": 309101,
                "appointments_count": 3,
                "last_appointment": {
                    "id": 309101,
                    "time": 1689040800,
                    "providers_id": 274,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "07\/10\/2023",
                        "time": "7:00 PM",
                        "text": "07\/10\/2023 (Cancelled by Provider)",
                        "value": 309101
                    },
                    "provider": {
                        "id": 274,
                        "provider_name": "Melanie Lapeyrolerie, LCSW"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15505,
                "status_id": 3,
                "first_name": "Danielle",
                "last_name": "Brackett",
                "last_appointment_id": 308816,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 308816,
                    "time": 1689267600,
                    "providers_id": 67,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "07\/13\/2023",
                        "time": "10:00 AM",
                        "text": "07\/13\/2023 (Patient Did Not Come)",
                        "value": 308816
                    },
                    "provider": {
                        "id": 67,
                        "provider_name": "Negin Nasserian, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15508,
                "status_id": 3,
                "first_name": "Scott",
                "last_name": "Neace",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15510,
                "status_id": 3,
                "first_name": "Jack",
                "last_name": "Keledjian",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15514,
                "status_id": 3,
                "first_name": "Sandra",
                "last_name": "Lovett",
                "last_appointment_id": 308108,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 308108,
                    "time": 1688655600,
                    "providers_id": 256,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "07\/06\/2023",
                        "time": "8:00 AM",
                        "text": "07\/06\/2023 (Patient Did Not Come)",
                        "value": 308108
                    },
                    "provider": {
                        "id": 256,
                        "provider_name": "Alexandra Bruun, LCSW"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15518,
                "status_id": 3,
                "first_name": "Sandara",
                "last_name": "Lackner",
                "last_appointment_id": 308434,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 308434,
                    "time": 1688684400,
                    "providers_id": 210,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "07\/06\/2023",
                        "time": "4:00 PM",
                        "text": "07\/06\/2023 (Patient Did Not Come)",
                        "value": 308434
                    },
                    "provider": {
                        "id": 210,
                        "provider_name": "Eva Eduarte, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15520,
                "status_id": 3,
                "first_name": "Donald",
                "last_name": "Ludwig",
                "last_appointment_id": 310198,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 310198,
                    "time": 1689804000,
                    "providers_id": 68,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "07\/19\/2023",
                        "time": "3:00 PM",
                        "text": "07\/19\/2023 (Cancelled by Provider)",
                        "value": 310198
                    },
                    "provider": {
                        "id": 68,
                        "provider_name": "Theresa Pasqualino, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15521,
                "status_id": 3,
                "first_name": "Antonia",
                "last_name": "Santamaria",
                "last_appointment_id": 308208,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 308208,
                    "time": 1688508000,
                    "providers_id": 210,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "07\/04\/2023",
                        "time": "3:00 PM",
                        "text": "07\/04\/2023 (Patient Did Not Come)",
                        "value": 308208
                    },
                    "provider": {
                        "id": 210,
                        "provider_name": "Eva Eduarte, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15522,
                "status_id": 3,
                "first_name": "Anahita",
                "last_name": "Panahi",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15524,
                "status_id": 3,
                "first_name": "Jill",
                "last_name": "Morehouse",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15525,
                "status_id": 3,
                "first_name": "Aaron",
                "last_name": "Rubin",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15529,
                "status_id": 3,
                "first_name": "Aryanna",
                "last_name": "Lovingood",
                "last_appointment_id": 310223,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 310223,
                    "time": 1689991200,
                    "providers_id": 233,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "07\/21\/2023",
                        "time": "7:00 PM",
                        "text": "07\/21\/2023 (Patient Did Not Come)",
                        "value": 310223
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15544,
                "status_id": 3,
                "first_name": "Chaya",
                "last_name": "Herzog",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15549,
                "status_id": 3,
                "first_name": "Desiree",
                "last_name": "Rodriguez",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15552,
                "status_id": 3,
                "first_name": "Christian",
                "last_name": "Del Rio",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15553,
                "status_id": 3,
                "first_name": "Brandon",
                "last_name": "Cruz",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15559,
                "status_id": 3,
                "first_name": "Miguel",
                "last_name": "Robles Zuniga",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15567,
                "status_id": 3,
                "first_name": "Marissa",
                "last_name": "Silva",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15568,
                "status_id": 3,
                "first_name": "Lee Anna",
                "last_name": "Carter",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15570,
                "status_id": 3,
                "first_name": "Stacy",
                "last_name": "Flagg COUPLES",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15571,
                "status_id": 3,
                "first_name": "Monya",
                "last_name": "Nematollahi",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15577,
                "status_id": 3,
                "first_name": "Courtney",
                "last_name": "Conner",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15582,
                "status_id": 3,
                "first_name": "Marguerite",
                "last_name": "Gonzalez",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15586,
                "status_id": 3,
                "first_name": "Alise",
                "last_name": "Mansfield",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15589,
                "status_id": 3,
                "first_name": "Michael",
                "last_name": "Bloomer",
                "last_appointment_id": 310213,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 310213,
                    "time": 1689807600,
                    "providers_id": 233,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "07\/19\/2023",
                        "time": "4:00 PM",
                        "text": "07\/19\/2023 (Cancelled by Patient)",
                        "value": 310213
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15591,
                "status_id": 3,
                "first_name": "Martha",
                "last_name": "Valencia",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15592,
                "status_id": 3,
                "first_name": "Toktam",
                "last_name": "Shajiei",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15599,
                "status_id": 3,
                "first_name": "Naara",
                "last_name": "Alvidrez",
                "last_appointment_id": 313674,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 313674,
                    "time": 1692406800,
                    "providers_id": 65,
                    "appointment_statuses_id": 10,
                    "date_of_service": {
                        "date": "08\/18\/2023",
                        "time": "6:00 PM",
                        "text": "08\/18\/2023 (Cancelled by Office)",
                        "value": 313674
                    },
                    "provider": {
                        "id": 65,
                        "provider_name": "Devorah Teyer, LCSW"
                    },
                    "status": {
                        "id": 10,
                        "status": "Cancelled by Office"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15602,
                "status_id": 3,
                "first_name": "Patrick",
                "last_name": "Quintana COUPLES",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15606,
                "status_id": 3,
                "first_name": "Dominique",
                "last_name": "Sorzano",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15608,
                "status_id": 3,
                "first_name": "Caren",
                "last_name": "Miller",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15609,
                "status_id": 3,
                "first_name": "Sarahi",
                "last_name": "Roman",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15610,
                "status_id": 3,
                "first_name": "Kyra",
                "last_name": "Mccullough",
                "last_appointment_id": 310745,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 310745,
                    "time": 1690383600,
                    "providers_id": 240,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "07\/26\/2023",
                        "time": "8:00 AM",
                        "text": "07\/26\/2023 (Patient Did Not Come)",
                        "value": 310745
                    },
                    "provider": {
                        "id": 240,
                        "provider_name": "LaNesha Lacy, LCSW"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15613,
                "status_id": 3,
                "first_name": "Fayth",
                "last_name": "Buza",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15617,
                "status_id": 3,
                "first_name": "Damiana",
                "last_name": "Cruz de la Torres",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15618,
                "status_id": 3,
                "first_name": "Shane",
                "last_name": "Silver",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15619,
                "status_id": 3,
                "first_name": "Charles",
                "last_name": "Fink",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15621,
                "status_id": 3,
                "first_name": "Paul",
                "last_name": "Mc Entyre",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15623,
                "status_id": 3,
                "first_name": "Kenneth",
                "last_name": "Gilliam COUPLES",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15624,
                "status_id": 3,
                "first_name": "Mason",
                "last_name": "Riley",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15626,
                "status_id": 3,
                "first_name": "Michael",
                "last_name": "Tamondong Couples",
                "last_appointment_id": 315452,
                "appointments_count": 4,
                "last_appointment": {
                    "id": 315452,
                    "time": 1692406800,
                    "providers_id": 276,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/18\/2023",
                        "time": "6:00 PM",
                        "text": "08\/18\/2023 (Cancelled by Provider)",
                        "value": 315452
                    },
                    "provider": {
                        "id": 276,
                        "provider_name": "Liana Grigoryan, MFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15628,
                "status_id": 3,
                "first_name": "William",
                "last_name": "Morrow",
                "last_appointment_id": 311749,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 311749,
                    "time": 1690592400,
                    "providers_id": 53,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "07\/28\/2023",
                        "time": "6:00 PM",
                        "text": "07\/28\/2023 (Cancelled by Provider)",
                        "value": 311749
                    },
                    "provider": {
                        "id": 53,
                        "provider_name": "Jennifer Frank, PhD"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15632,
                "status_id": 3,
                "first_name": "Phillip",
                "last_name": "Nails",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15635,
                "status_id": 3,
                "first_name": "Nayeli",
                "last_name": "Anguiano",
                "last_appointment_id": 310930,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 310930,
                    "time": 1690232400,
                    "providers_id": 211,
                    "appointment_statuses_id": 10,
                    "date_of_service": {
                        "date": "07\/24\/2023",
                        "time": "2:00 PM",
                        "text": "07\/24\/2023 (Cancelled by Office)",
                        "value": 310930
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 10,
                        "status": "Cancelled by Office"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15636,
                "status_id": 3,
                "first_name": "Anaiah",
                "last_name": "Sobalvarro",
                "last_appointment_id": 310929,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 310929,
                    "time": 1690318800,
                    "providers_id": 76,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "07\/25\/2023",
                        "time": "2:00 PM",
                        "text": "07\/25\/2023 (Patient Did Not Come)",
                        "value": 310929
                    },
                    "provider": {
                        "id": 76,
                        "provider_name": "Pamela Lehtonen, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15638,
                "status_id": 3,
                "first_name": "Jacqueline",
                "last_name": "Davis",
                "last_appointment_id": 311128,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 311128,
                    "time": 1690315200,
                    "providers_id": 259,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "07\/25\/2023",
                        "time": "1:00 PM",
                        "text": "07\/25\/2023 (Cancelled by Patient)",
                        "value": 311128
                    },
                    "provider": {
                        "id": 259,
                        "provider_name": "Michelle Bakhshi, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15639,
                "status_id": 3,
                "first_name": "Beverly",
                "last_name": "Blanchard",
                "last_appointment_id": 311141,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 311141,
                    "time": 1690394400,
                    "providers_id": 256,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "07\/26\/2023",
                        "time": "11:00 AM",
                        "text": "07\/26\/2023 (Patient Did Not Come)",
                        "value": 311141
                    },
                    "provider": {
                        "id": 256,
                        "provider_name": "Alexandra Bruun, LCSW"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15640,
                "status_id": 3,
                "first_name": "Kimberly",
                "last_name": "Scott",
                "last_appointment_id": 311145,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 311145,
                    "time": 1690484400,
                    "providers_id": 233,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "07\/27\/2023",
                        "time": "12:00 PM",
                        "text": "07\/27\/2023 (Patient Did Not Come)",
                        "value": 311145
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15646,
                "status_id": 3,
                "first_name": "Shara",
                "last_name": "Lomax",
                "last_appointment_id": 315812,
                "appointments_count": 3,
                "last_appointment": {
                    "id": 315812,
                    "time": 1692385200,
                    "providers_id": 53,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/18\/2023",
                        "time": "12:00 PM",
                        "text": "08\/18\/2023 (Cancelled by Provider)",
                        "value": 315812
                    },
                    "provider": {
                        "id": 53,
                        "provider_name": "Jennifer Frank, PhD"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15663,
                "status_id": 3,
                "first_name": "Paula",
                "last_name": "Gotlibowski COUPLES",
                "last_appointment_id": 313834,
                "appointments_count": 4,
                "last_appointment": {
                    "id": 313834,
                    "time": 1693947600,
                    "providers_id": 266,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "09\/05\/2023",
                        "time": "2:00 PM",
                        "text": "09\/05\/2023 (Cancelled by Provider)",
                        "value": 313834
                    },
                    "provider": {
                        "id": 266,
                        "provider_name": "Angela Meyer, MFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15664,
                "status_id": 3,
                "first_name": "Kevin",
                "last_name": "Oconner COUPLES",
                "last_appointment_id": 320789,
                "appointments_count": 12,
                "last_appointment": {
                    "id": 320789,
                    "time": 1701550800,
                    "providers_id": 279,
                    "appointment_statuses_id": 8,
                    "date_of_service": {
                        "date": "12\/02\/2023",
                        "time": "1:00 PM",
                        "text": "12\/02\/2023 (Active)",
                        "value": 320789
                    },
                    "provider": {
                        "id": 279,
                        "provider_name": "Kelly Ramirez"
                    },
                    "status": {
                        "id": 8,
                        "status": "Active"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15666,
                "status_id": 3,
                "first_name": "Aaliyah",
                "last_name": "Beard",
                "last_appointment_id": 311567,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 311567,
                    "time": 1690664400,
                    "providers_id": 274,
                    "appointment_statuses_id": 10,
                    "date_of_service": {
                        "date": "07\/29\/2023",
                        "time": "2:00 PM",
                        "text": "07\/29\/2023 (Cancelled by Office)",
                        "value": 311567
                    },
                    "provider": {
                        "id": 274,
                        "provider_name": "Melanie Lapeyrolerie, LCSW"
                    },
                    "status": {
                        "id": 10,
                        "status": "Cancelled by Office"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15668,
                "status_id": 3,
                "first_name": "Brandon",
                "last_name": "Mockett",
                "last_appointment_id": 313889,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 313889,
                    "time": 1691780400,
                    "providers_id": 278,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/11\/2023",
                        "time": "12:00 PM",
                        "text": "08\/11\/2023 (Cancelled by Provider)",
                        "value": 313889
                    },
                    "provider": {
                        "id": 278,
                        "provider_name": "Debbie Lugtu, MFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15670,
                "status_id": 3,
                "first_name": "Jason",
                "last_name": "Jackson",
                "last_appointment_id": 321100,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 321100,
                    "time": 1695661200,
                    "providers_id": 280,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "09\/25\/2023",
                        "time": "10:00 AM",
                        "text": "09\/25\/2023 (Patient Did Not Come)",
                        "value": 321100
                    },
                    "provider": {
                        "id": 280,
                        "provider_name": "Anastasia Rementegui, MFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15672,
                "status_id": 3,
                "first_name": "Masumie",
                "last_name": "Mccowan",
                "last_appointment_id": 313172,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 313172,
                    "time": 1691265600,
                    "providers_id": 211,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "08\/05\/2023",
                        "time": "1:00 PM",
                        "text": "08\/05\/2023 (Cancelled by Patient)",
                        "value": 313172
                    },
                    "provider": {
                        "id": 211,
                        "provider_name": "Lisa Miller, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15760,
                "status_id": 3,
                "first_name": "Maria",
                "last_name": "Martinez",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15769,
                "status_id": 3,
                "first_name": "Elaine",
                "last_name": "Kubeck",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15773,
                "status_id": 3,
                "first_name": "David",
                "last_name": "Marincic",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15774,
                "status_id": 3,
                "first_name": "Rachel",
                "last_name": "Betts",
                "last_appointment_id": 317422,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 317422,
                    "time": 1693432800,
                    "providers_id": 68,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "08\/30\/2023",
                        "time": "3:00 PM",
                        "text": "08\/30\/2023 (Cancelled by Patient)",
                        "value": 317422
                    },
                    "provider": {
                        "id": 68,
                        "provider_name": "Theresa Pasqualino, LMFT"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15784,
                "status_id": 3,
                "first_name": "Madelyn",
                "last_name": "Hayes",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15791,
                "status_id": 3,
                "first_name": "Antonella",
                "last_name": "Raschio",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15796,
                "status_id": 3,
                "first_name": "Erin",
                "last_name": "Emslie",
                "last_appointment_id": 315635,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 315635,
                    "time": 1692374400,
                    "providers_id": 268,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/18\/2023",
                        "time": "9:00 AM",
                        "text": "08\/18\/2023 (Cancelled by Provider)",
                        "value": 315635
                    },
                    "provider": {
                        "id": 268,
                        "provider_name": "Dana Rosen, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15801,
                "status_id": 3,
                "first_name": "Alexis",
                "last_name": "Hernandez",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15805,
                "status_id": 3,
                "first_name": "Jason",
                "last_name": "Jackson",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15806,
                "status_id": 3,
                "first_name": "Braidyn",
                "last_name": "Holley",
                "last_appointment_id": 316102,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 316102,
                    "time": 1693011600,
                    "providers_id": 65,
                    "appointment_statuses_id": 5,
                    "date_of_service": {
                        "date": "08\/25\/2023",
                        "time": "6:00 PM",
                        "text": "08\/25\/2023 (Last Minute Cancel by Patient)",
                        "value": 316102
                    },
                    "provider": {
                        "id": 65,
                        "provider_name": "Devorah Teyer, LCSW"
                    },
                    "status": {
                        "id": 5,
                        "status": "Last Minute Cancel by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15808,
                "status_id": 3,
                "first_name": "Kevin",
                "last_name": "Smith",
                "last_appointment_id": 319782,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 319782,
                    "time": 1694804400,
                    "providers_id": 277,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "09\/15\/2023",
                        "time": "12:00 PM",
                        "text": "09\/15\/2023 (Patient Did Not Come)",
                        "value": 319782
                    },
                    "provider": {
                        "id": 277,
                        "provider_name": "Roman Katsnelson, MFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15809,
                "status_id": 3,
                "first_name": "Charles",
                "last_name": "Guzman",
                "last_appointment_id": 319596,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 319596,
                    "time": 1694714400,
                    "providers_id": 277,
                    "appointment_statuses_id": 5,
                    "date_of_service": {
                        "date": "09\/14\/2023",
                        "time": "11:00 AM",
                        "text": "09\/14\/2023 (Last Minute Cancel by Patient)",
                        "value": 319596
                    },
                    "provider": {
                        "id": 277,
                        "provider_name": "Roman Katsnelson, MFT"
                    },
                    "status": {
                        "id": 5,
                        "status": "Last Minute Cancel by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15811,
                "status_id": 3,
                "first_name": "Aaron",
                "last_name": "Clayton",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15822,
                "status_id": 3,
                "first_name": "Holly",
                "last_name": "Lux",
                "last_appointment_id": 316424,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 316424,
                    "time": 1693519200,
                    "providers_id": 269,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/31\/2023",
                        "time": "3:00 PM",
                        "text": "08\/31\/2023 (Cancelled by Provider)",
                        "value": 316424
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15823,
                "status_id": 3,
                "first_name": "Kristi",
                "last_name": "Richardson",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15826,
                "status_id": 3,
                "first_name": "Cesar",
                "last_name": "Loayza",
                "last_appointment_id": 316597,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 316597,
                    "time": 1693270800,
                    "providers_id": 210,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "08\/28\/2023",
                        "time": "6:00 PM",
                        "text": "08\/28\/2023 (Patient Did Not Come)",
                        "value": 316597
                    },
                    "provider": {
                        "id": 210,
                        "provider_name": "Eva Eduarte, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15827,
                "status_id": 3,
                "first_name": "Brian",
                "last_name": "Algorri",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15828,
                "status_id": 3,
                "first_name": "Krissia",
                "last_name": "Sorto",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15829,
                "status_id": 3,
                "first_name": "Lawrence",
                "last_name": "Cordo",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15831,
                "status_id": 3,
                "first_name": "Joyanne",
                "last_name": "Kline",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15836,
                "status_id": 3,
                "first_name": "Test",
                "last_name": "123",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15837,
                "status_id": 3,
                "first_name": "Antonia",
                "last_name": "Chispe",
                "last_appointment_id": 316903,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 316903,
                    "time": 1693324800,
                    "providers_id": 269,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "08\/29\/2023",
                        "time": "9:00 AM",
                        "text": "08\/29\/2023 (Patient Did Not Come)",
                        "value": 316903
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15839,
                "status_id": 3,
                "first_name": "Hannah",
                "last_name": "Gubani",
                "last_appointment_id": 317098,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 317098,
                    "time": 1693418400,
                    "providers_id": 254,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "08\/30\/2023",
                        "time": "11:00 AM",
                        "text": "08\/30\/2023 (Cancelled by Provider)",
                        "value": 317098
                    },
                    "provider": {
                        "id": 254,
                        "provider_name": "Denise Montano, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15840,
                "status_id": 3,
                "first_name": "Sarita",
                "last_name": "Mahinay",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15842,
                "status_id": 3,
                "first_name": "Sophia",
                "last_name": "Vasquez",
                "last_appointment_id": 317083,
                "appointments_count": 2,
                "last_appointment": {
                    "id": 317083,
                    "time": 1693591200,
                    "providers_id": 243,
                    "appointment_statuses_id": 2,
                    "date_of_service": {
                        "date": "09\/01\/2023",
                        "time": "11:00 AM",
                        "text": "09\/01\/2023 (Rescheduled)",
                        "value": 317083
                    },
                    "provider": {
                        "id": 243,
                        "provider_name": "Yen Tran, LMFT"
                    },
                    "status": {
                        "id": 2,
                        "status": "Rescheduled"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15849,
                "status_id": 3,
                "first_name": "Nicolas",
                "last_name": "Torres",
                "last_appointment_id": 317366,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 317366,
                    "time": 1693530000,
                    "providers_id": 233,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "08\/31\/2023",
                        "time": "6:00 PM",
                        "text": "08\/31\/2023 (Patient Did Not Come)",
                        "value": 317366
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15852,
                "status_id": 3,
                "first_name": "Georgia",
                "last_name": "Hutton",
                "last_appointment_id": 317386,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 317386,
                    "time": 1693414800,
                    "providers_id": 233,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "08\/30\/2023",
                        "time": "10:00 AM",
                        "text": "08\/30\/2023 (Patient Did Not Come)",
                        "value": 317386
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15854,
                "status_id": 3,
                "first_name": "Megan",
                "last_name": "Sullivan",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15855,
                "status_id": 3,
                "first_name": "Maverick",
                "last_name": "Campbell",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15858,
                "status_id": 3,
                "first_name": "Adriana",
                "last_name": "King",
                "last_appointment_id": 317438,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 317438,
                    "time": 1694041200,
                    "providers_id": 65,
                    "appointment_statuses_id": 3,
                    "date_of_service": {
                        "date": "09\/06\/2023",
                        "time": "4:00 PM",
                        "text": "09\/06\/2023 (Cancelled by Patient)",
                        "value": 317438
                    },
                    "provider": {
                        "id": 65,
                        "provider_name": "Devorah Teyer, LCSW"
                    },
                    "status": {
                        "id": 3,
                        "status": "Cancelled by Patient"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15864,
                "status_id": 3,
                "first_name": "Alia",
                "last_name": "Woo",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15870,
                "status_id": 3,
                "first_name": "Isabel",
                "last_name": "Patean Villa",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15873,
                "status_id": 3,
                "first_name": "Brooklyn",
                "last_name": "Galloway",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15876,
                "status_id": 3,
                "first_name": "Jason",
                "last_name": "Holland",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15877,
                "status_id": 3,
                "first_name": "Abc-7",
                "last_name": "Xyz-7",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15878,
                "status_id": 3,
                "first_name": "Dana",
                "last_name": "Bryant",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15881,
                "status_id": 3,
                "first_name": "Pamela",
                "last_name": "Wong",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15885,
                "status_id": 3,
                "first_name": "Lance",
                "last_name": "Charles",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15888,
                "status_id": 3,
                "first_name": "Amelia",
                "last_name": "Jacinto",
                "last_appointment_id": 323279,
                "appointments_count": 3,
                "last_appointment": {
                    "id": 323279,
                    "time": 1696867200,
                    "providers_id": 269,
                    "appointment_statuses_id": 8,
                    "date_of_service": {
                        "date": "10\/09\/2023",
                        "time": "9:00 AM",
                        "text": "10\/09\/2023 (Active)",
                        "value": 323279
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 8,
                        "status": "Active"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15890,
                "status_id": 3,
                "first_name": "Jesse",
                "last_name": "Mendoza",
                "last_appointment_id": 320973,
                "appointments_count": 3,
                "last_appointment": {
                    "id": 320973,
                    "time": 1695682800,
                    "providers_id": 269,
                    "appointment_statuses_id": 6,
                    "date_of_service": {
                        "date": "09\/25\/2023",
                        "time": "4:00 PM",
                        "text": "09\/25\/2023 (Patient Did Not Come)",
                        "value": 320973
                    },
                    "provider": {
                        "id": 269,
                        "provider_name": "Carmen Donato, LCSW"
                    },
                    "status": {
                        "id": 6,
                        "status": "Patient Did Not Come"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15893,
                "status_id": 3,
                "first_name": "Tatum",
                "last_name": "Howard",
                "last_appointment_id": null,
                "appointments_count": 0,
                "last_appointment": null,
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            },
            {
                "id": 15896,
                "status_id": 3,
                "first_name": "Elizabeth",
                "last_name": "Burpee",
                "last_appointment_id": 318579,
                "appointments_count": 1,
                "last_appointment": {
                    "id": 318579,
                    "time": 1694203200,
                    "providers_id": 233,
                    "appointment_statuses_id": 4,
                    "date_of_service": {
                        "date": "09\/08\/2023",
                        "time": "1:00 PM",
                        "text": "09\/08\/2023 (Cancelled by Provider)",
                        "value": 318579
                    },
                    "provider": {
                        "id": 233,
                        "provider_name": "Charlett Korling, LMFT"
                    },
                    "status": {
                        "id": 4,
                        "status": "Cancelled by Provider"
                    }
                },
                "status": {
                    "id": 3,
                    "status": "Lost",
                    "hex_color": "fb0007"
                }
            }
        ],
        "meta": {
            "count": 246
        }
    }
}`);

export const getMockDataForNewLostPatiendCard = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: dataForNewLostPatiendCard })
        }, 5000)
    })
}

const dataForDoctorsRequests = {
    removal_requests: {
        data: [
            {
                therapist_name: 'John Smith',
                patient_name: 'Nikolay Perviy',
                patient_id: 4982,
                reason: 'I do not work with children under 18',
                requested_at: '01/12/2023 06:17:14 PM'
            }
        ],
        meta: { count: 1 }
    }
}

export const getMockDataForDoctorsRequests = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve({data: dataForDoctorsRequests})
        })
    }, 5000)
}