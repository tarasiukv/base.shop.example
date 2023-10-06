<script setup>

</script>

<template>
    <section class="breadcrumb-section set-bg" id="fixed-menu">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <nav class="header__menu">
                        <ul>
                            <li><a href="/admin/categories">Категорії</a></li>
                            <li><a href="/admin/products">Продукти</a></li>
                            <li><a href="/admin/users">Користувачі</a></li>
                            <li><a href="/admin/offers">Замовлення</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.breadcrumb-section {
    padding-bottom: 0px;
    padding-top: 0px;
}

.set-bg {
    background-color: #7fad39;
}

#fixed-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}
</style>
