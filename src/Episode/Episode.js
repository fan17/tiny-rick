export class Episode {
    constructor(
        id,
        name,
        airDate,
        episodeNumber,
        seasonNumber,
        characterIds,
        url,
        createdDate
    ) {
        this.id = id
        this.name = name
        this.airDate = airDate
        this.number = episodeNumber
        this.seasonNumber = seasonNumber
        this.characterIds = characterIds
        this.url = url
        this.createdDate = createdDate
    }
}
