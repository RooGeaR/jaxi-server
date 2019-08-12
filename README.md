# Jaxi Tank interview test (Server)

Jaxi Tank interview project, to apply fullstack developer job.

## How to run the project

Install dependencies :

```shell
npm install
```

Edit `config/config.json` :

```json
{
    "development": {
        "username": "root",
        "password": null,
        "database": "db_development",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        ...
    },
    "production": {
        ...
    }
}
```

Init and seed database :

```shell
sequelize db:migrate
```

Run the project :

```shell
npm start
```

Open GraphiQL in your browser [http://localhost:8088/graphql](http://localhost:8088/graphql)

## Examples

Get list of users:

```graphql
query {
  users {
    first_name
    last_name
  }
}
```

_This will return only first 10 users!_

If you want to get another 10 users:

```graphql
query {
  users(offset: 10) {
    id
    first_name
  }
}
```

Or more than 10 users:

```graphql
query {
  users(first: 20) {
    id
    first_name
  }
}
```

Get name of user with ID = 1:

```GraphQL
query{
	user(id:1){
    first_name
    last_name
  }
}
```

Get list of projects:

```graphql
query {
  projects {
    title
  }
}
```

_This will return only first 10 projects!_

If you want to get another 10 projects:

```graphql
query {
  projects(offset: 10) {
    id
    title
  }
}
```

Or more than 10 projects:

```graphql
query {
  projects(first: 20) {
    id
    content
  }
}
```

Add new user and get his ID:

```graphql
mutation {
  createUser(
    user: {
      first_name: "Rose"
      last_name: "Tyler"
      username: "rose.tyler"
      email: "rosetyler@gmail.com"
      password: "rosetyler123"
      created_at: "2019-04-19 14:00:35"
    }
  ) {
    id
  }
}
```

Delete specific project ( project with id 1 ) and return its id and title:

```graphql
mutation {
  deleteProject(id: 1) {
    id
    title
  }
}
```

Update ( change ) specific project :

```graphql
mutation {
  updateProject(id: 1, title: "Updating Project", user_id: 1) {
    id
    title
    user {
      id
      first_name
      last_name
    }
  }
}
```
