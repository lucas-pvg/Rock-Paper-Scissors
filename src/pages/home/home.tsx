import { Title } from '../../components/title/title'
import { Game } from '../../features/game/game'
import { ScrollText } from '../../components/scroll-text/scroll-text'
import styles from './home.module.css'

interface HomeProps {}

export function Home({}: HomeProps) {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Title className={styles['title-grid']} />
        <Game />
        <ScrollText className={styles['scroll-grid']} direction='down' />
      </div>
    </div>
  )
}
