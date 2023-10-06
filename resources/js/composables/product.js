import {ref, reactive, inject, computed, watch} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

export default function useProducts() {
    const products = ref([])
    const product = ref({})
    const router = useRouter()
    const store = inject('store')


    /**
     * @returns {Promise<void>}
     */
    const getProducts = async () => {
        try {
            const response = await axios.get('/api/products')
            products.value = response.data.data

        } catch (e) {
            console.log(e)
        }

        return false;
    }

    /**
     * @param id
     * @returns {Promise<void>}
     */
    const getProduct = async (id) => {
        try {
            let request_config = {}
            const response = await axios.get('/api/products/' + id, request_config)
            product.value = response.data.data

        } catch (e) {
            console.log(e)
        }
        return false;
    }

    /**
     * @param form_data
     * @returns {Promise<boolean>}
     */
    const storeProduct = async (form_data) => {
        try {
            let request_config = {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            };
            const response = await axios.post('/api/products', form_data, request_config)

            return response.data;
        } catch (e) {
            if (e.response && e.response.status === 401) {
                window.alert("Помилка: Ви не автентифіковані");
            } else {
                console.error(e);
            }
        }
    };


    /**
     * @param id
     * @param form_data
     * @returns {Promise<boolean>}
     */
    const updateProduct = async (id, form_data) => {

        try {
            let request_config = {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('access_token'),
                    'Accept': 'application/json',                }
            }
            const response = await axios.post('/api/products/' + id, form_data, request_config)

        } catch (e) {
            if (e.response && e.response.status === 401) {
                window.alert("Помилка: Ви не автентифіковані");
            } else {
                console.error(e);
                window.alert("Помилка: Під час оновлення товару");
            }
        }

        return false;
    }

    /**
     * @param id
     * @returns {Promise<boolean>}
     */
    const destroyProduct = async (id) => {
        if (confirm("Ви впевнені, що хочете видалити цей продукт?")) {
            if (id !== undefined) {
                try {
                    let request_config = {
                        headers: {
                            'authorization': 'Bearer ' + localStorage.getItem('access_token')
                        }
                    }
                    await axios.delete('/api/products/' + id, request_config)
                    await getProducts();
                } catch (e) {
                    if (e.response && e.response.status === 401) {
                        window.alert("Помилка: Ви не автентифіковані");
                    } else {
                        console.error(e);
                    }
                }
            }
        }

        return false;
    }

    const searchProducts = async (text, category_id, min_price, max_price) => {
        try {
            let data = {
                search_text: text,
                category_id: category_id,
                min_price: min_price,
                max_price: max_price,
            };
            const response = await axios.post(`/api/products/search`, data);
            products.value = response.data.data;

        } catch (e) {
            console.error(e);
        }
    };

    return {
        getProduct,
        getProducts,
        storeProduct,
        updateProduct,
        destroyProduct,
        searchProducts,
        products,
        product,
    }
}
