"use client";

import FormControls from "../form-controls";

export default function AdminProjectView({
  formData,
  setFormData,
  handleSaveData,
  data,
}) {
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
        <div className="mb-10 space-y-6">
          {data && data.length ? (
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex bg-[#ffffff] flex-col  gap-2 p-6 rounded-lg shadow-md border border-green-600 hover:border-green-800 transition duration-300"
                >
                  <p className="text-lg font-semibold text text-gray-700">
                    Name : {item.name}
                  </p>
                  <p className="text-lg  text-gray-700">
                    <a href={item.website} target="_blank">
                      Website : {item.website}
                    </a>
                  </p>
                  <p className="text-lg  text-gray-700">
                    Technologies: {item.technologies}
                  </p>
                  <p className="text-lg  text-gray-700">
                    <a href={item.website} target="_blank">
                      Github : {item.github}
                    </a>
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-600 ">
              No Job Experience data available
            </p>
          )}
        </div>

        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("project")}
          className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md "
        >
          Add Project
        </button>
      </div>
    </div>
  );
}
