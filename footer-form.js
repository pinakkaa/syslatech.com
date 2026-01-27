const footerForm = document.getElementById("footerForm");
const footerSuccessMsg = document.getElementById("footerSuccessMsg");
const footerSubmitBtn = footerForm.querySelector(".submit-btn");

footerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  footerSubmitBtn.textContent = "Submitting...";
  footerSubmitBtn.disabled = true;

  const formData = {
    name: footerForm.name.value,
    email: footerForm.email.value,
    mobile: `${footerForm.countryCode.value} ${footerForm.mobile.value}`,
  };

  try {
    const res = await fetch("https://emailjsfuntions-428145106157.asia-south1.run.app/syslatech-footer-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      footerSuccessMsg.style.display = "block";
      footerForm.reset();
    }
  } catch (error) {
    console.error(error);
  } finally {
    footerSubmitBtn.textContent = "Submit";
    footerSubmitBtn.disabled = false;
  }
});




