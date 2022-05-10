export const Input = ({
  placeholder,
  name,
  type,
  value,
  isDanger,
  error,
  onChange,
}) => {
  return (
    <div className="w-full">
      <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-2 w-full rounded-xl p-2 outline-none bg-transparent border-1 text-sm white-glassmorphism ${
          isDanger ? "border-rose-600" : "border-gray"
        }`}
      />
      <span className="text-xs text-rose-600 lowercase">{error}</span>
    </div>
  );
};
