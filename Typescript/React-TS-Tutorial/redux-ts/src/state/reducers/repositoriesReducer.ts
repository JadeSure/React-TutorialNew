interface RepositoriesState {
    data: string[];
    loading: boolean;
    error: string | null;

}

const reducer = (state: RepositoriesState, action:any): RepositoriesState =>{
    switch(action.type){
        // user click the search button
         case 'search_repositories':
            return {loading:true, error: null, data: []}
         case 'search_repositories_success':
            return {loading:true, error: null, data: action.payload}
         case 'search_repositories_error':
             return {loading: false, error: action.payload, data: []}
        default: 
        return state;
    }
}

export default reducer;