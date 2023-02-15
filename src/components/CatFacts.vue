<template>
  <div class="container">
    <ul class="list">
      <template v-for="fact in facts">
        <li v-if="fact.length < characterLimit" class="list-item">{{ fact }}</li>
      </template>
    </ul>
    <div class="form">
      <input type="text" v-model="newFact" class="input"/>
      <button v-on:click="addFact" class="button">Add Fact</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['limit', 'characterLimit'],
  data() {
    return {
      facts: [],
      newFact: ''
    };
  },
  async created() {
    try {
      const response = await fetch(`https://catfact.ninja/facts?limit=${this.limit}`);
      const data = await response.json();
      this.facts = data.data.map(fact => fact.fact);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    addFact() {
      this.facts.push(this.newFact);
      this.newFact = '';
    }
  }
};
</script>

<style lang="scss">
.container {
  width: 50%;
  margin: 0 auto;
  padding: 20px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  font-size: 18px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: lightgray;
}

.form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}

.input {
  width: 60%;
  padding: 10px;
  font-size: 18px;
}

.button {
  width: 30%;
  padding: 10px;
  font-size: 18px;
  background-color: lightgray;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.button:hover {
  background-color: gray;
}
</style>
