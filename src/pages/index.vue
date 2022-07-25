<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)
const password = $ref(user.password)
// const login = user.login(name, password)

const router = useRouter()
const go = async () => {
  user.login(name, password)
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Learnings Organizer
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <input
      id="input_name"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <label class="hidden" for="input_name">{{ t('intro.whats-your-name') }}</label>
    <input
      id="input_pass"
      v-model="password"
      :placeholder="t('intro.pass')"
      :aria-label="t('intro.pass')"
      type="password"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <label class="hidden" for="input_pass">{{ t('intro.pass') }}</label>

    <div>
      <button
        btn m-3 text-sm
        :disabled="!name || !password"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<style>
  #input_name, #input_pass {
    margin: 1rem;
    padding: 1em;
  }
</style>

<route lang="yaml">
meta:
  layout: home
</route>
