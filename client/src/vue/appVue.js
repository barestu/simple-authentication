new Vue({
  el: '#app',
  data: {
    newEmail: '',
    newPassword: '',
    confirmPassword: '',
    email: '',
    password: '',
    token: ''
  },
  methods: {
    register: function(email, password) {
      console.log(email, password)
      axios.post('http://localhost:3000/user/register', {
        email: email,
        password: password
      })
      .then(response => {
        console.log('Register success', response.data)
      })
      .catch(err => {
        console.log('Register failed', err.message)
      })
    },

    login: function(email, password) {
      console.log(email, password)
      axios.post('http://localhost:3000/user/login', {
        email: email,
        password: password
      })
      .then(response => {
        console.log('Login success', response.data.token)
      })
      .catch(err => {
        console.log('Login failed')
      })
    }
  }
})