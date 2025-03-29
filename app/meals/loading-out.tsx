import style from './loading.module.css'
export default function MealsLoadingPage() {
  return (
    <p className={style.loading}>
      fetching meals ...
    </p>
  )
}
