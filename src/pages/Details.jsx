import { useLoaderData } from "react-router-dom";
import AllPageBanner from "../components/Banner/AllPageBanner";
import { motion } from "framer-motion"

import useAuth from "../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const data = useLoaderData();
  const { user } = useAuth();
  const [buttonText, setButtonText] = useState('SUBMIT');
  const [disabled, setDisabled] = useState(false);

  
  const { description, title, marks, imageURL, dueDate, difficulty } =
    data;
  // easy,medium , hard colorization

  const handleDifficulty = (diff) => {
    if (diff === "Easy") {
      return "btn w-full rounded-none btn-success";
    } else if (diff === "Medium") {
      return "btn w-full rounded-none btn-warning";
    } else {
      return "btn w-full rounded-none btn-error";
    }
  };

// handle submit button click text change 
const handleClick=() =>{
    setButtonText('SUBMITTED!');
  }
// handle submit button click disabled 
const handleDisabled=() =>{
    setDisabled(true)
    
  }
  // handle take assignment

  const handleTakeAssignment = (e) => {
    e.preventDefault()

    const form = e.target;
    const linkPDF = form.linkPDF.value
    const notes = form.notes.value
    const email = user.email
    const examinee = user.displayName
    const status = "pending"
    const marksObtained = "pending"

    const submittedData = {
        examinee,
        email,
        linkPDF,
        notes,
        title,
        marks,
        marksObtained,
        status

    }
    console.log(submittedData);

    handleClick()
    handleDisabled()
    axios
      .post(
        "https://collabora-task-server.vercel.app/api/v1/submitted-assignments",
        submittedData,
      )
      .then((res) => {
        console.log("New Assignment : ", res.data);
        toast.success("Submit success")
        form.reset()  
      }).catch( (error) =>{
        // handle error
        console.log(error.message)
        Swal.fire({
            position: "center",
            icon: "error",
            iconColor: "white",
            title: "<sub>Opp! Something went wrong! try again!</sub>",
            color: "white",
            showConfirmButton: false,
            timer: 2500,
            background: "#f44336",
          });
      })
 
  };

  return (
    <>
    <Helmet>
        <title>ColabTask | {title}</title>
      </Helmet>
      <div>
        <AllPageBanner headerText={"Assignment Details"}></AllPageBanner>
      </div>
      {/* Details */}
      <div className="w-[80%] mx-auto flow-root rounded-lg border border-gray-100 py-3 shadow-sm ">
        <div className="flex justify-center items-center w-fit mx-auto">
          <motion.img src={imageURL} whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} alt="Assignment" />
        </div>
        <dl className=" divide-y divide-gray-100 text-lg my-10">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Title</dt>
            <dd className="text-gray-700 sm:col-span-2">{title}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Full Description</dt>
            <dd className="text-gray-700 sm:col-span-2">{description}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Difficulty</dt>
            <dd className="text-gray-700 sm:col-span-2">
              <span className={handleDifficulty(difficulty)}>{difficulty}</span>
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Total Marks</dt>
            <dd className="text-gray-700 sm:col-span-2 font-bold">{marks}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Assignment Deadline</dt>
            <dd className="text-gray-700 sm:col-span-2">{dueDate}</dd>
          </div>
          <div className="my-10">
            <motion.button whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.9 }}
              onClick={() =>
                document.getElementById("modal_take_assignment").showModal()
              }
              className="btn btn-primary text-center w-full"
            >
              Take Assignment
            </motion.button>

            <dialog id="modal_take_assignment" className="modal">
              <div className="modal-box bg-[#4d34db]">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-error text-white">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg text-white text-center">
                  SUBMIT ASSIGNMENT
                </h3>
                <p className="py-4 text-center text-gray-100">
                  Please provide the following and press submit
                </p>
                <form  onSubmit={handleTakeAssignment} className="space-y-4" >
                  <div>
                    <label className="sr-only" htmlFor="linkPDF">
                      PDF LINK
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-100"
                      placeholder="PDF LINK"
                      type="url"
                      required
                      name="linkPDF"
                      id="linkPDF"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="notes">
                      Quick Notes
                    </label>

                    <textarea
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Quick Notes if any..."
                      rows="8"
                      name="notes"
                      id="notes"
                    ></textarea>
                  </div>

                  <div className="mt-4 flex justify-center"  >
                    <button 
                     
                      type="submit"
                      className={disabled?"btn-disabled w-full rounded-lg bg-success px-5 py-3 font-medium text-white sm:w-auto":"w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"}
                    >
                      {buttonText}
                    </button>
                  </div>
                  {disabled &&
                    <p className="text-center text-white">You have taken the assignment. Now close the modal</p>
                  }
                </form>
              </div>
            </dialog>
          </div>
        </dl>
      </div>
    </>
  );
};

export default Details;
