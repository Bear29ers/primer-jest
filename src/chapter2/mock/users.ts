import axios from 'axios';

class Users {
  static search() {
    return axios.get('/users').then((res) => res.data);
  }
}

export default Users;
