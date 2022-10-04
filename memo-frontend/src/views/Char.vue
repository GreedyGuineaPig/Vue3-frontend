<script>
import axios from 'axios';

export default {
    data () {
    return {
      allpPosts: [],
      filteredPosts: [],
      char: "",
      anti: false,
    }
  },

  mounted () {
     axios
      .get('http://localhost:8080/api/all')
      .then(response => this.allPosts = this.filteredPosts = response.data)
      .catch(e => console.log(e))
  },

  methods: {
    filter() {
      this.filteredPosts = [];
      this.allPosts.forEach(post => {
        console.log(this.char)
        console.log(post.char)
        console.log(this.anti)
        console.log(post.anti)
        console.log()
        if ((this.char == "all" || post.char == this.char) && post.anti == this.anti) {
          this.filteredPosts.push(post)
        }       
      });
    }
  }
}

</script>

<template>
  <div>
    <div class="query">
      <div class="selection">
        <select v-model="char">
          <option value="all">All</option>
          <option value="SO">Sol</option>
          <option value="KY">Ky</option>
          <option value="MA">May</option>
          <option value="IN">Ino</option>
          <option value="AN">Anji</option>
          <option value="MI">Millia</option>
          <option value="ZA">Zato</option>
          <option value="PO">Potemkin</option>
          <option value="RA">Ramlethal</option>
          <option value="AX">Axl</option>
          <option value="FA">Faust</option>
          <option value="NA">Nagoriyuki</option>
          <option value="LE">Leo</option>
          <option value="GI">Giovanna</option>
          <option value="GO">Goldlewis</option>
          <option value="JA">Jack-O</option>
          <option value="BA">Baiken</option>
          <option value="HA">Happy Chaos</option>
          <option value="TE">Testament</option>
          <option value="BR">Bridget</option>
        </select>
      </div>
      <div class="anti-check">
        <label for="checkbox">anti</label>
        <input type="checkbox" id="checkbox" v-model="anti" />
      </div>
      <button @click="filter" class="button">search</button>
    </div>
    <div class="table">
      <li v-for="post in filteredPosts" :key="post.id">
          <table>
              <td>{{ post.id }} - {{  post.version }} - {{  post.char }} - {{  post.anti }}</td>
              <td>{{  post.body }}</td>
          </table>
      </li>
    </div>
  </div>
</template>

<style lang="scss" scoped>
*{
  padding-left: 1rem;
}
.query {
  display: flex;
  padding-top: 1rem;

  .button {
    color: var(--light);
    background-color: var(--dark);
    width: auto;
  }
  .button:hover{
    color: var(--light);
    background: var(--dark);
  }
}
</style>