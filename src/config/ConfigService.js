const {config} = require("dotenv");

class ConfigService {
    config;

    constructor() {
        const {error, parsed} = config();

        if (error) {
            throw new Error(".env file not found.")
        }

        if (!parsed) {
            throw new Error(".env file is empty.")
        }

        this.config = parsed;
    }


    get(key) {
        const value = this.config[key];

        if (!value) {
            throw new Error(`key=${key} not found.`)
        }

        return value;
    }
}

module.exports = ConfigService