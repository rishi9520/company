import type { Express } from "express";
import { db } from "./db.js";
import { contacts } from "../shared/schema.js";

export function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, company, subject, message, budget, timeline } = req.body;

      const newContact = await db.insert(contacts).values({
        firstName,
        lastName,
        email,
        phone,
        company,
        subject,
        message,
        budget,
        timeline,
      }).returning();

      res.status(200).json({ success: true, data: newContact });
    } catch (error) {
      console.error("Error saving contact:", error);
      res.status(500).json({ success: false, error: "Failed to save contact" });
    }
  });

  // Career application endpoint
  app.post("/api/careers/apply", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, position, resume, coverLetter } = req.body;

      // Save to contacts table with subject as "Career Application"
      const newApplication = await db.insert(contacts).values({
        firstName,
        lastName,
        email,
        phone,
        company: position,
        subject: "Career Application",
        message: coverLetter || `Application for ${position}`,
      }).returning();

      res.status(200).json({ success: true, data: newApplication });
    } catch (error) {
      console.error("Error saving career application:", error);
      res.status(500).json({ success: false, error: "Failed to save application" });
    }
  });

  // Get job openings
  app.get("/api/careers/openings", async (req, res) => {
    try {
      const openings = [
        {
          id: 1,
          title: "Senior React Developer",
          department: "Engineering",
          location: "Remote/Hathras",
          type: "Full-time",
          experience: "3-5 years",
          description: "Build next-generation web applications with our tech stack"
        },
        {
          id: 2,
          title: "Python Backend Developer",
          department: "Engineering",
          location: "Remote/Hathras",
          type: "Full-time",
          experience: "2-4 years",
          description: "Develop robust APIs and backend systems"
        },
        {
          id: 3,
          title: "UI/UX Designer",
          department: "Design",
          location: "Remote/Hathras",
          type: "Full-time",
          experience: "2-3 years",
          description: "Design beautiful and intuitive user experiences"
        }
      ];

      res.status(200).json({ success: true, data: openings });
    } catch (error) {
      console.error("Error fetching job openings:", error);
      res.status(500).json({ success: false, error: "Failed to fetch openings" });
    }
  });
}