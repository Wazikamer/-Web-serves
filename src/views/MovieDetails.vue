<template>
  <div class="wrapper">
    <div class="container">
      <button @click="back" class="back">back</button>
      <div class="details">
        <div class="details-card">
          <div v-if="post.poster_path" class="img">
            <img
              :src="'https://image.tmdb.org/t/p/w500' + post.poster_path"
              alt="title_img"
            />
          </div>

          <div class="title">
            <h1>{{ post.title }}</h1>
          </div>
          <div v-if="post.tagline" class="tagline">
            <h3>"{{ post.tagline }}"</h3>
          </div>
          <div v-if="post.genres" class="genres">
            <div class="genres-title">
              <p><strong>Genres: </strong></p>
            </div>
            <div
              class="genres-item"
              v-for="genre of post.genres"
              :key="genre.id"
            >
              {{ genre.name }}
            </div>
          </div>
          <div class="runtime">
            <p v-if="post.release_date">
              <strong>Release data:</strong> {{ post.release_date }}
            </p>
            <p v-if="post.runtime">
              <strong>Runtime:</strong> {{ post.runtime }} minutes
            </p>
            <p v-if="post.vote_average">
              <strong>Vote:</strong> {{ post.vote_average }}
            </p>
            <p v-if="post.vote_count">
              <strong>All of votes:</strong> {{ post.vote_count }}
            </p>
          </div>
          <p>
            <strong>Original language:</strong> {{ post.original_language }}
          </p>
          <div v-if="post.production_companies" class="production_companies">
            <div class="production_companies-title">
              <p><strong>Production companies: </strong></p>
            </div>
            <div
              class="production_companies-item"
              v-for="company of post.production_companies"
              :key="company.id"
            >
              {{ company.name }}
            </div>
          </div>
          <div class="overview">
            <p><strong>Overview:</strong> {{ post.overview }}</p>
          </div>

          <p><strong>Original title:</strong> {{ post.original_title }}</p>
          <p><strong>Status:</strong> {{ post.status }}</p>
        </div>
      </div>
      <div v-if="post.backdrop_path" class="wrapper-bg-img">
        <img
          :src="'https://image.tmdb.org/t/p/original' + post.backdrop_path"
          alt="backdrop_img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    post: null,
  }),
  mounted() {
    console.log(this.$route.params.id);
    this.fetchData();
  },
  methods: {
    back() {
      this.$router.push({ name: "movies-list" });
    },
    fetchData() {
      axios
        .get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}`, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDRhNjcwMjM4MzcxMjRlOGQyZDExMDJiOTViZjAyZSIsInN1YiI6IjY1NGU0M2VkMjg2NmZhMTA4YjZkNjc2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i75HL2cf0Bs-R0Y0UMn5gdHdv7geYbMNtFQ38t70Dsg",
          },
        })

        .then((respons) => (this.post = respons.data))
        .then(() => console.log(this.post))
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style scoped>
.wrapper {
  background-color: #c4c4c4;
}
.wrapper-bg-img {
  object-fit: contain;
}
.wrapper-bg-img img {
  width: 100%;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  position: relative;
}
.back {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 20px;
  border-radius: 7%;
  background-color: #7d7c7ce0;
  color: #fff;
  text-transform: uppercase;
}

.details-card {
  max-width: 1000px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Nunito Sans", sans-serif;
  margin-top: 20px;
}
.title {
  text-transform: uppercase;
  text-align: center;
}
.tagline {
  font-size: 700;
  text-transform: uppercase;
}
.genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.genres-item {
  background-color: #7d7c7ce0;
  border-color: black;
  color: #fff;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 10px;
  margin: 0 5px;
  border-radius: 3%;
}
.runtime {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.production_companies {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.production_companies-item {
  background-color: #7d7c7ce0;
  border-color: black;
  color: #fff;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 10px;
  margin: 0 5px;
  border-radius: 3%;
}

@media screen and (max-width: 1100px) {
  .details {
    padding: 30px 40px;
  }
}
@media screen and (max-width: 600px) {
  .container {
    max-width: 100%;
  }
  .img {
    object-fit: contain;
  }
  .img img {
    width: 100%;
  }
  .genres {
    flex-direction: column;
  }
  .genres-item {
    margin: 5px 0;
  }
  .production_companies {
    flex-direction: column;
  }
  .production_companies-item {
    margin: 5px 0;
  }
}
</style>