import axios from "axios"

export const fetchRepos = async () => {
    const res = await axios.get('https://api.github.com/users/Jadesure/repos')
    console.log(res);
    return res
}
