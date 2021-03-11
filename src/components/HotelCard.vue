<template>
  <div class="hotel-card-wrapper">
    <div class="hotel__stars">
      <Stars :value="average" />
    </div>
    <img class="hotel__image" :src="hotel.image" :alt="hotel.name" />
    <div class="hotel__info">
      <h2 class="hotel__name">{{ hotel.name }}</h2>
      <p class="hotel__description">{{ hotel.description }}</p>
      <router-link class="hotel__link " :to="`/hotels/${hotel.name}`">
        <fa-icon icon="paper-plane" />
      </router-link>
    </div>
    <div class="hotel__details">
      <div class="detail">
        <fa-icon v-if="hotel.breakfasts" icon="utensils" />
      </div>
      <div class="detail">
        <fa-icon icon="map-marker-alt" />
        {{ hotel.city }}
      </div>
    </div>
  </div>
</template>
<script>
import Stars from "@/components/Stars";

export default {
  name: "HotelCard",
  props: {
    hotel: Object,
    average: Number,
  },
  components: {
    Stars,
  },
};
</script>
<style lang="scss" scoped>
.hotel-card-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 15px;
  padding: 20px;
  box-shadow: 0 0 20px $bg-secondary;
  border-radius: 20px;

  .hotel__stars {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .hotel__image {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-right: 20px;
    object-fit: cover;
  }

  .hotel__info {
    width: 100%;
    // display: flex;
    // flex-direction: column;

    .hotel__name {
      font-size: 25px;
      margin: 0;
      color: $secondary;
      &::first-letter {
        color: $decorative;
      }
    }
    .hotel__description {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
    .hotel__link {
      display: inline-block;
      font-size: 22px;
      color: $decorative;
      margin-top: 5px;
      transition: 0.2s ease;

      &:hover {
        transform: translate(3px, -3px);
        opacity: 0.7;
      }
    }
  }
  .hotel__details {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    .detail {
      margin: 0 5px;
      color: $decorative;
    }
  }
}
</style>
