import React from "react";

export const Tooltip = ({
  children,
  renderContent,
  visible,
  id,
  onOpen,
  onClose,
}) => {
  return (
    <>
      <button
        onClick={onOpen}
        data-tooltip-target={id}
        type="button"
        className="text-white bg-none font-medium rounded-lg text-sm px-5 py-2.5 text-center relative"
      >
        {children}
        <div
          onClick={onClose}
          id={id}
          role="tooltip"
          className={`absolute z-10 py-2 px-3 text-black shadow-2xl break-words text-sm font-medium bg-white rounded-lg transition-opacity duration-300 tooltip dark:bg-gray-700 right-0 bottom-[30px] max-w-[300px] ${
            visible ? "visible" : "invisible"
          }`}
        >
          {renderContent}
          <div className="tooltip-arrow" data-popper-arrow />
        </div>
      </button>
    </>
  );
};
