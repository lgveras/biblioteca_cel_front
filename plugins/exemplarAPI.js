export default defineNuxtPlugin(() => {
    const baseUrl = 'https://bibcelapi.azurewebsites.net';
    // const baseUrl = 'http://localhost:8000';
    return {
        provide: {
            exemplar_api:{
                getAll: async() =>{
                    const response = await useFetch(`${baseUrl}/catalogo/exemplar`, {
                        method: 'GET',
                    });
                    
                    return response.data.value;
                },
                getAllPagination: async({ page, itemsPerPage, sortBy}) =>{
                    // console.log(`${baseUrl}/catalogo/exemplar?page=${page}&itemsPerPage=${itemsPerPage}&sortBy=${sortBy}`);
                    const response = await useFetch(`${baseUrl}/catalogo/exemplar?page=${page}&itemsPerPage=${itemsPerPage}&sortBy=titulo`, {
                        method: 'GET',
                    });                    
                    return response.data.value;
                },
                getById: async (exemplarId) =>{
                    const response = await useFetch(`${baseUrl}/catalogo/exemplar/${exemplarId}`, {
                        method: 'GET',
                    });

                    return response.data.value;
                },
                getByTitle: async (keywordTitle) =>{
                    const response = await useFetch(`${baseUrl}/catalogo/exemplar/titulo`, {
                        method: 'GET',
                        params:{
                            titulo: keywordTitle,
                        }
                    });
                    return response.data.value;
                },
                getAllReserved: async () =>{
                    const response = await useFetch(`${baseUrl}/catalogo/exemplares_emprestados`, {
                        method: 'GET',
                    });
                    return response.data.value;
                },
                getByLanguage: async ({ page, itemsPerPage, sortBy}, lingua) =>{
                    // console.log("Dentro de getByLanguage: " + lingua);
                    const response = await useFetch(`${baseUrl}/catalogo/exemplar?page=${page}&itemsPerPage=${itemsPerPage}&sortBy=titulo&lingua=${lingua}`, {
                        method: 'GET',
                    });                    
                    return response.data.value;
                },
                setReserved: async (exemplarId) =>{
                    const response = await useFetch(`${baseUrl}/catalogo/reserva_exemplar/${exemplarId}`, {
                        method: 'PUT',
                    });
                    return response.data.value;
                },
                create: async (exemplar) =>{
                    const response = await useFetch(`${baseUrl}/catalogo/criar_exemplar`, {
                        method: 'POST',
                        body: exemplar,
                    });
                    return response.data.value;
                },
                removeById: async (exemplarId) =>{
                    const response = await useFetch(`${baseUrl}/catalogo/remover_exemplar/${exemplarId}`, {
                        method: 'DELETE',
                    });
                    return response.data.value;
                }
            }
        }
    }
  }
)