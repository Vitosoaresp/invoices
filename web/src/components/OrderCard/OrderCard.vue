<script setup lang="ts">
  import './styles.css';

  defineProps<{
    orderNfId: string;
    createdAt: string;
    buyer: {
      name: string;
    };
    provider: {
      name: string;
    };
    value: string;
    orderStatusBuyer: string;
  }>()

  const orderStatusList = [
    'Pendente de confirmação',
    'Pedido confirmado',
    'Não reconhece o pedido',
    'Mercadoria não recebida',
    'Recebida com avaria',
    'Devolvida',
    'Recebida com devolução parcial',
    'Recebida e confirmada',
    'Pagamento Autorizado',
  ]
</script>

<template>
  <tr class="tbody-tr">
    <th class="tbody-th">{{ orderNfId }}</th>
    <th class="tbody-th">{{ buyer.name }}</th>
    <th class="tbody-th">{{ provider.name }}</th>
    <th class="tbody-th">{{ new Date(createdAt).toLocaleDateString() }}</th>
    <th class="th-value tbody-th">{{ Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</th>
    <th class="th-status tbody-th">{{ orderStatusList[Number(orderStatusBuyer)] }}</th>
    <th class="tbody-th"><button class="btn-dataProvider">Dados do cedente</button></th>
  </tr>
</template>
