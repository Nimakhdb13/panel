export default {
    required: [
        value => {
            if (value) return true
            return 'You must fill this field.'
        }
    ],
    username: [
        value => {
            if(value.split(" ").length > 1)
                return "UserName must not include space."
            if(!value)
                return 'You must fill this field.'
            return true
        }
    ],
    password: [
        value => {
            if(value.length < 8)
                return "Password must contain more than 8 letter."
            return true
        }
    ]

}