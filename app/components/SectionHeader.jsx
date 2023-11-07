const SectionHeader = ({ title, titleTwo }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold lg:text-5xl text-primary">
        {title} <br />
        <span className="text-secondary">{titleTwo}</span>
      </h1>
    </div>
  );
};

export default SectionHeader;
