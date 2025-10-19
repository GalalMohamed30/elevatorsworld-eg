export default function TitleComponents({ Titel }) {
  return (
    <div className="text-center">
      <h1 className="text-[35px] font-bold text-TextColor">{Titel}</h1>
      <hr className="w-[30px] mx-auto h-[5px] bg-MainColor rounded-md " />
    </div>
  );
}
