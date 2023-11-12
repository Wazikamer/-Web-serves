<template>
  <div v-if="item.poster_path" class="card">
    <div class="img">
      <router-link
        :to="{
          name: 'movies-details',
          params: {
            id: item.id,
          },
        }"
      >
        <img
          :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
          alt="img"
      /></router-link>
    </div>
    <div class="information">
      <div class="title">
        <p>
          <strong> {{ item.title }}</strong>
        </p>
      </div>
      <div class="original_language">
        <p><strong>Original language: </strong>{{ item.original_language }}</p>
      </div>

      <div class="release">
        <p><strong>Release date: </strong>{{ item.release_date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  methods: {},
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(216 212 217 / 44%);
  max-width: 350px;
  border-radius: 2%;
}
.img {
  max-width: 350px;
  object-fit: cover;
}
.img img {
  width: 100%;
}
.information {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  padding: 0 10px;
  font-family: "Nunito Sans", sans-serif;
  color: #000;
}
.title p {
  text-transform: uppercase;
  margin: 10px;
  font-size: 700;
  text-decoration: none;
  text-align: center;
}
.tagline {
  padding: 0 10px;
}
.tagline p {
  text-decoration: none;
}
.button {
  margin: 0 0 10px 0;
  padding: 5px 10px;
  width: 130px;
  background-color: #fff;
}
</style>