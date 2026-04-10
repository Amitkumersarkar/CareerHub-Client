import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, company_logo } = job;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="flex justify-center items-center gap-4 m-4">
                <figure>
                    <img
                        className="w-15"
                        src={company_logo}
                        alt="logo" />
                </figure>
                <div>
                    <h3 className="text-2xl">{company}</h3>
                    <p className="flex justify-center items-center gap-1"> <IoLocationOutline /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="">{description}</p>
                <div className="flex gap-3 flex-wrap">
                    {requirements.map((skill, idx) => <p key={idx} className="text-center border hover:bg-fuchsia-700 rounded-md">{(skill)}</p>)}
                </div>
                <div>
                    <p className="">Salary : {salaryRange.min}-{salaryRange.max} BDT</p>
                </div>
                <div className="flex justify-center mt-3">
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-secondary ">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;