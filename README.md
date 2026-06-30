Brew Haven Coffee Shop Landing Page
📌 Project Overview

This project was developed as part of the Full Stack Web Development Internship – Task 1. The objective was to create a modern, visually appealing, and fully responsive landing page using HTML and CSS.

The website represents Brew Haven Coffee Shop, showcasing a professional landing page design with smooth navigation, engaging visuals, feature highlights, and responsive layouts for different screen sizes.

🎯 Task Requirements & Implementation
1. Header & Navigation with Dropdown ✅

Requirement:

Logo / Brand Name
Navigation Menu (Home, Features, Services, Contact)
Dropdown Menu under Services

Implemented:

Created a responsive navigation bar with the Brew Haven brand logo.
Added navigation links for Home, Features, Services, and Contact.
Implemented a CSS-based dropdown menu under the Services section.

2. Hero Section ✅

Requirement:

Large Heading
Tagline/Sub-text
Call-to-Action Button
Background Image or Gradient

Implemented:

Added an attractive hero section with the heading:
"Fresh Coffee Every Morning"
Included a descriptive tagline.
Added an Order Now CTA button.
Used a high-quality coffee-themed background image with a dark overlay for better readability.

3. Features Section ✅

Requirement:

3–4 Feature Cards
Use Icons

Implemented:

Created four feature cards:
Premium Beans
Fast Delivery
Organic Ingredients
Loved by Customers
Used Font Awesome icons to enhance visual appeal.
Added hover animations for interactive user experience.

4. Footer Section ✅

Requirement:

Copyright
Privacy Policy
Terms
Contact

Implemented:

Added a clean footer containing:
Copyright © 2025
Privacy Policy
Terms
Contact Information

5. Modern Styling & Responsiveness ✅

Requirement:

Google Fonts

Modern Color Scheme

Hover Effects

Responsive Design

Implemented:

Used Google Fonts (Poppins) for modern typography.

Applied a coffee-themed color palette.

Added hover effects, gradients, shadows, and transitions.

Implemented responsive layouts using:

Flexbox

CSS Grid

Media Queries

🛠️ Technologies Used

HTML5
CSS3
Flexbox
CSS Grid
Font Awesome Icons
Google Fonts

📚 Skills Demonstrated

Semantic HTML5 Structure

Modern CSS Styling

Responsive Web Design

Dropdown Navigation

Grid & Flexbox Layouts

UI/UX Design Principles

Hover Effects & Animations

🚀 Outcome

Successfully developed a modern and responsive landing page that fulfills all the internship task requirements, demonstrating proficiency in front-end web development fundamentals and responsive UI design.

#  Brew Haven Coffee Shop - Web Development Internship

Welcome to the **Brew Haven** multi-page website project! This repository contains the source code developed for **Task 2** of the Full Stack Web Development Internship, building upon the foundational landing page designed in Task 1.

---

## 🚀 What's New: Updates from Task 1 to Task 2

Over the past week, the project was scaled from a simple single-page landing site into a fully functional, structured multi-page website. Below are the explicit updates made to fulfill the Task 2 guidelines:

### 📂 Architecture & Page Layout Updates
*   **Multi-Page Migration:** Replaced the single-page layout with a fully interconnected 3-page ecosystem: **Home** (`index.html`), **About** (`about.html`), and **Contact** (`contact.html`)[cite: 1].
*   **Persistent & Responsive Navigation:** Built an global responsive navigation bar that allows seamless traversal across all pages on both desktop and mobile layouts.
*   **Dynamic Class States:** Implemented active state links (`class="active"`) to visually inform users which page they are currently browsing.

### ✍️ Functional Additions
*   **Interactive Contact Form:** Designed and integrated a functional user submission form collecting Name, Email, and Message strings[cite: 1].
*   **Client-Side JavaScript Validation:** Engineered custom frontend script checking mechanisms (`script.js`) that intercept submit hooks, alert the user if critical fields (Name/Email) are left empty, and prevent submission defaults until requirements are cleared[cite: 1].

