// import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';

export const HeroStatement = () => {
    return (
        <section className={s.section}>
            {/* <AppContainer> */}
            <div className={s.wrapper}>
                <Typography variant="h2" className={s.title}>
                    Sol - Clean Vision <span className={s.titleAccent}>360°</span>
                </Typography>
                <Typography variant="body2" className={s.subtitle}>
                    Ihr Solar Service Partner – alles aus einer Hand
                </Typography>
            </div>
            {/* </AppContainer> */}
        </section>
    );
};
