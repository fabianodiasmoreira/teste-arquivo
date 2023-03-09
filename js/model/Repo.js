class Repos{
    constructor(repositories){
        this.repositories = repositories
    }

    async getRepositories(){
        try{
            const response = await fetch(this.repositories)
            this.repos = await response.json()
        }catch(error){
            console.log(error);
        }
    }
}

export {Repos}