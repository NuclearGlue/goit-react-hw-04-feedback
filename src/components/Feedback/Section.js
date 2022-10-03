import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section_title">{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
