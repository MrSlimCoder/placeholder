import {
    thanks, form, verifiedModal, closeModalButton, error,
} from "./elements";

/**
 * Update page elements for after the user has submitted their email.
 *
 * @param {boolean} [verified=false] Whether or not this user has verified their email
 */
export function updatePageForVerification(verified = false) {
    if (!error.classList.contains("is-hidden")) {
        error.classList.add("is-hidden");
    }

    thanks.classList.remove("is-hidden");
    form.classList.add("is-hidden");

    if (verified) {
        verifiedModal.classList.add("is-active");
    }
}

closeModalButton.addEventListener("click", () =>
    verifiedModal.classList.remove("is-active"),
);
