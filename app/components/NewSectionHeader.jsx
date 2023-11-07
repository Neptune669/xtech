const NewSectionHeader = ({ title, titleTwo }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center lg:text-[3.5rem] text-primary">
        {title} <br />
        <span className="lg:text-6xl text-secondary">{titleTwo}</span>
      </h1>
    </div>
  );
};

export default NewSectionHeader;
