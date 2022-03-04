module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aba445f60eeb43901e8d83e9ab138612'),
  },
});
