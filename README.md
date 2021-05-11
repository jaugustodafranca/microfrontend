# Micro frontend

This is an example of micro frontend using single-spa.

### Run:

- Start the **Vue** and confirm if will run on the port 8001:

```sh
$ yarn install && yarn serve
```

- Start the **React** and confirm if will run on the port 8002:

```sh
$ yarn install && yarn start
```

- Start the **Angular** and confirm if will run on the port 8003:

```sh
$ npm install && npm run serve:single-spa:angular-single
```

- Start the **orchestrator** and confirm if will run on the port 9000:

```sh
$ yarn install && yarn start
```

### Access:

After start all the instances you must have access to the **orchestrator** on the port `9000`

| Routes   |            Content             |
| -------- | :----------------------------: |
| /        | SingleSPA default instructions |
| /vue     |        Only vue content        |
| /angular |        Only vue content        |
| /react   | React + Vue + Angular contents |

Example to access react route: `http://localhost:9000/react`
