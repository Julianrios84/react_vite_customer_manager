# Customer Manager 

Customer management system created with:

|                            |
| -------------------------- |
| React                      |
| Vite                       |
| TailwindCSS                |
| React Router Dom Version 6 |
| Json Server                |

## Ejector Fronted

|                        |              |
| ---------------------- | ------------ |
| Installer dependencies | yarn install |
| Run server             | yarn run dev |

```
yarn install
yarn run dev
```

## Json Server?

Get a full fake REST API with **zero coding** in **less than 30 seconds** (seriously)

Created with <3 for front-end developers who need a quick back-end for prototyping and mocking.

```
npm install -g json-server

```

Create a `db.json` file with some data

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

```

Run Json Server

```
json-server --watch db.json

```

Examples:

Now if you go to [http://localhost:3000/posts/1](http://localhost:3000/posts/1), you'll get

```
{ "id": 1, "title": "json-server", "author": "typicode" }

```

Now if you go to [http://localhost:3000/comments/1](http://localhost:3000/posts/1), you'll get

```
{ "id": 1, "body": "some comment", "postId": 1 }

```
