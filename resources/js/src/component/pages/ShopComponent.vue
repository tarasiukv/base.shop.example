<script setup>
import {onMounted, ref, watch} from "vue";
import {useRouter} from "vue-router";
import useProducts from "@composable/product.js";
import useCategories from "@composable/category.js";

const router = useRouter();
const {category, categories, getCategories} = useCategories();
const {products, getProducts, searchProducts} = useProducts();

const search_text = ref('');
const category_id = ref('');
const min_price = ref('');
const max_price = ref('');

let searchTimeout = null;

const performSearchByCategory = (category) => {
    category_id.value = category;
    searchProducts(search_text.value, category_id.value, min_price.value, max_price.value);
};

const performSearch = () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchProducts(search_text.value, category_id.value, min_price.value, max_price.value);
    }, 500);
};

const clearFilters = () => {
    search_text.value = '';
    category_id.value = '';
    min_price.value = '';
    max_price.value = '';
    performSearch();
};

onMounted(async () => {
    await getCategories();
    await getProducts();
})

watch([min_price, max_price], () => {
    performSearch();
});
</script>

<template>
    <!-- Hero Section Begin -->
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
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->

    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-section set-bg" data-setbg="/img/breadcrumb.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>Каталог</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Product Section Begin -->
    <section class="product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-5">
                    <div class="sidebar">
                        <div class="sidebar__item">
                            <h4>Категорії</h4>
                            <ul>
                                <li
                                    v-for="category_item in categories"
                                    :key="category_item.id"
                                    @click.prevent="performSearchByCategory(category_item.id)"
                                >
                                    <a href="#">{{ category_item.title }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="sidebar__item">
                            <h4>Ціна</h4>
                            <div class="price-range-wrap">
                                <div class="range-slider">
                                    <div class="price-input">
                                        <input type="text" id="minamount" v-model="min_price" @input="performSearch">
                                        <input type="text" id="maxamount" v-model="max_price" @input="performSearch">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="blog__sidebar__item__tags">
                            <button @click.prevent="clearFilters" class="owl-prev">
                                <span class="fa fa-trash"> Очистити фільтр</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-7">
                    <div class="filter__item">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <!--                <div class="filter__sort">-->
                                <!--                    <span>Сортувати за</span>-->
                                <!--                    <div class="sidebar__item__size">-->
                                <!--                        <label for="large">-->
                                <!--                            ціною-->
                                <!--                            <input type="radio" id="large">-->
                                <!--                        </label>-->
                                <!--                    </div>-->
                                <!--                    <div class="sidebar__item__size">-->
                                <!--                        <label for="large">-->
                                <!--                            назвою-->
                                <!--                            <input type="radio" id="large">-->
                                <!--                        </label>-->
                                <!--                    </div>-->
                                <!--                </div>-->

                                <div class="filter__sort">
                                    <span>Сортувати за</span>
                                    <select class="sort">
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
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6"
                             v-for="product in products"
                             :key="product.id"
                        >
                            <div class="product__item">
                                <div class="product__item__pic set-bg"
                                     :style='{ backgroundImage: `url(storage/${product.file_path})` }'>
                                    <ul class="product__item__pic__hover">
                                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a :href="'/shop/' + product.id">{{ product.title }}</a></h6>
                                    <h5>{{ product.price }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product__pagination">
                        <a href="#">1</a>
                        <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
select.sort {
    margin-left: 10px;
}
#maxamount {
    margin-left: 30px;
}
</style>
