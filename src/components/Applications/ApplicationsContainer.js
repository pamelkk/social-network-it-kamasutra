import React from "react";
import Applications from "./Applications";

const ApplicationsContainer = (props) => {
    let state=props.store.getState().applicationsMenu;

    return (
        <Applications applicationsMenu={state} />
    );
};

export default ApplicationsContainer;