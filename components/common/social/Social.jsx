const Social = () => {
  const socialContent = [
    { id: 1, icon: "icon-facebook", link: "https://www.facebook.com/bookroyalvillas" },
    { id: 2, icon: "icon-twitter", link: "https://twitter.com/bookroyalvillas" },
    { id: 3, icon: "icon-instagram", link: "https://www.instagram.com/bookroyalvillas/" },
    { id: 4, icon: "icon-linkedin", link: "https://www.linkedin.com/in/book-royal-villas-a27a941a0" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <i className={`${item.icon} text-14`} />
        </a>
      ))}
    </>
  );
};

export default Social;
