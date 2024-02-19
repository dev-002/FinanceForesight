const baseURL = "http://localhost:5001/v1";

const auth = {
  login: baseURL + "/auth/login",
  register: baseURL + "/auth/register",
};

const finance = {
  display: baseURL + "/",
  create: baseURL + "/create",
  suggest: baseURL + "/suggest",
};

export { auth, finance };
