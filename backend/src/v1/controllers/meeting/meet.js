import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { ZodError, z } from "zod";
import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import ms from "ms";
import { customResponse } from "../../../utils/Response";

const prisma = new PrismaClient();

const meetController = {
  // student to book their meeting with the mentor he wants
  async bookMeeting(req, res, next) {
    try {
      const { guestId, notes } = req.body;
      const hostId = req.user.id;
      const dates = req.body.dates;
      //  console.log(guestId, "d");
      const host = await prisma.user.findFirst({
        where: {
          id: hostId,
        },
      });

      const meeting = await prisma.meeting.create({
        data: {
          hostId: hostId,
          guestId: guestId,
          status: "requested",
          notes: notes,
          dates: {
            create: dates.map((date) => ({
              date: date,
            })),
          },
        },
      });
      console.log(meeting, "me");
      res.json({
        success: true,
        message: meeting,
      });
    } catch (err) {
      console.log(err);
      res.json({
        message: err,
      });
    }
  },

  // meeting creation
  // only the student can book a meeting and not the other way around
  // guest -> mentor
  // host -> student

  async confirmMeeting(req, res, next) {
    try {
      const meetingId = req.body.meetingId;
      const mentorId = req.user.id;
      const meeting = await prisma.meeting.findFirst({
        where: {
          id: meetingId,
          guestId: mentorId,
        },
      });
      // console.log(meetingId, "");
      if (!meeting) {
        return res.status(404).json({ error: "Meeting not found " });
      }
      if (meeting.status !== "requested") {
        return res.status(404).json({ error: "Meeting is not pending " });
      }
      // Update the meeting status to "confirmed"
      console.log(meetingId);
      const updatedMeeting = await prisma.meeting.update({
        where: {
          id: meetingId,
        },
        data: {
          status: "confirmed",
        },
      });

      res.json(updatedMeeting);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  async rejectMeeting(req, res, next) {
    try {
      const meetingId = req.body.meetingId;
      const mentorId = req.user.id;
      const meeting = await prisma.meeting.findFirst({
        where: {
          id: meetingId,
          guestId: mentorId,
        },
      });

      if (!meeting) {
        return res.status(404).json({ error: "Meeting not found " });
      }
      if (meeting.status !== "requested") {
        return res.status(404).json({ error: "Meeting is not pending " });
      }

      const updatedMeeting = await prisma.meeting.update({
        where: {
          id: meetingId,
        },
        data: {
          status: "rejected",
        },
      });

      res.json(updatedMeeting);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // for mentor to see the meetings he need to attend
  async getMeetings(req, res, next) {
    try {
      const userId = req.user.id;
      const mentor = await prisma.user.findFirst({
        where: {
          id: userId,
        },
      });
      // console.log('====================================');
      // console.log("Mentor",userId);
      // console.log('====================================');
      if (mentor.role == "Mentor") {
        const meetings = await prisma.meeting.findMany({
          where: {
            guestId: userId,
          },
          include: {
            host: true,
            dates: true,
          },
        });
        res.json({
          success: true,
          message: meetings,
        });
      } else {
        res.json({ message: "no meetings found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err });
    }
  },
  // for the user to see the booked meeting only one at a time with only a single mentor

  async showbookedMeetings(req, res, next) {
    try {
      const userId = req.user.id;
      const user = await prisma.user.findFirst({
        where: {
          id: userId,
        },
      });
      if (user) {
        const meeting = await prisma.meeting.findMany({
          where: {
            hostId: userId,
          },
          include: {
            dates: true,
            guest: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        });
        if (meeting) {
          res.json({
            success: true,
            message: meeting,
          });
        } else {
          res.json({ message: "no bookings yet" });
        }
      }
    } catch (err) {
      console.log(err, "Err");
      res.status(500).json({ error: err });
    }
  },
  // get all the mentors
  async getmentorsinfo(req, res, next) {
    try {
      const mentors = await prisma.user.findMany({
        where: {
          role: "Mentor",
        },
      });
      //  console.log(mentors);
      res.json({ message: mentors });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
};
export default meetController;
