<template>
  <div class="cart">
    <Navbar :updateCart="carts" />
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

              <li class="breadcrumb-item active" aria-current="page">Cart</li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- table -->
      <div class="row">
        <div class="col">
          <h2>My <strong>Cart</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Picture</th>
                  <th scope="col">Drinks</th>
                  <th scope="col">Description</th>
                  <th scope="col">Total</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <!-- data -->
                <tr v-for="(cart, index) in carts" :key="cart.id">
                  <th>
                    {{ index + 1 }}
                  </th>
                  <td>
                    <img
                      :src="require('../assets/images/' + cart.products.gambar)"
                      alt="gambar"
                      class="img-fluid shadow"
                      width="111"
                    />
                  </td>

                  <td>{{ cart.products.nama }}</td>
                  <td>{{ cart.description ? cart.description : "-" }}</td>
                  <td>{{ cart.total ? cart.total : 1 }}</td>
                  <td align="right">Rp. {{ cart.products.harga }}</td>
                  <td align="right">
                    <strong>
                      Rp.
                      {{
                        cart.total
                          ? cart.total * cart.products.harga
                          : 1 * cart.products.harga
                      }}
                    </strong>
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon-trash
                      v-on:click="deleteCart(cart.id)"
                    ></b-icon-trash>

                    <!-- <b-icon-trash @click="deleteCart(cart.id)"></b-icon-trash> -->
                  </td>
                </tr>

                <!-- total -->
                <tr>
                  <td colspan="6" align="right">
                    <strong> Total Price : </strong>
                  </td>

                  <td align="right">
                    <strong> Rp. {{ totalPrice }} </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- form -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="name">Nama : </label>
              <input type="text" class="form-control" v-model="order.name" />
            </div>

            <div class="form-group">
              <label for="tableNumber">Table Number : </label>
              <input
                type="number"
                class="form-control"
                v-model="order.tableNumber"
              />
            </div>

            <button
              type="submit"
              class="btn btn-success float-right"
              @click="checkout"
            >
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
  name: "Cart",

  components: {
    Navbar,
  },

  data() {
    return {
      carts: [],
      order: {},
    };
  },

  methods: {
    setCarts(data) {
      this.carts = data;
    },

    deleteCart(id) {
      let url = "http://localhost:3000/keranjangs/" + id;

      axios
        .delete(url)
        .then(() => {
          this.$toast.error("success delete", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          let url2 = "http://localhost:3000/keranjangs";

          axios
            .get(url2)
            .then((response) => {
              console.log(response.data);
              this.setCarts(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    checkout() {
      if (this.order.name && this.order.tableNumber) {
        this.order.carts = this.carts;

        let url = "http://localhost:3000/pesanans";
        axios
          .post(url, this.order)
          .then(() => {
            // deleteCart
            this.carts.map((item) => {
              return axios
                .delete("http://localhost:3000/keranjangs/" + item.id)
                .catch((error) => {
                  console.log(error);
                });
            });

            // toast
            this.$toast.success("success order", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });

            // push
            this.$router.push({
              path: "/success-order",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.$toast.error("please input the form", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },

  mounted() {
    let url = "http://localhost:3000/keranjangs";

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        this.setCarts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  computed: {
    totalPrice() {
      return this.carts.reduce(function (items, data) {
        return items + data.products.harga * data.total;
      }, 0);
    },
  },
};
</script>

<style></style>
