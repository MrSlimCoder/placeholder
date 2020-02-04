// Babel and Parcel stuff
import "regenerator-runtime/runtime";
import "core-js";

import {
    emailField, submitButton, error, errorText,
} from "./elements";
import {
    updatePageForVerification,
} from "./verification";

const apiURL = "https://freely.is/api";

submitButton.addEventListener("click", event => {
    event.preventDefault();

    const { value: email } = emailField;

    try {
        // Make the button have a loading animation
        submitButton.classList.add("is-loading");

        // Reset the error message
        errorText.textContent = "";

        const request = new XMLHttpRequest();

        request.open("POST", `${apiURL}/submitinterest`, true);
        request.setRequestHeader("Content-Type", "application/json");

        request.send(JSON.stringify({ email }));

        request.onerror = () => {
            console.error(request.response);

            errorText.innerText = request.response
                ? `There has been an error: ${request.response}`
                : "There has been an error, please try again.";
            // Make the error text visible again
            error.classList.remove("is-hidden");
        };

        request.onloadend = () => {
            if (request.status && request.status < 400) {
                updatePageForVerification();
            }
            else {
                console.error(request.response);
                errorText.innerText = request.response
                    ? `There has been an error: ${request.response}`
                    : "There has been an error, please try again.";
                // Make the error text visible again
                error.classList.remove("is-hidden");
            }
        };
    }
    catch (error) {
        errorText.innerText = `An error occurred: ${error}`;
        console.error(error);
    }
    finally {
        submitButton.classList.remove("is-loading");
    }
});

if (window.location.search === "?verified") {
    // Current page URL is `https://freely.is/?verified`
    updatePageForVerification(true);
}
