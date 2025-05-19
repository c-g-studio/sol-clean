export const StepThird = ({ onBack, data }) => {
  return (
    <div>
      <h2>Шаг 3: Подтверждение</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={onBack}>Назад</button>
      <button onClick={() => alert('Данные отправлены!')}>Отправить</button>
    </div>
  );
};
