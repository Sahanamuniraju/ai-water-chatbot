function quickAsk(q) {
    document.getElementById("userInput").value = q;
    sendMessage();
}

function sendMessage() {
    let input = document.getElementById("userInput");
    let messages = document.getElementById("messages");
    let mode = document.getElementById("mode").value;
    let userText = input.value.trim();

    if (!userText) return;

    messages.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;
    input.value = "";

    let typing = document.createElement("p");
    typing.innerHTML = "<em>Bot is typing...</em>";
    messages.appendChild(typing);

    setTimeout(() => {
        messages.removeChild(typing);
        let reply = (mode === "basic")
            ? basicAI(userText)
            : advancedAI(userText);

        messages.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;
        messages.scrollTop = messages.scrollHeight;
    }, 800);
}

/* BASIC MODE */
function basicAI(input) {
    input = input.toLowerCase();

    if (input.includes("cloth"))
        return "Cloth filtration removes visible dirt but does not remove bacteria or viruses. Boiling is still required.";

    if (input.includes("stored"))
        return "Stored water is safe only when kept in clean, covered containers.";

    if (input.includes("disease") || input.includes("dirty"))
        return "Dirty water can cause diarrhea, cholera, typhoid, and hepatitis.";

    if (input.includes("important"))
        return "Clean drinking water is essential to prevent disease and maintain good health.";

    return "Please ask about water safety, storage, purification, or health effects.";
}

/* ADVANCED AI (SIMULATED CHATGPT + RAG) */
function advancedAI(input) {
    input = input.toLowerCase();

    if (input.includes("cloth"))
        return "Cloth filtration removes suspended particles but cannot eliminate microorganisms. WHO recommends boiling or chemical disinfection afterward.";

    if (input.includes("boil"))
        return "Boiling water for 5–10 minutes effectively kills harmful bacteria, viruses, and parasites.";

    if (input.includes("pollution"))
        return "AI detects water pollution by analyzing sensor data, satellite imagery, and lab results using machine learning models.";

    if (input.includes("sensor"))
        return "Smart sensors continuously monitor parameters like pH, turbidity, temperature, and chemical levels in water.";

    if (input.includes("disease"))
        return "AI predicts water-borne disease outbreaks by correlating water quality data with health and climate data.";

    if (input.includes("sustainability"))
        return "Clean water supports sustainability by improving health, reducing poverty, and protecting ecosystems.";

    return "I couldn’t find an exact match, but based on WHO and public health guidelines, safe drinking water is essential for preventing disease and ensuring sustainable development.";
}
