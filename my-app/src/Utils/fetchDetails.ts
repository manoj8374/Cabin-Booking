interface APIResponse {
    success: boolean
    data?: any
    error?: any
}

const fetchApi =  async (url: string, options: RequestInit): Promise<APIResponse> => {
    try{
        const response = await fetch(url, options);
        const data = await response.json();

        if(response.ok){
            return data
        }
        return {success: false, data: data}
    }catch(e){
        return {success: false, error: e}
    }
    
}

export default fetchApi