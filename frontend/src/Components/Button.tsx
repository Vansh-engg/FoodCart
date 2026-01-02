type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  label,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`hidden md:block bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full font-medium text-white transition ${className}`}
    >
      {label}
    </button>
  );
}
