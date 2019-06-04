
const common = {

  success: (res, code, data) => {
    res.status(code).json({ status: code, data });
  },

  error: (res, code, message) => {
    res.status(code).json({ status: code, error: message });
  },
};

export default common;
