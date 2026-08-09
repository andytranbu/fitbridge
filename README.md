# Fitbridge

Fitbridge is an AI-powered fitness application designed to provide real-time form tracking, personalized progress evaluation, and privacy-first user management. The platform leverages computer vision to help users optimize their workouts while maintaining strict control over their personal health data.

## Core Features

### 1. Authentication & Onboarding
*   **Secure Onboarding:** Streamlined sign-up/sign-in flows integrated with mandatory Terms and Conditions compliance.
*   **Interactive 3D Elements:** Embedded high-fidelity 3D barbell/dumbbell assets on the landing page to enhance visual engagement before starting a session.
*   **Dynamic Profiling:** Collects baseline user biometrics including gender, height, weight, fitness experience level (Beginner, Intermediate, Advanced), and current fitness goals (Cutting vs. Bulking).

### 2. Privacy-First Data & Progress Tracking
*   **Granular Profile Privacy:** All sensitive biometrics (weight, height, goals) are locked to a strict private-by-default visibility state. 
*   **User-Controlled Display:** Users can explicitly toggle which data points are displayed publicly on their profile or kept confidential from friends.
*   **Automated Verification Cycles:** A rolling 7-day synchronization loop prompts users to log and track progress updates (e.g., body weight fluctuations) over time.
*   **Selective Progress Sharing:** Built-in modular capability allowing users to securely generate and share specific workout milestone reports with peers without exposing raw baseline data.

### 3. AI-Driven Live Workouts & Gamification
*   **Real-time Pose Estimation:** Integrated Computer Vision pipelines utilizing MediaPipe to track human joint coordinates and provide instant form feedback.
*   **"Push to Failure" Audio Motivation:** An optional widget featuring curated, clean (non-explicit) motivational quotes from David Goggins to push users through intense sets.
*   **Interactive UI Overlays:** Mini chat-bubble overlays dynamically render at the screen corner, syncing text animations with motivational audio cues without obstructing the main exercise viewport.

## Technical Architecture

*   **Frontend & Interaction:** Responsive User Interface optimized for low-latency rendering during active vision tracking.
*   **Computer Vision Pipeline:** MediaPipe for precise edge-device pose estimation, reducing server-side payload and optimizing client-side processing latency.
*   **Backend & Data Layer:** Supabase for relational database schemas, handling secure session states and strict row-level security (RLS) policies for user profiles.

# Live Demo

🚀 View the live application here: **https://fitbridge-eta.vercel.app**

---
