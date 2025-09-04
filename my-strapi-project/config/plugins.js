// module.exports = () => ({});
module.exports = {
  'slugify': {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: 'slug',   // the field where the slug will be stored
          references: 'title', // which field to base the slug on
        },
      },
    },
  },
};
