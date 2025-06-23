'use client';

import { FC } from 'react';
import { Accordion, AccordionItem } from '@heroui/accordion';

import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';

import s from './styles.module.scss';

type customAccordionProps = {
  data: {
    name: string;
    text: string;
  }[];
};

export const CustomAccordion: FC<customAccordionProps> = ({ data }) => {
  return (
    <Accordion
      variant="light"
      selectionMode="multiple"
      hideIndicator={true}
      className={s.accordion}
      itemClasses={{
        base: s.base,
        content: s.content,
        heading: s.heading,
        trigger: s.trigger,
        title: s.title
      }}
    >
      {data.map(({ name, text }, i) => (
        <AccordionItem
          key={i}
          aria-label={`Accordion ${i}`}
          className={s.accordionItem}
          title={
            <Typography variant={'h3'} className={s.itemTitle}>
              {
                <span className={s.headerWrapper}>
                  <span>{name}</span>
                  <Button
                    buttonType={'buttonDiv'}
                    className={s.accordionButton}
                  >
                    Mehr lesen
                  </Button>
                </span>
              }
            </Typography>
          }
        >
          {
            <Typography variant={'body1'} className={s.itemText}>
              {text}
            </Typography>
          }
        </AccordionItem>
      ))}
    </Accordion>
  );
};
