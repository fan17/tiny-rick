import {
    parseCharacters,
    parseEpisodeNumber,
    parseSeasonNumber,
} from 'Episode/EpisodeParser'

describe('EpisodeParser', () => {
    describe('parseEpisodeNumber', () => {
        it('should return valid number from SxxEyy', () => {
            expect(parseEpisodeNumber('S01E15')).toEqual(15)
        })

        it('should return number without prefixed `0`', () => {
            expect(parseEpisodeNumber('S01E05')).toEqual(5)
        })

        it('should return NaN for unrecognized format', () => {
            expect(parseEpisodeNumber('asd1E$$$5')).toEqual(NaN)
        })
    })

    describe('seasonNumber', () => {
        it('should return valid number from SxxEyy', () => {
            expect(parseSeasonNumber('S1E15')).toEqual(1)
        })

        it('should return number without prefixed `0`', () => {
            expect(parseSeasonNumber('S01E05')).toEqual(1)
        })

        it('should return NaN for unrecognized format', () => {
            expect(parseSeasonNumber('asd1E$$$5')).toEqual(NaN)
        })
    })

    describe('characterIds', () => {
        it('should return empty array when no characters', () => {
            expect(parseCharacters([])).toEqual([])
        })

        it('should cut ids from urls', () => {
            expect(
                parseCharacters([
                    'https://rickandmortyapi.com/api/character/1',
                    'https://rickandmortyapi.com/api/character/2',
                    'https://rickandmortyapi.com/api/character/35',
                ])
            ).toEqual([1, 2, 35])
        })
    })
})
