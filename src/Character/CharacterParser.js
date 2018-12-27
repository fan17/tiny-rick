import { Character } from 'Character/Character'

export default raw =>
    new Character(raw.id, raw.name, raw.species, raw.origin.name, raw.image)
