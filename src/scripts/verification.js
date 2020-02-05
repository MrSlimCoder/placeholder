import {
    thanks, form, error, modal,
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
        modal.parent.classList.add("is-active");
    }
}

modal.closeButton.addEventListener("click", () =>
    modal.parent.classList.remove("is-active"),
);

/**
 * Updates page elements for when the user tried to verify their email but it failed.
 * The API server will redirect users to `/?error` trigger this.
 */
export function updatePageForVerificationError() {
    updatePageForVerification(true);

    modal.title.innerText = "Verification Error";
    modal.body.innerText = [
        "Something went wrong while verifying your email",
        "Please try again later",
        "If this error keeps happening contact a member of Freely staff",
    ].join(". ");
}
