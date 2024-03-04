<template>
  <div class="upgrade-container">
    <div class="upgrade-item" v-for="(upgrade, index) in store.upgrades" :key="index">
      <div class="upgrade-card">
        <div class="upgrade-info">
          <p id="text">{{ upgrade.name }}</p>
          <p class="text">Price: {{ upgrade.startingprice }}</p>
          <p class="text">Value: {{ upgrade.clickvalue }}</p>
          <button class="btn"
                  @click="buyUpgrade(index)"
                  :style="{ backgroundColor: canAfford(upgrade) ? '#AA336A' : 'plum' }"
                  :disabled="click < upgrade.startingprice">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { click } from "@/stores/click";
import { store } from "@/stores/upgrades.js";

export default {
  props: {
    buyUpgrade: Function
  },
  setup() {
    return { click, store };
  },
  methods: {
    canAfford(upgrade) {
      return click.value >= upgrade.startingprice;
    }
  }
};
</script>

<style scoped>
.upgrade-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 100px;
}

.upgrade-item {
  margin: 10px;
}

.upgrade-card {
  border: 5px solid plum; 
  padding: 10px; 
}

.upgrade-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upgrade-info p {
  margin: 1.1px 0;
}

.btn {
  height: 25px;
  width: 500px;
  color: #FF6EC7; 
  border: none; 
  cursor: pointer; 
}

.text {
  color: #FF6EC7;
  font-weight: bold;
}

#text {
  color: #FF6EC7;
  font-weight: bold;
  text-decoration: underline;
  font-size: medium;
}
</style>
