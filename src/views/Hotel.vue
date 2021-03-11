<template>
  <div class="hotel-wrapper">
    <h1 class="hotel__name">{{ hotel.name }}</h1>
    <div class="hotel">
      <img class="hotel__img" :src="hotel.image" :alt="hotel.name" />
      <div class="hotel__info">
        <p class="info__description">{{ hotel.description }}</p>
        <div class="info__details">
          <div class="detail">
            <fa-icon icon="map-marker-alt" />
            {{ hotel.city }}
          </div>
          <div class="detail">
            <fa-icon icon="utensils" />
          </div>
        </div>
      </div>
    </div>
    <iframe
      class="hotel__map"
      :src="hotel.locationUrl"
      width="1000"
      height="450"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    <div class="hotel__opinions">
      <div
        class="opinion"
        v-for="(opinion, index) in hotel.opinions"
        :key="index"
      >
        <div class="opinion___author">
          {{ opinion.author }}
          <div class="author___stars">
            <fa-icon
              class="star__icon"
              v-for="(star, index) in opinion.stars"
              :key="index"
              icon="star"
            />
          </div>
        </div>
        <div v-if="opinion.content" class="opinion___content">
          "{{ opinion.content }}"
        </div>
      </div>
      <p class="opinions__summary">
        Srednia ocena naszych gosci
        <strong class="summary__value">{{ average(hotel.opinions) }}</strong>
      </p>
    </div>
  </div>
</template>
<script>
import hotels from "@/assets/hotels.json";
import starsBg from "@/assets/stars-bg.svg";

export default {
  name: "Hotel",
  data() {
    return {
      hotels,
      hotel: {},
      starsBg,
    };
  },
  mounted() {
    const index = this.hotels.findIndex(
      (hotel) => hotel.name === this.$route.params.name
    );
    this.hotel = this.hotels[index];
  },
  methods: {
    average(array) {
      if (array.length > 0) {
        let sum = 0;
        array.forEach((item) => {
          sum += item.stars;
        });
        return (sum / array.length).toFixed(1);

        // return array.reduce((a, b) => a.stars + b.stars, 0);
      } else {
        return "-";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.hotel-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .hotel__name {
    font-size: 35px;
    &::first-letter {
      color: $decorative;
    }
  }
  .hotel {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    text-align: center;
    align-items: center;
    @media (min-width: 1000px) {
      flex-direction: row;
      justify-content: center;
      text-align: left;
    }
    .hotel__img {
      width: 500px;
      height: 300px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 0 20px $bg-secondary;
      margin-right: 20px;
    }
    .hotel__info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .info__description {
        text-align: justify;
      }
      .info__details {
        display: flex;
        justify-content: center;
        @media (min-width: 1000px) {
          //od 1000px w gore
          justify-content: flex-start;
        }

        .detail {
          margin: 0 10px;
          color: $decorative;
        }
      }
    }
  }

  .hotel__map {
    width: 90%;
    max-width: 1200px;

    margin-top: 20px;

    padding: 0 20px;
    // width: 90%;
    // max-width: 1000px;
    height: 350px;
    border: none;
  }
  .hotel__opinions {
    width: 100%;
    max-width: 1200px;
    margin-top: 50px;
    padding: 0 20px;
    .opinion {
      margin: 20px 0;
      padding: 10px;
      box-shadow: 0 0 10px $bg-secondary;
      border-radius: 8px;
      .opinion___author {
        display: flex;
        font-weight: bold;
        font-size: 20px;
        .author___stars {
          margin-left: 5px;
          .star__icon {
            color: gold;
          }
        }
      }
      .opinion___content {
        font-style: italic;
        margin-left: 10px;
      }
    }
    .opinions__summary {
      text-align: center;
      .summary__value {
        color: $decorative;
      }
    }
  }
}
</style>
