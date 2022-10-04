<script>
import axios from 'axios';

export default {
    data () {
    return {
      cards: []
    }
  },
  mounted () {
     axios
      .get('http://localhost:8080/api/')
      .then(response => this.cards = response.data)
      .catch(e => console.log(e))
  }
}

</script>

<template>
  <div>
    <!-- <div>↓ここに値が表示される↓</div>
    <div>{{ this.$route.params.char }}</div>
    <div>
        <div>{{ info }}</div> -->
    <li v-for="card in cards" :key="card.id">
        <table>
            <td>{{ card }}</td>
        </table>
    </li>
  </div>
</template>

<style lang="scss" scoped>

</style>