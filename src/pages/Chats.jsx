import { MdOutlineSend } from "react-icons/md";
import AllPageBanner from "../components/Banner/AllPageBanner";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
import { Helmet } from "react-helmet-async";

const Chats = () => {
  const { user } = useAuth();
  const [newMessage, setNewMessage] = useState(false);
  const [visible, setVisible] = useState(false);

  //chat data get
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["chats", newMessage],
    queryFn: async () => {
      const data = await fetch(`https://online-group-study-ab-server.vercel.app/api/v1/chats`);
      return await data.json();
    },
  });
  console.log(data, isLoading, isFetching);

  const handleChat = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;
    const userEmail = user?.email;
    const timeOption = { hour: "numeric", minute: "numeric", hour12: true };
    const dateOption = { month: "short", day: "2-digit", year: "numeric" };
    const time = new Date().toLocaleTimeString("en-US", timeOption);
    const date = new Date().toLocaleDateString("en-US", dateOption);

    const chatData = {
      userName,
      userEmail,
      message,
      userPhoto,
      date,
      time,
    };
    console.log(chatData);

    //post chat message
    axios
      .post("https://online-group-study-ab-server.vercel.app/api/v1/chats", chatData)
      .then((res) => {
        console.log(res.data);
        toast("message sent! 👍🏻");
        setNewMessage(true);
        e.target.reset();
      })
      .catch((error) => {
        // handle error
        console.log(error.message);
        toast.error("Opps! something went wrong!");
      });
  };

  // scrooll to top + bottom
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
    <Helmet>
        <title>ColabTask | Chats</title>
      </Helmet>
      <div>
        <AllPageBanner headerText={"Chat & Discussions"}></AllPageBanner>
      </div>

      <div className="mockup-browser border bg-primary w-[94%] md:w-[80%] xl:w-[70%] mx-auto md:my-10 mb-10 relative">
        <div className="mockup-browser-toolbar">
          <div className="input">CHAT AND DISCUSSION (Respect everyone) </div>
          <div>
            <button
              onClick={scrollToBottom}
              title="scroll to bottom"
              className="btn btn-square btn-warning"
            >
              <BiArrowToBottom className="text-xl" />
            </button>
          </div>
        </div>
        <div className="flex px-4 py-16 bg-slate-100">
          {/* chats */}
          <div className="w-full px-4">
            {/* single chat */}

            {data?.map((chat) => (
              <div
                key={chat._id}
                className={
                  chat?.userEmail === user?.email
                    ? "chat chat-end"
                    : "chat chat-start"
                }
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src={chat?.userPhoto} />
                  </div>
                </div>
                <div className="chat-header">{chat.userName}</div>
                <div
                  title={chat?.date}
                  className={
                    chat?.userEmail === user?.email
                      ? "chat-bubble chat-bubble-accent text-white"
                      : "chat-bubble"
                  }
                >
                  {chat.message}
                </div>
                <div className="chat-footer opacity-50">
                  Delivered on {chat?.time}
                </div>
              </div>
            ))}

            {/* Chat send */}
            <div className=" absolute w-[80%] md:w-[90%]">
              <div className="w-[100%]">
                <form onSubmit={handleChat} className="">
                  <div className="join w-[100%]">
                    <input
                      type="text"
                      name="message"
                      required
                      className="input w-[100%] join-item focus:outline-offset-0 "
                      placeholder="type something"
                    />
                    <button
                      type="submit"
                      className="btn btn-accent text-white join-item rounded-r-full"
                    >
                      <MdOutlineSend />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          id="myBtn"
          title="Go to top"
          style={{ display: visible ? "inline" : "none" }}
        >
          <BiArrowToTop className="shadow-lg   shadow-indigo-500 text-5xl p-1 text-white rounded-full bg-purple-700 hover:bg-purple-500  fixed bottom-8 right-8 " />
        </button>
      </div>
    </>
  );
};

export default Chats;
