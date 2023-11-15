import { useQuery } from "@tanstack/react-query";
import AllPageBanner from "../components/Banner/AllPageBanner";
import useAuth from "../hooks/useAuth";
import {  ImFilesEmpty } from "react-icons/im";
import { Helmet } from "react-helmet-async";

const MyAssignments = () => {
  const { user } = useAuth();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["my-aasignments"],
    queryFn: async () => {
      const data = await fetch(
        `https://collabora-task-server.vercel.app/api/v1/submitted-assignments?email=${user.email}`
      );
      return await data.json();
    },
  });

  console.log(data, isLoading, isFetching, user.email);
  return (
    <>
    <Helmet>
        <title>ColabTask | My Assignment</title>
      </Helmet>
      <div>
        <AllPageBanner headerText="My Assignments"></AllPageBanner>
      </div>

      <div className="bg-[url('/assets/assigmentBG.png')] min-h-[500px]">
        <p className="text-center py-10 text-xl font-semibold">
          My  Assignments: {data?.length}{" "}
        </p>

       { data?.length ?
        <div className="px-4 lg:w-[80%] mx-auto  pb-20 ">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm lg:text-lg border">
            <thead className="ltr:text-left rtl:text-right bg-green-500 text-white h-16">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium ">
                  Examinee
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium ">
                  Assignment Title
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium ">
                  Total Marks
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium ">
                  Marks obtained
                </th>

                <th className="whitespace-nowrap px-4 py-2 font-medium ">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium ">
                  Feedback
                </th>
                {/* <th className="px-4 py-2"></th> */}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-center">
              {isLoading ? (
                <>
                  <tr className="">
                    <td className="whitespace-nowrap px-4 py-2  text-green-600">
                      <span className="loading loading-dots loading-md"></span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2  text-green-600">
                      <span className="loading loading-dots loading-md"></span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2  text-green-600">
                      <span className="loading loading-dots loading-md"></span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2  text-green-600">
                      <span className="loading loading-dots loading-md"></span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2  text-green-600">
                      <span className="loading loading-dots loading-md"></span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2  text-green-600">
                      <span className="loading loading-dots loading-md"></span>
                    </td>
                  </tr>
                </>
                
              ) : (
                data?.map((submits) => (
                  <tr key={submits._id} className="h-14">
                    <td className="whitespace-nowrap px-4 py-2  text-gray-900">
                      {submits.examinee}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                      {submits.title}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-semibold text-error">
                      {submits.marks}
                    </td>
                    <td
                      className={
                        submits?.status !== "pending"
                          ? "whitespace-nowrap px-4 py-2 text-success font-semibold"
                          : "whitespace-nowrap px-4 py-2 text-secondary"
                      }
                    >
                      {submits.marksObtained}
                    </td>

                    <td
                      className={
                        submits?.status === "completed"
                          ? "whitespace-nowrap px-4 py-2 text-success font-semibold"
                          : "whitespace-nowrap px-4 py-2 text-secondary"
                      }
                    >
                      {submits.status}
                    </td>
                    <td className={"whitespace-nowrap px-4 py-2 "}>
                      {submits.feedback}
                    </td>
                    {/* <td className="whitespace-nowrap px-4 py-2">
                      <Link to={`/grading/${submits?._id}`} className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        Give Mark
                      </Link>
                    </td> */}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div> : <div><h1 className="text-xl my-10 text-center"><ImFilesEmpty className="inline text-2xl mr-6"/> You have no assignments PENDING / COMPLETED </h1></div>
       } 
      </div>
    </>
  );
};

export default MyAssignments;
