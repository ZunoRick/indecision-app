<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';
// import { computed, ref } from 'vue';

interface Props {
  value?: number;
}

const props = defineProps({
  value: { type: Number, required: true },
});

const { counter, squareCounter } = useCounter(props.value);

// const props = defineProps<Props>();

// const counter = ref(props.value ?? 2);

// const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
@reference "../styles.css";
.btn {
  @apply p-5 mr-2 text-zinc-50 bg-blue-500 rounded hover:bg-blue-600;
}
</style>
