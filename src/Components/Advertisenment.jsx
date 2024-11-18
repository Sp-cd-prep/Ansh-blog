import React, { useState } from "react";

const AdItem = ({ description, imageUrl }) => (
  <div className="ad-item">
    <img src={imageUrl} alt="Ad" className="ad-image" />
    {description && <p className="ad-description">{description}</p>}
  </div>
);

const Advertisenment = ({visibleAD}) => {
  // const [visible, setVisible] = useState(3); // Controls visible ads

  const addddata = [
    {
      id: 1,
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/aa691d189901215.Y3JvcCwxMTA4LDg2NywxNDUsMzI.jpg",
    },
    {
      id: 2,
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/aa691d189901215.Y3JvcCwxMTA4LDg2NywxNDUsMzI.jpg",
    },
    {
      id: 3,
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/aa691d189901215.Y3JvcCwxMTA4LDg2NywxNDUsMzI.jpg",
    },
    {
      id: 4,
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/aa691d189901215.Y3JvcCwxMTA4LDg2NywxNDUsMzI.jpg",
    },
    {
      id: 5,
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/aa691d189901215.Y3JvcCwxMTA4LDg2NywxNDUsMzI.jpg",
    },
    {
      id: 6,
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/aa691d189901215.Y3JvcCwxMTA4LDg2NywxNDUsMzI.jpg",
    },
    {
      id: 7,
      title: "Ad Title 7",
  
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/aa691d189901215.Y3JvcCwxMTA4LDg2NywxNDUsMzI.jpg",
    },
    {
      id: 8,
      title: "Ad Title 8",
  
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/aa691d189901215.Y3JvcCwxMTA4LDg2NywxNDUsMzI.jpg",
    },
    {
      id: 9,
      title: "Ad Title 9",
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/aa691d189901215.Y3JvcCwxMTA4LDg2NywxNDUsMzI.jpg",
    },
  ];

  return (
    <div className="Advertisement">
      <h1>Advertisements</h1>
      {addddata.slice(0, visibleAD).map((ad) => (
        <AdItem
          key={ad.id}
          imageUrl={ad.imageUrl}
        />
      ))}
    </div>
  );
};

export default Advertisenment;





