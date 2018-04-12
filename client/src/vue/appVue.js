new Vue({
  el: '#app',
  data: {
    newEmail: '',
    newPassword: '',
    confirmPassword: '',
    email: '',
    password: '',
    error: '',
    errorLogin : '',
    success: '',
    successLogin: '',
    token: ''
  },
  methods: {
    register: function(email, password, confirm) {
      console.log(email, password, confirm)
      if (email == '' || password == '') {
        this.error = 'Email & password required!'
      } else if (password === confirm && password !== '') {
        axios.post('http://localhost:3000/user/register', {
          email: email,
          password: password
        })
        .then(response => {
          this.success = 'Register success!'
          location.reload()
        })
        .catch(err => {
          console.log('Register failed', err)
        })
      } else {
        console.log('Your confirm password is not same!')
        this.error = 'Your confirm password is not same!'
      }
    },

    login: function(email, password) {
      console.log(email, password)
      axios.post('http://localhost:3000/user/login', {
        email: email,
        password: password
      })
      .then(response => {
        this.successLogin = 'Login success' 
        this.token = response.data.token
      })
      .catch(err => {
        this.errorLogin = 'Wrong email/password!'
      })
    }
  },

  watch: {
    checkEmail: function() {
      let re = /\S+@\S+\.\S+/;
      if(!re.test(email)) {
        this.error = 'Wrong email format'
      }
    }
  }
})