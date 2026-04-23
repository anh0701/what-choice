import { useState, type JSX } from "react";
import { foods } from "../../data/foods";
import { moodCategories } from "../../data/moods";
import type { Food, FoodType } from "../../types/food";

import {
    Utensils,
    Shuffle,
    Filter,
    ListChecks,
    Loader2,
    ChefHat,
    ShoppingBag,
    Smartphone,
    DollarSign,
    Sparkles,
    MessageCircle
} from "lucide-react";

import "./Random.css";
import { getTimeContext } from "../../utils/time";

type Mode = "all" | "filter" | "manual";

function pickRandom<T>(list: T[]): T | null {
    if (!list.length) return null;
    return list[Math.floor(Math.random() * list.length)];
}

// config mapping → scalable
const TYPE_CONFIG: Record<
    FoodType,
    { label: string; icon: JSX.Element }
> = {
    nau: { label: "Tự nấu", icon: <ChefHat size={16} /> },
    mua: { label: "Mua về", icon: <ShoppingBag size={16} /> },
    dat: { label: "Đặt App", icon: <Smartphone size={16} /> }
};

export default function Random() {
    const [mode, setMode] = useState<Mode>("all");
    const [selectedType, setSelectedType] = useState<FoodType | "">("");
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const [result, setResult] = useState<Food | null>(null);
    const [reason, setReason] = useState<string | null>(null);
    const [mood, setMood] = useState<string | null>(null);
    const [isSpinning, setIsSpinning] = useState(false);

    const resetResult = () => {
        setResult(null);
        setReason(null);
        setMood(null);
    };

    const changeMode = (next: Mode) => {
        if (next === mode) return;

        setMode(next);
        resetResult();

        if (next !== "filter") setSelectedType("");
        if (next !== "manual") setSelectedIds([]);
    };

    const toggleFood = (id: string) => {
        setSelectedIds(prev =>
            prev.includes(id)
                ? prev.filter(x => x !== id)
                : [...prev, id]
        );
    };

    const getSource = (): Food[] => {
        const { isMainMealTime, isLateNight } = getTimeContext();

        if (mode === "manual") {
            return foods.filter(f => selectedIds.includes(f.id));
        }

        if (mode === "filter") {
            return selectedType
                ? foods.filter(f => f.type === selectedType)
                : foods;
        }

        // mode === all
        if (isMainMealTime) {
            return foods.filter(f => f.tags.includes("no"));
        }

        if (isLateNight) {
            return foods.filter(
                f =>
                    f.tags.includes("nong") ||
                    f.reason.some(r => r.includes("khuya"))
            );
        }

        return foods.filter(f => !f.tags.includes("no"));
    };

    const generateMood = (food: Food): string => {

        if (food.tags.includes("re") || food.type === "nau") {
            return (
                pickRandom(moodCategories.budget) ??
                "Ngon - bổ - rẻ chuẩn bài"
            );
        }

        else if (food.tags.includes("nhe")) {
            return (
                pickRandom(moodCategories.healthy) ??
                "Ăn nhẹ cho người nhẹ lòng"
            );
        } else if (!food.tags.includes("re") || food.type === "dat") {
            return (
                pickRandom(moodCategories.luxury) ??
                "Hôm nay chơi lớn nha ..."
            );
        }

        return pickRandom(moodCategories.default) ?? "Ăn đi rồi tính";
    };

    const startSpinning = (source: Food[]) => {
        setIsSpinning(true);
        setResult(null);

        let count = 0;
        const maxSpins = 12;

        const interval = setInterval(() => {
            setResult(pickRandom(source));
            count++;

            if (count >= maxSpins) {
                clearInterval(interval);

                const final = pickRandom(source);
                if (!final) return;

                setResult(final);
                setReason(pickRandom(final.reason));
                setMood(generateMood(final));
                setIsSpinning(false);
            }
        }, 100);
    };

    const handleRandom = () => {
        let source = getSource();
        if (!source.length) source = foods;

        startSpinning(source);
    };

    const canRandom =
        mode !== "manual" || selectedIds.length >= 2;

    return (
        <div className="random-container">
            <h2 className="title">
                <Utensils size={20} /> Hôm nay ăn gì?
            </h2>

            <p className="hint">
                Chọn một cách, rồi để hệ thống quyết định giúp bạn
            </p>

            {/* MODE */}
            <div className="mode-select">
                <label>
                    <input
                        type="radio"
                        checked={mode === "all"}
                        onChange={() => changeMode("all")}
                    />
                    <Shuffle size={16} /> Random tất cả
                </label>

                <label>
                    <input
                        type="radio"
                        checked={mode === "filter"}
                        onChange={() => changeMode("filter")}
                    />
                    <Filter size={16} /> Theo loại
                </label>

                <label>
                    <input
                        type="radio"
                        checked={mode === "manual"}
                        onChange={() => changeMode("manual")}
                    />
                    <ListChecks size={16} /> So sánh
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
                        <option value="">Tất cả</option>
                        <option value="nau">Tự nấu</option>
                        <option value="mua">Mua về</option>
                        <option value="dat">Đặt App</option>
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
                    {isSpinning ? (
                        <>
                            <Loader2 className="spin" size={16} /> Đang chọn...
                        </>
                    ) : (
                        <>
                            <Shuffle size={16} /> Chọn món
                        </>
                    )}
                </button>
            </div>

            {result && !isSpinning && (
                <div className="result-box">
                    <div
                        className="type-badge"
                        data-type={result.type}
                    >
                        {TYPE_CONFIG[result.type].icon}
                        {TYPE_CONFIG[result.type].label}
                    </div>

                    <h3>{result.name}</h3>

                    {reason && (
                        <p className="reason">
                            <MessageCircle size={16} />
                            <span> {reason}</span>
                        </p>
                    )}

                    {mood && (
                        <p className="mood">
                            <Sparkles size={16} />
                            <span> {mood}</span>
                        </p>
                    )}

                    {result.price && (
                        <p className="price">
                            <DollarSign size={16} />
                            <span> {result.price}</span>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}