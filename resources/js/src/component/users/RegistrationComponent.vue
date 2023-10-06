<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import useUsers from "@composable/user.js";

const router = useRouter();

const {user, storeUser} = useUsers();

onMounted(async () => {
})
</script>

<template>
    <!-- Checkout Section Begin -->
    <section class="checkout spad">
        <div class="container">
            <div class="checkout__form">
                <h4>Реєстрація</h4>
                <form action="#">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Ім'я<span>*</span></p>
                                        <input
                                            type="text"
                                            v-model="user.first_name"
                                        >
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Прізвище<span>*</span></p>
                                        <input
                                            type="text"
                                            v-model="user.last_name"
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="checkout__input">
                                <p>Пароль<span>*</span></p>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    class="form-control checkout__input__add"
                                    v-model="user.password"
                                >
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    class="form-control checkout__input__add"
                                    v-model="user.password_confirmation"
                                >
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Країна<span>*</span></p>
                                        <input
                                            type="text"
                                            v-model="user.country"
                                        >
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Місто<span>*</span></p>
                                        <input
                                            type="text"
                                            v-model="user.city"
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Телефон<span>*</span></p>
                                        <input
                                            type="text"
                                            class="form-control checkout__input__add"
                                            v-model="user.phone"
                                        >
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Email<span>*</span></p>
                                        <input
                                            type="email"
                                            class="form-control checkout__input__add"
                                            v-model="user.email"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="site-btn"
                        @click.prevent="storeUser"
                    >
                        ЗАРЕЄСТРУВАТИСЯ
                    </button>
                </form>
            </div>
        </div>
    </section>
    <!-- Checkout Section End -->
</template>

<style scoped>
section.checkout {
    padding-top: 0px;
}
</style>
