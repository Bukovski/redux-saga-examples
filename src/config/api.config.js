function Api () {}

Api.getPosts = (limit = 10) => `https://jsonplaceholder.typicode.com/posts?_limit=${ limit }`;

Api.getUsers = (limit = 10) => `https://jsonplaceholder.typicode.com/users?_limit=${ limit }`;


export default Api;