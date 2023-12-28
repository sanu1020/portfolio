import React from "react";
import { formatDistanceToNow } from 'date-fns';


function BlogItem({title,date, image, content}) {
    return (
        <div className="border  text-justify p-2 m-2">
            <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                {title}
            </h3>
            <div className="text-[12px] font-normal leading-none text-stone-400">
                Created {formatDistanceToNow(new Date(date ), { addSuffix: true })}
            </div>
            <div className="flex  ">
                <img className="w-30 h-20 mt-[50px]" src={image}/>
                <p className="my-2 text-sm font-normal text-stone-500 dark:text-stone-400 p-1">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default BlogItem;