<template>
  <div class="wrapper">
    <div class="nav">
      <div class="description">Fitlers:</div>
      <div class="input">
        <input
          type="text"
          v-model="search"
          placeholder="You can seach any movie here"
        />
      </div>
      <div class="checkbox">
        <p>Adult content</p>
        <input type="checkbox" v-model="adult" />
      </div>
    </div>

    <div class="container">
      <Card-item
        v-for="item of movies"
        :key="item.index"
        class="card-item"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import CardItem from "../components/CardItem.vue";

export default {
  components: {
    CardItem,
  },
  data: () => ({
    movies: [],
    search: "",
    adult: false,
  }),
  watch: {
    search() {
      if (this.search === "") {
        this.fetchData();
      } else this.searchMove();
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDRhNjcwMjM4MzcxMjRlOGQyZDExMDJiOTViZjAyZSIsInN1YiI6IjY1NGU0M2VkMjg2NmZhMTA4YjZkNjc2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i75HL2cf0Bs-R0Y0UMn5gdHdv7geYbMNtFQ38t70Dsg",
            },
          }
        )
        .then((respons) => (this.movies = respons.data.results))
        .then(() => console.log(this.movies))

        .catch((err) => console.error(err));
    },
    searchMove() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${this.search}&include_adult=${this.adult}&language=en-US&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDRhNjcwMjM4MzcxMjRlOGQyZDExMDJiOTViZjAyZSIsInN1YiI6IjY1NGU0M2VkMjg2NmZhMTA4YjZkNjc2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i75HL2cf0Bs-R0Y0UMn5gdHdv7geYbMNtFQ38t70Dsg",
            },
          }
        )
        .then((respons) => (this.movies = respons.data.results))
        .then(() => console.log(this.movies))

        .catch((err) => console.error(err));
    },
  },
};
</script>


<style scoped>
.wrapper {
  width: 100%;
  background-color: #c4c4c4;
}
.container {
  max-width: 1200px;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.card-item {
  margin: 20px;
}
.nav {
  height: 50px;
  background-color: #000;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.input {
  margin: 0 10px;
}

.input input {
  width: 200px;
  border-radius: 5%;
}

.description {
  color: #fff;
}
.checkbox {
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
}
</style>


