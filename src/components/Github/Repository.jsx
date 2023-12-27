import axios from "axios";
import React, { useEffect, useState } from "react";

function Repository() {

    const [commit, setCommit] = useState([])

    useEffect(() => {
        const fetchCommits = async () => {
            try{
                const response = await axios.get('https://api.github.com/users/sanu1020/repos')
                console.log(response)
                setCommit(response.data)
            }catch(err) {
                console.log(err)
            }
        }
        fetchCommits();
    },[])
    return (
        <div className="flex items-center justify-center flex-col 
        text-center pt-20 pb-6">
           {/* <ul>
                {commit.map((commit) => (
                    <li key={commit.id} className="text-xs">
                        <strong>{commit.name}</strong>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default Repository