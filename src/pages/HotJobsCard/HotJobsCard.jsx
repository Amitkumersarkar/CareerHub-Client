import { IoLocationOutline } from "react-icons/io5";

const HotJobsCard = ({ job }) => {
    const { title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, company_logo } = job;
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
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;