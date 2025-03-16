"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import AdminProjectView from "@/components/admin-view/project";
import Login from "@/components/admin-view/login";
import { addData, getData, login, updateData } from "@/services";
import { useEffect, useState } from "react";

const initialHomeFormData = {
  heading: "",
  summary: "",
};
const initialAboutFormData = {
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};

const initialExperienceFormData = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};

const initialEducationFormData = {
  degree: "",
  year: "",
  college: "",
};
const initialProjectFormData = {
  name: "",
  website: "",
  technologies: "",
  github: "",
};
const initialLoginFormData = {
  username: "",
  password: "",
};

export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
  const [aboutViewFormData, setAboutViewFormData] =
    useState(initialAboutFormData);
  const [experienceViewFormData, setExperienceViewFormData] = useState(
    initialExperienceFormData
  );
  const [educationViewFormData, setEducationViewFormData] = useState(
    initialEducationFormData
  );
  const [projectViewFormData, setProjectViewFormData] = useState(
    initialProjectFormData
  );

  const [allData, setAllData] = useState({});
  const [update, setUpdate] = useState(false);
  const [authUser, setAuthUser] = useState(() => {
    return JSON.parse(sessionStorage.getItem("authUser")) || false;
  });
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);

  const menuItem = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "about",
      label: "About",
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "experience",
      label: "Experience",
      component: (
        <AdminExperienceView
          formData={experienceViewFormData}
          setFormData={setExperienceViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.experience}
        />
      ),
    },
    {
      id: "education",
      label: "Education",
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          setFormData={setEducationViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.education}
        />
      ),
    },
    {
      id: "project",
      label: "Project",
      component: (
        <AdminProjectView
          formData={projectViewFormData}
          setFormData={setProjectViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.project}
        />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      component: <AdminContactView />,
    },
  ];

  const currentComponent = menuItem.find(
    (item) => item.id === currentSelectedTab
  )?.component;

  async function handleSaveData(currentTab) {
    const dataMap = {
      home: homeViewFormData,
      about: aboutViewFormData,
      experience: experienceViewFormData,
      education: educationViewFormData,
      project: projectViewFormData,
    };

    const response = update
      ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
      : await addData(currentSelectedTab, dataMap[currentSelectedTab]);
    if (response.success) {
      resetFormDatas();
      extractAllDatas();
    }
  }

  useEffect(() => {
    extractAllDatas();
  }, [currentSelectedTab]);

  async function extractAllDatas() {
    const response = await getData(currentSelectedTab);

    if (
      currentSelectedTab === "home" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeViewFormData(response && response.data[0]);
      setUpdate(true);
    }

    if (
      currentSelectedTab === "about" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutViewFormData(response && response.data[0]);
      setUpdate(true);
    }
    if (response?.success) {
      setAllData({
        ...allData,
        [currentSelectedTab]: response && response.data,
      });
    }
  }

  console.log(allData, homeViewFormData, "homeViewFormData");

  function resetFormDatas() {
    setHomeViewFormData(initialHomeFormData);
    setAboutViewFormData(initialAboutFormData);
    setExperienceViewFormData(initialExperienceFormData);
    setEducationViewFormData(initialEducationFormData);
    setProjectViewFormData(initialProjectFormData);
  }

  async function handleLogin() {
    const res = await login(loginFormData);
    console.log(res, "login");
    if (res.success) {
      sessionStorage.setItem("authUser", JSON.stringify(true));
      setAuthUser(true);
      setLoginFormData(initialLoginFormData);
    }
  }

  useEffect(() => {
    const storedUser = sessionStorage.getItem("authUser");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, []);

  console.log(authUser);

  if (!authUser) {
    return (
      <Login
        handleLogin={handleLogin}
        formData={loginFormData}
        setFormData={setLoginFormData}
        handleSaveData={handleSaveData}
      />
    );
  }

  return (
    <div className="border-b border-gray-400 ">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItem.map((item) => {
          return (
            <button
              onClick={() => {
                setCurrentSelectedTab(item.id);
                resetFormDatas();
                setUpdate(false);
              }}
              key={item.id}
              type="button"
              className="p-4 font-bold text-xl text-black"
            >
              {item.label}
            </button>
          );
        })}

        <button
        className="p-3 font-bold text-xl text-white bg-red-700 mt-1 rounded-md hover:bg-red-500"
          onClick={() => {
            sessionStorage.removeItem("authUser");
            setAuthUser(false);
          }}
        >
          Logout
        </button>
      </nav>
      <div className="mt-10 p-10">{currentComponent}</div>
    </div>
  );
}
