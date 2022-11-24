import '../App.css';

export function Home() {
  return (
    <div className="container">
      <div>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
          finibus tincidunt. Morbi in porttitor lectus. Cras volutpat dapibus
          velit, posuere efficitur nulla fringilla vitae. Donec a turpis massa.
          Mauris lacinia tortor sed sapien lobortis, non tempor metus rhoncus.
          Morbi vel augue imperdiet, vulputate ex sed, vestibulum urna. Aenean
          tincidunt rutrum rutrum.
        </p>
      </div>
      <div>
        <img
          src="https://image.jimcdn.com/app/cms/image/transf/none/path/s878428ddc59ffbe0/image/i2f49399bbcc5aee0/version/1643228889/image.jpg"
          className="img-home"
        />
      </div>
    </div>
  );
}
