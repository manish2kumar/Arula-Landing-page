export const submitContactForm = async (formData) => {
  try {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
    return { status: "error", message: error.message };
  }
};
