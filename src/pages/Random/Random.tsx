import { useState } from "react";
import { foods} from "../../data/foods";
import { moodCategories } from "../../data/moods";
import type { Food, FoodType } from "../../types/food";

import "./Random.css";
import { getTimeContext } from "../../utils/time";

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
    const [isSpinning, setIsSpinning] = useState(false);

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
        const { isMainMealTime, isLateNight } = getTimeContext();

        switch (mode) {
            case "all":
                if (isMainMealTime) {
                    source = foods.filter(f => f.tags.includes('no'));
                } else if (isLateNight) {
                    source = foods.filter(f => f.tags.includes('nong') || f.reason.some(r => r.includes('khuya')));
                } else {
                    source = foods.filter(f => !f.tags.includes('no'));
                }
                if (source.length === 0) source = foods;

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

        if (source.length === 0) source = foods;
        startSpinningEffect(source);
    }

    function startSpinningEffect(source: Food[]) {
        setIsSpinning(true);
        setResult(null); 
        
        let count = 0;
        const maxSpins = 12; 
        const speed = 100;   

        const interval = setInterval(() => {
            const randomTemp = source[Math.floor(Math.random() * source.length)];
            setResult(randomTemp);
            
            count++;

            if (count >= maxSpins) {
                clearInterval(interval);
                
                const finalFood = source[Math.floor(Math.random() * source.length)];
                setResult(finalFood);
                setReason(pickRandom(finalFood.reason));
                // setMood(pickRandom(moods));
                var selectedMood: string;
                if (finalFood.price?.includes(">") || finalFood.type === "dat") {
                    selectedMood = pickRandom(moodCategories.luxury) ?? "Đang thèm gì đó sang chảnh đúng không?";
                } else if (finalFood.tags.includes("re") || finalFood.type === "nau") {
                    selectedMood = pickRandom(moodCategories.budget) ?? "Tự tay làm hết mới ngon!";
                } else if (finalFood.tags.includes("nhe")) {
                    selectedMood = pickRandom(moodCategories.healthy) ?? "Ăn món này cho 'eo thon dáng ngọc' nè.";
                } else {
                    selectedMood = pickRandom(moodCategories.default) ?? "Chúc bạn ngon miệng!"; 
                }
                setMood(selectedMood);
                setIsSpinning(false);
            }
        }, speed);
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
                    disabled={!canRandom || isSpinning}
                    onClick={handleRandom}
                    className={isSpinning ? "btn-spinning" : ""}
                >
                    {isSpinning ? "🔄 Đang chọn..." : "🎲 Chọn món cho tôi"}
                </button>
            </div>

            {result && !isSpinning && (
                <div className="result-box">
                    <div className="type-badge" data-type={result.type}>
                        {result.type === 'nau' ? '🍳 Tự nấu' : result.type === 'mua' ? '🛵 Mua về' : '📱 Đặt App'}
                    </div>
                    <h3>{result.name}</h3>
                    <p>👉: {reason}</p>
                    <p>💭: {mood}</p>
                    {/* <p>📌 Hình thức: {result.type}</p> */}
                    {result.price && <p>💰 Giá: {result.price}</p>}
                </div>
            )}
        </div>
    );
}
