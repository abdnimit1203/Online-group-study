import { motion } from "framer-motion"

const FrequentQuestions = () => {
    return (
        <div className="space-y-4">
        <h2 className="text-3xl font-bold">
        Frequently Asked Questions
          </h2>
        <motion.details whileHover={{ scale: 1.08 }}
      
          className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-motion.details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
            What is ColabTask, and how does it work?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            ColabTask is a platform designed for collaborative task management and assignment completion. It allows you to create, join, and manage assignments with your friends or colleagues. You can collaborate on tasks, track progress, and provide feedback to enhance group study experiences.
          </p>
        </motion.details>

        <motion.details whileHover={{ scale: 1.08 }}
       className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-motion.details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
            How can I create a new task or assignment on ColabTask?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          To create a new task or assignment on ColabTask, simply log in to your account, navigate to the Create Assignment section, and follow the prompts. You can set the assignments title, description, due date, and invite your friends to participate. Its a straightforward process to start collaborative assignments.
          </p>
        </motion.details>
        <motion.details whileHover={{ scale: 1.08 }}
       className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-motion.details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
            How do I track the progress of assignments on ColabTask?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          You can easily track assignment progress on ColabTask by accessing the assignments dashboard. Here, you will find updates on completed tasks, ongoing work, and discussions with your friends. ColabTask provides a real-time overview of the collaborative efforts within an assignment.
          </p>
        </motion.details>
        <motion.details whileHover={{ scale: 1.08 }}
       className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-motion.details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
            Can I provide feedback or grade assignments on ColabTask?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          Yes, you can provide feedback and ratings for assignments on ColabTask. After the assignments due date, you can access the grading interface, review your friends work, and assign ratings and comments. This feature encourages constructive feedback and helps enhance the quality of assignments.
          </p>
        </motion.details>
      </div>
    );
};

export default FrequentQuestions;