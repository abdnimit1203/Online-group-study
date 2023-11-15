import { motion } from "framer-motion";
import Swal from "sweetalert2";
import AllPageBanner from "../components/Banner/AllPageBanner";
import SingleAssignmentCard from "../components/Cards/SingleAssignmentCard";

import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
// import { BsArrowUpCircleFill } from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";
import { Helmet } from "react-helmet-async";

const Assignments = () => {
  const { user } = useAuth();

  const [deleteid, setDelete] = useState(0);
  const [difficultyLevel, setDifficultyLevel] = useState("All");
  console.log(difficultyLevel);

  // Pagination client

  const [count, setCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [postPerPage, setPostPerPage] = useState(5);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [
      "assignments",
      deleteid,
      difficultyLevel,
      currentPage,
      postPerPage,
    ],
    queryFn: async () => {
      const data = await fetch(
        `https://online-group-study-ab-server.vercel.app/api/v1/assignments?difficulty=${difficultyLevel}&page=${currentPage}&size=${postPerPage}`
      );
      return await data.json();
    },
  });
  useEffect(() => {
    fetch(
      `https://online-group-study-ab-server.vercel.app/api/v1/assignmentCount?difficulty=${difficultyLevel}`
    )
      .then((res) => res.json())
      .then((data) => setCount(data));
  }, [difficultyLevel]);

  console.log(data, isLoading, isFetching, currentPage, postPerPage);
  console.log("Count = ", count?.count);

  if (isLoading == true) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen ">
          <img src="/assets/loading.gif" alt="Loading..." className="w-36" />
        </div>
      </>
    );
  }
  //Pagination ends

  const handlePostPerPage = (e) => {
    const val = parseInt(e.target.value);
    setPostPerPage(val);
    setCurrentPage(0);
  };

  const totalposts = count?.count || 1;
  const totalPage = Math.ceil(totalposts / postPerPage);
  const pages = [...Array(totalPage).keys()];

  // delete

  const handleDelete = (id, creator_email) => {
    if (user.email === creator_email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`https://online-group-study-ab-server.vercel.app/api/v1/assignments/${id}`)
            .then((res) => {
              console.log(res.data);
            });

          Swal.fire({
            title: "Deleted!",
            text: "Your assigment file has been deleted.",
            icon: "success",
          });
          setDelete(id);
        }
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        iconColor: "white",

        title: "<sub>Opps! Only assignment creator can delete this! </sub>",
        color: "white",
        showConfirmButton: false,
        timer: 2000,
        background: "#f44336",
      });
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
     <Helmet>
        <title>ColabTask | Assignments</title>
      </Helmet>
      <div>
        <AllPageBanner headerText={"Assignments"}></AllPageBanner>
      </div>
      <div className="bg-[url('/assets/assigmentBG.png')] md:py-10">
        <div className="flex flex-col md:flex-row justify-between w-[80%] mx-auto text-xl font-semibold items-center gap-2">
          <div>
            <h2 className="text-xl md:text-3xl">
              {data?.length} of {count?.count} assignments..
            </h2>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="text-base lg:text-xl">Difficulty Level :</p>
            <motion.div whileHover={{ scale: 1.05 }} className="pt-0">
              <select
                required
                name="difficulty"
                id="difficulty"
                className="w-full rounded-lg border-gray-300 text-gray-700 h-10 sm:h-full pl-4 border md:p-4 focus:outline-none"
                onChange={(e) => {
                  setDifficultyLevel(e.target.value);
                  setCurrentPage(0);
                }}
                value={difficultyLevel}
              >
                <option value="All">All</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </motion.div>
          </div>
        </div>
        <div className="w-[80%] mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center h-full mt-10">
          {data?.map((assignment) => (
            <SingleAssignmentCard
              key={assignment._id}
              assignment={assignment}
              handleDelete={handleDelete}
              user={user}
            ></SingleAssignmentCard>
          ))}
        </div>

        {/* PAGINATION DIV Starts */}
        <div className="my-10">
          <div className="flex items-center justify-center">
            <button
              className="btn mx-2 btn-neutral btn-xs md:btn-md"
              onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
            >
              Prev
            </button>
            <div
              className={
                pages?.length >= 7 && "grid grid-cols-7 xl:grid-cols-10 gap-2 "
              }
            >
              {pages?.map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page
                      ? "btn btn-primary text-white border border-yellow-200 btn-xs md:btn-md md:mx-2"
                      : "btn btn-xs md:btn-md md:mx-2"
                  }
                >
                  {page + 1}
                </button>
              ))}
            </div>

            <button
              className="btn mx-2 btn-neutral btn-xs md:btn-md"
              onClick={() =>
                currentPage < totalPage - 1 && setCurrentPage(currentPage + 1)
              }
            >
              Next
            </button>
            <select
              value={postPerPage}
              name="postperpage"
              id="postperpage"
              onChange={handlePostPerPage}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>

        {/* PAGINATION DIV ENDS*/}
      </div>
      <button onClick={topFunction} id="myBtn" title="Go to top">
        <BiArrowToTop className="shadow-lg   shadow-indigo-500 text-5xl p-1 text-white rounded-full bg-purple-700 hover:bg-purple-500  fixed bottom-8 right-8 " />
      </button>
    </>
  );
};

export default Assignments;
