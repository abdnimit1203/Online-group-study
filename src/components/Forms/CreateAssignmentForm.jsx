import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendarEdit } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CreateAssignmentForm = () => {
  const [startDate, setStartDate] = useState(new Date());
const navigate = useNavigate()
  const { user } = useAuth();
  const handleAddAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const imageURL = form.imageURL.value;
    const marks = form.marks.value;
    const difficulty = form.difficulty.value;
    const creator_email = user.email;
    const dueDate = startDate.toISOString().slice(0, 10);
    const newAssignmentData = {
      creator_email,
      title,
      description,
      imageURL,
      marks,
      difficulty,
      dueDate,
    };
    console.log("Assignment data: ", newAssignmentData);
    axios
      .post(
        "https://online-group-study-ab-server.vercel.app/api/v1/user/create-assignment/",
        newAssignmentData,
       
      )
      .then((res) => {
        console.log("New Assignment : ", res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          iconColor: "white",
          title: "<sub>Assignment created successfully!</sub>",
          color: "white",
          showConfirmButton: false,
          timer: 2500,
          background: "#1bd138",
        });
        form.reset()
        navigate('/assignments')
        
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
    <div>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div
              data-aos="zoom-in"
              className="hidden md:block lg:col-span-2 lg:pb-12 space-y-4"
            >
              <img
                src="/assets/createAssignment.png"
                alt="gif animated"
                className=" md:w-64 mx-auto"
              />
              <h2 className="text-xl sm:text-2xl py-10">
                Bring your ideas share your assignments with all!
                <br />
                <br />
                Create a new assigment and let others complete it
              </h2>
            </div>
            {/* Form div */}
            <div className="rounded-lg glass p-8 shadow-lg lg:col-span-3 lg:p-12 bg-base-300 bg-[url('/assets/createFormBG.png')]">
              <form
                data-aos="zoom-in"
                onSubmit={handleAddAssignment}
                className="space-y-6 focus:outline-none"
              >
                <h2 className="text-center pb-10 text-2xl text-white font-semibold bg-[#945EFF] ">
                  <BsPencilFill className=" inline mr-2" /> CREATE A NEW
                  ASSIGNMENT
                </h2>
                <div>
                  <label className="sr-only" htmlFor="title">
                    Title
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Title"
                    type="text"
                    id="title"
                    name="title"
                    required
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Description"
                    type=""
                    id="description"
                    name="description"
                    rows="4"
                    cols="50"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="marks">
                      Marks
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Marks"
                      type="number"
                      id="marks"
                      min="0"
                      required
                    />
                  </div>

                  <div className="pt-0">
                    <select
                    required
                      name="difficulty"
                      id="difficulty"
                      className=" w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm h-10 sm:h-full pl-4 "
                    >
                      <option value="">Difficulty Level</option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="imageURL">
                    Thumb Image URL
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Thumb Image URL"
                    type="text"
                    id="imageURL"
                    name="imageURL"
                  />
                </div>

                <div className="join flex items-center text-center bg-white w-fit">
                  <label htmlFor="dueDate " className="join-item ">
                    {" "}
                    <BiCalendarEdit className="inline text-4xl mr-2 text-secondary" />{" "}
                    Due Date :
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="text-secondary p-3 font-semibold rounded-xl join-item"
                    name="dueDate"
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg px-5 py-3 font-medium  sm:w-auto btn btn-primary text-white capitalize"
                  >
                    Create Assignment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateAssignmentForm;
