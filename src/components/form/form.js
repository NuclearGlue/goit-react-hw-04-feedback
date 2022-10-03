const Form = ({}) => {
  return (
    <div>
      <section class="section">
        <h2 class="section_title">Please leave feedback</h2>
        <button type="button" class="feedback__button">
          good
        </button>
        <button type="button" class="feedback__button">
          neutral
        </button>
        <button type="button" class="feedback__button">
          bad
        </button>
      </section>
      <section class="section">
        <h2 class="section_title">Statistics</h2>
        <ul class="statistics__list">
          <li class="statictics__item">Good: 1</li>
          <li class="statictics__item">Neutral: 0</li>
          <li class="statictics__item">Bad: 0</li>
          <li class="statictics__item">Total: 1</li>
          <li class="statictics__item">Positive feedback: 100%</li>
        </ul>
      </section>
    </div>
  );
};

export default Form;
