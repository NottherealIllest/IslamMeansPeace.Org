<template>
  <div class="container">
    <div class="MosqueCard">
      <div class="MosqueCard__Image" :style="{backgroundImage: 'url(\'/img/MosqueImg1.png\')'}"></div>
      <div class="MosqueCard__content">
        <p
          class="description"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.MosqueCard {
  background: #ffffff;
  box-shadow: 0px 1px 50px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  position: relative;
  display: flex;
  margin: 10rem auto;
  justify-content: space-between;
  @include respond-phone {
    flex-direction: column;
  }

  &__Image {
    background-position: center;
    background-size: cover;
    width: 30%;
    height: auto;
    border-radius: 1rem 0 0 1rem;
    @include respond-phone {
      width: 100%;
      border-radius: 1rem 1rem 0 0;
      height: 20rem;
    }
  }
  &__content {
    width: 70%;
    padding: 4rem;
    @include respond-phone {
      width: 100%;
    }
    .description {
      font-size: 1.8rem;
      color: #808080;
    }
  }
}
</style>



