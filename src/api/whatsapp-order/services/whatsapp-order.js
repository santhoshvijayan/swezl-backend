'use strict';

/**
 * posts-report service.
 */

 module.exports = {
    postsReport: async () => {
      try {
        // fetching data
        const entries = await strapi.entityService.findMany(
          "api::order.order",
  
          {
           populate: "*"
          }
        );
  
        // reduce the data to the format we want to return
        let entriesReduced;
  
        if (entries && Array.isArray(entries)) {
          entriesReduced = entries.reduce((acc, item) => {
            acc = acc || [];
  
            acc.push({
              id: item.id,
             
              publishedDate: new Date(item.createdAt).toDateString() || "",
             
            });
  
            return acc;
          }, []);
        }
  
        // return the reduced data
        return entriesReduced;
      } catch (err) {
        return err;
      }
    },
    postsReport2: async (request) => {
      try {
        // fetching data
        console.log("request:"+JSON.stringify(request.body));

        let requestBody = request.body;
        console.log("phone:"+requestBody.phone);
        const sellerFound = await strapi.entityService.findMany("api::seller.seller",{
          fields: ['id'],
          filters: {phone: { $eq:requestBody.phone}},
          limit: 1
        });
        console.log("selle"+JSON.stringify(sellerFound));
        console.log("sellecround"+sellerFound.length);

        if(sellerFound.length>0)  {
           const item = await strapi.entityService.create("api::item.item",{
            data: {
              details: requestBody.items[0].details,
              age: requestBody.items[0].age,
              order: 2
            }
           });
           console.log(JSON.stringify(item));
        }else{

        }







        const entries = await strapi.entityService.findMany(
          "api::order.order",
  
          {
           populate: "*"
          }
        );
  
        // reduce the data to the format we want to return
        let entriesReduced;
  
        if (entries && Array.isArray(entries)) {
          entriesReduced = entries.reduce((acc, item) => {
            acc = acc || [];
  
            acc.push({
              id: item.id,
             
              publishedDate: new Date(item.createdAt).toDateString() || "",
             
            });
  
            return acc;
          }, []);
        }
  
        // return the reduced data
        return entriesReduced;
      } catch (err) {
        return err;
      }
    }
  };
