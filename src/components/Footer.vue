<template>
  <section class="footer__section">
    <div class="container">
      <div class="footer">
        <a href="#!" class="navbar__logo"><span>ass</span>.coder</a>
        <a href="tel:+998948642124" class="number"
          ><font-awesome-icon class="icon" :icon="['fas', 'phone']" /> call</a
        >
      </div>
    </div>
    <p>&copy;ass.coder</p>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer__section {
    background: var(--nav_color);
  .container {
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 40px;

      a {
        margin: 40px 40px 30px;
      }

      .number {
        color: var(--silver);
        font-size: 1.5rem;
        

        .icon{
          transition: 1s;
          padding: 0 5px;
          &:hover{
            
            transform: rotate(360deg);
            color: var(--white);
            font-family: var(--Snippet);

          }

        }
      }
    }
  }
  p {
    color: var(--silver);
    font-size: 20px;
    text-align: center;
    padding: 5px 0;
  }
}
</style>
