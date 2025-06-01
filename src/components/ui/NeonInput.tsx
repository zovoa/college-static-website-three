import React from 'react';

interface NeonInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name?: string;
  id?: string;
  required?: boolean;
  className?: string;
  multiline?: boolean;
  rows?: number;
  color?: 'cyan' | 'pink' | 'purple';
  label?: string;
}

const NeonInput: React.FC<NeonInputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  className = '',
  multiline = false,
  rows = 4,
  color = 'cyan',
  label,
}) => {
  // Define color styles
  const getColorStyles = () => {
    switch (color) {
      case 'pink':
        return {
          borderColor: 'border-cyberpunk-pink',
          focusBorderColor: 'focus:border-cyberpunk-pink',
          shadowColor: 'shadow-[0_0_5px_rgba(255,56,100,0.3)]',
          focusShadowColor: 'focus:shadow-[0_0_10px_rgba(255,56,100,0.5)]',
        };
      case 'purple':
        return {
          borderColor: 'border-cyberpunk-purple',
          focusBorderColor: 'focus:border-cyberpunk-purple',
          shadowColor: 'shadow-[0_0_5px_rgba(110,13,255,0.3)]',
          focusShadowColor: 'focus:shadow-[0_0_10px_rgba(110,13,255,0.5)]',
        };
      default:
        return {
          borderColor: 'border-cyberpunk-cyan',
          focusBorderColor: 'focus:border-cyberpunk-cyan',
          shadowColor: 'shadow-[0_0_5px_rgba(0,240,255,0.3)]',
          focusShadowColor: 'focus:shadow-[0_0_10px_rgba(0,240,255,0.5)]',
        };
    }
  };

  const colorStyles = getColorStyles();
  
  // Common input styles
  const inputStyles = `
    w-full bg-cyberpunk-darkBlue bg-opacity-50 text-white 
    border ${colorStyles.borderColor} rounded-md 
    py-2 px-4 focus:outline-none ${colorStyles.focusBorderColor}
    ${colorStyles.shadowColor} ${colorStyles.focusShadowColor}
    transition-all duration-300 placeholder-gray-500
    ${className}
  `;

  return (
    <div className="mb-4">
      {label && (
        <label 
          htmlFor={id || name} 
          className="block mb-2 text-sm font-medium text-white"
        >
          {label}
          {required && <span className="text-cyberpunk-pink ml-1">*</span>}
        </label>
      )}
      
      {multiline ? (
        <textarea
          id={id || name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className={inputStyles}
        />
      ) : (
        <input
          type={type}
          id={id || name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputStyles}
        />
      )}
    </div>
  );
};

export default NeonInput;