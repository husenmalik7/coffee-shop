<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col mt-4">
          <h2><strong>Coffee</strong> list</h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              @keyup="searchCoffee"
              v-model="search"
            />

            <span class="input-group-text" id="basic-addon1">
              <b-icon-search></b-icon-search>
            </span>
          </div>
        </div>
      </div>

      <div class="row">
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
import Navbar from "/src/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";

import axios from "axios";

export default {
  name: "Coffees",
  components: {
    Navbar,
    CardProduct,
  },

  data() {
    return {
      products: [],
      search: "",
    };
  },

  methods: {
    setProducts(data) {
      this.products = data;
    },

    searchCoffee() {
      console.log(this.search);
      let url = "http://localhost:3000/products?q=" + this.search;
      // http://localhost:3000/products?q=ayam

      axios
        .get(url)
        .then((response) => {
          this.setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    let url = "http://localhost:3000/products";
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

<style></style>
