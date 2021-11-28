# Prism [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/exactchange/prism/blob/master/LICENSE) [![npm version](https://img.shields.io/badge/npm-v1.3.2-brightgreen)](https://www.npmjs.com/package/prism-framework)

Prism is a library for backend JavaScript.

* **Declarative:** Prism makes it painless to create application backends. Design simple Actions for each route in your application, and Prism will efficiently merge your updates with the global application state and save just the right data to the database, retaining a single-source of truth at the application level. Declarative APIs make your requests and responses more predictable, simpler to understand, and easier to debug.

* **State-Based:** Build encapsulated Actions that manage their own state, then compose them to make complex APIs. Because the application state can be derived from the state of all Actions, there is no need to create a database schema, or set up an initial database Prism generates the database, and maintains the state of it as Actions are fired.

* **Use Everywhere:** Prism doesn't make assumptions about your application's front-end, so you can develop new features in Prism with your existing front-end code. Prism can also be used along-side many other Prism Nodes in a service network, sharing state information while retaining a single source of truth.

## API-only installation

Install Prism:
```
npm install prism-framework
```

#### Run an example project:
```
cd examples/todo-list-api
npm install
npm start
```

#### API-only flag

To run any Prism project without a database, append the npm `start` script with:
```
--skip-db
```

## Database installation

#### Install MongoDB:
```
brew install mongodb
```

Create a data directory:
```
mkdir -p /data/db
```

Ensure write permissions to `/data/db`:

```
sudo chown -R `id -un` /data/db
# Enter your password
```

#### Run an example project:
```
cd examples/todo-list-api
npm install
npm start
```

Stop database background process:
```
npm stop
```

#### Database versioning

To run a project with a different version of the database, append the npm `start` script with:
```
dbVersion=2
```
and a new instance of the state-database will be created on node start. Easily switch between versions using the `dbVersion` flag, with any version name you like as the value.

## [Examples](https://github.com/exactchange/prism-framework/tree/master/examples)

Here is a basic API example to get you started:

```
/*
 * Action for "/todos"
 */

class Todos extends Prism.Action {
  constructor(path) {
    super(path);

    this.setShape({
      todos: Prism.Type.Array
    });

    this.setState({
      todos: [
        { title: 'Go to the gym', isComplete: false },
        { title: 'Finish work presentation', isComplete: false },
        { title: 'Day dream', isComplete: true }
      ]
    });
  }

  didDelete(params) {
    // do stuff after data was deleted
  }

  didGet(params) {
    // do stuff after data was retrieved
  }

  didPut(params) {
    // do stuff after data was saved
  }
}
```

```
/*
 * Node with one action
 */

class Node extends Prism.Node {
  constructor() {
    super();

    this.actions = [
      new Todos('/todos')
    ];
  }
}
```

This example exposes an endpoint for "/todos", with some bootstrapped data. As the endpoint is used (via `GET`, `POST`, `PUT`, `DELETE`) the database structure will change accordingly, without the developer having to manage those database operations.

## Contributing

The main purpose of this repository is to continue to evolve Prism, making it faster and easier to use. Development of Prism happens in the open on GitHub, and I am grateful to the community for contributing bugfixes and improvements.

### License

Prism is [MIT licensed](./LICENSE).
