<script setup>
import {inject, onMounted} from "vue";
import {useRouter} from "vue-router";
import useCategories from "@composable/category.js";
import useAuth from "@composable/auth.js";

const router = useRouter();
const {category, categories, getCategories} = useCategories();
const {loginUser, logOutUser} = useAuth();
const store = inject('store')

onMounted(async () => {
    await getCategories();
    await store.checkAuthStatus();
})
</script>

<template>
  <div class="humberger__menu__overlay"></div>
  <div class="humberger__menu__wrapper">
    <div class="humberger__menu__logo">
      <a href="/"><img src="@img/logo.png" alt=""></a>
    </div>
    <div class="humberger__menu__cart">
      <ul>
        <li><a href="#"><i class="fa fa-heart"></i> <span></span></a></li>
        <li><a href="/cart"><i class="fa fa-shopping-bag"></i> <span></span></a></li>
      </ul>
      <div class="header__cart__price">item: <span></span></div>
    </div>
    <!--        <div class="humberger__menu__widget">-->
    <!--            <div class="header__top__right__language">-->
    <!--                <img src="img/language.png" alt="">-->
    <!--                <div>English</div>-->
    <!--                <span class="arrow_carrot-down"></span>-->
    <!--                <ul>-->
    <!--                    <li><a href="#">Ukraine</a></li>-->
    <!--                    <li><a href="#">English</a></li>-->
    <!--                </ul>-->
    <!--            </div>-->
    <!--            <div class="header__top__right__auth">-->
    <!--                <a href="/login"><i class="fa fa-user"></i> Login</a>-->
    <!--            </div>-->
    <!--        </div>-->

    <nav class="humberger__menu__nav mobile-menu">
      <ul>
        <li class="active"><a href="/">Головна</a></li>
        <li><a href="/shop">Каталог</a></li>
        <li><a href="/cart">Корзина</a></li>
        <li><a href="/contact">Контакти</a></li>
      </ul>
    </nav>
    <div id="mobile-menu-wrap"></div>
    <div class="header__top__right__social">
      <a href="#"><i class="fa fa-telegram"></i></a>
    </div>
    <div class="humberger__menu__contact">
      <ul>
        <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
        <li>Free Shipping for all Order of $99</li>
      </ul>
    </div>
  </div>
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="header__top__left">
                            <ul>
                                <li><i class="fa fa-envelope"></i> hello@mail.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="header__top__right">
                            <div class="header__top__right__social">
                                <a href="#"><i class="fa fa-telegram"></i></a>
                            </div>
                            <div
                                class="header__top__right__language"
                                v-if="!store.state.is_logged_in"
                            >
                                <a href="/login"><i class="fa fa-user"></i> Вхід</a>
                            </div>
                            <div
                                class="header__top__right__language"
                                v-if="!store.state.is_logged_in"
                            >
                                <a href="/registration">Реєстрація</a>
                            </div>
                            <div
                                class="header__top__right__language"
                                v-else
                            >
                                <a href="#" @click="logOutUser"><i class="fa fa-sign-out"></i> Вихід</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="header__logo">
                        <a href="/"><img src="@img/logo.png" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="header__menu">
                        <ul>
                            <li><a href="/">Головна</a></li>
                            <li><a href="/shop">Каталог</a></li>
                            <li><a href="/cart">Корзина</a></li>
                            <li><a href="/admin">Admin</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="header__cart">
                        <ul>
                            <li><a href="#"><i class="fa fa-heart"></i> <span>0</span></a></li>
                            <li><a href="/cart"><i class="fa fa-shopping-bag"></i> <span>0</span></a></li>
                        </ul>
                        <div class="header__cart__price">(ціна)<span></span></div>
                    </div>
                </div>
            </div>
            <div class="humberger__open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
</template>

<style scoped>
a {
    color: #000000;
}
</style>
