type Props = {
  name: string;
  description?: string;
  image: string;
};

export const ClassCard = ({ name, description, image }: Props) => (
  <li className="relative mx-5 inline-block h-[380px] w-[450px]">
    <div className="absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 p-5 text-center text-white opacity-0 transition duration-500 hover:opacity-90">
      <p className="text-2xl">{name}</p>
      <p className="mt-5">{description}</p>
    </div>
    <img alt={`${image}`} src={image} />
  </li>
);
