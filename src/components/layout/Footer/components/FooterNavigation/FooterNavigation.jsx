import Link from 'next/link';

import navigationData from '@/mockData/navigationData.json';

import s from './styles.module.scss';

export const FooterNavigation = () => {
  return (
    <nav>
      <ul className={s.footerNavList}>
        {navigationData.map(item => {
          return (
            <li key={item.name}>
              <Link
                href={item.link}
                title={`Link naar pagina ${item.name}`}
                className={s.footerNavLink}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
