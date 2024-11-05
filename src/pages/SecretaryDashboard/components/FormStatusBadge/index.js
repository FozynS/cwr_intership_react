import classNames from 'classnames'
import moment from '../../../../utilities/moment-config';
import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import styles from '../CustomBadge/index.module.scss'

const FormStatusBadge = ({ formStatus }) => {
    if (!formStatus) {
        return <div className={classNames('badge', styles.badge, styles.red)}>Not sent</div>
    }

    const createdAt = moment(formStatus.created_at, 'YYYY-MM-DD hh:mm:ss').format('MM/DD/YYYY');

    if (formStatus.sent_to_phone) {
        if (formStatus.sent_to_phone_error) {
            return (
                <div className={classNames('badge', styles.badge, styles.red)}>{createdAt}</div>
            )
        }

        return (
            <div className={classNames('badge', styles.badge, styles.green)}>{createdAt}</div>
        )
    }

    const arrayOfKeys = [
        'deferral_at',
        'hard_bounced_at',
        'soft_bounced_at',
        'bounced_at',
        'spam_at',
        'unsub_at',
        'rejected_at'
    ]

    const checkingProperties = () => {
        for (let i = 0; i < arrayOfKeys.length; i++) {
            if (formStatus[arrayOfKeys[i]]) {
                return true
            }
        }

        return false
    }

    if (checkingProperties()) {
        const changePropertyNameToDisplay = (key) => {
        if (key === 'deferral_at') {
            return 'Deferral'
        }
        if (key === 'hard_bounced_at') {
            return 'Hard bounced'
        }
        if (key === 'soft_bounced_at') {
            return 'Soft bounced'
        }
        if (key === 'bounced_at') {
            return 'Bounced'
        }
        if (key === 'spam_at') {
            return 'Spam'
        }
        if (key === 'unsub_at') {
            return 'Unsubscribed'
        }
        if (key === 'rejected_at') {
            return 'Rejected'
        }
        }

        let reason = []

        arrayOfKeys.forEach(key => {
            if (formStatus[key]) {
                reason.push(changePropertyNameToDisplay(key))
            }
        })

        return <div>
            <OverlayTrigger
                placement="top"
                overlay={<Tooltip>{reason.join(', ')}</Tooltip>}
            >
                <div className={classNames('badge', styles.badge, styles.red)}>{createdAt}</div>
            </OverlayTrigger>
        </div>
    }
    
    return (
        <div className={classNames('badge', styles.badge, styles.green)}>{createdAt}</div>
    )
}

export default FormStatusBadge