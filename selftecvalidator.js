/**
 * SelftecValidator - Basic Data Validation Utilities
 * Author: Selftec
 * License: Custom
 */

const SelftecValidator = {
    /**
     * Validates if a string is a valid email address.
     * @param {string} email - The string to validate.
     * @returns {boolean}
     */
    isEmail(email) {
        if (typeof email !== 'string') return false;
        const regex = /^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    },

    /**
     * Checks if a string is a valid HEX color.
     * @param {string} color - The color string to validate.
     * @returns {boolean}
     */
    isHexColor(color) {
        if (typeof color !== 'string') return false;
        return /^#?[0-9A-Fa-f]{6}$/.test(color);
    },

    /**
     * Validates if a value is a positive integer.
     * @param {any} value - The value to check.
     * @returns {boolean}
     */
    isPositiveInteger(value) {
        return Number.isInteger(value) && value > 0;
    }
};

// Example usage:
// console.log(SelftecValidator.isEmail('test@example.com')); // true
// console.log(SelftecValidator.isHexColor('#FFAABB')); // true
// console.log(SelftecValidator.isPositiveInteger(42)); // true

module.exports = SelftecValidator;
