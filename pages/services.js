import Stack from "../lib/contentstack";

export async function getStaticProps() {
  const response = await Stack.ContentType('services')
    .Query()
    .toJSON()
    .find();

  const servicesData = response[0];

  return {
    props: { servicesData },
  };
}

export default function Services({ servicesData }) {
  return (
    <div>
      <h1>{servicesData.title}</h1>
      
      <div>
        {servicesData.services.map((service, index) => (
          <div key={index}>
            <h2>{service.service_name}</h2>
            <p>{service.description}</p>
            <p>Price: {service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
