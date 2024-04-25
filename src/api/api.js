import axios from "axios";
export const instance = axios.create({
  baseURL: "https://6620cf433bf790e070b0c2e9.mockapi.io",
});

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
