import React from "react";

const AdItem = ({imageUrl }) => (
  <div className="ad-item">
    <img src={imageUrl} alt="Ad" className="ad-image" />
  </div>
);

const CompAdd = () => {
  const addddata = [
    {
      id: 1,
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/aa691d189901215.Y3JvcCwxMTA4LDg2NywxNDUsMzI.jpg",
    }
  ];

  return (
    <div className="Advertisement">
      <h1>Advertisements</h1>
      {addddata.slice(0, 1).map((ad) => (
        <AdItem
          key={ad.id}
          imageUrl={ad.imageUrl}
        />
      ))}
    </div>
  );
};

export default CompAdd;





