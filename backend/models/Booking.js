
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    workId: {
      type: mongoose.Types.ObjectId,
      ref:"works",
    },
    userId: {
      type: String
    },
    userEmail: {
       type: String
    },
    FullName: {
      type: String,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
    Phone: {
      type: Number,
      required: true,
    },
    bookAt:{
        type:Date,
        required:true
    },

  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
