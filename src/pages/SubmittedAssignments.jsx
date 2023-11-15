import { useQuery } from "@tanstack/react-query";
import AllPageBanner from "../components/Banner/AllPageBanner";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SubmittedAssignments = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["submitted-assignments"],
    queryFn: async () => {
      const data = await fetch(
        `https://collabora-task-server.vercel.app/api/v1/submitted-assignments?status=pending`
      );
      return await data.json();
    },
  });

  console.log(data, isLoading, isFetching);

  return (
    <>
    <Helmet>
        <title>ColabTask | Submitted Assignments</title>
      </Helmet>
      <div>
        <AllPageBanner headerText={"Submitted Assignments"}></AllPageBanner>
      </div>
      <div>
        <p className="text-center my-10 text-xl font-semibold">
          Total Pending: {data?.length}{" "}
        </p>
      </div>
      <div className="px-2 lg:w-[80%] mx-auto  my-10 md:my-16">
        <div className="overflow-x-auto border">
          <table className=" min-w-full divide-y-2 divide-gray-200 bg-white text-sm lg:text-lg">
            <thead className="ltr:text-left rtl:text-right bg-secondary text-white">
              <tr>
                <th className="whitespace-nowrap px-4  font-medium  py-4">
                  Examinee
                </th>
                <th className="whitespace-nowrap px-4 font-medium  py-4">
                  Assignment Title
                </th>
                <th className="whitespace-nowrap px-4 font-medium  py-4">
                  Total Marks
                </th>

                <th className="whitespace-nowrap px-4 font-medium  py-4">
                  Status
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-center">
              {isLoading ? (
                <>
                  <tr className="">
                    <td className="whitespace-nowrap px-4 py-2  text-blue-600">
                      <span className="loading loading-dots loading-lg"></span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2  text-blue-600">
                      <span className="loading loading-dots loading-lg"></span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2  text-blue-600">
                      <span className="loading loading-dots loading-lg"></span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2  text-blue-600">
                      <span className="loading loading-dots loading-lg"></span>
                    </td>
                  </tr>
                </>
              ) : (
                data?.map((submits) => (
                  <tr key={submits._id}>
                    <td className="whitespace-nowrap px-4 py-2  text-gray-900">
                      {submits.examinee}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                      {submits.title}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-semibold text-error">
                      {submits.marks}
                    </td>

                    <td className="whitespace-nowrap px-4 py-2 text-secondary">
                      {submits.status}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <Link
                        to={`/grading/${submits?._id}`}
                        
                      >
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }} className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                          Give Mark
                        </motion.button>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SubmittedAssignments;
