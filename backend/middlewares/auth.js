export const register = asynchandler(async (req, res, next) => {

  const token = req.cookies.token;

  if (!token) {
    return next(new Errorhandler("You are already logged in", 400));
  }
}
);

export const login = asynchandler(async (req, res, next) => { 
    const token = req.cookies.token;
});