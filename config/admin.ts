export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5e1ffd2388d7019a84956884d64cf03a'),
  },
});
