<!--
We can create two-way bindings between state and form inputs using the v-model directive.
-->

<script setup>
import { ref } from 'vue'

const text = ref('Edit me')
const checked = ref(true)
const checkedNames = ref(['Jack'])
const picked = ref('One')
const selected = ref('A')
const multiSelected = ref(['A'])
</script>

<template>
  <h2>Text Input</h2>
  <input v-model="text"> {{ text }}

  <h2>Checkbox</h2>
  <input id="checkbox" v-model="checked" type="checkbox">
  <label for="checkbox">Checked: {{ checked }}</label>

  <!--
    multiple checkboxes can bind to the same
    array v-model value
  -->
  <h2>Multi Checkbox</h2>
  <input id="jack" v-model="checkedNames" type="checkbox" value="Jack">
  <label for="jack">Jack</label>
  <input id="john" v-model="checkedNames" type="checkbox" value="John">
  <label for="john">John</label>
  <input id="mike" v-model="checkedNames" type="checkbox" value="Mike">
  <label for="mike">Mike</label>
  <p>Checked names: <pre>{{ checkedNames }}</pre></p>

  <h2>Radio</h2>
  <input id="one" v-model="picked" type="radio" value="One">
  <label for="one">One</label>
  <br>
  <input id="two" v-model="picked" type="radio" value="Two">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>

  <h2>Select</h2>
  <select v-model="selected">
    <option disabled value="">
      Please select one
    </option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>

  <h2>Multi Select</h2>
  <select v-model="multiSelected" multiple style="width:100px">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ multiSelected }}</span>
</template>
