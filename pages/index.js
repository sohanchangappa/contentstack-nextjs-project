import Stack from "../lib/contentstack";

export async function getStaticProps() {
  const response = await Stack.ContentType('home_page')
    .Query()
    .toJSON()
    .find();

  console.log(response);
  const homePageData = response[0];  // Assuming there's at least one entry

  return {
    props: { homePageData },
  };
}

export default function HomePage({ homePageData }) {
  return (
    <div>
      <h1>{homePageData.title}</h1>
      <img src={homePageData.banner_image.url} alt="Banner" />
      <div dangerouslySetInnerHTML={{ __html: homePageData.description }} />
    </div>
  );
}
