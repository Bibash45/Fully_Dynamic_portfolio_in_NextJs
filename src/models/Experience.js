import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
  {
    position: {
      type: String,
    },
    company: {
      type: String,
    },
    duration: {
      type: String,
    },
    location: {
      type: String,
    },
    jobprofile: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Experience =
  mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);

export default Experience;
