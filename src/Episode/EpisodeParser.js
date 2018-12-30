import { Episode } from 'Episode/Episode'

export const parseCharacters = rawCharacters =>
    rawCharacters.reduce(
        (prev, current) => prev.concat(Number(current.split('/').reverse()[0])),
        []
    )

export const parseEpisodeNumber = rawNumber => {
    let result
    try {
        result = Number(rawNumber.split('E').reverse()[0])
    } catch (error) {
        result = ''
    }

    return result
}

export const parseSeasonNumber = rawNumber => {
    let result
    try {
        result = Number(rawNumber.slice(1).split('E')[0])
    } catch (error) {
        result = ''
    }

    return result
}

export default raw =>
    new Episode(
        raw.id,
        raw.name,
        raw.air_date,
        parseEpisodeNumber(raw.episode),
        parseSeasonNumber(raw.episode),
        parseCharacters(raw.characters),
        raw.url,
        raw.createdDate
    )
