<script setup>
import {computed, onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import useCategories from "@composable/category.js";
import NavbarAdminComponent from "@component/admin/NavbarAdminComponent.vue";


const router = useRouter();
const {category, categories, isEditing, storeCategory, getCategories, destroyCategory, updateCategory} = useCategories();

const startEditing = (categoryId) => {
  isEditing.value = categoryId;
}

const stopEditing = () => {
  isEditing.value = null;
}

const getCategoryTitle = (parentCategoryId) => {
  if (parentCategoryId === null) {
    return null;
  }
  const parentCategory = categories.value.find(category => category.id === parentCategoryId);

  return parentCategory ? parentCategory.title : 'Not found';
};

const filteredCategories = computed(() => {
  return categories.value.filter(category_item => category_item.parent_category_id === null);
});

const saveCategory = async (category) => {
  if (category.id === isEditing.value) {
    await updateCategory(category);
    stopEditing();
  }
}

onMounted(async () => {
  await getCategories();
})

</script>

<template>
  <NavbarAdminComponent/>
  <section class="shoping-cart spad">
    <div class="container">
      <div class="row">
        <div class="checkout__form">
          <h4>Додати категорію</h4>
          <form action="#" @submit.prevent="storeCategory">
            <div class="row">
              <div class="col-lg-12 col-md-6">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Назва категорії<span>*</span></p>
                      <input
                          type="text"
                          placeholder="Назва категорії"
                          v-model="category.title"
                      >
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Батьківська категорія</p>
                      <select class="checkout__input select"
                              v-model="category.parent_category_id"
                      >
                        <option
                            v-for="category_item in filteredCategories"
                            :key="category_item.id"
                            :value="category_item.id"
                        >
                          {{ category_item.title }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 text-left">
                <button
                    type="submit"
                    class="site-btn"
                >
                  ДОДАТИ
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="shoping__cart__table">
            <table>
              <thead>
              <tr>
                <th class="shoping__product">Категорія</th>
                <th>Основна категорія</th>
                <th></th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="category_item in categories"
                  :key="category_item.id"
              >
                <td class="shoping__cart__item">
                  <div v-if="!isEditing || category_item.id !== isEditing">
                    <h5>{{ category_item.title }}</h5>
                  </div>
                  <div v-else>
                    <form @submit.prevent="saveCategory(category_item)">
                      <input type="text" v-model="category_item.title"/>
                      <select v-model="category_item.parent_category_id">
                        <option
                            v-for="parentCategory in filteredCategories"
                            :key="parentCategory.id"
                            :value="parentCategory.id"
                        >
                          {{ parentCategory.title }}
                        </option>
                      </select>
                      <button type="submit">Зберегти</button>
                    </form>
                  </div>
                </td>
                <td class="shoping__cart__price">
                  {{ getCategoryTitle(category_item.parent_category_id) }}
                </td>
                <td class="shoping__cart__item__action">
                                    <span
                                        class="icon_pencil-edit"
                                        @click="startEditing(category_item.id)"
                                    ></span>
                </td>
                <td class="shoping__cart__item__action">
                                    <span
                                        class="icon_trash"
                                        @click.prevent="destroyCategory(category_item.id)"
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
.shoping__cart__table {
  padding-top: 50px;
}

.checkout__form {
  padding-top: 30px;
}
</style>
