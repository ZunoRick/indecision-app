<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <hr />
  <MyCounter :value="5" />
  <CounterScript :value="8" />
  <CounterScript2 :value="2" />
</template>

<script lang="ts" setup>
import MyCounter from './components/Counter.vue';
import CounterScript from './components/CounterScript.vue';
import CounterScript2 from './components/my-counter-script/CounterScript2.vue';
</script>
