import { useState, Ref } from 'react';
import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { Input } from '@/components/common/formUI/Input/Input';
import { useMask } from '@react-input/mask';
import s from './styles.module.scss';

type RadioOption = 'E-Mail-Adresse' | 'Telefonnummer' | 'WhatsApp';

type ContactMethodInputProps<T extends FieldValues> = {
    control: Control<T>;
    errors: FieldErrors<T>;
    name: Path<T>;
    dirtyFields: Partial<Record<keyof T, boolean>>;
    isSubmitted: boolean;
    maskRef?: Ref<HTMLInputElement>;
    labelClassName?: string;
};

export const ContactMethodInput = <T extends FieldValues>({
    control,
    errors,
    name,
    dirtyFields,
    isSubmitted,
    labelClassName
}: ContactMethodInputProps<T>) => {
    const [selectedOption, setSelectedOption] = useState<RadioOption>('E-Mail-Adresse');
    console.log('selectedOption: ', selectedOption);

    const isPhone = selectedOption === 'Telefonnummer' || selectedOption === 'WhatsApp';
    const inputType = isPhone ? 'tel' : 'email';

    const inputRef = useMask({
        mask: '+49 ___-___-__-__',
        replacement: { _: /\d/ }
    });
    console.log('inputRef: ', inputRef);


    return (
        <div className={s.contactMethodWrapper}>
            <p className={s.radioQuestion}>
                Wählen Sie, wie wir Sie zur Terminbestätigung kontaktieren dürfen.
            </p>

            <div className={s.radioGroup}>
                {(['E-Mail-Adresse', 'Telefonnummer', 'WhatsApp'] as RadioOption[]).map(option => (
                    <label

                        key={option}
                        className={`${s.radioLabel} ${selectedOption === option ? s.active : ''}`}
                        onClick={() => setSelectedOption(option)}
                    >


                        <input
                            type="radio"
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => setSelectedOption(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>
            <Input<T>
                maskRef={isPhone ? inputRef : undefined} // якщо телефон — передаємо маску
                name={name}
                control={control}
                errors={errors}
                dirtyFields={dirtyFields}
                isSubmitted={isSubmitted}
                labelName=""
                labelClassName={labelClassName}
                placeholder={isPhone ? "+49" : "@gmail.com"}
                type={inputType}
            />
        </div>
    );
};
