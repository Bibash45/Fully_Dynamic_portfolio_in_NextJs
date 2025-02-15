import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
    },
    year: {
      type: String,
    },
    college: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Education =
  mongoose.models.Education || mongoose.model("Education", EducationSchema);

export default Education;
