export default defineNuxtPlugin(() => {
    const baseUrl = 'http://localhost:8000';
    return {
        provide: {
            exemplar_api:{
                getAll: async() =>{
                    const response = await useFetch(baseUrl + "/catalogo/exemplar", {
                        method: 'GET',
                    });
                    // const response = "/catalogo/exemplar";
                    // console.log(response)
                    return response.data.value;
                },
                getById: () =>{

                },
                getByTitle: () =>{

                },
                getReservedByUser:(userId) =>{
                
                },
                setReserved: (exemplarId) =>{
                
                },
                create: (exemplar) =>{

                },
                removeById: (exemplarId) =>{
                    
                }
            }
        }
    }
  }
)