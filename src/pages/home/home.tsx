import { Title } from '../../components/title/title'
import { Field } from '../../components/field/field'
import { Button } from '../../components/button/button'
import { Objects } from '../../components/objects/objects'
import { ScrollText } from '../../components/scroll-text/scroll-text'
import styles from './home.module.css'

interface HomeProps {}

export function Home({}: HomeProps) {
  return (
    <div className={styles.home}>
      <div className={styles.grid}>
        <Title className={styles['title-grid']} />
        <Field className={styles['field-grid']} />

        <Button className={styles['rock-grid']} variant='card'>
          <Objects type='rock' size={80} />
        </Button>

        <Button className={styles['paper-grid']} variant='card'>
          <Objects type='paper' size={60} />
        </Button>

        <Button className={styles['scissors-grid']} variant='card'>
          <Objects type='scissors' size={70} />
        </Button>

        <ScrollText className={styles['scroll-grid']} direction='down' />
      </div>
    </div>
  )
}
