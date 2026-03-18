import { useState } from "react";
import { foods, moods } from "../../data/foods";
import type { Food, FoodType } from "../../types/food";

import "./Random.css";

function pickRandom<T>(list: T[]): T | null {
    if (list.length === 0) return null;
    return list[Math.floor(Math.random() * list.length)];
}

type Mode = "all" | "filter" | "manual";

export default function Random() {
    const [mode, setMode] = useState<Mode>("all");

    const [selectedType, setSelectedType] = useState<FoodType | "">("");
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const [result, setResult] = useState<Food | null>(null);
    const [reason, setReason] = useState<string | null>(null);
    const [mood, setMood] = useState<string | null>(null);


    function resetResult() {
        setResult(null);
        setReason(null);
        setMood(null);
    }

    function changeMode(next: Mode) {
        if (next === mode) return;

        setMode(next);
        resetResult();

        // reset options không liên quan
        if (next !== "filter") {
            setSelectedType("");
        }

        if (next !== "manual") {
            setSelectedIds([]);
        }
    }


    function toggleFood(id: string) {
        setSelectedIds(prev =>
            prev.includes(id)
                ? prev.filter(x => x !== id)
                : [...prev, id]
        );
    }


    function handleRandom() {
        let source: Food[] = [];

        switch (mode) {
            case "all":
                // source = foods;
                const now = new Date();
                const hours = now.getHours();

                if (
                    (hours >= 6 && hours <= 8) || 
                    (hours >= 12 && hours <= 13) ||
                    (hours >= 18 && hours <= 19)
                ){
                    source = foods.filter(f => f.tags.includes('no'));
                }else{
                    source = foods.filter(f => !f.tags.includes('no'));
                }
                break;

            case "filter":
                source = selectedType
                    ? foods.filter(f => f.type === selectedType)
                    : foods;
                break;

            case "manual":
                source = foods.filter(f => selectedIds.includes(f.id));
                break;
        }

        const food = pickRandom(source);
        if (!food) return;

        setResult(food);
        setReason(pickRandom(food.reason));
        setMood(pickRandom(moods));
    }

    const canRandom =
        mode === "all" ||
        mode === "filter" ||
        (mode === "manual" && selectedIds.length >= 2);


    return (
        <div className="random-container">
            {/* <button onClick={onBack}>← Quay lại</button> */}

            <h2>🍽 Hôm nay ăn gì?</h2>
            <p className="hint">
                Chọn một cách, rồi để mình quyết định giúp bạn
            </p>

            <div className="mode-select">
                <label>
                    <input
                        type="radio"
                        checked={mode === "all"}
                        onChange={() => changeMode("all")}
                    />
                    🎲 Random tất cả
                </label>

                <label>
                    <input
                        type="radio"
                        checked={mode === "filter"}
                        onChange={() => changeMode("filter")}
                    />
                    🍜 Random theo loại
                </label>

                <label>
                    <input
                        type="radio"
                        checked={mode === "manual"}
                        onChange={() => changeMode("manual")}
                    />
                    🤔 So sánh vài món
                </label>
            </div>

            {mode === "filter" && (
                <div className="option-box">
                    <select
                        value={selectedType}
                        onChange={e =>
                            setSelectedType(e.target.value as FoodType)
                        }
                    >
                        <option value="">-- Tất cả --</option>
                        <option value="nau">Nấu</option>
                        <option value="mua">Mua</option>
                        <option value="dat">Đặt</option>
                    </select>
                </div>
            )}

            {mode === "manual" && (
                <div className="option-box food-list">
                    {foods.map(f => (
                        <label key={f.id}>
                            <input
                                type="checkbox"
                                checked={selectedIds.includes(f.id)}
                                onChange={() => toggleFood(f.id)}
                            />
                            {f.name}
                        </label>
                    ))}
                </div>
            )}

            <div className="random-btn">
                <button
                    disabled={!canRandom}
                    onClick={handleRandom}
                >
                    🎲 Chọn món cho tôi
                </button>
            </div>

            {result && (
                <div className="result-box">
                    <h3>{result.name}</h3>
                    <p>👉 Vì: {reason}</p>
                    <p>💭: {mood}</p>
                    {/* <p>📌 Hình thức: {result.type}</p> */}
                    {result.price && <p>💰 Giá: {result.price}</p>}
                </div>
            )}
        </div>
    );
}
