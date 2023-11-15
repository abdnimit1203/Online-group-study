import PropTypes from "prop-types";
import { motion } from "framer-motion"
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const SingleAssignmentCard = ({ assignment, handleDelete, user }) => {
  const {
    creator_email,
    description,
    _id,
    title,
    marks,
    imageURL,
    dueDate,
    difficulty,
  } = assignment;
  const handleDifficulty=(diff)=>{
    if(diff==="Easy"){
        return "btn btn-xs my-2 btn-success"
    }else if(diff === "Medium"){
        return "btn btn-xs my-2 btn-warning"
    }else{
        return "btn btn-xs my-2 btn-error"
    }
}
  return (
    <motion.div whileHover={{ scale: 1.08 }}
    className=" md:max-w-sm mx-auto h-full w-full ">
      <article className="flex flex-col bg-white transition hover:shadow-xl hover:shadow-secondary/60 h-full rounded-xl border ">
        <div className=" p-2  bg-red-500 text-white">
          <time
            dateTime={dueDate}
            className="flex items-center justify-between gap-4  font-bold uppercase "
          >
            <span>Deadline</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>{dueDate}</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt="thumb image"
            src={
              imageURL
                ? imageURL
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
            }
            className="aspect-video sm:h-full sm:w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <h3 className="font-bold uppercase text-gray-900 text-xl">
              {title}
            </h3>

            <button
              className={
                handleDifficulty(difficulty)
              }
            >
              {difficulty}
            </button>

            <p className="mt-2 line-clamp-3 text-lg/relaxed text-gray-700 ">
              <span className="font-bold text-secondary">Short Description : </span>
              {description}
            </p>
            <button className="btn btn-ghost btn-sm border border-neutral hover:bg-white hover:border-neutral mt-2">
              Marks : {marks}
            </button>
          </div>

          <div className="flex items-end sm: justify-between md:flex-1">
            <Link to={`/details/${_id}`}>
              <button className="block btn px-5 py-3 text-center text-xs font-bold uppercase  transition rounded-none btn-secondary text-white">
                View Details
              </button>
            </Link>
            {user?.email === creator_email ? (
              <Link to={`/update-assignment/${_id}`}>
                <button className="block btn px-5 py-3 text-center text-xs font-bold uppercase  transition rounded-none btn-warning mt-4">
                  Update
                </button>
              </Link>
            ) : (
              
              <button
                className="block btn px-5 py-3 text-center text-xs font-bold uppercase  transition rounded-none btn-disabled md:mt-4"
                title="only creator can update "
              >
                Update
              </button>
            )}
          </div>
          <div
            className={
              user?.email === creator_email
                ? "bg-green-500 text-white flex items-center justify-between gap-4  font-bold p-2 text-sm "
                : "  flex items-center justify-between gap-4  font-bold p-2 text-sm text-slate-300 "
            }
          >
            <span>Created by: </span>
            <span className="w-px flex-1 line-clamp-1 text-xs/relaxed  ">{creator_email}</span>
          </div>
          {user?.email && (
            <div className="font-bold">
              <button
                onClick={() => handleDelete(_id, creator_email)}
                className="p-3 btn btn-error w-full rounded-none rounded-b-xl"
                title="Delete this assignment"
              >
                <RiDeleteBin6Line className="text-center text-2xl" />
              </button>
            </div>
          )}
        </div>
      </article>
    </motion.div>
  );
};
SingleAssignmentCard.propTypes = {
  assignment: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  user: PropTypes.object,
};
export default SingleAssignmentCard;
