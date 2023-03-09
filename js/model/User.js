class User{
    constructor(user){
        this.user = user
    }

    async getUser(){
        try{
            const apiUrl = `https://api.github.com/users/${this.user}`
            const response = await fetch(apiUrl);
            const data = await response.json();

            this.avatar_url = data.avatar_url
            this.following = data.following
            this.followers = data.followers
            this.html_url = data.html_url
            this.public_repos = public_repos
        
        }catch(error){
            console.log(error);
        }

    }
}

export {User}
