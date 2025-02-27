"use client";

import FormControls from "../form-controls";

export default function AdminAboutView({ formData, setFormData,handleSaveData }) {
    // console.log(formData);
    
  const controls = [
    {
      name: "aboutme",
      placeholder: "About Me",
      type: "text",
      label: "About me",
    },
    {
      name: "noofprojects",
      placeholder: "No Of Projects",
      type: "text",
      label: "No Of Projects",
    },
    {
      name: "yearofexperience",
      placeholder: "No Of Experience",
      type: "text",
      label: "No Of Experience",
    },
    {
      name: "noofclients",
      placeholder: "No Of Clients",
      type: "text",
      label: "No Of Clients",
    },
    {
      name: "skills",
      placeholder: "No Of Skills",
      type: "text",
      label: "No Of Skills",
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
        <button onClick={()=>handleSaveData('about')} className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md ">
          Save Changes
        </button>
      </div>
    </div>
  );
}
