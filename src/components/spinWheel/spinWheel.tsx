import React, { useState } from "react";
import "./spinWheel.css";

interface SpinWheelProps {
  values: string[];
}

const SpinWheel: React.FC<SpinWheelProps> = ({ values }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    const randomIndex = Math.floor(Math.random() * values.length);

    // Quay vòng trong 4 giây, sau đó chọn tên
    const spinTime = 4000;
    setTimeout(() => {
      setSelected(values[randomIndex]);
      setSpinning(false);
    }, spinTime);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-5">🎡 Vòng Quay May Mắn</h1>
      <div className="relative">
        {/* Vòng quay */}
        <div
          className={`wheel ${spinning ? "spinning" : ""}`}
          style={{
            transform: spinning
              ? `rotate(${3600 + (360 / values.length) * values.indexOf(selected || "")}deg)`
              : "rotate(0deg)",
          }}
        >
          {values.map((name, index) => {
            const segmentAngle = 360 / values.length; // Góc mỗi phần
            const rotateAngle = segmentAngle * index; // Góc xoay cho từng phần tử
            return (
              <div
                key={index}
                className="segment"
                style={{
                  transform: `rotate(${rotateAngle}deg)`,
                  background: index % 2 === 0 ? "#f8d7da" : "#d4edda", // Màu xen kẽ
                }}
              >
                <span
                  style={{
                    transform: `rotate(-${rotateAngle}deg)`,
                  }}
                >
                  {name}
                </span>
              </div>
            );
          })}
        </div>
        {/* Kim chỉ */}
        <div className="pointer"></div>
      </div>
      <button
        onClick={spinWheel}
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Quay
      </button>
      {selected && (
        <p className="mt-4 text-lg font-semibold text-green-600">
          🎉 Người được chọn: {selected}!
        </p>
      )}
    </div>
  );
};

export default SpinWheel;
