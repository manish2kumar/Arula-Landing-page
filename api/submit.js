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
      console.warn("Fallback, Apps Script response not JSON:", text);
      throw new Error("Invalid response from Apps Script.");
    }

    return data;
  } catch (error) {
    console.error("Error submitting form:", error);
    return { status: "error", message: error.message };
  }
};
