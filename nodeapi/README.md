# nodeapi

## Install

```shell
npm install
```

To initialize tha database you can run:


```shell
npm run install_db
```

## API Methods

### List of agents

Get /api/agentes

** Default limit is 10.000 **

[
  {
    _id: "5e725ced4c405e5f532e49f9",
    name: "Smith",
    age: 37,
    __v: 0
  },
  {
    _id: "5e725ced4c405e5f532e49fa",
    name: "Jones",
    age: 37,
    __v: 0
  }
]


GET /api/agentes/:id  <--ejemplo--> /api/agentes/5e725ced4c405e5f532e49f9

{
  result: {
            _id: "5e725ced4c405e5f532e49f9",
            name: "Smith",
            age: 37,
            __v: 0
           }
}


## Other info

### How to start a mongoDB

```shell
./bin/mongod --dbpath ./data/db --directoryperdb
```