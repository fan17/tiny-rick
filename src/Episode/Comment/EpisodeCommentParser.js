import { EpisodeComment } from 'Episode/Comment/EpisodeComment'

export default raw =>
    new EpisodeComment(raw.id, raw.author, raw.content, raw.createdDate)
