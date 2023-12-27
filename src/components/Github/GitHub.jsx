import React from "react";
import Commits from "./Commits";
import Repository from "./repository";

function GitHub() {
    return (
        <div>
            <Repository/>
            <Commits/>
        </div>
    )
}

export default GitHub;