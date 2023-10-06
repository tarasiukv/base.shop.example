<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import NavbarAdminComponent from "@component/admin/NavbarAdminComponent.vue";

const router = useRouter();

onMounted(async () => {

});
</script>

<template>
    <NavbarAdminComponent />
  <section class="blog-details spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-7 order-md-1 order-1">
          <div class="blog__details__text">
            <div class="container">
              <div class="shoping__cart__table">
                <div class="checkout__form">
                  <h4>Список замовлень</h4>
                <table>

                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
