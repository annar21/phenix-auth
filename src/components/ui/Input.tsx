import clsx from "clsx";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  header: string;
  className?: string;
}

const Input = ({type, placeholder, value, setValue, header, className}: InputProps) => {
  return (
    <div className="w-full">
      <div>
        {header}
      </div>
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={clsx(
          'rounded-md p-2 text-black w-full placeholder:text-sm border transition-all duration-50 border-purple-900 focus:border-[2px]',
          className,
        )}
      />
    </div>
  )
}

export default Input;