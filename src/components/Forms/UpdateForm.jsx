import PropTypes from "prop-types";
import { BiCalendarEdit } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UpdateForm = ({ data }) => {
const navigate = useNavigate();
  const {
    _id,
    description,
    title,
    marks,
    imageURL,
    dueDate,
    difficulty,
  } = data;

  const [startDate, setStartDate] = useState(new Date(dueDate));

  // form handler function
  const handleUpdate = async(e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const difficulty = form.difficulty.value;
    const imageURL = form.imageURL.value;
    const dueDate = form.dueDate.value;
   const updatedData ={
    title,description,marks,difficulty,imageURL,dueDate
   }



    await axios.put(`https://collabora-task-server.vercel.app/api/v1/user/update/${_id}`, updatedData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=>{
        
        Swal.fire({
            position: "center",
            icon: "success",
            iconColor: "white",
            title: "<sub>Updated Successfully!</sub>",
            color: "white",
            showConfirmButton: false,
            timer: 2500,
            background: "#1bd138",
          });
        console.log(res.data);
        navigate('/assignments')
      })

  };
  return (
    <div>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 md:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div
              data-aos="zoom-in"
              className="lg:col-span-2 lg:pb-12 space-y-4"
            >
              <img
                src="/assets/updateAssignment.png"
                alt="gif animated"
                className="w-3/4 mx-auto"
              />
              <h2 className="hidden md:block text-xl sm:text-2xl py-10">
                Made a mistake? Or wanna change some requirements for the
                assigmnment??
                <br />
                <br />
                Here you go! You can update your assignment here!
                <br />
                Make sure to check the link and dates!!
              </h2>
            </div>
            {/* Form div */}
            <div className="rounded-lg glass p-8 shadow-lg lg:col-span-3 lg:p-12 bg-base-300 bg-[url('/assets/updateFormBG.png')]">
              <form
                data-aos="zoom-in"
                onSubmit={handleUpdate}
                className="space-y-6 focus:outline-none"
              >
                <h2 className="text-center pb-10 text-2xl text-white font-semibold bg-[#7ED957] ">
                  <BsPencilFill className=" inline mr-2" /> UPDATE ASSIGNMENT
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
                    defaultValue={title}
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
                    defaultValue={description}
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
                      defaultValue={marks}
                      required
                    />
                  </div>

                  <div className="pt-0">
                    <select
                      required
                      name="difficulty"
                      id="difficulty"
                      defaultValue={difficulty}
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
                    defaultValue={imageURL}
                  />
                </div>

                <div className="join flex items-center text-center bg-white w-fit text-sm md:text-base">
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
                    className="inline-block w-full rounded-lg px-5 py-3 font-medium  sm:w-auto btn btn-secondary text-white capitalize"
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
UpdateForm.propTypes = {
  data: PropTypes.object.isRequired,
};
export default UpdateForm;
