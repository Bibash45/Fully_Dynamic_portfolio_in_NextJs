"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import AdminProjectView from "@/components/admin-view/project";
import { useState } from "react";

export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const menuItem = [
    {
      id: "home",
      label: "Home",
      component: <AdminHomeView />,
    },
    {
      id: "about",
      label: "About",
      component: <AdminAboutView />,
    },
    {
      id: "experience",
      label: "Experience",
      component: <AdminExperienceView />,
    },
    {
      id: "education",
      label: "Education",
      component: <AdminEducationView />,
    },
    {
      id: "project",
      label: "Project",
      component: <AdminProjectView />,
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
  return (
    <div className="border-b border-gray-400 ">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItem.map((item) => {
          return (
            <button
              onClick={() => {
                setCurrentSelectedTab(item.id);
              }}
              key={item.id}
              type="button"
              className="p-4 font-bold text-xl text-black"
            >
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="mt-10 p-10">{currentComponent}</div>
    </div>
  );
}
