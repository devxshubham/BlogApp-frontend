function Banner(props : {children: React.ReactNode}) {
  return (
    <div className="h-[50px] flex gap-2 justify-center items-center bg-gradient-to-r from-yellow-100 to-yellow-500">
      {props.children}
    </div>
  );
}

export default Banner;
