<template>
  <section class="section">
    <div class="container">
      <nav class="nav">
        <a href="" class="navbar__logo"><span>ass</span>.coder</a>

        <ul>
          <li>
            <a href="#header" class="item__link"
              ><font-awesome-icon
                class="icons"
                :icon="['fas', 'house']"
              />Home</a
            >
            <a href="#about" class="item__link"
              ><font-awesome-icon
                class="icons"
                :icon="['far', 'user']"
              />About</a
            >
            <a href="#projects" class="item__link"
              ><font-awesome-icon
                class="icons"
                :icon="['far', 'folder-open']"
              />Projects</a
            >
            <a href="#contacts" class="item__link"
              ><font-awesome-icon
                class="icons"
                :icon="['fas', 'address-card']"
              />Contact</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section {
  background: var(--nav_color);
  border-bottom: 2px solid var(--silver);

  .container {
    nav {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 15px;

      .navbar__logo {
        &:hover {
          cursor: pointer;
          transform: rotate(360deg);
        }
      }

      ul {
        li {
          a {
            font-size: 24px;
            padding: 10px;
            color: white;
            transition: 0.5s;

            &:hover {
              cursor: pointer;
              font-size: 28px;
            }
          }
          .icons {
            margin-right: 7px;
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
