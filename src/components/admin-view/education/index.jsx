"use client";

import FormControls from "../form-controls";

export default function AdminEducationView({ formData, setFormData, handleSaveData }) {
        // console.log(formData);

  const controls = [
    {
      name: "degree",
      placeholder: "Degree",
      type: "text",
      label: "Degree",
    },
    {
      name: "year",
      placeholder: "Year",
      type: "text",
      label: "Year",
    },
    {
      name: "college",
      placeholder: "College Name",
      type: "text",
      label: "College Name",
    },
  ];
  return (
    <div className="w-full ">
      <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
        onClick={()=>handleSaveData('education')}
        className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md ">
          Add Education
        </button>
      </div>
    </div>
  );
}
