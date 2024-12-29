import React, { useState } from 'react';
import { Input } from 'antd';

interface Prop {
  addValue: (values: string[]) => void; // Định nghĩa kiểu prop
}

const { TextArea } = Input;

const EntriesTab: React.FC<Prop> = ({ addValue }) => {
  const [inputValue, setInputValue] = useState<string>(''); // State để lưu giá trị nhập

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Tách các giá trị theo dòng và loại bỏ khoảng trắng thừa
    const values = newValue
      .split('\n') // Tách theo dòng
      .map((item) => item.trim()) // Loại bỏ khoảng trắng thừa
      .filter((item) => item !== ''); // Bỏ dòng trống

    addValue(values); // Cập nhật danh sách giá trị
  };

  return (
    <div className="flex flex-col space-y-4">
      <TextArea
        rows={8}
        value={inputValue}
        onChange={handleChange} // Xử lý khi nhập
        placeholder="Nhập danh sách, mỗi dòng một giá trị..."
      />
    </div>
  );
};

export default EntriesTab;
