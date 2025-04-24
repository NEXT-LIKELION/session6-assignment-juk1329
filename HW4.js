const jsonString = `
[
  { "id": 1, "name": "Alice", "age": 25, "email": "alice@example.com" },
  { "id": 2, "name": "Bob", "age": 30, "email": "bob@example.com" },
  { "id": 3, "name": "Charlie", "age": 35, "email": "charlie@example.com" }
]
`;

const users = JSON.parse(jsonString);

const result = users.map(function (user) {
    const { id, name, age } = user;
    return { id, name, age };
});

console.log(result);
