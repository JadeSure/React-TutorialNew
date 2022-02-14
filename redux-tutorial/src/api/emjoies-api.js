import axios from "axios"

export const fetchEmojies = async () => {
    const { data } = await axios.get('https://api.github.com/emojis')
    return data
}