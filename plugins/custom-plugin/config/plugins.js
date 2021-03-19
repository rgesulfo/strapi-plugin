module.exports = ({ env }) => ({
    email: {
      provider: 'mailtrap',
      providerOptions: {
        user: env('MAILTRAP_USER', '2e12015027700c'),
        password: env('MAILTRAP_PASSWORD', '9efe9182189442')
      },
      settings: {
        defaultFrom: env('MAILTRAP_DEFAULT_FROM', 'default@value.com'),
        defaultReplyTo: env('MAILTRAP_DEFAULT_REPLY_TO', 'default@value.com'),
      },
    }
});