# Endpoint test mocker

Endpoint test mocker util to ease up mocking up endpoint calls when testing a server or client behaviour. Note that this is in experimental phase so API may change later on.

## Features

- Create realistic mocks from endpoint responses. Same input will give same outputs but the content itself can be randomized with a seed.

## Usage

1. Create a new class which extends EndpointMock and create methods to mock your endpoint calls.

```javascript
class UserAPI extends EndpointMock {
  getUsers() {
    return this.arrayBuilder(index => ({
      id: this.seed + index,
      username: helpers.fromArray(usernames, this.seed + index),
    }));
  }
}
```

2. Create tests for your code and use your class to mock the endpoint implementation.

```javascript
const userAPIMock = new UserAPI();
userAPI.getUsers = jest.fn(() => userAPIMock.getUsers());
```

For example see [example/SimpleExample](https://github.com/ARautio/endpoint-test-mocker/tree/master/examples/SimpleExample)

## Author

- [Aki Rautio](https://twitter.com/akirautio)

## License

[MIT](https://oss.ninja/mit?organization=Aki%20Rautio)
