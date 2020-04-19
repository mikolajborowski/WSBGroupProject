import React from "react";

const loadingCssStyle = {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
export default function Loading() {
    return (
        <div
            className="container flex-column align-middle"
            style={loadingCssStyle}
        >
            <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
