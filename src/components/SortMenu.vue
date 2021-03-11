<template>
  <div class="sort-menu-wrapper">
    <fa-icon class="menu__icon" icon="sort" />
    <div class="menu__items">
      <div class="item" @click="$emit('item-selected', 'price')">
        <fa-icon class="item__icon" icon="dollar-sign" />
      </div>
      <div class="item" @click="$emit('item-selected', 'opinions')">
        <fa-icon class="item__icon" icon="star" />
      </div>
      <div class="item" @click="$emit('item-selected', 'breakfasts')">
        <fa-icon class="item__icon" icon="utensils" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SortMenu",
};
</script>
<style lang="scss">
.sort-menu-wrapper {
  position: fixed;
  bottom: 30px;
  right: 400px;
  width: 40px;
  height: 40px;
  background-color: $bg-primary;
  border-radius: 50%;
  box-shadow: 0 0 10px $bg-secondary;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    .menu__items {
      display: block;
    }
  }

  .menu__icon {
    font-size: 20px;
    color: $decorative;
  }
  .menu__items {
    display: none;
    position: absolute;
    bottom: 40px;
    right: 0;
    .item {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $bg-primary;
      box-shadow: 0 0 10px $bg-secondary;
      border-radius: 50%;
      margin: 5px 0;
      &:nth-child(3) {
        animation: fadeIn 0.3s both;
      }
      &:nth-child(2) {
        animation: fadeIn 0.3s 0.1s both;
      }
      &:nth-child(1) {
        animation: fadeIn 0.3s 0.2s both;
      }
      .item__icon {
        transition: 0.2s ease;
        font-size: 20px;
        color: $decorative;
      }
      &:hover {
        .item__icon {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
