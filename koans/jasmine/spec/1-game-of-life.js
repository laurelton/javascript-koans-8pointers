/* global isCellAliveInNextGeneration */
describe('Game of Life', function() {
    describe('Determining whether cell is alive in next generation', function() {
        it('should return false when a live cell has fewer than two live neighbours - under-population', function() {
            let actual1 = isCellAliveInNextGeneration(true, 1);
            let actual0 = isCellAliveInNextGeneration(true, 0);
            expect(actual0).toBe(false);
            expect(actual1).toBe(false);
        });
        it('should return true when a live cell has two or three live neighbours - survival', function() {
            let actual2 = isCellAliveInNextGeneration(true, 2);
            let actual3 = isCellAliveInNextGeneration(true, 3);
            expect(actual2).toBe(true);
            expect(actual3).toBe(true);
        });
        it('should return false when a live cell has more than three live neighbours - overcrowding', function() {
            let actual = isCellAliveInNextGeneration(true, 4);
            expect(actual).toBe(false);
        });
        it('should return true when a dead cell has exactly three live neighbours - reproduction', function() {
            let actual = isCellAliveInNextGeneration(false, 3);
            expect(actual).toBe(true);
        });
    });
});
