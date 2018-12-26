export class Episode {
    constructor(id, name, airDate, number, characters, url, createdDate) {
        this.id = id
        this.name = name
        this.airDate = airDate
        this.number = number
        this.characters = characters
        this.url = url
        this.createdDate = createdDate
    }

    get numberInSeason() {
        return Number(this.number.split('E').reverse()[0])
    }

    get seasonNumber() {
        return Number(this.number.slice(1).split('E')[0])
    }
}
