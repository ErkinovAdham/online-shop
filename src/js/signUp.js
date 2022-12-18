export function SignUp(name, lastName, email, password, phone,) {
  try {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phone = phone;
  } catch (err) {
    console.log(err);
  }
}