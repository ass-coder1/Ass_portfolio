<script setup></script>

<template>
  <section id="about">
    <h2 class="title">About me</h2>
    <div class="container">
      <img src="../image/myphoto.jpg" alt="" />

      <p class="about">
        My name's Asror Baxtiyorov.I'am 20 year's old and I was bor in Khiva.
        I'm junior front end developer.I completed front end courses in IT park
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#about {
  background: var(--bg-color);
  margin: 20vh 0 20vh;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 700px;
    img {
      margin-top: 50px;
      max-width: 400px;
      width: 100%;
      height: 600px;
      border-radius: 10px;
      transition: 0.5s;
      &:hover {
        box-shadow: 10px 3px 20px rgba(7, 195, 228, 0.605);
      }
    }

    .about {
      width: 500px;
      height: 320px;
      padding: 20px;
      color: var(--white);
      text-align: center;
      font-size: 30px;
      font-family: var(--Snippet);
      letter-spacing: 5px;
      line-height: 40px;
      transition: 0.8s;
      &:hover {
        box-shadow: 10px 10px 10px rgba(7, 195, 228, 0.605);
        cursor:  default;
      }
    }
  }
}
</style>
