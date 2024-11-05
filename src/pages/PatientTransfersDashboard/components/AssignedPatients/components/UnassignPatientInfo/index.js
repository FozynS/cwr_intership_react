import React from "react";
import CustomBadge from "../../../../../SecretaryDashboard/components/CustomBadge";
import hexToRgba from "../../../../../../utilities/hexToRgba";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "../../../../../../components/InsuranceAuthorizationNumber/index.module.scss";
import Icon from "@mdi/react";
import {mdiHelpCircle} from "@mdi/js";

const UnassignPatientInfo = ({patientData, provider, supervisor, otherProviders}) => {
    return (
        <div>
            <div className={'d-flex align-items-center'}>
                <span>Patient:</span>
                <b className={'ms-1'}>{patientData.patient_name}</b>,
                <span className={'ms-1'}>{patientData.patient_age} years old,</span>
                <span className={'mx-1'}>{patientData.patient_sex},</span>
                <div className={'d-inline-flex'}>
                    <CustomBadge
                        title={patientData.patient_status.status}
                        background={hexToRgba("#" + patientData.patient_status.hex_color, 0.2)}
                        textColor={"#" + patientData.patient_status.hex_color}
                    />
                </div>
            </div>
            <div className={'d-flex align-items-center gap-1'}>
                <span>Provider: <b>{provider.provider_name}</b></span>

                {otherProviders.length !== 0 &&
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip>
                                <div>
                                    {otherProviders.map(item => <div key={item.id}>{item.provider.provider_name}</div>)}
                                </div>
                            </Tooltip>
                        }>
                        <div className={styles.helpIcon}>
                            <Icon path={mdiHelpCircle} size={0.6} />
                        </div>
                    </OverlayTrigger>
                }
            </div>

            <br/>

            <div>
                <div>Missing progress notes count: {patientData.missing_notes_count}</div>
                <div>Drafts count: {patientData.drafts_count}</div>
                <div>Upcoming appointments count: {patientData.upcoming_appointments_count}</div>
                <div>Next appointment: {patientData.next_appointment_date || '-'}</div>
                <div>Supervisor: {supervisor ? <b>{supervisor.provider?.provider_name}</b> : '-'}</div>
            </div>
        </div>
    );
}

export default UnassignPatientInfo