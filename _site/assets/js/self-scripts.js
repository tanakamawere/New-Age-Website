function sendToWhatsApp() {
    // Get the name and phone values
    const name = document.getElementById("nameInput").value;
    const phone = document.getElementById("phoneInput").value;

    // Encode the message to be sent on WhatsApp
    const message = `Hello, my name is ${encodeURIComponent(name)} and my phone number is ${encodeURIComponent(phone)} I would like....`;

    // Define the WhatsApp API link with the message
    const whatsappUrl = `https://wa.me/263785468923?text=${message}`;

    // Open the WhatsApp URL in a new tab
    window.open(whatsappUrl, "_blank");
}