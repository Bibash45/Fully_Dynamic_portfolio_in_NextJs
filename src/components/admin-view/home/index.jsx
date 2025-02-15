"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "heading",
    placeholder: "enter heading text",
    type: "text",
    label: "Enter Heading Text",
  },
  {
    name: "summary",
    placeholder: "enter summary text",
    type: "text",
    label: "Enter Summary Text",
  },
];

export default function AdminHomeView({
  formData,
  setFormData,
  handleSaveData,
}) {
  return (
    <div className="w-full ">
      <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("home")}
          className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md "
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
