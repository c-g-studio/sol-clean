import { AppContainer } from '@/components/common/AppContainer/AppContainer';

import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';
import { LeftArrowIcon } from '@/components/icons/letsTalkSection/LeftArrowIcon';
import { AirplaneIcon } from '@/components/icons/letsTalkSection/AirplaneIcon';

import s from './styles.module.scss';
import { RightArrowIcon } from '@/components/icons/letsTalkSection/RightArrowIcon';

export const LetsTalkSection = () => {
  return (
    <section className={s.letsTalkSection}>
      {' '}
      <LeftArrowIcon className={s.leftArrowIcon} />
      <AirplaneIcon className={s.airplaneIcon} />
      <AppContainer classes={s.letsTalkContainer}>
        <Typography variant={'h2'} className={s.letsTalkSectionTitle}>
          Lass uns anfangen
        </Typography>
        <div className={s.buttonWrapper}>
          <Button
            variant={'primary'}
            buttonType={'buttonLink'}
            href={'#calculatorSection'}
            className={s.letsTalkSectionButton}
          >
            Wirtschaftlichkeitsrechnung
          </Button>
          <RightArrowIcon className={s.RightArrowIcon} />
        </div>
      </AppContainer>
    </section>
  );
};
