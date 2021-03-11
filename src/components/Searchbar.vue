<template>
  <div class="searchbar-wrapper">
    <fa-icon class="searchbar__icon" icon="search" />
    <input
      type="search"
      class="searchbar"
      placeholder="Szukaj..."
      @input="$emit('input', $event)"
    />
  </div>
</template>
<script>
export default {
  name: "SearchBar",
};
</script>
<style lang="scss">
.searchbar-wrapper {
  position: relative;
  margin: 2px 0;
  width: 100%;
  max-width: 700px;

  .searchbar__icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: $decorative;
  }
  .searchbar {
    width: 100%;
    background-color: transparent;
    border: none;
    // border-bottom: 3px solid $decorative;
    padding: 7px 10px 7px 35px;
    border-radius: 15px;
    box-shadow: 0 0 10px $bg-secondary;
    outline: none;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
      transition: all 0.3s ease;
    }
    &:focus {
      &::placeholder {
        letter-spacing: 3px;
        opacity: 0;
      }
    }
  }
}
</style>
