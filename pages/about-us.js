import Stack from "../lib/contentstack";

export async function getStaticProps() {
  const response = await Stack.ContentType('about_us')
    .Query()
    .toJSON()
    .find();

  const aboutUsData = response[0];

  return {
    props: { aboutUsData },
  };
}

export default function AboutUs({ aboutUsData }) {
  return (
    <div>
      <h1>{aboutUsData.title}</h1>
      <h2>Our Mission</h2>
      <div dangerouslySetInnerHTML={{ __html: aboutUsData.mission }} />
      
      <h2>Meet the Team</h2>
      <div>
        {aboutUsData.team_members.map((member, index) => (
          <div key={index}>
            <h3>{member.name} - {member.role}</h3>
            <img src={member.image.url} alt={member.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
