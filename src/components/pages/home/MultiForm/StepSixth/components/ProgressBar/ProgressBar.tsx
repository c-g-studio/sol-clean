// components/ProgressComparison.tsx
import { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
    years: number;
    withCleaning: number;
    withoutCleaning: number;
    layout?: "horizontal" | "vertical"; // вибір варіанту відображення
};

export const ProgressComparison: FC<Props> = ({
    years,
    withCleaning,
    withoutCleaning,
    layout = "horizontal",
}) => {
    const percent = Math.min(
        100,
        Math.round((withCleaning / withoutCleaning) * 100)
    );

    return (
        <div className={`${styles.wrapper} ${styles[layout]}`}>
            <div className={styles.header}>
                <span>Reinigungszyklus</span>
                <span className={styles.years}>{years} Jahre</span>
            </div>

            {layout === "horizontal" ? (
                <div className={styles.barWrapper}>
                    <div className={styles.bar}>
                        <div
                            className={styles.barFill}
                            style={{ width: `${percent}%` }}
                        />
                    </div>
                    <div className={styles.values}>
                        <div className={styles.valueLeft}>
                            <span className={styles.label}>mit Reinigung</span>
                            <span className={styles.amount}>
                                {withCleaning.toLocaleString("de-DE", {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 2,
                                })}{" "}
                                €
                            </span>
                        </div>
                        <div className={styles.valueRight}>
                            <span className={styles.label}>ohne Reinigung</span>
                            <span className={styles.amount}>
                                {withoutCleaning.toLocaleString("de-DE", {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 2,
                                })}{" "}
                                €
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.verticalValues}>
                    <div className={styles.verticalItem}>
                        <div className={styles.colorBoxYellow}></div>
                        <div>
                            <span className={styles.label}>mit Reinigung</span>
                            <span className={styles.amount}>
                                {withCleaning.toLocaleString("de-DE", {
                                    minimumFractionDigits: 2,
                                })}{" "}
                                €
                            </span>
                        </div>
                    </div>
                    <div className={styles.verticalItem}>
                        <div className={styles.colorBoxLight}></div>
                        <div>
                            <span className={styles.label}>ohne Reinigung</span>
                            <span className={styles.amount}>
                                {withoutCleaning.toLocaleString("de-DE", {
                                    minimumFractionDigits: 2,
                                })}{" "}
                                €
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
