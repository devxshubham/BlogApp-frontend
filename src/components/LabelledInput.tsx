import { ChangeEvent } from "react";

interface LabelledInputType {
  label : string,
  type: string | "text";
  placeholder: string | "";
  onchange : ( e : ChangeEvent<HTMLInputElement>)  => void;
}

function LabelledInput({
  label,
  type,
  placeholder,
  onchange,
}: LabelledInputType) {
  return (
    <div>
      <h4 className="font-semibold">{label}</h4>
      <input
        className="bg-transparent border-[2px] px-7 py-1 text-start rounded"
        onChange={onchange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default LabelledInput;
