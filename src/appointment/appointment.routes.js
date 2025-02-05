import { Router } from "express";
import { saveAppointment, getAppointments, updateAppointment } from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/", getAppointments, getAppointments);
router.patch("/updateAppointment/:uid", updateAppointmentValidator, updateAppointment)

export default router;