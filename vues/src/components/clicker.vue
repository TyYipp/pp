<template>
  <div class="clicker-container">
    <div class="left-side">
      <p class="text">Kirbies: {{ click.toFixed(1) }}</p>
      <input type="image" class="clicky" src="https://cdn.wikirby.com/a/a0/KCC_Ball_Kirby_Artwork.png?20200706223746" @click="incrementClick">  
    </div>
    <div class="right-side">
      <UpgradesDisplay :buyUpgrade="buyUpgrade" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { click } from "@/stores/click";
import { store } from "@/stores/upgrades.js";
import UpgradesDisplay from "@/components/shop.vue";

export default {
  components: {
    UpgradesDisplay
  },
  setup() {
    const autoIncrement = ref(false);
    let intervalId = null;
    let autoClicksPerSecond = 0; 

    const incrementClick = () => {
      click.value++;
    };

    const autoclicks = () => {
      click.value += autoClicksPerSecond; 
    };

    const subtractClick = () => {
      if (click.value >= 5) {
        click.value -= 5;
      }
    };

    const startAuto = () => {
      intervalId = setInterval(autoclicks, 1000);
    };

    const stopAuto = () => {
      clearInterval(intervalId);
    };

    const toggleauto = () => {
      autoIncrement.value = !autoIncrement.value;
      if (autoIncrement.value) {
        startAuto();
      } else {
        stopAuto();
      }
    };

    const buyUpgrade = (index) => {
      const upgrade = store.upgrades[index];
      if (click.value >= upgrade.startingprice) {
        click.value -= upgrade.startingprice;
        autoClicksPerSecond += upgrade.clickvalue; 
        upgrade.startingprice += upgrade.priceincrement;
        startAuto(); 
      }
    };

    return { click, autoIncrement, incrementClick, toggleauto, subtractClick, store, buyUpgrade };
  }
};
</script>

<style scoped>
.clicker-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
}

.left-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%; 
  text-align: center;
}

.right-side {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%; 
  text-align: center;
  margin-top: 20.1px; 
}
  
.text {
  color: #FF6CE7;
  font-size: 50px; 
}

.clicky {
  height: 400px; 
  width: 400px; 
}
</style>