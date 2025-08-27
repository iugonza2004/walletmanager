<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="HomePage" href="/tabs/homePage">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label> Inici </ion-label>
        </ion-tab-button>

        <ion-tab-button tab="CategoriesPage" href="/tabs/categoriesPage">
          <ion-icon aria-hidden="true" :icon="folder" />
          <ion-label> Categories </ion-label>
        </ion-tab-button>

        <ion-tab-button tab="StatsPage" href="/tabs/statsPage">
          <ion-icon aria-hidden="true" :icon="statsChart" />
          <ion-label> Estadístiques </ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { folder, statsChart, home } from 'ionicons/icons';
</script>
