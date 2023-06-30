// import Work from "../models/Work.js";
// import Booking from "../models/Booking.js";

// export const getAllNotification = async (req, res) => {
//   const workId = req.params.workId;
//   //for pagination
//   const page = parseInt(req.query.page);
//   console.log(page);

//   try {
//     // await Work.findByIdAndUpdate(workId, {
//     //   $push: { notifications: savedReview._id },
//     // });
//     const notification = await Booking.find({})
//       .populate("notifications")
//       .skip(page * 8)
//       .limit(8);
//     res.status(200).json({
//       success: true,
//       count: notification.length,
//       message: "Successfull",
//       data: notification,
//     });
//   } catch (err) {
//     res.status(404).json({ success: false, message: "Not Found" });
//   }
// };
