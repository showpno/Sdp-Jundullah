const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Notification = require("../model/notification");
const OneSignal = require("onesignal-node");
const dotenv = require("dotenv");
dotenv.config();

// Create OneSignal client
const client = new OneSignal.Client(
  process.env.ONE_SIGNAL_APP_ID,
  process.env.ONE_SIGNAL_REST_API_KEY
);

// Send notification
router.post(
  "/send-notification",
  asyncHandler(async (req, res) => {
    const { title, description, imageUrl } = req.body;

    if (!process.env.ONE_SIGNAL_APP_ID || !process.env.ONE_SIGNAL_REST_API_KEY) {
      console.warn("OneSignal keys are missing. Notification skipped.");
      return res.status(503).json({
        success: false,
        message: "Notification service is not configured (Missing App ID or API Key).",
        data: null
      });
    }

    const notificationBody = {
      contents: {
        en: description,
      },
      headings: {
        en: title,
      },
      included_segments: ["All"],
      app_id: process.env.ONE_SIGNAL_APP_ID,
      ...(imageUrl && { big_picture: imageUrl }),
    };

    console.log("Debug: ONE_SIGNAL_APP_ID is:", process.env.ONE_SIGNAL_APP_ID ? "DEFINED" : "UNDEFINED");

    try {
      const response = await client.createNotification(notificationBody);
      const notificationId = response.body.id;
      console.log("Notification sent to all users:", notificationId);
      const notification = new Notification({
        notificationId,
        title,
        description,
        imageUrl,
      });
      const newNotification = await notification.save();
      res.json({
        success: true,
        message: "Notification sent successfully",
        data: null,
      });
    } catch (e) {
      console.error("OneSignal Error:", e.statusCode, e.body);
      res.status(500).json({
        success: false,
        message: `Failed to send notification: ${e.body && e.body.errors ? e.body.errors[0] : e.toString()}`,
      });
    }
  })
);

// Track notification status
router.get(
  "/track-notification/:id",
  asyncHandler(async (req, res) => {
    const notificationId = req.params.id;

    const response = await client.viewNotification(notificationId);
    const androidStats = response.body.platform_delivery_stats;

    const result = {
      platform: "Android",
      success_delivery: androidStats.android.successful,
      failed_delivery: androidStats.android.failed,
      errored_delivery: androidStats.android.errored,
      opened_notification: androidStats.android.converted,
    };
    console.log("Notification details:", androidStats);
    res.json({ success: true, message: "success", data: result });
  })
);

// Get all notifications
router.get(
  "/all-notification",
  asyncHandler(async (req, res) => {
    try {
      const notifications = await Notification.find({}).sort({ _id: -1 });
      res.json({
        success: true,
        message: "Notifications retrieved successfully.",
        data: notifications,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  })
);

// Delete a notification
router.delete(
  "/delete-notification/:id",
  asyncHandler(async (req, res) => {
    const notificationID = req.params.id;
    try {
      const notification = await Notification.findByIdAndDelete(notificationID);
      if (!notification) {
        return res
          .status(404)
          .json({ success: false, message: "Notification not found." });
      }
      res.json({
        success: true,
        message: "Notification deleted successfully.",
        data: null,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  })
);

module.exports = router;
