import "regenerator-runtime/runtime";
import {
    register,
} from "./api";

/**
 * The form element where the user submits their email to be registered.
 *
 * @type {HTMLFormElement}
 */
const form = document.getElementById("form");
/**
 * The email input field.
 *
 * @type {HTMLInputElement}
 */
const emailField = document.getElementById("email-field");

const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", async event => {
    event.preventDefault();

    const { value: email } = emailField;

    try {
        submitButton.classList.add("is-loading");
        await register(email);
    }
    catch (fetchError) {
        console.error(fetchError);
    }
    finally {
        submitButton.classList.remove("is-loading");
    }
});
