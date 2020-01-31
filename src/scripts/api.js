/** Base URL for API requests. */
const apiURL = "https://freely.is/api";

/**
 * Register an email for the newsletter.
 *
 * @param {string} email Email to register
 * @returns {Promise<Response>} The `fetch` request to the API
 */
export function register(email) {
    return fetch(`${apiURL}/submitinterest`, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}
