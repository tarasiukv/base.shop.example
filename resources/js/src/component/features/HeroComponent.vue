<script setup>
    import { ref, onMounted} from "vue";
    import {useRouter} from "vue-router";
    import useCategories from "@composable/category.js";
    import useProducts from "@composable/product.js";

    const router = useRouter();
    const {category, categories, getCategories} = useCategories();
    const { products, getProducts, searchProducts} = useProducts();

    const search_text = ref('');

    const performSearch = () => {
        searchProducts(search_text.value);
    };

    onMounted(async () => {
      await getCategories();
      await getProducts();
    });
</script>

<template>
    <section class="hero hero-normal">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="hero__categories">
                        <div class="hero__categories__all">
                            <i class="fa fa-bars"></i>
                            <span>Каталог</span>
                        </div>
                        <ul style="display: none">
                            <li
                                v-for="category_item in categories"
                                :key="category_item.id"
                            >
                                <a href="#">{{ category_item.title }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="hero__search">
                        <div class="hero__search__form">
                            <form>
                                <input
                                    v-model="search_text"
                                    placeholder="Що вам потрібно?"
                                >
                                <button @click.prevent="performSearch" class="site-btn">Пошук</button>
                            </form>
                        </div>
                        <div class="hero__search__phone">
                            <div class="hero__search__phone__icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="hero__search__phone__text">
                                <h5>+380 (00) 000 0000</h5>
                                <span>підтримка 24/7</span>
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
