
interface InputProps {
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value?: string | number;
    type?: string; // 기본적으로 텍스트 타입, 필요 시 다른 타입 지원 가능
    name?: string;
    size?: 'large' | 'medium' | 'small'; // 크기 선택
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
}

function Input({ className, onChange, placeholder, value, name, type = 'text', size = 'large', required= false, readOnly=false,disabled=false}: InputProps) {
    // 크기에 따른 너비 설정
    const sizeClasses = {
        large: 'w-[550px]',
        medium: 'w-[236px]',
        small: 'w-[92px]',
    };

    // 입력값의 존재 여부에 따른 배경 색상 결정
    const inputBgColor = value ? 'bg-custom-softblue' : 'bg-white';

    return (
        <input 
            type={type}
            className={`text-[16px] h-[40px] p-4 border border-custom-softgrey rounded-[5px] ${sizeClasses[size]} ${inputBgColor} ${className}`}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            required={required}
            readOnly={readOnly}
            disabled ={disabled}
        />
    );
}

export default Input;
