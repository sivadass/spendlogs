import { postJSON, getJSON } from "../../utils/axios";

const addClient = (values: {}) => {
  return postJSON("/client", values)
    .then(d => {
      console.log("client data", d);
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const getClients = () => {
  return getJSON("/client")
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const getClientDetails = (id: string) => {
  return getJSON(`/client/${id}`)
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

export default { addClient, getClients, getClientDetails };
