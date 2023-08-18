const ListItems = ({ number, text, description }) => {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
      <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
            {number}
          </div>
          <h3 className="text-base font-bold md:mb-4 md:hidden">{text}</h3>
        </div>
      </div>
      <div>
        <h3 className="hidden mb-4 text-lg font-bodl md:block">{text}</h3>
        <p className="text-darkGrayishBlue">{description}</p>
      </div>
    </div>
  );
};

export default ListItems;
