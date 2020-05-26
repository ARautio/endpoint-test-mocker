# Endpoint test mocker

Endpoint test mocker util to ease up mocking up endpoint calls when testing a server or client behaviour. Note that this is in experimental phase so API may change later on.

## Features

- Create realistic, random and consistent mocked data for your tests.
- Keep mocked data code readable by writing only the data structure related code.
- Array helpers generate random but consistent mocked data from given set of data.

This package doesn't provide data mocking functions but it works very well with [chancejs](https://github.com/chancejs/chancejs) or [fakerjs](https://github.com/marak/Faker.js/).

## Install

```
npm install endpoint-test-mocker --save-dev
```

## Usage

1. Create a new class which extends EndpointMock and create methods to mock your endpoint calls.

```javascript
import { EndpointMock, helpers } from 'endpoint-test-mocker';

const username = ['User1', 'User2', 'User3'];
const tags = ['coder', 'designer', 'developer', 'UX'];

class UserAPI extends EndpointMock {
  getUsers() {
    return this.arrayBuilder(index => ({
      id: this.seed + index,
      username: helpers.fromArray(usernames, this.seed + index),
      points: helpers.betweenIntegers({ min: 0, max: 20 }, this.seed + index),
      tags: helpers.multipleFromArray(tags, 2, this.seed),
    }));
  }
}
```

2. Create tests for your code and use your class to mock the endpoint implementation.

```javascript
const userAPIMock = new UserAPI();
userAPI.getUsers = jest.fn(() => userAPIMock.getUsers());
```

For example see [examples/SimpleExample](https://github.com/ARautio/endpoint-test-mocker/tree/master/examples/SimpleExample)

## Author

- [Aki Rautio](https://twitter.com/akirautio)

## License

[MIT](https://oss.ninja/mit?organization=Aki%20Rautio)
