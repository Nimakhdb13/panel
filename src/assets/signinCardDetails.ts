export default  [
    {
      title: "SignUp",
      isFormValid: false,
      fields: [
        {
          title: "UserName",
          type: "text",
          name: 'username',
          rule: "username",
          icon: "fa-solid fa-user",
        },
        {
          title: "Email (optional)",
          type: "text",
          name: 'email',
          rule: "email",
          icon: "fa-solid fa-envelope",
        },
        {
          title: "Phone Number",
          type: "tel",
          name: 'phone',
          rule: "phone",
          icon: "fa-solid fa-phone",
        },
        {
          title: "Password",
          type: "password",
          name: "password",
          rule: "password",
          icon: "fa-solid fa-key",
        },
      ],
      spanText: "do you have an account?",
      btnText1: "login",
      btnText2: "signup",
    },
    {
      title: "LogIn",
      isFormValid: false,
      fields: [
        {
          title: "UserName",
          name: 'username',
          type: "text",
          rule: "required",
          icon: "fa-solid fa-user",
        },
        {
          title: "Password",
          name: 'password',
          type: "password",
          rule: "required",
          icon: "fa-solid fa-key",
        },
      ],
      spanText: "don't you have an account?",
      btnText1: "signup",
      btnText2: "login",
    },
  ];