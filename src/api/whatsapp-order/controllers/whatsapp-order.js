'use strict';

/**
 * A set of functions called "actions" for `posts-report`
 */

 module.exports = {
  async postsReport(ctx, next) {
    try {
      const data = await strapi
        .service("api::whatsapp-order.whatsapp-order")
        .postsReport();

      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },  async postsReport2(ctx, next) {
    try {
      const data = await strapi
        .service("api::whatsapp-order.whatsapp-order")
        .postsReport2(ctx.request);

      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
