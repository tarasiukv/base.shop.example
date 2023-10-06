<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import useUsers from "@composable/user.js";
import NavbarAdminComponent from "@component/admin/NavbarAdminComponent.vue";

const router = useRouter();
const {users, getUsers, destroyUser} = useUsers();

onMounted(async () => {
  await getUsers();
});
</script>

<template>
        <NavbarAdminComponent />
        <section class="shoping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="shoping__cart__table">
                            <table>
                                <thead>
                                <tr>
                                    <th class="shoping__product">Всього користувачів:</th>
                                    <th>{{ users.length }}</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th class="shoping__product">Email</th>
                                    <th>Ім'я</th>
                                    <th>Прізвище</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                    v-for="user in users"
                                    :key="user.id"
                                >
                                    <td class="shoping__cart__item">
                                        <h5>{{ user.email }}</h5>
                                    </td>
                                    <td class="shoping__cart__quantity">
                                        <h5>{{ user.first_name }}</h5>
                                    </td>
                                    <td class="shoping__cart__price">
                                        <h5>{{ user.last_name }}</h5>
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

</style>
