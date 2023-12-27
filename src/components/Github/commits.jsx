import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from 'date-fns';

function Commits() {
    const [commits, setCommits] = useState([]);

    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const response = await axios.get('https://api.github.com/repos/sanu1020/portfolio/commits');
                console.log(response);
                setCommits(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchCommits();
    }, []);

    const latestCommits = commits.slice(0, 4);

    return (
        <div className='flex'>
            <div className='w-1.5/5 h-[200px] border border-grey-500 rounded flex-col justify-center p-4 mt-5 relative overflow-hidden ml-auto'>
            <span className="text-[12px]">Git Commits History</span>
                {latestCommits.map((commit) => (
                    <ol key={commit.sha} className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
                        <li className="ml-2">
                            <div className="absolute w-2 h-2 bg-stone-200 rounded-full mt-1 -left-1 border border-white dark:border-stone-700" />
                            <span className="text-[11px] max-h-[150px] overflow-y-hidden">{commit.commit.message}</span>
                            <div className="text-[10px] font-normal leading-none text-stone-400">
                                Updated {formatDistanceToNow(new Date(commit.commit.author.date), { addSuffix: true })}
                            </div>
                        </li>
                    </ol>
                ))}
            </div>
        </div>
    );
}

export default Commits;
