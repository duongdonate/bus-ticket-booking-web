import React from "react";

const Accordion = ({ question, answer, wfull }: any) => {
  return (
    <div className="">
      <details
        className={`group ${
          wfull ? "w-full" : "w-full max-w-2xl"
        } rounded-lg shadow-lg`}
      >
        <summary className="flex w-full cursor-pointer list-none items-center gap-4 rounded-lg px-6 py-10">
          {question}
        </summary>
        <div className="px-6 pb-4 text-sm text-neutral-500">{answer}</div>
      </details>
    </div>
  );
};

export default Accordion;
