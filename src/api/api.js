import axios from "axios";
export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

// export const requestRegister = async (formData) => {
//   const { data } = await instance.post("/users/signup", formData);

//   return data;
// };
// export const requestLogin = async (formData) => {
//   const { data } = await instance.post("/users/login", formData);

//   return data;
// };

// export const requestLogout = async () => {
//   await instance.post("/users/logout");

//   return;
// };

export const requestContacts = async () => {
  const { data } = await instance.get(`/contacts`);
  return data;
};

// export const requestAddContact = async (contact) => {
//   const { data } = await instance.post("/contacts", `${contact}`);
//   return data;
// };

export const requestDeleteContact = async (id) => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
