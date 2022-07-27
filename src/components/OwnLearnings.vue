<!--
This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list.
You can switch between the two branches.
-->

<script setup>
import { ref, watchEffect } from 'vue'
// const user = useUserStore()
// const nuevouserid = ref(user.user_id)
const props = defineProps(['user_id'])

// console.log(props.idUsuario)

// watchEffect(() => {
//   const nuevouserid = user.token
// })
// console.log(`id id id ${nuevouserid.value}`)
const url_local = `https://localhost:7032/api/learnings/user/${props.user_id}`
const API_URL = `https://learningsapi.azurewebsites.net/api/learnings/user/${props.user_id}`
const ownLearnings = ref(null)
// const branches = ['main', 'v2-compat']

// const currentBranch = ref(branches[0])
// const commits = ref(null)
const newLearningvisible = ref(false)

const showNewLearning = async () => {
  newLearningvisible.value = true
}
const hideNewLearning = async () => {
  newLearningvisible.value = false
}
const newNote = ref(false)

const showNote = async () => {
  newNote.value = true
}
const hideNote = async () => {
  newNote.value = false
}
watchEffect(async () => {
  // this effect will run immediately and then
  // re-run whenever currentBranch.value changes
  const url = API_URL
  ownLearnings.value = await (await fetch(url)).json()
  const newLearning = await (await fetch(url_local)).json()
  ownLearnings.value.push(newLearning)
  // console.log(ownLearnings.value)
  deleteLearning(newLearning.id)
})
</script>

<template>
  <h1>Mis Learnings</h1>
  <div @click="hideNewLearning">
    <NewLearning v-if="newLearningvisible" id="modal" class="modal" :user_id="props.user_id" />
  </div>
  <div>
    <div class="card btn">
      <button
        @click="showNewLearning"
      >
        + Nuevo Contenido
      </button>
    </div>
  </div>
  <div v-for="learning in ownLearnings" :key="learning.Id" class="card">
    <p id="name">
      <a :href="learning.Link" target="_blank">
        {{ learning.ContentName }}
      </a>
    </p>
    <p id="category">
      <span class="label">
        Categoria
      </span>
      {{ learning.Category }}
    </p>
    <img height="32" width="32" :src="learning.favicon">
    <p>
      <span class="label">
        Descripción
      </span>
      {{ learning.Description }}
    </p>
    <p v-if="(learning.Note)">
      <span>
        Apuntes = {{ learning.Note.length }}
      </span>
    </p>
    <p v-else>
      sin notas
    </p>
    <button v-if="!newNote" class="btn" @click="showNote">
      agregar apuntes
    </button>
    <div v-if="newNote">
      <input id="input" class="input">
      <button class="btn" @click="hideNote">
        agregar
      </button>
    </div>
    <label for="completed">
      <input v-model="learning.Completed" type="checkbox">
      Completado
    </label>
    <button @click="deleteLearning(learning.Id)">
      Eliminar
    </button>
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
  width: 30%;
  height: 100%;
  background-color: #0f0f0f;
  border-radius: 10px;
  padding: 20px;
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
#modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-color: #a1d1d1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
#input {
  margin-right: 1em;
  color: rgb(20, 20, 20);
}
</style>
