import { useEffect, useState } from "react";
import HotJobsCard from "../HotJobsCard/HotJobsCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState();

    useEffect(() => {
        fetch('http://localhost:4000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div>
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;