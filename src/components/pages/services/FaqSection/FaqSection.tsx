'use client';
import { Accordion, AccordionItem } from '@heroui/accordion';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

import faqData from '@/mockData/FaqData.json';

import s from './styles.module.scss';
import { Button } from '@/components/common/Button/Button';

export const FaqSection = () => {
  return (
    <section className={s.faqSection}>
      <AppContainer>
        <Typography variant={'h2'} className={s.sectionTitle}>
          Häufig gestellte Fragen{' '}
          <Typography variant={'decorSpan'}>(FAQ)</Typography>
        </Typography>

        <Accordion
          variant="light"
          selectionMode="multiple"
          className={s.accordion}
          itemClasses={{
            base: s.base,
            content: s.content,
            heading: s.heading,
            trigger: s.trigger,
            title: s.title
          }}
        >
          {faqData.map(({ name, text }, i) => (
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
      </AppContainer>
    </section>
  );
};
