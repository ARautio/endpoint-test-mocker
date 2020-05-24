import UserAPI from './UserAPI';
import UserAPIMock from './UserAPI.mock';

describe('UserAPI', () => {
  const userAPI = new UserAPI();
  const userAPIMock = new UserAPIMock();

  describe('getUsers', () => {
    it('should return two customers', () => {
      userAPI.getUsers = jest.fn(() =>
        userAPIMock.setValue({ amount: 2 }).getUsers()
      );
      expect(userAPI.getUsers()).toHaveLength(2);
    });

    it('should still return two customers', () => {
      userAPI.getUsers = jest.fn(() => userAPIMock.getUsers());
      expect(userAPI.getUsers()).toHaveLength(2);
    });

    it('should still return 0 customers', () => {
      userAPI.getUsers = jest.fn(() =>
        userAPIMock.setValue({ amount: 0 }).getUsers()
      );
      expect(userAPI.getUsers()).toHaveLength(0);
    });

    it('should return randomly selected items', () => {
      userAPI.getUsers = jest.fn(() =>
        userAPIMock.setValue({ amount: 2 }).getUsers()
      );
      expect(userAPI.getUsers()[0].id).toStrictEqual(1);
    });

    it('should return randomly selected items', () => {
      userAPI.getUsers = jest.fn(() =>
        userAPIMock.setValue({ amount: 4, seed: 10 }).getUsers()
      );
      expect(userAPI.getUsers()[0].id).toStrictEqual(12);
    });
  });
});
