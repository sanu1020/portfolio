import axios from "axios";
import React, { useEffect, useState } from "react";

function Commits() {

    const [commit, setCommit] = useState([])

    useEffect(() => {
        const fetchCommits = async () => {
            try{
                const response = await axios.get('https://api.github.com/repos/sanu1020/portfolio/commits')
                console.log(response)
                setCommit(response.data)
            }catch(err) {
                console.log(err)
            }
        }

        fetchCommits();
    },[])
    return (
        <div>
           <ul>
                {commit.map((commit) => (
                    <li key={commit.sha}>
                        <strong>{commit.commit.author.name}</strong>: {commit.commit.message} :{commit.commit.author.date}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Commits;