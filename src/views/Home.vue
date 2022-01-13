<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />

      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Coffee</strong></h2>
        </div>
        <div class="col">
          <router-link to="/coffees" class="btn btn-secondary float-right">
            <b-icon-eye></b-icon-eye>
            See All
          </router-link>
        </div>
      </div>

      <div class="row mb-3">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";

import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },

  data() {
    return {
      products: [],
    };
  },

  methods: {
    setProducts(data) {
      this.products = data;
    },
  },

  mounted() {
    let url = "http://localhost:3000/best-products";
    axios
      .get(url)
      .then((response) => {
        this.setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
