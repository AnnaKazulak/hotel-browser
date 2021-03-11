import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSearch,
  faStar,
  faPaperPlane,
  faMapMarkerAlt,
  faUtensils,
  faDollarSign,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSearch,
  faStar,
  faPaperPlane,
  faMapMarkerAlt,
  faUtensils,
  faDollarSign,
  faSort
);

Vue.component("fa-icon", FontAwesomeIcon);
