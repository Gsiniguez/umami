import LanguageButton from 'components/input/LanguageButton';
import SettingsButton from 'components/input/SettingsButton';
import ThemeButton from 'components/input/ThemeButton';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        {/* <Link href="https://umami.is" target="_blank" className={styles.title}>
          <Icon size="lg">
            <Icons.Logo />
          </Icon>
          <Text>umami</Text>
        </Link> */}
      </div>
      <div className={styles.buttons}>
        <ThemeButton />
        <LanguageButton />
        <SettingsButton />
      </div>
    </header>
  );
}

export default Header;
