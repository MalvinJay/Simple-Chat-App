import React from "react";

const ChatBody = ({
    id,
    messages = [],
    logOut = () => {},
    lastMessageRef,
    typingStatus = false
}) => {
  return (
    <>
      <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div class="relative flex items-center space-x-4">
          <div class="relative">
            <span class="absolute text-green-500 right-0 bottom-0">
              <svg width="20" height="20">
                <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
              </svg>
            </span>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt=""
              class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
            />
          </div>
          <div class="flex flex-col leading-tight">
            <div class="text-2xl mt-1 flex items-center">
              <span class="text-gray-700 mr-3">{id}</span>
            </div>
            <span class="text-lg text-gray-600 text-left">Guest</span>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button
            type="button"
            class="inline-flex p-2 items-center justify-center rounded-lg border transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            onClick={() => logOut()}
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg> */}
            <span className="pr-1">Leave Chat</span>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
          </button>
          {/* <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </button>
                        <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                        </button> */}
        </div>
      </div>
      <div
        id="messages"
        class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        {messages?.map((el, index) => (
          <div class="chat-message" key={index}>
            <div
              class={`flex items-end ${el?.name === id ? "justify-end" : ""}`}
            >
              <div
                class={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
                  el?.name === id ? "order-1 items-end" : "order-2 items-start"
                }`}
              >
                <div>
                  <p className={`${el?.name === id ? 'text-end' : 'text-left'} text-base`}>
                    {el?.name === id ? "You" : el?.name}
                  </p>
                  <span
                    class={`text-base px-4 py-2 rounded-lg inline-block rounded-br-none ${
                      el?.name === id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {el?.text}
                  </span>
                </div>
                {/* {el?.message?.map((msg, _index) => (
                                    ))} */}
              </div>
              {/* <img src={el?.sender} alt="My profile" class="w-6 h-6 rounded-full order-2" /> */}
            </div>
          </div>
        ))}

        {typingStatus && 
          <div className="pt-2">
            <p className="text-sm text-primary italic">{typingStatus}</p>
          </div>        
        }

        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
