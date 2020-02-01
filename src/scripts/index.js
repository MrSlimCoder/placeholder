import "regenerator-runtime/runtime";
import "core-js";
import {
    register,
} from "./api";
import {
    form, emailField, submitButton,
} from "./elements";
import {
    updatePageForVerification,
} from "./verification";

form.addEventListener("submit", async event => {
    event.preventDefault();

    const { value: email } = emailField;

    try {
        submitButton.classList.add("is-loading");
        await register(email);
        updatePageForVerification();
    }
    catch (fetchError) {
        console.error(fetchError);
    }
    finally {
        submitButton.classList.remove("is-loading");
    }
});

if (window.location.search === "?verified") {
    // Current page URL is `https://freely.is/?verified`
    updatePageForVerification(true);
}
