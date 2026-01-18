This README provides an overview and setup instructions for the **IZS Digital Info-Portal**. This project is specifically engineered for a Tablet to serve as a standalone information kiosk.

---

# IZS Digital Info-Portal

A modern, touch-optimized kiosk application designed to provide visitors with quick access to essential information about the **Islamic Center Stuttgart (IZS)**.

### 📱 Hardware Specification

- **Target Device:** Tablet
- **Platform:** Optimized for **Fully Kiosk Browser** or **XOGO Decision Signage**.

### ✨ Key Features

- **Animated Screensaver:** An eye-catching, breathing gradient background that activates after 60 seconds of inactivity to prevent screen burn-in and attract visitors.
- **Bilingual Interface:** Full support for German and Arabic, including RTL (Right-to-Left) layout switching.
- **Modern Light Design:** A clean, professional "Glassmorphism" aesthetic with high-contrast buttons and soft shadows.
- **Fixed Viewport:** Zero-scroll architecture; all content is scaled to fit exactly within the 800x1280 frame.
- **Information Hub:** Interactive cards for Nikah (marriage), language courses, Quran lessons, and prayer times.

---

### 📂 File Structure

```text
/izs-kiosk
│
├── index.html          # The Screensaver (Home Page)
├── language.html       # Language Selection Page
├── portal.html         # Main Info Hub & Dynamic Content
├── shared.css          # Global Styles & 800x1280 Layout Logic
│
└── /assets             # Media Folder
    ├── IZS_Logo_Black.png # Official Center Logo (dark)
    ├── IZS_Logo_White.png # Official Center Logo (white, for screensaver)
    ├── QR_Nikah.png       # QR code for marriage inquiries
    ├── QR_Telegram.png # QR code for Imam contact
    ├── QR_Apple.png    # App Store link
    └── QR_Android.png  # Play Store link

```

---

### 🚀 Deployment Instructions

#### Using Fully Kiosk Browser (Recommended)

1. **Transfer Files:** Copy the entire project folder to the tablet's internal storage.
2. **Set Start URL:** Open Fully Kiosk settings and set the Start URL to the local path of `index.html` (e.g., `file:///sdcard/izs-kiosk/index.html`).
3. **Lockdown:**
   - Enable **Kiosk Mode** to prevent users from exiting.
   - Disable **Status Bar** and **Navigation Bar** for a full-screen experience.
   - Set **Auto-Reload on Idle** to 60 seconds (optional, as the internal script handles this as well).

#### Using XOGO

1. **Upload to Web:** Host the files on a private web server or a GitHub Pages site.
2. **Add URL:** In the XOGO Manager, add a "Web URL" content item pointing to your hosted `index.html`.
3. **Deploy:** Assign the URL to your tablet's player.

---

### 🛠 Maintenance & Updates

- **Changing Content:** To update text or QR links, edit the `topics` array inside the `<script>` tag of `portal.html`.
- **Images:** If replacing QR codes, ensure the new files are saved in the `/assets` folder with the exact filenames mentioned in the code to avoid broken links.
- **Timer:** To adjust how long the tablet waits before returning to the screensaver, change the `60000` (milliseconds) value in the `resetTimer` function within the HTML files.

---

### ⚖️ Design Philosophy

The UI follows a **"Touch-First"** approach. Every button has a minimum hit area of 80px to ensure accessibility for all age groups. The color palette uses `#1a5d48` (IZS Green) as the primary anchor to maintain brand consistency while utilizing a white background to ensure maximum readability under indoor lighting.
