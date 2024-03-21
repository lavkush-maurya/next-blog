export default function Todo() {
  return (
    <div className={styles.container}>
      <iframe
        title="todo"
        src="https://todo-nextjs2023.vercel.app/"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  )
}

const styles = {
  container: 'flex flex-col items-center justify-center pt-4 md:pt-10 xl:pt-20',
}
