function isCellAliveInNextGeneration(isCellAlive, numberOfLiveNeighbours) {
    if (numberOfLiveNeighbours === 2) {
        return isCellAlive;
    }

    if (numberOfLiveNeighbours === 3) {
        return true;
    }

    if (numberOfLiveNeighbours < 2 || numberOfLiveNeighbours > 3) {
        return false;
    }
}
