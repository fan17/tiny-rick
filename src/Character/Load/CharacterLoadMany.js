import parseRawCharacter from 'Character/CharacterParser'

export const CHARACTERS_LOADED = 'CHARACTERS_LOADED'

const handleErrors = response => {
    if (!response.ok) {
        throw Error()
    }
    return response
}

export default idsArray => dispatch =>
    fetch(`http://tiny-rick.tk/api/character/${idsArray.join()}`)
        .then(handleErrors)
        .then(response => response.json())
        .then(data => {
            const items = data.reduce((result, rawItem) => {
                const parsedItem = parseRawCharacter(rawItem)
                result[parsedItem.id] = parsedItem

                return result
            }, {})

            dispatch({
                type: CHARACTERS_LOADED,
                items,
            })

            return data
        })
        .catch(() => {
            dispatch({
                type: CHARACTERS_LOADED,
                items: {},
            })

            return {}
        })
