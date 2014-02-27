Meteor.methods
    disqusSSO: ->
      throw new Meteor.Error(500, "Error 500: User has no emails defined")  if _(Meteor.user().emails).isUndefined()
      console.log "[DISQUS]", "SSO login for user", Meteor.user().username
      DISQUS_SECRET = "C2lcTrynhlJgZT5sVtDJL2Ng7ckYU9m2cVO9f7pwcFdTasurg6zcYP0H4ZEd6WkO"
      DISQUS_PUBLIC = "CbpDPxNXPcYH0UF0OubiigWOUrTzbiJDaEGOq3Zs1Fqe4EApjkPWKTvBWMD9DQmy"
      disqusData =
        id: Meteor.userId()
        username: Meteor.user().username
        email: Meteor.user().emails[0].address

      disqusStr = JSON.stringify(disqusData)
      timestamp = Math.round(+new Date() / 1000)

      #
      #     * Note that `Buffer` is part of node.js
      #     * For pure Javascript or client-side methods of
      #     * converting to base64, refer to this link:
      #     * http://stackoverflow.com/questions/246801/how-can-you-encode-a-string-to-base64-in-javascript
      #
      message = new Buffer(disqusStr).toString("base64")

      #
      #     * CryptoJS is required for hashing (included in dir)
      #     * https://code.google.com/p/crypto-js/
      #
      result = CryptoJS.HmacSHA1(message + " " + timestamp, DISQUS_SECRET)
      hexsig = CryptoJS.enc.Hex.stringify(result)
      pubKey: DISQUS_PUBLIC
      auth: message + " " + hexsig + " " + timestamp
