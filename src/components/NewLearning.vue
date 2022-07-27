<!--
We can create two-way bindings between state and form inputs using the v-model directive.
-->

<script setup>
import { ref } from 'vue'
const props = defineProps(['user_id'])

const { t } = useI18n()

const Id = ref(null)
const UserId = ref('62df5357460038529cd07141')
const ContentName = ref('')
const Category = ref('Programación')
const Description = ref('Aprendiendo de front para hacer el proyecto de Base de Datos')
const favicon = ref('http://www.google.com/s2/favicons?domain=https://vueschool.io')
const Link = ref('https://vueschool.io/courses?filter=premium-courses')
const Priority = ref('3')
const Difficulty = ref('3')
const EstimatedTime = ref('2 semanas')
const Completed = ref(false)
const Public = ref(true)
const Note = ref([])
</script>

<template>
  <div class="modal">
    <div
      class="modal-background"
      @click="hideNewLearning"
    >
      close x
    </div>
    <h4>crear</h4>

    <label class="" for="input_name"> Titulo</label>
    <input
      id="input_content_name"
      v-model="ContentName"
      :placeholder="t('form.title')"
      :aria-label="t('form.title')"
      type="text"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="#fafafa"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    >
  </div>
</template>
