import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface IPhoneInputProps {
  header: string;
  value: string;
  setValue: (value: string) => void;
}

const CustomPhoneInput = ({header, value, setValue}: IPhoneInputProps) => {
  return (
    <div>
      <div>
        {header}
      </div>
      <PhoneInput
        country={'am'}
        value={value}
        onChange={(phone) => setValue(phone)}
        inputClass='text-black'
      />
    </div>
  );
};

export default CustomPhoneInput;