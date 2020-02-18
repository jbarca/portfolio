import axios from 'axios'

const Axios = axios.create({
    baseURL: "https://api.airtable.com/v0/app5AvJLIQc8kl3qm/Table%201"
})

Axios.defaults.headers.common = {'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY}

export default {
    getProjects() {
        return Axios.get()
    },
    getProject(slug) {
        return Axios.get("?filterByFormula={Slug}='" + slug + "'")
    }
}