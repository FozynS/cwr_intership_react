import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";
import Tribute from "tributejs";
import classNames from "classnames";
import Icon from "@mdi/react";
import { mdiAttachment } from "@mdi/js";
import DetailsIcon from "../../../../assets/icons/details.svg";
import ChartIcon from "../../../../assets/icons/chart.svg";
import CreatePatientIcon from "../../../../assets/icons/create-patient.svg";
import CallIcon from "../../../../assets/icons/call.svg";
import HexCrossIcon from "../../../../assets/icons/hex-cross.svg";
import PatientFormsModal from "../../../../components/Modals/PatientFormsModal";
import SourceTag from "../SourceTag";
import ThreeDotsMenu from "../ThreeDotsMenu";
import CircleLoader from "../../../../components/CircleLoader";
import { getInquirableFullname } from "../../../../utilities/newPatientsCrmUtils";
import {
    ACTIVE_APPOINTMENT_TYPE,
    RESCHEDULED_APPOINTMENT_TYPE,
} from "../../../../constants";
import * as newPatientsDashboardApi from "../../../../api/pages/new-patients-dashboard-page";
import * as newPatientsDashboardReducer from "../../../../store/reducers/newPatientsDashboard.reducer";
import * as utils from "./utils";
import styles from "./index.module.scss";
import moment from "moment-timezone";
import {
    APPOINTMENT_SCHEDULED_LANE_ID,
    INITIAL_SURVEY_COMMENT_TYPE,
    ONBOARDING_COMPLETE_COMMENT_TYPE,
    SECOND_SURVEY_COMMENT_TYPE,
} from "../../../../constants/new-patients-dashboard";
import { getDisplayedProviderForInquiry, processCardData } from "../../utils";
import { getUsFormat } from "../../../../mixins/phone-format";
import PatientLeadDocumentComment from "./components/PatientLeadDocumentComment";
import PatientAlertComment from "./components/PatientAlertComment";
import InitialSurveyCompleteComment from "./components/InitialSurveyCompleteComment";
import OnboardingCompleteComment from "./components/OnboardingCompleteComment";
import DefaultComment from "./components/DefaultComment";
import SecondSurveyCompleteComment from "./components/SecondSurveyCompleteComment";

