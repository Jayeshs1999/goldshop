import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcryptjs.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "John doe",
    email: "jayesh@gmail.com",
    password: bcryptjs.hashSync("12345", 10),
    isAdmin: false,
  },
];

export default users;
