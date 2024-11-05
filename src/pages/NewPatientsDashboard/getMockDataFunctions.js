const dataForNewPatientsDashboard = {
    "inbox": {
        "data": [
            {
                "id": 2,
                "inquirable_id": 2,
                "inquirable_type": "App\\Models\\Patient\\Lead\\PatientLead",
                "stage_id": 1,
                "source_id": 1,
                "admin_id": null,
                "is_returning": 0,
                "is_archived": 0,
                "closed_at": null,
                "created_at": "2023-08-04 06:51:29",
                "updated_at": "2023-08-04 06:51:29",
                "deleted_at": null,
                "is_patient_created": 0,
                "source": {
                    "id": 1,
                    "name": "Direct call",
                    "hex_color": "#293056",
                    "hex_background_color": "#D5D9EB"
                },
                "inquirable": {
                    "id": 2,
                    "patient_id": null,
                    "first_name": "Joe1",
                    "last_name": "Doen1",
                    "middle_initial": "D1",
                    "provider_id": null,
                    "preferred_language_id": null,
                    "email": "test2@example.com",
                    "secondary_email": null,
                    "address": null,
                    "address_2": null,
                    "city": null,
                    "state": null,
                    "zip": null,
                    "date_of_birth": "1999-12-12",
                    "cell_phone": "2000000000",
                    "home_phone": null,
                    "work_phone": null,
                    "preferred_phone": null,
                    "primary_insurance_id": null,
                    "insurance_plan_id": null,
                    "eligibility_payer_id": null,
                    "sex": "M",
                    "reffering_provider": null,
                    "visit_copay": null,
                    "subscriber_id": null,
                    "is_payment_forbidden": false,
                    "deleted_at": null,
                    "created_at": "2023-08-04 06:51:28",
                    "updated_at": "2023-08-04 06:51:28"
                }
            }
        ],
        "meta": {
            "count": 1
        }
    },
    "in_progress": {
        "data": [
            {
                "id": 1,
                "inquirable_id": 15192,
                "inquirable_type": "App\\Patient",
                "stage_id": 2,
                "source_id": 1,
                "admin_id": null,
                "is_returning": 0,
                "is_archived": 0,
                "closed_at": null,
                "created_at": "2023-08-04 06:46:28",
                "updated_at": "2023-08-04 06:50:10",
                "deleted_at": null,
                "is_patient_created": 1,
                "source": {
                    "id": 1,
                    "name": "Direct call",
                    "hex_color": "#293056",
                    "hex_background_color": "#D5D9EB"
                },
                "inquirable": {
                    "id": 15192,
                    "patient_id": 17086373,
                    "patient_account_number": null,
                    "auth_number": null,
                    "first_name": "Joe",
                    "home_phone": null,
                    "parse_home_phone": 1,
                    "last_name": "Doen",
                    "middle_initial": "D",
                    "primary_provider_id": null,
                    "preferred_language_id": null,
                    "email": "test1@example.com",
                    "secondary_email": null,
                    "insured_name": null,
                    "secondary_insured_name": null,
                    "address": null,
                    "address_2": null,
                    "city": null,
                    "state": null,
                    "zip": null,
                    "date_of_birth": null,
                    "age": null,
                    "cell_phone": "1000000000",
                    "parse_cell_phone": 1,
                    "work_phone": null,
                    "parse_work_phone": 1,
                    "preferred_phone": null,
                    "visits_auth": null,
                    "visits_auth_left": 0,
                    "primary_insurance": null,
                    "primary_insurance_id": null,
                    "insurance_plan_id": null,
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
                    "created_at": "2023-08-04 06:49:57",
                    "updated_at": "2023-08-04 06:50:02",
                    "completed_appointment_count": 0,
                    "watching": 1,
                    "visit_copay": "0",
                    "hidden_on_patients_without_appointments_statistics": 0,
                    "created_patient_date": null,
                    "status_id": 8,
                    "eff_stop_date": null,
                    "eff_start_date": null,
                    "subscriber_id": null,
                    "charge_for_cancellation_appointment": 0,
                    "prev_charge_for_cancellation_appointment": 0,
                    "is_parsed_cancellation_fee": 0,
                    "start_synchronization_time": null,
                    "tmp_is_manually_archived": 0
                }
            }
        ],
        "meta": {
            "count": 1
        }
    },
    "appointment_scheduled": {
        "data": [],
        "meta": {
            "count": 0
        }
    },
    "appointment_completed": {
        "data": [],
        "meta": {
            "count": 0
        }
    }
}

