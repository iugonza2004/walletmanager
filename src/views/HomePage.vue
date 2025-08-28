<template>
  <ion-page>
    <!-- Header -->
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Inici</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenido principal -->
    <ion-content class="ion-padding">

      <!-- Saldo total -->
      <div class="balance-card">
        <p class="balance-label">Saldo</p>
        <h1 class="balance-amount">{{ balance }}€</h1>
      </div>

      <!-- Botones de acción circulares -->
      <div class="actions-row">
        <div class="action-button ion-activatable ripple-parent" @click="addTransaction">
          <ion-icon aria-hidden="true" :icon="icons.add" />
          <ion-ripple-effect></ion-ripple-effect>
        </div>
        <div class="action-button ion-activatable ripple-parent" @click="moveMoney">
          <ion-icon aria-hidden="true" :icon="icons.remove" />
          <ion-ripple-effect></ion-ripple-effect>
        </div>
        <div class="action-button ion-activatable ripple-parent" @click="showStats">
          <ion-icon aria-hidden="true" :icon="icons.shuffle" />
          <ion-ripple-effect></ion-ripple-effect>
        </div>
      </div>

      <div class="actions-row-description">
        <div class="action-button-desc" @click="addTransaction">
          <p>Afegir ingrés</p>
        </div>
        <div class="action-button-desc" @click="moveMoney">
          <p>Afegir despesa</p>
        </div>
        <div class="action-button-desc" @click="showStats">
          <p>Moure</p>
        </div>
      </div>

      <div class="categories">
        <ion-item v-for="tx in recentTransactions" :key="tx.id" class="transaction-item" lines="none">
          <ion-label class="categories-label">
            <h3>Roba d'esport</h3>
          </ion-label>
          <ion-note slot="end" :color="tx.type === 'income' ? 'success' : 'danger'">
            100€
          </ion-note>
        </ion-item>
      </div>



      <div class="transactions-section">
        <h2>Transaccions recents</h2>
        <ion-list style="background: none">
          <ion-item
              v-for="tx in recentTransactions.slice(0, 3)"
              :key="tx.id"
              class="transaction-item"
              lines="none"
          >
            <ion-label>
              <h3>{{ tx.description }}</h3>
              <p>{{ formatDate(tx.date) }} - {{ tx.category }}</p>
            </ion-label>
            <ion-note slot="end" :color="tx.type === 'income' ? 'success' : 'danger'">
              {{ tx.type === 'income' ? '+' : '-' }}{{ tx.amount }} €
            </ion-note>
          </ion-item>
        </ion-list>
        <ion-item button :detail="false"
            class="transaction-item"
            lines="none"
            style="text-align: center;"
        >
          <p style="margin: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    text-align: center;">
            Veure Totes</p>
        </ion-item>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { add, remove, shuffle, statsChart} from 'ionicons/icons';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  IonIcon
} from "@ionic/vue";

import { getStore, setStore} from "@/store/Store";

export default defineComponent({
  name: "HomePage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonIcon
  },
  data() {
    return {
      icons: {
        add: add,
        remove: remove,
        shuffle: shuffle,
        statsChart: statsChart
      },
      balance: 0,
      recentTransactions: [
        { id: 1, type: "income", amount: 200, description: "Sou", date: new Date(), category: "Ingressos" },
        { id: 2, type: "expense", amount: 50, description: "Menjar", date: new Date(), category: "Despeses" },
        { id: 4, type: "expense", amount: 30, description: "Transport", date: new Date(), category: "Despeses" },
        { id: 5, type: "expense", amount: 30, description: "Transport", date: new Date(), category: "Despeses" },
        { id: 6, type: "expense", amount: 30, description: "Transport", date: new Date(), category: "Despeses" },
        { id: 7, type: "expense", amount: 30, description: "Transport", date: new Date(), category: "Despeses" },
        { id: 8, type: "expense", amount: 30, description: "Transport", date: new Date(), category: "Despeses" },
      ]
    };
  },
  beforeMount() {
    this.balance = getStore('balance') || 0;
  },
  methods: {
    addTransaction() { console.log("Afegir transacció"); },
    moveMoney() { console.log("Moure diners"); },
    showStats() { console.log("Estadístiques"); },
    viewAllTransactions() { console.log("Veure totes"); },
    formatDate(date: Date): string { return date.toLocaleDateString("ca-ES"); }
  }
});
</script>

<style scoped>
/* Tarjeta de saldo tipo Revolut */
.balance-card {
  background: transparent;
  color: #fff;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  margin-bottom: 25px;
}

.balance-label {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 5px;
}

.balance-amount {
  font-size: 28px;
  font-weight: bold;
  margin-top: 0;
}

/* Botones de acción circulares */
.actions-row, .actions-row-description {
  display: flex;
  justify-content: space-around;
}

.action-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: rgba(85, 85, 85, 0.35);
  box-shadow: 0 0 10px 2px rgba(136,136,136,0.05);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.action-button-desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background-color: transparent;
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
  p {
    width: max-content;
    margin-top: 0;
  }
}

.action-button {
  font-size: 30px;
  color: #ffffff;
}

.action-button p {
  margin: 5px 0 0 0;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
}

.transactions-section h2 {
  font-weight: bold;
  margin-bottom: 10px;
}

.transaction-item {
  margin-bottom: 8px;
  border-radius: 12px;
  box-shadow: 0px 0px 2px 1px rgb(35 35 35 / 20%)
}

.categories {
  margin: 15px 0 10px 0;
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding-bottom: 10px;
  scroll-snap-type: x mandatory;
}

.categories::-webkit-scrollbar {
  display: none;
}

.categories .transaction-item {
  flex: 0 0 auto;
  min-width: 100px;
  border-radius: 12px;
  background: var(--ion-item-background, #1e1e1e);
}

.categories-label {
  width: fit-content;
}

</style>
