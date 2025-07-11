"use client";
import { useEffect, useState } from "react";
import styles from "./puzzle.module.css";

type Tile = {
    id: number;
    originalRow: number;
    originalCol: number;
};

export default function Page() {
    const [tilesArray, setTilesArray] = useState<Tile[]>([]);
    const [selectedTileID, setSelectedTileID] = useState<number | null>(null);
    const [tileSelected, setTileSelected] = useState(false);

    useEffect(() => {
        setTilesArray(generateTiles());
    }, []);

    function generateTiles() {
        const tiles: Tile[] = [];
        for (let i = 0; i < 25; i++) {
            tiles.push({
                id: i,
                originalRow: Math.floor(i / 5),
                originalCol: i % 5,
            });
        }
        // shuffle tiles
        for (let j = tiles.length - 1; j > 0; j--) {
            const random = Math.floor(Math.random() * (j + 1));
            [tiles[j], tiles[random]] = [tiles[random], tiles[j]];
        }
        return tiles;
    }

    function handleSwap(id: number) {
        if (tileSelected && selectedTileID !== null) {
            swapTile(selectedTileID, id);
            setTileSelected(false);
            setSelectedTileID(null);
        } else {
            setSelectedTileID(id);
            setTileSelected(true);
        }
    }

    function swapTile(id1: number, id2: number) {
        const index1 = tilesArray.findIndex(tile => tile.id === id1);
        const index2 = tilesArray.findIndex(tile => tile.id === id2);
        if (index1 === -1 || index2 === -1) return;

        const newTiles = tilesArray;
        [newTiles[index1], newTiles[index2]] = [newTiles[index2], newTiles[index1]];
        setTilesArray(newTiles);
    }

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Make the Curiosity Rover back</h1>
            <div className={styles.container}>
                {tilesArray.map((tile) => {
                    const posX = -tile.originalCol * 100;
                    const posY = -tile.originalRow * 100;
                    return (
                        <div
                            key={tile.id}
                            onClick={() => handleSwap(tile.id)}
                            className={`${styles.tilewrap} ${selectedTileID === tile.id ? styles.selected : ""}`}
                            style={{ backgroundPosition: `${posX}% ${posY}%` }}
                        ></div>
                    );
                })}
            </div>
        </div>

    );
}
