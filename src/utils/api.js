export const submitContactForm = async (formData) => {
  try {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    let data;
    try {
      data = await res.json();
    } catch (err) {
      const text = await res.text();
      console.warn("Apps Script returned non-JSON:", text);
      data = { status: "success", message: "Saved successfully!" };
    }

    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
    return { status: "error", message: error.message };
  }
};
