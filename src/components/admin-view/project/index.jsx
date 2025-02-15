"use client";

import FormControls from "../form-controls";

export default function AdminProjectView({ formData, setFormData,handleSaveData }) {
  // console.log(formData);
  const controls = [
    {
      name: "name",
      placeholder: "project name",
      type: "text",
      label: "Project Name",
    },
    {
      name: "website",
      placeholder: "website name",
      type: "text",
      label: "Website Name",
    },
    {
      name: "technologies",
      placeholder: "enter technologies ",
      type: "text",
      label: "Technologies",
    },
    {
      name: "github",
      placeholder: "github link",
      type: "text",
      label: "Github",
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
        onClick={()=>handleSaveData('project')}
        className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md ">
          Add Project
        </button>
      </div>
    </div>
  );
}
