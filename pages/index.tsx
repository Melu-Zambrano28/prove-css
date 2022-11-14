import { Button } from '../components/button/Button'

const setTheme = (theme: 'dark' | 'light') => {
  localStorage.setItem('theme-preference', theme)
  document.body.dataset.theme = theme
}

export default function Home() {
  return (
    <div>
      <Button btnType="primary" onClick={() => setTheme('light')}>
        Accendi
      </Button>
      <Button btnType="tertiary" onClick={() => setTheme('dark')}>
        Spegni
      </Button>
      <Button btnType="secondary" ghost onClick={() => undefined}>
        secondary
      </Button>
    </div>
  )
}