### 🎨 Visual & Technical Fixes
*   **Custom Branding Integration:** Retired the text/emoji layout from Task 1 and integrated a custom high-quality brand icon asset (`logo.png`).
*   **Aspect Ratio Layout Correction:** Patched an issue causing visual image distortion (horizontal oval stretching) by locking explicit dimensions (`height`/`width`) along with an `object-fit: contain` rule in the stylesheet[cite: 3].

---

## 🛠️ Project Structure & Tech Stack

```text
├── index.html       # Updated Home Page (Hero Layout & Feature Matrix)
├── about.html       # Brand Narrative / Story Page
├── contact.html     # User Contact Form Entry
├── style.css        # Centralized Grid/Flexbox Layout Responsive System
├── script.js        # Core JavaScript Data Validation Engine
└── logo.png         # High-resolution Brand Logo Asset
# ☕ Brew Haven Coffee Shop - Web Development Internship

Welcome to the **Brew Haven** multi-page website project! This repository contains the source code developed for **Task 3** of the Full Stack Web Development Internship, advancing the multi-page design from Task 2 into a data-driven interactive application.

---

## 🚀 What's New: Updates from Task 2 to Task 3

In this task, the static 3-page website was updated with interactive frontend programming. The website can now process user input securely on the client side, persist form entries across browser restarts, and dynamically render data on a dedicated dashboard interface.

### ⚙️ JavaScript Interactivity & Client-Side Logic
* **Modern Submission Handling:** Replaced the inline `onsubmit` attributes with clean, asynchronous JavaScript event listeners (`addEventListener("submit")`) in `script.js` to gain full control over form hooks.
* **State Control:** Implemented `e.preventDefault()` inside the event handler to stop default browser execution and page refreshing, making sure data operations complete smoothly first.

### 📋 Advanced Form Validation
* **Comprehensive String Sanitation:** Integrated field retrieval strings using `.value.trim()` to wipe out empty spaces and evaluate actual user inputs.
* **Empty Field Prevention:** Implemented client-side conditional checks that inspect the Form context. If **Name**, **Email**, or **Message** fields are missing data, it stops submission and triggers a clear warning alert.

### 💾 LocalStorage Persistence & Dynamic Routing
* **Client Storage Engine:** Built an array-based data pipeline converting form entry dictionaries into JSON strings using `JSON.stringify()` and caching them into the browser's persistent `localStorage`.
* **Automatic Navigation Routing:** Programmed an automatic client redirect rule via `window.location.href = "submissions.html"` immediately following a successful submission event.

### 📊 Dynamic Submissions Dashboard (`submissions.html`)
* **New Portal Layout:** Created an entirely new page layout called `submissions.html` and integrated it cleanly into the responsive navigation menu across all other pages.
* **Data Parsing Loop:** Added dashboard initialization script logic using `JSON.parse(localStorage.getItem("contacts"))` to pull raw cache blocks back into live arrays.
* **Dynamic DOM Manipulation:** Implemented dynamic list rendering with structural template literals via `.innerHTML` loops. It maps each user's recorded Name, Email, and Message into dedicated visual feedback items.
* **Fallback Empty States:** Added conditional rendering logic to display a placeholder message ("No submissions found.") whenever the storage array is blank.

---

## 🛠️ Updated Project Structure

```text
├── index.html          # Home Page (Hero Layout & Feature Matrix)
├── about.html          # Brand Story / Narrative Page
├── contact.html        # Updated Contact Form Page (Targeted Form IDs)
├── submissions.html    # NEW: Live Feedback Dashboard 
├── style.css           # Centralized layout responsive styling system
├── script.js           # Core JavaScript Validation & LocalStorage Engine
└── logo.png            # High-resolution Brand Logo Asset
