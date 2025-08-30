import { Ref } from 'react';
import { Control, Controller, FieldErrors, FieldValues, Path, UseFormWatch } from 'react-hook-form';
import { useMask } from '@react-input/mask';

import { Input } from '@/components/common/formUI/Input/Input';
import { Error } from '@/components/common/formUI/Error/Error';
import s from './styles.module.scss';

type RadioOption = 'E-Mail-Adresse' | 'Telefonnummer' | 'WhatsApp';

type ContactMethodInputProps<T extends FieldValues> = {
    control: Control<T>;
    errors: FieldErrors<T>;
    nameContactMethod: Path<T>;
    nameContactInfo: Path<T>;
    dirtyFields: Partial<Record<keyof T, boolean>>;
    isSubmitted: boolean;
    maskRef?: Ref<HTMLInputElement>;
    labelClassName?: string;
    watch: UseFormWatch<T>;
};

export const ContactMethodInput = <T extends FieldValues>({
    control,
    errors,
    nameContactMethod,
    nameContactInfo,
    dirtyFields,
    isSubmitted,
    labelClassName,
    watch
}: ContactMethodInputProps<T>) => {

    const isPhone =
        watch(nameContactMethod) === 'Telefonnummer' ||
        watch(nameContactMethod) === 'WhatsApp';

    const inputType = isPhone ? 'tel' : 'email';

    const inputRef = useMask({
        mask: '+49 ___-___-__-__',
        replacement: { _: /\d/ }
    });


    return (
        <div className={s.contactMethodWrapper}>
            <p className={s.radioQuestion}>
                Wählen Sie, wie wir Sie zur Terminbestätigung kontaktieren dürfen.
            </p>

            <Controller
                name={nameContactMethod}
                control={control}
                render={({ field }) => (
                    <div className={s.radioGroup}>
                        {(['E-Mail-Adresse', 'Telefonnummer', 'WhatsApp'] as RadioOption[]).map(option => (
                            <label
                                key={option}
                                className={`${s.radioLabel} ${field.value === option ? s.active : ''}`}
                                onChange={() => {
                                    field.onChange(option)
                                }
                                }
                            >
                                <input
                                    type="radio"
                                    value={option}
                                    checked={field.value === option}
                                    onChange={() => {
                                        field.onChange(option)
                                    }
                                    }
                                />
                                {option}
                            </label>
                        ))}
                        <Error name={nameContactMethod} errors={errors} />
                    </div>
                )}
            />
            <Input<T>
                maskRef={isPhone ? inputRef : undefined} // якщо телефон — передаємо маску
                name={nameContactInfo}
                control={control}
                errors={errors}
                dirtyFields={dirtyFields}
                isSubmitted={isSubmitted}
                labelName=""
                labelClassName={labelClassName}
                placeholder={isPhone ? "+49" : "@gmail.com"}
                type={inputType}
                autoComplete={isPhone ? "tel" : "email"}
            />
        </div>
    );
};
