const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user) {
    console.log('User Exist =>', user);
    next();
  } else {
    console.log('Unauthorized');

    next();
  }
};

module.exports = authorize;
