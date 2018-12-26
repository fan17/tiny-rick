import { Episode } from 'Episode/Episode'

export default raw =>
    new Episode(
        raw.id,
        raw.name,
        raw.air_date,
        raw.episode,
        raw.characters,
        raw.url,
        raw.createdDate
    )
