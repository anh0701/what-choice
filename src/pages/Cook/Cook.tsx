import type { Props } from "../../types/common";

export default function Cook ({ onBack }: Props){
    return (
        <div className="container">
            <h1>Kết quả 🎲</h1>
            <p>Bún bò Huế</p>

            <button onClick={onBack}>← Quay lại</button>
        </div>
    )
}