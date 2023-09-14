export default {
  required: [
    (value: string) => {
      if (value) return true;
      return "You must fill this field.";
    },
  ],
  username: [
    (value: string) => {
      if (value.split(" ").length > 1)
        return "UserName must not include space.";
      if (!value) return "You must fill this field.";
      return true;
    },
  ],
  password: [
    (value: string) => {
      if (value.length < 4) return "Password must contain more than 8 letter.";
      return true;
    },
  ],
  phone: [
    (value: string) => {
        if(value.length != 11 || value[0] != '0') return "Please enter a valid phone number."
        return true;
    }
  ]
};

