module.exports = {
  routes: [
    {
      method: "GET",
      path: "/whatsapp-order",
      handler: "whatsapp-order.postsReport",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/whatsapp-order2",
      handler: "whatsapp-order.postsReport2",
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};