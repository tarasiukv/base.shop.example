<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import useProducts from "@composable/product.js";

const router = useRouter();

const {products, getProducts} = useProducts();

onMounted(async () => {
  await getProducts();
})
</script>

<template>
  <div class="filter__item">
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <div class="filter__sort">
          <span>Сортувати за</span>
          <select>
            <option value="0">назвою</option>
            <option value="0">ціною</option>
          </select>
        </div>
      </div>
      <div class="col-lg-4 col-md-4">
        <div class="filter__found">
          <h6>Товарів найдено: <span>{{ products.length }}</span></h6>
        </div>
      </div>
      <div class="col-lg-4 col-md-3">
        <div class="filter__option">
          <span class="icon_grid-2x2"></span>
          <span class="icon_ul"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
select {
  margin-left: 10px;
}
</style>
