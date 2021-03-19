'use strict';

module.exports = {
    create: async ctx => {
        console.log('ctx', ctx);
        const { email, body } = ctx.request.body;

        await strapi.plugins['email'].services.email.send({
            to: email,
            from: 'admin@strapi.io',
            subject: 'testing email',
            text: body,
        });

        await ctx.send({
            message: "email sent from post request",
        });
    },
};