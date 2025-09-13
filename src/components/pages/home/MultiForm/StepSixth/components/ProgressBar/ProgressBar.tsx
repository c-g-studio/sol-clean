// components/ProgressComparison.tsx
import { FC, useLayoutEffect, useRef, useState } from 'react';
import s from './styles.module.scss';
// import { string } from 'zod';

type Props = {
    years: number;
    withCleaning: number;
    withoutCleaning: number;
    layout?: 'horizontal' | 'vertical'; // вибір варіанту відображення
};

export const ProgressComparison: FC<Props> = ({
    years,
    withCleaning,
    withoutCleaning,
    layout = 'horizontal'
}) => {
    const withCleaningRef = useRef<HTMLDivElement | null>(null);
    const withoutCleaningRef = useRef<HTMLDivElement | null>(null);

    const [widthWithCleaningEl, setWidthWithCleaningEl] = useState<number>(0)

    const percent = Math.min(
        100,
        Math.round((withCleaning / withoutCleaning) * 100)
    );


    useLayoutEffect(() => {
        if (!withoutCleaningRef.current) return;

        const el = withoutCleaningRef.current;

        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                const baseWidth = entry.contentRect.width;
                setWidthWithCleaningEl((baseWidth * percent) / 100);
            }
        });

        observer.observe(el);

        return () => observer.disconnect();
    }, [percent]);

    return (
        <div className={`${s.wrapper} ${s[layout]}`}>
            <div className={s.header}>
                {/* <Typography variant="body3" className={s.title}> */}
                <span>Reinigungszyklus</span>
                <span className={s.years}> {years} Jahre</span>
                {/* </Typography> */}
            </div>

            {layout === 'horizontal' ? (
                <div className={s.barWrapper}>
                    <div className={s.bar}>
                        <div className={s.barFill} style={{ width: `${percent}%` }}>
                            <div className={s.innerMark}></div>
                        </div>
                        <div className={s.utterMark}></div>
                    </div>
                    <div className={s.values}>
                        <div
                            ref={withCleaningRef}
                            className={s.valueLeft}
                            style={{ position: 'absolute', right: `calc(${100 - percent}% + 10px)`, bottom: 0 }}
                        >
                            <span className={s.label}>mit Reinigung</span>
                            <span className={s.amount}>
                                {withCleaning.toLocaleString('de-DE', {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 2
                                })}{' '}
                                €
                            </span>
                        </div>
                        <div ref={withoutCleaningRef} className={s.valueRight}
                            style={{ position: 'absolute', right: `10px`, bottom: 0 }}>
                            <span className={s.label}>ohne Reinigung</span>
                            <span className={s.amount}>
                                {withoutCleaning.toLocaleString('de-DE', {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 2
                                })}{' '}
                                €
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={s.verticalValues}>
                    <div className={s.verticalItem}>
                        <div
                            className={s.colorBoxYellow}
                            style={{ width: `${widthWithCleaningEl}px` }}
                        ></div>
                        <div>
                            <span className={s.label}>mit Reinigung</span>
                            <span className={s.amount}>
                                {withCleaning.toLocaleString('de-DE', {
                                    minimumFractionDigits: 2
                                })}{' '}
                                €
                            </span>
                        </div>
                    </div>
                    <div className={s.verticalItem}>
                        <div
                            ref={withoutCleaningRef}
                            className={s.colorBoxLight}
                            style={{ width: "50%" }}
                        ></div>
                        <div>
                            <span className={s.label}>ohne Reinigung</span>
                            <span className={s.amount}>
                                {withoutCleaning.toLocaleString('de-DE', {
                                    minimumFractionDigits: 2
                                })}{' '}
                                €
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
