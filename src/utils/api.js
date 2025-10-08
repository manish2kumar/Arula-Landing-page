export const submitContactForm = async (formData) => {
  try {
    console.log("Apps Script URL:", import.meta.env.VITE_APPS_SCRIPT_URL);

    const res = await fetch(import.meta.env.VITE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const text = await res.text();
    console.log("Raw response:", text);

    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
    return { status: "error", message: error.message };
  }
};