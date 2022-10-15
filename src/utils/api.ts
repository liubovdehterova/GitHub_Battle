import axios, { AxiosResponse } from 'axios'
import {BattleProfile, BattleProfiles} from "../redux/battle/types";
import {ReposType} from "../redux/popular/types";


const id: string = 'YOUR_CLIENT_ID'
const sec: string = 'YOUR_SECRET_ID'
const params: string = '?client_id=' + id + '?client_secret=' + sec

const handleError = (error: string) => {
    console.error(error)
}
const getProfile = (username: string): Promise<any> => {
    return axios
        .get('https://api.github.com/users/' + username + params)
        .then((user) => user.data)
        .catch(handleError)
}

const getRepos = (username: string): Promise<any> => {
    return axios
        .get('https://api.github.com/users/' + username + '/repos' + params)
        .then((user) => user.data)
        .catch(handleError)
}

const getStarCount = (repos: { [key: string]: any }): number => {
    return repos.reduce((count: number, repo: { [key: string]: any }) => {
        return count + repo.stargazers_count
    }, 0)
}

const calculateScore = (profile: BattleProfile, repos: ReposType): number => {
    const followers: number = profile.followers
    const totalStars: number = getStarCount(repos)
    return followers * 3 + totalStars
}

const getUserData = (username: string) => {
    return axios.all([getProfile(username), getRepos(username)]).then(([profile, repos]) => {
        return {
            profile: profile,
            score: calculateScore(profile, repos),
        }
    })
}

const sortPlayers = (players: BattleProfiles[]) => {
    return players.sort(function (a: BattleProfiles, b: BattleProfiles) {
        return b.score - a.score
    })
}

export const battle = (players: string[]) => {
    return axios.all(players.map(getUserData)).then(sortPlayers).catch(handleError)
}

export const fetchPopularReposHttpRequest = (language: string): Promise<any> => {
    const encodeURI: string = window.encodeURI(
        'https://api.github.com/search/repositories?q=stars:>1+language:' +
        language +
        '&sort=stars&order=desc&type=Repositories'
    )
    return axios.get(encodeURI).then((response: AxiosResponse<any>): ReposType[] => {
        return response.data.items
    })
}