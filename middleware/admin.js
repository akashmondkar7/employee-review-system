const admin = (req, res, next) => {

  if (!req.session.isAdmin) {
    return res.send("Access Denied");
  }

  next();
};

export default admin;