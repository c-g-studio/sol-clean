import * as React from 'react';
import { FC } from 'react';
import * as Check from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import styles from './styles.module.css';

type TCheckboxProps = {
  label: string;
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export const Checkbox: FC<TCheckboxProps> = ({
  label,
  id,
  checked,
  onCheckedChange
}) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Check.Root
      className={styles.Root}
      id={id}
      checked={checked}
      onCheckedChange={onCheckedChange}
    >
      <Check.Indicator className={styles.Indicator}>
        <CheckIcon className={styles.checkIcon} />
      </Check.Indicator>
    </Check.Root>
    <label className={styles.Label} htmlFor={id}>
      {label}
    </label>
  </div>
);
