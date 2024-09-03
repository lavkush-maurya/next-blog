export default function Todo() {
  return (
    <div className={styles.container}>
      <iframe
        src="https://todo-nextjs2023.vercel.app/"
        className={styles.iframe}
        title="Todo App"
        allowFullScreen
      />
    </div>
  );
}

const styles = {
  container: 'flex flex-col items-center justify-center pt-4 md:pt-10 xl:pt-20 w-full',
  iframe: 'w-full h-96 md:h-[500px] lg:h-[600px] xl:h-[700px] border-none',
};
