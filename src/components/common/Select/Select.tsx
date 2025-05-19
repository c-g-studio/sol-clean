import React, { ComponentPropsWithoutRef, ForwardedRef } from 'react';
import { Select as S } from 'radix-ui';
import { SelectProps } from '@radix-ui/react-select';
import classnames from 'classnames';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@radix-ui/react-icons';

import styles from './styles.module.css';

interface CustomSelectProps extends SelectProps {
  data: Array<{
    value: string;
    label: string;
  }>;
  placeholder: string;
  ariaLabel: string;
}

const SelectItem = React.forwardRef(
  (
    { children, className, ...props }: ComponentPropsWithoutRef<typeof S.Item>,
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <S.Item
        className={classnames(styles.Item, className)}
        {...props}
        ref={forwardedRef}
      >
        <S.ItemText>{children}</S.ItemText>

        <S.ItemIndicator className={styles.ItemIndicator}>
          <CheckIcon />
        </S.ItemIndicator>
      </S.Item>
    );
  }
);

export const Select = ({
  ariaLabel,
  placeholder,
  data,
  ...props
}: CustomSelectProps) => (
  <S.Root {...props}>
    <S.Trigger className={styles.Trigger} aria-label={ariaLabel}>
      <S.Value placeholder={placeholder} />
      <S.Icon className={styles.Icon}>
        <ChevronDownIcon />
      </S.Icon>
    </S.Trigger>

    <S.Portal>
      <S.Content className={styles.Content}>
        <S.ScrollUpButton className={styles.ScrollButton}>
          <ChevronUpIcon />
        </S.ScrollUpButton>

        <S.Viewport className={styles.Viewport}>
          {data.map(item => (
            <SelectItem
              key={item.value}
              value={item.value}
              className={styles.Item}
            >
              {item.label}
            </SelectItem>
          ))}
        </S.Viewport>

        <S.ScrollDownButton className={styles.ScrollButton}>
          <ChevronDownIcon />
        </S.ScrollDownButton>
      </S.Content>
    </S.Portal>
  </S.Root>
);
