interface Props {
  src: string;
  border: string;
}

function Avatar({ src, border }: Props) {
  return (
    <img
      src={src}
      width={28}
      className="inline rounded-full"
      style={border ? { border: "2px solid", borderColor: border } : {}}
    />
  );
}

export default Avatar;
