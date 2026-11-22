// Set this to the public Apps Script deployment URL ending in /exec.
window.studioPublicUrl = "";
// Set to the public web app URL after deploying and testing the editorial dashboard.
window.studioContentUrl = "";
window.studioBookingUrl = "https://script.google.com/macros/s/AKfycbyCoFUxaCz43MzZXgDaSzwOe0tiKjrXNlLWvo5MHKSfLfRHvHPHWZ43JBCoLWyj5reH-w/exec?view=booking";
// Booking and shop enquiries use the same public deployment.
window.studioShopUrl = window.studioBookingUrl;
window.studioAdminUrl = "https://script.google.com/macros/s/AKfycbz-mH5BsETmSm9ubKrOmScIMwLtuHBKQXLmmUy4soMnJvS0YG5vxFdNMbNPLduKio8Kbg/exec";

// Enable after the signup web app has been deployed and verified.
window.studioInterestUrl = "";
window.studioBookingEnabled = true;
window.studioWorkshopBookingEnabled = false;
window.studioEmbeddedBookingEnabled = false;

// Temporary launch: workshop enquiries and interests are handled by email.
window.studioTemporaryEmailEnabled = true;
