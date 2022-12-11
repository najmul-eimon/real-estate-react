import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../../components/propertyDetails/Details";
import RelatedProperties from "../../components/propertyDetails/RelatedProperties";
import Breadcrumb from "../../components/shared/Breadcrumb";
import { properties } from "../../data/property";

const PropertyDetails = () => {
  const { propertyId } = useParams();

  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    if (propertyId) {
      setSingleData(properties.find(({id}) => id === propertyId));
    }
  }, [propertyId, singleData]);

  useEffect(() => {
    document.title = "Real Estate | Property Details";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Breadcrumb
        data={[
          {
            label: "Property",
            link: "/property",
          },
        ]}
        activePage="Property Details"
      />
      <Details data={singleData} />
      <RelatedProperties />
    </>
  );
};

export default PropertyDetails;
