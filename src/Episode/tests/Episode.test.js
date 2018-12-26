import { Episode } from 'Episode/Episode'

describe('Episode', () => {
    describe('numberInSeason', () => {
        it('should return valid number from SxxEyy', () => {
            const episode = new Episode(
                100,
                'whatever',
                new Date(),
                'S01E15',
                [],
                'whatever',
                new Date()
            )

            expect(episode.numberInSeason).toEqual(15)
        })

        it('should return number without prefixed `0`', () => {
            const episode = new Episode(
                100,
                'whatever',
                new Date(),
                'S01E05',
                [],
                'whatever',
                new Date()
            )

            expect(episode.numberInSeason).toEqual(5)
        })

        it('should return NaN for unrecognized format', () => {
            const episode = new Episode(
                100,
                'whatever',
                new Date(),
                'asd1E$$$5',
                [],
                'whatever',
                new Date()
            )

            expect(episode.numberInSeason).toEqual(NaN)
        })
    })

    describe('seasonNumber', () => {
        it('should return valid number from SxxEyy', () => {
            const episode = new Episode(
                100,
                'whatever',
                new Date(),
                'S1E15',
                [],
                'whatever',
                new Date()
            )

            expect(episode.seasonNumber).toEqual(1)
        })

        it('should return number without prefixed `0`', () => {
            const episode = new Episode(
                100,
                'whatever',
                new Date(),
                'S01E05',
                [],
                'whatever',
                new Date()
            )

            expect(episode.seasonNumber).toEqual(1)
        })

        it('should return NaN for unrecognized format', () => {
            const episode = new Episode(
                100,
                'whatever',
                new Date(),
                'asd1E$$$5',
                [],
                'whatever',
                new Date()
            )

            expect(episode.seasonNumber).toEqual(NaN)
        })
    })
})