const dataForPatientProfile = {
    patient: {
        id: 2581,
        first_name: 'Amilcar',
        last_name: 'Rivas',
        date_of_birth: "1995-03-19",
        source: "Tridium",
        gender: 'Male',
        email: 'test@gmail.com',
        cell_phone: '6612026600',
        insurance: 'Axminister Medical Group',
        address: "22152 Summer Breeze Ct., Santa Clarita, CA, 91390",
        stage: {
            id: 4,
            slug: "appointment_completed",
            name: "New patients (without appointment)"
        }
    },
    comments: [
        {
            id: 1,
            author: 'John Smith',
            date: '2023-08-01 08:05:02',
            comment_type: 'stage_change',
            prev_stage: 'Inbox',
            current_stage: 'Eligibility checked',
        },
        {
            id: 2,
            author: 'Ivan Tszian',
            comment: 'We look forward to accompanying her on this path to improved health and are confident that her determination will lead to even more remarkable achievements. Keep up the excellent work, Ms. Johnson!',
            date: '2023-08-01 08:05:02',
            comment_type: 'comment'
        },
        {
            id: 3,
            author: 'Ivan Tszian',
            comment: 'We look forward to accompanying her on this path to improved health and are confident that her determination will lead to even more remarkable achievements. Keep up the excellent work, Ms. Johnson!',
            date: '2023-08-01 08:05:02',
            comment_type: 'comment'
        }
    ]
}

const inquiryCommentsData = [
    {
        "id": 1,
        "inquiry_id": 1,
        "comment": "Inquiry was created by <b>CWR Billing</b>",
        "admin_id": 62,
        "is_system_comment": 1,
        "created_at": "2023-08-04 06:46:29",
        "updated_at": "2023-08-04 06:46:29",
        "deleted_at": null,
        "user": {
            "user_id": 62,
            "firstname": "CWR",
            "lastname": "Billing",
            "google_drive": 0,
            "about": null,
            "photo": null,
            "signature": null,
            "created_at": "2018-10-05 10:00:24",
            "updated_at": "2018-10-05 10:00:24",
            "deleted_at": null,
            "has_access_rights_to_reassign_page": 0
        }
    },
    {
        "id": 2,
        "inquiry_id": 1,
        "comment": "Inquiry stage was changed from <b>Inbox</b> to <b>In progress</b> by <b>CWR Billing</b> with following comment: Test comment",
        "admin_id": 62,
        "is_system_comment": 1,
        "created_at": "2023-08-04 06:50:10",
        "updated_at": "2023-08-04 06:50:10",
        "deleted_at": null,
        "user": {
            "user_id": 62,
            "firstname": "CWR",
            "lastname": "Billing",
            "google_drive": 0,
            "about": null,
            "photo": null,
            "signature": null,
            "created_at": "2018-10-05 10:00:24",
            "updated_at": "2018-10-05 10:00:24",
            "deleted_at": null,
            "has_access_rights_to_reassign_page": 0
        }
    },
    {
        "id": 4,
        "inquiry_id": 1,
        "comment": "Created comment",
        "admin_id": 62,
        "is_system_comment": 0,
        "created_at": "2023-08-04 07:10:58",
        "updated_at": "2023-08-04 07:10:58",
        "deleted_at": null,
        "user": {
            "user_id": 62,
            "firstname": "CWR",
            "lastname": "Billing",
            "google_drive": 0,
            "about": null,
            "photo": null,
            "signature": null,
            "created_at": "2018-10-05 10:00:24",
            "updated_at": "2018-10-05 10:00:24",
            "deleted_at": null,
            "has_access_rights_to_reassign_page": 0
        }
    }
]

const createdCommentData = {
    "inquiry_id": 1,
    "comment": "Created comment",
    "admin_id": 62,
    "is_system_comment": true,
    "updated_at": "2023-08-04 07:10:58",
    "created_at": "2023-08-04 07:10:58",
    "id": 4
}

export const getMockDataForNewPatientsDashboard = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: dataForNewPatientsDashboard })
        }, 0)
    })
}

export const getMockDataForPatientProfile = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: dataForPatientProfile })
        }, 0)
    })
}

export const getMockDataForInquiryComments = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: inquiryCommentsData })
        }, 0)
    })
}

export const getMockDataForCreatedComment = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: createdCommentData })
        }, 0)
    })
}