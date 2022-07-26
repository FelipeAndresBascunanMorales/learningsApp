<!--
This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list.
You can switch between the two branches.
-->

<script setup>
import { ref, watchEffect } from 'vue'

const API_URL = 'https://learningsapi.azurewebsites.net/api/learnings'
const local = 'https://localhost:7032/api/learnings'

const learnings = ref(null)
// const branches = ['main', 'v2-compat']

// const currentBranch = ref(branches[0])
// const commits = ref(null)

watchEffect(async () => {
  // this effect will run immediately and then
  // re-run whenever currentBranch.value changes
  const url = API_URL
  learnings.value = await (await fetch(url)).json()
})
</script>

<template>
  <h1>learnings de otros estudiantes</h1>
  <div id="container-card">
    <div v-for="learning in learnings" :key="learning.Id" class="card">
      <p id="name">
        <a :href="learning.Link" target="_blank">
          {{ learning.ContentName }}
        </a>
      </p>
      <p id="category">
        <span>
          Categoria
        </span>
        {{ learning.Category }}
      </p>
      <img height="16" width="16" :src="learning.favicon">
      <p>
        <span>
          Descripción
        </span>
        {{ learning.Description }}
      </p>
      <p v-if="(learning.Note)">
        <span>
          Notas
        </span>
        {{ learning.Note.length }}
      </p>
      <p v-else>
        <span>
          Notas
        </span>
        sin notas
      </p>
    </div>
  </div>
</template>

<style>
.card {
  color: aliceblue;
  border-color: aliceblue;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 300px;
  background-color: #0f0f0f;
  border-radius: 10px;
  padding: 20px;
  margin: 1em;
}
.card p {
  margin: 0;
}
.card p:first-child {
  font-size: 1.5em;
  font-weight: bold;
}
.card p:nth-child(2) {
  font-size: 1em;
}
.card p:nth-child(3) {
  font-size: 0.8em;
}
span{
  font-weight: 600;
  font-style: italic;
}
img{
  margin: 1em;
}
#container-card{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
