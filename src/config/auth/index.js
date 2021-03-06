const providers = {
  meli: require("./oauth/meli"),
}

module.exports = {
  /**
   * @description - Send a request to the provider to get the token
   * @returns {Promise} - Promise with the provider response
   */
  getToken: (provider, code) => providers[provider].getToken(code),

  /**
   * @description - Send a request to the provider to refresh the token
   * @returns {Promise} - Promise with the provider response
   */
  refreshToken: (provider, code) => providers[provider].refreshToken(code),
}
