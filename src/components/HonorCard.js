export default function HonorCard(props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="w-full md:w-2/3 mx-auto bg-dark-100 rounded-md py-4 px-4 flex flex-col items-center"
    >
      <div className="mt-2">
        <h1 className="font-bold md:text-xl">{props.name}</h1>
        <p className="font-light md:text-lg">{props.issued}</p>
        <p className="font-light text-gray-400">{props.desc}</p>
      </div>
    </div>
  );
}
