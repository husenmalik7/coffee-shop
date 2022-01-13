<template>
  <div class="coffee-detail">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>

              <li class="breadcrumb-item">
                <router-link to="/coffees">Coffees</router-link>
              </li>

              <li class="breadcrumb-item active" aria-current="page">
                Coffee Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- s -->
      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="require('../assets/images/' + product.gambar)"
            alt="gambar"
            class="img-fluid shadow"
          />
        </div>

        <div class="col-md-6">
          <h2>{{ product.nama }}</h2>
          <hr />
          <h4>
            Price : Rp
            {{ product.harga }}
          </h4>

          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Total </label>
              <input type="number" class="form-control" v-model="order.total" />
            </div>

            <div class="form-group">
              <label for="keterangan">Description </label>
              <textarea
                v-model="order.description"
                class="form-control"
                placeholder="Description"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-success" @click="doOrder">
              <b-icon-cart></b-icon-cart>
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

import axios from "axios";

export default {
  name: "CoffeeDetail",

  components: {
    Navbar,
  },

  data() {
    return {
      product: {},
      order: {},
    };
  },

  methods: {
    setProduct(data) {
      this.product = data;
    },

    doOrder() {
      if (this.order.total) {
        _doOrder(this);
      } else {
        sendToast(this, "Please fill the total", "error");
      }

      function sendToast(that, message, type) {
        that.$toast.success(message, {
          type: type,
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }

      function _doOrder(that) {
        that.order.products = that.product;

        console.log(that.order);
        let url = "http://localhost:3000/keranjangs";
        axios
          .post(url, that.order)
          .then(() => {
            sendToast(that, "Success Order", "success");

            that.$router.push({
              path: "/cart",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },

  mounted() {
    let url = "http://localhost:3000/products/" + this.$route.params.id;

    axios
      .get(url)
      .then((response) => {
        this.setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
