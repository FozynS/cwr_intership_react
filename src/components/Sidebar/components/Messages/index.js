import classNames from 'classnames';
import React from 'react'
import { mdiCloseCircle } from '@mdi/js'
import styles from './index.module.scss'
import Icon from '@mdi/react';
import { deleteMessage, getMessages } from '../../../../api/common/sidebar';

const Messages = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [messages, setMessages] = React.useState([]);
    const [pagination, setPagination] = React.useState();
    const [allDataIsLoaded, setAllDataIsLoaded] = React.useState(false)
    const [loadingEl, setLoading] = React.useState(null)

    const loaderRef = React.useRef(null);

    const getProviderMessages = async (page) => {
        try {
            const response = await getMessages(page);

            setMessages(prevMessages => ([...prevMessages, ...response.data.data]));

            if (response.data.meta.pagination) {
                setPagination(response.data.meta.pagination);
            }

            const newData = messages.concat(response.data.data);
            if (newData.length >= response.data.meta.pagination.total) {
                setAllDataIsLoaded(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const refreshMessages = async () => {
        try {
            setCurrentPage(1);
            setAllDataIsLoaded(false);

            const response = await getMessages(1);
            setMessages(response.data.data);

            if (response.data.meta.pagination) {
                setPagination(response.data.meta.pagination);
            }

            if (response.data.data.length >= response.data.meta.pagination.total) {
                setAllDataIsLoaded(true);
            } else {
                initIntersectionObserver();
            }

        } catch (err) {
            console.log(err)
        }
    }

    const fullName = (app) => {
        return app.first_name + ' ' + app.last_name + ' ' + app.middle_initial;
    }

    const deleteMessageClick = async (e, message, index) => {
        e.stopPropagation();

        if (loadingEl) {
            return;
        }

        setLoading(index);
        try {
            const payload = {
                mention_id: message.id,
            };
            await deleteMessage(payload);

            await refreshMessages();

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(null);
        }
    }

    const openMessage = (message) => {
        let url = `/chart/${message.comment.patient_id}?scrollto=${message.model + message.comment_id}`;
        if (message.model === 'PatientLeadComment') {
            url = `/new-patients-dashboard?selectedCard=${message.comment.patient_lead.inquiry.id}&comment=${message.comment.id}`;
        }
        document.location.href = url;
    }

    const initIntersectionObserver = () => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && messages.length) {
                    setCurrentPage(page => {
                        const newPage = page + 1
                        getProviderMessages(newPage);
                        return newPage
                    })
                }

            },
            {
                root: null,
                threshold: 0.5,
            }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }
    }

    React.useEffect(() => {
        getProviderMessages(currentPage)
    }, [])

    React.useEffect(() => {
        initIntersectionObserver();
    }, [messages]);
    
    return (
        <div
            className={classNames(
                styles.messagesCard,
                "sidebar-section-container",
            )}>
            <div className={classNames(styles.title, "p-2 h6 m-0 fw-bolder")}>
                <span>Messages </span>
                <span>{pagination ? `(${pagination.total})` : `(0)`}</span>
            </div>
            <div className="h-100">
                <table className="table m-0">
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th
                                className="text-right"
                                style={{ whiteSpace: "nowrap" }}>
                                Message from
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map((message, index) => {
                            let statusColor = message.comment.patient
                                ? `#${message.comment.patient.status.status_color}`
                                : "#000000";
                            let patient = message.comment.patient || message.comment.patient_lead;

                            return (
                                <tr
                                    key={index}
                                    onClick={() => openMessage(message)}>
                                    <td>
                                        <div
                                            className={styles.text}
                                            style={{ color: statusColor }}>
                                            {fullName(patient)}
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.text}>
                                            {message.comment.provider
                                                ? message.comment.provider
                                                      .provider_name
                                                : message.comment.provider_name}
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                            className={styles.text}
                                            onClick={(e) =>
                                                deleteMessageClick(
                                                    e,
                                                    message,
                                                    index,
                                                )
                                            }>
                                            {loadingEl === index && (
                                                <div
                                                    ref={loaderRef}
                                                    className="position-absolute spinner-border spinner-border-sm text-primary"
                                                    role="status"
                                                    style={{ right: "30px" }}>
                                                    <span className="visually-hidden">
                                                        Loading...
                                                    </span>
                                                </div>
                                            )}
                                                
                                            {loadingEl !== index && (
                                                <Icon
                                                    path={mdiCloseCircle}
                                                    style={{ display: "block" }}
                                                    size={1}
                                                    color="red"
                                                />
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {!allDataIsLoaded && (
                    <div
                        className={classNames(
                            styles.loader,
                            "p-1 d-flex align-items-center justify-content-center",
                            messages.length === 0 && !allDataIsLoaded && "h-100",
                        )}>
                        <div
                            ref={loaderRef}
                            className="spinner-border text-primary"
                            role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Messages