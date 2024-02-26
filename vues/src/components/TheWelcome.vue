<template>
  <div>
    <input type="image" class="clicky" src="https://th.bing.com/th/id/OIP.j7lHEJY-pa7tjUl5r9XxhQHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7" alt="kirbo"/>
    <button @click="incrementCount">Click</button>
    <p>Kirbies: {{ count }}</p>
  </div>
</template>

<script>

import { ref } from "vue";

export default {
  setup() {
    const clicks = ref(0);

    const incrementCount = () => {
      clicks.value++
    };

    return { clicks, incrementCount}
  },
};
</script>

<style scoped>

</style>