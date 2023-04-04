import axios from 'axios';

export async function getAllContacts() {
  const url = 'https://642be51ad7081590f92c79ab.mockapi.io/contacts';
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const addContact = async data => {
  const url = 'https://642be51ad7081590f92c79ab.mockapi.io/contacts';
  try {
    const { data: result } = await axios.post(url, data);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = async id => {
  const url = 'https://642be51ad7081590f92c79ab.mockapi.io/contacts';
  try {
    const { data } = await axios.delete(`${url}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