const PatientDetailsModal = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { app, newPatientsDashboard } = useSelector((state) => state);
    const { queryParams } = app;
    const {
        selectedCardData,
        removeCardData,
        eventBus,
        fileTypeSelection,
        providersDatasetForTribute,
    } = newPatientsDashboard;

    const commentsObserverRef = useRef(null);
    const dotsIconRef = useRef(null);
    const sendFormDialogRef = useRef(null);
    const commentRef = useRef(null);

    const [commentsPage, setCommentsPage] = useState(1);
    const [commentsPageCount, setCommentsPageCount] = useState(1);
    const [newComment, setNewComment] = useState("");
    const [showSendFormDialog, setShowSendFormDialog] = useState(false);
    const [isLoadingComments, setIsLoadingComments] = useState(false);
    const [commentIsSaving, setCommentIsSaving] = useState(false);
    const [isLoadingAdditionalComments, setIsLoadingAdditionalComments] =
        useState(false);
    const [isLoadingCreatePatient, setIsLoadingCreatePatient] = useState(false);

    const show =
        selectedCardData && !removeCardData && !fileTypeSelection.showModal;

    const patientName =
        selectedCardData && getInquirableFullname(selectedCardData);
    const dateOfBirth =
        selectedCardData && selectedCardData.date_of_birth
            ? utils.formatDate(selectedCardData.date_of_birth)
            : "Not specified";
    const age =
        selectedCardData && selectedCardData.date_of_birth
            ? utils.calculateAge(selectedCardData.date_of_birth)
            : "Not specified";
    const sex = selectedCardData && utils.getSexLabel(selectedCardData.sex);
    const nextAppointmentDateTime = selectedCardData?.nextAppointment
        ?.date_of_service
        ? `${selectedCardData.nextAppointment.date_of_service.date} ${selectedCardData.nextAppointment.date_of_service.time}`
        : null;
    const displayedProvider = selectedCardData
        ? getDisplayedProviderForInquiry({
              nextAppointment: selectedCardData.nextAppointment,
              isPatientCreated: selectedCardData.isPatientCreated,
              inquirable: selectedCardData,
          })
        : null;

    const getNextAppointmentType = () => {
        if (!selectedCardData || !selectedCardData.nextAppointment) {
            return null;
        }

        return selectedCardData.rescheduledAppointment
            ? RESCHEDULED_APPOINTMENT_TYPE
            : ACTIVE_APPOINTMENT_TYPE;
    };

    const nextAppointmentType = getNextAppointmentType();

    const threeDotsText = <div style={{ width: "214px" }}>Patient forms</div>;

    const fetchAdditionalComments = () => {
        if (
            selectedCardData &&
            selectedCardData.comments?.length &&
            commentsPage < commentsPageCount
        ) {
            setIsLoadingAdditionalComments(true);

            newPatientsDashboardApi
                .getInquiryComments({
                    id: selectedCardData.inquiry_id,
                    page: commentsPage + 1,
                })
                .then((res) => {
                    if (
                        localStorage.getItem("currentInquiryId")?.toString() ===
                            selectedCardData.inquiry_id.toString() &&
                        res.data.data.length
                    ) {
                        const data = [
                            ...selectedCardData.comments,
                            ...res.data.data,
                        ];
                        dispatch(
                            newPatientsDashboardReducer.setCommentsInSelectedCardDataAC(
                                { data },
                            ),
                        );
                        setCommentsPage(commentsPage + 1);
                    }
                })
                .finally(() => {
                    if (
                        localStorage.getItem("currentInquiryId")?.toString() ===
                        selectedCardData.inquiry_id.toString()
                    ) {
                        setIsLoadingAdditionalComments(false);
                    }
                });
        }
    };

    const clearComment = () => {
        setNewComment("");
        commentRef.current.innerHTML = "";
    };

    const handleSaveComment = () => {
        setCommentIsSaving(true);

        const payload = {
            id: selectedCardData.inquiry_id,
            data: { comment: newComment },
        };
        newPatientsDashboardApi.createInquiryComment(payload).then((res) => {
            const data = res.data;

            const comment = {
                model: "PatientComment",
                comment: data.comment,
                full_admin_name: `${data.admin.firstname} ${data.admin.lastname}`,
                created_at: data.created_at,
            };

            dispatch(
                newPatientsDashboardReducer.setCommentsInSelectedCardDataAC({
                    data: [comment, ...selectedCardData.comments],
                }),
            );
            clearComment();
            setCommentIsSaving(false);
        });
    };

    const closeModal = () => {
        dispatch(
            newPatientsDashboardReducer.setSelectedCardDataAC({ data: null }),
        );
        setCommentsPage(1);
        setCommentsPageCount(1);
        setIsLoadingCreatePatient(false);
        setIsLoadingComments(false);
        setIsLoadingAdditionalComments(false);
        localStorage.removeItem("currentInquiryId");
    };

    const patientChartClick = () => {
        window.open(`/chart/${selectedCardData.id}`, "_blank");
    };

    const createPatientClick = () => {
        if (isLoadingCreatePatient) {
            return;
        }

        setIsLoadingCreatePatient(true);

        newPatientsDashboardApi
            .createPatientFromPatientLeadForInquiry({
                id: selectedCardData.inquiry_id,
            })
            .then((res) => {
                const inquiry = res.data;
                inquiry.id = inquiry.id.toString();

                dispatch(
                    newPatientsDashboardReducer.setSelectedCardDataAC({
                        data: {
                            ...inquiry.inquirable,
                            inquiry_id: inquiry.id,
                            stageId: inquiry.stage_id,
                            source: inquiry.source,
                            registrationMethod: inquiry.registration_method,
                            isPatientCreated: true,
                        },
                    }),
                );

                const updatedCard = processCardData(inquiry);

                eventBus.publish({
                    type: "UPDATE_CARD",
                    laneId: inquiry.stage_id,
                    card: updatedCard,
                });

                dispatch(
                    newPatientsDashboardReducer.updateCardDataAC({
                        data: updatedCard,
                        meta: {
                            stageId: inquiry.stage_id,
                            id: inquiry.id,
                        },
                    }),
                );
            })
            .finally(() => {
                setIsLoadingCreatePatient(false);
            });
    };

    const patientCallClick = () => {
        closeModal();

        const data = {
            patientId: selectedCardData.id,
            patientType: selectedCardData.isPatientCreated
                ? "patient"
                : "patient_lead",
        };
        dispatch(newPatientsDashboardReducer.setCallModalDataAC({ data }));
    };

    const handleCancelClick = () => {
        clearComment();
    };

    const handleArchivePatientClick = () => {
        const data = {
            laneId: selectedCardData.stageId,
            cardId: selectedCardData.inquiry_id,
            patientName,
        };
        dispatch(newPatientsDashboardReducer.setRemoveCardDataAC({ data }));
    };

    const handleUploadFile = (e) => {
        const selectedFile = e.target.files[0];

        const payload = new FormData();

        payload.append("qquuid", uuidv4());
        payload.append("qqfilename", selectedFile.name);
        payload.append("qqtotalfilesize", String(selectedFile.size));
        payload.append("qqfile", selectedFile);

        dispatch(
            newPatientsDashboardReducer.setFileTypeSelectionAC({
                data: { showModal: true, fileId: null },
            }),
        );

        if (selectedCardData.isPatientCreated) {
            payload.append("patient_id", selectedCardData.id);

            newPatientsDashboardApi.uploadPatientFile(payload).then((res) => {
                dispatch(
                    newPatientsDashboardReducer.setFileTypeSelectionAC({
                        data: {
                            showModal: true,
                            fileId: res.data.new_file_id,
                            patientIsCreated: selectedCardData.isPatientCreated,
                        },
                    }),
                );
            });
        } else {
            newPatientsDashboardApi
                .uploadPatientLeadFile(selectedCardData.id, payload)
                .then((res) => {
                    dispatch(
                        newPatientsDashboardReducer.setFileTypeSelectionAC({
                            data: {
                                showModal: true,
                                fileId: res.data.new_file_id,
                                patientIsCreated:
                                    selectedCardData.isPatientCreated,
                            },
                        }),
                    );
                });
        }
    };

    useEffect(() => {
        let observer;

        if (commentsObserverRef.current) {
            observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        fetchAdditionalComments();
                    }
                },
                { threshold: 1 },
            );

            observer.observe(commentsObserverRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    });

    const attachTributeToComment = () => {
        if (commentRef.current && selectedCardData) {
            const values = selectedCardData.isPatientCreated
                ? providersDatasetForTribute
                : providersDatasetForTribute.filter((item) => {
                      return (
                          item.key.includes("(Admin)") ||
                          item.key.includes("(Secretary)") ||
                          item.key.includes("(Patient Relation Manager)")
                      );
                  });

            const options = {
                trigger: "@",
                values,
                selectTemplate: function (item) {
                    return (
                        '<span class="comment-mention" data-id="' +
                        item.original.id +
                        '" contenteditable="false">@' +
                        item.original.value +
                        "</span>"
                    );
                },
            };
            const tribute = new Tribute(options);

            tribute.attach(commentRef.current);
        }
    };

    useEffect(() => {
        attachTributeToComment();
    }, [selectedCardData]);

    const fetchComments = () => {
        if (selectedCardData) {
            setIsLoadingComments(true);
            localStorage.setItem(
                "currentInquiryId",
                selectedCardData.inquiry_id,
            );

            newPatientsDashboardApi
                .getInquiryComments({
                    id: selectedCardData.inquiry_id,
                    page: commentsPage,
                })
                .then((res) => {
                    if (
                        localStorage.getItem("currentInquiryId")?.toString() ===
                        selectedCardData.inquiry_id.toString()
                    ) {
                        dispatch(
                            newPatientsDashboardReducer.setCommentsInSelectedCardDataAC(
                                { data: res.data.data },
                            ),
                        );
                        setCommentsPageCount(res.data.last_page);
                    }
                })
                .finally(() => {
                    if (
                        localStorage.getItem("currentInquiryId")?.toString() ===
                        selectedCardData.inquiry_id.toString()
                    ) {
                        setIsLoadingComments(false);
                    }
                });
        }
    };

    useEffect(() => {
        fetchComments();
    }, [selectedCardData?.id]);

    const scrollToCommentById = (id) => {
        const commentElement = document.getElementById(`comment-${id}`);

        if (commentElement) {
            commentElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
            navigate("/new-patients-dashboard");
        } else {
            const lastCommentIndex = selectedCardData.comments.length - 1;
            const lastCommentId =
                selectedCardData.comments[lastCommentIndex].id;
            scrollToCommentById(lastCommentId);
        }
    };

    useEffect(() => {
        if (selectedCardData?.comments?.length && queryParams.comment) {
            setTimeout(() => {
                scrollToCommentById(queryParams.comment);
            }, 200);
        }
    }, [selectedCardData?.comments]);

    useOnClickOutside(sendFormDialogRef, (e) => {
        if (!dotsIconRef.current || !dotsIconRef.current.contains(e.target)) {
            setShowSendFormDialog(false);
        }
    });

    if (!selectedCardData) {
        return <></>;
    }

    const { onboardingDate, onboardingTime, alert } = selectedCardData;

    const formattedOnboardingDate = onboardingDate
        ? moment(onboardingDate, "YYYY-MM-DD").format("MM/DD/YYYY")
        : "-";
    const formattedOnboardingTime = onboardingTime || "-";

    let coPay = "-";
    let deductible = "-";

    if (alert) {
        coPay = `$${alert.co_pay}`;
        deductible = `$${alert.deductible}`;
    }

    const getOnboardingInfo = () => {
        if (selectedCardData.onboardingCompleteComment) {
            const { comment, metadata, admin, created_at } =
                selectedCardData.onboardingCompleteComment;

            const adminName = `${admin.firstname} ${admin.lastname}`;
            const formattedPhone = metadata.phone
                ? getUsFormat(metadata.phone)
                : "-";
            const createdAtTime = moment(created_at).format("hh:mm A");

            return (
                <div className={styles.info}>
                    <div className="d-flex gap-1">
                        <div className="fw-bold nowrap">Onboarding done</div>
                        <div>
                            by {adminName} at {createdAtTime}
                        </div>
                    </div>
                    <div className="d-flex gap-1">
                        <div className="fw-bold" style={{ width: "75px" }}>
                            Comment:
                        </div>
                        <div>{comment}</div>
                    </div>
                    <div className="d-flex gap-1">
                        <div className="fw-bold" style={{ width: "75px" }}>
                            Phone:
                        </div>
                        <div>{formattedPhone}</div>
                    </div>
                </div>
            );
        }

        if (selectedCardData.stageId === APPOINTMENT_SCHEDULED_LANE_ID) {
            return (
                <div className={styles.info}>
                    <div className="d-flex align-items-center">
                        <div className={styles.field}>Onboarding time:</div>
                        <div className={styles.value}>
                            {`${formattedOnboardingDate} ${formattedOnboardingTime}`}
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className={styles.field}>Co-pay:</div>
                        <div className={styles.value}>{coPay || "-"}</div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className={styles.field}>Deductible:</div>
                        <div className={styles.value}>{deductible || "-"}</div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className={styles.field}>Message:</div>
                        <div className={styles.value}>
                            {selectedCardData.alert?.message || "-"}
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className={styles.field}>Phone:</div>
                        <div className={styles.value}>
                            {selectedCardData.onboardingPhone || "-"}
                        </div>
                    </div>
                </div>
            );
        }

        return <></>;
    };

    const getCommentComponent = (comment) => {
        switch (comment.model) {
            case "PatientDocument":
            case "PatientLeadDocument":
                return <PatientLeadDocumentComment comment={comment} />;
            case "PatientAlert":
                return <PatientAlertComment comment={comment} />;
            default:
                if (comment.comment_type === INITIAL_SURVEY_COMMENT_TYPE) {
                    return <InitialSurveyCompleteComment comment={comment} />;
                }

                if (comment.comment_type === SECOND_SURVEY_COMMENT_TYPE) {
                    return <SecondSurveyCompleteComment comment={comment} />;
                }

                if (comment.comment_type === ONBOARDING_COMPLETE_COMMENT_TYPE) {
                    return <OnboardingCompleteComment comment={comment} />;
                }

                return <DefaultComment comment={comment} />;
        }
    };

    return (
        <Modal
            show={show}
            size="lg"
            onHide={closeModal}
            disabled={showSendFormDialog}
            className={classNames(
                "custom-modal",
                showSendFormDialog && "faded",
            )}>
            <ModalHeader closeButton className={styles.header}>
                <img src={DetailsIcon} alt="details-icon" />
                <div className={styles.name}>{patientName}</div>
                <div className={styles.age}>
                    {age} years, {sex}
                </div>
            </ModalHeader>
            <ModalBody className="container">
                <div className="row">
                    <div className="col-7 d-flex flex-column gap-4">
                        <div className="d-flex flex-column align-items-end">
                            <div className="mb-3 w-100 custom-form-group">
                                <label htmlFor="exampleFormControlTextarea1">
                                    Enter your comment
                                </label>
                                <div className="position-relative ">
                                    <div
                                        className={classNames(
                                            styles.commentTextarea,
                                            "form-control comment-textarea",
                                        )}
                                        contentEditable
                                        ref={commentRef}
                                        onInput={(e) =>
                                            setNewComment(e.target.innerHTML)
                                        }></div>
                                    <label
                                        htmlFor="file"
                                        className={styles.clip}>
                                        <Icon path={mdiAttachment} size={1} />
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        hidden
                                        onChange={handleUploadFile}
                                    />
                                </div>
                            </div>
                            <div className="d-flex gap-1">
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-large btn-outline-primary"
                                        onClick={handleCancelClick}>
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSaveComment}
                                        className="btn btn-large btn-primary text-white d-flex align-items-center justify-content-center gap-2"
                                        disabled={!newComment}
                                        style={{ width: "106px" }}>
                                        <div>Save</div>
                                        {commentIsSaving && (
                                            <div
                                                className="spinner-border spinner-border-sm"
                                                role="status"></div>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {isLoadingComments ? (
                            <CircleLoader />
                        ) : selectedCardData.comments?.length ? (
                            <div className="d-flex flex-column gap-4">
                                {selectedCardData.comments.map(
                                    (comment, index) => (
                                        <div
                                            key={index}
                                            id={`comment-${comment.id}`}>
                                            {getCommentComponent(comment)}
                                        </div>
                                    ),
                                )}
                            </div>
                        ) : (
                            <div>No comments yet</div>
                        )}
                        {!isLoadingComments && !isLoadingAdditionalComments && (
                            <div ref={commentsObserverRef} />
                        )}
                        {isLoadingAdditionalComments && (
                            <div
                                className={
                                    "d-flex gap-1 align-items-center justify-content-center"
                                }
                                style={{ height: "10px" }}>
                                <CircleLoader />
                            </div>
                        )}
                    </div>
                    <div className={classNames(styles.patientDetails, "col-5")}>
                        <div className={styles.title}>
                            <div>Patient details:</div>
                            <ThreeDotsMenu
                                text={threeDotsText}
                                onAction={() => setShowSendFormDialog(true)}
                                disabled={!selectedCardData.isPatientCreated}
                            />
                        </div>
                        <div className="d-flex gap-2">
                            {selectedCardData.isPatientCreated ? (
                                <button
                                    onClick={patientChartClick}
                                    className="btn btn-large btn-primary text-white d-flex justify-content-center align-items-center gap-1 w-100">
                                    <img src={ChartIcon} alt="chart-icon" />
                                    <div>Chart</div>
                                </button>
                            ) : (
                                <button
                                    onClick={createPatientClick}
                                    disabled={isLoadingCreatePatient}
                                    className="btn btn-large btn-primary text-white d-flex justify-content-center align-items-center gap-1 w-100">
                                    {isLoadingCreatePatient ? (
                                        <CircleLoader
                                            color={"#fff"}
                                            size={"small"}
                                        />
                                    ) : (
                                        <>
                                            <img
                                                src={CreatePatientIcon}
                                                alt="chart-icon"
                                            />
                                            <div>Create pt.</div>
                                        </>
                                    )}
                                </button>
                            )}

                            <button
                                className="btn btn-large btn-primary text-white d-flex justify-content-center align-items-center gap-1 w-100"
                                disabled={!selectedCardData.cell_phone && !selectedCardData.home_phone && !selectedCardData.work_phone}
                                onClick={patientCallClick}>
                                <img src={CallIcon} alt="call-icon" />
                                <div>Call</div>
                            </button>
                        </div>
                        <button
                            onClick={handleArchivePatientClick}
                            className="btn btn-danger d-flex gap-1 align-items-center justify-content-center">
                            <img src={HexCrossIcon} alt="cross-icon" />
                            <div>Archive inquiry</div>
                        </button>

                        <div className={styles.info}>
                            <div className="d-flex my-2 gap-2 flex-wrap">
                                {selectedCardData.therapy_type && (
                                    <SourceTag
                                        size={"lg"}
                                        source={selectedCardData.therapy_type}
                                    />
                                )}
                                <SourceTag
                                    source={selectedCardData.registrationMethod}
                                    size={"lg"}
                                />
                                <SourceTag
                                    source={selectedCardData.source}
                                    size={"lg"}
                                />
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex align-items-center">
                                <div className={styles.field}>Full name:</div>
                                <div className={styles.value}>
                                    {patientName}
                                </div>
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex align-items-center">
                                <div className={styles.field}>
                                    Date of birth:
                                </div>
                                <div className={styles.value}>
                                    {dateOfBirth}
                                </div>
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex align-items-center">
                                <div className={styles.field}>Age:</div>
                                <div className={styles.value}>{age}</div>
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex align-items-center">
                                <div className={styles.field}>Sex:</div>
                                <div className={styles.value}>{sex}</div>
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex align-items-center">
                                <div className={styles.field}>Email:</div>
                                <div className={styles.value}>
                                    {selectedCardData.email || "-"}
                                </div>
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex align-items-center">
                                <div className={styles.field}>Insurance:</div>
                                <div className={styles.value}>
                                    {selectedCardData.insurance?.insurance ||
                                        selectedCardData.primary_insurance ||
                                        "-"}
                                </div>
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex align-items-center">
                                <div className={styles.field}>Address:</div>
                                <div className={styles.value}>
                                    {selectedCardData.address || "-"}
                                </div>
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex align-items-center">
                                <div className={styles.field}>Provider:</div>
                                <div className={styles.value}>
                                    {displayedProvider?.provider_name || "-"}
                                </div>
                            </div>
                            <hr className="m-0" />
                            <div className="d-flex align-items-center">
                                <div className={styles.field}>
                                    Appt. scheduled:
                                </div>
                                <div
                                    className={classNames(
                                        styles.value,
                                        styles[nextAppointmentType],
                                    )}>
                                    {nextAppointmentDateTime || "-"}
                                </div>
                            </div>
                        </div>

                        {getOnboardingInfo()}
                    </div>
                </div>

                {selectedCardData.isPatientCreated && <PatientFormsModal
                    showModal={showSendFormDialog}
                    closeModal={() => {
                        setShowSendFormDialog(false);
                    }}
                    patient={selectedCardData}
                />}
            </ModalBody>
        </Modal>
    );
};

export default PatientDetailsModal;
