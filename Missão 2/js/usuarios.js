const app = new Vue({
    el: '#usuarios',
    data() {
      return {
        users: []
      }
    },
    mounted() {
      this.loadUsers();
    },
    methods: {
      loadUsers() {
        fetch('https://reqres.in/api/users?per_page=10')
          .then(response => response.json())
          .then(data => {
            this.users = data.data;
          })
          .catch(error => {
            console.error('Erro ao carregar os usuários:', error);
          });
      }
    }
});