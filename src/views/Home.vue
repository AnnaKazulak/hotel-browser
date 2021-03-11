<template>
  <div class="home">
    <h1 class="home__title">
      <span class="letter">H</span>otel <span class="letter">B</span>rowser
    </h1>
    <Searchbar @input="search" />

    <div v-for="hotel in hotels" :key="hotel.name">
      <!-- <div v-if="hotel.opinions.length > 0"> -->
      <!-- {{ hotel.opinions.reduce((a, b) => a + b, 0) }} -->
      <!-- sum {{ average(hotel.opinions) }} -->
      <!-- </div> -->
      <HotelCard :hotel="hotel" :average="average(hotel.opinions)" />
    </div>
    <SortMenu @item-selected="sort" />
  </div>
</template>

<script>
// @ is an alias to /src
import HotelCard from "@/components/HotelCard.vue";
import Searchbar from "@/components/Searchbar.vue";
import hotels from "@/assets/hotels.json";
import SortMenu from "@/components/SortMenu";

export default {
  name: "Home",
  components: {
    HotelCard,
    Searchbar,
    SortMenu,
  },
  data() {
    return {
      hotels,
    };
  },
  methods: {
    average(array) {
      if (array.length > 0) {
        let sum = 0;
        array.forEach((item) => {
          sum += item.stars;
        });
        // return (sum / array.length).toFixed(1);
        return Math.round((sum / array.length) * 100) / 100;
      } else {
        return 0;
      }
    },
    search(e) {
      const text = e.target.value;
      if (text) {
        this.hotels = this.hotels.filter((hotel) => {
          return hotel.name.toLowerCase().includes(text.toLowerCase());
        });
      } else {
        this.hotels = hotels;
      }
    },
    // metoda sort dla preis, sztywna
    // sort() {
    //   const arr = this.hotels;
    //   const compare = (a, b) => {
    //     if (a.price > b.price) {
    //       return -1;
    //     } else if (a.price < b.price) {
    //       return 1;
    //     } else {
    //       return 0;
    //     }
    //   };
    //   console.log(arr.sort(compare));
    //   // alert(item);

    // sortuje nam wszystko od najmniejszej do najwiekszej  (false bedzie na gorze):
    // sort(item) {
    //   const arr = this.hotels;
    //   const compare = (a, b) => {
    //     if (a[item] > b[item]) {
    //       return 1;
    //     } else if (a[item] < b[item]) {
    //       return -1;
    //     } else {
    //       return 0;
    //     }
    //   };
    //   console.log(arr.sort(compare));
    //   // alert(item);
    // },
    sort(item) {
      const hotelsCopy = this.hotels;
      const compareSmallest = (a, b) => {
        if (a[item] > b[item]) {
          return 1;
        } else if (a[item] < b[item]) {
          return -1;
        } else {
          return 0;
        }
      };

      const compareByAvarage = (a, b) => {
        if (this.average(a[item]) > this.average(b[item])) {
          return -1;
        } else if (this.average(a[item]) < this.average(b[item])) {
          return 1;
        } else {
          return 0;
        }
      };
      const compareLargest = (a, b) => {
        if (a[item] > b[item]) {
          return -1;
        } else if (a[item] < b[item]) {
          return 1;
        } else {
          return 0;
        }
      };

      if (item === "price") {
        //smallest
        hotels.sort(compareSmallest);
      } else if (item === "stars") {
        //by avarage
        hotels.sort(compareByAvarage);
      } else {
        // largest
        hotels.sort(compareLargest);
      }
      this.hotels = hotelsCopy;
      console.log(this.hotels);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  .home__title {
    font-size: 35px;
    margin: 10px;
    color: $secondary;
    .letter {
      color: $decorative;
    }
  }
}
</style>
