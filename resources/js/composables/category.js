import {ref, inject} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

export default function useCategories() {
    const isEditing = ref(null);
    const categories = ref([])
    const category = ref({})
    const router = useRouter()
    const store = inject('store')


    /**
     * @returns {Promise<void>}
     */
    const getCategories = async () => {
        try {
            let request_config = {}
            const response = await axios.get('/api/categories', request_config)
            categories.value = response.data.data
        } catch (e) { await console.log(e) }

        return false;
    }

    /**
     * @param id
     * @param way
     * @returns {Promise<void>}
     */
    const getCategory = async (id) => {
        try {
            let request_config = {
            };
            const response = await axios.get('/api/categories/' + id, request_config);
            category.value = response.data.data;

        } catch (e) { await console.log(e) }

        return false;
    }

    /**
     * @param data
     * @returns {Promise<boolean>}
     */
    const storeCategory = async () => {
            try {
                let request_config = {
                    headers: {
                        'authorization': 'Bearer ' + localStorage.getItem('access_token')
                    }
                };
                const response = await axios.post('/api/categories', category.value, request_config);
                await getCategories();

            } catch (e) {
                if (e.response && e.response.status === 401) {
                    window.alert("Помилка: Ви не автентифіковані");
                } else {
                    console.error(e);
                }
            }

        return false;
    }

    /**
     * @param category
     * @returns {Promise<boolean>}
     */
    const updateCategory = async (category) => {
            try {
                let request_config = {
                    headers: {
                        'authorization': 'Bearer ' + localStorage.getItem('access_token')
                    }
                };
                const response = await axios.put('/api/categories/' + category.id, {
                    title: category.title,
                    parent_category_id: category.parent_category_id
                }, request_config);
                await getCategories();

            } catch (e) {
                if (e.response && e.response.status === 401) {
                    window.alert("Помилка: Ви не автентифіковані");
                } else {
                    console.error(e);
                }
            }

        return false;
    }

    /**
     * @param id
     * @returns {Promise<boolean>}
     */
    const destroyCategory = async (id) => {
        if (confirm("Ви впевнені, що хочете видалити цю категорію?")) {
            if (id !== undefined) {
                try {
                    let request_config = {
                        headers: {
                            'authorization': 'Bearer ' + localStorage.getItem('access_token')
                        }
                    };
                    await axios.delete('/api/categories/' + id, request_config);
                    await getCategories();

                } catch (e) {
                    if (e.response && e.response.status === 401) {
                        window.alert("Помилка: Ви не автентифіковані");
                    } else {
                        console.error(e);
                    }
                }
            }
        }
    }

    const searchCategories = async (text) => {
        try {
            let data = {
                search_text: text,
            };
            const response = await axios.post(`/api/categories/search`, data);
            categories.value = response.data.data;

        } catch (e) {
            console.error(e);
        }
    };

    return {
        getCategory,
        getCategories,
        storeCategory,
        updateCategory,
        destroyCategory,
        categories,
        category,
        isEditing
    }
}
