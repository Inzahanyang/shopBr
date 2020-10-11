import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "김양우",
    email: "yang@woo.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "이진희",
    email: "jin@hee.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
