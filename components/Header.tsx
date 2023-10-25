const Header = () => {
  const formatter = new Intl.DateTimeFormat()
  const { timeZone } = formatter.resolvedOptions()
  return (
    <div className="pt-[25px] pb-[15px]">
      <h1 className="font-bold text-[30px] pb-[25px]">
        MAQE Forum
      </h1>
      <div className="text-[14px]">
        {`Your current timezone is: ${timeZone}`}
      </div>
    </div>
  )
}

export default Header