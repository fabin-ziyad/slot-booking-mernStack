import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
const FAQ = () => {
  const data = [
    {
      id: 1,
      question: "What are the payment options available?",
      answer:
        "What are the payment options available?What are the payment options available?What are the payment options available?",
    },
    {
      id: 2,

      question: "What are the payment options available?",
      answer:
        "test",
    },
    {
      id: 3,

      question: "What are the payment options available?",
      answer:
        "What are the payment options available?What are the payment options available?What are the payment options available?",
    },
    {
      id: 4,
      question: "What are the payment options available?",
      answer:
        "What are the payment options available?What are the payment options available?What are the payment options available?",
    },
    {
      id: 5,
      question: "What are the payment options available?",
      answer:
        "What are the payment options available?What are the payment options available?What are the payment options available?",
    },
    {
      id: 6,
      question: "What are the payment options available?",
      answer:
        "What are the payment options available?What are the payment options available?What are the payment options available?",
    },
  ];
  const [isOpen, setIsOpen] = useState(null);

  const handleQA = (qa) => {
    setIsOpen(qa.id === isOpen ? null : qa.id);
  };
  return (
    <div className="bg-yellowish pb-20">
      <h1 className="text-4xl text-center py-5">Frequently Asked Questions</h1>
      <div className="flex justify-center">
        <div className="w-[90%] w-[80%]">
          {data.map((qa) => (
            <div
              key={qa.id}
              className="bg-[#f7f6f6] w-full  my-4 hover:cursor-pointer"
              onClick={() => handleQA(qa)}
            >
              <div className="flex justify-between text-lightGray items-center px-6 py-4 gap-3">
                <h2 className=" text-sm lg:text-lg md:text-lg">{qa.question}</h2>
                <IoIosArrowDropdownCircle size={30} />
              </div>
              {isOpen === qa.id && (
                <div className="w-full bg-white border-t border-slate py-5 px-6">
                  <p>{qa.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
