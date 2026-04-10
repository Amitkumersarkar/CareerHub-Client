import { useParams } from "react-router-dom";

const JobApply = () => {
    const { id } = useParams();
    console.log(id);

    const handleSubmitJobs = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.name.value;
        const phone = form.phone.value;
        const resume = form.resume.value;
        const coverLetter = form.coverLetter.value;
        console.log(name, email, phone, resume, coverLetter);

    }
    return (
        <div className="max-w-lg mx-auto p-6 bg-black shadow rounded m-10">
            <h2 className="text-2xl font-bold mb-4">Job Apply</h2>

            <form onSubmit={handleSubmitJobs} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-2 border rounded"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-2 border rounded"
                    required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-2 border rounded"
                    required
                />

                <input
                    type="file"
                    name="resume"
                    className="w-full p-2 border rounded"
                    accept=".pdf,.doc,.docx"
                />

                <textarea
                    name="coverLetter"
                    placeholder="Cover Letter"
                    className="w-full p-2 border rounded"
                    rows="4"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded"
                >
                    Apply Now
                </button>
            </form>
        </div>
    );
};

export default JobApply;