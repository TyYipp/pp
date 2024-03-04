<script setup>
import clicker from '../components/clicker.vue'
</script>

<template>
  <main>
    <div class="box">
    <h1 class="Text">Kirby Clicker</h1>
      <clicker />
    </div>
    
  </main>
</template>

<style>
.Text {
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
  color: #FF6EC7;
  font-size: 70px;

  margin-bottom: 20px;
}
.box {
  border: 5px solid #C154C1; 
    padding: 110px; 
}
</style>