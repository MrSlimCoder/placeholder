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
 * A modal confirming that the user's email has been verified.
 * Hidden by default.
 *
 * @type {HTMLDivElement}
 */
export const verifiedModal = document.getElementById("verified-modal");
/**
 * A button to close the modal.
 *
 * @type {HTMLButtonElement}
 */
export const closeModalButton = document.getElementById("close-modal-button");

/**
 * Error box.
 * Hidden by default
 * 
 * @type {HTMLDivElement}
 */
export const error = document.getElementById("after-register-error");


/**
 * Error box text
 * 
 * @type {HTMLParagraphElement}
 */
export const errorText = document.getElementById("after-register-error");
