import React from "react";

function PortfolioItem({imgUrl}) {
    return (
        <div>
            <img class="object-scale-down h-10 w-20" src={imgUrl} />
               
        </div>
    )
}

export default PortfolioItem;