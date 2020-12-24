<template>
  <form class="container">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <input v-model="myText" placeholder='Type here ...' class='input' />
    <button @click="click" class='add-button'>Add</button>
  </form>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      myText: ''
    }
  },
  methods: {
    click (event) {
      event.preventDefault()
      dispatchEvent(new CustomEvent('@jungle/todo/add', {
        detail: {
          text: this.myText
        }
      }))
      this.myText = ''
    }
  }
}
</script>


<style scoped>
.container {
  display: flex;
  background-color: #41b8836c;
  align-items: center;

  padding: 20px;
}
.logo {
  width: 50px;
  margin-right: 20px;
}

.input {
  margin-right: 10px;
  background-color: transparent;
  padding: 2px 5px 2px 0;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  width: 250px;
  font-size: 16px;
}

.add-button {
  border: 1px solid #34495E;
  background: #34495E;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  outline: none;
  cursor: pointer;
}
</style>
