<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import useProducts from "@composable/product.js";
import useCategories from "@composable/category.js";
import NavbarAdminComponent from "@component/admin/NavbarAdminComponent.vue";

const router = useRouter();
const {product, products, storeProduct, getProducts, destroyProduct, searchProducts} = useProducts();
const {categories, getCategories} = useCategories();
const search_text = ref('');

const getCategoryTitle = (categoryId) => {
  const categoryTitle = categories.value.find(category => category.id === categoryId);

  return categoryTitle ? categoryTitle.title : 'Категорія відсутня';
};

const performSearch = () => {
  searchProducts(search_text.value);
};

onMounted(async () => {
  await getProducts();
  await getCategories();
});
</script>

<template>
  <NavbarAdminComponent/>
  <section class="shoping-cart spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="hero__search">
            <div class="hero__search__form">
              <form>
                <input
                    v-model="search_text"
                    placeholder="Пошук продукту"
                >
                <button @click.prevent="performSearch" class="site-btn">Пошук</button>
              </form>
            </div>
            <a class="site-btn" href="/admin/add-product">ДОДАТИ ПРОДУКТ</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="shoping__cart__table">
            <table>
              <thead>
              <tr>
                <th class="shoping__product">Продукт</th>
                <th>Категорія</th>
                <th>Ціна</th>
                <th></th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="product in products"
                  :key="product.id"
              >
                <td class="shoping__cart__item">
                  <img
                      class="product__details__pic__item"
                      :src="`/storage/${product.file_path}`"
                      alt="">
                  <h5>{{ product.title }}</h5>
                </td>
                <td class="shoping__cart__quantity">
                  <div class="quantity">
                    <div class="pro-qty">
                      {{ getCategoryTitle(product.category_id) }}
                    </div>
                  </div>
                </td>
                <td class="shoping__cart__price">
                  {{ product.price }}
                </td>
                <td class="shoping__cart__total">
                  <a :href="'/admin/edit-product/' + product.id">
                    <span class="icon_pencil-edit"></span>
                  </a>
                </td>
                <td class="shoping__cart__item__action">
                                    <span
                                        class="icon_trash"
                                        @click.prevent="destroyProduct(product.id)"
                                    ></span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.site-btn {
  margin-left: 300px;
}

.img product__details__pic__item {
  max-width: 20% !important;
}

.shoping-cart {
  padding-top: 50px;
}
</style>
