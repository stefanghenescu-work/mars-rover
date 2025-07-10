"use client";
import { useEffect, useState } from "react";
import styles from "./puzzle.module.css";

export default function Page() {
    const [tilesArray, setTilesArray] = useState<{ id: number }[]>([]);
    const [selectedTileID, setSelectedTileID] = useState<number | null>(null);
    const [tileSelected, setTileSelected] = useState(false);

    useEffect(() => {
        setTilesArray(generateTiles());
    }, []);

    function generateTiles() {
        let newTilesArray = [];
        for (let i = 0; i < 25; i++) {
            newTilesArray.push({ id: i });
        }
        // shuffle:
        for (let j = newTilesArray.length - 1; j > 0; j--) {
            const random = Math.floor(Math.random() * (j + 1));
            [newTilesArray[j], newTilesArray[random]] = [newTilesArray[random], newTilesArray[j]];
        }
        return newTilesArray;
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

        const newTiles = [...tilesArray];
        [newTiles[index1], newTiles[index2]] = [newTiles[index2], newTiles[index1]];
        setTilesArray(newTiles);
    }

    return (
        <div className={styles.container}>
            {tilesArray.map((tile) => (
                <div
                    key={tile.id}
                    onClick={() => handleSwap(tile.id)}
                    className={`${styles.tilewrap} ${selectedTileID === tile.id ? styles.selected : ""}`}
                >
                    {tile.id}
                </div>
            ))}
        </div>
    );
}
