<template>
  <div class="success-order">
    <Navbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/images/waiting.png" alt="wait" width="23%" />

          <h2>
            <strong> Success Order </strong>
          </h2>

          <h4>Please wait your order</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "SuccessOrder",

  components: {
    Navbar,
  },
};
</script>

<style></style>
