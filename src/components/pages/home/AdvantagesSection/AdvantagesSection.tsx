import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';

export const AdvantagesSection = () => {
  return (
    <section className={s.section}>
      <AppContainer>
        <ul className={s.list}>
          <li className={s.listItem}>
            <Typography variant={'p'} className={s.listItemTitle}>
              431 <span className={s.listItemTitleSpan}>M.€</span>
            </Typography>
            <Typography variant={'p'} className={s.listItemText}>
              Jährlicher Ertragsverlust durch verschmutzte PV-Anlagen
            </Typography>
          </li>
          <li className={s.listItem}>
            <Typography variant={'p'} className={s.listItemTitle}>
              12,2 <span className={s.listItemTitleSpan}>%</span>
            </Typography>
            <Typography variant={'p'} className={s.listItemText}>
              Anteil des PV erzeugten Stroms an der Gesamterzeugung
            </Typography>
          </li>
          <li className={s.listItem}>
            <Typography variant={'p'} className={s.listItemTitle}>
              81,2 <span className={s.listItemTitleSpan}>M.kW</span>
            </Typography>
            <Typography variant={'p'} className={s.listItemText}>
              Installierte PV Leistung in Deutschland
            </Typography>
          </li>
        </ul>
      </AppContainer>
    </section>
  );
};
