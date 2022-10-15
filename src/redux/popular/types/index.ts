export interface ILicense {
    [key: string]: string | null
}

export interface IOwner {
    avatar_url: string
    login: string
}

export type ReposType = {
    name: string
    id: number
    owner: IOwner
    stargazers_count: number
    html_url: string
}

export interface IPopularState {
    selectedLanguage: string
    loading: boolean
    repos: ReposType[]
    error: null | string
}