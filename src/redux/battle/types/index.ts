export interface InfoPlayer {
    name: string
    followers: number
    blog: string
    login: string
    avatar_url: string
    company: null | string
    location: null | string
    following: number
    public_repos: number
}

export interface BattleStateProps {
    username: string
    playerOneName: string
    playerTwoName: string
    playerOneImage: string
    playerTwoImage: string
    winnerScore: number | null
    loserScore: number | null
    infoPlayerOne: InfoPlayer | null
    infoPlayerTwo: InfoPlayer | null
    error: string
}
export interface BattleProfile {
    [key: string]: number | string | boolean | null
    followers: number
}

export interface BattleProfiles {
    profile: InfoPlayer
    score: number
}