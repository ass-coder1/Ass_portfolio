<script>
</script>

<template>
  <section id="header">
    <div class="container">
      <div class="left_box">
     
        <div class="animated__txt">Hi! I'm <span class="multitext"></span></div>

        <p>Elegant and effecient codes</p>
      </div>
      <div class="right_box">
        <img src="../image/header.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#header {
  margin: 100px 0 15vh;
  background: rgba(7, 12, 79, 0.736);
  .container {
    padding: 40px 0;
    height: 700px;
    position: relative;

    .left_box {
      // display: flex;
      // flex-direction: column;
      // align-items: flex-start;
      
 

      .animated__txt {
        color: var(--white);
        font-size: 80px;
        font-weight: 600;
        font-family: var(--Snippet);
        min-width: 280px;
        padding-right: 100px;
        margin-top: 250px;
      }

      .multitext {
        position: relative;
        &::after {
          content: "Asror";
          color: var(--silver);
          text-transform: capitalize;
          animation: words 8s infinite ;
        }
        &::before {
          content: "";
          position: absolute;
          width: calc(100% );
          background-color:var(--bg-color);
          animation: typing 10s steps() infinite;
        }

      

        @keyframes words {
          0%,
          20% {
            content: "Asror";
            color: silver;
          }
          21%,
          40% {
            content: "</coder>";
            
          }
          41%,
          60% {
            content: "Junior";
            color: rgb(195, 139, 36);
          }
          61%,
          80% {
            content: "Front-end";
          }
          81%,
          100% {
            content: "Developer";
            color: rgb(18, 148, 213);
          }

        }

        @keyframes typing {
          10%,
          15%,
          30%,
          35%,
          50%,
          55%,
          70%,
          75%,
          90%,
          95% {
            width: 0;
          }
          5%,
          20%,
          25%,
          40%,
          45%,
          60%,
          65%,
          80%,
          85% {
            width: calc(100% + 8px);
          }
        }
      }

      p {
        color: var(--white);
        font-size: 30px;
        font-weight: 500;
        font-family: var(--F_hand);
      }
    }

    .right_box {
      position: absolute;
      top: 15vh;
      right: 5%;
      img {
        max-width: 400px;
        height: auto;
        border-radius: 45% 25%;
        transition: 1.5s;
        &:hover {
          transform: scale(1.2, 1.2);
          border-radius: 25% 45%;
        }
      }
    }
  }
}
</style>
