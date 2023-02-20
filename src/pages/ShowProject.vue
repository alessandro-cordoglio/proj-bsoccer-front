<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "ShowProject",
  data() {
    return {
      store,
      project: {},
      formData: {
        name: "",
        content: "",
      },
    };
  },
  created() {
    this.getProject();

    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.getProject();
      }
    );
  },
  methods: {
    getProject() {
      axios
        .get(`${this.store.api_url}/api/projects/${this.$route.params.slug}`)
        .then((resp) => {
          this.project = resp.data;
        })
        .catch((err) => {
          this.$router.push({ name: "page-404" });
        });
    },
    addComment() {
      axios
        .post(`${this.store.api_url}/api/comments/${this.project.id}`, {
          name: this.formData.name,
          content: this.formData.content,
        })
        .then((res) => {
          console.log(res);
          // this.project.comments.push(res.data);
        })
        .catch((err) => {});
    },
  },
};
</script>

<template>
  <section class="single-project container">
    <div>
      <h2 class="project-title">Progetto: {{ project.title }}</h2>
      <div class="card">
        <div class="img">
          <img :src="project.image_url" :alt="project.title" />
          <div class="filter"></div>
          <div class="technology">
            <span class="badge" v-for="technology in project.technologies">{{
              technology.name
            }}</span>
          </div>
        </div>
        <div class="card-bottom">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="description">{{ project.description }}</p>
          <div v-if="project.type" class="typology">
            <h4>Tipologia:</h4>
            <div>{{ project.type.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section v-if="project.comments?.length > 0" class="comments">
    <h2>Commenti:</h2>
    <div v-for="comment in project.comments" class="comment">
      <div class="user-img">
        <img
          src="https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"
          alt="user-img"
        />
      </div>
      <div class="comment-details">
        <h4 v-if="comment.name">{{ comment.name }}</h4>
        <h4 v-else>Unknown</h4>
        <p>{{ comment.content }}</p>
      </div>
    </div>
  </section>
  <section class="comments">
    <h2>Aggiungi Commento:</h2>
    <form @submit.prevent="addComment()">
      <div>
        <label for="name">Nome:</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          placeholder="Inserisci nome"
        />
      </div>
      <div>
        <label for="content">Contenuto:</label>
        <textarea
          type="text"
          id="name"
          rows="10"
          placeholder="Inserisci contenuto"
          v-model="formData.content"
          required
        ></textarea>
        <button>Inserisci commento</button>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.single-project {
  padding: 3.125rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    .project-title {
      margin-bottom: 0.625rem;
    }
  }
}
.card {
  position: relative;
  max-width: 18.75rem;
  border: 0.0625rem solid lightgrey;
  border-radius: 0.625rem 0.625rem 0 0;
  cursor: pointer;
  background-color: #f3f3f3;
  &:hover img {
    transform: scale(1.1);
  }
  .technology {
    position: absolute;
    top: 0.1875rem;
    right: 0.1875rem;
    .badge {
      padding: 0.3125rem;
      margin: 0 0.1875rem;
      color: red;
      background-color: rgba(84, 91, 230, 0.723);
      border-radius: 0.3125rem;
      transition: background-color 0.3s;
      &:hover {
        background-color: rgba(0, 255, 255, 0.723);
      }
    }
  }
  .card-bottom {
    padding: 0.625rem 0.9375rem;
    & > * {
      margin-bottom: 0.3125rem;
    }
  }
  .card-title {
    text-align: center;
  }
  .description {
    padding: 0.3125rem 0;
  }
  .img {
    position: relative;
    border-radius: 0.625rem 0.625rem 0 0;
    overflow: hidden;
    height: 12.5rem;
    img {
      transition: transform 0.5s;
    }
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.096);
      transition: background-color 0.5s;
      &:hover {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
  .typology {
    text-align: center;
  }
}
.comments {
  max-width: 56.25rem;
  margin: auto;
  padding-bottom: 3.125rem;
}
.comment {
  display: flex;
  align-items: center;
  margin-top: 1.25rem;
  .user-img {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
    margin-right: 0.9375rem;
    overflow: hidden;
    border-radius: 50%;
    background-color: white;
  }
}
</style>
