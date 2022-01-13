<template>
  <div class="hero">
    <!-- dekstop -->
    <div class="d-md-block d-none">
      <div class="row mt-4 ml-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Caffeine</strong>
                for life
              </h2>

              <p>get your coffee now</p>

              <router-link to="/coffees" class="btn btn-lg btn-secondary"
                >Order</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.svg" alt="hero" width="65%" />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4 ml-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/images/hero.svg" alt="hero" width="65%" />
        </div>

        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Caffeine</strong>
                for life
              </h2>

              <p>get your coffee now</p>

              <router-link to="/coffees" class="btn btn-lg btn-secondary"
                >Order</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
