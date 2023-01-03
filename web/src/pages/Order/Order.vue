<script setup lang="ts">
import { ref } from 'vue';
import OrderCard from '../../components/OrderCard/OrderCard.vue';
import { IOrder } from '../../interfaces/IOrder';

import './styles.css';

const data = ref(null as IOrder[] | null)
const error = ref(null)

fetch('http://localhost:3001/orders')
  .then(response => response.json())
  .then(json => (data.value = json))
  .catch(err => (error.value = err))

</script>

<template>
  <div class="container">
    <header class="header"></header>

    <main class="main">
      <div class="title">
        <img src="../../assets/iconHandDarkBlue.svg" alt="icone de uma mão">
        <h2>Notas fiscais</h2>
      </div>

      <span>Visualize as notas fiscais que você tem.</span>

      <div class="orders-container">
        <div v-if="error" class="error">Não foi possivel buscar as notas!</div>
        <table v-else-if="data" class="table">
          <thead>
            <tr class="thead-tr">
              <th data-testid="test-id-thead-nota-fiscal">NOTA FISCAL</th>
              <th data-testid="test-id-thead-buyer">SACADO</th>
              <th data-testid="test-id-thead-provider">CEDENTE</th>
              <th data-testid="test-id-thead-created">EMISSÃO</th>
              <th data-testid="test-id-thead-value">VALOR</th>
              <th data-testid="test-id-thead-status">STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="tbody">
            <OrderCard
              v-for="order in data"
              :key="order.orderNfId"
              :orderNfId="order.orderNfId"
              :createdAt="order.createdAt"
              :buyer="order.buyer"
              :provider="order.provider"
              :value="order.value"
              :orderStatusBuyer="order.orderStatusBuyer"
            />
          </tbody>
        </table>
        <div v-else class="loading">Carregando...</div>
      </div>
    </main>
  </div>
</template>
