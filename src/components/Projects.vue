<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
};
</script>

<template>
  <section id="projects">
    <div class="container">
      <h2 class="title">Projects</h2>
      <carousel class="project__carousel" :items-to-show="3">
        <slide class="project__slide">
          <div class="card">
            <img src="../image/logo.svg" alt="" />
            <h2>Shopping</h2>
         <a  class="show__more" href="https://ass-coder-todo.netlify.app/">Show more</a>
          </div>
        </slide>
        <slide class="project__slide">
          <div class="card">
            <img src="../image/street.png" alt="" />
            <h2>Fast food</h2>
            <a class="show__more" href="https://burgers-88.netlify.app/">Show more</a>
          </div>
        </slide>

        <slide class="project__slide">
          <div class="card">
            <img src="../image/b5dd7fd6c85265db3ef2e4e0c965a8e1.png" alt="" />
            <h2>Todo list</h2>
            <a class="show__more" href="https://ass-coder-todo.netlify.app/">Show more</a>
          </div>
        </slide>
        <slide class="project__slide">
          <div class="card">
            <img src="../image/clock-01-19_32953_lg.gif" alt="" />
            <h2>Clock and secundamer</h2>
            <a class="show__more" href="https://ass-clock.netlify.app/#">Show more</a>
          </div>
        </slide>
      
        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#projects {
  background: var(--bg-color);
  .container {
    height: 500px;
    margin-bottom: 30vh;
    .project__carousel {
      .project__slide {
        .card {
          max-width: 280px;
          width: 100%;
          height: 350px;
          background: var(--nav_color);
          margin-bottom: 20px;
          border-radius: 10px;
          overflow: hidden;
          cursor: grab;

          &:hover .show__more {
            transform: translateY(-2em);
            opacity: 1;
            cursor: pointer;
          }

          &:hover img {
            border-radius: 50%;
            width: 100%;
            border: 2px solid #bda9a998;
          }
          img {
            max-width: 250px;
            width: 100%;
            height: 230px;
            transition: 1s;
            margin: 10px;
          }

          .show__more {
            color: rgb(5, 4, 84);
            border: none;
            text-align: center;
            font-size: 16px;
            font-weight: 400;
            border-radius: 5px;
            padding: 8px;
            position: absolute;
            left: 38%;
            bottom: -5%;
            opacity: 0;
            transition: 0.3s ease-out;
            background: var(--silver);
          }

          h2 {
            color: var(--silver);
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>
