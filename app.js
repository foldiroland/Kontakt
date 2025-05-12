document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseElement = document.getElementById("response");

    if (!name || !email || !message) {
        responseElement.textContent = "Minden mező kitöltése kötelező!";
        responseElement.style.color = "red";
        return;
    }

    try {
        const response = await fetch("server.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        });

        const result = await response.text();
        responseElement.textContent = result;
        responseElement.style.color = "green";
    } catch (error) {
        responseElement.textContent = "Hiba történt az üzenet küldésekor.";
        responseElement.style.color = "red";
    }
});