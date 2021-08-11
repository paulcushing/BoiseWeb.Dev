import Person from "./person";
import peopleData from "./peopleData.json";

export default function People() {
  return peopleData.map((person, index) => {
    return <Person person={person} key={index} />;
  });
}
