<template>
  <ion-page>
    <!-- Header -->
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Categories</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenido principal -->
    <ion-content class="ion-padding">

      <!-- Acciones -->
      <div class="actions-row">
        <div class="action-button ion-activatable ripple-parent" @click="openModal">
          <ion-icon :icon="icons.add" />
          <ion-ripple-effect></ion-ripple-effect>
        </div>
        <div class="action-button ion-activatable ripple-parent" @click="editCategory">
          <ion-icon :icon="icons.createOutline" />
          <ion-ripple-effect></ion-ripple-effect>
        </div>
        <div class="action-button ion-activatable ripple-parent" @click="deleteCategory">
          <ion-icon :icon="icons.trash" />
          <ion-ripple-effect></ion-ripple-effect>
        </div>
      </div>

      <div class="actions-row-description">
        <div class="action-button-desc"><p>Afegir</p></div>
        <div class="action-button-desc"><p>Editar</p></div>
        <div class="action-button-desc"><p>Eliminar</p></div>
      </div>

      <!-- Grid de categorías -->
      <div class="categories-grid">
        <div
            v-for="cat in categories"
            :key="cat.id"
            class="category-card ion-activatable ripple-parent"
        >
          <ion-label class="categories-label">
            <h3>{{ cat.name }}</h3>
            <p>{{ cat.incomePercentage }}% ({{ cat.incomePercentage }}€)</p>
          </ion-label>
          <ion-ripple-effect></ion-ripple-effect>
        </div>
      </div>

      <div class="floating-button right ion-activatable ripple-parent" @click="rightAction">
        <ion-icon :icon="icons.calculator" />
        <ion-ripple-effect></ion-ripple-effect>
      </div>

      <ion-modal :is-open="showModal" @did-dismiss="closeModal">
        <ion-header>
          <ion-toolbar>
            <ion-title>Nova categoria</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="closeModal">Tancar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-item>
            <ion-label position="stacked">Nom de la categoria</ion-label>
            <ion-input v-model="newCategoryName" placeholder="Ex. Estalvis"></ion-input>
          </ion-item>

          <ion-button expand="block" color="primary" @click="confirmCreateCategory">
            Crear
          </ion-button>
        </ion-content>
      </ion-modal>

    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonButton, IonIcon, IonInput, IonRippleEffect
} from "@ionic/vue";
import { add, createOutline, trash, calculator } from "ionicons/icons";
import createCategory, {getCategories} from "@/services/CategoryService";
import {getStore} from "@/store/Store";
import {Category} from "@/models/Category";

export default defineComponent({
  name: "CategoriesPage",
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonLabel, IonButton, IonIcon, IonInput, IonRippleEffect
  },
  data() {
    return {
      icons: { add, createOutline, trash, calculator },
      categories: [] as Category[],
      showModal: false,
      newCategoryName: ""
    };
  },

  beforeMount() {
    this.categories = getCategories();
  },

  methods: {
    openModal() {
      this.newCategoryName = "";
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },

    confirmCreateCategory() {
      if (!this.newCategoryName.trim()) return;

      const newCat = createCategory(this.newCategoryName.trim());

      this.categories.push(newCat);

      this.closeModal();
    },

    editCategory() { console.log("Editar categoria"); },
    deleteCategory() { console.log("Eliminar categoria"); },
  }
});
</script>


<style scoped>
.actions-row, .actions-row-description {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.actions-row-description {
  margin-top: 0;
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
  font-size: 30px;
  color: #ffffff;
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
}

.action-button-desc p {
  margin: 0;
  font-size: 12px;
  color: #ffffff;
}

/* Grid de categorías */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columnas */
  gap: 12px;
  margin: 15px 0;
}

.category-card {
  border-radius: 12px;
  background: var(--ion-item-background, #1e1e1e);
  padding: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
}

.category-card h3 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}

.category-card p {
  margin: 5px 0 0;
  font-size: 14px;
  opacity: 0.8;
}

.floating-button {
  position: fixed;
  bottom: 20px;
  width: 60px;
  height: 60px;
  background: rgba(85, 85, 85, 0.35);
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  z-index: 100;
  overflow: hidden;
}

.floating-button.right {
  right: 20px;
}

</style>
