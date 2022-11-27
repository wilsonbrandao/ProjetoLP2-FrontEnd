import axios from 'axios';

export async function getUser() {
    try {
        //TODO: Puxar usuário
      const response = await axios.get('#');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }