export default {
  required: [
    (value: string) => {
      if (value) return true;
      return "You must fill this field.";
    },
  ],
  username: [
    (value: string) => {
      if (value.split(" ").length > 1 || /[^A-Za-z]/g.test(value))
        return "UserName must not include space.";
      if (!value) return "You must fill this field.";
      return true;
    },
  ],
  password: [
    (value: string) => {
      if (/[^]{8,}/g.test(value)) return true;
      return "Password must contain more than 8 letter.";
    },
  ],
  phone: [
    (value: string) => {
      if (value.length == 0) return true;
      if (value.length != 11 || value[0] != "0")
        return "Please enter a valid phone number.";
      return true;
    },
  ],
  email: [
    (value: string) => {
      if (/^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+[.]+[a-z]{2,4}/g.test(value))
        return true;
      else return "Email is not valid. It should be like example@mail.com";
    },
  ],
};
