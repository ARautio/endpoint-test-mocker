import { EndpointMock, helpers } from '../../src';

const usernames = ['Username', 'TestUsername', 'Usernametesting'];

class UserAPI extends EndpointMock {
  getUsers() {
    return this.arrayBuilder(index => ({
      id: this.seed + index,
      username: helpers.fromArray(usernames, this.seed + index),
    }));
  }
}

export default UserAPI;
