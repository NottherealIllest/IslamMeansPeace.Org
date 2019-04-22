<template>
  <div class="tab">
    <ul class="tab__items">
      <div class="tab__item active">All</div>
      <div class="tab__item">Ongoing</div>
      <div class="tab__item">Completed</div>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.tab {
  position: relative;
  border: 1px solid #5c258d;
  border-radius: 0.3rem;
  cursor: pointer;
  @include respond-phone {
    display: none;
  }

  &__items {
    display: flex;
    flex-direction: columns;

    justify-content: space-between;
  }

  &__item {
    font-family: Alegreya Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 1.7rem;
    line-height: normal;
    padding: 1.8rem 3rem;

    color: #868686;
  }
  .active {
    background: linear-gradient(106.32deg, #5c258d -14.04%, #4389a2 115.3%);
    color: white;
  }
}
</style>