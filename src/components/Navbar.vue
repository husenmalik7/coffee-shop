<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Coffee Shop</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/coffees">Coffees</router-link>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/cart"
                >Cart

                <b-icon-cart-4></b-icon-cart-4>
                <span class="badge badge-success ml-2">{{
                  updateCart ? updateCart.length : total.length
                }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav> -->

  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand href="#">Coffee shop</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/coffees">Coffees</router-link>
            </li>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/cart"
                >Cart

                <b-icon-cart-4></b-icon-cart-4>
                <span class="badge badge-success ml-2">{{
                  updateCart ? updateCart.length : total.length
                }}</span>
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",

  data() {
    return {
      total: [],
    };
  },

  props: ["updateCart"],

  methods: {
    setTotal(data) {
      this.total = data;
    },
  },

  mounted() {
    let url = "http://localhost:3000/keranjangs/";

    axios
      .get(url)
      .then((response) => {
        this.setTotal(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
