import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    aboutme: {
      type: String,
    },
    noofprojects: {
      type: String,
    },
    yearofexperience: {
      type: String,
    },
    noofclients: {
      type: String,
    },
    skills: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const About = mongoose.models.About || mongoose.model("About", AboutSchema);

export default About;
