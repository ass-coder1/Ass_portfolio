<script setup></script>

<template>
  <section id="contacts">
    <div class="container">
      <h2 class="title">Contacts</h2>

      <div class="contacts">
        <a href="https://www.instagram.com/ass_coder/">
          <font-awesome-icon
            class="icons icon__i"
            :icon="['fab', 'instagram']"
          /><span>Instagram</span>
        </a>
        <a href="https://t.me/Akbarovic_oo7"
          ><font-awesome-icon
            class="icons icon__t"
            :icon="['fab', 'telegram']"
          /><span>Telegram</span>
        </a>
        <a href="https://github.com/ass-coder1"
          ><font-awesome-icon
            class="icons icon__g"
            :icon="['fab', 'github']"
          /><span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/ass-coder-baxtiyarov-28692a281/"
          ><font-awesome-icon
            class="icons icon__l"
            :icon="['fab', 'linkedin']"
          /><span>linkedIn</span>
        </a>
        <a href="https://stackoverflow.com/users/21182286/ass-coder"
          ><font-awesome-icon
            class="icons icon__s"
            :icon="['fab', 'stack-overflow']"
          /><span>Stackoverflow</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#contacts {
    background-color: var(--nav_color);
  .container {
    padding-bottom: 30px;
    .contacts {
      display: flex;
      justify-content: space-between;

      a {
        text-align: center;
        font-size: 50px;
        color: var(--silver);
        &:hover {
          color: var(--white);
        }

        .icons {
          border: 2px solid var(--silver);
          border-radius: 50%;
          padding: 15px;
          margin-bottom: -5%;
          &:hover {
            color: var(--white);
          }
        }
        .icon__i {
          transition: 2s;

          &:hover {
            background: radial-gradient(
              circle at 30% 107%,
              #fdf497 5%,
              #fd5949 45%,
              #d6248f 60%,
              #285aeb 90%
            );
          }
        }
        .icon__t {
          &:hover {
            background: #0088cc;
          }
        }
        .icon__g {
          &:hover {
            background: #000;
          }
        }
        .icon__l {
          &:hover {
            background: #0a66c2;
          }
        }
        .icon__s {
          &:hover {
            background: radial-gradient(
              circle at 30% 107%,
              #285aeb 5%,
              #fd5949 45%,
              #d6248f 60%,
              #fdf497 90%
            );
          }
        }
      }
      span {
        display: flex;
        justify-content: center;
        font-size: 30px;
      }
    }
  }
}
</style>
