/**
 * The div element where the user submits their email to be registered.
 *
 * @type {HTMLDivElement}
 */
export const form = document.getElementById("form");
/**
 * The email input field.
 *
 * @type {HTMLInputElement}
 */
export const emailField = document.getElementById("email-field");
/**
 * The submit button for the form.
 *
 * @type {HTMLButtonElement}
 */
export const submitButton = document.getElementById("submit-button");

/**
 * Thank you box that is visible after submitting.
 * Hidden by default.
 *
 * @type {HTMLDivElement}
 */
export const thanks = document.getElementById("after-register-message");
/**
 * Error box.
 * Hidden by default.
 *
 * @type {HTMLDivElement}
 */
export const error = document.getElementById("after-register-error");
/**
 * Error box text.
 *
 * @type {HTMLParagraphElement}
 */
export const errorText = document.getElementById("error-text");
/**
 * Modal fields.
 * Hidden by default.
 */
export const modal = {
    /**
     * A modal confirming that the user's email has been verified.
     * Hidden by default.
     *
     * @type {HTMLDivElement}
     */
    parent: document.getElementById("verified-modal"),
    /**
     * The modal title.
     *
     * @type {HTMLHeadingElement}
     */
    title: document.getElementById("modal-title"),

    /**
     * The modal body content.
     *
     * @type {HTMLParagraphElement}
     */
    body: document.getElementById("modal-body"),
    /**
     * A button to close the modal.
     *
     * @type {HTMLButtonElement}
     */
    closeButton: document.getElementById("close-modal-button"),
};
