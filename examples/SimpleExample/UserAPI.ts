class UserAPI {
  getUsers() {
    // Here would be the loading function of the the users
    const response = [
      {
        id: 'TEST1',
        username: 'Test1',
      },
      {
        id: 'TEST2',
        username: 'Test2',
      },
    ];
    return response;
  }
}

export default UserAPI;
