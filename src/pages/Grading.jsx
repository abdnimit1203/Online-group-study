import { useLoaderData, useNavigate } from "react-router-dom";
import AllPageBanner from "../components/Banner/AllPageBanner";
import axios from "axios";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Grading = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const marksObtained = form.marksObtained.value;
    const feedback = form.feedback.value;

    const status = "completed";
    const submitMarkData = {
      marksObtained,
      feedback,
      status,
    };

    try {
      const res = await axios.put(
        `https://online-group-study-ab-server.vercel.app/api/v1/submitted/update/${data._id}`,
        submitMarkData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      Swal.fire({
        position: "center",
        icon: "success",
        iconColor: "white",
        title: "<sub>Marks Submitted!</sub>",
        color: "white",
        showConfirmButton: false,
        timer: 2500,
        background: "#1bd138",
      });

      console.log(res.data);
      navigate("/submitted-assignment");
    } catch (err) {
      console.error("Error submitting marks:", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to submit marks. Please try again.",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>ColabTask | Grading</title>
      </Helmet>

      <div>
        <AllPageBanner headerText="Grading" />
      </div>

      <div className="w-[80%] mx-auto my-10 md:my-16 flex flex-col md:flex-row gap-6">
        {/* Examinee Info */}
        <div className="flex-1">
          <article className="rounded-xl border border-gray-700 bg-[#4d34db] p-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="py-8 px-2">
                <h2 className="text-primary sm:border-r-4 sm:pr-4 text-lg sm:text-xl">
                  Examinee Details
                </h2>
              </div>

              <div>
                <h3 className="text sm:text-lg font-medium text-white">
                  {data?.examinee}
                </h3>
                <div className="flow-root">
                  <ul className="-m-1 flex flex-wrap">
                    <li className="p-1 leading-none">
                      <span className="text-xs font-medium text-gray-300">
                        {data?.email}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              <li>
                <div className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                  <strong className="font-medium text-white">
                    Assignment Name
                  </strong>
                  <p className="mt-1 text-xl font-medium text-pink-600">
                    {data?.title}
                  </p>
                </div>
              </li>

              <div className="text-white mt-4">
                <div className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600 space-y-4">
                  <h2 className="text-xl pb-6">Submissions: </h2>
                  <p>
                    <span className="text-primary">PDF LINK </span>:{" "}
                    <span className="hover:text-blue-300 text-[9px] md:text-sm ">
                      {data?.linkPDF}
                    </span>
                  </p>

                  {data?.linkPDF && (
                    <iframe
                      src={data.linkPDF}
                      title="Submitted PDF"
                      className="w-full min-h-screen rounded-xl"
                    />
                  )}

                  <p>
                    <span className="text-primary">Notes </span>:{" "}
                    <span className="py-4 block">{data?.notes}</span>
                  </p>
                </div>
              </div>
            </ul>
          </article>
        </div>

        {/* Grading Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-md shadow-purple-400 sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">GIVE MARKS</p>

            {/* Marks Input */}
            <div>
              <label htmlFor="marksObtained" className="sr-only">
                Marks Obtained
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full rounded-lg border-gray-200 border p-4 pe-12 text-sm shadow-sm focus:outline-purple-700"
                  placeholder="Give mark"
                  name="marksObtained"
                  min={0}
                  max={data?.marks}
                  required
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4 font-semibold text-success">
                  / {data?.marks}
                </span>
              </div>
            </div>

            {/* Feedback Input */}
            <div>
              <label htmlFor="feedback" className="sr-only">
                Feedback
              </label>
              <textarea
                className="w-full rounded-lg border-gray-300 border p-4 pe-12 text-sm shadow-sm focus:outline-purple-700"
                placeholder="Feedback"
                id="feedback"
                name="feedback"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Submit Grade
            </motion.button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Grading;
