import React, { useEffect } from "react";
import Board from "react-trello";
import PatientCard from "../PatientCard";
import CustomLaneHeader from "../CustomLaneHeader";

const EnhancedTrelloBoard = ({
    data,
    eventBusHandle,
    handleDragEnd,
    onLaneScroll,
}) => {
    const components = {
        Card: PatientCard,
        LaneHeader: CustomLaneHeader,
    };

    const laneStyle = {
        display: "flex",
        margin: "0",
        padding: "0",
        backgroundColor: "#FFFFFF",
    };

    return (
        <div>
            <Board
                data={data}
                style={{
                    backgroundColor: "white",
                    padding: "0",
                    gap: "10px",
                    display: "flex",
                }}
                components={components}
                cardDraggable
                hideCardDeleteIcon
                eventBusHandle={eventBusHandle}
                handleDragEnd={handleDragEnd}
                onLaneScroll={onLaneScroll}
                laneStyle={laneStyle}
            />
        </div>
    );
};

export default EnhancedTrelloBoard;
