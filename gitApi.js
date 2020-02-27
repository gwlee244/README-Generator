const {get} = require("axios");

const api = {
    gitUser: function(username) {
        return get(`https://api.github.com/users/${username}`);
    }
};

module.exports = api;