import "regenerator-runtime/runtime";

import {
    form, emailField, submitButton, error, errorText,
} from "./elements";
import {
    updatePageForVerification,
} from "./verification";

const apiURL = "https://freely.is/api";

form.addEventListener("submit", event => {
    event.preventDefault();

    const { value: email } = emailField;
    
    try {
        submitButton.classList.add("is-loading");

        const request = new XMLHttpRequest();

        request.open("POST", `${apiURL}/submitinterest`, true);
        request.setRequestHeader("Content-Type", "application/json");

        request.send(JSON.stringify({ email }));

        request.onerror = () => {
            errorText.innerHTML = request.response ? `There has been an error: ${request.response}` : "There has been an error, please try again.";
            error.classList.remove("is-hidden");
        };

        request.onloadend = () => {
            if (request.status && request.status < 300) {
                updatePageForVerification();
            }
            else {
                errorText.innerHTML = request.response ? `There has been an error: ${request.response}` : "There has been an error, please try again.";
                error.classList.remove("is-hidden");
            }
        };
    }
    catch (fetchError) {
        console.error(fetchError);
    }
    finally {
        submitButton.classList.remove("is-loading");
    }
});

// Current page URL is `https://freely.is/?verified`
if (window.location.search === "?verified") {
    updatePageForVerification(true);
}
