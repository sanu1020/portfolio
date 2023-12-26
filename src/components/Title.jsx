import React from "react";

function Title({ children, id }) {
    return (
        <h1
            id={id && id}
            className="text-1xl font-bold underline
            underline-offset-8 decoration-2 mb-5
            text-stone-900 dark:text-white"
        >
            {children}
        </h1>
    )
}

export default Title;