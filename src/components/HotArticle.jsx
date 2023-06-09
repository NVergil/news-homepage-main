const data = [
  {
    title: 'Reviving Retro PCs',
    content: 'What happens when old PCs are given modern upgrades?',
    img: '/image-retro-pcs.jpg',
  },
  {
    title: 'Top 10 Laptops of 2022',
    content: 'Our best picks for various needs and budgets.',
    img: '/image-top-laptops.jpg',
  },
  {
    title: 'The Growth of Gaming',
    content: 'How the pandemic has sparked fresh opportunities.',
    img: '/image-gaming-growth.jpg',
  }
]

const HotArticle = () => {

  return (
    <>
      {
        data.map(({title, content, img}, i) => (
          <article key={i} className="_5">
            <picture>
              <img src={img} alt={title} />
            </picture>
            <div>
              <span>0{i + 1}</span>
              <h4>{title}</h4>
              <p>{content}</p>
            </div>
          </article>
        ))
      }
    </>
  );
};

export default HotArticle;
